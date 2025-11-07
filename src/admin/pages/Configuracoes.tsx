import { Plus, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function Configuracoes() {
  // Mock data
  const categorias = ["Adornos", "Utilitários", "Decoração", "Instrumentos"];
  const aldeias = ["Canoanã", "Pimentel Barbosa", "São Marcos", "Sangradouro"];

  const handleAddCategoria = () => {
    toast.success("Categoria adicionada!");
  };

  const handleDeleteCategoria = (categoria: string) => {
    toast.success(`Categoria "${categoria}" excluída!`);
  };

  const handleAddAldeia = () => {
    toast.success("Aldeia adicionada!");
  };

  const handleDeleteAldeia = (aldeia: string) => {
    toast.success(`Aldeia "${aldeia}" excluída!`);
  };

  const handleSaveContent = () => {
    toast.success("Conteúdo atualizado com sucesso!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Configurações</h1>
        <p className="text-muted-foreground mt-1">Gerencie categorias, aldeias e conteúdos do site</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Categorias */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle>Categorias de Artesanato</CardTitle>
            <CardDescription>Adicione ou remova categorias</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Nova categoria..." />
              <Button onClick={handleAddCategoria} className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <Badge
                  key={categoria}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm bg-secondary/50 hover:bg-secondary/70 cursor-pointer group"
                >
                  {categoria}
                  <button
                    onClick={() => handleDeleteCategoria(categoria)}
                    className="ml-2 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Aldeias */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle>Aldeias/Origens</CardTitle>
            <CardDescription>Adicione ou remova aldeias</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Nova aldeia..." />
              <Button onClick={handleAddAldeia} className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {aldeias.map((aldeia) => (
                <Badge
                  key={aldeia}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm bg-secondary/50 hover:bg-secondary/70 cursor-pointer group"
                >
                  {aldeia}
                  <button
                    onClick={() => handleDeleteAldeia(aldeia)}
                    className="ml-2 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conteúdo da Página */}
      <Card className="shadow-card border-border/50">
        <CardHeader>
          <CardTitle>Conteúdo do Site</CardTitle>
          <CardDescription>Edite textos e informações das páginas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="sobre">Seção "Sobre o Projeto"</Label>
            <Textarea
              id="sobre"
              rows={4}
              placeholder="Texto sobre o projeto AWIRE DIGITAL..."
              defaultValue="O projeto AWIRE DIGITAL valoriza e divulga o artesanato indígena tradicional..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="como-funciona">Seção "Como Funciona?"</Label>
            <Textarea
              id="como-funciona"
              rows={4}
              placeholder="Explique como funciona o processo..."
              defaultValue="Conectamos artesãos indígenas diretamente com o público interessado..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contato">Informações de Contato</Label>
            <Input id="contato" placeholder="email@exemplo.com" defaultValue="contato@awiredigital.com" />
          </div>
          <Button onClick={handleSaveContent} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Salvar Alterações
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
