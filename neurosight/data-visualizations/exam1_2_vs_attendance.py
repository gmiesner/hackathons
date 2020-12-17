import matplotlib
import pandas as pd 
from matplotlib import pyplot as plt 
from matplotlib.animation import FuncAnimation 

 # data taken from https://www.kaggle.com/nycopendata/high-schools 


matplotlib.rcParams['font.sans-serif'] = "Avenir"

def animate(i):
    data = pd.read_csv('data_2.csv')
    test_two = data['exam2']
    test_one = data['exam1']
    attendance = data['attendance']
    attendance2 = data['attendance2']

    plt.cla()
    
    plt.scatter(test_one, attendance ,  color = "#24B6B4", edgecolor = "black", linewidth = 1, alpha = 0.75, label = "exam one")
    plt.scatter(test_two , attendance2 ,  color = "#c7baa4", edgecolor = "black", linewidth = 1, alpha = 0.75, label = "exam two")


    plt.xlabel('percent on exam')
    plt.ylabel('percent attendance')
    plt.legend(loc='upper left')

    plt.title("Exam 1 & 2 Grade v. Percent Attendance")


    plt.tight_layout()

ani = FuncAnimation(plt.gcf(), animate, interval = 1000)




plt.tight_layout()
plt.savefig('plot5.png')
plt.show()