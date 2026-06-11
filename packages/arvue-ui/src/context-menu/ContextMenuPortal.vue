<template>
    <ContextMenuPortal v-bind="props">
        <slot/>
    </ContextMenuPortal>
</template>

<script lang="ts">
import type { ContextMenuPortalProps as RekaContextMenuPortalProps } from 'reka-ui'

export interface ContextMenuPortalProps extends RekaContextMenuPortalProps {}
</script>

<script setup lang="ts">
import { ContextMenuPortal } from 'reka-ui'

const props = defineProps<ContextMenuPortalProps>()
</script>
