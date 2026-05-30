<template>
    <ComboboxGroup v-bind="props">
        <slot/>
    </ComboboxGroup>
</template>

<script lang="ts">
import type { ComboboxGroupProps as RekaComboboxGroupProps } from 'reka-ui'

export interface ComboboxGroupProps extends RekaComboboxGroupProps {}
</script>

<script setup lang="ts">
import { ComboboxGroup } from 'reka-ui'

const props = defineProps<ComboboxGroupProps>()
</script>
