
import Layout from "./components/Layouts/Layout";
import CalendarPage from "./views/Calendar/CalendarPage";
import MyLessonPlanPage from "./views/MyLessonPlan/MyLessonPlanPage";
import AnnouncementsPage from "./views/Announcements/AnnouncementsPage";
import AnnouncementPage from "./views/Announcements/AnnouncementPage";
import CourseDatabasePage from "./views/CourseDatabase/CourseDatabasePage";
import StudyGuidancePage from "./views/StudyGuidance/components/StudyGuidancePage";
import PrivateRoute from "./components/PrivatRoute/PrivateRoute";
import GradesPage from "./views/Grades/GradesPage";
import NoPages from "./views/NoPages/NoPages";
import LoginPage from "./views/Login/LoginPage";
import ContactPage from "./views/Contact/ContactPage";
import TheTeamPage from "./views/TheTeam/TheTeamPage";
import AboutPage from "./views/About/AboutPage";
import CreateUserPage from "./views/CreateUser/CreateUserPage";
import AlternativeLayout from "./components/Layouts/AlternativeLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme";
import UserSettingsPage from "./views/UserSettings/UserSettingsPage";





export const App = () => {


    return (
      <ThemeProvider theme = {customTheme}>
      <BrowserRouter>
        <Routes>
            {/* Public pages */}
            <Route path="/CreateUser" element={<CreateUserPage/>} />
            <Route index element={<LoginPage />} />
            <Route path="*" element={<NoPages />} />  

            {/* Private pages */}
            <Route path="/" element={<Layout />} >
            <Route path="Calendar" element={
              <PrivateRoute>
                <CalendarPage/>
              </PrivateRoute>
            } />
            <Route path="StudyGuidance" element={
              <PrivateRoute>
                <StudyGuidancePage />
              </PrivateRoute>
            
            } />
            <Route path="MyLessonPlan" element={
              <PrivateRoute>
                <MyLessonPlanPage />
              </PrivateRoute>
            } />
            <Route path="Announcements" element={
              <PrivateRoute>
                <AnnouncementsPage />
              </PrivateRoute>
            } />
            <Route path="Announcements/:id" element={
              <PrivateRoute>
                <AnnouncementPage />
              </PrivateRoute>
            } />
            <Route path="CourseDatabase" element={
              <PrivateRoute>
                <CourseDatabasePage />
              </PrivateRoute>
            } />
            <Route path="Grades" element={
               <PrivateRoute>
                <GradesPage />
              </PrivateRoute>
            } />
            <Route path="Contact" element={
              <PrivateRoute>
                <ContactPage />
              </PrivateRoute>
            } />
            <Route path="Team" element={
              <PrivateRoute>
                <TheTeamPage />
              </PrivateRoute>
            } />
            <Route path="About" element={
              <PrivateRoute>
                <AboutPage />
              </PrivateRoute>
            } />
            <Route path="UserSettings" element={
              <PrivateRoute>
                <UserSettingsPage />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    );
  };
  export default App;