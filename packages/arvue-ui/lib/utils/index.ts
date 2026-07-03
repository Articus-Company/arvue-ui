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
