<template>
    <ContextMenuGroup v-bind="props">
        <slot/>
    </ContextMenuGroup>
</template>

<script lang="ts">
import type { ContextMenuGroupProps as RekaContextMenuGroupProps } from 'reka-ui'

export interface ContextMenuGroupProps extends RekaContextMenuGroupProps {
}
</script>

<script setup lang="ts">
import { ContextMenuGroup } from 'reka-ui'

const props = defineProps<ContextMenuGroupProps>()
</script>
