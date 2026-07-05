<template>
    <AlertDialogRoot
        v-slot="slotProps"
        v-bind="forwarded"
        data-slot="alert-dialog"
    >
        <slot v-bind="slotProps"/>
    </AlertDialogRoot>
</template>

<script lang="ts">
import type {
    AlertDialogEmits as RekaAlertDialogEmits,
    AlertDialogProps as RekaAlertDialogProps,
} from 'reka-ui'

export interface AlertDialogProps extends RekaAlertDialogProps {
}

export interface AlertDialogEmits extends RekaAlertDialogEmits {
}
</script>

<script setup lang="ts">
import { AlertDialogRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<AlertDialogProps>()
const emits = defineEmits<AlertDialogEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
