<template>
    <Story title="Sonner/Demo">
        <Variant title="default">
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                <button @click="toast('Default notification')">
                    Default
                </button>
                <button @click="toast.message('Event has been created', { description: 'Monday, January 3rd at 6:00pm' })">
                    Description
                </button>
                <button @click="toast.success('Saved successfully')">
                    Success
                </button>
                <button @click="toast.info('Here is some info')">
                    Info
                </button>
                <button @click="toast.warning('Please check this')">
                    Warning
                </button>
                <button @click="toast.error('Something went wrong')">
                    Error
                </button>
                <button @click="toast('With action', { action: { label: 'Undo', onClick: () => {} } })">
                    Action
                </button>
                <button @click="toast.loading('Loading...')">
                    Loading
                </button>
                <button @click="promiseToast">
                    Promise
                </button>
            </div>
            <Sonner
                class="larger"
                :duration="Infinity"
                :close-button="true"
                close-button-position="bottom-right"
                position="top-right"
                :visible-toasts="5"
            />
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { Sonner, toast } from '@/sonner'

function promiseToast() {
    toast.promise<{ name: string }>(
        () =>
            new Promise(resolve =>
                setTimeout(resolve, 2000, { name: 'Event' }),
            ),
        {
            loading: 'Loading...',
            success: (data: { name: string }) => `${data.name} has been created`,
            error: 'Error',
        },
    )
}
</script>
