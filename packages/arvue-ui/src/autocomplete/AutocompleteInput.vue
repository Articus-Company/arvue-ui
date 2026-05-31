<style>
@import './autocomplete-input.css';
</style>

<template>
    <div class="arvue-autocomplete-input-wrapper">
        <AutocompleteAnchor
            :class="{ 'state-with-inner-icon right': showTriggerButton }"
            :reference="inputRef?.$el"
        >
            <AutocompleteInput
                v-bind="{ ...$attrs, ...forwarded }"
                ref="inputRef"
            />
            <AutocompleteTrigger
                v-if="showTriggerButton"
                class="icon"
            >
                <i class="fas fa-chevron-down"/>
            </AutocompleteTrigger>
        </AutocompleteAnchor>
        <AutocompleteCancel
            v-if="showCancelButton"
            class="icon"
            @click="emits('cancel')"
        >
            <i class="fas fa-times"/>
        </AutocompleteCancel>
    </div>
</template>

<script lang="ts">
import type {
    AutocompleteInputEmits as RekaAutocompleteInputEmits,
    AutocompleteInputProps as RekaAutocompleteInputProps,
} from 'reka-ui'

export interface AutocompleteInputProps extends RekaAutocompleteInputProps {
    showTriggerButton?: boolean
    showCancelButton?: boolean
}

export interface AutocompleteInputEmits extends RekaAutocompleteInputEmits {
    'cancel': [void]
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { AutocompleteInput, useForwardPropsEmits } from 'reka-ui'
import { useTemplateRef } from 'vue'
import { AutocompleteAnchor, AutocompleteCancel, AutocompleteTrigger } from '.'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<AutocompleteInputProps>(), {
    showTriggerButton: true,
    showCancelButton: false,
})
const emits = defineEmits<AutocompleteInputEmits>()

const delegatedProps = reactiveOmit(props, 'showCancelButton', 'showTriggerButton')

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const inputRef = useTemplateRef('inputRef')
</script>
