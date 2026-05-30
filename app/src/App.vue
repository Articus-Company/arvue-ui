<style>
@import "arvue-ui/all.css";
</style>

<template>
    <Drawer>
        <DrawerTrigger as-child>
            <button>
                Open Drawer
            </button>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>
                    Edit profile
                </DrawerTitle>
                <DrawerDescription>
                    Make changes to your profile here. Click save when you're done.
                </DrawerDescription>
            </DrawerHeader>
            <div class="fields custom-px-16">
                <div class="field">
                    <div class="name">
                        Username'
                    </div>
                    <div class="value">
                        <Combobox v-model="v">
                            <ComboboxInput
                                placeholder="Введите или выберите вариант..."
                                :show-cancel-button="!!v"
                                @cancel="v = ''"
                            />
                            <ComboboxContent>
                                <ComboboxEmpty>
                                    Нет вариантов(
                                </ComboboxEmpty>
                                <ComboboxGroup
                                    v-for="(group, index) in options"
                                    :key="group.name"
                                >
                                    <ComboboxSeparator v-if="index !== 0"/>

                                    <ComboboxLabel>
                                        {{ group.name }}
                                    </ComboboxLabel>

                                    <ComboboxItem
                                        v-for="option in group.children"
                                        :key="option.name"
                                        :value="option.name"
                                    >
                                        <span>
                                            {{ option.name }}
                                        </span>
                                    </ComboboxItem>
                                </ComboboxGroup>
                            </ComboboxContent>
                        </Combobox>
                    </div>
                </div>

                <div class="field">
                    <div class="name">
                        123
                    </div>
                    <div class="value">
                        <input type="text">
                    </div>
                </div>
            </div>
            <DrawerFooter>
                <button type="submit">
                    Save changes
                </button>
                <DrawerClose as-child>
                    <button class="outlined">
                        Cancel
                    </button>
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
</template>

<script setup lang="ts">
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxLabel,
    ComboboxSeparator,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from 'arvue-ui'
import { ref } from 'vue'

const v = ref('')

const options = [
    {
        name: 'Фрукты',
        children: [
            { name: 'Яблоко' },
            { name: 'Банан' },
            { name: 'Апельсин' },
            { name: 'Дыня' },
            { name: 'Виноград' },
            { name: 'Арбуз' },
            { name: 'Канталупа' },
            { name: 'Груша' },
        ],
    },
    {
        name: 'Овощи',
        children: [
            { name: 'Капуста' },
            { name: 'Брокколи' },
            { name: 'Морковь' },
            { name: 'Латук' },
            { name: 'Шпинат' },
            { name: 'Пекинская капуста' },
            { name: 'Цветная капуста' },
            { name: 'Картофель' },
        ],
    },
]
</script>
