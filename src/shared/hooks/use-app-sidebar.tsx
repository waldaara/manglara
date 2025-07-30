import { useMemo } from "react";
import {
  HomeIcon,
  SearchIcon,
  UserRoundIcon,
  SettingsIcon,
  UserRoundCogIcon,
} from "lucide-react";

import { useSession } from "@/shared/hooks/use-session";

export const useAppSidebar = () => {
  const {
    data: session,
    isSuccess: isSessionSuccess,
    isLoading: isSessionLoading,
    isError: isSessionError,
    refetch: refetchSession,
    isRefetching: isSessionRefetching,
  } = useSession();

  const links = useMemo(() => {
    const baseLinks = [
      { href: "/home", label: "Home", icon: <HomeIcon /> },
      {
        href: "/explore",
        label: "Explore",
        icon: <SearchIcon />,
      },
      {
        href: "/settings",
        label: "Settings",
        icon: <SettingsIcon />,
      },
    ];

    if (session?.user.role === "admin") {
      baseLinks.splice(-1, 0, {
        href: "/admin",
        label: "Admin",
        icon: <UserRoundCogIcon />,
      });
    }

    if (session?.user.role === "user") {
      baseLinks.splice(-1, 0, {
        href: `/${session.user.username}`,
        label: "Profile",
        icon: <UserRoundIcon />,
      });
    }

    return baseLinks;
  }, [session?.user.username, session?.user.role]);

  return {
    links,
    session,
    isSessionSuccess,
    isSessionLoading,
    isSessionError,
    refetchSession,
    isSessionRefetching,
  };
};
