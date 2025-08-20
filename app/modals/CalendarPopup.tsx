"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { X } from "lucide-react";
import { imageBank } from "../utils/images";
import Image from "next/image";

interface CalendarPopupProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement | null>;
}

const CalendarPopup: React.FC<CalendarPopupProps> = ({
  isOpen,
  onClose,
  anchorRef,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !anchorRef.current?.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, anchorRef]);

  if (!isOpen) return null;

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = addDays(monthEnd, 15);

    const rows: React.ReactElement[] = [];
    let days: React.ReactElement[] = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <div
            key={day.toString()}
            onClick={() => setSelectedDate(cloneDay)}
            className={`pt-1 text-center cursor-pointer border border-[#242424] pb-13`}
          >
            <span
              className={`
      inline-flex items-center justify-center w-10 h-8  rounded-full 
      ${!isSameMonth(day, monthStart) ? "text-gray-600" : "text-white"}
      ${isSameDay(day, new Date()) ? " bg-blue-500 " : ""}
      ${
        selectedDate && isSameDay(day, selectedDate)
          ? "bg-blue-600 text-white"
          : ""
      }
    `}
            >
              {format(day, "d")}
            </span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );

      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-end z-50">
      <div
        ref={popupRef}
        className="h-screen w-full sm:w-[460px] bg-[#0D0D0D] text-white shadow-lg flex flex-col overflow-y-auto"
      >
        <div className="flex justify-between items-center bg-[#171717] py-3 px-5 sticky top-0 z-10">
          <h3 className="text-[16px] font-semibold">Calendar </h3>
          <button onClick={onClose} className="hover:cursor-pointer">
            <X size={18} />
          </button>{" "}
        </div>

        {/* Header */}
        <div className="px-5 py-6">
          <div className="flex justify-between items-center mb-6 px-10">
            <button
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
              className="hover:cursor-pointer"
            >
              <Image
                src={imageBank.ArrowLeft}
                alt="Left"
                width={24}
                height={24}
              />
            </button>
            <span className="font-semibold text-[16px] ">
              {format(currentMonth, "MMMM yyyy")}
            </span>
            <button
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              className="hover:cursor-pointer"
            >
              <Image
                src={imageBank.ArrowRight}
                alt="right"
                width={24}
                height={24}
              />
            </button>
          </div>

          {/* Days header */}
          <div className="grid grid-cols-7 text-center text-gray-400 text-xs sticky top-[60px] bg-[#0D0D0D] z-5">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
              <div
                key={day}
                className="border border-[#242424] py-3" // ✅ added border
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
            {renderCells()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPopup;