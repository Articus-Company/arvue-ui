<template>
    <Story title="Sidebar/Collapsible Menu">
        <Variant title="default">
            <SidebarProvider sidebar-offset-top="0px">
                <Sidebar>
                    <SidebarContent>
                        <Collapsible
                            v-for="(group, groupIndex) in sidebarGroups"
                            :key="group.label"
                            :title="group.label"
                            default-open
                        >
                            <SidebarGroup>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        <CollapsibleTrigger as-child>
                                            <SidebarMenuButton>
                                                <span>
                                                    {{ group.label }}
                                                </span>
                                                <span class="custom-ml-auto">
                                                    <i class="fas fa-angle-down"/>
                                                </span>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuItem
                                                v-for="(item, itemIndex) in group.items"
                                                :key="item.title"
                                            >
                                                <SidebarMenuButton :is-active="groupIndex === 0 && itemIndex === 0">
                                                    <span
                                                        v-if="item.icon"
                                                        class="icon"
                                                        v-html="item.icon"
                                                    />
                                                    <span>
                                                        {{ item.title }}
                                                    </span>
                                                    <span
                                                        v-if="item.badge"
                                                        class="custom-ml-auto small icon"
                                                        v-html="item.badge"
                                                    />
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </CollapsibleContent>
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </Collapsible>
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
                                Интернет-магазин
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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/collapsible'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from '@/sidebar'

const sidebarGroups = [
    {
        label: 'Счета',
        items: [
            {
                title: 'Интернет-магазин',
                icon: '<i class="fas fa-ruble-sign"/>',
                badge: '',
            },
            {
                title: '1312 inc',
                icon: '<img src="https://demo-ru.webasyst.com/wa-data/public/cash/user/account_logos/3/1312-logo-500-circle.png" alt="" class="size-20">',
                badge: '',
            },
            {
                title: 'Romashka, LLC',
                icon: '<img src="https://demo-ru.webasyst.com/wa-data/public/cash/user/account_logos/3/Screenshot 2021-03-29 at 10.34.24.png" alt="" class="size-20">',
                badge: '',
            },
        ],
    },
    {
        label: 'Поступления',
        items: [
            {
                title: 'Продажи',
                icon: '<i class="fas fa-piggy-bank" style="color: rgb(0, 204, 102)"/>',
                badge: '',
            },
            {
                title: 'Инвестиции',
                icon: '<i class="fas fa-seedling" style="color: rgb(0, 204, 143)"/>',
                badge: '',
            },
            {
                title: 'Кешбеш',
                icon: '<i class="fas fa-coins" style="color: rgb(0, 204, 255)"/>',
                badge: '',
            },
            {
                title: 'Взяли кредит',
                icon: '<i class="fas fa-briefcase" style="color: rgb(102, 153, 255)"/>',
                badge: '',
            },
            {
                title: 'Просто прибыль',
                icon: '<i class="fas fa-bolt" style="color: rgb(102, 102, 255)"/>',
                badge: '',
            },
            {
                title: 'Без статьи',
                icon: '<i class="rounded" style="background-color: rgb(221, 221, 221)"/>',
                badge: '',
            },
        ],
    },
    {
        label: 'Расходы',
        items: [
            {
                title: 'Аренда кофемашины',
                icon: '<i class="fas fa-coffee" style="color: rgb(229, 130, 0)"/>',
                badge: '',
            },
            {
                title: 'Аренда офиса',
                icon: '<i class="fas fa-home" style="color: rgb(191, 0, 35)"/>',
                badge: '',
            },
            {
                title: 'Выплаты по кредитам ',
                icon: '<i class="fas fa-briefcase" style="color: rgb(238, 34, 34)"/>',
                badge: '',
            },
            {
                title: 'Возвраты',
                icon: '<i class="fas fa-mask" style="color: rgb(255, 19, 18)"/>',
                badge: '',
            },
            {
                title: 'Доставка',
                icon: '<i class="fas fa-shuttle-van" style="color: rgb(236, 64, 122)"/>',
                badge: '',
            },
            {
                title: 'Закупки',
                icon: '<i class="fas fa-shopping-cart" style="color: rgb(233, 163, 93)"/>',
                badge: '',
            },
            {
                title: 'Зарплаты',
                icon: '<i class="fas fa-credit-card" style="color: rgb(233, 30, 99)"/>',
                badge: '',
            },
            {
                title: 'Канцелярия',
                icon: '<i class="fas fa-pencil-alt" style="color: rgb(229, 67, 39)"/>',
                badge: '',
            },
            {
                title: 'Комиссии банков',
                icon: '<i class="fas fa-user-tie" style="color: rgb(251, 140, 32)"/>',
                badge: '',
            },
            {
                title: 'Маркетинг',
                icon: '<i class="fas fa-certificate" style="color: rgb(244, 143, 177)"/>',
                badge: '',
            },
            {
                title: 'Налоги',
                icon: '<i class="fas fa-balance-scale" style="color: rgb(255, 138, 101)"/>',
                badge: '',
            },
            {
                title: 'Хостинг',
                icon: '<i class="fas fa-server" style="color: rgb(248, 187, 208)"/>',
                badge: '',
            },
            {
                title: 'Просто убыток ',
                icon: '<i class="fas fa-radiation-alt" style="color: rgb(255, 19, 18)"/>',
                badge: '',
            },
            {
                title: 'Без статьи',
                icon: '<i class="rounded" style="background-color: rgb(221, 221, 221)"/>',
                badge: '',
            },
            {
                title: 'Дивиденды',
                icon: '<i class="fas fa-child" style="color: rgb(208, 128, 255)"/>',
                badge: '<i class="fas fa-coins"/>',
            },
            {
                title: 'Прибыль',
                icon: '<i class="fas fa-wallet" style="color: rgb(115, 197, 229)"/>',
                badge: '<i class="fas fa-coins"/>',
            },
        ],
    },
]
</script>
