import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Fotos = () => {
  // Dados de exemplo
  const photos = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    alt: `Foto ${i + 1} do projeto`,
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary border-b border-border py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center font-bold text-accent-foreground">
              AW
            </div>
            <h1 className="text-xl font-bold text-white">AWIRE DIGITAL</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white hover:text-accent transition-smooth">
              Início
            </Link>
            <Link to="/artesanato" className="text-white hover:text-accent transition-smooth">
              Artesanato
            </Link>
            <Link to="/fotos" className="text-accent font-semibold">
              Fotos
            </Link>
            <Link to="/login">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Área do Admin
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="gradient-primary py-16 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeria de Fotos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acompanhe os momentos marcantes do Projeto AWIRE DIGITAL nas aldeias Canoanã e Txuiri
          </p>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-smooth flex items-center justify-center"
              >
                <span className="text-muted-foreground">Foto {photo.id}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8 px-6 text-center mt-12">
        <div className="container mx-auto">
          <p className="text-muted-foreground mb-2">© 2025 AWIRE DIGITAL - Todos os direitos reservados</p>
          <p className="text-sm text-muted-foreground">
            Projeto de Extensão IFTO - Campus Formoso do Araguaia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Fotos;
