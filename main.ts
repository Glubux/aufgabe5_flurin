let status = 0
let x = 0
let y = 0
let wait = input.lightLevel()
basic.forever(function () {
    wait = 255 - input.lightLevel()
})
basic.forever(function () {
    if (status == 0) {
        for (let index = 0; index < 4; index++) {
            led.toggle(x, y)
            basic.pause(wait)
            basic.clearScreen()
            x += 1
        }
        status += 1
    } else if (status == 1) {
        for (let index = 0; index < 4; index++) {
            led.toggle(x, y)
            basic.pause(wait)
            basic.clearScreen()
            y += 1
        }
        status += 1
    } else if (status == 2) {
        for (let index = 0; index < 4; index++) {
            led.toggle(x, y)
            basic.pause(wait)
            basic.clearScreen()
            x += -1
        }
        status += 1
    } else if (status == 3) {
        for (let index = 0; index < 4; index++) {
            led.toggle(x, y)
            basic.pause(wait)
            basic.clearScreen()
            y += -1
        }
        status = 0
    }
})
