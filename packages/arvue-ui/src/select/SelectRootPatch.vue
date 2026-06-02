<!-- Фиксит мерцание SelectValue при закрытии  -->
<!-- TODO удалить после фикса https://github.com/unovue/reka-ui/issues/2160 -->
<template>
    <slot/>
</template>

<script setup lang="ts">
import { injectSelectRootContext } from 'reka-ui'
import { onBeforeUnmount } from 'vue'

const ctx = injectSelectRootContext()
const original = ctx.onOptionRemove

ctx.onOptionRemove = (option) => {
    if (!ctx.open.value) {
        return
    }
    original(option)
}

onBeforeUnmount(() => {
    ctx.onOptionRemove = original
})
</script>
