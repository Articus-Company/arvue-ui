<template>
    <SidebarMenuButtonChild
        v-if="!tooltip"
        v-bind="{ ...delegatedProps, ...$attrs }"
    >
        <slot/>
    </SidebarMenuButtonChild>

    <Tooltip v-else>
        <TooltipTrigger as-child>
            <SidebarMenuButtonChild v-bind="{ ...delegatedProps, ...$attrs }">
                <slot/>
            </SidebarMenuButtonChild>
        </TooltipTrigger>
        <TooltipContent
            side="right"
            align="center"
            :hidden="state !== 'collapsed' || isMobile"
            :side-offset="12"
        >
            <template v-if="typeof tooltip === 'string'">
                {{ tooltip }}
            </template>
            <component
                :is="tooltip"
                v-else
            />
        </TooltipContent>
    </Tooltip>
</template>

<script lang="ts">
import type { Component } from 'vue'
import type { SidebarMenuButtonChildProps } from '.'

export interface SidebarMenuButtonProps extends SidebarMenuButtonChildProps {
    tooltip?: string | Component
}
</script>

<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/tooltip'
import { SidebarMenuButtonChild } from '.'
import { useSidebar } from './utils'

defineOptions({
    inheritAttrs: false,
})

const props = defineProps<SidebarMenuButtonProps>()

const { isMobile, state } = useSidebar()

const delegatedProps = reactiveOmit(props, 'tooltip')
</script>
