<style>
@import './progress.css';
</style>

<template>
    <div class="arvue-progress">
        <Motion
            v-if="status && !isIndeterminate"
            class="arvue-progress-status"
            :initial="{ width: '0%' }"
            :animate="{ width: `${percentage}%` }"
            :transition="{ duration: 0.6, ease: 'easeOut' }"
        >
            <slot>
                {{ statusText }}
            </slot>
        </Motion>
        <ProgressRoot
            v-bind="{ ...forwarded, ...$attrs }"
            :class="clsx(
                'arvue-progress-root',
                color && color,
                props.class,
            )"
        >
            <ProgressIndicator
                class="arvue-progress-indicator"
                as-child
            >
                <Motion
                    :initial="indicatorInitial"
                    :animate="indicatorAnimate"
                    :transition="indicatorTransition"
                />
            </ProgressIndicator>
        </ProgressRoot>
    </div>
</template>

<script lang="ts">
import type { Colors } from '@lib/utils'
import type { Transition } from 'motion-v'
import type { ProgressRootEmits, ProgressRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ProgressProps extends ProgressRootProps {
    class?: HTMLAttributes['class']
    color?: Colors
    status?: boolean
}

export interface ProgressEmits extends ProgressRootEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Motion } from 'motion-v'
import {
    ProgressIndicator,
    ProgressRoot,
    useForwardPropsEmits,
} from 'reka-ui'
import { computed } from 'vue'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(
    defineProps<ProgressProps>(),
    {
        modelValue: 0,
        status: undefined,
    },
)

const emits = defineEmits<ProgressEmits>()

const delegatedProps = reactiveOmit(props, 'class', 'color', 'status')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const percentage = computed(() => {
    const max = props.max ?? 100
    const value = props.modelValue ?? 0
    return Math.min(100, Math.max(0, (value / max) * 100))
})

const statusText = computed(() => `${Math.round(percentage.value)}%`)

const isIndeterminate = computed(() => props.modelValue === null || props.modelValue === undefined)

const indicatorInitial = computed(() => (
    isIndeterminate.value
        ? { width: '100%' }
        : { width: '0%' }
))

const indicatorAnimate = computed(() => (
    isIndeterminate.value
        ? { x: ['-100%', '200%'], width: '50%' }
        : { x: `-${100 - percentage.value}%`, width: '100%' }
))

const indicatorTransition = computed<Transition>(() => (
    isIndeterminate.value
        ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        : { duration: 0.6, ease: 'easeOut' }
))
</script>
