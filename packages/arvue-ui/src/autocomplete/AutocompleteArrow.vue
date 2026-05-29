<template>
    <AutocompleteArrow v-bind="props">
        <slot/>
    </AutocompleteArrow>
</template>

<script lang="ts">
import type { ComboboxArrowProps } from 'reka-ui'

export interface AutocompleteArrowProps extends ComboboxArrowProps {}
</script>

<script setup lang="ts">
import { AutocompleteArrow } from 'reka-ui'

const props = defineProps<AutocompleteArrowProps>()
</script>
