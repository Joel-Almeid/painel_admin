import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogIn, Package, Users, Image as ImageIcon } from "lucide-react";

const AdminEntry = () => {

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-6">
      <Card className="max-w-2xl w-full shadow-glow border-accent/30">
        <CardContent className="pt-12 pb-10 text-center space-y-8">
          <div className="space-y-4">
            <div className="h-20 w-20 rounded-2xl bg-accent mx-auto flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-accent-foreground">AW</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">AWIRE DIGITAL</h1>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Painel Administrativo para Gerenciamento de Artesanato Indígena
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 py-6">
            <div className="text-center space-y-2">
              <Package className="h-8 w-8 mx-auto text-accent" />
              <p className="text-sm text-muted-foreground">Artesanato</p>
            </div>
            <div className="text-center space-y-2">
              <Users className="h-8 w-8 mx-auto text-accent" />
              <p className="text-sm text-muted-foreground">Artesãos</p>
            </div>
            <div className="text-center space-y-2">
              <ImageIcon className="h-8 w-8 mx-auto text-accent" />
              <p className="text-sm text-muted-foreground">Galeria</p>
            </div>
          </div>

          <Link to="/admin/dashboard">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-glow"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Acessar Painel
            </Button>
          </Link>

          <p className="text-sm text-muted-foreground">
            Sistema de gerenciamento completo para artesanato tradicional
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminEntry;
