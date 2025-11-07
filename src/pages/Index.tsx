import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Image as ImageIcon, Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
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
            <Link to="/fotos" className="text-white hover:text-accent transition-smooth">
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

      {/* Hero Section */}
      <section className="gradient-hero py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="h-20 w-20 rounded-2xl bg-accent mx-auto flex items-center justify-center mb-6">
            <span className="text-3xl font-bold text-accent-foreground">AW</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">AWIRE DIGITAL</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Preservando a Cultura Indígena através da Arte e Tecnologia
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Projeto de extensão do IFTO Campus Formoso do Araguaia promovendo inclusão digital 
            e valorização do artesanato tradicional das comunidades Javaé e Karajá.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/artesanato">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Ver Artesanatos
              </Button>
            </Link>
            <Link to="/fotos">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Galeria de Fotos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que fazemos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card border-border/50">
              <CardContent className="pt-6 text-center">
                <Package className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">Artesanato Tradicional</h3>
                <p className="text-muted-foreground">
                  Divulgação e comercialização de artesanato produzido pelos artesãos indígenas das aldeias Canoanã e Txuiri.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card border-border/50">
              <CardContent className="pt-6 text-center">
                <ImageIcon className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">Inclusão Digital</h3>
                <p className="text-muted-foreground">
                  Oficinas de capacitação tecnológica para jovens indígenas, promovendo autonomia e novas oportunidades.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card border-border/50">
              <CardContent className="pt-6 text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-3">Valorização Cultural</h3>
                <p className="text-muted-foreground">
                  Preservação e divulgação da rica cultura material e imaterial dos povos Javaé e Karajá.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tem interesse em conhecer mais sobre o projeto ou adquirir artesanato? Entre em contato conosco!
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent" />
              <a href="mailto:awiredigital@gmail.com" className="text-accent hover:underline">
                awiredigital@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent" />
              <a href="https://wa.me/5563999999999" className="text-accent hover:underline">
                (63) 99999-9999
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-muted-foreground">Formoso do Araguaia - TO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8 px-6 text-center">
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

export default Index;
