<template>
    <SelectRoot
        v-slot="slotProps"
        v-bind="forwarded"
        data-slot="select"
    >
        <SelectRootPatch>
            <slot v-bind="slotProps"/>
        </SelectRootPatch>
    </SelectRoot>
</template>

<script lang="ts">
import type { SelectRootEmits, SelectRootProps } from 'reka-ui'

export interface SelectProps extends SelectRootProps {}
export interface SelectEmits extends SelectRootEmits {}
</script>

<script setup lang="ts">
import { SelectRoot, useForwardPropsEmits } from 'reka-ui'
import SelectRootPatch from './SelectRootPatch.vue'

const props = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
