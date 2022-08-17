import { HeaderContainer, SpacedButton } from "./header.styles"

export const Header = () => {
    return <HeaderContainer>
        <SpacedButton to={'/'}>Pokemon</SpacedButton>
        <SpacedButton to={'/starwars'}>Starwars</SpacedButton>
    </HeaderContainer>
}
