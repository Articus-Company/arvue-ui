import type { ComputedRef } from 'vue'
import { camelize, computed, toHandlerKey } from 'vue'

export const colors = {
    'red': 'red',
    'green': 'green',
    'blue': 'blue',
    'yellow': 'yellow',
    'orange': 'orange',
    'purple': 'purple',
    'brown': 'brown',
    'pink': 'pink',
    'white': 'white',
    'black': 'black',
    'gray': 'gray',
    'light-gray': 'light-gray',
    'dark-gray': 'dark-gray',
} as const

export type Colors = keyof typeof colors

export function delegateEmits<
    Emits extends Record<string, any[]>,
    Events extends keyof Emits & string = keyof Emits & string,
>(
    emit: (...args: any[]) => void,
    ...events: Events[]
): ComputedRef<Record<string, (...args: any[]) => void>> {
    return computed(() =>
        events.reduce((acc, curr) => {
            acc[toHandlerKey(camelize(curr))] = (...args: any[]) => emit(curr, ...args)
            return acc
        }, {} as Record<string, (...args: any[]) => void>),
    )
}
