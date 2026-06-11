<style>
@import './context-menu-sub-content.css';
</style>

<template>
    <AnimatePresence>
        <ContextMenuSubContent
            v-bind="{ ...$attrs, ...forwarded }"
            :class="clsx('arvue-context-menu-sub-content', props.class)"
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
        </ContextMenuSubContent>
    </AnimatePresence>
</template>

<script lang="ts">
import type {
    ContextMenuSubContentEmits as RekaContextMenuSubContentEmits,
    ContextMenuSubContentProps as RekaContextMenuSubContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ContextMenuSubContentProps extends RekaContextMenuSubContentProps {
    class?: HTMLAttributes['class']
}

export interface ContextMenuSubContentEmits extends RekaContextMenuSubContentEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import {
    ContextMenuSubContent,
    useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(
    defineProps<ContextMenuSubContentProps>(),
    {
        sideOffset: 8,
    },
)
const emits = defineEmits<ContextMenuSubContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
