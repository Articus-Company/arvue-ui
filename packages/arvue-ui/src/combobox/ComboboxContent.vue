<style>
@import './combobox-content.css';
</style>

<template>
    <AnimatePresence>
        <ComboboxContent
            v-bind="{ ...$attrs, ...forwarded }"
            :class="clsx('arvue-combobox-content', props.class)"
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
                <ComboboxViewport>
                    <slot/>
                </ComboboxViewport>
            </Motion>
        </ComboboxContent>
    </AnimatePresence>
</template>

<script lang="ts">
import type {
    ComboboxContentEmits as RekaComboboxContentEmits,
    ComboboxContentProps as RekaComboboxContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ComboboxContentProps extends Omit<RekaComboboxContentProps, 'position'> {
    class?: HTMLAttributes['class']
}
export interface ComboboxContentEmits extends RekaComboboxContentEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import { ComboboxContent, useForwardPropsEmits } from 'reka-ui'
import { ComboboxViewport } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(
    defineProps<ComboboxContentProps>(),
    {
        sideOffset: 8,
    },
)
const emits = defineEmits<ComboboxContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
