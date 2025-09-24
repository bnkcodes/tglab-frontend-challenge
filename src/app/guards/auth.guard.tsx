import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@app/hooks/useAuth';

interface AuthGuardProps {
  isPrivate: boolean;
  children?: React.ReactNode;
}

export function AuthGuard({ isPrivate, children }: AuthGuardProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated && isPrivate) {
    return <Navigate to="/signin" replace />;
  }

  if (isAuthenticated && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return children ?? <Outlet />;
}
