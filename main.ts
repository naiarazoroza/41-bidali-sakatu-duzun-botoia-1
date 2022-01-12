radio.onReceivedNumber(function (receivedNumber) {
    if (1 == receivedNumber) {
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
    }
    if (2 == receivedNumber) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # . .
            `)
    }
    if (3 == receivedNumber) {
        basic.showLeds(`
            # # # # .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # . .
            # . . # .
            # # # . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(4)
