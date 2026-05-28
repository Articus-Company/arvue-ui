<template>
    <DrawerTrigger v-bind="props">
        <slot/>
    </DrawerTrigger>
</template>

<script lang="ts">
import type { DrawerTriggerProps } from 'vaul-vue'

export interface SheetTriggerProps extends DrawerTriggerProps {}
</script>

<script setup lang="ts">
import { DrawerTrigger } from 'vaul-vue'

const props = defineProps<SheetTriggerProps>()
</script>
