<style>
@import './drawer-title.css';
</style>

<template>
    <DialogTitle
        :class="clsx('arvue-drawer-title', props.class)"
        v-bind="delegatedProps"
        data-slot="drawer-title"
    >
        <slot/>
    </DialogTitle>
</template>

<script lang="ts">
import type { DialogTitleProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface DrawerTitleProps extends DialogTitleProps {
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import { DialogTitle } from 'reka-ui'

const props = withDefaults(defineProps<DrawerTitleProps>(), {
    as: 'h3',
})

const delegatedProps = reactiveOmit(props, 'class')
</script>
