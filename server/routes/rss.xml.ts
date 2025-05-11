import RSS from "rss";
const appConfig = useAppConfig();

export default defineEventHandler(async (event) => {
	try {
		// 获取文章数据
		const posts = await queryCollection(event, "articles").all();

		// 创建 rss 对象
		const feed = new RSS({
			title: "S22y",
			site_url: appConfig.rss.link,
			feed_url: `${appConfig.rss.link}/rss.xml`,
		});

		// 遍历获取的数据
		for (const post of posts) {
			feed.item({
				title: post.title,
				url: `${appConfig.rss.link}${post.path}`,
				description: post.description,
				date: post.data,
			});
		}
		const feedString = feed.xml({ indent: true });
		event.node.res.setHeader("content-type", "text/xml");
		event.node.res.end(feedString);
	} catch (e) {
		return e;
	}
});
