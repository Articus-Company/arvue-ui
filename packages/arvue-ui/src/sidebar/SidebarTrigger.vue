<style>
@import './sidebar-trigger.css';
</style>

<template>
    <Primitive
        data-sidebar="trigger"
        :class="clsx('arvue-sidebar-trigger', props.class)"
        role="button"
        v-bind="delegatedProps"
        data-slot="sidebar-trigger"
        @click="toggleSidebar"
    >
        <slot>
            <i class="fas fa-bars"/>
        </slot>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarTriggerProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'
import { useSidebar } from './utils'

const props = withDefaults(defineProps<SidebarTriggerProps>(), {
    as: 'a',
})

const { toggleSidebar } = useSidebar()

const delegatedProps = reactiveOmit(props, 'class')
</script>
