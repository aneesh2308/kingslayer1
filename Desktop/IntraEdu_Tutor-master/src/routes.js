import Dashboard from "./views/dashboard/Dashboard";
import Users from "./views/users/Users";
import FeesTransaction from "./views/feesTransaction/FeesTransaction";
import Lectures from "./views/lectures/Lectures";
import Jitsi from "./views/lectures/Jitsi";
import MCQS from "./views/mcqs/MCQS";
import MCQ from "./views/mcqs/MCQ";
import AddLecture from "./views/lectures/AddLecture";
import AddMCQ from "./views/mcqs/AddMCQ";
import Announcements from "./views/announcement/Announcements";
import AddAnnoucement from "./views/announcement/AddAnnoucement";
import AboutUs from "./views/about_us/AboutUs";

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", exact: true, name: "Dashboard", component: Dashboard },

  {
    path: "/fees_transaction",
    exact: true,
    name: "Fees Transaction",
    component: FeesTransaction,
  },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/jitsi", exact: true, name: "Jitsi", component: Jitsi },
  { path: "/lectures", exact: true, name: "Lectures", component: Lectures },
  {
    path: "/lectures/add",
    exact: true,
    name: "Add Lecture",
    component: AddLecture,
  },

  { path: "/mcqs", exact: true, name: "MCQS", component: MCQS },
  { path: "/mcq/view/:id", exact: true, name: "MCQ", component: MCQ },
  { path: "/mcq/add", exact: true, name: "Add MCQ", component: AddMCQ },

  {
    path: "/annoucements",
    exact: true,
    name: "Annoucements",
    component: Announcements,
  },
  {
    path: "/annoucements/edit/:id",
    exact: true,
    name: "Edit Annoucement",
    component: AddAnnoucement,
  },
  {
    path: "/annoucements/add",
    exact: true,
    name: "Add Annoucement",
    component: AddAnnoucement,
  },

  {
    path: "/about_us",
    exact: true,
    name: "About Us",
    component: AboutUs,
  },
];

export default routes;
