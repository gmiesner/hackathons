import csv
import random
import time

exam1 = 90
exam2 = 90

fieldnames = ["exam1", "exam2"]


with open('data.csv', 'w') as csv_file:
    csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    csv_writer.writeheader()

while True:

    with open('data.csv', 'a') as csv_file:
        csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        info = {
            "exam1": exam1,
            "exam2": exam2
        }

        csv_writer.writerow(info)
        print(exam1, exam2)
        if exam1 < 99 and exam2 < 100 and exam1 > 20 and exam2 > 15: 
            exam1 = exam1 + random.randint(-20,-2)
            exam2 = exam2 + random.randint(-15, -5)
        elif exam1 == 99 or exam2 == 100 or exam1 == 100 or exam1 <= 20 or exam2 <= 15: 
            exam1 = 80
            exam2 = 90 
        
     
    time.sleep(1)
