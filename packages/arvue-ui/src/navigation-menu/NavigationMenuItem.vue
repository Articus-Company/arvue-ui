<style>
@import './navigation-menu-item.css';
</style>

<template>
    <NavigationMenuItem
        v-bind="delegatedProps"
        :class="clsx('arvue-navigation-menu-item', props.class)"
        data-slot="navigation-menu-item"
    >
        <slot/>
    </NavigationMenuItem>
</template>

<script lang="ts">
import type { NavigationMenuItemProps as RekaNavigationMenuItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface NavigationMenuItemProps extends RekaNavigationMenuItemProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { NavigationMenuItem } from 'reka-ui'

const props = defineProps<NavigationMenuItemProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
