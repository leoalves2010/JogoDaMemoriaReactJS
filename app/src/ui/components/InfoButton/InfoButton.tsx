import * as C from "./InfoButton.styles";

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

export function InfoButton({ label, icon, onClick }: Props) {
    return (
        <C.Container>
            {icon && (
                <C.IconArea>
                    <C.Icon src={icon} alt={label} />
                </C.IconArea>
            )}
            <C.Label>{label}</C.Label>
        </C.Container>
    );
}
