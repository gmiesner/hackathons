import csv
import random
import time

y1 = 90
y2 = 90
study_time = 20

fieldnames = ["y1", "y2", "study_time"]


with open('data_3.csv', 'w') as csv_file:
    csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    csv_writer.writeheader()

while True:

    with open('data_3.csv', 'a') as csv_file:
        csv_writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

        info = {
            "y1": y1,
            "y2": y2,
            "study_time": study_time
        }

        csv_writer.writerow(info)
        print(y1, y2, study_time)
        y1 = random.randint(0,100)
        y2 = random.randint(0,100)
        study_time = random.randint(0,20)
        
     
    time.sleep(1)
