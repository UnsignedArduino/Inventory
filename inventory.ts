enum ToolbarColorAttribute {
    //% block="box outline"
    BoxOutline,
    //% block="box selected outline"
    BoxSelectedOutline,
    //% block="box background"
    BoxBackground
}

enum InventoryColorAttribute {
    //% block="inventory outline"
    InventoryOutline,
    //% block="inventory selected outline"
    InventorySelectedOutline,
    //% block="inventory background"
    InventoryBackground,
    //% block="inventory text"
    InventoryText
}

namespace Inventory {
    /**
     * Create a simple item which holds a single image and some text. 
     * Can also contain a description which isn't used by the Inventory extension. 
     */
    export class Item {
        /**
         * Define variables that are part of the class. 
         */
        public name: string;
        public image: Image;
        public description: string;

        /**
         * Make a simple item.
         * @param name: The name of the item. 
         * @param image: The image of the item. Must be 16x16, otherwise it will not draw
         *  properly. 
         * @param description: The description of the item. Not required and defaults to "".
         */
        constructor(name: string, image: Image, description: string = null) {
            this.name = name;
            this.image = image;
            this.description = description;
        }
    }

    /**
     * Create a toolbar sprite which is just a regular sprite.
     */
    export class Toolbar extends Sprite {
        /**
         * Define (extra) variables that are part of the class.
         */
        private _items: Item[];
        private _selected: number = 0;
        private _max_items: number;
        private _box_outline_color: number = 12;
        private _box_selected_outline_color: number = 5;
        private _box_background_color: number = 13;

        /**
         * Make a toolbar.
         */
        constructor(items: Item[] = [], max_items: number) {
            super(img`
                .
            `)
            this._items = items;
            this._max_items = max_items;
            this.update();
        }

        /**
         * Get the selected item.
         */
        public get selected() {
            return this._selected;
        }

        /**
         * Set the selected item.
         */
        public set selected(index: number) {
            this._selected = index;
            this.update();
        }

        /**
         * Get the items in the toolbar.
         */
        public get items() {
            return this._items;
        }

        /**
         * Set the items in the toolbar.
         */
        public set items(new_items: Item[]) {
            this._items = new_items;
            this.update();
        }

        /**
         * Get the maximum amount of items in the toolbar.
         */
        public get max_items() {
            return this._max_items;
        }

        /**
         * Set the maximum amount of items in the toolbar.
         */
        public set max_items(new_max: number) {
            this._max_items = new_max;
            this.update();
        }

        /**
         * Set a specific part of the toolbar to a specific color.
         * @param attribute: A property of the ToolbarColorAttribute enum.
         * @param color: A number which should be the new color of the attribute.
         */
        public set_color(attribute: ToolbarColorAttribute, color: number) {
            if (attribute == ToolbarColorAttribute.BoxOutline) {
                this._box_outline_color = color;
            } else if (attribute == ToolbarColorAttribute.BoxSelectedOutline) {
                this._box_selected_outline_color = color;
            } else if (attribute == ToolbarColorAttribute.BoxBackground) {
                this._box_background_color = color;
            }
            this.update();
        }

        /**
         * Get the color of a specific part of the toolbar.
         * @param attribute: A property of the ToolbarColorAttribute enum.
         * @return: The  color (which is a number) of the attribute, otherwise -1. 
         */
        public get_color(attribute: ToolbarColorAttribute) {
            if (attribute == ToolbarColorAttribute.BoxOutline) {
                return this._box_outline_color;
            } else if (attribute == ToolbarColorAttribute.BoxSelectedOutline) {
                return this._box_selected_outline_color;
            } else if (attribute == ToolbarColorAttribute.BoxBackground) {
                return this._box_background_color;
            }
            return -1;
        }

        /**
         * Update the image of the toolbar.
         */
        protected update() {
            let image_size: number = 16;
            let padding: number = 2;
            let box_size: number = image_size + (padding * 2);
            let new_image = image.create(
                ((box_size + 2) * this.max_items) - padding, 
                box_size
            )
            for (let index = 0; index < this.max_items; index++) {
                if (index > this.max_items - 1) {
                    return;
                }
                new_image.fillRect(
                    (box_size + padding) * index, 
                    0, 
                    box_size, 
                    box_size, 
                    this._box_background_color
                )
                if (index < this.items.length) {
                    spriteutils.drawTransparentImage(
                        this.items[index].image, new_image, 
                        ((box_size + padding) * index) + 2, 2
                    )
                }
                new_image.drawRect(
                    (box_size + padding) * index, 
                    0, 
                    box_size, 
                    box_size, 
                    index == this.selected ? this._box_selected_outline_color : this._box_outline_color
                )

            }
            this.setImage(new_image);
        }
    }

    /**
     * Create an inventory sprite which is just a regular sprite.
     */
    export class Inventory extends Sprite {
        /**
         * Define (extra) variables that are part of the class.
         */
        private _items: Item[];
        private _selected: number = 0;
        private _max_items: number;
        private _text: string = "Inventory";
        private _inv_outline_color: number = 12;
        private _inv_selected_outline_color: number = 5;
        private _inv_background_color: number = 13;
        private _inv_text_color: number = 12;

        /**
         * Make an inventory.
         */
        constructor(items: Item[] = [], max_items: number) {
            super(img`
                .
            `)
            this._items = items;
            this._max_items = max_items;
            this.update();
        }

        /**
         * Get the selected item.
         */
        public get selected() {
            return this._selected;
        }

        /**
         * Set the selected item.
         */
        public set selected(index: number) {
            this._selected = index;
            this.update();
        }

        /**
         * Get the items in the inventory.
         */
        public get items() {
            return this._items;
        }

        /**
         * Set the items in the inventory.
         */
        public set items(new_items: Item[]) {
            this._items = new_items;
            this.update();
        }

        /**
         * Get the maximum amount of items in the inventory.
         */
        public get max_items() {
            return this._max_items;
        }

        /**
         * Set the maximum amount of items in the inventory.
         */
        public set max_items(new_max: number) {
            this._max_items = new_max;
            this.update();
        }
        
        /**
         * Get the text in the inventory.
         */
        public get text() {
            return this._text;
        }

        /**
         * Set the text in the inventory.
         */
        public set text(new_text: string) {
            this._text = new_text;
            this.update();
        }

        /**
         * Set a specific part of the inventory to a specific color.
         * @param attribute: A property of the InventoryColorAttribute enum.
         * @param color: A number which should be the new color of the attribute.
         */
        public set_color(attribute: InventoryColorAttribute, color: number) {
            if (attribute == InventoryColorAttribute.InventoryOutline) {
                this._inv_outline_color = color;
            } else if (attribute == InventoryColorAttribute.InventorySelectedOutline) {
                this._inv_selected_outline_color = color;
            } else if (attribute == InventoryColorAttribute.InventoryBackground) {
                this._inv_background_color = color;
            } else if (attribute == InventoryColorAttribute.InventoryText) {
                this._inv_text_color = color;
            }
            this.update();
        }

        /**
         * Get the color of a specific part of the inventory.
         * @param attribute: A property of the InventoryColorAttribute enum.
         * @return: The  color (which is a number) of the attribute, otherwise -1. 
         */
        public get_color(attribute: InventoryColorAttribute) {
            if (attribute == InventoryColorAttribute.InventoryOutline) {
                return this._inv_outline_color;
            } else if (attribute == InventoryColorAttribute.InventorySelectedOutline) {
                return this._inv_selected_outline_color;
            } else if (attribute == InventoryColorAttribute.InventoryBackground) {
                return this._inv_background_color;
            } else if (attribute == InventoryColorAttribute.InventoryText) {
                return this._inv_text_color;
            }
            return -1;
        }

        /**
         * Update the image of the inventory.
         */
        protected update() {
            // TODO: Implement
        }
    }
}