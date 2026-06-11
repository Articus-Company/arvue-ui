<style>
@import './context-menu-label.css';
</style>

<template>
    <ContextMenuLabel
        v-bind="forwardedProps"
        :class="clsx(
            'arvue-context-menu-label',
            inset && 'arvue-context-menu-label-inset',
            props.class,
        )"
    >
        <slot/>
    </ContextMenuLabel>
</template>

<script lang="ts">
import type { ContextMenuLabelProps as RekaContextMenuLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ContextMenuLabelProps extends RekaContextMenuLabelProps {
    class?: HTMLAttributes['class']
    inset?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { ContextMenuLabel, useForwardProps } from 'reka-ui'

const props = defineProps<ContextMenuLabelProps>()

const delegatedProps = reactiveOmit(props, 'class', 'inset')
const forwardedProps = useForwardProps(delegatedProps)
</script>
