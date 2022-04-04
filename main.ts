radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (chifumi == 2) {
            gagnant = gagnant + 1
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 2) {
        if (chifumi == 3) {
            gagnant = gagnant + 1
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 3) {
        if (chifumi == 1) {
            gagnant = gagnant + 1
            basic.pause(500)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 4) {
        basic.showString("TU ES VRAIMANT NUL")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    chifumi = randint(1, 3)
    radio.sendNumber(chifumi)
    basic.pause(1000)
    chifumi = 0
})
let gagnant = 0
let chifumi = 0
radio.setGroup(2)
basic.forever(function () {
    if (gagnant == 6) {
        radio.sendNumber(4)
        basic.showString("bien jouer")
    }
})
basic.forever(function () {
    if (chifumi == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(450)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (chifumi == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        basic.pause(450)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (chifumi == 3) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(450)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
