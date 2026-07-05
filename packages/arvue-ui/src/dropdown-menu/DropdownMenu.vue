<template>
    <DropdownMenuRoot
        v-slot="slotProps"
        v-bind="forwarded"
        data-slot="dropdown-menu"
    >
        <slot v-bind="slotProps"/>
    </DropdownMenuRoot>
</template>

<script lang="ts">
import type { DropdownMenuRootEmits, DropdownMenuRootProps } from 'reka-ui'

export interface DropdownMenuProps extends DropdownMenuRootProps {}
export interface DropdownMenuEmits extends DropdownMenuRootEmits {}
</script>

<script setup lang="ts">
import { DropdownMenuRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<DropdownMenuProps>()
const emits = defineEmits<DropdownMenuEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
