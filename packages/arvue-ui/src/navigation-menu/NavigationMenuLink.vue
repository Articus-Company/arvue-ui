<style>
@import './navigation-menu-link.css';
</style>

<template>
    <NavigationMenuLink
        v-bind="forwarded"
        :class="clsx('arvue-navigation-menu-link', props.class)"
        data-slot="navigation-menu-link"
    >
        <slot/>
    </NavigationMenuLink>
</template>

<script lang="ts">
import type {
    NavigationMenuLinkEmits as RekaNavigationMenuLinkEmits,
    NavigationMenuLinkProps as RekaNavigationMenuLinkProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface NavigationMenuLinkProps extends RekaNavigationMenuLinkProps {
    class?: HTMLAttributes['class']
}
export interface NavigationMenuLinkEmits extends RekaNavigationMenuLinkEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    NavigationMenuLink,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<NavigationMenuLinkProps>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
