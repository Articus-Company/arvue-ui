import type { ComputedRef, Ref } from 'vue'
import { createContext } from 'reka-ui'

export const SIDEBAR_COOKIE_NAME = 'arvue_sidebar_state'
export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
export const SIDEBAR_WIDTH = '16rem'
export const SIDEBAR_WIDTH_MOBILE = '18rem'
export const SIDEBAR_WIDTH_ICON = '4rem'
export const SIDEBAR_KEYBOARD_SHORTCUT = 'b'
export const SIDEBAR_OFFSET_TOP = '4rem'

export const [useSidebar, provideSidebarContext] = createContext<{
    state: ComputedRef<'expanded' | 'collapsed'>
    open: Ref<boolean>
    setOpen: (value: boolean) => void
    isMobile: Ref<boolean>
    openMobile: Ref<boolean>
    setOpenMobile: (value: boolean) => void
    toggleSidebar: () => void
    sidebarWidth: Ref<string>
    sidebarWidthMobile: Ref<string>
    sidebarWidthIcon: Ref<string>
    sidebarOffsetTop: Ref<string>
    keyboardShortcut: Ref<string>
    cookieName: Ref<string>
    cookieMaxAge: Ref<number>
}>('Sidebar')
