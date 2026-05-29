<template>
    <Story title="Autocomplete/Demo">
        <Variant title="default">
            <Autocomplete v-model="v">
                <AutocompleteInput
                    class="long"
                    placeholder="Введите или выберите вариант..."
                    :show-cancel-button="!!v"
                />
                <AutocompleteContent>
                    <AutocompleteEmpty>
                        Нет вариантов(
                    </AutocompleteEmpty>
                    <template
                        v-for="group in options"
                        :key="group.name"
                    >
                        <AutocompleteItem
                            v-for="option in group.children"
                            :key="option.name"
                            :value="option.name"
                        >
                            <span>
                                {{ option.name }}
                            </span>
                        </AutocompleteItem>
                    </template>
                </AutocompleteContent>
            </Autocomplete>
        </Variant>
        <Variant title="groups">
            <Autocomplete v-model="v">
                <AutocompleteInput
                    class="long"
                    placeholder="Введите или выберите вариант..."
                    :show-cancel-button="!!v"
                />
                <AutocompleteContent>
                    <AutocompleteEmpty>
                        Нет вариантов(
                    </AutocompleteEmpty>
                    <AutocompleteGroup
                        v-for="(group, index) in options"
                        :key="group.name"
                    >
                        <AutocompleteSeparator v-if="index !== 0"/>

                        <AutocompleteLabel>
                            {{ group.name }}
                        </AutocompleteLabel>

                        <AutocompleteItem
                            v-for="option in group.children"
                            :key="option.name"
                            :value="option.name"
                        >
                            <span>
                                {{ option.name }}
                            </span>
                        </AutocompleteItem>
                    </AutocompleteGroup>
                </AutocompleteContent>
            </Autocomplete>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    Autocomplete,
    AutocompleteContent,
    AutocompleteEmpty,
    AutocompleteGroup,
    AutocompleteInput,
    AutocompleteItem,
    AutocompleteLabel,
    AutocompleteSeparator,
} from '@/autocomplete'

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
