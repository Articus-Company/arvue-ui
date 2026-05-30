<template>
    <ComboboxCancel v-bind="props">
        <slot/>
    </ComboboxCancel>
</template>

<script lang="ts">
import type { ComboboxCancelProps as RekaComboboxCancelProps } from 'reka-ui'

export interface ComboboxCancelProps extends RekaComboboxCancelProps {}
</script>

<script setup lang="ts">
import { ComboboxCancel } from 'reka-ui'

const props = defineProps<ComboboxCancelProps>()
</script>
