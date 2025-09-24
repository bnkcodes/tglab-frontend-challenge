import { useAuth } from "@app/hooks";

import logo from "@assets/images/svg/logo-full.svg";

import { LanguageSelect, ThemeSwitchButton, UserMenu } from "@shared/layouts/_common";

import {
	HeaderContainer,
	HeaderContent,
	LanguageSelectorWrapper,
	RightSection
} from './styles'

export const Header = () => {
	const { isAuthenticated } = useAuth();

	return (
		<HeaderContainer>
			<HeaderContent>
				<img src={logo} alt="TGLab Logo" />

				<RightSection>
					<LanguageSelectorWrapper>
						<LanguageSelect />
						<ThemeSwitchButton />

						{isAuthenticated && <UserMenu />}
					</LanguageSelectorWrapper>
				</RightSection>
			</HeaderContent>
		</HeaderContainer>
	)
}
