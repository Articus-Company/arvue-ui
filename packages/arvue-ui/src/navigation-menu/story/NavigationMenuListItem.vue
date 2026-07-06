<style scoped>
.nav-link {
    display: block;
    user-select: none;
    border-radius: 6px;
    padding: 0.75rem;
    font-size: 0.875rem;
    line-height: 1;
    text-decoration: none;
    outline: none;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    background-color: transparent;
    color: inherit;
}

.nav-link:hover {
    background-color: var(--menu-background-color-hover);
}

.nav-title {
    color: var(--text-color);
    margin-bottom: 5px;
    font-weight: 500;
    line-height: 1.2;
}

.nav-description {
    color: var(--text-color-hint);
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.4;
}
</style>

<template>
    <li>
        <NavigationMenuLink as-child>
            <a
                v-bind="$attrs"
                class="nav-link"
            >
                <div class="nav-title">
                    {{ props.title }}
                </div>
                <p class="nav-description">
                    <slot/>
                </p>
            </a>
        </NavigationMenuLink>
    </li>
</template>

<script setup lang="ts">
import { NavigationMenuLink } from '../.'

const props = defineProps({
    title: String,
})
</script>
