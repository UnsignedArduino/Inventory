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

enum ItemTextAttribute {
    //% block="name"
    Name,
    //% block="description"
    Description
}

enum ToolbarNumberAttribute {
    //% block="selected index"
    SelectedIndex,
    //% block="max items"
    MaxItems
}

enum InventoryNumberAttribute {
    //% block="selected index"
    SelectedIndex,
    //% block="max items"
    MaxItems
}

//% color="#7732B3"
//% group="['Item', 'Toolbar', 'Inventory']"
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

        /**
         * Set the name or description of the item.
         * @param attribute: A property of the ItemTextAttribute enum.
         * @param value: The new text of the item.
         */
        //% block="%Inventory(Item) set text of %attribute to %value"
        //% weight=20
        //% group="Item"
        set_text(attribute: ItemTextAttribute, value: string) {
            if (attribute == ItemTextAttribute.Name) {
                this.name = value;
            } else if (attribute == ItemTextAttribute.Description) {
                this.description = value;
            }
        }

        /**
         * Get the name of description of the item.
         */
        //% block="%Inventory(Item) get text of %attribute"
        //% weight=10
        //% group="Item"
        get_text(attribute: ItemTextAttribute) {
            if (attribute == ItemTextAttribute.Name) {
                return this.name;
            } else if (attribute == ItemTextAttribute.Description) {
                return this.description;
            }
            return "";
        }

        /**
         * Set the image of the item.
         * @param new_image: The new image.
         */
        //% block="%Inventory(Item) set image to %new_image"
        //% new_image.shadow=screen_image_picker
        //% weight=40
        //% group="Item"
        set_image(new_image: Image) {
            this.image = new_image;
        }

        /**
         * Get the image of the item.
         */
        //% block="%Inventory(Item) get image"
        //% weight=30
        //% group="Item"
        get_image() {
            return this.image;
        }
    }

    /**
     * Create a new item - for blocks.
     */
    //% block="create item with name %name and %image || with description %description"
    //% blockSetVariable=item
    //% name.dfl="Name"
    //% image.shadow=screen_image_picker
    //% expandableArgumentMode="toggle"
    //% description.dfl="Description"
    //% weight=50
    //% group="Item"
    export function create_item(name: string, image: Image, description: string = null) {
        return new Item(name, image, description)
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
         * Get the items in the toolbar. Only rewrapped for blocks.
         */
        //% block="%Inventory(toolbar) get items"
        //% weight=80
        //% group="Toolbar"
        public get_items() {
            return this.items;
        }

        /**
         * Set the items in the toolbar.
         */
        public set items(new_items: Item[]) {
            this._items = new_items;
            this.update();
        }

        /**
         * Set the items in the toolbar. Only rewrapped for blocks.
         */
        //% block="%Inventory(toolbar) set items to %new_items"
        //% new_items.shadow="lists_create_with"
        //% weight=90
        //% group="Toolbar"
        public set_items(new_items: Item[]) {
            this.items = new_items;
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
         * Set the selected index or max items. Only rewrapped for blocks.
         */
        //% block="%Inventory(toolbar) set %attribute to %value"
        //% weight=70
        //% group="Toolbar"
        public set_number(attribute: ToolbarNumberAttribute, value: number) {
            if (attribute == ToolbarNumberAttribute.SelectedIndex) {
                this.selected = value;
            } else if (attribute == ToolbarNumberAttribute.MaxItems) {
                this.max_items = value;
            }
        }

        /**
         * Get the selected index or max items. Only rewrapped for blocks.
         */
        //% block="%Inventory(toolbar) get %attribute"
        //% weight=60
        //% group="Toolbar"
        public get_number(attribute: ToolbarNumberAttribute) {
            if (attribute == ToolbarNumberAttribute.SelectedIndex) {
                return this.selected;
            } else if (attribute == ToolbarNumberAttribute.MaxItems) {
                return this.max_items;
            }
            return -1;
        }

        /**
         * Set a specific part of the toolbar to a specific color.
         * @param attribute: A property of the ToolbarColorAttribute enum.
         * @param color: A number which should be the new color of the attribute.
         */
        //% block="%Inventory(toolbar) set color of %attribute to %color"
        //% color.shadow=colorindexpicker
        //% weight=50
        //% group="Toolbar"
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
        //% block="%Inventory(toolbar) get color of %attribute"
        //% weight=40
        //% group="Toolbar"
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
        //% block="%Inventory(toolbar) force redraw of toolbar"
        //% weight=30
        public update() {
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
     * Create a new toolbar - for blocks.
     */
    //% block="create toolbar with items %items and max items %max_items"
    //% blockSetVariable=toolbar
    //% items.shadow="lists_create_with"
    //% max_items.dfl=3
    //% weight=100
    //% group="Toolbar"
    export function create_toolbar(items: Item[], max_items: number) {
        return new Toolbar(items, max_items);
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
         * Get the items in the inventory. Only rewrapped for blocks.
         */
        //% block="%Inventory(Inventory) get items"
        //% weight=80
        //% group="Inventory"
        public get_items() {
            return this.items;
        }

        /**
         * Set the items in the inventory.
         */
        public set items(new_items: Item[]) {
            this._items = new_items;
            this.update();
        }

        //% block="%Inventory(Inventory) set items to %new_items"
        //% new_items.shadow="lists_create_with"
        //% weight=90
        //% group="Inventory"
        public set_items(new_items: Item[]) {
            this.items = new_items;
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
         * Set the selected index or max items. Only rewrapped for blocks.
         */
        //% block="%Inventory(Inventory) set %attribute to %value"
        //% weight=70
        //% group="Inventory"
        public set_number(attribute: InventoryNumberAttribute, value: number) {
            if (attribute == InventoryNumberAttribute.SelectedIndex) {
                this.selected = value;
            } else if (attribute == InventoryNumberAttribute.MaxItems) {
                this.max_items = value;
            }
        }

        /**
         * Get the selected index or max items. Only rewrapped for blocks.
         */
        //% block="%Inventory(Inventory) get %attribute"
        //% weight=60
        //% group="Inventory"
        public get_number(attribute: InventoryNumberAttribute) {
            if (attribute == InventoryNumberAttribute.SelectedIndex) {
                return this.selected;
            } else if (attribute == InventoryNumberAttribute.MaxItems) {
                return this.max_items;
            }
            return -1;
        }
        
        /**
         * Get the text in the inventory.
         */
        public get text() {
            return this._text;
        }

        /**
         * Get the text in the inventory. Only rewrapped for blocks.
         */
        //% block="%Inventory(Inventory) get text"
        //% weight=40
        //% group="Inventory"
        public get_text() {
            return this.text;
        }

        /**
         * Set the text in the inventory.
         */
        public set text(new_text: string) {
            this._text = new_text;
            this.update();
        }

        /**
         * Set the text in the inventory. Only rewrapped for blocks.
         */
        //% block="%Inventory(Inventory) set text to %new_text"
        //% weight=50
        //% group="Inventory"
        public set_text(new_text: string) {
            this.text = new_text;
        }

        /**
         * Set a specific part of the inventory to a specific color.
         * @param attribute: A property of the InventoryColorAttribute enum.
         * @param color: A number which should be the new color of the attribute.
         */
        //% block="%Inventory(Inventory) set color of %attribute to %color"
        //% color.shadow=colorindexpicker
        //% weight=30
        //% group="Inventory"
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
        //% block="%Inventory(Inventory) get color of %attribute"
        //% weight=20
        //% group="Inventory"
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
        //% block="%Inventory(Inventory) force redraw of inventory"
        //% weight=10
        //% group="Inventory"
        public update() {
            let image_size: number = 16;
            let padding: number = 1;
            let box_size: number = image_size + (padding * 2);
            let outside_padding: number = 4;
            let width: number = scene.screenWidth() - (outside_padding * 2);
            let height: number = scene.screenHeight() - (outside_padding * 2) - 24;
            let new_image = image.create(width, height);
            new_image.fill(this._inv_background_color);
            new_image.drawRect(0, 0, width, height, this._inv_outline_color);
            new_image.print(this.text, 2, 2, this._inv_text_color);
            new_image.drawLine(2, 11, width - 3, 11, this._inv_outline_color);
            for (let index = 0; index < this.max_items; index++) {
                if (index > this.max_items - 1) {
                    return;
                }
                let x: number = ((index % 8) * box_size) + 4;
                let y: number = (Math.idiv(index, 8) * box_size) + 14;
                if (index < this.items.length) {
                    if (index == this.selected) {
                        new_image.fillRect(x - 1, y - 1, box_size, box_size, 
                                           this._inv_selected_outline_color);
                    }
                    spriteutils.drawTransparentImage(this.items[index].image, new_image, x, y);
                }
            }
            this.setImage(new_image);
        }
    }

    /**
     * Create a new inventory - for blocks.
     */
    //% block="create inventory with items %items and max items %max_items"
    //% blockSetVariable=inventory
    //% items.shadow="lists_create_with"
    //% max_items.dfl=3
    //% weight=100
    //% group="Inventory"
    export function create_inventory(items: Item[], max_items: number) {
        return new Inventory(items, max_items);
    }
}