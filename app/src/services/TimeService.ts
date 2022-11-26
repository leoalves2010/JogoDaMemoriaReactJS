export function TimeService(time: number) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
