<style>
@import './combobox-item.css';
</style>

<template>
    <ComboboxItem
        v-bind="forwarded"
        :class="clsx('arvue-combobox-item', props.class)"
    >
        <slot/>
    </ComboboxItem>
</template>

<script lang="ts">
import type {
    ComboboxItemEmits as RekaComboboxItemEmits,
    ComboboxItemProps as RekaComboboxItemProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ComboboxItemProps extends RekaComboboxItemProps {
    class?: HTMLAttributes['class']
}
export interface ComboboxItemEmits extends RekaComboboxItemEmits {}
</script>

<script setup lang="ts">
import { clsx } from 'clsx'
import { ComboboxItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ComboboxItemProps>()
const emits = defineEmits<ComboboxItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
