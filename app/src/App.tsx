import * as C from "./App.styles";
import LogoImage from "../src/assets/devmemory_logo.png";

export default function App() {
    return (
        <C.Container>
            <C.Info>
                <C.LinkImage>
                    <img src={LogoImage} width={200} />
                </C.LinkImage>
                <C.InfoArea>InfoArea</C.InfoArea>
                <C.InfoButton>Reiniciar</C.InfoButton>
            </C.Info>
            <C.GridArea>GridArea</C.GridArea>
        </C.Container>
    );
}
