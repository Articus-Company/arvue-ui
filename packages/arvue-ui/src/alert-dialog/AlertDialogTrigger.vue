<template>
    <AlertDialogTrigger
        v-bind="props"
        data-slot="alert-dialog-trigger"
    >
        <slot/>
    </AlertDialogTrigger>
</template>

<script lang="ts">
import type { AlertDialogTriggerProps as RekaAlertDialogTriggerProps } from 'reka-ui'

export interface AlertDialogTriggerProps extends RekaAlertDialogTriggerProps {}
</script>

<script setup lang="ts">
import { AlertDialogTrigger } from 'reka-ui'

const props = defineProps<AlertDialogTriggerProps>()
</script>
