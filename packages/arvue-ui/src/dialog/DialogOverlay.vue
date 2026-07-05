<style>
@import './dialog-overlay.css';
</style>

<template>
    <DialogOverlay
        v-bind="delegatedProps"
        :class="clsx('arvue-dialog-overlay', props.class)"
        data-slot="dialog-overlay"
    >
        <slot/>
    </DialogOverlay>
</template>

<script lang="ts">
import type { DialogOverlayProps as RekaDialogOverlayProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DialogOverlayProps extends RekaDialogOverlayProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DialogOverlay } from 'reka-ui'

const props = defineProps<DialogOverlayProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
