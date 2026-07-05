<style>
@import './combobox-empty.css';
</style>

<template>
    <ComboboxEmpty
        v-bind="delegatedProps"
        :class="clsx('arvue-combobox-empty', props.class)"
        data-slot="combobox-empty"
    >
        <slot/>
    </ComboboxEmpty>
</template>

<script lang="ts">
import type { ComboboxEmptyProps as RekaComboboxEmptyProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface ComboboxEmptyProps extends RekaComboboxEmptyProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { ComboboxEmpty } from 'reka-ui'

const props = defineProps<ComboboxEmptyProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
