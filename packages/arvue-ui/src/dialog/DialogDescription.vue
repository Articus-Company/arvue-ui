<style>
@import './dialog-description.css';
</style>

<template>
    <DialogDescription
        :class="clsx('arvue-dialog-description', props.class)"
        v-bind="delegatedProps"
        data-slot="dialog-description"
    >
        <slot/>
    </DialogDescription>
</template>

<script lang="ts">
import type { DialogDescriptionProps as RekaDialogDescriptionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DialogDescriptionProps extends RekaDialogDescriptionProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DialogDescription } from 'reka-ui'

const props = withDefaults(defineProps<DialogDescriptionProps>(), {
    as: 'p',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
