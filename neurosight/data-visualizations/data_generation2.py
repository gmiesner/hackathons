import csv
import random
import time

exam1 = 90
exam2 = 90
attendance = 90
attendance2 = 90 

fieldnames = ["attendance", "attendance2", "exam1", "exam2"]


with open('data_2.csv', 'w') as csv_file:
    csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    csv_writer.writeheader()

while True:

    with open('data_2.csv', 'a') as csv_file:
        csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        info = {
            "exam1": exam1,
            "exam2": exam2,
            "attendance": attendance,
            "attendance2": attendance2
        }

        csv_writer.writerow(info)
        print(exam1, exam2)
        exam1 = random.randint(0,100)
        exam2 = random.randint(0,100)
        attendance = random.randint(0,100)
        attendance2 = random.randint(0,100)
        
     
    time.sleep(1)
