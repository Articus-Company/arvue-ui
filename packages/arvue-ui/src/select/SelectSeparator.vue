<style>
@import './select-separator.css';
</style>

<template>
    <SelectSeparator
        v-bind="delegatedProps"
        :class="clsx('arvue-select-separator', props.class)"
    />
</template>

<script lang="ts">
import type { SelectSeparatorProps as RekaSelectSeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SelectSeparatorProps extends RekaSelectSeparatorProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { SelectSeparator } from 'reka-ui'

const props = defineProps<SelectSeparatorProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
