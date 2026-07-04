<style>
@import './color-swatch.css';
</style>

<template>
    <ColorSwatch
        v-slot="slotProps"
        v-bind="delegatedProps"
        :class="clsx('arvue-color-swatch', props.class)"
    >
        <slot v-bind="slotProps"/>
    </ColorSwatch>
</template>

<script lang="ts">
import type { ColorSwatchProps as RekaColorSwatchProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ColorSwatchProps extends RekaColorSwatchProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { ColorSwatch } from 'reka-ui'

const props = defineProps<ColorSwatchProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
