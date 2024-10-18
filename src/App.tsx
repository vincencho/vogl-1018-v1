import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LayoutProvider } from './contexts/LayoutContext';
import { MainPaddingProvider } from './contexts/MainPaddingContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import ProfilePage from './pages/ProfilePage';
import UploadPage from './pages/UploadPage';
import OnboardingPage from './pages/OnboardingPage';
import ImageContentDetailPage from './pages/ImageContentDetailPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotificationPage from './pages/NotificationPage';
import MyPage from './pages/MyPage';
import SubscriptionPage from './pages/SubscriptionPage';
import CreateBoardPage from './pages/CreateBoardPage';
import CreateSectionPage from './pages/CreateSectionPage';
import AccountManagementPage from './pages/AccountManagementPage';
import HelpCenterPage from './pages/HelpCenterPage';
import CommentPage from './pages/CommentPage';

function App() {
  return (
    <LayoutProvider>
      <MainPaddingProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="/content/:id" element={<ImageContentDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/create-board" element={<CreateBoardPage />} />
              <Route path="/create-section" element={<CreateSectionPage />} />
              <Route
                path="/account-management"
                element={<AccountManagementPage />}
              />
              <Route path="/help-center" element={<HelpCenterPage />} />
              <Route path="/content/:id/comments" element={<CommentPage />} />
            </Routes>
          </Layout>
        </Router>
      </MainPaddingProvider>
    </LayoutProvider>
  );
}

export default App;
