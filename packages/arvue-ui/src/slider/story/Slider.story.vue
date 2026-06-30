<template>
    <Story title="Slider/Demo">
        <Variant title="default">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <Slider style="width: 300px"/>
            </div>
        </Variant>
        <Variant title="Vertical">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <Slider
                    orientation="vertical"
                    style="height: 300px"
                />
            </div>
        </Variant>
        <Variant title="Range">
            <div style="height: 100vh; width: 100vw; display: flex; align-items: center; justify-content: center;">
                <Slider
                    :default-value="[25, 75]"
                    style="width: 300px"
                />
            </div>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Slider } from '@/slider'
</script>
