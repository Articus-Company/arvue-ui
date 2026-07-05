<style>
@import './sidebar-menu-button-child.css';
</style>

<template>
    <Primitive
        data-sidebar="menu-button-child"
        role="button"
        :data-active="isActive"
        :data-disabled="disabled"
        :class="clsx('arvue-menu-button-child', props.class)"
        v-bind="delegatedProps"
        data-slot="sidebar-menu-button"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarMenuButtonChildProps extends PrimitiveProps {
    isActive?: boolean
    class?: HTMLAttributes['class']
    disabled?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<SidebarMenuButtonChildProps>(), {
    as: 'a',
})

const delegatedProps = reactiveOmit(props, 'class', 'isActive')
</script>
