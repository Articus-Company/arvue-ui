<style>
@import './slider.css';
</style>

<template>
    <SliderRoot
        v-slot="{ modelValue }"
        :class="clsx('arvue-slider', props.class)"
        v-bind="forwarded"
        data-slot="slider"
    >
        <SliderTrack
            class="arvue-slider-track"
            data-slot="slider-track"
        >
            <SliderRange
                class="arvue-slider-range"
                data-slot="slider-range"
            />
        </SliderTrack>

        <SliderThumb
            v-for="(_, key) in modelValue"
            :key="key"
            class="arvue-slider-thumb"
            data-slot="slider-thumb"
        />
    </SliderRoot>
</template>

<script lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SliderProps extends SliderRootProps {
    class?: HTMLAttributes['class']
}

export interface SliderEmits extends SliderRootEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<SliderProps>()
const emits = defineEmits<SliderEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
