<style>
@import 'combobox-content.css';
</style>

<template>
    <ComboboxContent
        v-bind="{ ...$attrs, ...forwarded }"
        :class="clsx('arvue-combobox-content', props.class)"
        position="popper"
    >
        <ComboboxViewport>
            <slot/>
        </ComboboxViewport>
    </ComboboxContent>
</template>

<script lang="ts">
import type {
    ComboboxContentEmits as RekaComboboxContentEmits,
    ComboboxContentProps as RekaComboboxContentProps,
} from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ComboboxContentProps extends Omit<RekaComboboxContentProps, 'position'> {
    class?: HTMLAttributes['class']
}
export interface ComboboxContentEmits extends RekaComboboxContentEmits {}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { ComboboxContent, useForwardPropsEmits } from 'reka-ui'
import { ComboboxViewport } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = defineProps<ComboboxContentProps>()
const emits = defineEmits<ComboboxContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
