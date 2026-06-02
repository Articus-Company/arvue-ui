<template>
    <AspectRatio
        v-slot="slotProps"
        v-bind="props"
    >
        <slot v-bind="slotProps"/>
    </AspectRatio>
</template>

<script lang="ts">
import type { AspectRatioProps as RekaAspectRatioProps } from 'reka-ui'

export interface AspectRatioProps extends RekaAspectRatioProps {}
</script>

<script setup lang="ts">
import { AspectRatio } from 'reka-ui'

const props = defineProps<AspectRatioProps>()
</script>
