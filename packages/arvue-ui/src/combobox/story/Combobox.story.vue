<template>
    <Story title="Combobox/Demo">
        <Variant title="default">
            <Combobox v-model="v">
                <ComboboxInput
                    class="long"
                    placeholder="Введите или выберите вариант..."
                    :show-cancel-button="!!v"
                    @cancel="v = ''"
                />
                <ComboboxContent>
                    <ComboboxEmpty>
                        Нет вариантов(
                    </ComboboxEmpty>
                    <template
                        v-for="group in options"
                        :key="group.name"
                    >
                        <ComboboxItem
                            v-for="option in group.children"
                            :key="option.name"
                            :value="option.name"
                        >
                            <span>
                                {{ option.name }}
                            </span>
                        </ComboboxItem>
                    </template>
                </ComboboxContent>
            </Combobox>
        </Variant>
        <Variant title="groups">
            <Combobox v-model="v">
                <ComboboxInput
                    class="long"
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
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxItem,
    ComboboxLabel,
    ComboboxSeparator,
} from '@/combobox'

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
