export default function (timestamp: string) {
    const today: Date = new Date();
    const date: Date = new Date(timestamp);

    const hourDifference: number = Math.floor((today.getTime() - date.getTime()) / 1000) / 60 / 60;

    if (hourDifference / 24 > 7) {
        const year: number = date.getFullYear();
        const month: number = date.getMonth() + 1;
        const day: number = date.getDate();

        return `${year}年${month}月${day}日`;
    } else if (hourDifference / 24 < 1) {
        if (Math.trunc(hourDifference) > 0) {
            return `${Math.trunc(hourDifference)}小时${Math.trunc((hourDifference * 60) % 60)}分钟前`;
        } else {
            return `${Math.trunc((hourDifference * 60) % 60)}分钟前`;
        }
    } else {
        return `${Math.trunc(hourDifference / 24)}天前`;
    }
}
