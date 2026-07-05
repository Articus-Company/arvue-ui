<style>
@import './context-menu-radio-item.css';
</style>

<template>
    <ContextMenuRadioItem
        v-bind="forwarded"
        :class="clsx('arvue-context-menu-radio-item', props.class)"
        data-slot="context-menu-radio-item"
    >
        <span class="arvue-context-menu-radio-item-indicator-wrapper">
            <ContextMenuItemIndicator>
                <i class="fas fa-circle"/>
            </ContextMenuItemIndicator>
        </span>
        <slot/>
    </ContextMenuRadioItem>
</template>

<script lang="ts">
import type {
    ContextMenuRadioItemEmits as RekaContextMenuRadioItemEmits,
    ContextMenuRadioItemProps as RekaContextMenuRadioItemProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ContextMenuRadioItemProps extends RekaContextMenuRadioItemProps {
    class?: HTMLAttributes['class']
}
export interface ContextMenuRadioItemEmits extends RekaContextMenuRadioItemEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    ContextMenuItemIndicator,
    ContextMenuRadioItem,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ContextMenuRadioItemProps>()

const emits = defineEmits<ContextMenuRadioItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
