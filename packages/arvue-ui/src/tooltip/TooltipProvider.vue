<template>
    <TooltipProvider
        v-bind="props"
        data-slot="tooltip-provider"
    >
        <slot/>
    </TooltipProvider>
</template>

<script lang="ts">
import type { TooltipProviderProps as RekaTooltipProviderProps } from 'reka-ui'

export interface TooltipProviderProps extends RekaTooltipProviderProps {}
</script>

<script setup lang="ts">
import { TooltipProvider } from 'reka-ui'

const props = withDefaults(defineProps<TooltipProviderProps>(), {
    delayDuration: 0,
})
</script>
