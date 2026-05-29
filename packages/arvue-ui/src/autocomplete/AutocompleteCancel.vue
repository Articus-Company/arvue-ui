<template>
    <AutocompleteCancel v-bind="props">
        <slot/>
    </AutocompleteCancel>
</template>

<script lang="ts">
import type { ComboboxCancelProps } from 'reka-ui'

export interface AutocompleteCancelProps extends ComboboxCancelProps {}
</script>

<script setup lang="ts">
import { AutocompleteCancel } from 'reka-ui'

const props = defineProps<AutocompleteCancelProps>()
</script>
