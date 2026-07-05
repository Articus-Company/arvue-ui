<template>
    <DialogTrigger
        v-bind="props"
        data-slot="drawer-trigger"
    >
        <slot/>
    </DialogTrigger>
</template>

<script lang="ts">
import type { DialogTriggerProps } from 'reka-ui'

export interface DrawerTriggerProps extends DialogTriggerProps {}
</script>

<script setup lang="ts">
import { DialogTrigger } from 'reka-ui'

const props = defineProps<DrawerTriggerProps>()
</script>
