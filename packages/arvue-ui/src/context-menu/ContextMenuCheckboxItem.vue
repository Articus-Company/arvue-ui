<style>
@import './context-menu-checkbox-item.css';
</style>

<template>
    <ContextMenuCheckboxItem
        v-bind="forwarded"
        :class="clsx('arvue-context-menu-checkbox-item', props.class)"
        data-slot="context-menu-checkbox-item"
    >
        <span class="arvue-context-menu-checkbox-item-indicator-wrapper">
            <ContextMenuItemIndicator>
                <i class="fas fa-check"/>
            </ContextMenuItemIndicator>
        </span>
        <slot/>
    </ContextMenuCheckboxItem>
</template>

<script lang="ts">
import type {
    ContextMenuCheckboxItemEmits as RekaContextMenuCheckboxItemEmits,
    ContextMenuCheckboxItemProps as RekaContextMenuCheckboxItemProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ContextMenuCheckboxItemProps extends RekaContextMenuCheckboxItemProps {
    class?: HTMLAttributes['class']
}
export interface ContextMenuCheckboxItemEmits extends RekaContextMenuCheckboxItemEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    ContextMenuCheckboxItem,
    ContextMenuItemIndicator,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ContextMenuCheckboxItemProps>()
const emits = defineEmits<ContextMenuCheckboxItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
