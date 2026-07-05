<style>
@import './color-area.css';
</style>

<template>
    <ColorAreaRoot
        v-slot="{ style }"
        v-bind="forwarded"
        class="arvue-color-area-root"
        data-slot="color-area"
    >
        <ColorAreaArea
            :class="clsx('arvue-color-area', props.class)"
            :style="style"
            data-slot="color-area-area"
        >
            <ColorAreaThumb class="arvue-color-area-thumb"/>
        </ColorAreaArea>
    </ColorAreaRoot>
</template>

<script lang="ts">
import type { ColorAreaRootEmits, ColorAreaRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ColorAreaProps extends ColorAreaRootProps {
    class?: HTMLAttributes['class']
}
export interface ColorAreaEmits extends ColorAreaRootEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { ColorAreaArea, ColorAreaRoot, ColorAreaThumb, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ColorAreaProps>()
const emits = defineEmits<ColorAreaEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
