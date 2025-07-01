import { productType } from "@/constant/data";
import Link from "next/link";
import React from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div
      className="w-full  bg-white px-4 py-3 shadow-md 
    flex items-center justify-between flex-wrap gap-5"
    >
      <div className="flex items-center gap-1.5 text-sm font-semibold">
        {productType?.map((item) => (
          <button
            onClick={() => onTabSelect(item?.title)}
            key={item?.title}
            className={`border border-shop_light_green px-4 py-1.5 md:px-6 
          md:py-2 rounded-full hover:bg-shop_light_green
         hover:border-shop_light_green hover:text-white 
          hoverEffect ${
            selectedTab === item?.title
              ? "bg-shop_light_green text-white border-shop_light_green"
              : "bg-shop_light-green/20"
          }`}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        href="/shop"
        className="border 
      border-b-shop_btn_dark_green/30 px-4 py-1.5 
      md:px-6 md:py-2 rounded-full hover:bg-shop_light_green
      hover:border-shop_light_green 
      hover:text-white hoverEffect"
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
