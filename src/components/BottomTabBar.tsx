"use client";

import Link from "next/link";
import { ClockIcon, HomeIcon, ProfileIcon } from "@/components/icons";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const menuItems = [
  { label: "홈", icon: HomeIcon, path: "/" },
  { label: "기록", icon: ClockIcon, path: "/history" },
  { label: "프로필", icon: ProfileIcon, path: "/profile" },
];

export default function BottomTabBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-1/2 z-50 flex h-[90px] w-full -translate-x-1/2 justify-between border-t border-gray-1 bg-white px-6 pt-2">
      {menuItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.label}
            href={item.path}
            className="flex h-max w-[72px] flex-col items-center gap-[2px]"
          >
            <item.icon color={isActive ? "#2AD18E" : "#C3C3C3"} size={25} />
            <p
              className={clsx(
                "text-cap2",
                isActive ? "text-green-hover" : "text-gray-3"
              )}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
