<template>
    <CollapsibleRoot
        v-slot="slotProps"
        v-bind="forwarded"
    >
        <slot v-bind="slotProps"/>
    </CollapsibleRoot>
</template>

<script lang="ts">
import type { CollapsibleRootEmits, CollapsibleRootProps } from 'reka-ui'

export interface CollapsibleProps extends CollapsibleRootProps {}
export interface CollapsibleEmits extends CollapsibleRootEmits {}
</script>

<script setup lang="ts">
import { CollapsibleRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<CollapsibleProps>()
const emits = defineEmits<CollapsibleEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
