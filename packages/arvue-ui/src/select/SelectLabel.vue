<style>
@import './select-label.css';
</style>

<template>
    <SelectLabel
        :class="clsx('arvue-select-label', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </SelectLabel>
</template>

<script lang="ts">
import type { SelectLabelProps as RekaSelectLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SelectLabelProps extends RekaSelectLabelProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { SelectLabel } from 'reka-ui'

const props = defineProps<SelectLabelProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
