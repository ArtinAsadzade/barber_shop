"use client";

import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Toaster position="bottom-left" closeButton />
      {children}
    </>
  );
}