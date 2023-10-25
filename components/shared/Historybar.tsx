"use client";
import historyStyles from "@/styles/Historial.module.css";
import { useState, useEffect } from "react";
interface Props {
  id: number;
  amount: number;
  withdrawal_id: number;
  bank_code: string;
  reference: string;
  createdAt: string;
  bank_name: string;
}
const Historybar = ({
  id,
  bank_name,
  amount,
  withdrawal_id,
  bank_code,
  reference,
  createdAt,
}: Props) => {
  const [shuffledColors, setShuffledColors] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const colors: string[] = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FFFF33",
    "#33FFFF",
    "#fc5f9b",
    "#0ed095",
  ]; // colors for the history bar
  useEffect(() => {
    setShuffledColors(shuffleArray(colors));
  }, []);

  const shuffleArray = (array: any) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const getRandomColor = (id: number): string => {
    if (currentIndex >= colors.length) {
      // If we've exhausted the shuffledColors array, shuffle again
      setShuffledColors(shuffleArray(colors));
      setCurrentIndex(0);
    }

    const uniqueColor = shuffledColors[currentIndex];
    setCurrentIndex(currentIndex + 1);

    return uniqueColor;
  };
  const clr = getRandomColor(id);
  console.log(id, clr);
  return (
    <>
      <div className={historyStyles.box} style={{ "--clr": clr }}>
        <div className={historyStyles.content}>
          <div className={historyStyles.icon}>
            <i className="fa-solid fa-money-bill-wave fa-flip"></i>
          </div>
          <div className={historyStyles.text}>
            <h3>- #{amount}</h3>
            <p>Withdrawal ID - {withdrawal_id}</p>
            <p>Bank code - {bank_code}</p>
            <p>Reference - {reference}</p>
          </div>
        </div>
        <div className={`${historyStyles.down} mt-1`}>
          <hr className="w-full"></hr>
          <div className="flex items-center justify-between w-full">
            <p>{createdAt}</p>
            <p>{bank_name}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Historybar;
