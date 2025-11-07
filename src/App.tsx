import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { DashboardLayout } from "./admin/components/DashboardLayout";

// Páginas Públicas
import Index from "./pages/Index";
import Artesanato from "./pages/Artesanato";
import Fotos from "./pages/Fotos";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Páginas Admin
import AdminEntry from "./admin/pages/AdminEntry";
import Dashboard from "./admin/pages/Dashboard";
import ArtesanatoAdmin from "./admin/pages/Artesanato";
import Artesaos from "./admin/pages/Artesaos";
import GaleriaAdmin from "./admin/pages/GaleriaAdmin";
import Configuracoes from "./admin/pages/Configuracoes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/" element={<Index />} />
          <Route path="/artesanato" element={<Artesanato />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/login" element={<Login />} />

          {/* Rotas Admin Protegidas */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminEntry />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/artesanato"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <ArtesanatoAdmin />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/artesaos"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Artesaos />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/galeria"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <GaleriaAdmin />
                </DashboardLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/configuracoes"
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Configuracoes />
                </DashboardLayout>
              </PrivateRoute>
            }
          />

          {/* Rota 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
