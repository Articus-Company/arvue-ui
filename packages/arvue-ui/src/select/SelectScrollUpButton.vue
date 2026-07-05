<style>
@import './select-scroll-button.css';
</style>

<template>
    <SelectScrollUpButton
        v-bind="forwardedProps"
        :class="clsx('arvue-select-scroll-button', props.class)"
        data-slot="select-scroll-up-button"
    >
        <i class="fas fa-chevron-up"/>
    </SelectScrollUpButton>
</template>

<script lang="ts">
import type { SelectScrollUpButtonProps as RekaSelectScrollUpButtonProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SelectScrollUpButtonProps extends RekaSelectScrollUpButtonProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { SelectScrollUpButton, useForwardProps } from 'reka-ui'

const props = defineProps<SelectScrollUpButtonProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>
