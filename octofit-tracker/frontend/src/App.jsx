import './App.css'

function App() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <p className="text-uppercase text-primary fw-semibold">OctoFit Tracker</p>
              <h1 className="display-5 fw-bold mb-3">
                Modern fitness tracking for teams and individuals
              </h1>
              <p className="lead text-muted mb-4">
                Log workouts, follow progress, and compare your performance with a polished multi-tier experience.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a className="btn btn-primary btn-lg" href="http://localhost:8000/api/health">
                  Check API
                </a>
                <a className="btn btn-outline-secondary btn-lg" href="https://react.dev" target="_blank" rel="noreferrer">
                  React 19
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
