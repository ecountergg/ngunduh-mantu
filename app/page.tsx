"use client";

import { useTheme } from "next-themes";
import { useState, useTransition, MouseEvent } from "react";

import { OpenInvitation } from "./open-invitation";
import { Invitation } from "./invitation";

export default function Home() {
  const [isPending, startTransition] = useTransition();
  const [y, sety] = useState<number>(0);
  const [showInvitation, setShowInvitation] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const onSetShowInvitation = (e: MouseEvent) => {
    startTransition(() => {
      setShowInvitation(true);
    });

    sety(e.pageY);
  };

  return (
    <main className={theme === "dark" ? "bg-gray-500" : "bg-gray-200"}>
      {!showInvitation && !isPending ? (
        <OpenInvitation onSetShowInvitation={onSetShowInvitation} />
      ) : (
        <Invitation className="animate-fade" y={y} />
      )}
    </main>
  );
}
