import React from "react";
import App from "./App";
import Profile from "./components/Profile";
const Appointments = React.lazy(() => import("./views/experts/Appointments"));
const Payments = React.lazy(() => import("./views/experts/Payments"));
const eCustomer = React.lazy(() => import("./views/experts/Customers"));
const Reviews = React.lazy(() => import("./views/experts/Reviews"));
const DetailReview = React.lazy(() => import("./containers/DetailReview"));
const ExpertProfile = React.lazy(() => import("./containers/Profile"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Org=React.lazy(() => import("./views/experts/Orgnization"));
const Chat=React.lazy(()=>{import("./components/chat")})

const routes = [
  { path: "/", exact: true, name: "expert Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard, exact: true },
  {
    path: "/dashboard/appointments",
    exact: true,
    name: "Appointments",
    component: Appointments,
  },
  { path: "/payments", exact: true, name: "Payments", component: Payments },
  { path: "/customer", exact: true, name: "Customers", component: eCustomer },
  { path: "/reviews", exact: true, name: "Reviews", component: Reviews },
  {
    path: "/detail-review",
    exact: true,
    name: "Detail Review",
    component: DetailReview,
  },
  {
    path: "/expert-profile",
    exact: true,
    name: "Expert Profile",
    component: ExpertProfile,
  },
  {
    path : "/expert-org",
    exact : true,
    component : Org
  },
];

export default routes;
