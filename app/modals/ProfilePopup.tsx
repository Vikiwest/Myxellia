"use client";
import React, { useEffect, useRef, useState } from "react";
import { Users, Contact, Lock, ShieldCheck, LogOut } from "lucide-react";

interface ProfilePopupProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLDivElement | null>;
  mode: "hover" | "click";
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({
  isOpen,
  onClose,
  anchorRef,
  mode,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen && mode === "click") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, anchorRef, mode]);

  useEffect(() => {
    if (isOpen && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      
      if (isMobile) {
        // Center on mobile
        setPosition({
          top: window.innerHeight / 2 + window.scrollY,
          right: window.innerWidth / 2,
        });
      } else {
        // Position relative to anchor on desktop
        setPosition({
          top: rect.bottom + window.scrollY + 5,
          right: window.innerWidth - rect.right - window.scrollX,
        });
      }
    }
  }, [isOpen, anchorRef, isMobile]);

  if (!isOpen) return null;

  return (
    <div
      ref={popupRef}
      className={`
        fixed z-50 bg-white rounded-lg shadow-xl border border-gray-200 py-3 px-4 
        transition-all duration-300 ease-in-out opacity-100
        ${isMobile ? 
          'w-[90vw] max-w-[400px] transform -translate-x-1/2 -translate-y-1/2 left-1/2' : 
          'max-w-[95vw] sm:max-w-[400px]'
        }
      `}
      style={
        isMobile ? 
        { top: `${position.top}px`, left: '50%' } : 
        { top: `${position.top}px`, right: `${position.right}px` }
      }
    >
      {mode === "hover" ? (
        // Hover mode - just name and email
        <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-md transition-all duration-300 ease-in-out">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">D</span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-sm font-semibold text-gray-900 truncate">
              David Johnson
            </span>
            <span className="text-xs text-gray-500 truncate">
              david.johnson@company.com
            </span>
          </div>
        </div>
      ) : (
        // Click mode - full profile component
        <div className="flex flex-col">
          {/* Profile Header */}
          <div className="flex items-center space-x-3 border px-3 py-4 rounded-lg border-gray-200 bg-gray-50 mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-base sm:text-lg">D</span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                David Johnson
              </span>
              <span className="text-xs sm:text-sm text-gray-500 truncate">
                david.johnson@company.com
              </span>
            </div>
          </div>

          {/* Menu Items */}
          <button className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 border-b border-gray-100 font-medium hover:bg-gray-50 py-3 px-3 transition-colors">
            <Users size={18} className="flex-shrink-0" />
            <span className="truncate">Teams</span>
          </button>

          <button className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 border-b border-gray-100 font-medium hover:bg-gray-50 py-3 px-3 transition-colors">
            <Contact size={18} className="flex-shrink-0" />
            <span className="truncate">Contact Persons</span>
          </button>

          <button className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 border-b border-gray-100 font-medium hover:bg-gray-50 py-3 px-3 transition-colors">
            <Lock size={18} className="flex-shrink-0" />
            <span className="truncate">Change Password</span>
          </button>

          <button className="flex items-center space-x-3 text-sm sm:text-base text-gray-700 border-b border-gray-100 font-medium hover:bg-gray-50 py-3 px-3 transition-colors">
            <ShieldCheck size={18} className="flex-shrink-0" />
            <span className="truncate">2-Factor Authentication</span>
          </button>

          <button className="flex items-center space-x-3 text-sm sm:text-base text-red-600 font-medium hover:bg-red-50 py-3 px-3 transition-colors">
            <LogOut size={18} className="flex-shrink-0" />
            <span className="truncate">Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePopup;