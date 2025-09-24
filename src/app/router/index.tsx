import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthGuard } from "@app/guards";

import * as Layout from "@shared/layouts";

import * as PublicPages from "@pages/public";
import * as PrivatePages from "@pages/private";

export function Router() {
  return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout.BaseLayout />}>
					<Route element={<AuthGuard isPrivate={false} />}>
						<Route element={<Layout.PublicLayout />}>
							<Route path="/signin" element={<PublicPages.Signin />} />
							<Route path="/signup" element={<PublicPages.Signup />} />
						</Route>
					</Route>

					<Route element={<AuthGuard isPrivate={true} />}>
						<Route path="/" element={<Layout.PrivateLayout />}>
							<Route index element={<PrivatePages.Bet />} />
							<Route path="my-bets" element={<PrivatePages.MyBets />} />
						</Route>
					</Route>
				</Route>

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</BrowserRouter>
  );
}
