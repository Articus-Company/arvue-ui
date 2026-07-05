<style>
@import './accordion-content.css';
</style>

<template>
    <AccordionContent
        v-bind="delegatedProps"
        class="arvue-accordion-content"
        data-slot="accordion-content"
    >
        <div :class="clsx('arvue-accordion-content-block', props.class)">
            <slot/>
        </div>
    </AccordionContent>
</template>

<script lang="ts">
import type { AccordionContentProps as RekaAccordionContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface AccordionContentProps extends RekaAccordionContentProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { AccordionContent } from 'reka-ui'

const props = defineProps<AccordionContentProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
