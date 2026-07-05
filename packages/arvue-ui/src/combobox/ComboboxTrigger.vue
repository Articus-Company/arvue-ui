<template>
    <ComboboxTrigger
        v-bind="props"
        data-slot="combobox-trigger"
    >
        <slot/>
    </ComboboxTrigger>
</template>

<script lang="ts">
import type { ComboboxTriggerProps as RekaComboboxTriggerProps } from 'reka-ui'

export interface ComboboxTriggerProps extends RekaComboboxTriggerProps {}
</script>

<script setup lang="ts">
import { ComboboxTrigger } from 'reka-ui'

const props = defineProps<ComboboxTriggerProps>()
</script>
