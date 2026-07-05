<style>
@import './select-content.css';
</style>

<template>
    <AnimatePresence>
        <SelectContent
            v-bind="{ ...$attrs, ...forwarded }"
            :class="clsx('arvue-select-content', props.class)"
            data-slot="select-content"
            position="popper"
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
                <SelectScrollUpButton/>
                <SelectViewport class="arvue-select-content-viewport">
                    <slot/>
                </SelectViewport>
                <SelectScrollDownButton/>
            </Motion>
        </SelectContent>
    </AnimatePresence>
</template>

<script lang="ts">
import type {
    SelectContentEmits as RekaSelectContentEmits,
    SelectContentProps as RekaSelectContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SelectContentProps extends Omit<RekaSelectContentProps, 'position'> {
    class?: HTMLAttributes['class']
}
export interface SelectContentEmits extends RekaSelectContentEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import {
    SelectContent,
    SelectViewport,
    useForwardPropsEmits,
} from 'reka-ui'
import { SelectScrollDownButton, SelectScrollUpButton } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<SelectContentProps>(), {
    sideOffset: 8,
    collisionPadding: 0,
})
const emits = defineEmits<SelectContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
