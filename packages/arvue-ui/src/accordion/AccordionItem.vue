<style>
@import './accordion-item.css';
</style>

<template>
    <AccordionItem
        v-slot="slotProps"
        v-bind="forwardedProps"
        :class="clsx('arvue-accordion-item', props.class)"
    >
        <slot v-bind="slotProps"/>
    </AccordionItem>
</template>

<script lang="ts">
import type { AccordionItemProps as RekaAccordionItemProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AccordionItemProps extends RekaAccordionItemProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AccordionItem, useForwardProps } from 'reka-ui'

const props = defineProps<AccordionItemProps>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)
</script>
