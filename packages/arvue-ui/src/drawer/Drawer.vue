<template>
    <DialogRoot
        v-slot="slotProps"
        v-bind="forwarded"
        data-slot="drawer"
    >
        <slot v-bind="slotProps"/>
    </DialogRoot>
</template>

<script lang="ts">
import type { DialogRootEmits, DialogRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DrawerProps extends DialogRootProps {
    class?: HTMLAttributes['class']
}
export interface DrawerEmits extends DialogRootEmits {}
</script>

<script setup lang="ts">
import { DialogRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<DrawerProps>()
const emits = defineEmits<DrawerEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
