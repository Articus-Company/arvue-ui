<template>
    <ContextMenuRoot v-bind="forwarded">
        <slot/>
    </ContextMenuRoot>
</template>

<script lang="ts">
import type { ContextMenuRootEmits, ContextMenuRootProps } from 'reka-ui'

export interface ContextMenuEmits extends ContextMenuRootEmits {}
export interface ContextMenuProps extends ContextMenuRootProps {}
</script>

<script setup lang="ts">
import { ContextMenuRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ContextMenuProps>()
const emits = defineEmits<ContextMenuEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
