<style>
@import './color-field.css';
</style>

<template>
    <ColorFieldRoot
        v-bind="forwarded"
        class="arvue-color-field"
    >
        <ColorFieldInput :class="clsx('arvue-color-field-input', props.class)"/>
    </ColorFieldRoot>
</template>

<script lang="ts">
import type { ColorFieldRootEmits, ColorFieldRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ColorFieldProps extends ColorFieldRootProps {
    class?: HTMLAttributes['class']
}
export interface ColorFieldEmits extends ColorFieldRootEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    ColorFieldInput,
    ColorFieldRoot,
    useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ColorFieldProps>()
const emits = defineEmits<ColorFieldEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
