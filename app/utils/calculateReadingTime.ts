export default function (text: any) {
	const cleanText = String(text).replace(/```[\s\S]*?```/g, "").replace(/<[^>]*>/g, "");

	const chineseCharCount = (cleanText.match(/[\u4e00-\u9fa5]|[\u3000-\u303f]|[\uff00-\uffef]/g) || []).length;
	const englishWordCount = (cleanText.match(/\b[a-zA-Z]+\b/g) || []).length;
	const totalWords = chineseCharCount + englishWordCount;

	const readingTimeMinutes = Math.ceil(totalWords / 250);

	return Math.max(1, readingTimeMinutes);
};
