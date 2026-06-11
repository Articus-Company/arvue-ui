<style>
@import './context-menu-sub-trigger.css';
</style>

<template>
    <ContextMenuSubTrigger
        v-bind="forwardedProps"
        :class="clsx(
            'arvue-context-menu-sub-trigger',
            inset && 'arvue-context-menu-sub-trigger-inset',
            props.class,
        )"
    >
        <slot/>
        <i class="fas fa-chevron-right arvue-context-menu-sub-trigger-icon"/>
    </ContextMenuSubTrigger>
</template>

<script lang="ts">
import type { ContextMenuSubTriggerProps as RekaContextMenuSubTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ContextMenuSubTriggerProps extends RekaContextMenuSubTriggerProps {
    class?: HTMLAttributes['class']
    inset?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    ContextMenuSubTrigger,
    useForwardProps,
} from 'reka-ui'

const props = defineProps<ContextMenuSubTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>
