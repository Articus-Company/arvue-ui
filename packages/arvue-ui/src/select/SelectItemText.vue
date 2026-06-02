<template>
    <SelectItemText v-bind="props">
        <slot/>
    </SelectItemText>
</template>

<script lang="ts">
import type { SelectItemTextProps as RekaSelectItemTextProps } from 'reka-ui'

export interface SelectItemTextProps extends RekaSelectItemTextProps {}
</script>

<script setup lang="ts">
import { SelectItemText } from 'reka-ui'

const props = defineProps<SelectItemTextProps>()
</script>
