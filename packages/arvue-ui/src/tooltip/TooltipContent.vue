<style>
@import './tooltip-content.css';
</style>

<template>
    <AnimatePresence>
        <TooltipContent
            v-bind="{ ...forwarded, ...$attrs }"
            :class="clsx('arvue-tooltip-content', props.class)"
            as-child
        >
            <Motion
                :initial="{
                    opacity: 0,
                }"
                :animate="{
                    opacity: 1,
                }"
                :exit="{
                    opacity: 0,
                }"
                :transition="{
                    duration: .15,
                    ease: 'easeInOut',
                }"
            >
                <slot/>
            </Motion>
        </TooltipContent>
    </AnimatePresence>
</template>

<script lang="ts">
import type {
    TooltipContentEmits as RekaTooltipContentEmits,
    TooltipContentProps as RekaTooltipContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface TooltipContentProps extends RekaTooltipContentProps {
    class?: HTMLAttributes['class']
}
export interface TooltipContentEmits extends RekaTooltipContentEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import { TooltipContent, useForwardPropsEmits } from 'reka-ui'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<TooltipContentProps>(), {
    sideOffset: 4,
})

const emits = defineEmits<TooltipContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
