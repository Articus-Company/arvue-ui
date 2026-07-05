<style>
@import './combobox.css';
</style>

<template>
    <ComboboxRoot
        v-slot="slotProps"
        v-bind="forwarded"
        :class="clsx('arvue-combobox', props.class)"
        data-slot="combobox"
    >
        <slot v-bind="slotProps"/>
    </ComboboxRoot>
</template>

<script lang="ts">
import type { ComboboxRootEmits, ComboboxRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ComboboxProps extends ComboboxRootProps {
    class?: HTMLAttributes['class']
}
export interface ComboboxEmits extends ComboboxRootEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { ComboboxRoot, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ComboboxProps>()
const emits = defineEmits<ComboboxEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
