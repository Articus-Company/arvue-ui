<style>
@import "sheet-description.css";
</style>

<template>
    <DrawerDescription
        :class="clsx('arvue-sheet-description', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </DrawerDescription>
</template>

<script lang="ts">
import type { DrawerDescriptionProps } from 'vaul-vue'
import type { HTMLAttributes } from 'vue'

export interface SheetDescriptionProps extends DrawerDescriptionProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DrawerDescription } from 'vaul-vue'

const props = withDefaults(defineProps<SheetDescriptionProps>(), {
    as: 'p',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
