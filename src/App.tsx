
import Layout from "./components/Layouts/Layout";
import CalendarPage from "./views/Calendar/CalendarPage";
import MyLessonPlanPage from "./views/MyLessonPlan/MyLessonPlanPage";
import AnnouncementsPage from "./views/Announcements/AnnouncementsPage";
import AnnouncementPage from "./views/Announcements/AnnouncementPage";
import CourseDatabasePage from "./views/CourseDatabase/CourseDatabasePage";
import StudyGuidancePage from "./views/StudyGuidance/StudyGuidancePage";
import GradesPage from "./views/Grades/GradesPage";
import NoPages from "./views/NoPages/NoPages";
import LoginPage from "./views/Login/LoginPage";
import ContactPage from "./views/Contact/ContactPage";
import TheTeamPage from "./views/TheTeam/TheTeamPage";
import AboutPage from "./views/About/AboutPage";
import CreateUserPage from "./views/CreateUser/CreateUserPage";
import AlternativeLayout from "./components/Layouts/AlternativeLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme";
import UserSettingsPage from "./views/UserSettings/UserSettingsPage";


export const App = () => {


    return (
      <ThemeProvider theme = {customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/LoginPage" element={<AlternativeLayout />} />
            <Route path="/CreateUser" element={<CreateUserPage/>} />
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
  export default App;