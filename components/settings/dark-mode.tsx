"use client";

import { useThemeMode } from "@/hooks/setting/use-setting";
import Section from "../section-label";
import { cn } from "@/lib/utils";
import { SystemMode } from '../themes-placeholder/systemmode';
import { LightMode } from '../themes-placeholder/lightmode';
import { DarkMode } from '../themes-placeholder/darkmode';

const DarkModeToggle = () => {
  const { setTheme, theme } = useThemeMode();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="lg:col-span-1">
        <Section label="Interface theme" message="Choose your interface theme." />
      </div>
      <div className="lg:col-span-4 flex lg:flex-row flex-col items-cstart gap-5">
        <div
          className={cn(
            "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
            theme === "system" && "border-orange"
          )}
          onClick={() => setTheme("system")}
        >
            <SystemMode />
        </div>
        <div
          className={cn(
            "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
            theme === "light" && "border-orange"
          )}
          onClick={() => setTheme("light")}
        >
            <LightMode />
        </div>
        <div
          className={cn(
            "rounded-2xl overflow-hidden cursor-pointer border-4 border-transparent",
            theme === "dark" && "border-orange"
          )}
          onClick={() => setTheme("dark")}
        >
            <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
