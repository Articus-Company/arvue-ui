<template>
    <ComboboxPortal v-bind="props">
        <slot/>
    </ComboboxPortal>
</template>

<script lang="ts">
import type { ComboboxPortalProps as RekaComboboxPortalProps } from 'reka-ui'

export interface ComboboxPortalProps extends RekaComboboxPortalProps {}
</script>

<script setup lang="ts">
import { ComboboxPortal } from 'reka-ui'

const props = defineProps<ComboboxPortalProps>()
</script>
