export default function (timestamp: Date) {
    const date: Date = new Date(timestamp);
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();

    return `${year}年${month}月${day}日`;
}
