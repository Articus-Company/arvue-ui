<style>
@import './circle-progress.css';
</style>

<template>
    <div
        class="arvue-circle-progress"
        data-slot="circle-progress-wrapper"
    >
        <ProgressRoot
            :class="clsx(
                'arvue-circle-progress-root',
                color && color,
                props.class,
            )"
            v-bind="{ ...forwarded, ...$attrs }"
            data-slot="circle-progress"
            as-child
        >
            <Motion
                as="svg"
                viewBox="0 0 100 100"
                :style="{ originX: 0.5, originY: 0.5 }"
                :initial="{ rotate: 0 }"
                :animate="rootAnimate"
                :transition="rootTransition"
            >
                <path
                    class="arvue-circle-progress-track"
                    :style="{ 'stroke-width': width }"
                    :d="trackPath"
                />
                <ProgressIndicator as-child>
                    <Motion
                        as="path"
                        :d="trackPath"
                        class="arvue-circle-progress-indicator"
                        data-slot="circle-progress-indicator"
                        :style="{
                            strokeLinecap: 'round',
                            strokeWidth: width,
                        }"
                        :initial="indicatorInitial"
                        :animate="indicatorAnimate"
                        :transition="indicatorTransition"
                    />
                </ProgressIndicator>
            </Motion>
            <div
                v-if="status && !isIndeterminate"
                class="arvue-circle-progress-status"
                data-slot="circle-progress-status"
            >
                <span
                    class="arvue-circle-progress-status-text"
                    data-slot="circle-progress-status-text"
                >
                    <slot>
                        {{ statusText }}
                    </slot>
                </span>
            </div>
        </ProgressRoot>
    </div>
</template>

<script lang="ts">
import type { Colors } from '@lib/utils'
import type { Transition } from 'motion-v'
import type { ProgressRootEmits, ProgressRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface CircleProgressProps extends ProgressRootProps {
    class?: HTMLAttributes['class']
    color?: Colors
    status?: boolean
    width?: string
}

export interface CircleProgressEmits extends ProgressRootEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Motion } from 'motion-v'
import { ProgressIndicator, ProgressRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(
    defineProps<CircleProgressProps>(),
    {
        modelValue: 0,
        status: true,
        width: '3px',
    },
)

const emits = defineEmits<CircleProgressEmits>()

const delegatedProps = reactiveOmit(props, 'class', 'color', 'status')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const percentage = computed(() => {
    const max = props.max ?? 100
    const value = props.modelValue ?? 0
    return Math.min(100, Math.max(0, (value / max) * 100))
})

const statusText = computed(() => `${Math.round(percentage.value)}%`)

const isIndeterminate = computed(() => props.modelValue === null || props.modelValue === undefined)

const RADIUS = 45
const circumference = 2 * Math.PI * RADIUS

const dashOffset = computed(() =>
    (percentage.value / 100) * circumference,
)

const trackPath = computed(() => {
    const r = RADIUS
    return `
          M 50 50
          m 0 -${r}
          a ${r} ${r} 0 1 1 0 ${r * 2}
          a ${r} ${r} 0 1 1 0 -${r * 2}
          `
})

const rootAnimate = computed(() => (
    isIndeterminate.value
        ? { rotate: 360 }
        : { rotate: 0 }
))

const rootTransition = computed<Transition>(() => (
    isIndeterminate.value
        ? { duration: 1.4, repeat: Infinity, ease: 'linear' }
        : { duration: 0.3, ease: 'easeOut' }
))

const indicatorInitial = computed(() => (
    isIndeterminate.value
        ? { strokeDasharray: `${circumference * 0.05}px, ${circumference}px` }
        : { strokeDasharray: `0px, ${circumference}px` }
))

const indicatorAnimate = computed(() => (
    isIndeterminate.value
        ? {
                strokeDasharray: [`${circumference * 0.45}px, ${circumference}px`],
                opacity: 1,
            }
        : {
                strokeDasharray: `${dashOffset.value}px, ${circumference}px`,
                opacity: percentage.value === 0 ? 0 : 1,
            }
))

const indicatorTransition = computed<Transition>(() => (
    isIndeterminate.value
        ? {
                strokeDasharray: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
                opacity: { duration: 0.3, ease: 'easeOut' },
            }
        : {
                strokeDasharray: { duration: 0.6, ease: 'easeOut' },
                opacity: { duration: 0.3, ease: 'easeOut' },
            }
))
</script>
