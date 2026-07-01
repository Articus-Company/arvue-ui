<template>
    <Story title="Switch/Demo">
        <Variant title="default">
            <Switch/>
        </Variant>
        <Variant title="sized">
            <Switch size="smallest"/>
            <Switch size="smaller"/>
            <Switch size="small"/>
            <Switch size="large"/>
            <Switch size="larger"/>
            <Switch size="largest"/>
        </Variant>
        <Variant title="disabled">
            <Switch disabled/>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Switch } from '@/switch'
</script>
