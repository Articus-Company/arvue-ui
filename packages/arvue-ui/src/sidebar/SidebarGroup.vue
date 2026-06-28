<style>
@import './sidebar-group.css';
</style>

<template>
    <Primitive
        data-sidebar="group"
        :class="clsx('arvue-sidebar-group', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarGroupProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<SidebarGroupProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
