import React from "react";
import App from "./App";

const Bookings = React.lazy(() => import("./views/customer/Booking"));
const Payments = React.lazy(() => import("./views/customer/Payments"));
const eCustomer = React.lazy(() => import("./views/experts/Customers"));
const Reviews = React.lazy(() => import("./views/customer/Reviews"));
const DetailReview = React.lazy(() => import("./views/customer/DetailReview"));
const CustomerProfile = React.lazy(() =>
  import("./views/customer/CustomerProfile")
);
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
  { path: "/", exact: true, name: "expert Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard, exact: true },
  { path: "/bookings", exact: true, name: "Appointments", component: Bookings },
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
    path: "/cutomer-profile",
    exact: true,
    name: "Expert Profile",
    component: CustomerProfile,
  },
];

export default routes;
