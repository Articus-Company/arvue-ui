<style>
@import './dropdown-menu-separator.css';
</style>

<template>
    <DropdownMenuSeparator
        v-bind="delegatedProps"
        :class="clsx('arvue-dropdown-menu-separator', props.class)"
        data-slot="dropdown-menu-separator"
    />
</template>

<script lang="ts">
import type { DropdownMenuSeparatorProps as RekaDropdownMenuSeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DropdownMenuSeparatorProps extends RekaDropdownMenuSeparatorProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DropdownMenuSeparator } from 'reka-ui'

const props = defineProps<DropdownMenuSeparatorProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
