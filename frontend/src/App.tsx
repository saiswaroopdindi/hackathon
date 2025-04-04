import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    Age: 30,
    BusinessTravel: "Travel_Rarely",
    DailyRate: 1000,
    Department: "Sales",
    DistanceFromHome: 5,
    Education: 3,
    EducationField: "Life Sciences",
    EnvironmentSatisfaction: 4,
    Gender: "Male",
    HourlyRate: 50,
    JobInvolvement: 3,
    JobLevel: 2,
    JobRole: "Sales Executive",
    JobSatisfaction: 4,
    MaritalStatus: "Single",
    MonthlyIncome: 5000,
    MonthlyRate: 15000,
    NumCompaniesWorked: 2,
    OverTime: "No",
    PercentSalaryHike: 15,
    RelationshipSatisfaction: 4,
    StockOptionLevel: 1,
    TotalWorkingYears: 8,
    TrainingTimesLastYear: 2,
    WorkLifeBalance: 3,
    YearsAtCompany: 5,
    YearsInCurrentRole: 3,
    YearsSinceLastPromotion: 2,
    YearsWithCurrManager: 3
  })

  const [prediction, setPrediction] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      setPrediction(data)
    } catch (error) {
      console.error('Error:', error)
    }
    setLoading(false)
  }

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-8 text-center">Employee Attrition Prediction</h1>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            
            <p className="text-gray-400">
              Enter employee details to predict the likelihood of attrition
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Age</label>
                    <input
                      type="number"
                      value={formData.Age}
                      onChange={(e) => setFormData({ ...formData, Age: parseInt(e.target.value) })}
                      className="w-full bg-gray-900 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Gender</label>
                    <select
                      value={formData.Gender}
                      onChange={(e) => setFormData({ ...formData, Gender: e.target.value })}
                      className="w-full bg-gray-900 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Job Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
                  Job Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Department</label>
                    <select
                      value={formData.Department}
                      onChange={(e) => setFormData({ ...formData, Department: e.target.value })}
                      className="w-full bg-gray-900 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Sales">Sales</option>
                      <option value="Research & Development">Research & Development</option>
                      <option value="Human Resources">Human Resources</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Role</label>
                    <select
                      value={formData.JobRole}
                      onChange={(e) => setFormData({ ...formData, JobRole: e.target.value })}
                      className="w-full bg-gray-900 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Sales Executive">Sales Executive</option>
                      <option value="Research Scientist">Research Scientist</option>
                      <option value="Laboratory Technician">Laboratory Technician</option>
                      <option value="Manufacturing Director">Manufacturing Director</option>
                      <option value="Healthcare Representative">Healthcare Representative</option>
                      <option value="Manager">Manager</option>
                      <option value="Sales Representative">Sales Representative</option>
                      <option value="Research Director">Research Director</option>
                      <option value="Human Resources">Human Resources</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Satisfaction Metrics */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
                  Satisfaction Metrics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Job Satisfaction (1-5)</label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={formData.JobSatisfaction}
                      onChange={(e) => setFormData({ ...formData, JobSatisfaction: parseInt(e.target.value) })}
                      className="w-full accent-blue-500"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Work Life Balance (1-5)</label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={formData.WorkLifeBalance}
                      onChange={(e) => setFormData({ ...formData, WorkLifeBalance: parseInt(e.target.value) })}
                      className="w-full accent-blue-500"
                    />
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compensation */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">
                  Compensation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Income</label>
                    <input
                      type="number"
                      value={formData.MonthlyIncome}
                      onChange={(e) => setFormData({ ...formData, MonthlyIncome: parseInt(e.target.value) })}
                      className="w-full bg-gray-900 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Percent Salary Hike</label>
                    <input
                      type="number"
                      value={formData.PercentSalaryHike}
                      onChange={(e) => setFormData({ ...formData, PercentSalaryHike: parseInt(e.target.value) })}
                      className="w-full bg-gray-900 rounded-lg border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? 'Predicting...' : 'Predict Attrition'}
              </button>
            </form>

            {prediction && (
              <div className="mt-8 p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Prediction Results</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Attrition Risk:</span>
                    <span className={`font-semibold ${prediction.prediction === 'Yes' ? 'text-red-500' : 'text-green-500'}`}>
                      {prediction.prediction}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Probability:</span>
                    <span className="font-semibold">
                      {(prediction.probability * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${prediction.prediction === 'Yes' ? 'bg-red-500' : 'bg-green-500'}`}
                      style={{ width: `${(prediction.probability * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
