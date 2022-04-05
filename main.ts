basic.forever(function () {
    serial.writeLine("DS" + Math.round(dstemp.celsius(DigitalPin.P0) * 100) / 100)
    serial.writeLine("TM" + Math.round(input.temperature() * 100) / 100)
    basic.pause(1000)
})
