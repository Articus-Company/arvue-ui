<style scoped>
h1, p {
    margin: 0;
}

.hero {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 5rem;
    gap: 3rem;
}

.hero-title {
    font-size: 3.5rem;
}

.hero-desc {
    line-height: 2.25rem;
    font-size: 1.5rem;
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.hero-buttons button {
    margin: 0;
    flex-shrink: 0;
}

.feature-cards {
    margin-top: 6rem;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1.25rem;
}

.feature-cards > div {
    height: 26rem;
}

.feature-cards > :nth-child(1) {
    grid-column: span 2;
}

.feature-cards > :nth-child(2) {
    grid-column: span 3;
}

.feature-cards > :nth-child(3) {
    grid-column: span 3;
}

.feature-cards > :nth-child(4) {
    grid-column: span 2;
}

@media (max-width: 760px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .hero-desc {
        font-size: 1.25rem;
    }

    .hero-buttons {
        flex-wrap: wrap;
    }

    .feature-cards {
        grid-template-columns: 1fr;
    }

    .feature-cards > div {
        grid-column: span 1 !important;
    }
}
</style>

<template>
    <Article wide>
        <ArticleBody>
            <div class="hero">
                <h1 class="hero-title">
                    Создавайте интерфейсы быстрее и функциональнее с Arvue UI
                </h1>

                <p class="hero-desc">
                    Open-source библиотека компонентов для админ-панелей Webasyst.
                    Следует дизайн-системе Webasyst 2 UI.
                </p>
                <div class="hero-buttons">
                    <Button
                        style="background-color: #41B883"
                        size="larger"
                        gradient
                        rounded
                    >
                        <span class="bold">
                            Начать
                        </span>
                        <i class="fas fa-angle-right"/>
                    </Button>
                    <Button
                        style="background-color: #34495E"
                        size="larger"
                        rounded
                    >
                        <span class="bold">
                            Компоненты
                        </span>
                    </Button>
                    <Button
                        as="a"
                        href="https://github.com/articus-company/arvue-ui"
                        target="_blank"
                        size="larger"
                        color="light-gray"
                        rounded
                    >
                        <i class="fab fa-github"/>
                        <span class="bold">
                            GitHub
                        </span>
                        <i class="fas fa-external-link-alt hint"/>
                    </Button>
                </div>
            </div>

            <div class="feature-cards">
                <FeatureCard1/>
                <FeatureCard2/>
                <FeatureCard3/>
                <FeatureCard4/>
            </div>
        </ArticleBody>
    </Article>
</template>

<script setup lang="ts">
import { Article, ArticleBody, Button } from 'webasystvue'
import {
    FeatureCard1,
    FeatureCard2,
    FeatureCard3,
    FeatureCard4,
} from '@/components/hero/featured-cards'
</script>
