<template>
    <AutocompleteViewport
        v-bind="props"
        data-slot="autocomplete-viewport"
    >
        <slot/>
    </AutocompleteViewport>
</template>

<script lang="ts">
import type { ComboboxViewportProps } from 'reka-ui'

export interface AutocompleteViewportProps extends ComboboxViewportProps {}
</script>

<script setup lang="ts">
import { AutocompleteViewport } from 'reka-ui'

const props = defineProps<AutocompleteViewportProps>()
</script>
