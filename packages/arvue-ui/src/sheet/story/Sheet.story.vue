<template>
    <Story title="Sheet/Demo">
        <Variant title="default">
            <Sheet>
                <SheetTrigger as-child>
                    <button class="outline">
                        Open Sheet
                    </button>
                </SheetTrigger>
                <SheetContent>
                    <div style="margin-left: auto; margin-right: auto; width: 100%; max-width: 24rem;">
                        <SheetHeader>
                            <SheetTitle>Payment</SheetTitle>
                            <SheetDescription>Enter your card details to complete the order</SheetDescription>
                        </SheetHeader>
                        <div class="custom-px-16">
                            <div class="fields">
                                <div class="field">
                                    <div class="name for-input">
                                        Card number
                                    </div>
                                    <div class="value">
                                        <input
                                            type="text"
                                            placeholder="1234 5678 9012 3456"
                                        >
                                    </div>
                                </div>

                                <div class="field">
                                    <div class="name for-input">
                                        Expiry / CVV
                                    </div>
                                    <div class="value">
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                        >
                                    </div>
                                    <div class="value">
                                        <input
                                            type="text"
                                            placeholder="123"
                                        >
                                    </div>
                                </div>

                                <div class="field">
                                    <div class="name">
                                        Amount
                                    </div>
                                    <div class="value">
                                        <span>123 денег</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <SheetFooter>
                            <button>
                                Pay now
                            </button>
                            <SheetClose as-child>
                                <button class="outline">
                                    Cancel
                                </button>
                            </SheetClose>
                        </SheetFooter>
                    </div>
                </SheetContent>
            </Sheet>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/sheet'
</script>
