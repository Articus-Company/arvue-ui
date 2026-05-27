<template>
    <DialogTrigger v-bind="props">
        <slot/>
    </DialogTrigger>
</template>

<script lang="ts">
import type { DialogTriggerProps as RekaDialogTriggerProps } from 'reka-ui'

export interface DialogTriggerProps extends RekaDialogTriggerProps {}
</script>

<script setup lang="ts">
import { DialogTrigger } from 'reka-ui'

const props = defineProps<DialogTriggerProps>()
</script>
