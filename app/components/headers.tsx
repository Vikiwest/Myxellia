"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { imageBank } from "../utils/images";
import CalendarPopup from "../modals/CalendarPopup";
import BudgetModal from "../modals/BudgetModal";
import ProfilePopup from "../modals/ProfilePopup";
import { X } from "lucide-react";

function Headers() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isBudgetModalOpen, setBudgetModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileMode, setProfileMode] = useState<"hover" | "click">("hover");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const calendarBtnRef = useRef<HTMLButtonElement>(null);
  const BudgetModalRef = useRef<HTMLButtonElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle hover with delay to prevent flickering
  const handleMouseEnter = () => {
    if (profileMode !== "click") {
      hoverTimeoutRef.current = setTimeout(() => {
        setProfileMode("hover");
        setIsProfileOpen(true);
      }, 100);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (profileMode === "hover") {
      setIsProfileOpen(false);
    }
  };

  const handleProfileClick = () => {
    // Clear any pending hover timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (profileMode === "hover") {
      // Switch to click mode and open
      setProfileMode("click");
      setIsProfileOpen(true);
    } else {
      // Toggle click mode
      setIsProfileOpen((prev) => !prev);
    }
  };

  // Close profile when clicking outside (for click mode)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileMode === "click" &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
        setProfileMode("hover"); // Reset to hover mode after closing
      }
    }

    if (isProfileOpen && profileMode === "click") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isProfileOpen, profileMode]);

  return (
    <>
      <header className="bg-[#191919]">
        <div className="w-full px-4 md:px-6 lg:w-[90%] lg:mx-auto flex items-center justify-between h-16 md:h-20 lg:h-[82px]">
          <div className="flex items-center">
            <button
              className="lg:hidden mr-4 text-white hover:cursor-pointer"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <Image
              src={imageBank.MyxelliaIcon}
              alt="Logo"
              width={120}
              height={20}
              className="w-32 md:w-40 lg:w-[153.23px]"
            />
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8 lg:gap-12">
            <button
              className="hover:cursor-pointer p-1 md:p-0"
              title="Notifications"
            >
              <Image
                src={imageBank.BellNotificationIcon}
                alt="Notifications"
                width={24}
                height={24}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </button>

            <button
              ref={BudgetModalRef}
              onClick={() => setBudgetModalOpen(!isBudgetModalOpen)}
              className="hover:cursor-pointer p-1 md:p-0 hidden sm:block"
              title="Budget"
            >
              <Image
                src={imageBank.BudgetingIcon}
                alt="Budget"
                width={24}
                height={24}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </button>

            <button
              ref={calendarBtnRef}
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
              className="hover:cursor-pointer p-1 md:p-0"
              title="Calendar"
            >
              <Image
                src={imageBank.CalenderIcon}
                alt="Calendar"
                width={24}
                height={24}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </button>

            <button
              className="hover:cursor-pointer p-1 md:p-0 hidden sm:block"
              title="Messages"
            >
              <Image
                src={imageBank.MessageNotificationIcon}
                alt="Messages"
                width={24}
                height={24}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </button>

            <div
              ref={profileRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="text-base md:text-xl lg:text-[23px] font-medium 
  bg-white text-black 
  w-10 h-10 md:w-12 md:h-12 
  flex items-center justify-center 
  rounded-full cursor-pointer  
  border-4 border-transparent hover:border-gray-200 
  transition-all duration-300 ease-in-out"
                title="Profile"
                onClick={handleProfileClick}
              >
                D
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu with Hidden Icons */}
      <div className={`lg:hidden ${isNavOpen ? 'block' : 'hidden'}`}>
        <div className="bg-[#191919] p-4 border-b border-gray-700">
          <div className="flex items-center justify-around py-2">
            {/* Budget Icon - Hidden on desktop but shown on mobile */}
            <button
              ref={BudgetModalRef}
              onClick={() => {
                setBudgetModalOpen(!isBudgetModalOpen);
                setIsNavOpen(false);
              }}
              className="hover:cursor-pointer p-2"
              title="Budget"
            >
              <Image
                src={imageBank.BudgetingIcon}
                alt="Budget"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>

            {/* Messages Icon - Hidden on desktop but shown on mobile */}
            <button
              className="hover:cursor-pointer p-2"
              title="Messages"
            >
              <Image
                src={imageBank.MessageNotificationIcon}
                alt="Messages"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </button>

            {/* Close Nav Button */}
            <button
              onClick={() => setIsNavOpen(false)}
              className="text-white hover:cursor-pointer p-2"
              title="Close menu"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>

      <nav
        className={`border-b border-gray-100 bg-white ${
          isNavOpen ? 'block' : 'hidden'
        } lg:block`}
      >
        <div className="w-full px-4 md:px-6 lg:w-[90%] lg:mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between py-4 lg:py-0 lg:h-[70px]">
          <div className="flex flex-col lg:flex-row w-full lg:w-auto mb-4 lg:mb-0">
            <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 lg:px-6 xl:px-10 lg:py-2.5 rounded-md hover:font-semibold hover:cursor-pointer w-full lg:w-auto justify-start">
              <Image
                src={imageBank.HomeDashboardIcon}
                alt="Dashboard"
                width={20}
                height={20}
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
              <p className="text-base lg:text-[18px] font-regular">Dashboard</p>
            </button>
            <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 lg:px-6 xl:px-10 lg:py-2.5 rounded-md hover:font-semibold hover:cursor-pointer w-full lg:w-auto justify-start">
              <Image
                src={imageBank.ListingsIcon}
                alt="Listings"
                width={20}
                height={20}
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
              <p className="text-base lg:text-[18px] font-regular">Listings</p>
            </button>
            <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 lg:px-6 xl:px-10 lg:py-2.5 rounded-md hover:font-semibold hover:cursor-pointer w-full lg:w-auto justify-start">
              <Image
                src={imageBank.UsersIcon}
                alt="Users"
                width={20}
                height={20}
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
              <p className="text-base lg:text-[18px] font-regular">Users</p>
            </button>
            <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 lg:px-6 xl:px-10 lg:py-2.5 rounded-md hover:font-semibold hover:cursor-pointer w-full lg:w-auto justify-start">
              <Image
                src={imageBank.RequestIcon}
                alt="Request"
                width={20}
                height={20}
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
              <p className="text-base lg:text-[18px] font-regular">Request</p>
            </button>
            <button className="flex items-center gap-2 hover:bg-gray-100 px-4 py-2 lg:px-6 xl:px-10 lg:py-2.5 rounded-md hover:font-semibold hover:cursor-pointer w-full lg:w-auto justify-start">
              <Image
                src={imageBank.ApplicationsIcon}
                alt="Applications"
                width={20}
                height={20}
                className="w-5 h-5 lg:w-6 lg:h-6"
              />
              <p className="text-base lg:text-[18px] font-regular">
                Applications
              </p>
            </button>
          </div>

          <div className="relative w-full lg:w-auto mt-4 lg:mt-0 lg:ml-4">
            {/* Search icon */}
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 z-10">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>

            {/* Input */}
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full lg:min-w-[280px] xl:min-w-[320px] 2xl:min-w-[380px] py-2 pl-10 pr-10 text-gray-700 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400 text-sm md:text-base transition-all duration-200"
              placeholder="Search listings, users here..."
            />

            {/* Clear button */}
            {searchValue && (
              <button
                onClick={() => setSearchValue("")}
                className="absolute inset-y-0 right-0 flex items-center pr-3 z-10 hover:cursor-pointer"
                title="Clear search"
              >
                <X
                  size={16}
                  className="text-gray-500 hover:text-gray-700 bg-gray-700 hover:bg-gray-400 rounded-full p-0.5 transition-colors duration-200"
                />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Calendar Popup */}
      <CalendarPopup
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        anchorRef={calendarBtnRef}
      />
      <BudgetModal
        isOpen={isBudgetModalOpen}
        onClose={() => setBudgetModalOpen(false)}
        anchorRef={BudgetModalRef}
      />
      {/* Profile Popup */}
      <ProfilePopup
        isOpen={isProfileOpen}
        onClose={() => {
          setIsProfileOpen(false);
          setProfileMode("hover");
        }}
        anchorRef={profileRef}
        mode={profileMode}
      />
    </>
  );
}

export default Headers;