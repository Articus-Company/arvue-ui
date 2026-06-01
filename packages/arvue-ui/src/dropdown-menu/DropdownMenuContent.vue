<style>
@import './dropdown-menu-content.css';
</style>

<template>
    <AnimatePresence>
        <DropdownMenuContent
            v-bind="{ ...$attrs, ...forwarded }"
            :class="clsx('arvue-dropdown-menu-content', props.class)"
            as-child
        >
            <Motion
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
            >
                <slot/>
            </Motion>
        </DropdownMenuContent>
    </AnimatePresence>
</template>

<script lang="ts">
import type {
    DropdownMenuContentEmits as RekaDropdownMenuContentEmits,
    DropdownMenuContentProps as RekaDropdownMenuContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DropdownMenuContentProps extends RekaDropdownMenuContentProps {
    class?: HTMLAttributes['class']
}

export interface DropdownMenuContentEmits extends RekaDropdownMenuContentEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import {
    DropdownMenuContent,
    useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(
    defineProps<DropdownMenuContentProps>(),
    {
        sideOffset: 8,
    },
)
const emits = defineEmits<DropdownMenuContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
