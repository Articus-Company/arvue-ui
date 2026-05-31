<style>
@import './sheet-footer.css';
</style>

<template>
    <Primitive
        :class="clsx('arvue-sheet-footer', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface SheetFooterProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = defineProps<SheetFooterProps>()

const delegatedProps = reactiveOmit(props, 'class')
</script>
