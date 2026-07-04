<style>
@import './popover-content.css';
</style>

<template>
    <PopoverContent
        v-bind="{ ...$attrs, ...forwarded }"
        :class="clsx('arvue-popover-content', props.class)"
    >
        <slot/>
    </PopoverContent>
</template>

<script lang="ts">
import type {
    PopoverContentEmits as RekaPopoverContentEmits,
    PopoverContentProps as RekaPopoverContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface PopoverContentProps extends RekaPopoverContentProps {
    class?: HTMLAttributes['class']
}
export interface PopoverContentEmits extends RekaPopoverContentEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    PopoverContent,
    useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(
    defineProps<PopoverContentProps>(),
    {
        align: 'center',
        sideOffset: 8,
    },
)
const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
