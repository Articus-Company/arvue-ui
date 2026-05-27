<h1 align="center">
Arvue UI
</h1>

## Установка

```bash
pnpm add arvue-ui
```

```bash
npm install arvue-ui
```

```bash
yarn add arvue-ui
```

## Использование

1. Подключите стили

```js
@import 'arvue-ui/all.css'
```

2. Используйте компоненты

```vue
<template>
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
} from 'arvue-ui'
</script>
```
