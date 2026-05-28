<style>
@import "sheet-title.css";
</style>

<template>
    <DrawerTitle
        :class="clsx('arvue-sheet-title', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </DrawerTitle>
</template>

<script lang="ts">
import type { DrawerTitleProps } from 'vaul-vue'
import type { HTMLAttributes } from 'vue'

export interface SheetTitleProps extends DrawerTitleProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DrawerTitle } from 'vaul-vue'

const props = withDefaults(defineProps<SheetTitleProps>(), {
    as: 'h3',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
