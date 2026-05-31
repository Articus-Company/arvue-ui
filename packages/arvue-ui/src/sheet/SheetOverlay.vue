<style>
@import './sheet-overlay.css';
</style>

<template>
    <DrawerOverlay
        :class="clsx('arvue-sheet-overlay', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </DrawerOverlay>
</template>

<script lang="ts">
import type { DialogOverlayProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SheetOverlayProps extends DialogOverlayProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DrawerOverlay } from 'vaul-vue'

const props = defineProps<SheetOverlayProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
