<style>
@import './autocomplete-content.css';
</style>

<template>
    <AutocompleteContent
        v-bind="{ ...$attrs, ...forwarded }"
        :class="clsx('arvue-autocomplete-content', props.class)"
        position="popper"
    >
        <AutocompleteViewport>
            <slot/>
        </AutocompleteViewport>
    </AutocompleteContent>
</template>

<script lang="ts">
import type { ComboboxContentEmits, ComboboxContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AutocompleteContentProps extends Omit<ComboboxContentProps, 'position'> {
    class?: HTMLAttributes['class']
}
export interface AutocompleteContentEmits extends ComboboxContentEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AutocompleteContent, useForwardPropsEmits } from 'reka-ui'
import { AutocompleteViewport } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = defineProps<AutocompleteContentProps>()
const emits = defineEmits<AutocompleteContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
