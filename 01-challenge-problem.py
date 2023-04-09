class Point:
    def __init__(self, coordX, coordY):
        self.coordX = coordX
        self.coordY = coordY


class Rectangle:
    def __init__(self, starting_point, width, height):
        self.starting_point = starting_point
        self.width = width
        self.height = height

    def generate_area(self):
        return self.width * self.height

    def print_end_points(self):
        top_right_coords = self.starting_point.coordX + self.width
        bottom_left_coords = self.starting_point.coordY + self.height
        print('Starting Point (X)): ' + str(self.starting_point.coordX))
        print('Starting Point (Y)): ' + str(self.starting_point.coordY))
        print('End Point X-Axis (Top Right): ' + str(top_right_coords))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left_coords))


def generate_rectangle():
    starting_point = Point(50, 100)
    return Rectangle(starting_point, 90, 10)

generated_rectangle = generate_rectangle()

print(generated_rectangle.generate_area())
generated_rectangle.print_end_points()
