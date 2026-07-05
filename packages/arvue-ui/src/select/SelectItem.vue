<style>
@import './select-item.css';
</style>

<template>
    <SelectItem
        v-bind="forwardedProps"
        :class="clsx('arvue-select-item', props.class)"
        data-slot="select-item"
    >
        <span class="arvue-select-item-indicator-wrapper">
            <SelectItemIndicator>
                <i class="fas fa-check"/>
            </SelectItemIndicator>
        </span>

        <SelectItemText>
            <slot/>
        </SelectItemText>
    </SelectItem>
</template>

<script lang="ts">
import type { SelectItemProps as RekaSelectItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SelectItemProps extends RekaSelectItemProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    SelectItem,
    SelectItemIndicator,
    SelectItemText,
    useForwardProps,
} from 'reka-ui'

const props = defineProps<SelectItemProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>
