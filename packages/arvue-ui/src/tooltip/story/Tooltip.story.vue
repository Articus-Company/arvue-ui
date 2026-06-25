<template>
    <Story title="Tooltip/Demo">
        <Variant title="default">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger as-child>
                        <button>
                            Hover
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <span>Add to library</span>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/tooltip'
</script>
