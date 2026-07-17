<style scoped>
.feat-img {
    position: absolute;
    width: 700px;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    max-width: none;
}
</style>

<template>
    <FeaturedCard>
        <template #title>
            Готовая доступность
        </template>
        <template #description>
            Esc, фокус и клавиатурная навигация работают сразу.
        </template>
        <img
            class="feat-img"
            src="/wa-apps/arvueui/img/pulse.png"
            alt="pulse"
        >
    </FeaturedCard>
</template>

<script setup lang="ts">
import { FeaturedCard } from '@/components/ui/featured-card'
</script>
