<template>
    <DropdownMenuRadioGroup
        v-bind="forwarded"
        data-slot="dropdown-menu-radio-group"
    >
        <slot/>
    </DropdownMenuRadioGroup>
</template>

<script lang="ts">
import type {
    DropdownMenuRadioGroupEmits as RekaDropdownMenuRadioGroupEmits,
    DropdownMenuRadioGroupProps as RekaDropdownMenuRadioGroupProps,
} from 'reka-ui'

export interface DropdownMenuRadioGroupProps extends RekaDropdownMenuRadioGroupProps {}
export interface DropdownMenuRadioGroupEmits extends RekaDropdownMenuRadioGroupEmits {}
</script>

<script setup lang="ts">
import {
    DropdownMenuRadioGroup,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<DropdownMenuRadioGroupProps>()
const emits = defineEmits<DropdownMenuRadioGroupEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
