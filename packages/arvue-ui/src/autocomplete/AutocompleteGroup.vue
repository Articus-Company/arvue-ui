<template>
    <AutocompleteGroup
        v-bind="props"
        data-slot="autocomplete-group"
    >
        <slot/>
    </AutocompleteGroup>
</template>

<script lang="ts">
import type { ComboboxGroupProps } from 'reka-ui'

export interface AutocompleteGroupProps extends ComboboxGroupProps {}
</script>

<script setup lang="ts">
import { AutocompleteGroup } from 'reka-ui'

const props = defineProps<AutocompleteGroupProps>()
</script>
