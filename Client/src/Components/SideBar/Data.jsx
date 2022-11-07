// Sidebar imports
import { SiGoogleads } from 'react-icons/si';
import { SiGoogleanalytics } from 'react-icons/si';
import { TbReport } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

///////////////Component/////////////
import Social from './Social';
import Ads from './Adds';




// Sidebar Data
export const SidebarData = [
  {
    icon: MdDashboard,
    heading: "Overview",
    path: "/dashboard",
  },
  {
    icon: SiGoogleanalytics,
    heading: 'Google Analytics'
  },
  {
    icon: SiGoogleads,
    heading: 'SEO'
  },
  {
    icon: Ads,
    heading: ''
  },
  {
    heading: "",
    icon: Social,
  },
  {
    icon: FaMoneyBillAlt,
    heading: "Billing",
  },
  {
    icon: FaUsers,
    heading: "Users",
    path:'dashboard/users'
  },

  {
    icon: TbReport,
    heading: 'Reports'
  },
  {
    icon: BiSupport,
    heading: 'Chat'
  },
  
];


