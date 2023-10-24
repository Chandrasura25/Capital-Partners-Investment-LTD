"use client";
import historyStyles from "@/styles/Historial.module.css";
interface Props {
  histories: {
    id: number;
    amount: number;
    date: string;
    createdAt: string;
  };
}
const Historybar = ({ histories }: Props) => {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF", "#fc5f9b","#0ed095"]; // colors for the history bar
  const getRandomColors = () => {
    const shuffledColors = [...colors].sort(() => 0.5 - Math.random());
    return shuffledColors.slice(0, 3);
  };
  return (
    <>
      <div
        className={historyStyles.box}
        style={{ "--clr": getRandomColors()[histories.id % 3] }}
      ></div>
    </>
  );
};
export default Historybar;
