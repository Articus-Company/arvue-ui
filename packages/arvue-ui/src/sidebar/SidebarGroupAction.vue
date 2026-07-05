<style>
@import './sidebar-group-action.css';
</style>

<template>
    <Primitive
        data-sidebar="group-action"
        :class="clsx('arvue-sidebar-group-action', props.class)"
        v-bind="delegatedProps"
        data-slot="sidebar-group-action"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SidebarGroupActionProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<SidebarGroupActionProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
