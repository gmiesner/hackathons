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
        print(bpm)
        if bpm >= 150 or bpm <= 50:
            bpm = random.randint(70,150)
        else:
            bpm = random.randint(80,160)
        
     
    time.sleep(1)
