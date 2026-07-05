<style>
@import './alert-dialog-footer.css';
</style>

<template>
    <Primitive
        :class="clsx('arvue-alert-dialog-footer', props.class)"
        v-bind="delegatedProps"
        data-slot="alert-dialog-footer"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AlertDialogFooterProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<AlertDialogFooterProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
