<template>
    <ContextMenuRadioGroup
        v-bind="forwarded"
        data-slot="context-menu-radio-group"
    >
        <slot/>
    </ContextMenuRadioGroup>
</template>

<script lang="ts">
import type {
    ContextMenuRadioGroupEmits as RekaContextMenuRadioGroupEmits,
    ContextMenuRadioGroupProps as RekaContextMenuRadioGroupProps,
} from 'reka-ui'

export interface ContextMenuRadioGroupProps extends RekaContextMenuRadioGroupProps {}
export interface ContextMenuRadioGroupEmits extends RekaContextMenuRadioGroupEmits {}
</script>

<script setup lang="ts">
import {
    ContextMenuRadioGroup,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ContextMenuRadioGroupProps>()
const emits = defineEmits<ContextMenuRadioGroupEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
