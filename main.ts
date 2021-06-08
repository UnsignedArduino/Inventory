let stuff: Inventory.Item[] = [
    new Inventory.Item("Apple", img`
        . . . . . . . e c 7 . . . . . .
        . . . . e e e c 7 7 e e . . . .
        . . c e e e e c 7 e 2 2 e e . .
        . c e e e e e c 6 e e 2 2 2 e .
        . c e e e 2 e c c 2 4 5 4 2 e .
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
        . e e e 2 2 2 2 2 2 2 2 2 4 e .
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
        . . 2 e e 2 2 2 2 2 4 4 2 e . .
        . . . 2 2 e e 4 4 4 2 e e . . .
        . . . . . 2 2 e e e e . . . . .
    `, "A fresh apple picked from the orchird."),
    new Inventory.Item("Apple", img`
        . . . . . . . e c 7 . . . . . .
        . . . . e e e c 7 7 e e . . . .
        . . c e e e e c 7 e 2 2 e e . .
        . c e e e e e c 6 e e 2 2 2 e .
        . c e e e 2 e c c 2 4 5 4 2 e .
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
        . e e e 2 2 2 2 2 2 2 2 2 4 e .
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
        . . 2 e e 2 2 2 2 2 4 4 2 e . .
        . . . 2 2 e e 4 4 4 2 e e . . .
        . . . . . 2 2 e e e e . . . . .
    `, "A fresh apple picked from the orchird."),
    new Inventory.Item("Apple", img`
        . . . . . . . e c 7 . . . . . .
        . . . . e e e c 7 7 e e . . . .
        . . c e e e e c 7 e 2 2 e e . .
        . c e e e e e c 6 e e 2 2 2 e .
        . c e e e 2 e c c 2 4 5 4 2 e .
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
        . e e e 2 2 2 2 2 2 2 2 2 4 e .
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
        . . 2 e e 2 2 2 2 2 4 4 2 e . .
        . . . 2 2 e e 4 4 4 2 e e . . .
        . . . . . 2 2 e e e e . . . . .
    `, "A fresh apple picked from the orchird."),
    new Inventory.Item("Pizza", img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
    `, "Some fresh baked pizza."),
    new Inventory.Item("Pizza", img`
        . . . . . . b b b b . . . . . .
        . . . . . . b 4 4 4 b . . . . .
        . . . . . . b b 4 4 4 b . . . .
        . . . . . b 4 b b b 4 4 b . . .
        . . . . b d 5 5 5 4 b 4 4 b . .
        . . . . b 3 2 3 5 5 4 e 4 4 b .
        . . . b d 2 2 2 5 7 5 4 e 4 4 e
        . . . b 5 3 2 3 5 5 5 5 e e e e
        . . b d 7 5 5 5 3 2 3 5 5 e e e
        . . b 5 5 5 5 5 2 2 2 5 5 d e e
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4
        . b 2 2 2 5 5 5 5 5 5 d d e 4 .
        b d 3 2 d 5 5 5 d d d 4 4 . . .
        b 5 5 5 5 d d 4 4 4 4 . . . . .
        4 d d d 4 4 4 . . . . . . . . .
        4 4 4 4 . . . . . . . . . . . .
    `, "Some fresh baked pizza."),
    new Inventory.Item("Burger", img`
        . . . . c c c b b b b b . . . .
        . . c c b 4 4 4 4 4 4 b b b . .
        . c c 4 4 4 4 4 5 4 4 4 4 b c .
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e .
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e
        . e b 4 4 4 4 4 5 4 4 4 4 b e .
        8 7 e e b 4 4 4 4 4 4 b e e 6 8
        8 7 2 e e e e e e e e e e 2 7 8
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e
        e b e 8 8 c c 8 8 c c c 8 e b e
        e e b e c c e e e e e c e b e e
        . e e b b 4 4 4 4 4 4 4 4 e e .
        . . . c c c c c e e e e e . . .
    `, "A freshly prepared burger hot off the grill.")
];
spriteutils.setConsoleOverlay(true);
console.log(stuff[5].name);
console.log(stuff[5].description);
