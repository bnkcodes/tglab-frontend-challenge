import logo from "@assets/images/svg/logo-full.svg";

import { LanguageSelect, ThemeSwitchButton, UserMenu } from "@shared/layouts/_common";

import {
	HeaderContainer,
	HeaderContent,
	LanguageSelectorWrapper,
	RightSection
} from './styles'
import { useAuth } from "@app/hooks";

export const Header = () => {
	const { signedIn } = useAuth();

	return (
		<HeaderContainer>
			<HeaderContent>
				<img src={logo} alt="TGLab Logo" />

				<RightSection>
					<LanguageSelectorWrapper>
						<LanguageSelect />
						<ThemeSwitchButton />

						{signedIn && <UserMenu />}
					</LanguageSelectorWrapper>
				</RightSection>
			</HeaderContent>
		</HeaderContainer>
	)
}
