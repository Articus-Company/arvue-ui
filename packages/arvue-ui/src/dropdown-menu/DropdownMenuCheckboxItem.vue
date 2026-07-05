<style>
@import './dropdown-menu-checkbox-item.css';
</style>

<template>
    <DropdownMenuCheckboxItem
        v-bind="forwarded"
        :class="clsx('arvue-dropdown-menu-checkbox-item', props.class)"
        data-slot="dropdown-menu-checkbox-item"
    >
        <span class="arvue-dropdown-menu-checkbox-item-indicator-wrapper">
            <DropdownMenuItemIndicator>
                <i class="fas fa-check"/>
            </DropdownMenuItemIndicator>
        </span>
        <slot/>
    </DropdownMenuCheckboxItem>
</template>

<script lang="ts">
import type {
    DropdownMenuCheckboxItemEmits as RekaDropdownMenuCheckboxItemEmits,
    DropdownMenuCheckboxItemProps as RekaDropdownMenuCheckboxItemProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DropdownMenuCheckboxItemProps extends RekaDropdownMenuCheckboxItemProps {
    class?: HTMLAttributes['class']
}
export interface DropdownMenuCheckboxItemEmits extends RekaDropdownMenuCheckboxItemEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    DropdownMenuCheckboxItem,
    DropdownMenuItemIndicator,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<DropdownMenuCheckboxItemProps>()
const emits = defineEmits<DropdownMenuCheckboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
