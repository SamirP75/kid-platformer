def on_overlap_tile(sprite, location):
    game.splash("New Level Starting")
    Level_5()
    tiles.place_on_random_tile(mySprite, sprites.dungeon.hazard_water)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def Levels():
    if Level == 1:
        Level_1()
    if Level == 2:
        Level_2()
    if Level == 3:
        Level_3()
    if Level == 4:
        Level_4()
    if Level == 5:
        Level_5()
    if info.life() == 0:
        respawn_anchor()

def on_overlap_tile2(sprite2, location2):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

def on_overlap_tile3(sprite3, location3):
    tiles.replace_all_tiles(assets.tile("""
            myTile3
        """),
        assets.tile("""
            myTile5
        """))
    tiles.set_tile_at(location3, assets.tile("""
        myTile3
    """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile6
    """),
    on_overlap_tile3)

def Level_5():
    tiles.set_current_tilemap(tilemap("""
        level8
    """))

def on_b_pressed():
    global jump
    if jump == True:
        mySprite.vy = -175
        jump = False
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global jump
    if mySprite.vy == 0:
        mySprite.vy = -175
        jump = True
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile4(sprite4, location4):
    respawn_anchor()
    info.change_life_by(-1)
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile3
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava0,
    on_overlap_tile4)

def on_left_pressed():
    controller.move_sprite(mySprite, 100, 0)
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def Level_2():
    tiles.set_current_tilemap(tilemap("""
        level2
    """))

def on_overlap_tile5(sprite5, location5):
    game.splash("New Level Starting")
    Level_3()
    tiles.place_on_random_tile(mySprite, sprites.dungeon.collectible_blue_crystal)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.chest_closed,
    on_overlap_tile5)

def Level_1():
    tiles.set_current_tilemap(tilemap("""
        level1
    """))

def on_right_pressed():
    controller.move_sprite(mySprite, 100, 0)
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile6(sprite6, location6):
    respawn_anchor()
    info.change_life_by(-1)
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile3
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile6)

def Level_4():
    tiles.set_current_tilemap(tilemap("""
        level6
    """))

def on_overlap_tile7(sprite7, location7):
    game.splash("New Level Starting")
    Level_4()
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile
    """))
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.crowd9, on_overlap_tile7)

def respawn_anchor():
    global Level
    if info.life() == 0:
        if Level == 1:
            Level = 1
            Level_1()
            tiles.place_on_random_tile(mySprite, sprites.builtin.forest_tiles4)
        if Level == 2:
            Level = 2
            Level_2()
            tiles.place_on_random_tile(mySprite, sprites.dungeon.collectible_red_crystal)
        if Level == 3:
            Level = 3
            Level_3()
            tiles.place_on_random_tile(mySprite, sprites.dungeon.collectible_blue_crystal)
        if Level == 4:
            Level = 4
            Level_4()
            tiles.place_on_random_tile(mySprite, assets.tile("""
                myTile
            """))
        if Level == 5:
            Level = 5
            Level_5()
            tiles.place_on_random_tile(mySprite, sprites.dungeon.hazard_water)

def on_life_zero():
    
    def on_start_cutscene():
        sprites.destroy(mySprite)
        tiles.set_current_tilemap(tilemap("""
            level13
        """))
        story.print_character_text("You died!")
        story.show_player_choices("Game Over", "Restart from Checkpoint")
        if story.check_last_answer("Restart from Checkpoint"):
            respawn_anchor()
            game.reset()
        if story.check_last_answer("Game Over"):
            game.game_over(False)
    story.start_cutscene(on_start_cutscene)
    
info.on_life_zero(on_life_zero)

def on_overlap_tile8(sprite8, location8):
    game.splash("New Level Starting")
    Level_2()
    tiles.place_on_random_tile(mySprite, sprites.dungeon.collectible_red_crystal)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile8)

def Level_3():
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
jump = False
Level = 0
mySprite: Sprite = None

def on_start_cutscene2():
    story.show_player_choices("Ultimate Background", "Normal Background")
    if story.check_last_answer("Ultimate Background"):
        scene.set_background_image(img("""
            eeeeeeeeeeeeeeeeeeeeeeeffff.ff77ffffffeeee77777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeef7777777777777777eee7777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeef7777777777777777eee7777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeef7777777777777777fee7777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeffeeeeeeeeeeeeeef7777777777777777eee77777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeef7eeeeeeeeeeeeeee777777777777777feeef7777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777ef777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeef7feeeeeeeeeeeeeeefff77777777feeeeeef7777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeef77feeeeeeeeeeeeeeeeeef77777eeeeeeeeef7777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeef77feeeeeeeeeeeeeeeeeef77777eeeeeeeeef7777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        feeeef77eeeeeeeeeeeeeeeeeeee77777eeeeeeeeef776f6f77777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        ffeeef77feeeeeeeeeeeeeeeeeee77777eeeeeeeeef7f666677777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        f7eeef77feeeeeeeeeeeeeeeeeee77777eeeeeeeeef776666f7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777efffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        f7feef77feeeeeeeeeeeeeeeeeef77777feeeeeeeef776666f7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        f7feef77feeeeeeeeeeeeeeeeeef77777feeeeeeeef77f66667777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        f7feef77feeeeeeeeeeeeeeeeeef77777feeeeeeeef77f66667777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        f77fef777eeeeeeeeeeeeeeeeeee777777eeeeeeeee77f66667777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777feeeeeeeeeefff.ffffeeeeeeeeeeeeeeeeeeee
                        f77fef777eeeeeeeeeeeeeeeeeee777777eeeeeeeee77f666f7777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeefeeeeef7777777777feeeeeeeeeeeeeeeee
                        f777ff777eeeeeeeeeeeeeeeeeee777777eeeeeeeee77f66f7777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777eeeeeeeeeeeeeee
                        ff777f777fffffffeeeeeeeeeeee777777eeeeeeeee77f6677777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777777777eeeeeeeeeeeeee
                        ef7777777777777ffeeeeeeeeeee777777eeeeeeeee777f777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77feeeeeeeeee777777777777777feeeeeeeeeeee
                        ef7777777777777fffeeeeeeeeee777777eeeeeeeee777f777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77feeeeeeeeee777777777777777feeeeeeeeeeee
                        eff7777777777777fffeeeeeeeee777777eeeeeeeee777f777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777feeeeeeeee7777777777777777eeeeeeeeeeee
                        eef777777777777777feeeeeeeee777777eeeeeeeee7777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777feeeeeeee7777777777777777feeeeeeeeeee
                        eeff77777777777777ffeeeeeeee77777feeeeeeeee777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777feeeeeeeeeeeeef77777777eeeeeeee77776666ff7777777feeeeeeeeee
                        eeeff777777777777777feeeeeee77777feeeeeeeee777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef777777feeeeeeeeeeee777777777feeeeeeef777666666f7777777eeeeeeeeee
                        eeeef777777777777777ffeeeeee77777feeeeeeeeef77777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777feeeeeeeeeee7777777777eeeeeeef777f66666667777777eeeeeeeee
                        eeeeff777777777777777feeeeee77777feeeeeeeeef77777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777feeeeeeeeeee7777777777eeeeeeef777f66666667777777eeeeeeeee
                        eeeeeff77ffff7fffff77ffeeeef77777feeeeeeeeef7777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777eeeeeeeeeee7777777777eeeeeeee777f6666666f777777feeeeeeee
                        eeeeeef77ffeffffffff77feef7f777777ffeeeeeeef777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777feeeeeeeeee7777777777eeeeeeee777f666666667777777eeeeeeee
                        eeeeeef77ffeeeeeeeeff7ffe77777777777feeeeeef777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777eeeeeeeeef7777777777eeeeeeee777f66666666f777777eeeeeeee
                        eeeeeeff77ffeeeeeeeef77ff777777777777feeeeee77777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777eeeeeeeeef7777777777feeeeeee777f66666666f777777eeeeeeee
                        eeeeeeef77ffeeeeeeeeff77fe77777777777feeeeef77777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777eeeeeeee777777777777eeeeeeef77f666666666777777eeeeeeee
                        eeeeeeeff7ffeeeeeeeeeff7ff77777777777feeeeef77777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777eeeeeeee777777777777eeeeeeef77f666666666777777eeeeeeee
                        eeeeeeeeffffeeeeeeeeeeffffef77777777feeeeeef777feeeeeeeeeeeeeeeeeeeeeeeeeeeefffff777777feeeeee777777777777eeeeeeee77777777777feeeeeeef77f666666666f77777eeeeeeee
                        eeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77feeeeeeeeeeeeeeeeeeeeeeeeef777777777777777eeeeeef77777777777feeeeeee777777777777eeeeeeee777666666666777777eeeeeeee
                        eeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7feeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777feeeeef777777777777eeeeeee777777777777eeeeeeee77766666666677777feeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777777777777777eeeeef777777777777feeeeef777777777777feeeeeee77766666666777777eeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777777777777777eeeeee7777777777777eeeee7777777777777feeeeeee7776666666f777777eeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777777777777777777eeeeee7777777777777eeeee7777777777777feeeeeee7776666666f777777eeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff7777777777ff77777777eeeeee77777777777777ffef77777777777777eeeeeee77f6666666777777feeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777777f666667777777eeeeee77777777777777777777777777777777eeeeeeef776666667777777eeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7777f766666666777777eeeeee77777777777777777777777777777777eeeeeeef77666667777777feeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefee7777766666666677777feeeeeef7777777777777777777777777777777feeeeeee77f6ff77777777eeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff7777ffffffeeeeeeeeeeeeee7777766666666677777feeeeeef7777777777777777777777777777777eeeeeeee777f777777777eeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeff7777ffffffeeeeeeeeeeeeee7777766666666677777feeeeeef7777777777777777777777777777777eeeeeeee777f777777777eeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777eeeeeeeeeeeeee77777666666666f7777eeeeeeef7777777777777777777777777777777eeeeeeee777777777777feeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7eeeee77777777777777eeeeeeeeeeeeee7777f666666666f7777eeeeeeee7777777777777777777777777777777eeeeeeee777777777777eeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef7eeeeef777777777777feeeeeeeeeeefee7777f66666666677777eeeeeeee7777777777777777777777777777777feeeeeee77777777777eeeeeeeeeeeeee
                        eeff7ffffeeeeeeeeeeeeeeeeeeeeeeee7777eeeeeeeeef7777ffeeeeeeeeeeeeeeeef777f66666666f7777feeeeeeee7777777777777777777777777777777feeeeeee7777777777eeeeeeeeeeeeeee
                        ef777777777feeeeeeeef7feeeeeeeeef7777eeeeeeeeef77eeeeeeeeeeeeeeeeeeeef77776666666f77777feeeeeeee77777777777777777777777777777777eeeeeee7777777777feeeeeeeeeeeeee
                        ef777777777feeeeeeeef7feeeeeeeeef7777eeeeeeeeef77eeeeeeeeeeeeeeeeeeeef77776666666f77777feeeeeeee77777777777777777777777777777777eeeeeee7777777777feeeeeeeeeeeeee
                        7777777777777eeeeee7777feeeeeeee77677feeeeeeeee77feeeeeeeeeeeeeeeeeeee77776666677777777eeeeeeeee77777777777777777777777777777777eeeeeeef7777777777feeeeeeeeeeeee
                        7777f66ff77777eeee777777eeeeeeef7f6677eeeeeeeee77feeeeeeeeeeeeeeeeeeee77776666777777777eeeeeeeee77777777777777777777777777777777eeeeeeef77777777777feeeeeeeeeeee
                        777f66666667777eee777777eeeeeee7776677eeeeeeeee777eeeeeeeeeeeeeeeeeeee77777f777777777feeeeeeeeee77777777ef7777777777777777777777eeeeeeef777777777777eeeeeeeeeeee
                        777f66666666777fee777777eeeeeef777f777feeeeeeee777eeeeeeeeeeeeeeeeeeee777777777777777eeeeeeeeeee7777777eee77777777777ff777777777eeeeeeef7777777777777eeeeeeeeeee
                        777f666666667777eef77777eeeeee77777777feeeeeeeeffeeeeeeeeeeefffeeeeeee77777777777777eeeeeeeeeeee7777777eeef777777777feef77777777eeeeeeee7777777777777eeeeeeeeeee
                        777f666666667777eef77777eeeeee77777777feeeeeeeeffeeeeeeeeeeefffeeeeeee77777777777777eeeeeeeeeeee7777777eeef777777777feef77777777eeeeeeee7777777777777eeeeeeeeeee
                        777f66666666f777eef77777eeeeee777777777eeeefffeeeeeeeeeff77777777eeeeef7777777777777eeeeeeeeeeeef777777eeee77777777eeeeee7777777feeeeeee77777777777777eeeeeeeeee
                        777f666666667777eef77777eeeeee77fee7777eeeefeeeeeeeeef777777777777eeeef7777777777777eeeeeeeeeeeef777777feeef7777777eeeeee7777777feeeeeee777777777777777eeeeeeeee
                        777f666666f77777fef77777eeeeee77eee7777eeeeeeeeeeeef77777ff777777feeeee7777777777777feeeeeeeeeeef777777feeeef77777eeeeeeef777777feeeeeee777777777777777feeeeeeee
                        777f666f77777777fef77777feeeef77eee7777eeeeeeeeeeef77777eeeefeeeeeeeeee77777777777777eeeeeeeeeeef777777feeeee7777feeeeeeef7777777eeeeeee7777777777777777eeeeeeee
                        777f666f77777777fef77777feeeef77eee7777eeeeeeeeeeef77777eeeefeeeeeeeeee77777777777777eeeeeeeeeeef777777feeeee7777feeeeeeef7777777eeeeeee7777777777777777eeeeeeee
                        7777777777777777eef77777feeeee7feeef77feeeeeeeeee77777777f7feeeeeeeeeee777777777777777eeeeeeeeeee7777777eeeeeeeffeeeeeeeef7777777eeeeeee7777777777777777feeeeeee
                        7777777777777777eef777777eeeeeffeeee7feeeeeeeeeee7777777777777eeeeeeeee7777777777777777eeeeeeeeee7777777eeeeeeeeeeeeeeeeef7777777eeeeeee77777777777777777.eeeeee
                        7777777777777777eef777777eeeeeeeefffeefffeeeeeeee7777777777777eeeeeeeee7777777777777777feeeeeeeee7777777eeeeeeeeeeeeeeeeee7777777feeeeee77777777777777777f.eeeee
                        7777777777777f7feee777777eeeeeeeeeeeeeeeeeeeeeeee77777feeefffeeeeeeeeeef77777777777777777eeeeeeee7777777eeeeeeeeeeeeeeeeee77777777eeeeee777777777777777777feeeee
                        f7777777fffffffeeee777777eeeeeeeeeeeeeeeeeeeeeeee77777feeeeeeeeeeeeeeeef777777777777777777eeeeeee7777777feeeeeeeeeeeeeeeee77777777eeeeee7777777f7777777777ffeeee
                        f7777777fffffffeeee777777eeeeeeeeeeeeeeeeeeeeeeee77777feeeeeeeeeeeeeeeef777777777777777777eeeeeee7777777feeeeeeeeeeeeeeeee77777777eeeeee7777777f7777777777ffeeee
                        e77777f.eeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeeeeee77777feeeeeeeeeeeeeeeef7777777777777777777eeeeeef777777feeeeeeeeeeeeeeeee77777777feeeee7777777ee7777777777feeee
                        e77777feeeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeeeeeef777feeeeeeeeeeeeeeeeee777777777f7777777777eeeeef7777777eeeeeeeeeeeeeeeee777777777eeeee7777777eef7777777777eeee
                        e77777feeeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeee7777777eeeef777777777eeeef7777777eeeeeeeeeeeeeeeee777777777feeee7777777eeef777777777.eee
                        e77777feeeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeee777777feeeee7777777777eeee7777777eeeeeeeeeeeeeeeee777777777feeee7777777eeeee77777777feee
                        e777777eeeeeeeeeeeef77777eeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeefeeeeeeee777777feeeeeef77777777feee7777777eeeeeeeeeeeeeeeee777777777feeee7777777eeeeee77777777eee
                        e777777eeeeeeeeeeeef77777eeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeefeeeeeeee777777feeeeeef77777777feee7777777eeeeeeeeeeeeeeeee777777777feeee7777777eeeeee77777777eee
                        e777777eeeeeeeeeeeef77777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77777eeeeef77777feeeeeeee77777777fee7777777eeeeeeeeeeeeeeeee777777777feeee7777777feeeeef7777777eee
                        e777777eeeeeeeeeeeef77777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77ff77feeeee777777eeeeeeeef77777777ee7777777feeeeeeeeeeeeeeeef77777777feeee7777777feeeeee7777777eee
                        e777777eeeeeeeeeeeee77777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77f66677eeeee777777eeeeeeeeef77777777ef777777feeeeeeeeeeeeeeeef77777777feeee7777777eeeeeeee777777eee
                        e777777feeeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77f66677feeee77777feeeeeeeeee77777777ef777777feeeeeeeeeeeeeeeef77777777feeef7777777feeeeeeee7777feee
                        e777777feeeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77f66f777eeee77777feeeeeeeeeeee777777ee777777eeeeeeeeeeeeeeeeef77777777feeee7777777feeeeeeeefeeeeeee
                        e777777feeeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77f66f777eeee77777feeeeeeeeeeee777777ee777777eeeeeeeeeeeeeeeeef77777777feeee7777777feeeeeeeefeeeeeee
                        e777777feeeeeeeeeeee777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777667777eeee77777feeeeeeeeeeeee77777ee777777eeeeeeeeeeeeeeeeef77777777feeeef777777eeeeeeeeeeeeeeeee
                        e777777eeeeeeeeeeeef7777777fffff7ffff77feeeeeeeeeeeeeeeeeeef77777777feeee77777eeeeeeeeeeeeeef7777ee777777eeeeeeeeeeeeeeeeef77777777eeeeeeef77ffeeeeeeeeeeeeeeeee
                        ef777ffeeeeeeeeeeeef7777777777777777777777eeeeeeeeeeeeeeeeeee77777feeeefee777feeeeeeeeeeeeeeeef7eeef7777feeeeeeeeeeeeeeeeef77777777eeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        e.77ffeeeeeeeeeeeeef7777777777777777777777feeeeeeeeeeeeeeeefffffffeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeef777eeeeeeeeeeeeeeeeeee77777777eeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeef77777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeef77777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeee77777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeef777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeef77777777777777feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef77eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
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
        """))
    if story.check_last_answer("Normal Background"):
        scene.set_background_image(img("""
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
        """))
story.start_cutscene(on_start_cutscene2)

mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
Level = 1
Levels()
info.set_life(3)
scene.camera_follow_sprite(mySprite)
tiles.place_on_random_tile(mySprite, sprites.builtin.forest_tiles4)
mySprite.ay = 350
jump = False