<template>
    <AccordionRoot
        v-slot="slotProps"
        v-bind="forwarded"
        data-slot="accordion"
    >
        <slot v-bind="slotProps"/>
    </AccordionRoot>
</template>

<script lang="ts">
import type { AccordionRootEmits, AccordionRootProps } from 'reka-ui'

export interface AccordionProps extends AccordionRootProps {
}

export interface AccordionEmits extends AccordionRootEmits {
}
</script>

<script setup lang="ts">
import {
    AccordionRoot,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<AccordionProps>()
const emits = defineEmits<AccordionEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
