import { HeaderContainer } from "./styles";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <h1>{title}</h1>
    </HeaderContainer>
  );
}
