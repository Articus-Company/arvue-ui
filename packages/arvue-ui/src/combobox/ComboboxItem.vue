<style>
@import './combobox-item.css';
</style>

<template>
    <ComboboxItem
        v-bind="forwarded"
        :class="clsx('arvue-combobox-item', props.class)"
        data-slot="combobox-item"
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
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { ComboboxItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ComboboxItemProps>()
const emits = defineEmits<ComboboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
