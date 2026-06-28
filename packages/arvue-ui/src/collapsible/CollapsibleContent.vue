<template>
    <CollapsibleContent v-bind="props">
        <slot/>
    </CollapsibleContent>
</template>

<script lang="ts">
import type { CollapsibleContentProps as RekaCollapsibleContentProps } from 'reka-ui'

export interface CollapsibleContentProps extends RekaCollapsibleContentProps {
}
</script>

<script setup lang="ts">
import { CollapsibleContent } from 'reka-ui'

const props = defineProps<CollapsibleContentProps>()
</script>
