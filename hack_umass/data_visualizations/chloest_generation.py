import csv
import random
import time

chlol = 150 

fieldnames = ['chlol']

with open('chlol.csv', 'w') as csv_file:
    csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    csv_writer.writeheader()

while True:

    with open('chlol.csv', 'a') as csv_file:
        csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        info = {
            "chlol": chlol
        }

        csv_writer.writerow(info)
        print(chlol)
        if chlol >= 200 or chlol <= 50:
            chlol = random.randint(60,180)
        else:
            chlol = random.randint(50,200)
        
     
    time.sleep(1)
