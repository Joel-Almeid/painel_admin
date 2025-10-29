import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export default function Fotos() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Mock data
  const fotos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400",
      legenda: "Oficina de artesanato na aldeia Canoanã",
      alt: "Artesãos trabalhando em oficina tradicional",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1610894372459-a3f4a3d35c4e?w=400",
      legenda: "Cestaria tradicional indígena",
      alt: "Cestas artesanais coloridas",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400",
      legenda: "Pintura corporal tradicional",
      alt: "Arte corporal indígena",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400",
      legenda: "Colares e adornos artesanais",
      alt: "Colares feitos com sementes naturais",
    },
  ];

  const handleSave = () => {
    toast.success("Foto adicionada com sucesso!");
    setIsDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    toast.success("Foto excluída com sucesso!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Galeria de Fotos</h1>
          <p className="text-muted-foreground mt-1">Gerencie as imagens da galeria pública</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Foto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>Nova Foto</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="imagem">Selecionar Imagem</Label>
                <Input id="imagem" type="file" accept="image/*" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="legenda">Legenda/Título</Label>
                <Input id="legenda" placeholder="Ex: Oficina na aldeia Canoanã" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alt">Texto Alternativo (Alt Text)</Label>
                <Input id="alt" placeholder="Descreva a imagem para acessibilidade" />
              </div>
              <Button onClick={handleSave} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Publicar Foto
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Photos Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {fotos.map((foto) => (
          <Card key={foto.id} className="shadow-card border-border/50 hover:shadow-glow transition-smooth overflow-hidden group">
            <div className="aspect-square overflow-hidden relative">
              <img
                src={foto.url}
                alt={foto.alt}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white text-sm font-medium mb-3">{foto.legenda}</p>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" className="flex-1">
                      <Pencil className="h-3 w-3 mr-1" />
                      Editar
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1 bg-destructive/90 hover:bg-destructive text-white"
                      onClick={() => handleDelete(foto.id)}
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Excluir
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-3">
              <p className="text-sm text-muted-foreground line-clamp-2">{foto.legenda}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
