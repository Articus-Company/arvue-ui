<style>
@import './dropdown-menu-shortcut.css';
</style>

<template>
    <Primitive
        :class="clsx('arvue-dropdown-menu-shortcut', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DropdownMenuShortcutProps extends PrimitiveProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { Primitive } from 'reka-ui'

const props = withDefaults(defineProps<DropdownMenuShortcutProps>(), {
    as: 'span',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
