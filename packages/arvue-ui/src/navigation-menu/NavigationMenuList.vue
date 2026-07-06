<style>
@import './navigation-menu-list.css';
</style>

<template>
    <NavigationMenuList
        v-bind="forwardedProps"
        :class="clsx('arvue-navigation-menu-list', props.class)"
        data-slot="navigation-menu-list"
    >
        <slot/>
    </NavigationMenuList>
</template>

<script lang="ts">
import type { NavigationMenuListProps as RekaNavigationMenuListProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface NavigationMenuListProps extends RekaNavigationMenuListProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { NavigationMenuList, useForwardProps } from 'reka-ui'

const props = defineProps<NavigationMenuListProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>
