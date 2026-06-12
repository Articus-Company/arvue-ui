<template>
    <AlertDialogAction v-bind="forwarded">
        <slot/>
    </AlertDialogAction>
</template>

<script lang="ts">
import type { AlertDialogActionProps as RekaAlertDialogActionProps } from 'reka-ui'

export interface AlertDialogActionProps extends RekaAlertDialogActionProps {}
</script>

<script setup lang="ts">
import { AlertDialogAction, useForwardProps } from 'reka-ui'

const props = defineProps<AlertDialogActionProps>()

const forwarded = useForwardProps(props)
</script>
