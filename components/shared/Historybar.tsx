"use client";
import historyStyles from "@/styles/Historial.module.css";
interface Props {
    id: number;
    amount: number;
    withdrawal_id: number;
    bank_code: string;
    reference:string;
    createdAt: string;
    bank_name: string;
}
const Historybar = ({ id,bank_name, amount, withdrawal_id,bank_code,reference, createdAt }: Props) => {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF", "#fc5f9b","#0ed095"]; // colors for the history bar
  const getRandomColors = () => {
    const shuffledColors = [...colors].sort(() => 0.5 - Math.random());
    return shuffledColors.slice(0, 3);
  };
  const clr = getRandomColors()[id % 3] ;
  console.log(clr)
  return (
    <>
      <div
        className={historyStyles.box}
        style={{ "--clr": clr}}
      >
        <div className={historyStyles.content}>
                <div className="icon">
                    <img src="" alt="withdrawal-logo" className=""/>
                </div>
                <div className="text">
                    <h3>{amount}</h3>
                    <p>5 projects</p>
                </div>
            </div>
      </div>
    </>
  );
};
export default Historybar;
