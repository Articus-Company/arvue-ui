<style>
@import './navigation-menu-viewport.css';
</style>

<template>
    <AnimatePresence>
        <div
            v-if="activeValue"
            class="arvue-navigation-menu-viewport-wrapper"
            data-slot="navigation-menu-viewport-wrapper"
        >
            <NavigationMenuViewport
                v-bind="{ ...$attrs, ...forwardedProps }"
                data-slot="navigation-menu-viewport"
                as-child
            >
                <Motion
                    :class="clsx('arvue-navigation-menu-viewport', props.class)"
                    :initial="{
                        y: '-5px',
                        opacity: 0,
                    }"
                    :animate="{
                        y: 0,
                        opacity: 1,
                    }"
                    :exit="{
                        y: '-5px',
                        opacity: 0,
                    }"
                    :transition="{
                        duration: .15,
                        ease: 'easeInOut',
                    }"
                />
            </NavigationMenuViewport>
        </div>
    </AnimatePresence>
</template>

<script lang="ts">
import type { NavigationMenuViewportProps as RekaNavigationMenuViewportProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface NavigationMenuViewportProps extends RekaNavigationMenuViewportProps {
    class?: HTMLAttributes['class']
    activeValue?: string
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import {
    NavigationMenuViewport,
    useForwardProps,
} from 'reka-ui'

defineOptions({
    inheritAttrs: false,
})

const props = defineProps<NavigationMenuViewportProps>()

const delegatedProps = reactiveOmit(props, 'class', 'activeValue')

const forwardedProps = useForwardProps(delegatedProps)
</script>
