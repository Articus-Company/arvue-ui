<style>
@import './sonner.css';
</style>

<template>
    <Toaster
        v-bind="props"
        :class="clsx('arvue-sonner', props.class)"
    >
        <template #success-icon>
            <i class="fas fa-check-circle"/>
        </template>
        <template #info-icon>
            <i class="fas fa-info-circle"/>
        </template>
        <template #warning-icon>
            <i class="fas fa-exclamation-triangle"/>
        </template>
        <template #error-icon>
            <i class="fas fa-skull"/>
        </template>
        <template #loading-icon>
            <div>
                <i class="fas fa-spinner wa-animation-spin"/>
            </div>
        </template>
        <template #close-icon>
            <i class="fas fa-times"/>
        </template>
    </Toaster>
</template>

<script lang="ts">
import type { ToasterProps } from 'vue-sonner'

export interface SonnerProps extends ToasterProps {
}
</script>

<script setup lang="ts">
import { clsx } from 'clsx'
import { Toaster } from 'vue-sonner'

const props = withDefaults(defineProps<SonnerProps>(), {
    richColors: true,
})
</script>
