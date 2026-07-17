<style scoped>
.feat-img {
    position: absolute;
    width: 100%;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}
</style>

<template>
    <FeaturedCard>
        <template #title>
            Высокий DX
        </template>
        <template #description>
            Полная типизация, автодополнение и предсказуемое API ускоряют разработку.
        </template>
        <img
            class="feat-img"
            src="/wa-apps/arvueui/img/dx.png"
            alt="dx"
        >
    </FeaturedCard>
</template>

<script setup lang="ts">
import { FeaturedCard } from '@/components/ui/featured-card'
</script>
