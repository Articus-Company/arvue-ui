<template>
    <PopoverTrigger
        v-bind="props"
        data-slot="popover-trigger"
    >
        <slot/>
    </PopoverTrigger>
</template>

<script lang="ts">
import type { PopoverTriggerProps as RekaPopoverTriggerProps } from 'reka-ui'

export interface PopoverTriggerProps extends RekaPopoverTriggerProps {}
</script>

<script setup lang="ts">
import { PopoverTrigger } from 'reka-ui'

const props = defineProps<PopoverTriggerProps>()
</script>
