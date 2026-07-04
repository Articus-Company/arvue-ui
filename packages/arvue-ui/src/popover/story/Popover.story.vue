<template>
    <Story title="Popover/Demo">
        <Variant title="default">
            <Popover>
                <PopoverTrigger>
                    Open popover
                </PopoverTrigger>
                <PopoverContent class="box">
                    <div class="fields">
                        <p class="heading">
                            Popover
                        </p>
                        <p class="hint">
                            description
                        </p>
                        <div class="field">
                            <div class="name">
                                name
                            </div>
                            <div class="value">
                                <input
                                    type="text"
                                    class="full-width"
                                >
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/popover'
</script>
