<style>
@import './dropdown-menu-label.css';
</style>

<template>
    <DropdownMenuLabel
        v-bind="forwardedProps"
        :class="clsx(
            'arvue-dropdown-menu-label',
            inset && 'arvue-dropdown-menu-label-inset',
            props.class,
        )"
    >
        <slot/>
    </DropdownMenuLabel>
</template>

<script lang="ts">
import type { DropdownMenuLabelProps as RekaDropdownMenuLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DropdownMenuLabelProps extends RekaDropdownMenuLabelProps {
    class?: HTMLAttributes['class']
    inset?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DropdownMenuLabel, useForwardProps } from 'reka-ui'

const props = defineProps<DropdownMenuLabelProps>()

const delegatedProps = reactiveOmit(props, 'class', 'inset')
const forwardedProps = useForwardProps(delegatedProps)
</script>
