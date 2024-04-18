import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppRoutes } from './bundles/common/enums/app-routes.enum'
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
      <Route path={AppRoutes.ROOT} element={<LandingPage />} />
      <Route path={AppRoutes.RECOMMENDATIONS} element={<RecommendationsPage />} />
      <Route path={AppRoutes.STATISTIC} element={<StatisticPage />} />
      <Route path={AppRoutes.PLANNER} element={<PlannerPage />} />
      <Route path={AppRoutes.TEAM} element={<TeamPage />} />
      <Route path={AppRoutes.SIGN_IN} element={<SignInPage />} />
      <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
      <Route path={AppRoutes.ACCOUNT} element={<AccountPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
}

export default App
