import csv
import random
import time

bpm = 100 

fieldnames = ['bpm']

with open('heart.csv', 'w') as csv_file:
    csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    csv_writer.writeheader()

while True:

    with open('heart.csv', 'a') as csv_file:
        csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        info = {
            "bpm": bpm
        }

        csv_writer.writerow(info)
        print(bp,)
        # if chlol >= 200 or chlol <= 50:
        #     chlol = random.randint(60,180)
        # else:
        #     chlol = random.randint(50,200)
        
     
    time.sleep(1)
