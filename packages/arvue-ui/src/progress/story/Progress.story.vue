<template>
    <Story title="Progress/Demo">
        <Variant title="default">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <div style="width: 60%">
                    <Progress v-model="progress"/>
                </div>
            </div>
        </Variant>
        <Variant title="indeterminate">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <div style="width: 60%">
                    <Progress v-model="indeterminate"/>
                </div>
            </div>
        </Variant>
        <Variant title="status">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <div style="width: 60%">
                    <Progress
                        v-model="progress"
                        status
                    />
                </div>
            </div>
        </Variant>
        <Variant title="custom status">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <div style="width: 60%">
                    <Progress
                        v-model="progress"
                        status
                    >
                        custom status {{ progress }}
                    </Progress>
                </div>
            </div>
        </Variant>
        <Variant title="colored">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <div style="display: flex; flex-direction: column; width: 60%; gap: 1rem">
                    <Progress
                        v-for="color in colors"
                        :key="color"
                        v-model="progress"
                        :color="color"
                    />
                </div>
            </div>
        </Variant>
        <Variant title="styled height">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <div style="width: 60%">
                    <Progress
                        v-model="progress"
                        style="height: 24px"
                    />
                </div>
            </div>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    Progress,
} from '@/progress'

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
