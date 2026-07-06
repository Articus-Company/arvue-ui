<style>
@import './navigation-menu.css';
</style>

<template>
    <NavigationMenuRoot
        v-slot="slotProps"
        v-bind="forwarded"
        :class="clsx('arvue-navigation-menu', props.class)"
        data-slot="navigation-menu"
    >
        <slot v-bind="slotProps"/>
        <NavigationMenuViewport :active-value="slotProps.modelValue"/>
    </NavigationMenuRoot>
</template>

<script lang="ts">
import type { NavigationMenuRootEmits, NavigationMenuRootProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

export interface NavigationMenuProps extends NavigationMenuRootProps {
    class?: HTMLAttributes['class']
}
export interface NavigationMenuEmits extends NavigationMenuRootEmits {
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { clsx } from 'clsx'
import {
    NavigationMenuRoot,
    useForwardPropsEmits,
} from 'reka-ui'
import NavigationMenuViewport from './NavigationMenuViewport.vue'

const props = withDefaults(defineProps<NavigationMenuProps>(), {
    delayDuration: 150,
})
const emits = defineEmits<NavigationMenuEmits>()

const delegatedProps = reactiveOmit(props, 'class')
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
