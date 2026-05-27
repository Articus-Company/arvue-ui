<style>
@import "./dialog-description.css";
</style>

<template>
    <Primitive :class="clsx('arvue-dialog-description', props.class)">
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { DialogDescriptionProps as RekaDialogDescriptionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DialogDescriptionProps extends RekaDialogDescriptionProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<DialogDescriptionProps>()
</script>
