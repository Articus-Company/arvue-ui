<style scoped>
.feat-img {
    position: absolute;
    width: 350px;
    left: 50%;
    bottom: -50px;
    transform: translateX(-50%);
}
</style>

<template>
    <FeaturedCard>
        <template #title>
            Скорость работы пользователя
        </template>
        <template #description>
            Компоненты реагируют мгновенно и поддерживают быстрый темп работы.
        </template>
        <img
            class="feat-img"
            src="/wa-apps/arvueui/img/lightning.png"
            alt="lightning"
        >
    </FeaturedCard>
</template>

<script setup lang="ts">
import { FeaturedCard } from '@/components/ui/featured-card'
</script>
