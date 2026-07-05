<template>
    <AutocompleteAnchor
        v-bind="props"
        data-slot="autocomplete-anchor"
    >
        <slot/>
    </AutocompleteAnchor>
</template>

<script lang="ts">
import type { ComboboxAnchorProps } from 'reka-ui'

export interface AutocompleteAnchorProps extends ComboboxAnchorProps {}
</script>

<script setup lang="ts">
import { AutocompleteAnchor } from 'reka-ui'

const props = defineProps<AutocompleteAnchorProps>()
</script>
