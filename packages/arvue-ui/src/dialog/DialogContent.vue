<style>
@import './dialog-content.css';
</style>

<template>
    <DialogPortal>
        <AnimatePresence as="div">
            <DialogOverlay as-child>
                <Motion
                    :initial="{ opacity: 0 }"
                    :animate="{ opacity: 1 }"
                    :exit="{ opacity: 0 }"
                    :transition="{
                        duration: .2,
                        ease: 'easeInOut',
                    }"
                />
            </DialogOverlay>
            <DialogContent
                v-bind="{ ...$attrs, ...forwarded }"
                :class="clsx('arvue-dialog-content', props.class)"
                data-slot="dialog-content"
                as-child
            >
                <Motion
                    :initial="{
                        y: '2rem',
                        opacity: 0,
                    }"
                    :animate="{
                        y: 0,
                        opacity: 1,
                    }"
                    :exit="{
                        y: '2rem',
                        opacity: 0,
                    }"
                    :transition="{
                        duration: .2,
                        ease: 'easeInOut',
                    }"
                >
                    <slot/>
                    <DialogClose
                        v-if="showCloseButton"
                        class="arvue-dialog-close-button icon"
                    >
                        <i class="fas fa-times"/>
                    </DialogClose>
                </Motion>
            </DialogContent>
        </AnimatePresence>
    </DialogPortal>
</template>

<script lang="ts">
import type {
    DialogContentEmits as RekaDialogContentEmits,
    DialogContentProps as RekaDialogContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DialogContentProps extends RekaDialogContentProps {
    class?: HTMLAttributes['class']
    showCloseButton?: boolean
}

export interface DialogContentEmits extends RekaDialogContentEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import {
    DialogContent,
    DialogPortal,
    useForwardPropsEmits,
} from 'reka-ui'
import { DialogClose, DialogOverlay } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<DialogContentProps>(), {
    showCloseButton: true,
})
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
