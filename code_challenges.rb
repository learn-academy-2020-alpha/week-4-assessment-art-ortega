# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.


fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

def oddSort(array)
    theNum = array.select{|value| value.is_a?(Integer) }
    newNum = theNum.select{|value| value%2 == 1}
    p newNum.sort
end
oddSort(fullArr1)
oddSort(fullArr2)



# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
class Bike 
    def initialize(model,frameSize,speed=0,wheels = 2)
        @model = model
        @wheels = wheels 
        @frameSize = frameSize
        @speed = speed
    end 
    def get_info
        puts "I have a #@model mountainbike with #@wheels wheels and a #@frameSize frame."
    end
    
    def ring_bell 
        puts "Beep beep!"
    end
    def get_speed
        puts @speed
    end
    def pedal_faster
        @speed += 3
    end
    def brake 
        @speed -=4
        if @speed < 0
            @speed = 0
        end
    end
end

diamond_bike = Bike.new('Diamondback','168cm')
diamond_bike.get_info


# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

diamond_bike.ring_bell




# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

diamond_bike.get_speed



# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.
# increases speed by 3, speed at 3
diamond_bike.pedal_faster 
# speed at 6
diamond_bike.pedal_faster
# speed at 9
diamond_bike.pedal_faster
# speed at 12
diamond_bike.pedal_faster
# speed at 8
diamond_bike.brake
#speed at 4
diamond_bike.brake
#speed at 0
diamond_bike.brake
#speed at 0
diamond_bike.brake

diamond_bike.get_speed






# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
