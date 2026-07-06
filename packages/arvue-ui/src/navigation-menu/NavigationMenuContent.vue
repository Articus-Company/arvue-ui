<style>
@import './navigation-menu-content.css';
</style>

<template>
    <NavigationMenuContent
        v-bind="{ ...$attrs, ...forwarded }"
        :class="clsx('arvue-navigation-menu-content', props.class)"
        data-slot="navigation-menu-content"
    >
        <slot/>
    </NavigationMenuContent>
</template>

<script lang="ts">
import type {
    NavigationMenuContentEmits as RekaNavigationMenuContentEmits,
    NavigationMenuContentProps as RekaNavigationMenuContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface NavigationMenuContentProps extends RekaNavigationMenuContentProps {
    class?: HTMLAttributes['class']
}

export interface NavigationMenuContentEmits extends RekaNavigationMenuContentEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    NavigationMenuContent,
    useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
    inheritAttrs: false,
})

const props = defineProps<NavigationMenuContentProps>()
const emits = defineEmits<NavigationMenuContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
