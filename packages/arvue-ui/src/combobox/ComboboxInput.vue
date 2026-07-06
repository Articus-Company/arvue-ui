<style>
@import './combobox-input.css';
</style>

<template>
    <div
        class="arvue-combobox-input-wrapper"
        data-slot="combobox-input-wrapper"
    >
        <ComboboxAnchor
            :class="{ 'state-with-inner-icon right': showTriggerButton }"
            :reference="inputRef?.$el"
        >
            <ComboboxInput
                v-bind="{ ...$attrs, ...forwardedProps }"
                ref="inputRef"
                data-slot="combobox-input"
                v-on="forwardedEmits"
            />
            <ComboboxTrigger
                v-if="showTriggerButton"
                class="icon"
            >
                <i class="fas fa-sort"/>
            </ComboboxTrigger>
        </ComboboxAnchor>
        <ComboboxCancel
            v-if="showCancelButton"
            class="icon"
            @click="emits('cancel')"
        >
            <i class="fas fa-times"/>
        </ComboboxCancel>
    </div>
</template>

<script lang="ts">
import type {
    ComboboxInputEmits as RekaComboboxInputEmits,
    ComboboxInputProps as RekaComboboxInputProps,
} from 'reka-ui'

export interface ComboboxInputProps extends RekaComboboxInputProps {
    showTriggerButton?: boolean
    showCancelButton?: boolean
}

export type ComboboxInputEmits = RekaComboboxInputEmits & {
    'cancel': [void]
}
</script>

<script setup lang="ts">
import { delegateEmits } from '@lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { ComboboxInput, useForwardProps } from 'reka-ui'
import { useTemplateRef } from 'vue'
import { ComboboxAnchor, ComboboxCancel, ComboboxTrigger } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<ComboboxInputProps>(), {
    showTriggerButton: true,
    showCancelButton: false,
})
const emits = defineEmits<ComboboxInputEmits>()

const delegatedProps = reactiveOmit(props, 'showCancelButton', 'showTriggerButton')

const forwardedProps = useForwardProps(delegatedProps)

const forwardedEmits = delegateEmits<ComboboxInputEmits>(emits, 'cancel')

const inputRef = useTemplateRef('inputRef')
</script>
