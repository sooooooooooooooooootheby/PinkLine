<template>
    <div class="header">
        <div class="info">
            <img :src="appConfig.info.headLogo" alt="logo_MG" class="img" v-if="appConfig.info.headLogo" />
        </div>
        <ul class="navigate pc">
            <li class="item" :class="{ isActive: isPath(item.path) }" v-for="item in appConfig.page" :key="item.path">
                <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
            </li>
            <li class="item"><a href="/rss.xml" target="_blank">rss</a></li>
        </ul>
        <ul class="navigate mobi">
            <li class="item" :class="{ isActive: isPath(item.path) }" v-for="item in appConfig.page" :key="item.path">
                <NuxtLink :to="item.path"><Icon :name="item.icon" /></NuxtLink>
            </li>
            <li class="item">
                <a href="/rss.xml" target="_blank"><Icon name="akar-icons:rss" /></a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const route = useRoute();

const isPath = (path: string): boolean => {
    if (path === route.path) {
        return true;
    } else {
        return false;
    }
};
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 64px;
    padding-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .info {
        display: flex;
        align-items: center;

        .img {
            width: 24px;
            height: 24px;
            margin-right: 8px;
        }
    }
    .navigate {
        display: flex;

        .item {
            list-style: none;
            margin-left: 8px;

            a {
                color: var(--font-color);
                opacity: 0.8;
                text-decoration: none;
            }
        }
        .isActive {
            a {
                color: var(--theme-color);
                opacity: 1;
                text-decoration: underline;
            }
        }
    }
    .mobi {
        display: none;
        font-size: 1.1rem;

        .item {
            margin-left: 12px;
        }
    }
}

@media (max-width: 600px) {
    .header {
        .pc {
            display: none;
        }
        .mobi {
            display: flex;
        }
    }
}
</style>
