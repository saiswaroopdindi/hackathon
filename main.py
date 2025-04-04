import pandas as pd
df = pd.read_csv('data.csv')
df.info()
df.head()
df.describe()
df = df.dropna()
df = pd.get_dummies(df, drop_first=True)