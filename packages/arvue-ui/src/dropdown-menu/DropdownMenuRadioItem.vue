<style>
@import './dropdown-menu-radio-item.css';
</style>

<template>
    <DropdownMenuRadioItem
        v-bind="forwarded"
        :class="clsx('arvue-dropdown-menu-radio-item', props.class)"
        data-slot="dropdown-menu-radio-item"
    >
        <span class="arvue-dropdown-menu-radio-item-indicator-wrapper">
            <DropdownMenuItemIndicator>
                <i class="fas fa-circle"/>
            </DropdownMenuItemIndicator>
        </span>
        <slot/>
    </DropdownMenuRadioItem>
</template>

<script lang="ts">
import type {
    DropdownMenuRadioItemEmits as RekaDropdownMenuRadioItemEmits,
    DropdownMenuRadioItemProps as RekaDropdownMenuRadioItemProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DropdownMenuRadioItemProps extends RekaDropdownMenuRadioItemProps {
    class?: HTMLAttributes['class']
}
export interface DropdownMenuRadioItemEmits extends RekaDropdownMenuRadioItemEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    DropdownMenuItemIndicator,
    DropdownMenuRadioItem,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<DropdownMenuRadioItemProps>()

const emits = defineEmits<DropdownMenuRadioItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
