<style>
@import './sidebar-group-content.css';
</style>

<template>
    <Primitive
        data-sidebar="group-content"
        :class="clsx('arvue-sidebar-group-content', props.class)"
        v-bind="delegatedProps"
        data-slot="sidebar-group-content"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarGroupContentProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<SidebarGroupContentProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
