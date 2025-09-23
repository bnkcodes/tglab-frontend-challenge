import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@app/hooks/useAuth';

interface AuthGuardProps {
  isPrivate: boolean;
  children?: React.ReactNode;
}

export function AuthGuard({ isPrivate = true, children }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/signin" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return children ?? <Outlet />;
}
