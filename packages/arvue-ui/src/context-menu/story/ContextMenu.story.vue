<template>
    <Story title="Context menu/Demo">
        <Variant title="default">
            <ContextMenu>
                <ContextMenuTrigger
                    style="
                        display: flex;
                        height: 150px;
                        width: 300px;
                        align-items: center;
                        justify-content: center;
                        border-radius: 0.375rem;
                        border: 1px dashed;
                        font-size: 0.875rem;
                        line-height: 1.25rem;
                    "
                >
                    Right click here
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem inset>
                        Back
                        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem
                        inset
                        disabled
                    >
                        Forward
                        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset>
                        Reload
                        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>
                            More Tools
                        </ContextMenuSubTrigger>
                        <ContextMenuSubContent>
                            <ContextMenuItem inset>
                                Save Page...
                                <ContextMenuShortcut>
                                    ⇧⌘S
                                </ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem inset>
                                Create Shortcut...
                            </ContextMenuItem>
                            <ContextMenuItem inset>
                                Name Window...
                            </ContextMenuItem>
                            <ContextMenuSeparator/>
                            <ContextMenuItem inset>
                                Developer Tools
                            </ContextMenuItem>
                            <ContextMenuSeparator/>
                            <ContextMenuItem inset>
                                Delete
                            </ContextMenuItem>
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator/>
                    <ContextMenuCheckboxItem :model-value="true">
                        Show Bookmarks
                        <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                    </ContextMenuCheckboxItem>
                    <ContextMenuCheckboxItem>
                        Show Full URLs
                    </ContextMenuCheckboxItem>
                    <ContextMenuSeparator/>
                    <ContextMenuRadioGroup model-value="pedro">
                        <ContextMenuLabel inset>
                            People
                        </ContextMenuLabel>
                        <ContextMenuRadioItem value="pedro">
                            Pedro Duarte
                        </ContextMenuRadioItem>
                        <ContextMenuRadioItem value="colm">
                            Colm Tuite
                        </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                </ContextMenuContent>
            </ContextMenu>
        </Variant>
    </Story>
</template>

<script setup lang="ts">
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '@/context-menu'
</script>
