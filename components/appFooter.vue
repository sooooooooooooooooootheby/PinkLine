<template>
    <div class="footer">
        <div class="info">
            <div class="copyright">Copyright ©2025.sooooooooooooooooootheby</div>
            <a href="https://icp.gov.moe/?keyword=20250416" target="_blank" class="moeIcp">萌ICP备20250416号</a>
        </div>
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

    .info {
        .copyright {
            opacity: 0.8;
        }
        .moeIcp {
            color: var(--theme-color)
        }
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
