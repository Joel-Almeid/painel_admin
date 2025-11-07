import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("awiredigital@gmail.com");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Implementar autenticação real com Firebase
    // Por enquanto, simulação de login
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para o painel administrativo...",
        });
        
        // Redireciona internamente para /admin usando React Router
        setTimeout(() => {
          navigate("/admin");
        }, 500);
      } else {
        toast({
          title: "Erro no login",
          description: "Por favor, preencha todos os campos.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="h-20 w-20 rounded-2xl bg-accent mx-auto mb-6 flex items-center justify-center">
            <span className="text-3xl font-bold text-accent-foreground">AW</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Painel Administrativo</h1>
          <p className="text-muted-foreground">Faça login para acessar o sistema</p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-secondary px-4 py-12">
        <div className="w-full max-w-md bg-card rounded-lg shadow-2xl p-8 border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-semibold">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-muted"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="remember" 
                  checked={remember} 
                  onCheckedChange={(checked) => setRemember(checked as boolean)} 
                />
                <label htmlFor="remember" className="text-sm cursor-pointer">
                  Lembrar-me
                </label>
              </div>
              <a href="#" className="text-sm text-accent hover:underline">
                Esqueci minha senha
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
          </form>
        </div>
      </div>

      <div className="bg-primary py-6 text-center text-sm text-muted-foreground px-4">
        <p>© 2025 AWIRE DIGITAL - Todos os direitos reservados</p>
        <p className="mt-1">
          Problemas para acessar?{" "}
          <a href="mailto:awiredigital@gmail.com" className="text-accent hover:underline">
            Contate o administrador
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
