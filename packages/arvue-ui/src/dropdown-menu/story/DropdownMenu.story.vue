<template>
    <Story title="Dropdown menu/Demo">
        <Variant title="default">
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <button class="outlined">
                        Dropdown Menu
                        <span class="icon">
                            <i class="fas fa-chevron-down"/>
                        </span>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                    <DropdownMenuLabel inset>
                        My Account
                    </DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem inset>
                            Profile
                            <DropdownMenuShortcut>
                                ⇧⌘P
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem inset>
                            Billing
                            <DropdownMenuShortcut>
                                ⌘B
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem inset>
                            Settings
                            <DropdownMenuShortcut>
                                ⌘S
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem inset>
                            Keyboard shortcuts
                            <DropdownMenuShortcut>
                                ⌘K
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuItem inset>
                            Team
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger inset>
                                Invite users
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    Email
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Message
                                </DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        More...
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>
                                            Email
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Message
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem>
                                            More...
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuItem inset>
                            New Team
                            <DropdownMenuShortcut>
                                ⌘+T
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem inset>
                        GitHub
                    </DropdownMenuItem>
                    <DropdownMenuItem inset>
                        Support
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        disabled
                        inset
                    >
                        API
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuCheckboxItem v-model="checkbox1">
                        checkbox 1
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem v-model="checkbox2">
                        checkbox 2
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem v-model="checkbox3">
                        checkbox 3
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuRadioGroup v-model="radio">
                        <DropdownMenuRadioItem value="1">
                            radio 1
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="2">
                            radio 2
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="3">
                            radio 3
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem inset>
                        Log out
                        <DropdownMenuShortcut>
                            ⇧⌘Q
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/dropdown-menu'

const checkbox1 = ref(true)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const radio = ref('1')
</script>
