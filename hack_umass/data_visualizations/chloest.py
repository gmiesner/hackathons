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
    c = pd.read_csv('chlol.csv')
    chlol = c['chlol']
    plt.hist(chlol, color = "#24B6B4")
    
    plt.ylabel('Number of People')
    plt.xlabel('Chloesterol Level')
    plt.title('Average Chloesterol')
    plt.tight_layout()

ani = FuncAnimation(plt.gcf(), animate, interval = 1000)

plt.tight_layout()
plt.show()