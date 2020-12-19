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
bins = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]

index = count()

def animate(i):
    c = pd.read_csv('heart.csv')
    chlol = c['bpm']
    plt.hist(chlol, color = "#24B6B4", bins = bins )
    
    plt.ylabel('Number of People')
    plt.xlabel('Heart Rate')
    plt.title('Average Heart Rate')
    plt.tight_layout()

ani = FuncAnimation(plt.gcf(), animate, interval = 1000)

plt.tight_layout()
plt.show()