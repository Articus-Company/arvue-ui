<template>
    <Story title="Collapsible/Demo">
        <Variant title="default">
            <Collapsible>
                <CollapsibleTrigger>
                    Trigger
                </CollapsibleTrigger>
                <span class="alert">
                    .alert
                </span>
                <CollapsibleContent>
                    <span class="alert success">
                        <i class="fas fa-check-circle"/>
                        .alert.success
                    </span>
                    <span class="alert danger">
                        <span class="icon">
                            <i class="fas fa-skull"/></span>
                        .alert.danger
                    </span>
                    <span class="alert warning">
                        <i class="fas fa-exclamation-triangle"/>
                        .alert.warning
                        <a
                            href="#"
                            class="alert-close"
                        >
                            <i class="fas fa-times"/>
                        </a>
                    </span>
                    <span class="alert info">
                        .alert.info
                    </span>
                    <span class="alert outlined">
                        .alert.outlined
                    </span>
                </CollapsibleContent>
            </Collapsible>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/collapsible'
</script>
