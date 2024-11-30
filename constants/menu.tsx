import ChatIcon from "@/icons/chat-icon";

import HelpDeskIcon from "@/icons/help-desk-icon";

import { MdOutlineDashboard, MdStar } from "react-icons/md";
import { CiChat1 } from "react-icons/ci";
import { GrIntegration } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { TimerIcon } from "lucide-react";

type SIDE_BAR_MENU_PROPS = {
  label: string;
  icon: JSX.Element;
  path: string;
};

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: "Dashboard",
    icon: <MdOutlineDashboard size={20} />,
    path: "dashboard",
  },
  {
    label: "Conversations",
    icon: <CiChat1 size={20} />,
    path: "conversation",
  },
  {
    label: "Integrations",
    icon: <GrIntegration size={20} />,
    path: "integration",
  },
  {
    label: "Settings",
    icon: <CiSettings size={20} />,
    path: "settings",
  },
  {
    label: "Appointments",
    icon: <CiCalendarDate size={20} />,
    path: "appointment",
  },
  {
    label: "Email Marketing",
    icon: <MdOutlineEmail size={20} />,
    path: "email-marketing",
  },
];

type TABS_MENU_PROPS = {
  label: string;
  icon?: JSX.Element;
};

export const TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "unread",
    icon: <MdOutlineEmail size={20} />,
  },
  {
    label: "all",
    icon: <MdOutlineEmail size={20} />,
  },
  {
    label: "expired",
    icon: <TimerIcon size={20} />,
  },
  {
    label: "starred",
    icon: <MdStar size={20} />,
  },
];

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "help desk",
  },
  {
    label: "questions",
  },
];

export const APPOINTMENT_TABLE_HEADER = [
  "Name",
  "RequestedTime",
  "Added Time",
  "Domain",
];

export const EMAIL_MARKETING_HEADER = ["Id", "Email", "Answers", "Domain"];

export const BOT_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "chat",
    icon: <ChatIcon />,
  },
  {
    label: "helpdesk",
    icon: <HelpDeskIcon />,
  },
];
