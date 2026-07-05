<style>
@import './dropdown-menu-sub-trigger.css';
</style>

<template>
    <DropdownMenuSubTrigger
        v-bind="forwardedProps"
        :class="clsx(
            'arvue-dropdown-menu-sub-trigger',
            inset && 'arvue-dropdown-menu-sub-trigger-inset',
            props.class,
        )"
        data-slot="dropdown-menu-sub-trigger"
    >
        <slot/>
        <i class="fas fa-chevron-right arvue-dropdown-menu-sub-trigger-icon"/>
    </DropdownMenuSubTrigger>
</template>

<script lang="ts">
import type { DropdownMenuSubTriggerProps as RekaDropdownMenuSubTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DropdownMenuSubTriggerProps extends RekaDropdownMenuSubTriggerProps {
    class?: HTMLAttributes['class']
    inset?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    DropdownMenuSubTrigger,
    useForwardProps,
} from 'reka-ui'

const props = defineProps<DropdownMenuSubTriggerProps>()

const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>
