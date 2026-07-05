<template>
    <DialogClose
        v-bind="props"
        data-slot="drawer-close"
    >
        <slot/>
    </DialogClose>
</template>

<script lang="ts">
import type { DialogCloseProps } from 'reka-ui'

export interface DrawerCloseProps extends DialogCloseProps {}
</script>

<script setup lang="ts">
import { DialogClose } from 'reka-ui'

const props = withDefaults(defineProps<DrawerCloseProps>(), {
    as: 'a',
})
</script>
