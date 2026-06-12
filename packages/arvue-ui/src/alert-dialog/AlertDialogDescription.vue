<style>
@import './alert-dialog-description.css';
</style>

<template>
    <AlertDialogDescription
        :class="clsx('arvue-alert-dialog-description', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </AlertDialogDescription>
</template>

<script lang="ts">
import type { AlertDialogDescriptionProps as RekaAlertDialogDescriptionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AlertDialogDescriptionProps extends RekaAlertDialogDescriptionProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AlertDialogDescription } from 'reka-ui'

const props = withDefaults(defineProps<AlertDialogDescriptionProps>(), {
    as: 'p',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
