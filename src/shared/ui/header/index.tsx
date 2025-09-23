import logo from "@assets/images/svg/logo-full.svg";

import { LanguageSelect, ThemeSwitchButton } from "@shared/layouts/_common";

import {
	HeaderContainer,
	HeaderContent,
	LanguageSelectorWrapper,
	RightSection
} from './styles'

export const Header = () => {
	return (
		<HeaderContainer>
			<HeaderContent>
				<img src={logo} alt="TGLab Logo" />

				<RightSection>
					<LanguageSelectorWrapper>
						<LanguageSelect />
						<ThemeSwitchButton />
					</LanguageSelectorWrapper>

				</RightSection>
			</HeaderContent>
		</HeaderContainer>
	)
}
