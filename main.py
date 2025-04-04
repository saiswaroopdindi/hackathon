from fastapi import FastAPI
from schemas import EmployeeData
import pandas as pd
import pickle
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained model and preprocessor
with open("training_code/model.pkl", "rb") as f:
    model = pickle.load(f)

with open("training_code/X_columns.pkl", "rb") as f:
    X_columns = pickle.load(f)

@app.get("/")
def home():
    return {"message": "🚀 Employee Attrition Prediction API is running"}

@app.post("/predict")
def predict(data: EmployeeData):
    # Convert input data to DataFrame
    input_data = data.dict()
    df = pd.DataFrame([input_data])
    
    # Convert categorical variables using one-hot encoding
    df_encoded = pd.get_dummies(df)
    
    # Ensure all columns from training data are present
    for col in X_columns:
        if col not in df_encoded.columns:
            df_encoded[col] = 0
    
    # Reorder columns to match training data
    df_encoded = df_encoded[X_columns]
    
    # Make prediction
    prediction = model.predict(df_encoded)[0]
    probability = model.predict_proba(df_encoded)[0][1]  # Probability of attrition
    
    return {
        "prediction": "Yes" if prediction == 1 else "No",
        "probability": float(probability),
        "input_data": input_data  # Return the input data for verification
    }
