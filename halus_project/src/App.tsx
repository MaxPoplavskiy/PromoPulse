import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApiRoutes } from './bundles/common/enums/api-routes'
import { LandingPage } from './bundles/landing-page/landing-page'
import {RecommendationsPage} from './bundles/recommendations-page/RecommendationsPage'
import {PlannerPage} from './bundles/planner-page/PlannerPage'
import { StatisticPage } from './bundles/statistic-page/StatisticPage'
import { TeamPage } from './bundles/team-page/TeamPage'
import { NotFoundPage } from './bundles/not-found-page/NotFoundPage'
import { AccountPage } from './bundles/account-page/AccountPage'
import { SignInPage } from './bundles/auth/pages/SignInPage'
import { SignUpPage } from './bundles/auth/pages/SignUpPage'

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path={ApiRoutes.ROOT} element={<LandingPage />} />
      <Route path={ApiRoutes.RECOMMENDATIONS} element={<RecommendationsPage />} />
      <Route path={ApiRoutes.STATISTIC} element={<StatisticPage />} />
      <Route path={ApiRoutes.PLANNER} element={<PlannerPage />} />
      <Route path={ApiRoutes.TEAM} element={<TeamPage />} />
      <Route path={ApiRoutes.SIGN_IN} element={<SignInPage />} />
      <Route path={ApiRoutes.SIGN_UP} element={<SignUpPage />} />
      <Route path={ApiRoutes.ACCOUNT} element={<AccountPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
}

export default App
