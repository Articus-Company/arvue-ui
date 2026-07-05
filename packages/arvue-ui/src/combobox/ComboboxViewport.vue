<template>
    <ComboboxViewport
        v-bind="props"
        data-slot="combobox-viewport"
    >
        <slot/>
    </ComboboxViewport>
</template>

<script lang="ts">
import type { ComboboxViewportProps as RekaComboboxViewportProps } from 'reka-ui'

export interface ComboboxViewportProps extends RekaComboboxViewportProps {}
</script>

<script setup lang="ts">
import { ComboboxViewport } from 'reka-ui'

const props = defineProps<ComboboxViewportProps>()
</script>
