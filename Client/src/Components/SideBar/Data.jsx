// Sidebar imports
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGoogleads } from 'react-icons/si';
import { SiGoogleanalytics } from 'react-icons/si';
import { TbReport } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

///////////////Component/////////////
import Social from './Social';




// Sidebar Data
export const SidebarData = [
  {
    icon: MdDashboard,
    heading: "Overview",
  },
  {
    icon: SiGoogleanalytics,
    heading: 'Google Analytics'
  },
  {
    icon: SiGoogleads,
    heading: 'Google Ad'
  },
  {
    heading: "",
    icon: Social,
  },
  {
    icon: FaFacebookF,
    heading: "Facebook Ads",
  },
  {
    icon: FaLinkedinIn,
    heading: "Linkedin Ads",
  },
  {
    icon: FaMoneyBillAlt,
    heading: "Billing",
  },
  {
    icon: MdWork,
    heading: "Work Requests",
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


