<style>
@import './alert-dialog-content.css';
</style>

<template>
    <AlertDialogPortal>
        <AnimatePresence as="div">
            <AlertDialogOverlay
                class="arvue-alert-dialog-overlay"
                as-child
            >
                <Motion
                    :initial="{ opacity: 0 }"
                    :animate="{ opacity: 1 }"
                    :exit="{ opacity: 0 }"
                    :transition="{
                        duration: .2,
                        ease: 'easeInOut',
                    }"
                />
            </AlertDialogOverlay>
            <AlertDialogContent
                v-bind="{ ...$attrs, ...forwarded }"
                :class="clsx('arvue-alert-dialog-content', props.class)"
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
                </Motion>
            </AlertDialogContent>
        </AnimatePresence>
    </AlertDialogPortal>
</template>

<script lang="ts">
import type {
    AlertDialogContentEmits as RekaAlertDialogContentEmits,
    AlertDialogContentProps as RekaAlertDialogContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AlertDialogContentProps extends RekaAlertDialogContentProps {
    class?: HTMLAttributes['class']
}
export interface AlertDialogContentEmits extends RekaAlertDialogContentEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AnimatePresence, Motion } from 'motion-v'
import {
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogPortal,
    useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
    inheritAttrs: false,
})

const props = defineProps<AlertDialogContentProps>()
const emits = defineEmits<AlertDialogContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
