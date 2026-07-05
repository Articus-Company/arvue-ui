<style>
@import './sidebar.css';
</style>

<template>
    <div
        v-if="collapsible === 'none'"
        :class="clsx('arvue-sidebar', props.class)"
        v-bind="$attrs"
        data-slot="sidebar"
    >
        <slot/>
    </div>

    <Drawer
        v-else-if="isMobile"
        :open="openMobile"
        v-bind="$attrs"
        @update:open="setOpenMobile"
    >
        <DrawerContent
            data-sidebar="sidebar"
            data-mobile="true"
            data-slot="sidebar"
            class="arvue-sidebar-mobile"
            :side="side"
            :style="{
                '--arvue-sidebar-width': sidebarWidthMobile,
            }"
            :show-close-button="false"
        >
            <div class="arvue-sidebar-mobile-inner">
                <slot/>
            </div>
        </DrawerContent>
    </Drawer>

    <div
        v-else
        class="arvue-sidebar-wrapper"
        :data-state="state"
        :data-collapsible="state === 'collapsed' ? collapsible : ''"
        :data-variant="variant"
        :data-side="side"
        data-slot="sidebar"
    >
        <Motion
            class="arvue-sidebar-gap"
            :initial="false"
            :animate="{
                width: state === 'collapsed'
                    ? collapsible === 'icon'
                        ? 'var(--arvue-sidebar-width-icon)'
                        : '0px'
                    : 'var(--arvue-sidebar-width)',
            }"
            :transition="{ duration: .2, ease: 'linear' }"
        />
        <Motion
            class="arvue-sidebar-panel"
            v-bind="$attrs"
            :initial="false"
            :animate="panelMotion.animate"
            :transition="{ duration: .2, ease: 'linear' }"
        >
            <div
                class="arvue-sidebar-inner"
                data-sidebar="sidebar"
            >
                <slot/>
            </div>
        </Motion>
    </div>
</template>

<script lang="ts">
import type { HTMLAttributes } from 'vue'

export interface SidebarProps {
    side?: 'left' | 'right'
    variant?: 'sidebar' | 'floating' | 'inset'
    collapsible?: 'offcanvas' | 'icon' | 'none'
    class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import { clsx } from 'clsx'
import { Motion } from 'motion-v'
import { computed } from 'vue'
import { Drawer, DrawerContent } from '@/drawer'
import { useSidebar } from './utils'

defineOptions({
    inheritAttrs: false,
})

const props = withDefaults(defineProps<SidebarProps>(), {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'offcanvas',
})

const { isMobile, state, openMobile, setOpenMobile, sidebarWidthMobile } = useSidebar()

const panelMotion = computed((): {
    animate: { x?: string | number, width?: string }
} => {
    if (props.collapsible === 'icon') {
        return {
            animate: {
                width: state.value === 'collapsed'
                    ? 'var(--arvue-sidebar-width-icon)'
                    : 'var(--arvue-sidebar-width)',
            },
        }
    }

    const collapsed = state.value === 'collapsed'
    if (props.side === 'left') {
        return { animate: { x: collapsed ? '-100%' : 0 } }
    }
    return { animate: { x: collapsed ? '100%' : 0 } }
})
</script>
