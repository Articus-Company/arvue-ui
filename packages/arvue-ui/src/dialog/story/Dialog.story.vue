<template>
    <Story title="Dialog/Demo">
        <Variant title="default">
            <Dialog>
                <DialogTrigger as-child>
                    <button>
                        Open Dialog
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Edit profile
                        </DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <div class="fields">
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
                    <DialogFooter>
                        <DialogClose as-child>
                            <button class="outlined">
                                Cancel
                            </button>
                        </DialogClose>
                        <button type="submit">
                            Save changes
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/dialog'
</script>
