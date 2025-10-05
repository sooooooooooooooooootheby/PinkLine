<template>
	<div ref="utterancesEl"></div>
</template>

<script setup>
const appConfig = useAppConfig();
const utterancesEl = ref(null);
let utterancesIframe = null;
let isComponentMounted = true;

const watchThemeChange = () => {
	const observer = new MutationObserver(() => {
		if (!isComponentMounted || !utterancesIframe) return;

		const isDark = document.documentElement.classList.contains("dark");
		const theme = isDark ? "github-dark" : "github-light";

		utterancesIframe.contentWindow.postMessage({ type: "set-theme", theme }, "https://utteranc.es");
	});

	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["class"],
	});

	return observer;
};

const findUtterancesIframe = () => {
	const iframes = utterancesEl.value?.getElementsByTagName("iframe") || [];
	for (let iframe of iframes) {
		if (iframe.src.includes("utteranc.es")) {
			return iframe;
		}
	}
	return null;
};

const waitForIframeLoad = () => {
	const checkInterval = setInterval(() => {
		if (!isComponentMounted) {
			clearInterval(checkInterval);
			return;
		}

		utterancesIframe = findUtterancesIframe();
		if (utterancesIframe) {
			clearInterval(checkInterval);

			utterancesIframe.addEventListener("load", () => {
				if (isComponentMounted) {
					watchThemeChange();
				}
			});
		}
	}, 100);

	setTimeout(() => clearInterval(checkInterval), 10000);
};

onMounted(() => {
	if (appConfig.switch.comment) {
		isComponentMounted = true;

		const isDark = document.documentElement.classList.contains("dark");
		const initialTheme = isDark ? "github-dark" : "github-light";

		const script = document.createElement("script");
		script.src = "https://utteranc.es/client.js";
		script.setAttribute("repo", "sooooooooooooooooootheby/PinkLine");
		script.setAttribute("issue-term", "title");
		script.setAttribute("theme", initialTheme);
		script.setAttribute("crossorigin", "anonymous");
		script.async = true;

		utterancesEl.value.appendChild(script);

		waitForIframeLoad();
	}
});

onUnmounted(() => {
	isComponentMounted = false;
});
</script>
