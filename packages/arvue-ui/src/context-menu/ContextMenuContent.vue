<style>
@import './context-menu-content.css';
</style>

<template>
    <AnimatePresence>
        <ContextMenuContent
            v-bind="{ ...$attrs, ...forwarded }"
            :class="clsx('arvue-context-menu-content', props.class)"
            data-slot="context-menu-content"
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
        </ContextMenuContent>
    </AnimatePresence>
</template>

<script lang="ts">
import type {
    ContextMenuContentEmits as RekaContextMenuContentEmits,
    ContextMenuContentProps as RekaContextMenuContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ContextMenuContentProps extends RekaContextMenuContentProps {
    class?: HTMLAttributes['class']
}
export interface ContextMenuContentEmits extends RekaContextMenuContentEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import {
    ContextMenuContent,
    useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
    inheritAttrs: false,
})

const props = defineProps<ContextMenuContentProps>()
const emits = defineEmits<ContextMenuContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
