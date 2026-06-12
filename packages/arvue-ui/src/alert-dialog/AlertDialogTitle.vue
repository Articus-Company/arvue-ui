<style>
@import './alert-dialog-title.css';
</style>

<template>
    <AlertDialogTitle
        :class="clsx('arvue-alert-dialog-title', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </AlertDialogTitle>
</template>

<script lang="ts">
import type { AlertDialogTitleProps as RekaAlertDialogTitleProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AlertDialogTitleProps extends RekaAlertDialogTitleProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AlertDialogTitle } from 'reka-ui'

const props = withDefaults(defineProps<AlertDialogTitleProps>(), {
    as: 'h3',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
