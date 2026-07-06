<style>
.menu-grid {
    display: grid;
    gap: 10px;
    padding: 22px;
    list-style: none;
    margin: 0;
    width: 500px;
    grid-template-columns: 0.75fr 1fr;
}

.menu-grid.three {
    width: 700px;
    grid-template-columns: 0.75fr 1fr 1fr;
}

.menu-item-big {
    grid-row: span 3;
    grid-column: 1;
    display: grid;
    box-sizing: border-box;
}

.menu-link-big {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    padding: 1.5rem;
    background-color: var(--background-color);
    text-decoration: none;
    outline: none;
    box-sizing: border-box;
}
</style>

<template>
    <Story title="Navigation menu/Demo">
        <Variant title="default">
            <div style="height: 100vh; width: 100vw">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Webasyst
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul class="menu-grid three">
                                    <li class="menu-item-big">
                                        <NavigationMenuLink class="menu-link-big">
                                            <img
                                                style="width: 4rem;"
                                                src="https://www.webasyst.ru/wa-apps/site/themes/webasystcom/img/logos/webasyst-logo-id.svg"
                                                alt="Webasyst Logo"
                                            >
                                            <div style="margin-top: 2rem; margin-bottom: 0.5rem;">
                                                Webasyst
                                            </div>
                                            <p
                                                class="hint"
                                                style="margin: 0"
                                            >
                                                Открытая платформа и приложения для бизнеса
                                            </p>
                                        </NavigationMenuLink>
                                    </li>
                                    <NavigationMenuListItem
                                        title="Приложения"
                                    >
                                        Магазин приложений
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem
                                        title="ИИ"
                                    >
                                        ИИ для всей команды и ускорения роста
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem
                                        title="Внедрение"
                                    >
                                        Закажите внедрение Webasyst у партнеров-экспертов
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem
                                        title="Разработчикам"
                                    >
                                        Фреймворк для электронной коммерции
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem
                                        title="Цены"
                                    >
                                        Тарифы в облаке Webasyst
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem
                                        title="Помощь"
                                    >
                                        База знаний Webasyst
                                    </NavigationMenuListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                Компоненты
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul class="menu-grid">
                                    <NavigationMenuListItem
                                        title="Accordion"
                                    >
                                        Вертикально расположенные интерактивные заголовки
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem
                                        title="Alert Dialog"
                                    >
                                        Модальное диалоговое окно, которое прерывает взаимодействие с пользователем
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem
                                        title="Aspect Ratio"
                                    >
                                        Отображает контент в желаемом соотношении сторон
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem
                                        title="Autocomplete"
                                    >
                                        Поле ввода с подсказками, позволяющее вводить текст в произвольном формате
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem
                                        title="Circle Progress"
                                    >
                                        Отображает индикатор, показывающий ход выполнения задачи
                                    </NavigationMenuListItem>
                                    <NavigationMenuListItem
                                        title="Collapsible"
                                    >
                                        Интерактивный компонент, позволяющий разворачивать/сворачивать панель
                                    </NavigationMenuListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink class="arvue-navigation-menu-trigger">
                                GitHub <i class="fab fa-github"/>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
                                О компании
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul>
                                    <li>
                                        <NavigationMenuLink>
                                            Блог
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink>
                                            Контакты
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink>
                                            Облако
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink>
                                            Инвесторам
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink>
                                            Вакансии
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink>
                                            Логотипы
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink>
                                            Люди
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/navigation-menu'
import NavigationMenuListItem from '@/navigation-menu/story/NavigationMenuListItem.vue'
</script>
