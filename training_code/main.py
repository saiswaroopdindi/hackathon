import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import classification_report, accuracy_score
import matplotlib.pyplot as plt
import pickle

# Step 1: Load data
df = pd.read_csv("data.csv")

# Step 2: Drop unnecessary or redundant columns
df = df.drop(columns=['EmployeeNumber', 'EmployeeCount', 'StandardHours', 'Over18'])

# Step 3: Encode categorical columns
categorical_cols = df.select_dtypes(include=['object']).columns
label_encoders = {}

for col in categorical_cols:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    label_encoders[col] = le

# Step 4: Define X and y
X = df.drop(columns=['PerformanceRating'])  # Features
y = df['PerformanceRating']                 # Target

# Step 5: Split into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 6: Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Step 7: Predict and evaluate
y_pred = model.predict(X_test)
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)
with open('X_columns.pkl', 'wb') as f:
    pickle.dump(X.columns.tolist(), f)
print("Accuracy Score:", accuracy_score(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Step 8: Feature importance visualization
importances = model.feature_importances_
features = X.columns
feat_importances = pd.Series(importances, index=features)
feat_importances.nlargest(10).plot(kind='barh', figsize=(10,6), title="Top 10 Important Features")
plt.xlabel("Importance Score")
plt.tight_layout()
plt.show()
