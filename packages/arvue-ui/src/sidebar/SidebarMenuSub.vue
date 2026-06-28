<style>
@import './sidebar-menu-sub.css';
</style>

<template>
    <Primitive
        data-sidebar="menu-sub"
        :class="clsx('arvue-sidebar-menu-sub', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarMenuSubProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<SidebarMenuSubProps>(), {
    as: 'ul',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
