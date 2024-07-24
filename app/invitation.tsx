import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";

import { useWindowSize } from "@/hooks/common/use-window-size";
import { fontMonserrat, fontNotoNaskhArabic } from "@/config/fonts";
import {
  WaveTopBlack,
  WaveBottomWhite,
  WaveLine,
  WaveTopWhite,
} from "@/components/svg";
import { Timer } from "@/components/molecules/timer";

type Props = {
  y: number;
  className?: string | undefined;
};

export const Invitation = ({ className, y }: Props) => {
  const [accountNumber, setAccountNumber] = useState<string>(
    "3781-01-012344-53-0"
  );
  const [showConfetti, setShowConfetti] = useState<boolean>(true);
  const [opacityConfetti, setOpacityConfetti] = useState<number>(1);
  const { width, height } = useWindowSize();
  const { theme, setTheme } = useTheme();

  const generateConfetti = () => {
    const intervalOpacityConfetti = setInterval(() => {
      const newOpacity = opacityConfetti - 0.05;

      if (newOpacity > 0.5) {
        setOpacityConfetti(newOpacity);
      } else {
        setShowConfetti(false);
        clearInterval(intervalOpacityConfetti);
      }
    }, 1500);

    return () => clearInterval(intervalOpacityConfetti);
  };

  const copy = () => {
    navigator.clipboard.writeText(accountNumber);
  };

  useEffect(() => {
    generateConfetti();
  }, [opacityConfetti, y]);

  return (
    <div className={clsx("text-center", className)}>
      {showConfetti && (
        <Confetti height={height} opacity={opacityConfetti} width={width} />
      )}
      <Confetti
        confettiSource={{
          w: 10,
          h: 10,
          x: width / 2,
          y: y,
        }}
        numberOfPieces={50}
        recycle={false}
      />
      <section id="home">
        <div className="container mx-auto">
          <h2 className="font-semibold pt-16 mb-8">Ngunduh Mantu</h2>
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
          <h4 className={clsx("font-semibold", fontMonserrat.className)}>
            Minggu, 28 Juli 2024
          </h4>
        </div>
      </section>
      {theme === "dark" ? <WaveTopBlack /> : <WaveTopWhite />}
      <section
        className={clsx(
          "-mt-1 px-4",
          theme === "dark" ? "bg-gray-500" : "bg-white"
        )}
        id="intro"
      >
        <div className="container mx-auto">
          <h3
            className={clsx(
              "font-semibold mb-6 antialiased",
              fontNotoNaskhArabic.className
            )}
          >
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h3>
          <h4 className="mb-4 font-medium">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </h4>
          <p className={clsx("font-normal mb-4", fontMonserrat.className)}>
            Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
            serta kerabat sekalian untuk menghadiri acara pernikahan kami:
          </p>
        </div>
        <div className="block">
          <div className="relative mx-auto w-56 h-56 overflow-hidden rounded-full mb-8 border-3 border-white">
            <Image
              alt="Groom 1"
              className="text-center"
              height="980"
              priority={true}
              src="/assets/images/groom-1.webp"
              width="980"
            />
          </div>
          <h4 className="font-semibold mb-2">Eka Yuda Rayi Anugrah</h4>
          <p className={clsx("font-semibold", fontMonserrat.className)}>
            Bapak Ajang Sukandi & Ibu Iin Rosmini
          </p>
        </div>
        <h1 className="my-6">&</h1>
        <div className="block">
          <div className="relative mx-auto w-56 h-56 overflow-hidden rounded-full mb-8 border-3 border-white">
            <Image
              alt="Bride 1"
              className="text-center"
              height="980"
              objectFit="cover"
              objectPosition="top"
              priority={true}
              src="/assets/images/bride-1.webp"
              width="980"
            />
          </div>
          <h4 className="font-semibold mb-2">Junita Herpiani</h4>
          <p className={clsx("font-semibold", fontMonserrat.className)}>
            Bapak Sohana (Alm) & Ibu Hani
          </p>
        </div>
        <WaveLine className="mx-auto" />
        <div className="block">
          <div className="relative mx-auto w-56 h-56 overflow-hidden rounded-full mb-8 border-3 border-white">
            <Image
              alt="Groom 2"
              className="text-center"
              height="980"
              objectFit="cover"
              objectPosition="top"
              priority={true}
              src="/assets/images/groom-2.webp"
              width="980"
            />
          </div>
          <h4 className="font-semibold mb-2">Dwi Yudi Rayi Anugrah</h4>
          <p className={clsx("font-semibold", fontMonserrat.className)}>
            Bapak Ajang Sukandi & Ibu Iin Rosmini
          </p>
        </div>
        <h1 className="my-6">&</h1>
        <div className="block">
          <div className="relative mx-auto w-56 h-56 overflow-hidden rounded-full mb-8 border-3 border-white">
            <Image
              alt="Bride 2"
              className="text-center"
              height="980"
              objectFit="cover"
              objectPosition="top"
              priority={true}
              src="/assets/images/bride-2.webp"
              width="980"
            />
          </div>
          <h4 className="font-semibold mb-2">Ira Herawati</h4>
          <p className={clsx("font-semibold", fontMonserrat.className)}>
            Bapak Heryana & Ibu Siti Aisah
          </p>
        </div>
      </section>
      <WaveBottomWhite />
      <section
        className={clsx(
          "px-4",
          theme === "dark" ? "bg-gray-500" : "bg-gray-200"
        )}
        id="doa"
      >
        <div className="container mx-auto">
          <h4 className="mb-4 font-medium">
            {"Allah Subhanahu Wa Ta'ala berfirman"}
          </h4>
          <p className={clsx("mt-4 mb-8 font-normal", fontMonserrat.className)}>
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
          <p className={clsx("font-semibold", fontMonserrat.className)}>
            QS. Ar-Rum Ayat 21
          </p>
        </div>
      </section>
      <WaveTopWhite />
      <section
        className={clsx(
          "-mt-1 px-4",
          theme === "dark" ? "bg-gray-500" : "bg-white"
        )}
        id="event"
      >
        <div className="container mx-auto">
          <h4 className="mb-4 font-medium">Waktu Menuju Acara</h4>
          <Timer deadline="July, 28, 2024" />

          <div className="mt-16">
            <h4 className="font-medium mb-4">Ngunduh Mantu</h4>
            <p className={clsx("font-medium mb-2", fontMonserrat.className)}>
              Pukul 09.00 WIB - Selesai
            </p>
            <p className={clsx("font-medium", fontMonserrat.className)}>
              Perumahan BTN Ciheuleut No 87 Blok B4 Pepabri RT 40/13 Kel
              Pasirkareumbi Kecamatan Subang Kabupaten Subang
            </p>
          </div>
        </div>
      </section>
      <WaveBottomWhite />
      <section
        className={clsx(
          "-mt-1 px-4",
          theme === "dark" ? "bg-gray-500" : "bg-gray-200"
        )}
        id="gift"
      >
        <div className="container mx-auto">
          <h4 className="mb-4 font-medium">Hadiah</h4>
          <p className={clsx("font-medium mb-8", fontMonserrat.className)}>
            Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda
            kasih untuk kami, dapat melalui :
          </p>
          <Card className="max-w-[400px] mx-auto">
            <CardBody className="text-center">
              <Image
                alt="Landing Photo 1"
                className="text-center mb-4"
                height="980"
                priority={true}
                src="/assets/images/bank-bri-logo.png"
                width="980"
              />
              <p className={clsx("font-semibold", fontMonserrat.className)}>
                No Rekening {accountNumber}
              </p>
              <p
                className={clsx("font-semibold mb-4", fontMonserrat.className)}
              >
                a.n Ajang Sukandi
              </p>
              <Button
                className={clsx("font-semibold", fontMonserrat.className)}
                color="primary"
                onClick={copy}
              >
                Salin No Rekening
              </Button>
            </CardBody>
          </Card>
        </div>
      </section>
      <WaveTopWhite />
      <section
        className={clsx(
          "-mt-1 px-4",
          theme === "dark" ? "bg-gray-500" : "bg-white"
        )}
        id="end"
      >
        <div className="container mx-auto">
          <p className={clsx("font-medium mb-3", fontMonserrat.className)}>
            {`Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila, Bapak
            / Ibu / Saudara / i. berkenan hadir untuk memberikan do'a restunya
            kami ucapkan terimakasih.`}
          </p>
          <h4 className="mb-8 font-medium">
            Wassalamualaikum Warahmatullahi Wabarakatuh
          </h4>
          <h3
            className={clsx(
              "font-semibold mb-6 antialiased",
              fontNotoNaskhArabic.className
            )}
          >
            اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
          </h3>
        </div>
      </section>
    </div>
  );
};
