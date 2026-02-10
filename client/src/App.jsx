import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { ToastProvider } from "./contexts/ToastContext.jsx";
import { ProtectedRoute } from "./components/auth/ProtectedRoute.jsx";
import { AuthRedirect } from "./components/auth/AuthRedirect.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage.jsx";
import { ResetPasswordPage } from "./pages/ResetPasswordPage.jsx";
import { DashboardPage } from "./pages/DashboardPage.jsx";
import { EditorPage } from "./pages/EditorPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <ToastProvider>
            <Routes>
              <Route path='/' element={<LandingPage />} />

              <Route
                path='/login'
                element={
                  <AuthRedirect>
                    <LoginPage />
                  </AuthRedirect>
                }
              />

              <Route
                path='/register'
                element={
                  <AuthRedirect>
                    <RegisterPage />
                  </AuthRedirect>
                }
              />

              <Route
                path='/forgot-password'
                element={
                  <AuthRedirect>
                    <ForgotPasswordPage />
                  </AuthRedirect>
                }
              />

              <Route
                path='/reset-password/:token'
                element={<ResetPasswordPage />}
              />

              <Route
                path='/dashboard'
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path='/editor'
                element={
                  <ProtectedRoute>
                    <EditorPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path='/editor/:projectId'
                element={
                  <ProtectedRoute>
                    <EditorPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path='/profile'
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />

              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </ToastProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
