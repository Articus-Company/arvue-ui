<template>
    <TooltipRoot
        v-slot="slotProps"
        v-bind="forwarded"
    >
        <slot v-bind="slotProps"/>
    </TooltipRoot>
</template>

<script lang="ts">
import type { TooltipRootEmits, TooltipRootProps } from 'reka-ui'

export interface TooltipProps extends TooltipRootProps {}
export interface TooltipEmits extends TooltipRootEmits {}
</script>

<script setup lang="ts">
import { TooltipRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<TooltipProps>()
const emits = defineEmits<TooltipEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
