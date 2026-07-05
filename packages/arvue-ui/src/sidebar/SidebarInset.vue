<style>
@import './sidebar-inset.css';
</style>

<template>
    <Primitive
        data-sidebar="inset"
        :class="clsx('arvue-sidebar-inset', props.class)"
        v-bind="delegatedProps"
        data-slot="sidebar-inset"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarInsetProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<SidebarInsetProps>(), {
    as: 'main',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
