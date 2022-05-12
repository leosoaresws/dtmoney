import { Container, Content } from "./style";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money logo" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}
