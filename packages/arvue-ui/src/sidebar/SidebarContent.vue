<style>
@import './sidebar-content.css';
</style>

<template>
    <Primitive
        data-sidebar="content"
        :class="clsx('arvue-sidebar-content', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarContentProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<SidebarContentProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
