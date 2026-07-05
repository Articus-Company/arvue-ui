<style>
@import './autocomplete-separator.css';
</style>

<template>
    <AutocompleteSeparator
        v-bind="delegatedProps"
        :class="clsx('arvue-autocomplete-separator', props.class)"
        data-slot="autocomplete-separator"
    >
        <slot/>
    </AutocompleteSeparator>
</template>

<script lang="ts">
import type { ComboboxSeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AutocompleteSeparatorProps extends ComboboxSeparatorProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AutocompleteSeparator } from 'reka-ui'

const props = defineProps<AutocompleteSeparatorProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
