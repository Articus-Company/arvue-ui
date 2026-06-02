<style>
@import './select-trigger.css';
</style>

<template>
    <SelectTrigger
        v-bind="forwardedProps"
        :class="clsx('arvue-select-trigger', props.class)"
        :tabindex="disabled ? -1 : 0"
    >
        <slot/>
        <SelectIcon as-child>
            <span class="arvue-select-trigger-icon">
                <i class="fas fa-chevron-down"/>
            </span>
        </SelectIcon>
    </SelectTrigger>
</template>

<script lang="ts">
import type { SelectTriggerProps as RekaSelectTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SelectTriggerProps extends RekaSelectTriggerProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { SelectIcon, SelectTrigger, useForwardProps } from 'reka-ui'

const props = withDefaults(defineProps<SelectTriggerProps>(), {
    as: 'div',
})

const delegatedProps = reactiveOmit(props, 'class')
const forwardedProps = useForwardProps(delegatedProps)
</script>
