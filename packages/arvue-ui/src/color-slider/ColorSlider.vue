<style>
@import './color-slider.css';
</style>

<template>
    <ColorSliderRoot
        v-bind="forwarded"
        :class="clsx('arvue-color-slider', props.class)"
        data-slot="color-slider"
    >
        <ColorSliderTrack
            class="arvue-color-slider-track"
            data-slot="color-slider-track"
        />
        <ColorSliderThumb
            class="arvue-color-slider-thumb"
            data-slot="color-slider-thumb"
        />
    </ColorSliderRoot>
</template>

<script lang="ts">
import type { ColorChannel, ColorSliderRootEmits, ColorSliderRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ColorSliderProps extends Omit<ColorSliderRootProps, 'channel'> {
    class?: HTMLAttributes['class']
    channel?: ColorChannel
}

export interface ColorSliderEmits extends ColorSliderRootEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    ColorSliderRoot,
    ColorSliderThumb,
    ColorSliderTrack,
    useForwardPropsEmits,
} from 'reka-ui'

const props = withDefaults(defineProps<ColorSliderProps>(), {
    channel: 'hue',
})
const emits = defineEmits<ColorSliderEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
