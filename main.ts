radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (chifumi == 2) {
            gagnant = gagnant + 1
        }
    }
    if (receivedNumber == 2) {
        if (chifumi == 3) {
            gagnant = gagnant + 1
        }
    }
    if (receivedNumber == 3) {
        if (chifumi == 1) {
            gagnant = gagnant + 1
        }
    }
})
input.onButtonPressed(Button.A, function () {
    chifumi = randint(1, 3)
    radio.sendNumber(chifumi)
    basic.pause(2000)
    chifumi = 0
})
let gagnant = 0
let chifumi = 0
radio.setGroup(2)
basic.forever(function () {
    if (gagnant == 10) {
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
    }
    if (chifumi == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
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
    }
})
