<template>
    <DialogRoot
        v-slot="slotProps"
        v-bind="forwarded"
    >
        <slot v-bind="slotProps"/>
    </DialogRoot>
</template>

<script lang="ts">
import type { DialogRootEmits, DialogRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DialogProps extends DialogRootProps {
    class?: HTMLAttributes['class']
}
export interface DialogEmits extends DialogRootEmits {}
</script>

<script setup lang="ts">
import { DialogRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<DialogProps>()
const emits = defineEmits<DialogEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
