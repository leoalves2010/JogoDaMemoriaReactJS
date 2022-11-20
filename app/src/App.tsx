import * as C from "./App.styles";
import LogoImage from "../src/assets/devmemory_logo.png";
import { InfoItem } from "./ui/components/InfoItem/InfoItem";

export default function App() {
    return (
        <C.Container>
            <C.Info>
                <C.LinkImage>
                    <img src={LogoImage} width={200} />
                </C.LinkImage>
                <C.InfoArea>
                    <InfoItem label={"Tempo"} value={"00:00"}/>
                    <InfoItem label={"Movimentos"} value={"0"}/>
                </C.InfoArea>
                <C.InfoButton>Reiniciar</C.InfoButton>
            </C.Info>
            <C.GridArea>GridArea</C.GridArea>
        </C.Container>
    );
}
