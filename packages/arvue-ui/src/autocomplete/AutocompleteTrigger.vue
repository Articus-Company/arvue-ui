<template>
    <AutocompleteTrigger
        v-bind="props"
        data-slot="autocomplete-trigger"
    >
        <slot/>
    </AutocompleteTrigger>
</template>

<script lang="ts">
import type { ComboboxTriggerProps } from 'reka-ui'

export interface AutocompleteTriggerProps extends ComboboxTriggerProps {}
</script>

<script setup lang="ts">
import { AutocompleteTrigger } from 'reka-ui'

const props = defineProps<AutocompleteTriggerProps>()
</script>
