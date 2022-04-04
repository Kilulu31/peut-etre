def on_received_number(receivedNumber):
    global gagnant
    if receivedNumber == 1:
        if chifumi == 2:
            gagnant = gagnant + 1
    if receivedNumber == 2:
        if chifumi == 3:
            gagnant = gagnant + 1
    if receivedNumber == 3:
        if chifumi == 1:
            gagnant = gagnant + 1
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global chifumi
    chifumi = randint(1, 3)
    radio.send_number(chifumi)
    basic.pause(2000)
    chifumi = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

gagnant = 0
chifumi = 0
radio.set_group(2)

def on_forever():
    if gagnant == 10:
        basic.show_string("bien jouer")
basic.forever(on_forever)

def on_forever2():
    if chifumi == 1:
        basic.show_leds("""
            . # # # .
                        . # # # .
                        . # # # .
                        . # # # .
                        . # # # .
        """)
    if chifumi == 2:
        basic.show_leds("""
            # # . . #
                        # # . # .
                        . . # . .
                        # # . # .
                        # # . . #
        """)
    if chifumi == 3:
        basic.show_leds("""
            . # # # .
                        # # # # #
                        # # # # #
                        # # # # #
                        . # # # .
        """)
basic.forever(on_forever2)
