import { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { toast } from "sonner";

export default function Artesanato() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - will be replaced with Firebase
  const artesanatos = [
    {
      id: 1,
      nome: "Cocar Tradicional",
      descricao: "Cocar feito com penas naturais",
      categoria: "Adornos",
      artesao: "João Silva",
      aldeia: "Canoanã",
      imagem: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300",
    },
    {
      id: 2,
      nome: "Cesta de Fibra",
      descricao: "Cesta artesanal trançada",
      categoria: "Utilitários",
      artesao: "Maria Santos",
      aldeia: "Pimentel Barbosa",
      imagem: "https://images.unsplash.com/photo-1610894372459-a3f4a3d35c4e?w=300",
    },
  ];

  const handleSave = () => {
    toast.success("Artesanato salvo com sucesso!");
    setIsDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    toast.success("Artesanato excluído com sucesso!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Gerenciar Artesanato</h1>
          <p className="text-muted-foreground mt-1">Cadastre e organize os produtos artesanais</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Artesanato
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Novo Artesanato</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome do Artesanato</Label>
                <Input id="nome" placeholder="Ex: Cocar Tradicional" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Textarea id="descricao" placeholder="Descreva o artesanato..." rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="artesao">Artesão</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecionar artesão" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">João Silva</SelectItem>
                      <SelectItem value="2">Maria Santos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="categoria">Categoria</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecionar categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="adornos">Adornos</SelectItem>
                      <SelectItem value="utilitarios">Utilitários</SelectItem>
                      <SelectItem value="decoracao">Decoração</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
                <Label htmlFor="imagem">Imagem</Label>
                <Input id="imagem" type="file" accept="image/*" />
              </div>
              <Button onClick={handleSave} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Salvar Artesanato
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="shadow-card border-border/50">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="adornos">Adornos</SelectItem>
                <SelectItem value="utilitarios">Utilitários</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Aldeia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="canoana">Canoanã</SelectItem>
                <SelectItem value="pimentel">Pimentel Barbosa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {artesanatos.map((item) => (
          <Card key={item.id} className="shadow-card border-border/50 hover:shadow-glow transition-smooth overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={item.imagem}
                alt={item.nome}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{item.nome}</CardTitle>
              <p className="text-sm text-muted-foreground">{item.descricao}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Artesão:</span>
                  <span className="font-medium">{item.artesao}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Categoria:</span>
                  <span className="font-medium">{item.categoria}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Aldeia:</span>
                  <span className="font-medium">{item.aldeia}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Pencil className="h-4 w-4 mr-1" />
                  Editar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-destructive hover:bg-destructive/10"
                  onClick={() => handleDelete(item.id)}
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
