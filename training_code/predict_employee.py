import pickle
import pandas as pd

# Load the model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# Load the training column structure
with open('X_columns.pkl', 'rb') as f:
    X_columns = pickle.load(f)
# Sample new employee data
new_data = pd.DataFrame([{
    'Age': 30,
    'JobSatisfaction': 3,
    'MonthlyIncome': 6000,
    'OverTime': 'Yes',
    'YearsAtCompany': 4,
    'DistanceFromHome': 8,
    'JobRole': 'Sales Executive',
    # add all required fields...
}])

# Encode just like before
new_data_encoded = pd.get_dummies(new_data)

# Align with training columns
new_data_encoded = new_data_encoded.reindex(columns=X_columns, fill_value=0)

# Predict
prediction = model.predict(new_data_encoded)
print("Predicted Performance Rating:", prediction[0])

