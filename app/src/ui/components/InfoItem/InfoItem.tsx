import * as C from "./InfoItem.styles";

type Props = {
    label: string;
    value: number;
};

export function InfoItem({ label, value }: Props) {
    return (
        <C.Container>
            <C.Label>{label}</C.Label>
            <C.Value>{value}</C.Value>
        </C.Container>
    );
}
