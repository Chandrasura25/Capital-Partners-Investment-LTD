interface Props {
  investments: {
    amount: number;
    date: string;
    createdAt: string;
  };
  // "unitType": "type1",
  // "dayCount": 501,
  // "withdrawn": 0,
  // "total": 125000,
  // "balance": 200150,
  // "date": "21/10/2023",
}
const Historybar = ({ investments }: Props) => {
  console.log(investments);
  return <></>;
};
export default Historybar;
