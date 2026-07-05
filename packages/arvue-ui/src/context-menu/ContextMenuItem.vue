<style>
@import './context-menu-item.css';
</style>

<template>
    <ContextMenuItem
        v-bind="forwarded"
        :class="clsx(
            'arvue-context-menu-item',
            inset && 'arvue-context-menu-item-inset',
            props.class,
        )"
        data-slot="context-menu-item"
    >
        <slot/>
    </ContextMenuItem>
</template>

<script lang="ts">
import type {
    ContextMenuItemEmits as RekaContextMenuItemEmits,
    ContextMenuItemProps as RekaContextMenuItemProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ContextMenuItemProps extends RekaContextMenuItemProps {
    class?: HTMLAttributes['class']
    inset?: boolean
}
export interface ContextMenuItemEmits extends RekaContextMenuItemEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    ContextMenuItem,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ContextMenuItemProps>()
const emits = defineEmits<ContextMenuItemEmits>()

const delegatedProps = reactiveOmit(props, 'class', 'inset')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
