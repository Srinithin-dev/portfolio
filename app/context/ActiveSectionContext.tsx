"use client";
import { createContext, useContext, useMemo, useState } from "react";

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState("hero");
  const value = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection],
  );
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) throw new Error("useActiveSection must be used inside provider");
  return ctx;
}
