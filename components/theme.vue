<template>
    <div class="flex mt-2">
        <button
            @click="toggle('light')"
            class="size-6 border flex justify-center items-center rounded-lg mr-2 text-xs text-gray-600 border-gray-600 dark:text-gray-400 dark:border-gray-400"
        >
            <Icon name="mynaui:sun" />
        </button>
        <button
            @click="toggle('dark')"
            class="size-6 border flex justify-center items-center rounded-lg mr-2 text-xs text-gray-600 border-gray-600 dark:text-gray-400 dark:border-gray-400"
        >
            <Icon name="mynaui:moon" />
        </button>
        <button
            @click="toggle('system')"
            class="size-6 border flex justify-center items-center rounded-lg mr-2 text-xs text-gray-600 border-gray-600 dark:text-gray-400 dark:border-gray-400"
        >
            <Icon name="mynaui:desktop" />
        </button>
    </div>
</template>

<script lang="ts" setup>
import { useColorMode } from "#imports";
const colorMode = useColorMode();

const toggle = (mode: string) => {
    colorMode.preference = mode;
};
</script>
