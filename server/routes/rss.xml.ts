import RSS from "rss";
const appConfig = useAppConfig();

export default defineEventHandler(async (event) => {
	try {
		const posts = await queryCollection(event, "blog").all();

		const feed = new RSS({
			title: `${appConfig.info.author}'s Blog`,
			site_url: appConfig.rss.link,
			feed_url: `${appConfig.rss.link}/rss.xml`,
		});

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
