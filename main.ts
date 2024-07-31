scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.splash("New Level Starting")
    Level_5()
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.hazardWater)
})
function Levels () {
    if (Level == 1) {
        Level_1()
    }
    if (Level == 2) {
        Level_2()
    }
    if (Level == 3) {
        Level_3()
    }
    if (Level == 4) {
        Level_4()
    }
    if (Level == 5) {
        Level_5()
    }
    if (info.life() == 0) {
        respawn_anchor()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        Ghost = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnTile(Ghost, value)
        Ghost.vx = 30
        Ghost.follow(mySprite)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.replaceAllTiles(assets.tile`myTile3`, assets.tile`myTile5`)
    tiles.setTileAt(location, assets.tile`myTile3`)
})
function Level_5 () {
    tiles.setCurrentTilemap(tilemap`level8`)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump == true) {
        mySprite.vy = -175
        jump = false
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -175
        jump = true
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    respawn_anchor()
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 0)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 e e f f f . 
        . . . f f e e 4 4 e f . . 
        . . . f 7 7 e 4 4 e f . . 
        . . f f 6 6 f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    true
    )
})
function Level_2 () {
    tiles.setCurrentTilemap(tilemap`level2`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.splash("New Level Starting")
    Level_3()
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
})
function Level_1 () {
    tiles.setCurrentTilemap(tilemap`level1`)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 0)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    respawn_anchor()
    info.changeLifeBy(-1)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
})
function Level_4 () {
    tiles.setCurrentTilemap(tilemap`level6`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd9, function (sprite, location) {
    game.splash("New Level Starting")
    Level_4()
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
})
function respawn_anchor () {
    if (info.life() == 0) {
        if (Level == 1) {
            Level = 1
            Level_1()
            tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles4)
        }
        if (Level == 2) {
            Level = 2
            Level_2()
            tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
        }
        if (Level == 3) {
            Level = 3
            Level_3()
            tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleBlueCrystal)
        }
        if (Level == 4) {
            Level = 4
            Level_4()
            tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
        }
        if (Level == 5) {
            Level = 5
            Level_5()
            tiles.placeOnRandomTile(mySprite, sprites.dungeon.hazardWater)
        }
    }
}
info.onLifeZero(function () {
    story.startCutscene(function () {
        tiles.setCurrentTilemap(tilemap`level13`)
        story.printCharacterText("You died!")
        story.showPlayerChoices("Game Over", "Restart from Checkpoint")
        if (story.checkLastAnswer("Restart from Checkpoint")) {
            Levels()
            tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
            info.setLife(7)
        }
        if (story.checkLastAnswer("Game Over")) {
            game.gameOver(false)
        }
    })
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.splash("New Level Starting")
    Level_2()
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    info.changeLifeBy(-1)
})
function Level_3 () {
    tiles.setCurrentTilemap(tilemap`level4`)
}
let Ghost: Sprite = null
let jump = false
let Level = 0
let mySprite: Sprite = null
story.startCutscene(function () {
    story.showPlayerChoices("Ultimate Background", "Normal Background")
    if (story.checkLastAnswer("Ultimate Background")) {
        scene.setBackgroundImage(img`
            eeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeef7777777777777777feef77777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeef7777777777777777feef777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777fffeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeefeeeeeeeeeeeeef7777777777777777feef777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777ffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeefffeeeeeeeeeeeeef7777777777777777feef777777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeef7feeeeeeeeeeeeef77777777777777fffeef7777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeff7feeeeeeeeeeeeeffffff7777777fffeeeef7777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeef77feeeeeeeeeeeeeeeeeef77777fffeeeeeef7777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeef77feeeeeeeeeeeeeeeeeef77777ffeeeeeeef7777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777ffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            feeeef77feeeeeeeeeeeeeeeeeef77777feeeeeeeef77fffff777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            fffeef77feeeeeeeeeeeeeeeeeef77777feeeeeeeef77f666f777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            f7feef77feeeeeeeeeeeeeeeeeef77777feeeeeeeef77f666f777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            f7feef77feeeeeeeeeeeeeeeeeef77777feeeeeeeef77f666f777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            f7feef77feeeeeeeeeeeeeeeeeef77777feeeeeeeef77f666f777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefff77777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            f7ffef77feeeeeeeeeeeeeeeeeef77777feeeeeeeef77f666f777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffeeeeeffffeeeeeeeeeeeeeeeeeeeee
            f77fef777eeeeeeeeeeeeeeeeeef77777feeeeeeeeff7f666f777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff77fffffeeeeeeeeeeeeeeeee
            f77fff777eeeeeeeeeeeeeeeeeef77777feeeeeeeeef7f66ff777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff7777777777ffeeeeeeeeeeeeeeee
            f777ff777eeeeeeeeeeeeeeeeeef77777feeeeeeeeef7ffff7777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff77777777777ffeeeeeeeeeeeeeee
            ff777f777fffffffeeeeeeeeeeef77777feeeeeeeeef777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff777777777777ffeeeeeeeeeeeeee
            ef7777777777777ffeeeeeeeeeef77777feeeeeeeeef777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeef7777777777777fffeeeeeeeeeeee
            ef7777777777777fffeeeeeeeeef77777feeeeeeeeef777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffeeeeeeeef77777777777777ffeeeeeeeeeeee
            eff7777777777777fffeeeeeeeef77777feeeeeeeeef777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff7777ffeeeeeeef777777777777777ffeeeeeeeeeee
            eef777777777777777feeeeeeeeff7777feeeeeeeeef777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeff777777ffeeeeeef7777777777777777ffeeeeeeeeee
            eeff77777777777777ffeeeeeeeef7777feeeeeeeeef77777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffeeeeeeeeeeeef77777777ffeeeeef7777ffffff7777777ffeeeeeeeee
            eeeff777777777777777feeeeeeef7777feeeeeeeeef77777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff777777ffeeeeeeeeeef777777777ffeeeeeff777f6666fff777777feeeeeeeee
            eeeef777777777777777ffeeeeeef7777feeeeeeeeef77777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777feeeeeeeeeef7777777777feeeeeff777f666666ff77777feeeeeeeee
            eeeeff777777777777777feeeeeef7777feeeeeeeeef77777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777ffeeeeeeeeef7777777777feeeeeef777f6666666f77777ffeeeeeeee
            eeeeeff77ffffffffff77ffeeeeff7777feeeeeeeeef7777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777feeeeeeeeef7777777777feeeeeef777ff666666ff77777feeeeeeee
            eeeeeef77ffeeeeeeeef77feeffff7777fffeeeeeeef777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777ffeeeeeeeef7777777777feeeeeef777ff6666666f77777ffeeeeeee
            eeeeeef77ffeeeeeeeeff7ffef7777777777feeeeeef777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff7777777777feeeeeeeff7777777777feeeeeeff77ff6666666f777777feeeeeee
            eeeeeeff77feeeeeeeeef77fff77777777777feeeeef77777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777777ffeeeeeeff7777777777ffeeeeeef77ff6666666ff77777feeeeeee
            eeeeeeef77feeeeeeeeeff77fff7777777777feeeeef7777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777feeeeeef777777777777feeeeeef77ff66666666f77777feeeeeee
            eeeeeeeff7feeeeeeeeeeff7feff777777777feeeeef7777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffeeeeeef777777777777feeeeeef777777777777feeeeeef77ff66666666f77777feeeeeee
            eeeeeeeefffeeeeeeeeeeefffeeffffffffffeeeeeef777ffeeeeeeeeeeeeeeeeeeeeeeefffffffff77777ffeeeeef777777777777feeeeeff77777777777ffeeeeeef77ff66666666f77777feeeeeee
            eeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77ffeeeeeeeeeeeeeeeeeeeeeefff77777777777777ffeeeeff77777777777ffeeeeff777777777777feeeeeef777f66666666f7777ffeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeefff7777777777777777ffeeeff777777777777feeeeff777777777777feeeeeef777f66666666f7777feeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777feeeff777777777777ffeeeff777777777777ffeeeeef777f66666666f777ffeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff7777777777777777777feeeff7777777777777ffeef7777777777777ffeeeeef777f666666fff777feeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff7777777777777777777feeeff7777777777777fffef7777777777777ffeeeeef777f666666ff7777feeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777ffffff7777777feeeff77777777777777ffff77777777777777feeeeef77ff66666ff7777ffeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777ff6666ff777777feeeff77777777777777777777777777777777feeeeeff77f666fff77777feeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777fff666666ff7777ffeeefff7777777777777777777777777777777feeeeeff77f66ff7777777feeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777ff66666666f7777feeeeeff7777777777777777777777777777777feeeeeff77f6ff7777777ffeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777f666666666f7777feeeeeff7777777777777777777777777777777feeeeeff77ff777777777feeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffeeeeeeeeeeeef7777f666666666f7777feeeeeff7777777777777777777777777777777feeeeeef777f77777777ffeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeef7777777777777feeeeeeeeeeeef7777f666666666f7777feeeeeef7777777777777777777777777777777feeeeeef777777777777feeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7feeeef7777777777777feeeeeeeeeeeef7777f666666666f7777feeeeeef7777777777777777777777777777777feeeeeef77777777777ffeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff7ffeeeffff777777777ffeeeeeeeeeeeef7777f666666666f7777feeeeeef7777777777777777777777777777777ffeeeeef7777777777ffeeeeeeeeeeeee
            efffffffffffeeeeeeeeffeeeeeeeeeeff777feeeeeefff7777ffffeeeeeeeeeeeeeff777f66666666ff777ffeeeeeef7777777777777777777777777777777ffeeeeef7777777777feeeeeeeeeeeeee
            ff77777777fffeeeeeeefffeeeeeeeeef7777feeeeeeeef77fffeeeeeeeeeeeeeeeeff777f6666666ff7777ffeeeeeef77777777777777777777777777777777feeeeef7777777777feeeeeeeeeeeeee
            ff777777777fffeeeeeef7ffeeeeeeeff7f77feeeeeeeef77feeeeeeeeeeeeeeeeeeff777ff666666ff7777ffeeeeeef77777777777777777777777777777777feeeeee7777777777ffeeeeeeeeeeeee
            f777777777777ffeeeeff77feeeeeeef7fff7ffeeeeeeef77feeeeeeeeeeeeeeeeeeef7777f666fffff7777feeeeeeef77777777777777777777777777777777feeeeeef7777777777feeeeeeeeeeeee
            f77ffffff77777ffeeff777ffeeeeeef7f6ff7feeeeeeef77feeeeeeeeeeeeeeeeeeef7777f66ff77777777feeeeeeef77777777777777777777777777777777feeeeeef7777777777ffeeeeeeeeeeee
            f77ff6666ff7777feef77777feeeeeff7f6ff7feeeeeeef77feeeeeeeeeeeeeeeeeeef7777ffff7777777ffeeeeeeeef77777777fff777777777777777777777feeeeeef7777777777ffeeeeeeeeeeee
            f77f666666ff777ffef77777feeeeef77fff77ffeeeeeeff7feeeeeeeeeeeeeeeeeeef777777777777777ffeeeeeeeef7777777ffef7777777777ff777777777feeeeeef77777777777ffeeeeeeeeeee
            f77f6666666f7777fef77777feeeeff7777777ffeeeeeeefffeeeeeeeeeeeeeeeeeeef77777777777777ffeeeeeeeeef7777777feef777777777ffff77777777feeeeeef777777777777ffeeeeeeeeee
            f77f6666666f7777fef77777feeeef77777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777777777feeeeeeeeeef7777777feef77777777ffeef77777777feeeeeef7777777777777ffeeeeeeeee
            f77f6666666ff777fef77777feeeef777777777feeeeeeeeeeeefffffffeeeeeeeeeeff7777777777777feeeeeeeeeeff777777feeff7777777feeeff7777777feeeeeeff7777777777777feeeeeeeee
            f77f666666ff7777fef77777feeeef77fff7777feeeeeeeffffff77777ffeeeeeeeeeef7777777777777feeeeeeeeeeff777777feeef777777ffeeeff7777777feeeeeeef7777777777777ffeeeeeeee
            f77f666ffff77777fef77777feeeef77fff7777feeeeeeef7777777777ffeeeeeeeeeef7777777777777ffeeeeeeeeeff777777feeeff77777feeeefff777777feeeeeeef77777777777777feeeeeeee
            f77f66ff77777777fef77777ffeeef77fef7777feeeeeeef7777777777ffeeeeeeeeeef77777777777777feeeeeeeeeef777777feeeeff777ffeeeeeff777777feeeeeeef77777777777777ffeeeeeee
            f77fffff77777777fef77777ffeeef77fef7777feeeeeeef77777ffffffeeeeeeeeeeef77777777777777feeeeeeeeeef777777feeeeefffffeeeeeeef777777ffeeeeeef777777777777777feeeeeee
            f777777777777777fef77777ffeeef7ffeff77ffeeeeeeef77777feeeeeeeeeeeeeeeef77777777777777ffeeeeeeeeef777777feeeeeeeffeeeeeeeef7777777feeeeeef777777777777777ffeeeeee
            f777777777777777fef777777feeefffeeef7ffeeeeeeeef77777feeeeeeeeeeeeeeeef777777777777777ffeeeeeeeef777777ffeeeeeeeeeeeeeeeef7777777feeeeeef7777777777777777feeeeee
            f777777777777777fef777777feeeeeeeeefffeeeeeeeeef77777ffffffeeeeeeeeeeef7777777777777777feeeeeeeef7777777feeeeeeeeeeeeeeeeff777777feeeeeef7777777777777777feeeeee
            f777777777777f7ffef777777feeeeeeeeeeeeeeeeeeeeef777777777feeeeeeeeeeeeff7777777777777777feeeeeeef7777777feeeeeeeeeeeeeeeeef777777feeeeeef7777777777777777ffeeeee
            f7777777ffffffffeef777777feeeeeeeeeeeeeeeeeeeeef777777777feeeeeeeeeeeeff7777777777777777ffeeeeeeff777777feeeeeeeeeeeeeeeeef777777ffeeeeef777777ff777777777ffeeee
            f7777777fffffffeeef777777feeeeeeeeeeeeeeeeeeeeef7777ffffffeeeeeeeeeeeeeff7777777777777777ffeeeeeef777777ffeeeeeeeeeeeeeeeef7777777feeeeef777777ff777777777ffeeee
            f77777ffffeeeeeeeef777777feeeeeeeeeeeeeeeeeeeeef7777feeeeeeeeeeeeeeeeeeff77777777777777777ffeeeeef777777ffeeeeeeeeeeeeeeeef7777777ffeeeef777777fff777777777feeee
            f77777feeeeeeeeeeef777777feeeeeeeeeeeeeeeeeeeeef7777feeeeeeeeeeeeeeeeeeff7777777ff777777777feeeeef7777777feeeeeeeeeeeeeeeef77777777feeeef777777feff77777777ffeee
            f77777feeeeeeeeeeef777777feeeeeeeeeeeeeeeeeeeeef7777feeeeeeeeeeeeeeeeeef7777777fffff7777777ffeeeef7777777feeeeeeeeeeeeeeeef77777777feeeef777777feef777777777feee
            f77777feeeeeeeeeeef777777feeeeeeeeeeeeeeeeeeeeeff777feeeeeeeeeeeeeeeeeef777777ffeeeff7777777ffeeef7777777feeeeeeeeeeeeeeeef77777777feeeef777777feeff77777777ffee
            f77777feeeeeeeeeeeff77777feeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeff77777feeeeeff7777777ffeef7777777feeeeeeeeeeeeeeeef77777777feeeef77777ffeeeff77777777fee
            f77777feeeeeeeeeeeff77777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeef7777ffeeeeeff77777777ffef7777777feeeeeeeeeeeeeeeef77777777feeeef77777feeeeef77777777fee
            f777777feeeeeeeeeeff77777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff7777ffeeeef7777ffeeeeeeff77777777feff777777feeeeeeeeeeeeeeeef77777777feeeef77777ffeeeeef777777ffee
            f777777feeeeeeeeeeff77777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff77fff7ffeeef7777ffeeeeeeeff7777777ffef777777feeeeeeeeeeeeeeeef77777777feeeef77777ffeeeeeff77777feee
            f777777feeeeeeeeeeef77777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77f66ff7feeef77777feeeeeeeefff777777fef777777feeeeeeeeeeeeeeeef77777777feeeef777777feeeeeeff7777feee
            f777777feeeeeeeeeeef777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77f66ff7feeef77777feeeeeeeeeeff77777fff777777feeeeeeeeeeeeeeeef77777777feeeef777777feeeeeeeff777feee
            f777777feeeeeeeeeeef777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77f66f77feeef77777feeeeeeeeeeefff7777ff777777feeeeeeeeeeeeeeeef77777777ffeeef777777feeeeeeeefffffeee
            f777777feeeeeeeeeeef777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77f66f77feeef77777feeeeeeeeeeeefff77fff777777feeeeeeeeeeeeeeeef77777777ffeeef777777feeeeeeeeeeeeeeee
            f777777feeeeeeeeeeef777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77ffff77feeef77777feeeeeeeeeeeeeeff7feff77777feeeeeeeeeeeeeeeeff7777777ffeeeff7777ffeeeeeeeeeeeeeeee
            f777777feeeeeeeeeeef777777ffffffffffffffffeeeeeeeeeeeeeeeeef77777777feeeff7777feeeeeeeeeeeeeeeeffeef77777feeeeeeeeeeeeeeeeff7777777feeeeeffffffeeeeeeeeeeeeeeeee
            ff777fffeeeeeeeeeeef777777777777777fff777fffeeeeeeeeeeeeeeefff7777fffeeeef777ffeeeeeeeeeeeeeeeeeeeeff777ffeeeeeeeeeeeeeeeeff7777777feeeeeeeeeeeeeeeeeeeeeeeeeeee
            fffffffeeeeeeeeeeeef7777777777777777777777ffeeeeeeeeeeeeeeeeeefffffeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeffffffeeeeeeeeeeeeeeeeef777777ffeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eefeeeeeeeeeeeeeeeef77777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeef77777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777feeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeef77777777777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeffffffff7777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeff777777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeefff7777777777ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `)
    }
    if (story.checkLastAnswer("Normal Background")) {
        scene.setBackgroundImage(img`
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
            7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
            7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
            6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
            6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
            6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
            6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
            6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
            66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
            66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
            66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
            66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
            66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
            6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
            6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
            6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
            bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
            bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
            bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
            bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
            bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
            bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
            bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
            bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
            bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
            bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
            b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
            b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
            b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
            b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
            dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
            9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
            9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
            9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
            9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
            99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
            99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
            9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
            9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
            999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
            d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
            dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
            dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
            ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
            dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
            dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
            d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
            999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
            9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
            d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
            ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
            dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
            ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
            ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
            dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
            ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
            dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
            ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
    }
})
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
Level = 1
Levels()
info.setLife(7)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles4)
mySprite.ay = 350
jump = false
game.onUpdate(function () {
    let list: Sprite[] = []
    for (let value of list) {
        if (value.isHittingTile(CollisionDirection.Bottom)) {
            if (0 < 0 && false) {
            	
            } else if (false) {
            	
            }
        } else if (false) {
        	
        } else if (false) {
        	
        }
    }
})
