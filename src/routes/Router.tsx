import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FooterComponent } from '../Components/shared/Footer/FooterComponent';
import NewsQuery from '../pages/Trending';
import { SearchPage } from '../pages/SearchPage';
import TitleBanner from '../Components/shared/Header/TitleBanner/TitleBanner';
import TrendingDetails from '../pages/TrendingDetails';
import Home from '../pages/HomePage';
import { RoutePaths } from './route-paths.enum';

function AppRouter() {
  return (
    <>
      <Router>
        <TitleBanner />
        <Routes>
          <Route path={RoutePaths.Root} element={<Home />} />
          <Route path={RoutePaths.Search} element={<SearchPage />} />
          <Route path={RoutePaths.Trendings} element={<NewsQuery />} />
          <Route
            path={RoutePaths.TrendingDetails}
            element={<TrendingDetails />}
          />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
}

export default AppRouter;
