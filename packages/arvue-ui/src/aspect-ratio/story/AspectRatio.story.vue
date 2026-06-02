<template>
    <Story title="Aspect ratio/Demo">
        <Variant title="default">
            <AspectRatio :ratio="1">
                <img
                    style="height: 100%; width: 100%; object-fit: cover"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Statue_of_Yaksha_supporting_one_of_the_Two_Golden_Chedi_of_Wat_Phra_Kaew%2C_Bangkok%2C_Thailand.jpg/1280px-Statue_of_Yaksha_supporting_one_of_the_Two_Golden_Chedi_of_Wat_Phra_Kaew%2C_Bangkok%2C_Thailand.jpg"
                >
            </AspectRatio>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { AspectRatio } from '@/aspect-ratio'
</script>
