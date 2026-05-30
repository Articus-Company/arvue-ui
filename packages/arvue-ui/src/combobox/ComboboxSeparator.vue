<style>
@import 'combobox-separator.css';
</style>

<template>
    <ComboboxSeparator
        v-bind="delegatedProps"
        :class="clsx('arvue-combobox-separator', props.class)"
    >
        <slot/>
    </ComboboxSeparator>
</template>

<script lang="ts">
import type { ComboboxSeparatorProps as RekaComboboxSeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ComboboxSeparatorProps extends RekaComboboxSeparatorProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { ComboboxSeparator } from 'reka-ui'

const props = defineProps<ComboboxSeparatorProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
