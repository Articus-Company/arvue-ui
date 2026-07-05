<style>
@import './sidebar-separator.css';
</style>

<template>
    <Primitive
        data-sidebar="separator"
        :class="clsx('arvue-sidebar-separator', props.class)"
        v-bind="delegatedProps"
        data-slot="sidebar-separator"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarSeparatorProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<SidebarSeparatorProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
