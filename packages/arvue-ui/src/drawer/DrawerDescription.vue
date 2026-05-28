<style>
@import "./drawer-description.css";
</style>

<template>
    <DialogDescription
        :class="clsx('arvue-drawer-description', props.class)"
        v-bind="delegatedProps"
    >
        <slot/>
    </DialogDescription>
</template>

<script lang="ts">
import type { DialogDescriptionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DrawerDescriptionProps extends DialogDescriptionProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DialogDescription } from 'reka-ui'

const props = withDefaults(defineProps<DrawerDescriptionProps>(), {
    as: 'p',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
