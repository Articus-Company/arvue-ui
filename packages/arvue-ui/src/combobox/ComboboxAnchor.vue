<template>
    <ComboboxAnchor
        v-bind="props"
        data-slot="combobox-anchor"
    >
        <slot/>
    </ComboboxAnchor>
</template>

<script lang="ts">
import type { ComboboxAnchorProps as RekaComboboxAnchorProps } from 'reka-ui'

export interface ComboboxAnchorProps extends RekaComboboxAnchorProps {}
</script>

<script setup lang="ts">
import { ComboboxAnchor } from 'reka-ui'

const props = defineProps<ComboboxAnchorProps>()
</script>
