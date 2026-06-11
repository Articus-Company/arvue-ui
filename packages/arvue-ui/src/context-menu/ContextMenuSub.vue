<template>
    <ContextMenuSub
        v-slot="slotProps"
        v-bind="forwarded"
    >
        <slot v-bind="slotProps"/>
    </ContextMenuSub>
</template>

<script lang="ts">
import type {
    ContextMenuSubEmits as RekaContextMenuSubEmits,
    ContextMenuSubProps as RekaContextMenuSubProps,
} from 'reka-ui'

export interface ContextMenuSubProps extends RekaContextMenuSubProps {}

export interface ContextMenuSubEmits extends RekaContextMenuSubEmits {}
</script>

<script setup lang="ts">
import {
    ContextMenuSub,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ContextMenuSubProps>()
const emits = defineEmits<ContextMenuSubEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
