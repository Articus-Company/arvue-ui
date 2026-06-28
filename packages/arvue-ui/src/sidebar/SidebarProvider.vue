<style>
@import './sidebar-provider.css';
</style>

<template>
    <TooltipProvider :delay-duration="0">
        <div
            :style="{
                '--arvue-sidebar-width': sidebarWidth,
                '--arvue-sidebar-width-icon': sidebarWidthIcon,
                '--arvue-sidebar-offset-top': sidebarOffsetTop,
            }"
            :class="clsx('arvue-sidebar-provider', props.class)"
            v-bind="$attrs"
        >
            <slot/>
        </div>
    </TooltipProvider>
</template>

<script lang="ts">
import type { HTMLAttributes, Ref } from 'vue'

export interface SidebarProviderProps {
    class?: HTMLAttributes['class']
    defaultOpen?: boolean
    open?: boolean
    cookieName?: string
    cookieMaxAge?: number
    sidebarWidth?: string
    sidebarWidthMobile?: string
    sidebarWidthIcon?: string
    sidebarOffsetTop?: string
    keyboardShortcut?: string
    disableKeyboardShortcut?: boolean
}

export interface SidebarProviderEmits {
    'update:open': [open: boolean]
}
</script>

<script setup lang="ts">
import { defaultDocument, useEventListener, useMediaQuery, useVModel } from '@vueuse/core'
import { clsx } from 'clsx'
import { TooltipProvider } from 'reka-ui'
import { computed, ref, toRef } from 'vue'
import {
    provideSidebarContext,
    SIDEBAR_COOKIE_MAX_AGE,
    SIDEBAR_COOKIE_NAME,
    SIDEBAR_KEYBOARD_SHORTCUT,
    SIDEBAR_OFFSET_TOP,
    SIDEBAR_WIDTH,
    SIDEBAR_WIDTH_ICON,
    SIDEBAR_WIDTH_MOBILE,
} from './utils'

const props = withDefaults(defineProps<SidebarProviderProps>(), {
    defaultOpen: undefined,
    open: undefined,
    cookieName: SIDEBAR_COOKIE_NAME,
    cookieMaxAge: SIDEBAR_COOKIE_MAX_AGE,
    sidebarWidth: SIDEBAR_WIDTH,
    sidebarWidthMobile: SIDEBAR_WIDTH_MOBILE,
    sidebarWidthIcon: SIDEBAR_WIDTH_ICON,
    sidebarOffsetTop: SIDEBAR_OFFSET_TOP,
    keyboardShortcut: SIDEBAR_KEYBOARD_SHORTCUT,
    disableKeyboardShortcut: undefined,
})

const emits = defineEmits<SidebarProviderEmits>()

const isMobile = useMediaQuery('(max-width: 760px)')

const open = useVModel(props, 'open', emits, {
    defaultValue: props.defaultOpen ?? !defaultDocument?.cookie.includes(`${props.cookieName}=false`),
    passive: (props.open === undefined) as false,
}) as Ref<boolean>

const openMobile = ref(false)

function setOpen(value: boolean) {
    open.value = value
    document.cookie = `${props.cookieName}=${open.value}; path=/; max-age=${props.cookieMaxAge}`
}

function setOpenMobile(value: boolean) {
    openMobile.value = value
}

function toggleSidebar() {
    return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value)
}

useEventListener('keydown', (event: KeyboardEvent) => {
    if (props.disableKeyboardShortcut) {
        return
    }
    if (event.key === props.keyboardShortcut && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        toggleSidebar()
    }
})

const state = computed(() => open.value ? 'expanded' : 'collapsed')

provideSidebarContext({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar,
    sidebarWidth: toRef(props, 'sidebarWidth'),
    sidebarWidthMobile: toRef(props, 'sidebarWidthMobile'),
    sidebarWidthIcon: toRef(props, 'sidebarWidthIcon'),
    sidebarOffsetTop: toRef(props, 'sidebarOffsetTop'),
    keyboardShortcut: toRef(props, 'keyboardShortcut'),
    cookieName: toRef(props, 'cookieName'),
    cookieMaxAge: toRef(props, 'cookieMaxAge'),
})
</script>
