import * as C from "./App.styles";
import LogoImage from "../src/assets/devmemory_logo.png";
import RestartIcon from '../src/svgs/restart.svg';
import { InfoItem } from "./ui/components/InfoItem/InfoItem";
import { InfoButton } from "./ui/components/InfoButton/InfoButton";

export default function App() {
    function resetAndCreateGridArea() {}

    return (
        <C.Container>
            <C.Info>
                <C.LinkImage>
                    <img src={LogoImage} width={200} />
                </C.LinkImage>
                <C.InfoArea>
                    <InfoItem label={"Tempo"} value={"00:00"} />
                    <InfoItem label={"Movimentos"} value={"0"} />
                </C.InfoArea>
                <InfoButton
                    label={"Reiniciar"}
                    icon={RestartIcon}
                    onClick={resetAndCreateGridArea}
                />
            </C.Info>
            <C.GridArea>GridArea</C.GridArea>
        </C.Container>
    );
}
