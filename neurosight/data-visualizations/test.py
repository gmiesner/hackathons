import matplotlib
import pandas as pd 
from matplotlib import pyplot as plt 
 # data taken from https://www.kaggle.com/nycopendata/high-schools 
data = pd.read_csv('scores.csv')
matplotlib.rcParams['font.sans-serif'] = "Avenir"

test_one = data['Average Score (SAT Math)']
test_two = data['Average Score (SAT Reading)']


bins = [40, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]

plt.hist(test_one/7, bins = bins, edgecolor = "black", color = "#c7baa4", alpha = 0.7, label= "test one")
plt.hist(test_two/7, bins = bins, edgecolor = "black", color = "#24B6B4", alpha = 0.7, label = 'test two')

plt.xlabel('percent on exam')
plt.ylabel('number of students')

plt.title("Distribution of Student's Scores on Exams One and Two")
plt.legend()


plt.tight_layout()
plt.savefig('plot.png')
plt.show()
