import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApiRoutes } from './bundles/common/enums/api-routes'
import { LandingPage } from './bundles/landing-page/landing-page'
import {RecommendationsPage} from './bundles/recommendations-page/RecommendationsPage'
import {PlannerPage} from './bundles/planner-page/PlannerPage'
import { StatisticPage } from './bundles/statistic-page/StatisticPage'
import { TeamPage } from './bundles/team-page/TeamPage'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path={ApiRoutes.ROOT} element={<LandingPage />} />
      <Route path={ApiRoutes.REC} element={<RecommendationsPage />} />
      <Route path={ApiRoutes.STATISTIC} element={<StatisticPage />} />
      <Route path={ApiRoutes.PLANNER} element={<PlannerPage />} />
      <Route path={ApiRoutes.TEAM} element={<TeamPage />} />
    </Routes>
  </BrowserRouter>
}

export default App
