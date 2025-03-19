export default function (timestamp: string) {
    const date = new Date(timestamp);

    const options: object = { month: "short", day: "numeric", year: "numeric" };
    const formattedDate: string = date.toLocaleDateString("en-US", options);

    return formattedDate;
}
