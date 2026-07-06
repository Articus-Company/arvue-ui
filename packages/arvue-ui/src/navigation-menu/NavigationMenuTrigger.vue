<style>
@import './navigation-menu-trigger.css';
</style>

<template>
    <NavigationMenuTrigger
        v-bind="forwardedProps"
        :class="clsx('arvue-navigation-menu-trigger', props.class)"
        data-slot="navigation-menu-trigger"
        role="button"
    >
        <slot/>
        <span
            class="arvue-navigation-menu-trigger-icon"
            data-slot="navigation-menu-trigger-icon"
        >
            <i class="fas fa-chevron-down"/>
        </span>
    </NavigationMenuTrigger>
</template>

<script lang="ts">
import type { NavigationMenuTriggerProps as RekaNavigationMenuTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface NavigationMenuTriggerProps extends RekaNavigationMenuTriggerProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    NavigationMenuTrigger,
    useForwardProps,
} from 'reka-ui'

const props = withDefaults(defineProps<NavigationMenuTriggerProps>(), {
    as: 'a',
})

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>
