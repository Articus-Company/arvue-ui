<template>
    <DropdownMenuTrigger v-bind="forwardedProps">
        <slot/>
    </DropdownMenuTrigger>
</template>

<script lang="ts">
import type { DropdownMenuTriggerProps as RekaDropdownMenuTriggerProps } from 'reka-ui'

export interface DropdownMenuTriggerProps extends RekaDropdownMenuTriggerProps {}
</script>

<script setup lang="ts">
import { DropdownMenuTrigger, useForwardProps } from 'reka-ui'

const props = defineProps<DropdownMenuTriggerProps>()

const forwardedProps = useForwardProps(props)
</script>
