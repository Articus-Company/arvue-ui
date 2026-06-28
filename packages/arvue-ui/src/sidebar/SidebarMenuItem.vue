<style>
@import './sidebar-menu-item.css';
</style>

<template>
    <Primitive
        data-sidebar="menu-item"
        :class="clsx('arvue-sidebar-menu-item', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarMenuItemProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<SidebarMenuItemProps>(), {
    as: 'li',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
