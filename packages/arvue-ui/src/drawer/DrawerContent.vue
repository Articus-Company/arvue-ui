<style>
@import './drawer-content.css';
</style>

<template>
    <DialogPortal>
        <AnimatePresence as="div">
            <DrawerOverlay as-child>
                <Motion
                    :initial="{ opacity: 0 }"
                    :animate="{ opacity: 1 }"
                    :exit="{ opacity: 0 }"
                    :transition="{
                        duration: .3,
                        ease: 'easeInOut',
                    }"
                />
            </DrawerOverlay>
            <DialogContent
                :class="clsx(
                    'arvue-drawer-content',
                    side === 'top' && 'top',
                    side === 'right' && 'right',
                    side === 'bottom' && 'bottom',
                    side === 'left' && 'left',
                    props.class,
                )"
                v-bind="{ ...$attrs, ...forwarded }"
                as-child
            >
                <Motion
                    v-bind="motionProps"
                    :transition="{
                        duration: .3,
                        ease: 'easeIn',
                    }"
                >
                    <slot/>
                    <DrawerClose
                        v-if="showCloseButton"
                        class="arvue-drawer-close-button icon"
                    >
                        <i class="fas fa-times"/>
                    </DrawerClose>
                </Motion>
            </DialogContent>
        </AnimatePresence>
    </DialogPortal>
</template>

<script lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DrawerContentEmits extends DialogContentEmits {
}

export interface DrawerContentProps extends DialogContentProps {
    class?: HTMLAttributes['class']
    side?: 'top' | 'right' | 'bottom' | 'left'
    showCloseButton?: boolean
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
import { computed } from 'vue'
import { DrawerClose, DrawerOverlay } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<DrawerContentProps>(), {
    side: 'right',
    showCloseButton: true,
})
const emits = defineEmits<DrawerContentEmits>()

const delegatedProps = reactiveOmit(props, 'class', 'side')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const sideMotion = {
    top: { initial: { y: '-100%' }, animate: { y: 0 }, exit: { y: '-100%' } },
    bottom: { initial: { y: '100%' }, animate: { y: 0 }, exit: { y: '100%' } },
    left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
    right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
} satisfies Record<NonNullable<DrawerContentProps['side']>, object>

const motionProps = computed(() => sideMotion[props.side])
</script>
