<style>
@import './alert-dialog-header.css';
</style>

<template>
    <Primitive
        :class="clsx('arvue-alert-dialog-header', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AlertDialogHeaderProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<AlertDialogHeaderProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
