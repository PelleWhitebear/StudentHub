
import Layout from "./Components/Layouts/Layout";
import CalendarPage from "./Pages/Calendar/CalendarPage";
import MyLessonPlanPage from "./Pages/MyLessonPlan/MyLessonPlanPage";
import AnnouncementsPage from "./Pages/Announcements/AnnouncementsPage";
import AnnouncementPage from "./Pages/Announcements/AnnouncementPage";
import CourseDatabasePage from "./Pages/CourseDatabase/CourseDatabasePage";
import StudyGuidancePage from "./Pages/StudyGuidance/StudyGuidancePage";
import GradesPage from "./Pages/Grades/GradesPage";
import NoPages from "./Pages/NoPages/NoPages";
import LoginPage from "./Pages/Login/LoginPage";
import ContactPage from "./Pages/Contact/ContactPage";
import TheTeamPage from "./Pages/TheTeam/TheTeamPage";
import AboutPage from "./Pages/About/AboutPage";
import AlternativeLayout from "./Components/Layouts/AlternativeLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./Pages/theme";
import UserSettingsPage from "./Pages/UserSettings/UserSettingsPage";

export default function App() {
    return (
      <ThemeProvider theme = {customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/LoginPage" element={<AlternativeLayout />} />
            <Route index element={<LoginPage />} />
            <Route path="*" element={<NoPages />} />  
          <Route path="/" element={<Layout />}>
            <Route path="Calendar" element={<CalendarPage />} />
            <Route path="StudyGuidance" element={<StudyGuidancePage />} />
            <Route path="MyLessonPlan" element={<MyLessonPlanPage />} />
            <Route path="Announcements" element={<AnnouncementsPage />} />
            <Route path="Announcements/:id" element={<AnnouncementPage />} />
            <Route path="CourseDatabase" element={<CourseDatabasePage />} />
            <Route path="Grades" element={<GradesPage />} />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="Team" element={<TheTeamPage />} />
            <Route path="About" element={<AboutPage />} />
            <Route path="UserSettings" element={<UserSettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    );
  };