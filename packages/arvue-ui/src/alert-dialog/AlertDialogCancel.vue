<template>
    <AlertDialogCancel
        v-bind="forwarded"
        data-slot="alert-dialog-cancel"
    >
        <slot/>
    </AlertDialogCancel>
</template>

<script lang="ts">
import type { AlertDialogCancelProps as RekaAlertDialogCancelProps } from 'reka-ui'

export interface AlertDialogCancelProps extends RekaAlertDialogCancelProps {}
</script>

<script setup lang="ts">
import { AlertDialogCancel, useForwardProps } from 'reka-ui'

const props = defineProps<AlertDialogCancelProps>()

const forwarded = useForwardProps(props)
</script>
