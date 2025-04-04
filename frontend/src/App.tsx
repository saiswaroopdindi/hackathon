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
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-fuchsia-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
            Employee Attrition Prediction
          </h1>
          <p className="text-indigo-200 text-lg">
            Enter employee details to predict the likelihood of attrition
          </p>
        </div>

        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-indigo-300 bg-clip-text text-transparent flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-indigo-200 group-hover:text-white transition-colors">Age</label>
                    <input
                      type="number"
                      value={formData.Age}
                      onChange={(e) => setFormData({ ...formData, Age: parseInt(e.target.value) })}
                      className="w-full bg-indigo-950/50 rounded-lg border border-indigo-800/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300 hover:border-pink-500/50"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-indigo-200 group-hover:text-white transition-colors">Gender</label>
                    <select
                      value={formData.Gender}
                      onChange={(e) => setFormData({ ...formData, Gender: e.target.value })}
                      className="w-full bg-indigo-950/50 rounded-lg border border-indigo-800/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300 hover:border-pink-500/50"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Job Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-indigo-300 bg-clip-text text-transparent flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Job Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-indigo-200 group-hover:text-white transition-colors">Department</label>
                    <select
                      value={formData.Department}
                      onChange={(e) => setFormData({ ...formData, Department: e.target.value })}
                      className="w-full bg-indigo-950/50 rounded-lg border border-indigo-800/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300 hover:border-pink-500/50"
                    >
                      <option value="Sales">Sales</option>
                      <option value="Research & Development">Research & Development</option>
                      <option value="Human Resources">Human Resources</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-indigo-200 group-hover:text-white transition-colors">Job Role</label>
                    <select
                      value={formData.JobRole}
                      onChange={(e) => setFormData({ ...formData, JobRole: e.target.value })}
                      className="w-full bg-indigo-950/50 rounded-lg border border-indigo-800/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300 hover:border-pink-500/50"
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
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-indigo-300 bg-clip-text text-transparent flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Satisfaction Metrics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-indigo-200 group-hover:text-white transition-colors">Job Satisfaction (1-5)</label>
                    <div className="relative pt-1">
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={formData.JobSatisfaction}
                        onChange={(e) => setFormData({ ...formData, JobSatisfaction: parseInt(e.target.value) })}
                        className="w-full appearance-none h-2 rounded-full bg-indigo-900/50 outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-500 [&::-webkit-slider-thumb]:cursor-pointer hover:[&::-webkit-slider-thumb]:bg-pink-400 transition-colors"
                      />
                      <div className="flex justify-between text-xs text-indigo-200 mt-2">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-indigo-200 group-hover:text-white transition-colors">Work Life Balance (1-5)</label>
                    <div className="relative pt-1">
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={formData.WorkLifeBalance}
                        onChange={(e) => setFormData({ ...formData, WorkLifeBalance: parseInt(e.target.value) })}
                        className="w-full appearance-none h-2 rounded-full bg-indigo-900/50 outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-500 [&::-webkit-slider-thumb]:cursor-pointer hover:[&::-webkit-slider-thumb]:bg-pink-400 transition-colors"
                      />
                      <div className="flex justify-between text-xs text-indigo-200 mt-2">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compensation */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-300 to-indigo-300 bg-clip-text text-transparent flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Compensation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-indigo-200 group-hover:text-white transition-colors">Monthly Income</label>
                    <input
                      type="number"
                      value={formData.MonthlyIncome}
                      onChange={(e) => setFormData({ ...formData, MonthlyIncome: parseInt(e.target.value) })}
                      className="w-full bg-indigo-950/50 rounded-lg border border-indigo-800/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300 hover:border-pink-500/50"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-2 text-indigo-200 group-hover:text-white transition-colors">Percent Salary Hike</label>
                    <input
                      type="number"
                      value={formData.PercentSalaryHike}
                      onChange={(e) => setFormData({ ...formData, PercentSalaryHike: parseInt(e.target.value) })}
                      className="w-full bg-indigo-950/50 rounded-lg border border-indigo-800/50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all duration-300 hover:border-pink-500/50"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                      Predict Attrition
                    </>
                  )}
                </span>
              </button>
            </form>

            {prediction && (
              <div className="mt-8 p-8 bg-indigo-950/50 rounded-2xl border border-indigo-800/50 backdrop-blur-lg transform transition-all duration-500 hover:scale-[1.02]">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-300 to-indigo-300 bg-clip-text text-transparent">Prediction Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="group relative">
                        <span className="text-indigo-200 flex items-center gap-2">
                          Attrition Risk
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="absolute bottom-full left-0 mb-2 w-64 p-4 bg-indigo-900/90 rounded-lg shadow-xl text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <p className="text-white">Indicates whether the employee is likely to leave the company (Yes) or stay (No) based on the provided information.</p>
                          </div>
                        </span>
                      </div>
                      <span className={`font-semibold text-lg ${prediction.prediction === 'Yes' ? 'text-red-400' : 'text-emerald-400'} flex items-center gap-2`}>
                        {prediction.prediction}
                        {prediction.prediction === 'Yes' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </span>
                    </div>
                    <p className="text-sm text-indigo-300 mb-4">
                      {prediction.prediction === 'Yes' 
                        ? 'This employee shows signs of potential attrition and might be at risk of leaving.'
                        : 'This employee shows positive retention indicators and is likely to stay.'}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="group relative">
                        <span className="text-indigo-200 flex items-center gap-2">
                          Probability
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="absolute bottom-full left-0 mb-2 w-64 p-4 bg-indigo-900/90 rounded-lg shadow-xl text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <p className="text-white">The confidence level of the prediction, ranging from 0% to 100%. Higher percentages indicate stronger confidence in the prediction.</p>
                          </div>
                        </span>
                      </div>
                      <span className="font-semibold text-lg flex items-center gap-2">
                        {(prediction.probability * 100).toFixed(1)}%
                        <span className={`text-sm ${prediction.probability > 0.7 ? 'text-red-400' : prediction.probability > 0.3 ? 'text-yellow-400' : 'text-emerald-400'}`}>
                          {prediction.probability > 0.7 ? 'High' : prediction.probability > 0.3 ? 'Medium' : 'Low'} Confidence
                        </span>
                      </span>
                    </div>
                    <div className="w-full h-3 bg-indigo-900/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          prediction.prediction === 'Yes' 
                            ? 'bg-gradient-to-r from-pink-500 to-red-500' 
                            : 'bg-gradient-to-r from-emerald-400 to-emerald-500'
                        }`}
                        style={{ width: `${(prediction.probability * 100)}%` }}
                      ></div>
                    </div>
                    <div className="mt-4 p-4 bg-indigo-900/30 rounded-lg border border-indigo-800/30">
                      <h4 className="text-lg font-semibold text-indigo-200 mb-2">What does this mean?</h4>
                      <p className="text-sm text-indigo-300">
                        {prediction.prediction === 'Yes' ? (
                          prediction.probability > 0.7 ? (
                            "There's a strong indication that this employee might leave. Consider immediate engagement and retention strategies."
                          ) : prediction.probability > 0.3 ? (
                            "There are some risk factors present. It's recommended to monitor the situation and implement preventive measures."
                          ) : (
                            "While there are some minor risk indicators, the overall likelihood of attrition is low."
                          )
                        ) : (
                          prediction.probability > 0.7 ? (
                            "The employee shows strong signs of engagement and satisfaction. Continue maintaining the positive work environment."
                          ) : prediction.probability > 0.3 ? (
                            "The employee is likely to stay, but there's room for improvement in some areas."
                          ) : (
                            "While retention is predicted, the confidence is lower. Consider reviewing the input factors."
                          )
                        )}
                      </p>
                    </div>
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
