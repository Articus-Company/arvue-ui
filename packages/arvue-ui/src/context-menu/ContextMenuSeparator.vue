<style>
@import './context-menu-separator.css';
</style>

<template>
    <ContextMenuSeparator
        v-bind="delegatedProps"
        :class="clsx('arvue-context-menu-separator', props.class)"
        data-slot="context-menu-separator"
    />
</template>

<script lang="ts">
import type { ContextMenuSeparatorProps as RekaContextMenuSeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ContextMenuSeparatorProps extends RekaContextMenuSeparatorProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { ContextMenuSeparator } from 'reka-ui'

const props = defineProps<ContextMenuSeparatorProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
