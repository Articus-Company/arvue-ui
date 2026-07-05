<template>
    <DrawerRoot
        v-slot="slotProps"
        v-bind="forwarded"
        data-slot="sheet"
    >
        <slot v-bind="slotProps"/>
    </DrawerRoot>
</template>

<script lang="ts">
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue'
import type { HTMLAttributes } from 'vue'

export interface SheetEmits extends DrawerRootEmits {}

export interface SheetProps extends DrawerRootProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerRoot } from 'vaul-vue'

const props = defineProps<SheetProps>()
const emits = defineEmits<SheetEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
