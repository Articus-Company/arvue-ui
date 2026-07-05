<style>
@import './combobox-label.css';
</style>

<template>
    <ComboboxLabel
        v-bind="delegatedProps"
        :class="clsx('arvue-combobox-label', props.class)"
        data-slot="combobox-label"
    >
        <slot/>
    </ComboboxLabel>
</template>

<script lang="ts">
import type { ComboboxLabelProps as RekaComboboxLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ComboboxLabelProps extends RekaComboboxLabelProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { ComboboxLabel } from 'reka-ui'

const props = defineProps<ComboboxLabelProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
