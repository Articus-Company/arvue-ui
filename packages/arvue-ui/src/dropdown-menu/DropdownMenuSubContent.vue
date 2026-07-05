<style>
@import './dropdown-menu-sub-content.css';
</style>

<template>
    <AnimatePresence>
        <DropdownMenuSubContent
            v-bind="{ ...$attrs, ...forwarded }"
            :class="clsx('arvue-dropdown-menu-sub-content', props.class)"
            data-slot="dropdown-menu-sub-content"
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
        </DropdownMenuSubContent>
    </AnimatePresence>
</template>

<script lang="ts">
import type {
    DropdownMenuSubContentEmits as RekaDropdownMenuSubContentEmits,
    DropdownMenuSubContentProps as RekaDropdownMenuSubContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DropdownMenuSubContentProps extends RekaDropdownMenuSubContentProps {
    class?: HTMLAttributes['class']
}

export interface DropdownMenuSubContentEmits extends RekaDropdownMenuSubContentEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import {
    DropdownMenuSubContent,
    useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(
    defineProps<DropdownMenuSubContentProps>(),
    {
        sideOffset: 8,
    },
)
const emits = defineEmits<DropdownMenuSubContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
