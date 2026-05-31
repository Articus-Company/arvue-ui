<style>
@import './sheet-header.css';
</style>

<template>
    <Primitive
        :class="clsx('arvue-sheet-header', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SheetHeaderProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<SheetHeaderProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
