<style>
@import "./dialog-title.css";
</style>

<template>
    <Primitive :class="clsx('arvue-dialog-title', props.class)">
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { DialogTitleProps as RekaDialogTitleProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DialogTitleProps extends RekaDialogTitleProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<DialogTitleProps>()
</script>
