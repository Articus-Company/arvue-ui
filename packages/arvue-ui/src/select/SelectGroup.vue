<template>
    <SelectGroup v-bind="props">
        <slot/>
    </SelectGroup>
</template>

<script lang="ts">
import type { SelectGroupProps as RekaSelectGroupProps } from 'reka-ui'

export interface SelectGroupProps extends RekaSelectGroupProps {}
</script>

<script setup lang="ts">
import { SelectGroup } from 'reka-ui'

const props = defineProps<SelectGroupProps>()
</script>
