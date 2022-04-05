basic.forever(function () {
    serial.writeLine("" + (Math.round(dstemp.celsius(DigitalPin.P0) * 100) / 100))
    basic.pause(1000)
})
