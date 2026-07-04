<template>
    <PopoverAnchor v-bind="props">
        <slot/>
    </PopoverAnchor>
</template>

<script lang="ts">
import type { PopoverAnchorProps as RekaPopoverAnchorProps } from 'reka-ui'

export interface PopoverAnchorProps extends RekaPopoverAnchorProps {}
</script>

<script setup lang="ts">
import { PopoverAnchor } from 'reka-ui'

const props = defineProps<PopoverAnchorProps>()
</script>
