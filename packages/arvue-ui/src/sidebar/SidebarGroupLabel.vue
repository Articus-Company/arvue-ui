<style>
@import './sidebar-group-label.css';
</style>

<template>
    <Primitive
        data-sidebar="group-label"
        :class="clsx('arvue-sidebar-group-label', props.class)"
        v-bind="delegatedProps"
        data-slot="sidebar-group-label"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarGroupLabelProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<SidebarGroupLabelProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
