<template>
    <DialogClose
        v-bind="props"
        data-slot="dialog-close"
    >
        <slot/>
    </DialogClose>
</template>

<script lang="ts">
import type { DialogCloseProps as RekaDialogCloseProps } from 'reka-ui'

export interface DialogCloseProps extends RekaDialogCloseProps {}
</script>

<script setup lang="ts">
import { DialogClose } from 'reka-ui'

const props = withDefaults(defineProps<DialogCloseProps>(), {
    as: 'a',
})
</script>
