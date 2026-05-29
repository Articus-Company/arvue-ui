<style>
@import './autocomplete.css';
</style>

<template>
    <AutocompleteRoot
        v-slot="slotProps"
        v-bind="forwarded"
        :class="clsx('arvue-autocomplete', props.class)"
    >
        <slot v-bind="slotProps"/>
    </AutocompleteRoot>
</template>

<script lang="ts">
import type { AutocompleteRootEmits, AutocompleteRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AutocompleteProps extends AutocompleteRootProps {
    class?: HTMLAttributes['class']
}
export interface AutocompleteEmits extends AutocompleteRootEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AutocompleteRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<AutocompleteProps>()
const emits = defineEmits<AutocompleteEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
