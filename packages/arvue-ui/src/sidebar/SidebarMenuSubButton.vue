<style>
@import './sidebar-menu-sub-button.css';
</style>

<template>
    <Primitive
        data-sidebar="menu-sub-button"
        role="button"
        :data-active="isActive"
        :data-disabled="disabled"
        :class="clsx('arvue-sidebar-menu-sub-button', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarMenuSubButtonProps extends PrimitiveProps {
    isActive?: boolean
    class?: HTMLAttributes['class']
    disabled?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<SidebarMenuSubButtonProps>(), {
    as: 'a',
})

const delegatedProps = reactiveOmit(props, 'class', 'isActive')
</script>
