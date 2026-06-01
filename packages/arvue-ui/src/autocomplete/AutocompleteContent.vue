<style>
@import './autocomplete-content.css';
</style>

<template>
    <AnimatePresence>
        <AutocompleteContent
            v-bind="{ ...$attrs, ...forwarded }"
            :class="clsx('arvue-autocomplete-content', props.class)"
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
                <AutocompleteViewport>
                    <slot/>
                </AutocompleteViewport>
            </Motion>
        </AutocompleteContent>
    </AnimatePresence>
</template>

<script lang="ts">
import type { ComboboxContentEmits, ComboboxContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AutocompleteContentProps extends Omit<ComboboxContentProps, 'position'> {
    class?: HTMLAttributes['class']
}
export interface AutocompleteContentEmits extends ComboboxContentEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import { AutocompleteContent, useForwardPropsEmits } from 'reka-ui'
import { AutocompleteViewport } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(
    defineProps<AutocompleteContentProps>(),
    {
        sideOffset: 8,
    },
)
const emits = defineEmits<AutocompleteContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
