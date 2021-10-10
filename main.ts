let phía = 0
basic.forever(function () {
    phía = input.compassHeading()
    if (phía < 45) {
        basic.showString("B")
    } else if (phía < 135) {
        basic.showString("D")
    } else if (phía < 255) {
        basic.showString("N")
    } else if (phía < 315) {
        basic.showString("T")
    } else {
        basic.showString("N")
    }
})
