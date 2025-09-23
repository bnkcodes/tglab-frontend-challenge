import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthGuard } from '@app/guards/auth.guard';
import * as Pages from '@pages/public';
import * as Layout from '@shared/layouts';

export function Router() {
  return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthGuard isPrivate={false} />}>
					<Route element={<Layout.PublicLayout />}>
						<Route path="/login" element={<Pages.Login />} />
					</Route>
				</Route>

				<Route element={<AuthGuard isPrivate={true} />}>
					<Route path="/" element={<div>Home Page - Usuário autenticado</div>} />
				</Route>
			</Routes>
		</BrowserRouter>
  );
}
