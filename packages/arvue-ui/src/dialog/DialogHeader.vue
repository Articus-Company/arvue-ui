<style>
@import "./dialog-header.css";
</style>

<template>
    <Primitive :class="clsx('arvue-dialog-header', props.class)">
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface DialogHeaderProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<DialogHeaderProps>()
</script>
