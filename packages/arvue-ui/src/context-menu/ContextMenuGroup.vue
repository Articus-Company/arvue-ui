<template>
    <ContextMenuGroup
        v-bind="props"
        data-slot="context-menu-group"
    >
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
