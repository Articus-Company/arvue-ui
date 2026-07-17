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
            Кастомизация стилей и поведения
        </template>
        <template #description>
            Настраивайте внешний вид и логику компонентов под свои задачи.
        </template>
        <img
            class="feat-img"
            src="/wa-apps/arvueui/img/lines.png"
            alt="lines"
        >
    </FeaturedCard>
</template>

<script setup lang="ts">
import { FeaturedCard } from '@/components/ui/featured-card'
</script>
