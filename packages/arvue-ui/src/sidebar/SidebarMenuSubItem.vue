<style>
@import './sidebar-menu-sub-item.css';
</style>

<template>
    <Primitive
        data-sidebar="menu-sub-item"
        :class="clsx('arvue-sidebar-sub-menu-item', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarMenuSubItemProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<SidebarMenuSubItemProps>(), {
    as: 'li',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
