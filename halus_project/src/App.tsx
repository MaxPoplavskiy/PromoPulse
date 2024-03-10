import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApiRoutes } from './bundles/common/enums/api-routes'
import { LandingPage } from './bundles/landing-page/landing-page'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path={ApiRoutes.ROOT} element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
}

export default App
