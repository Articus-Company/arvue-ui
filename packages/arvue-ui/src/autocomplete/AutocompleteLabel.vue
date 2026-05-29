<style>
@import './autocomplete-label.css';
</style>

<template>
    <AutocompleteLabel
        v-bind="delegatedProps"
        :class="clsx('arvue-autocomplete-label', props.class)"
    >
        <slot/>
    </AutocompleteLabel>
</template>

<script lang="ts">
import type { ComboboxLabelProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AutocompleteLabelProps extends ComboboxLabelProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AutocompleteLabel } from 'reka-ui'

const props = defineProps<AutocompleteLabelProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
