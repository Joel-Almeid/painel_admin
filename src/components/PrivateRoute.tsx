import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  // TODO: Implementar lógica real de autenticação com Firebase
  // Por enquanto, sempre permitimos acesso para desenvolvimento
  const isAuthenticated = true; // Trocar por: !!currentUser do Firebase
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
