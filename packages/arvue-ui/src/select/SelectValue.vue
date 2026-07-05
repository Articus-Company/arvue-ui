<style>
@import './select-value.css';
</style>

<template>
    <SelectValue
        v-bind="forwardedProps"
        :class="clsx('arvue-select-value', props.class)"
        data-slot="select-value"
    >
        <slot/>
    </SelectValue>
</template>

<script lang="ts">
import type { SelectValueProps as RekaSelectValueProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SelectValueProps extends RekaSelectValueProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { SelectValue, useForwardProps } from 'reka-ui'

const props = defineProps<SelectValueProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>
