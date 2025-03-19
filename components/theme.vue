<template>
    <div class="theme">
        <div class="iconBox" @click="handleTheme('light')">
            <Icon class="icon" name="akar-icons:sun" />
        </div>
        <div class="iconBox" @click="handleTheme('dark')">
            <Icon class="icon" name="akar-icons:moon" />
        </div>
        <div class="iconBox" @click="handleTheme('system')">
            <Icon class="icon" name="akar-icons:airplay-video" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

const handleTheme = (mode: string): void => {
    colorMode.preference = mode;
}
</script>

<style lang="scss" scoped>
.theme {
    display: flex;

    .iconBox {
        width: 24px;
        height: 24px;
        margin-left: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        transition: .2s;
        cursor: pointer;

        .icon {
            font-size: 0.8rem;
        }
    }
    .iconBox:hover {
        background-color: var(--backgrond-color1);
    }
}
</style>
