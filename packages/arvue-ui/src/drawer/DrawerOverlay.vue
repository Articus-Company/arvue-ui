<style>
@import './drawer-overlay.css';
</style>

<template>
    <DialogOverlay
        v-bind="delegatedProps"
        :class="clsx('arvue-drawer-overlay', props.class)"
        data-slot="drawer-overlay"
    >
        <slot/>
    </DialogOverlay>
</template>

<script lang="ts">
import type { DialogOverlayProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DrawerOverlayProps extends DialogOverlayProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DialogOverlay } from 'reka-ui'

const props = defineProps<DrawerOverlayProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
