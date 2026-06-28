<template>
    <Story title="Sidebar/Demo">
        <Variant title="default">
            <SidebarProvider sidebar-offset-top="0px">
                <Sidebar>
                    <SidebarContent>
                        <SidebarGroup
                            v-for="(group, groupIndex) in sidebarGroups"
                            :key="group.label"
                        >
                            <SidebarGroupLabel v-if="group.label">
                                {{ group.label }}
                            </SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem
                                        v-for="(item, itemIndex) in group.items"
                                        :key="item.title"
                                    >
                                        <SidebarMenuButton :is-active="groupIndex === 0 && itemIndex === 0">
                                            <span
                                                v-if="item.icon"
                                                v-html="item.icon"
                                            />
                                            <span>
                                                {{ item.title }}
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
                                Webasyst 2
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

const sidebarGroups = [
    {
        label: '',
        items: [
            {
                title: 'Webasyst 2',
                icon: '<i class="fas fa-star"/>',
            },
            {
                title: 'Варианты перевода своего приложения на wa-2.0.css',
                icon: '<i class="fas fa-tasks"/>',
            },
            {
                title: 'Шпаргалка 1.3 → 2.0',
                icon: '<i class="fas fa-code"/>',
            },
        ],
    },
    {
        label: '',
        items: [
            {
                title: 'Основы стиля',
                icon: '',
            },
            {
                title: 'Типографика',
                icon: '',
            },
            {
                title: 'Лейаут и адаптивность',
                icon: '',
            },
            {
                title: 'Иконки приложений',
                icon: '',
            },
            {
                title: 'Темный режим',
                icon: '',
            },
            {
                title: '$wa->header()',
                icon: '',
            },
            {
                title: '$wa->whichUI()',
                icon: '',
            },
            {
                title: 'Анимации',
                icon: '',
            },
            {
                title: 'Цвета и градиенты',
                icon: '',
            },
            {
                title: 'Требования',
                icon: '',
            },
            {
                title: 'Хелперы CSS',
                icon: '',
            },
            {
                title: 'Отступы',
                icon: '',
            },
        ],
    },
    {
        label: 'CSS-компоненты',
        items: [
            {
                title: '.alert',
                icon: '',
            },
            {
                title: '.article',
                icon: '',
            },
            {
                title: '.badge',
                icon: '',
            },
            {
                title: '.banner',
                icon: '',
            },
            {
                title: '.breadcrumbs',
                icon: '',
            },
            {
                title: '.bricks',
                icon: '',
            },
            {
                title: '.bottombar',
                icon: '',
            },
            {
                title: '.box',
                icon: '',
            },
            {
                title: '.button',
                icon: '',
            },
            {
                title: '.card',
                icon: '',
            },
            {
                title: '.chips',
                icon: '',
            },
            {
                title: '.flexbox',
                icon: '',
            },
            {
                title: '.heading',
                icon: '',
            },
            {
                title: '.icon',
                icon: '',
            },
            {
                title: '.inlinebox',
                icon: '',
            },
            {
                title: '.list',
                icon: '',
            },
            {
                title: '.menu',
                icon: '',
            },
            {
                title: '.paging',
                icon: '',
            },
            {
                title: '.pulsar',
                icon: '',
            },
            {
                title: '.sidebar / .content',
                icon: '',
            },
            {
                title: '.skeleton',
                icon: '',
            },
            {
                title: '.spinner',
                icon: '',
            },
            {
                title: 'table',
                icon: '',
            },
            {
                title: '.tablebox',
                icon: '',
            },
            {
                title: '.tabs',
                icon: '',
            },
            {
                title: '.thumbs',
                icon: '',
            },
            {
                title: 'ul',
                icon: '',
            },
            {
                title: '.userpic',
                icon: '',
            },
        ],
    },
    {
        label: 'Формы ввода данных',
        items: [
            {
                title: 'input, textarea',
                icon: '',
            },
            {
                title: '.fields',
                icon: '',
            },
            {
                title: '.wa-checkbox, +',
                icon: '',
            },
        ],
    },
    {
        label: 'JS/CSS-компоненты',
        items: [
            {
                title: '.waAutocomplete()',
                icon: '',
            },
            {
                title: '.waDialog()',
                icon: '',
            },
            {
                title: '.waDrawer()',
                icon: '',
            },
            {
                title: '.waDropdown()',
                icon: '',
            },
            {
                title: '.waLoading()',
                icon: '',
            },
            {
                title: '.waProgressbar()',
                icon: '',
            },
            {
                title: '.waSlider()',
                icon: '',
            },
            {
                title: '.waSwitch()',
                icon: '',
            },
            {
                title: '.waToggle()',
                icon: '',
            },
            {
                title: '.waTooltip',
                icon: '',
            },
            {
                title: '.waUpload()',
                icon: '',
            },
        ],
    },
]
</script>
