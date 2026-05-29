<template>
    <AutocompletePortal v-bind="props">
        <slot/>
    </AutocompletePortal>
</template>

<script lang="ts">
import type { ComboboxPortalProps } from 'reka-ui'

export interface AutocompletePortalProps extends ComboboxPortalProps {}
</script>

<script setup lang="ts">
import { AutocompletePortal } from 'reka-ui'

const props = defineProps<AutocompletePortalProps>()
</script>
