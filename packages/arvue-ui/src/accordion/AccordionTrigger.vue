<style>
@import './accordion-trigger.css';
</style>

<template>
    <AccordionHeader class="flexbox">
        <AccordionTrigger
            v-bind="{ ...$attrs, ...delegatedProps }"
            :class="clsx('arvue-accordion-trigger', props.class)"
        >
            <slot/>
            <i class="fas fa-chevron-down arvue-accordion-trigger-icon"/>
        </AccordionTrigger>
    </AccordionHeader>
</template>

<script lang="ts">
import type { AccordionTriggerProps as RekaAccordionTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AccordionTriggerProps extends RekaAccordionTriggerProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AccordionTrigger } from 'reka-ui'
import { AccordionHeader } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<AccordionTriggerProps>(), {
    as: 'a',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
