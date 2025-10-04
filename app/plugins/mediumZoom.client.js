// 这个插件是用来添加图片缩放功能的

import { defineNuxtPlugin } from "#app";
import mediumZoom from "medium-zoom";

export default defineNuxtPlugin((nuxtApp) => {
	const selector = ".enhancer img";

	let zoomInstance = mediumZoom(selector, {
		margin: 24,
		background: "rgba(0, 0, 0, 0.8)",
		scrollOffset: 40,
	});

	nuxtApp.hook("page:finish", () => {
		zoomInstance.detach().attach(selector);
	});

	return {
		provide: {
			contentEnhancerZoom: zoomInstance,
		},
	};
});
