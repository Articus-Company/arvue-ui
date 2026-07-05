<style>
@import './switch.css';
</style>

<template>
    <SwitchRoot
        v-slot="slotProps"
        v-bind="forwarded"
        :class="clsx('arvue-switch', props.class)"
        :data-size="size"
        data-slot="switch"
    >
        <SwitchThumb :class="clsx('arvue-switch-thumb', props.class)">
            <slot
                name="thumb"
                v-bind="slotProps"
            />
        </SwitchThumb>
    </SwitchRoot>
</template>

<script lang="ts">
import type {
    SwitchRootEmits as RekaSwitchRootEmits,
    SwitchRootProps as RekaSwitchRootProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SwitchRootProps extends RekaSwitchRootProps {
    class?: HTMLAttributes['class']
    size?: 'small' | 'smaller' | 'smallest' | 'large' | 'larger' | 'largest'
}

export interface SwitchRootEmits extends RekaSwitchRootEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    SwitchRoot,
    SwitchThumb,
    useForwardPropsEmits,
} from 'reka-ui'

const props = withDefaults(defineProps<SwitchRootProps>(), {
    as: 'span',
})

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
