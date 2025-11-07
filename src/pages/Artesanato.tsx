import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const Artesanato = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Dados de exemplo
  const products = [
    {
      id: 1,
      title: "Cocar Tradicional",
      artisan: "Aranã Txuiri",
      category: "adornos",
      description: "Cocar cerimonial confeccionado com penas naturais.",
    },
    {
      id: 2,
      title: "Colar de Sementes",
      artisan: "Juma Karajá",
      category: "adornos",
      description: "Colar artesanal com sementes naturais e miçangas coloridas.",
    },
    {
      id: 3,
      title: "Cesta de Fibra",
      artisan: "Waru Javaé",
      category: "utensílios",
      description: "Cesta tradicional tecida à mão com fibras da palmeira de buriti.",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

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
            <Link to="/artesanato" className="text-accent font-semibold">
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

      {/* Hero */}
      <section className="gradient-primary py-16 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Artesanato Tradicional</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça as belas peças produzidas pelos artesãos das comunidades Javaé e Karajá
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome ou artesão..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="adornos">Adornos</SelectItem>
                <SelectItem value="utensílios">Utensílios</SelectItem>
                <SelectItem value="instrumentos">Instrumentos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="shadow-card border-border/50 hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Imagem do produto</span>
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-accent mb-2">Por: {product.artisan}</p>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
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

export default Artesanato;
