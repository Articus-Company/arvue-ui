<style>
@import './autocomplete-item.css';
</style>

<template>
    <AutocompleteItem
        v-bind="forwarded"
        :class="clsx('arvue-autocomplete-item', props.class)"
        data-slot="autocomplete-item"
    >
        <slot/>
    </AutocompleteItem>
</template>

<script lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AutocompleteItemProps extends ComboboxItemProps {
    class?: HTMLAttributes['class']
}
export interface AutocompleteItemEmits extends ComboboxItemEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AutocompleteItem, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<AutocompleteItemProps>()
const emits = defineEmits<AutocompleteItemEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
