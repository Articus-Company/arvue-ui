<template>
    <DropdownMenuSub
        v-slot="slotProps"
        v-bind="forwarded"
        data-slot="dropdown-menu-sub"
    >
        <slot v-bind="slotProps"/>
    </DropdownMenuSub>
</template>

<script lang="ts">
import type {
    DropdownMenuSubEmits as RekaDropdownMenuSubEmits,
    DropdownMenuSubProps as RekaDropdownMenuSubProps,
} from 'reka-ui'

export interface DropdownMenuSubProps extends RekaDropdownMenuSubProps {}

export interface DropdownMenuSubEmits extends RekaDropdownMenuSubEmits {}
</script>

<script setup lang="ts">
import {
    DropdownMenuSub,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<DropdownMenuSubProps>()
const emits = defineEmits<DropdownMenuSubEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
