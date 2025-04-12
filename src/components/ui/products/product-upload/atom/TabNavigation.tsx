import { cn } from "@/lib/utils";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface Tab {
  label: string;
  icon?: React.ReactNode;
  href: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  isBackground?: boolean;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  isBackground,
}) => {
  const pathname = usePathname();
  const activeTab = tabs.find((tab) => tab.href === pathname) || tabs[0];
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  return (
    <nav
      className={cn(
        "flex border-b-2 sticky top-0 left-0 z-50 py-1 sm:py-0 border-[#D3E4FB80]  bg-primary dark:border-gray-700",
        isBackground && "gap-1"
      )}
    >
      <div className="flex items-center w-full">
        {/* Tabs container */}
        <div
          ref={scrollContainerRef}
          className="flex w-full overflow-x-auto no-scrollbar space-x-1 sm:space-x-4 sm:px-4"
        >
          {tabs.map((tab, index) => {
            // const isActive = pathname === tab.href;
            const isActive = tab.href === activeTab.href;

            return (
              <Link
                key={index}
                href={tab.href}
                className={cn(
                  "relative px-4 py-1 sm:py-3.5 text-sm sm:text-sm font-normal text-center rounded-md flex gap-2 items-center  whitespace-nowrap bg-gray-100 dark:bg-gray-800  sm:bg-white ",
                  isBackground
                    ? isActive
                      ? "bg-blue-gradient text-white"
                      : "bg-white text-dark-blue"
                    : isActive
                    ? "gradient-text text-[#1571E7] "
                    : "text-gray-400"
                )}
              >
                {tab.icon}

                <span
                  className={cn(
                    isBackground
                      ? isActive
                        ? "bg-blue-gradient  text-lg"
                        : "bg-white text-lg"
                      : isActive
                      ? "gradient-text text-[#1571E7]  text-lg  font-semibold"
                      : "text-gray-500  text-lg font-semibold dark:text-gray-200"
                  )}
                >
                  {tab.label}
                </span>

                {!isBackground && (
                  <span
                    className={` sm:w-[80%] h-[2.5px] absolute left-1/2 bottom-0 transform -translate-x-1/2 ${
                      isActive ? "bg-[#1571E7]" : "bg-transparent"
                    }`}
                  ></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default TabNavigation;
