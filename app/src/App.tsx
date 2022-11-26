import { useEffect, useState } from "react";
import * as C from "./App.styles";
import LogoImage from "../src/assets/devmemory_logo.png";
import RestartIcon from "../src/svgs/restart.svg";
import { InfoItem } from "./ui/components/InfoItem/InfoItem";
import { InfoButton } from "./ui/components/InfoButton/InfoButton";
import { GridItemType } from "./types/GridItemType";
import { items } from "./data/items";
import { GridItem } from "./ui/components/GridItem/GridItem";
import { TimeService } from "./services/TimeService";

export default function App() {
    const [playing, setPlaying] = useState<boolean>(false);
    const [timeElapsed, setTimeElapsed] = useState<number>(0);
    const [moveCount, setMoveCount] = useState<number>(0);
    const [shownCount, setShownCount] = useState<number>(0);
    const [gridItems, setGridItems] = useState<GridItemType[]>([]);

    useEffect(() => {
        if (
            moveCount > 0 &&
            gridItems.every((item) => item.permanentShown === true)
        ) {
            setPlaying(false);
        }
    }, [moveCount, gridItems]);

    useEffect(() => {
        if (shownCount === 2) {
            let opened = gridItems.filter((item) => item.shown === true);

            if (opened.length === 2) {
                if (opened[0].item === opened[1].item) {
                    let tmpGrid = [...gridItems];
                    tmpGrid.map((item) => {
                        if (item.shown === true) {
                            item.shown = false;
                            item.permanentShown = true;
                        }
                    });
                    setGridItems(tmpGrid);
                    setShownCount(0);
                } else {
                    setTimeout(() => {
                        let tmpGrid = [...gridItems];
                        tmpGrid.map((item) => (item.shown = false));
                        setGridItems(tmpGrid);
                        setShownCount(0);
                    }, 300);
                }
                setMoveCount((moveCount) => moveCount + 1);
            }
        }
    }, [shownCount, gridItems]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (playing) {
                setTimeElapsed((timeElapsed) => timeElapsed + 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [playing, timeElapsed]);

    useEffect(() => resetAndCreateGridArea(), []);

    function handleClickItem(index: number) {
        if (playing && index !== null && shownCount < 2) {
            let tmpGrid = [...gridItems];
            if (
                tmpGrid[index].shown === false &&
                tmpGrid[index].permanentShown === false
            ) {
                tmpGrid[index].shown = true;
                setShownCount((shownCount) => shownCount + 1);
            }
            setGridItems(tmpGrid);
        }
    }

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
                    <InfoItem
                        label={"Tempo"}
                        value={TimeService(timeElapsed)}
                    />
                    <InfoItem
                        label={"Movimentos"}
                        value={moveCount.toString()}
                    />
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
