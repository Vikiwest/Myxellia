"use client";
import React, { useState, useRef, useEffect } from "react";
import { imageBank } from "../utils/images";
import Image from "next/image";

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement | null>;
}

const BudgetModal: React.FC<BudgetModalProps> = ({
  isOpen,
  onClose,
  anchorRef,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        !anchorRef.current?.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, anchorRef]);

  if (!isOpen) return null;

  return (
    <div className="fixed z-30 inset-0 flex items-center justify-center bg-black/30 p-4">
      <div ref={contentRef} className="w-full max-w-[500px]">
        <Image
          src={imageBank.BudgetModalOverlay}
          alt="Overlay"
          width={500}
          height={100}
          className="rounded-t-xl w-full h-auto"
        />

        <div className="bg-white w-full px-4 sm:px-8 md:px-16 py-6 sm:py-7 md:py-9 space-y-4 rounded-b-xl">
          <div className="flex gap-3 sm:gap-4 items-start">
            <Image
              src={imageBank.AccountCategory}
              alt="Budget Tracker"
              width={20}
              height={20}
              className="w-5 h-5 sm:w-6 sm:h-6 mt-1"
            />
            <span className="space-y-1 sm:space-y-2">
              {" "}
              <h2 className="font-bold text-[15px] sm:text-[16px] md:text-[17px] text-[#191919]">
                Set up annual budgets by account category
              </h2>
              <p className="text-[#606060] text-[12px] sm:text-[13px] md:text-[14px]">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </span>
          </div>
          <div className="flex gap-3 sm:gap-4 items-start">
            <Image
              src={imageBank.BudgetTracker}
              alt="Budget Tracker"
              width={20}
              height={20}
              className="w-5 h-5 sm:w-6 sm:h-6 mt-1"
            />
            <span className="space-y-1 sm:space-y-2">
              {" "}
              <h2 className="font-bold text-[15px] sm:text-[16px] md:text-[17px] text-[#191919]">
                Track actuals vs budget in real time{" "}
              </h2>
              <p className="text-[#606060] text-[12px] sm:text-[13px] md:text-[14px]">
                See how your community is performing against plan, month by
                month.
              </p>
            </span>
          </div>
          <div className="flex gap-3 sm:gap-4 items-start">
            <Image
              src={imageBank.Analytics}
              alt="Budget Tracker"
              width={20}
              height={20}
              className="w-5 h-5 sm:w-6 sm:h-6 mt-1"
            />
            <span className="space-y-1 sm:space-y-2">
              {" "}
              <h2 className="font-bold text-[15px] sm:text-[16px] md:text-[17px] text-[#191919]">
                Adjust figures and forecast with ease{" "}
              </h2>
              <p className="text-[#606060] text-[12px] sm:text-[13px] md:text-[14px]">
                Edit amounts, apply percentage changes, or roll forward last
                year&apos;s data—all in one place.
              </p>
            </span>
          </div>
          <button className="bg-[#18181B] text-white text-[15px] sm:text-[16px] md:text-[17px] font-bold py-2 sm:py-3 w-full rounded-full hover:cursor-pointer">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;