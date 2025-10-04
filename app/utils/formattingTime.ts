export default function (timestamp: Date | string) {
	const date: Date = new Date(timestamp);
	const year: number = date.getFullYear();
	const month: number = date.getMonth();
	const day: number = date.getDate();

	const monthAbbreviations: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	return `${day} ${monthAbbreviations[month]}, ${year}`;
}
