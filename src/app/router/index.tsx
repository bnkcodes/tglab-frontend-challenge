import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthGuard } from '@app/guards';

import * as Pages from '@pages/public';
import * as Layout from '@shared/layouts';

export function Router() {
  return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout.BaseLayout />}>
					<Route element={<AuthGuard isPrivate={false} />}>
						<Route element={<Layout.PublicLayout />}>
							<Route path="/signin" element={<Pages.Signin />} />
							<Route path="/signup" element={<Pages.Signup />} />
						</Route>
					</Route>

					<Route element={<AuthGuard isPrivate={true} />}>
						<Route element={<Layout.PrivateLayout />}>
							<Route path="/" element={<div>Home Page - Usuário autenticado</div>} />
						</Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
  );
}
