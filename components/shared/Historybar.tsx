"use client";
import historyStyles from "@/styles/Historial.module.css";
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

  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#ff0f5b",
    "#33FFFF",
    "#fc5f9b",
    "#0ed095",
  ]; // colors for the history bar
  const shuffleArray = (array:any) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  shuffleArray(colors); // Shuffle the colors initially
  
  const getNextUniqueColors = () => {
    if (colors.length < 3) {
      // Reset the colors array if there are fewer than 3 colors left
      shuffleArray(colors);
    }
  
    const uniqueColors = colors.slice(0, 3);
    colors.push(...colors.splice(0, 3)); // Rotate the first 3 colors to the end
    return uniqueColors;
  };
  
  const clr = getNextUniqueColors()[id % 3];
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
