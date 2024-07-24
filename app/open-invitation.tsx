"use client";

import Image from "next/image";
import { Button } from "@nextui-org/button";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import { MouseEvent } from "react";

import { escapeHtml } from "@/utils/string";
import { fontMonserrat } from "@/config/fonts";
import { HeartIcon } from "@/components/svg";

type Props = {
  onSetShowInvitation: (e: MouseEvent) => void;
};

export const OpenInvitation = ({ onSetShowInvitation }: Props) => {
  const to = useSearchParams().get("to");

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="font-bold mb-6">Ngunduh Mantu</h2>
          <div className="relative mx-auto w-56 h-56 overflow-hidden rounded-full mb-8 border-3 border-white">
            <Image
              alt="Landing Photo 1"
              className="text-center"
              height="980"
              priority={true}
              src="/assets/images/landing-photo-1.jpeg"
              width="980"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Eka & Junita</h3>
            <h3 className="font-semibold">Dwi & Ira</h3>
          </div>
          {to && (
            <div className={clsx("", fontMonserrat.className)}>
              <p className="font-bold">Kepada Yth Bapak/Ibu/Saudara/i</p>
              <p className="font-semibold mt-1 tracking-wider">
                {escapeHtml(to)}
              </p>
            </div>
          )}
          <Button
            className={clsx(
              "bg-gradient-to-br from-blue-500 to-yellow-300 text-white shadow-lg font-semibold mt-4",
              fontMonserrat.className
            )}
            radius="full"
            startContent={<HeartIcon />}
            onClick={(e) => onSetShowInvitation(e)}
          >
            Buka Undangan
          </Button>
        </div>
      </div>
    </div>
  );
};
