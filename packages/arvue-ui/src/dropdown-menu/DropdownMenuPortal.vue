<template>
    <DropdownMenuPortal v-bind="props">
        <slot/>
    </DropdownMenuPortal>
</template>

<script lang="ts">
import type { DropdownMenuPortalProps as RekaDropdownMenuPortalProps } from 'reka-ui'

export interface DropdownMenuPortalProps extends RekaDropdownMenuPortalProps {}
</script>

<script setup lang="ts">
import { DropdownMenuPortal } from 'reka-ui'

const props = defineProps<DropdownMenuPortalProps>()
</script>
