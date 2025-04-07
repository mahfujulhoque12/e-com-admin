import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/redux-store/store";
import {
  setMobileMenuOpen,
  toggleAppSlidebar,
  toggleMobileMenu,
} from "@/redux/feature/sidebar/sidebarSlice";
import Sidebar from "../sidebar/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.sidebar.isMobileMenuOpen
  );

  const handleToggleAppSlidebar = () => {
    dispatch(toggleAppSlidebar());
  };

  const handleHamburgerClick = () => {
    dispatch(toggleMobileMenu());
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      <Sidebar
        toggleAppSlidebar={handleToggleAppSlidebar}
        isOpen={isOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        handleHamburgerClick={handleHamburgerClick}
        setIsMobileMenuOpen={(value) => dispatch(setMobileMenuOpen(value))}
      />
      <div
        className={`flex-1 flex flex-col space-y-0 md:space-y-5 transition-all duration-300 fixed top-0 left-0 md:left-5 w-full h-full md:h-[calc(100vh-40px)] ${
          isOpen ? "lg:pl-56" : "lg:pl-20"
        } md:relative  md:pr-5`}
      >
        <div className="flex flex-col h-full md:mt-0">
          <main className="flex-grow overflow-y-auto rounded-md space-y-5 table-container">
            <div>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
