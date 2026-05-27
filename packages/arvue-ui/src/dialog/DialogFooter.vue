<style>
@import "./dialog-footer.css";
</style>

<template>
    <Primitive :class="clsx('arvue-dialog-footer', props.class)">
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface DialogFooterProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<DialogFooterProps>()
</script>
