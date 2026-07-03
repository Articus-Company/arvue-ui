<template>
    <Story title="Circle progress/Demo">
        <Variant title="default">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <CircleProgress v-model="progress"/>
            </div>
        </Variant>
        <Variant title="indeterminate">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <CircleProgress v-model="indeterminate"/>
            </div>
        </Variant>
        <Variant title="non status">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <CircleProgress
                    v-model="progress"
                    :status="false"
                />
            </div>
        </Variant>
        <Variant title="custom status">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <CircleProgress v-model="progress">
                    custom status {{ progress }}
                </CircleProgress>
            </div>
        </Variant>
        <Variant title="colored">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <CircleProgress
                    v-for="color in colors"
                    :key="color"
                    v-model="progress"
                    :color="color"
                />
            </div>
        </Variant>
        <Variant title="width">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <CircleProgress
                    v-model="progress"
                    width="8px"
                />
            </div>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    CircleProgress,
} from '@/circle-progress'

const progress = ref(50)
const indeterminate = ref(null)

const colors = {
    'red': 'red',
    'green': 'green',
    'blue': 'blue',
    'yellow': 'yellow',
    'orange': 'orange',
    'purple': 'purple',
    'brown': 'brown',
    'pink': 'pink',
    'white': 'white',
    'black': 'black',
    'gray': 'gray',
    'light-gray': 'light-gray',
    'dark-gray': 'dark-gray',
} as const
</script>
