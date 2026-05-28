<template>
    <DrawerClose v-bind="props">
        <slot/>
    </DrawerClose>
</template>

<script lang="ts">
import type { DrawerCloseProps } from 'vaul-vue'

export interface SheetCloseProps extends DrawerCloseProps {}
</script>

<script setup lang="ts">
import { DrawerClose } from 'vaul-vue'

const props = withDefaults(defineProps<SheetCloseProps>(), {
    as: 'a',
})
</script>
