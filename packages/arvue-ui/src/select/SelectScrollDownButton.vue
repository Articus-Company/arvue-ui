<style>
@import './select-scroll-button.css';
</style>

<template>
    <SelectScrollDownButton
        v-bind="forwardedProps"
        :class="clsx('arvue-select-scroll-button', props.class)"
    >
        <i class="fas fa-chevron-down"/>
    </SelectScrollDownButton>
</template>

<script lang="ts">
import type { SelectScrollDownButtonProps as RekaSelectScrollDownButtonProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SelectScrollDownButtonProps extends RekaSelectScrollDownButtonProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { SelectScrollDownButton, useForwardProps } from 'reka-ui'

const props = defineProps<SelectScrollDownButtonProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>
