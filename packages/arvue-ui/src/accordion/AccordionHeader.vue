<style>
@import './accordion-header.css';
</style>

<template>
    <AccordionHeader
        :class="clsx('arvue-accordion-header', props.class)"
        v-bind="delegatedProps"
        data-slot="accordion-header"
    >
        <slot/>
    </AccordionHeader>
</template>

<script lang="ts">
import type { AccordionHeaderProps as RekaAccordionHeaderProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AccordionHeaderProps extends RekaAccordionHeaderProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AccordionHeader } from 'reka-ui'

const props = withDefaults(defineProps<AccordionHeaderProps>(), {
    as: 'div',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
