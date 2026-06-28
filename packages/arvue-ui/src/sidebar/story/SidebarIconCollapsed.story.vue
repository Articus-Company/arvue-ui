<template>
    <Story title="Sidebar/Icon Collapsed">
        <Variant title="default">
            <SidebarProvider sidebar-offset-top="0px">
                <Sidebar collapsible="icon">
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>
                                Навигация
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem
                                        v-for="(navItem, navItemIndex) in navItems"
                                        :key="navItem.title"
                                    >
                                        <SidebarMenuButton
                                            :is-active="navItemIndex === 2"
                                            :tooltip="navItem.title"
                                        >
                                            <span
                                                v-if="navItem.icon"
                                                v-html="navItem.icon"
                                            />
                                            <span>
                                                {{ navItem.title }}
                                            </span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <SidebarInset class="blank">
                    <div class="box">
                        <div
                            class="flexbox middle"
                            style="gap: .5rem"
                        >
                            <SidebarTrigger/>
                            <span>
                                Напоминания
                            </span>
                            <span class="hint bold">
                                (ctrl + b)
                            </span>
                        </div>
                    </div>
                    <div class="skeleton box flexbox vertical">
                        <div
                            class="flexbox"
                            style="gap: 1rem"
                        >
                            <span
                                class="skeleton-custom-box"
                                style="height: 350px; width: 50%"
                            />
                            <span
                                class="skeleton-custom-box"
                                style="height: 350px; width: 50%"
                            />
                        </div>
                        <div
                            class="flexbox"
                            style="gap: 1rem"
                        >
                            <span
                                class="skeleton-custom-box"
                                style="height: 350px; width: 50%"
                            />
                            <span
                                class="skeleton-custom-box"
                                style="height: 350px; width: 50%"
                            />
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from '@/sidebar'

const navItems = [
    {
        title: 'Контакты',
        icon: ' <i class="fas fa-users"/>',
    },
    {
        title: 'Воронки',
        icon: '<i class="fas fa-briefcase"/>',
    },
    {
        title: 'Напоминания',
        icon: '<i class="fas fa-bell"/>',
    },
    {
        title: 'Счета',
        icon: '<i class="fas fa-receipt"/>',
    },
    {
        title: 'Звонки',
        icon: '<i class="fas fa-phone-alt"/>',
    },
    {
        title: 'Сообщения',
        icon: '<i class="fas fa-comments"/>',
    },
    {
        title: 'Отчеты',
        icon: '<i class="fas fa-chart-bar"/>',
    },
    {
        title: 'Сейчас',
        icon: '<i class="fas fa-bolt"/>',
    },
]
</script>
