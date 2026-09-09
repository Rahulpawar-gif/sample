import turtle
import time

screen = turtle.Screen()
screen.bgcolor("black")
screen.title("❤️ Heart Animation")

pen = turtle.Turtle()
pen.speed(0)
pen.color("red")
pen.pensize(3)

def draw_heart(size):
    pen.begin_fill()
    pen.left(140)
    pen.forward(size)
    pen.circle(-size / 2, 200)
    pen.left(120)
    pen.circle(-size / 2, 200)
    pen.forward(size)
    pen.end_fill()
    pen.setheading(0)

# Animate the heart
for i in range(20):
    pen.clear()
    pen.penup()
    pen.goto(0, -100)
    pen.pendown()

    pen.color("red")
    draw_heart(100 + i * 2)

    time.sleep(0.08)

for i in range(20, 0, -1):
    pen.clear()
    pen.penup()
    pen.goto(0, -100)
    pen.pendown()

    pen.color("red")
    draw_heart(100 + i * 2)

    time.sleep(0.08)

turtle.done()