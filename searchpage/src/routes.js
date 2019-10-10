import Login from "views/Login.jsx";
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import TableListAdmin from "views/TableListAdmin.jsx";

const dashboardRoutes = [

  {
    path: "/login",
    name: "로그인",
    icon: "pe-7s-smile",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "근태 기록",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/team",
    name: "관리자 모드",
    icon: "pe-7s-lock",
    component: TableListAdmin,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "통계",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  
];

export default dashboardRoutes;
