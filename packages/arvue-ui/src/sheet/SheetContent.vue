<style>
@import './sheet-content.css';
</style>

<template>
    <DrawerPortal>
        <SheetOverlay/>
        <DrawerContent
            :class="clsx('arvue-sheet-content', props.class)"
            v-bind="{ ...$attrs, ...forwarded }"
        >
            <div
                v-if="showHandle"
                class="arvue-sheet-handle"
            />
            <slot/>
        </DrawerContent>
    </DrawerPortal>
</template>

<script lang="ts">
import type { DialogContentEmits, DialogContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SheetContentEmits extends DialogContentEmits {
}

export interface SheetContentProps extends DialogContentProps {
    class?: HTMLAttributes['class']
    showHandle?: boolean
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerContent, DrawerPortal } from 'vaul-vue'
import { SheetOverlay } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<SheetContentProps>(), {
    showHandle: true,
})
const emits = defineEmits<SheetContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
