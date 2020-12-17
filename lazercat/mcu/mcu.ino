#include <Servo.h>

enum COMMAND { 
    NOOP,
    LASER_ON,
    LASER_OFF,
    LASER_LEFT,
    LASER_RIGHT,
    LASER_LEFT_MAX,
    LASER_RIGHT_MAX,
};

#define LASER_PIN A0
#define MOTOR_PIN A1

Servo myservo; // Servo object
int pos = 0; // degree position of the servo rotation

void setup() {
    // put your setup code here, to run once:
  Serial.begin(9600); // Select BAUD rate
  Serial1.begin(9600);
}

void init_servo(){
  // initialize servo to be at 90 degrees at start
    for(pos = 0; pos <=90; pos++)
    {
    myservo.write(pos);
    delay(15);
    }
}

void loop()
{
  Serial1.write("0");
  if (Serial1.available()) {
    int data = Serial1.read();
    Serial.write(data);
  }
}

void _loop() {
  // put your main code here, to run repeatedly:
  if(Serial.available()>0)
  {
    int data_sw = Serial1.read();
    if(data_sw == 'f')
    {
      digitalWrite(8,HIGH); // Change with whatever PIN Laser will be on
    }

    else
    {
      digitalWrite(8, LOW); // Change with whatever PIN laser will be on
    }

    char data_turn = Serial.read(); // Read in data for turning left/right
    if(data_turn == 'a')
    {
      if(pos < 180)
      {
        // Rotate Left
        pos++;
        myservo.write(pos);              // tell servo to go to position in variable 'pos'
        delay(15);                       // waits 15ms for the servo to reach the position
      }

      if(pos == 180)
      {
        myservo.write(pos);
        delay(15);
        Serial.write(pos);
      }
    }
    
    else if(data_turn == 'd')
    {
      // Rotate Right
      if(pos > 0)
      {
        // Rotate Left
        pos--;
        myservo.write(pos);              // tell servo to go to position in variable 'pos'
        delay(15);                       // waits 15ms for the servo to reach the position
      }

      if(pos == 0)
      {
        myservo.write(pos);
        delay(15);
        Serial.write(pos);
      }
    }
  }
}
