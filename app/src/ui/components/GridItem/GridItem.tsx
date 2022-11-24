import { GridItemType } from "../../../types/GridItemType";
import * as C from "./GridItem.styles";
import developer from "../../../svgs/developer.svg";
import { items } from "../../../data/items";

type Props = {
    item: GridItemType;
    onClick: () => void;
};

export function GridItem({ item, onClick }: Props) {
    return (
        <C.Container
            showBackground={item.permanentShown || item.shown}
            onClick={onClick}
        >
            {!item.permanentShown && !item.shown && (
                <C.Icon src={developer} opacity={0.1} />
            )}

            {(item.permanentShown || item.shown) && item.item !== null && (
                <C.Icon src={items[item.item].icon} />
            )}
        </C.Container>
    );
}
