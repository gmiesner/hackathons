import random
import matplotlib
from itertools import count
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation 

plt.style.use('fivethirtyeight')
matplotlib.rcParams['font.sans-serif'] = "Avenir"

x_vals = []
y_vals = []
bins = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

index = count()

def animate(i):
    data = pd.read_csv('data_3.csv')
    y1 = data['y1']
    y2 = data['y2']
    study_time = data['study_time']

    plt.cla()
    plt.scatter(y1, study_time,  edgecolor = "black", color = "#24B6B4",linewidth = 1, alpha = 0.75)
    plt.xlabel('percent on exam')
    plt.ylabel('time spent studying')

    plt.title("Time Spent Studying v. Exam Grade")

    plt.tight_layout()
    plt.savefig('plot2.png')
  

ani = FuncAnimation(plt.gcf(), animate, interval = 1000)

plt.tight_layout()
plt.show()


