import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Login from "views/Login.js";
import Promocode from "views/Promocode.js";
import AddPromocode from "views/AddPromocode.js";
import Driverdetail from "views/Driverdetail.js";
import Deliveryrequest from "views/Deliveryrequest.js";
import Setting from "views/Setting.js";
import Pricing from "views/Pricing.js";
import Editprice from "views/Editpricing.js";
import UserManagement from "views/UserManagement.js";
import AddUser from "views/Adduser.js";
import Edituser from "views/Edituser.js";
import Role from "views/Role.js";
import Addrole from "views/Addrole.js";
import Editrole from "views/Editrole.js";
import Deliveryrequestdetail from "views/Deliveryrequestdetail.js";
import Enduserdetail from "views/Enduserdetail.js";
import Claim from "views/Claim.js";
import Calimdetail from "views/Calimdetail.js";
import UpdateRecord from "views/UpdateRecord.js";
import Transaction from "views/Transaction.js";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/deliverrequest",
    name: "Delivery Request",
    icon: "nc-icon nc-circle-09",
    component: Deliveryrequest,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Drivers",
    icon: "nc-icon nc-circle-09",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Enduser",
    icon: "nc-icon nc-circle-09",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Rides",
    icon: "nc-icon nc-delivery-fast",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/promocode",
    name: "Promocode",
    icon: "nc-icon nc-delivery-fast",
    component: Promocode,
    layout: "/admin",
  },
  {
    path: "/addpromocode",
    name: "Add Promocode",
    icon: "nc-icon nc-delivery-fast",
    component: AddPromocode,
    layout: "/admin",
    id: "addpromocodenew",
  },
  {
    path: "/driverdetail",
    name: "Driver detail",
    icon: "nc-icon nc-delivery-fast",
    component: Driverdetail,
    layout: "/admin",
    id: "driverdetail",
  },
  {
    path: "/usermanagement",
    name: "User Management",
    icon: "nc-icon nc-delivery-fast",
    component: UserManagement,
    layout: "/admin",
  },
  {
    path: "/adduser",
    name: "Add User",
    icon: "nc-icon nc-delivery-fast",
    component: AddUser,
    layout: "/admin",
  },
  {
    path: "/edituser",
    name: "Edit User",
    icon: "nc-icon nc-delivery-fast",
    component: Edituser,
    layout: "/admin",
  },
  {
    path: "/role",
    name: "Role",
    icon: "nc-icon nc-delivery-fast",
    component: Role,
    layout: "/admin",
  },
  {
    path: "/addrole",
    name: "Add Role",
    icon: "nc-icon nc-delivery-fast",
    component: Addrole,
    layout: "/admin",
  },
  {
    path: "/editrole",
    name: "Edit Role",
    icon: "nc-icon nc-delivery-fast",
    component: Editrole,
    layout: "/admin",
  },
  {
    path: "/setting",
    name: "Setting",
    icon: "nc-icon nc-delivery-fast",
    component: Setting,
    layout: "/admin",
  },
  {
    path: "/pricing",
    name: "Pricing",
    icon: "nc-icon nc-delivery-fast",
    component: Pricing,
    layout: "/admin",
  },
  {
    path: "/editprice",
    name: "Edit Price",
    icon: "nc-icon nc-delivery-fast",
    component: Editprice,
    layout: "/admin",
  },
  {
    path: "/deliverrequestdetail",
    name: "Delivery Request Detail",
    icon: "nc-icon nc-circle-09",
    component: Deliveryrequestdetail,
    layout: "/admin",
  },
  {
    path: "/typographydetail",
    name: "Enduser",
    icon: "nc-icon nc-circle-09",
    component: Enduserdetail,
    layout: "/admin",
  },
  {
    path: "/claim",
    name: "Claim",
    icon: "nc-icon nc-circle-09",
    component: Claim,
    layout: "/admin",
  },
  {
    path: "/transaction",
    name: "Transaction",
    icon: "nc-icon nc-circle-09",
    component: Transaction,
    layout: "/admin",
  },
  {
    path: "/claimdetail",
    name: "Claim Detail",
    icon: "nc-icon nc-circle-09",
    component: Calimdetail,
    layout: "/admin",
  },
  {
    path: "/updaterecord",
    name: "Update Record",
    icon: "nc-icon nc-circle-09",
    component: UpdateRecord,
    layout: "/admin",
  },
  {
    path: "/login/login",
    name: "Logout",
    icon: "nc-icon nc-pin-3",
    id: "logout",
    component: Login,
    layout: "/login",
  },
];

export default dashboardRoutes;
