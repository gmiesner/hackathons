import csv
import random
import time

bpm = 100 
chloesterol = 150
miles = 3
steps = 6450 
sleep = 7.25 
blood_pressure1 = 120 
blood_pressure2 = 80 
water = 2

fieldnames = ['bpm', 'chloesterol', 'miles', 'steps', 'sleep','blood_pressure1','blood_pressure2', 'water']

with open('everything.csv', 'w') as csv_file:
    csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    csv_writer.writeheader()

while True:

    with open('everything.csv', 'a') as csv_file:
        csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        info = {
            "bpm": bpm, 
            "chloesterol" : chloesterol, 
            "miles" : miles, 
            "steps" : steps, 
            "sleep" : sleep, 
            "blood_pressure1" : blood_pressure1, 
            "blood_pressure2" : blood_pressure2,
            "water" : water
        }

        csv_writer.writerow(info)
        print(bpm, chloesterol, miles, steps, sleep, blood_pressure1, blood_pressure2, water)

        # heart rate 
        if bpm >= 150 or bpm <= 50:
            bpm = random.randint(70,150)
        else:
            bpm = random.randint(80,160)

        #  chloesterol
        if chloesterol >= 200 or chloesterol <= 50:
            chloesterol = random.randint(60,180)
        else:
            chloesterol = random.randint(50,200)
        
        # miles 
        def truncate(n, decimals=2):
            multiplier = 10 ** decimals
            return int(n * multiplier) / multiplier

        if miles >= 3 or miles < 3: 
            miles = random.uniform(0,6)
            miles = truncate(miles)

        # steps
        if steps > 0: 
            steps = random.randint(1, 15000)
        
        # sleep 
        if sleep >= 0: 
            sleep = random.uniform(0,12)
            sleep = truncate(sleep)
     
        # blood pressure 1
        if blood_pressure1 > 0: 
            blood_pressure1 = random.randint(100, 150)
        
        # blood pressure 2 
        if blood_pressure2 > 0: 
            blood_pressure2 = random.randint(60,100)

        # water 
        if water >= 0: 
            water = random.randint(0,7)
     
    time.sleep(1)
