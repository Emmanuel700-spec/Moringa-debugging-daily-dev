import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

// Lazy load the apps for different routes
const AdminApp = lazy(() => import('./admin/src/App'));  // AdminApp no longer needs Router here
const TechWriterApp = lazy(() => import('./techwriter/src/App'));  // TechWriterApp no longer needs Router here
const MainPage = lazy(() => import('./main-page/src/App'));  // MainPage no longer needs Router here

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<AdminApp />} />  {/* Admin route */}
          <Route path="/techwriter/*" element={<TechWriterApp />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
