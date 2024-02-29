import ReportIcon from "@mui/icons-material/Report";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { NavigateUserSettingType } from "@/model/navigation";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function UserSettings(): NavigateUserSettingType[] {
  return [
    {
      icon: <DashboardIcon sx={{ fontSize: "30px", color: "white" }} />,
      title: "Dashboard",
      path: "/",
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: "30px", color: "white" }} />,
      title: "Verify trainer",
      path: "/manage/verify",
    },
    {
      icon: <ReportIcon sx={{ fontSize: "30px", color: "white" }} />,
      title: "Report",
      path: "/manage/report",
    },
  ];
}
