<style>
.featured-card {
    position: relative;
    background-color: var(--background-color-blank);
    border-radius: 1rem;
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
    overflow: hidden;
}

.featured-card p {
    margin: 0;
}

.featured-card .title{
    font-weight: 700;
    font-size: 1.125rem;
}

.featured-card .description{
    color: var(--text-color-hint);
    font-weight: 600;
}
</style>

<template>
    <div class="featured-card">
        <p class="title">
            <slot name="title"/>
        </p>
        <p class="description">
            <slot name="description"/>
        </p>
        <slot/>
    </div>
</template>

<script setup lang="ts">
</script>
