<template>
    <TooltipTrigger v-bind="props">
        <slot/>
    </TooltipTrigger>
</template>

<script lang="ts">
import type { TooltipTriggerProps as RekaTooltipTriggerProps } from 'reka-ui'

export interface TooltipTriggerProps extends RekaTooltipTriggerProps {}
</script>

<script setup lang="ts">
import { TooltipTrigger } from 'reka-ui'

const props = defineProps<TooltipTriggerProps>()
</script>
