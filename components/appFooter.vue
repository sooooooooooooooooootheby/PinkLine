<template>
    <div class="footer">
        <div class="copyright">Copyright ©2023~2025.sooooooooooooooooootheby</div>
        <theme />
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    padding: 32px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--border-color);

    .copyright {
        opacity: 0.8;
    }
}

@media (max-width: 600px) {
    .footer {
        padding: 24px 12px !important;
        flex-direction: column;
        align-items: flex-start;
        border-top: none;

        .copyright {
            margin-bottom: 12px;
        }
    }
}
</style>
