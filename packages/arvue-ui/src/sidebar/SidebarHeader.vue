<style>
@import './sidebar-header.css';
</style>

<template>
    <Primitive
        data-sidebar="header"
        :class="clsx('arvue-sidebar-header', props.class)"
        v-bind="delegatedProps"
        data-slot="sidebar-header"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarHeaderProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<SidebarHeaderProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
