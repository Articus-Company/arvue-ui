<template>
    <CollapsibleTrigger
        v-bind="props"
        data-slot="collapsible-trigger"
    >
        <slot/>
    </CollapsibleTrigger>
</template>

<script lang="ts">
import type { CollapsibleTriggerProps as RekaCollapsibleTriggerProps } from 'reka-ui'

export interface CollapsibleTriggerProps extends RekaCollapsibleTriggerProps {
}
</script>

<script setup lang="ts">
import { CollapsibleTrigger } from 'reka-ui'

const props = defineProps<CollapsibleTriggerProps>()
</script>
