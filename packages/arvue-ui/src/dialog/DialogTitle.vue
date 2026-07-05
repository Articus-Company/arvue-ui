<style>
@import './dialog-title.css';
</style>

<template>
    <DialogTitle
        :class="clsx('arvue-dialog-title', props.class)"
        v-bind="delegatedProps"
        data-slot="dialog-title"
    >
        <slot/>
    </DialogTitle>
</template>

<script lang="ts">
import type { DialogTitleProps as RekaDialogTitleProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DialogTitleProps extends RekaDialogTitleProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DialogTitle } from 'reka-ui'

const props = withDefaults(defineProps<DialogTitleProps>(), {
    as: 'h3',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
