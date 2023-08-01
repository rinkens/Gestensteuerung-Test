let eineGeste = 0
grove.initGesture()
basic.forever(function () {
    eineGeste = grove.getGestureModel()
    if (eineGeste != grove.ggesture(GroveGesture.None)) {
        if (eineGeste == grove.ggesture(GroveGesture.Right)) {
            basic.showIcon(IconNames.ArrowEast)
        } else {
            if (eineGeste == grove.ggesture(GroveGesture.Left)) {
                basic.showIcon(IconNames.ArrowWest)
            } else {
                if (eineGeste == grove.ggesture(GroveGesture.Up)) {
                    basic.showIcon(IconNames.ArrowNorth)
                } else {
                    if (eineGeste == grove.ggesture(GroveGesture.Down)) {
                        basic.showIcon(IconNames.ArrowSouth)
                    } else {
                        if (eineGeste == grove.ggesture(GroveGesture.Forward)) {
                            basic.showIcon(IconNames.Square)
                        } else {
                            if (eineGeste == grove.ggesture(GroveGesture.Backward)) {
                                basic.showIcon(IconNames.SmallSquare)
                            } else {
                                if (eineGeste == grove.ggesture(GroveGesture.Clockwise)) {
                                    basic.showLeds(`
                                        # # # # #
                                        # . . . #
                                        # . . . #
                                        . . . # #
                                        . . . # #
                                        `)
                                } else {
                                    if (eineGeste == grove.ggesture(GroveGesture.Anticlockwise)) {
                                        basic.showLeds(`
                                            # # # # #
                                            # . . . #
                                            # . . . #
                                            # # . . .
                                            # # . . .
                                            `)
                                    } else {
                                        basic.showLeds(`
                                            . . . . .
                                            . # . . .
                                            # . # . #
                                            . . . # .
                                            . . . . .
                                            `)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        basic.pause(500)
        basic.clearScreen()
    }
})
