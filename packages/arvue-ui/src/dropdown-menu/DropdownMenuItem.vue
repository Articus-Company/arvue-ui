<style>
@import './dropdown-menu-item.css';
</style>

<template>
    <DropdownMenuItem
        v-bind="forwardedProps"
        :class="clsx(
            'arvue-dropdown-menu-item',
            inset && 'arvue-dropdown-menu-item-inset',
            props.class,
        )"
    >
        <slot/>
    </DropdownMenuItem>
</template>

<script lang="ts">
import type { DropdownMenuItemProps as RekaDropdownMenuItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DropdownMenuItemProps extends RekaDropdownMenuItemProps {
    class?: HTMLAttributes['class']
    inset?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DropdownMenuItem, useForwardProps } from 'reka-ui'

const props = defineProps<DropdownMenuItemProps>()

const delegatedProps = reactiveOmit(props, 'class', 'inset')

const forwardedProps = useForwardProps(delegatedProps)
</script>
