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
    data = pd.read_csv('data.csv')
    y1 = data['exam1']
    y2 = data['exam2']

    plt.cla()
   
    plt.hist(y2, label = "Exam Two", color = "#24B6B4", alpha = .7, bins = bins)

    plt.legend(loc='bottom right')
    plt.ylabel('Number of Students')
    plt.xlabel('Exam Score')
    plt.title('Exam Two Grades')
    plt.tight_layout()

ani = FuncAnimation(plt.gcf(), animate, interval = 1000)

plt.tight_layout()
plt.show()


