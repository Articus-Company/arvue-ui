<template>
    <Story title="Accordion/Demo">
        <Variant title="default">
            <Accordion
                style="width: 500px"
                type="multiple"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Product Information</AccordionTrigger>
                    <AccordionContent>
                        <div>
                            Our flagship product combines cutting-edge technology with sleek
                            design. Built with premium materials, it offers unparalleled
                            performance and reliability.
                        </div>
                        <div>
                            Key features include advanced processing capabilities, and an
                            intuitive user interface designed for both beginners and experts.
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Shipping Details</AccordionTrigger>
                    <AccordionContent>
                        <div>
                            We offer worldwide shipping through trusted courier partners.
                            Standard delivery takes 3-5 business days, while express shipping
                            ensures delivery within 1-2 business days.
                        </div>
                        <div>
                            All orders are carefully packaged and fully insured. Track your
                            shipment in real-time through our dedicated tracking portal.
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Return Policy</AccordionTrigger>
                    <AccordionContent>
                        <div>
                            We stand behind our products with a comprehensive 30-day return
                            policy. If you're not completely satisfied, simply return the
                            item in its original condition.
                        </div>
                        <div>
                            Our hassle-free return process includes free return shipping and
                            full refunds processed within 48 hours of receiving the returned
                            item.
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/accordion'
</script>
