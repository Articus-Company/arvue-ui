<template>
    <ContextMenuTrigger
        v-bind="forwardedProps"
        data-slot="context-menu-trigger"
    >
        <slot/>
    </ContextMenuTrigger>
</template>

<script lang="ts">
import type { ContextMenuTriggerProps as RekaContextMenuTriggerProps } from 'reka-ui'

export interface ContextMenuTriggerProps extends RekaContextMenuTriggerProps {}
</script>

<script setup lang="ts">
import { ContextMenuTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<ContextMenuTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>
