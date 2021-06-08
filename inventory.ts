namespace Inventory {
    /**
     * Create a simple item which holds a single image and some text. 
     * Can also contain a description which isn't used by the Inventory extension. 
     */
    export class Item {
        /**
         * Define variables that are part of the class. 
         */
        name: string;
        image: Image;
        description: string;

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
}