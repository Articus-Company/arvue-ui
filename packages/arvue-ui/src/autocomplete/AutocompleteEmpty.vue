<style>
@import './autocomplete-empty.css';
</style>

<template>
    <AutocompleteEmpty
        v-bind="delegatedProps"
        :class="clsx('arvue-autocomplete-empty', props.class)"
    >
        <slot/>
    </AutocompleteEmpty>
</template>

<script lang="ts">
import type { ComboboxEmptyProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AutocompleteEmptyProps extends ComboboxEmptyProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AutocompleteEmpty } from 'reka-ui'

const props = defineProps<AutocompleteEmptyProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
