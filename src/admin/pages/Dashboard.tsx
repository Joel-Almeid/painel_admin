import { Package, Users, Image, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    { title: "Artesanatos", value: "24", icon: Package, color: "text-accent" },
    { title: "Artesãos Ativos", value: "12", icon: Users, color: "text-secondary" },
    { title: "Fotos na Galeria", value: "48", icon: Image, color: "text-accent" },
  ];

  const recentActivities = [
    { text: "Cocar Tradicional foi adicionado", time: "2 horas atrás" },
    { text: "Nova foto 'Oficina Canoanã' publicada", time: "5 horas atrás" },
    { text: "Artesão João Silva foi atualizado", time: "1 dia atrás" },
    { text: "Cesta de Fibra foi editada", time: "2 dias atrás" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Bem-vindo(a) ao Painel!</h1>
        <p className="text-muted-foreground">Gerencie seu conteúdo de forma simples e eficiente</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-card border-border/50 hover:shadow-glow transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card border-border/50">
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button
            onClick={() => navigate("/admin/artesanato")}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Artesanato
          </Button>
          <Button
            onClick={() => navigate("/admin/galeria")}
            variant="outline"
            className="border-accent/50 text-accent hover:bg-accent/10"
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Foto
          </Button>
          <Button
            onClick={() => navigate("/admin/artesaos")}
            variant="outline"
            className="border-secondary/50 text-secondary hover:bg-secondary/10"
          >
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Artesão
          </Button>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="shadow-card border-border/50">
        <CardHeader>
          <CardTitle>Atividade Recente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b border-border/30 last:border-0 last:pb-0">
                <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                <div className="flex-1">
                  <p className="text-sm">{activity.text}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
