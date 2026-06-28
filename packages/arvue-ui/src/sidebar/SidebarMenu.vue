<style>
@import './sidebar-menu.css';
</style>

<template>
    <Primitive
        data-sidebar="menu"
        :class="clsx('arvue-sidebar-menu', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarMenuProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<SidebarMenuProps>(), {
    as: 'ul',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
