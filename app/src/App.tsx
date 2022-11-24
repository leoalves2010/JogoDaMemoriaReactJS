import { useEffect, useState } from "react";
import * as C from "./App.styles";
import LogoImage from "../src/assets/devmemory_logo.png";
import RestartIcon from "../src/svgs/restart.svg";
import { InfoItem } from "./ui/components/InfoItem/InfoItem";
import { InfoButton } from "./ui/components/InfoButton/InfoButton";
import { GridItemType } from "./types/GridItemType";
import { items } from "./data/items";
import { GridItem } from "./ui/components/GridItem/GridItem";

export default function App() {
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);

    useEffect(() => resetAndCreateGridArea(), []);

    function handleClickItem(index: number) {}

    function resetAndCreateGridArea() {
        setTimeElapsed(0);
        setMoveCount(0);
        setShownCount(0);

        let tmpGrid: GridItemType[] = [];
        for (let i = 0; i < items.length * 2; i++) {
            tmpGrid.push({
                item: null,
                shown: false,
                permanentShown: false,
            });
        }

        for (let w = 0; w < 2; w++) {
            for (let y = 0; y < items.length; y++) {
                let pos = -1;

                while (pos < 0 || tmpGrid[pos].item !== null) {
                    pos = Math.floor(Math.random() * (items.length * 2));
                }

                tmpGrid[pos].item = y;
            }
        }

        setGridItems(tmpGrid);
        setPlaying(true);
    }

    return (
        <C.Container>
            <C.Info>
                <C.LinkImage>
                    <img src={LogoImage} width={200} />
                </C.LinkImage>
                <C.InfoArea>
                    <InfoItem label={"Tempo"} value={timeElapsed} />
                    <InfoItem label={"Movimentos"} value={moveCount} />
                </C.InfoArea>
                <InfoButton
                    label={"Reiniciar"}
                    icon={RestartIcon}
                    onClick={resetAndCreateGridArea}
                />
            </C.Info>
            <C.GridArea>
                <C.Grid>
                    {gridItems.map((item, index) => (
                        <GridItem
                            key={index}
                            item={item}
                            onClick={() => handleClickItem(index)}
                        />
                    ))}
                </C.Grid>
            </C.GridArea>
        </C.Container>
    );
}
