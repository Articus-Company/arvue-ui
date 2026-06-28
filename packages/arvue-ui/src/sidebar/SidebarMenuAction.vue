<style>
@import 'sidebar-menu-action.css';
</style>

<template>
    <Primitive
        data-sidebar="menu-action"
        role="button"
        :class="clsx('arvue-sidebar-menu-action', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarMenuActionProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<SidebarMenuActionProps>(), {
    as: 'a',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
