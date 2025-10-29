import { useState } from "react";
import { Plus, Pencil, Trash2, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function Artesaos() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data
  const artesaos = [
    {
      id: 1,
      nome: "João Silva",
      aldeia: "Canoanã",
      whatsapp: "+55 11 98765-4321",
      status: true,
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    },
    {
      id: 2,
      nome: "Maria Santos",
      aldeia: "Pimentel Barbosa",
      whatsapp: "+55 11 98765-1234",
      status: true,
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
  ];

  const handleSave = () => {
    toast.success("Artesão salvo com sucesso!");
    setIsDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    toast.success("Artesão excluído com sucesso!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Gerenciar Artesãos</h1>
          <p className="text-muted-foreground mt-1">Cadastre os artesãos e suas informações</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Artesão
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Novo Artesão</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo</Label>
                <Input id="nome" placeholder="Ex: João Silva" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aldeia">Aldeia/Origem</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecionar aldeia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canoana">Canoanã</SelectItem>
                    <SelectItem value="pimentel">Pimentel Barbosa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" placeholder="+55 11 98765-4321" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="foto">Foto do Artesão</Label>
                <Input id="foto" type="file" accept="image/*" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="status">Artesão Ativo</Label>
                <Switch id="status" defaultChecked />
              </div>
              <Button onClick={handleSave} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Salvar Artesão
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Artesãos Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {artesaos.map((artesao) => (
          <Card key={artesao.id} className="shadow-card border-border/50 hover:shadow-glow transition-smooth">
            <CardHeader className="text-center pb-3">
              <div className="mx-auto mb-3 h-24 w-24 rounded-full overflow-hidden border-4 border-accent/30">
                <img
                  src={artesao.foto}
                  alt={artesao.nome}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-lg">{artesao.nome}</CardTitle>
              <div className="flex justify-center gap-2 mt-2">
                <Badge variant={artesao.status ? "default" : "secondary"} className="bg-secondary">
                  {artesao.status ? "Ativo" : "Inativo"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Aldeia:</span>
                  <span className="font-medium">{artesao.aldeia}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">WhatsApp:</span>
                  <a
                    href={`https://wa.me/${artesao.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="h-3 w-3" />
                    <span className="text-xs">{artesao.whatsapp}</span>
                  </a>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Pencil className="h-4 w-4 mr-1" />
                  Editar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-destructive hover:bg-destructive/10"
                  onClick={() => handleDelete(artesao.id)}
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Excluir
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
