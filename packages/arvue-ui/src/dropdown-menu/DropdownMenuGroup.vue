<template>
    <DropdownMenuGroup v-bind="props">
        <slot/>
    </DropdownMenuGroup>
</template>

<script lang="ts">
import type { DropdownMenuGroupProps as RekaDropdownMenuGroupProps } from 'reka-ui'

export interface DropdownMenuGroupProps extends RekaDropdownMenuGroupProps {}
</script>

<script setup lang="ts">
import { DropdownMenuGroup } from 'reka-ui'

const props = defineProps<DropdownMenuGroupProps>()
</script>
