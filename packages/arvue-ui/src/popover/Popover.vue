<template>
    <PopoverRoot
        v-slot="slotProps"
        v-bind="forwarded"
    >
        <slot v-bind="slotProps"/>
    </PopoverRoot>
</template>

<script lang="ts">
import type { PopoverRootEmits, PopoverRootProps } from 'reka-ui'

export interface PopoverProps extends PopoverRootProps {}
export interface PopoverEmits extends PopoverRootEmits {}
</script>

<script setup lang="ts">
import { PopoverRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<PopoverProps>()
const emits = defineEmits<PopoverEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
