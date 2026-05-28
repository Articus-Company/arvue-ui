<template>
    <Story title="Drawer/Demo">
        <Variant title="default">
            <Drawer>
                <DrawerTrigger as-child>
                    <button>
                        Open Drawer
                    </button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>
                            Edit profile
                        </DrawerTitle>
                        <DrawerDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DrawerDescription>
                    </DrawerHeader>
                    <div class="fields custom-px-16">
                        <div class="field">
                            <div class="name">
                                Name
                            </div>
                            <div class="value">
                                <input
                                    class="full-width"
                                    type="text"
                                    value="Дед мороз"
                                >
                            </div>
                        </div>
                        <div class="field">
                            <div class="name">
                                Username
                            </div>
                            <div class="value">
                                <input
                                    class="full-width"
                                    type="text"
                                    value="@deadmoroz"
                                >
                            </div>
                        </div>
                    </div>
                    <DrawerFooter>
                        <button type="submit">
                            Save changes
                        </button>
                        <DrawerClose as-child>
                            <button class="outlined">
                                Cancel
                            </button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/drawer'
</script>
