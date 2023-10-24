interface Props {
  investments: {
    amount: number;
    date: string;
    createdAt: string;
  };
  // "id": 12,
  // "userID": 12,
  // "username": "ade",
  // "email": "developers@flutterwavego.com",
  // "unitType": "type1",
  // "dayCount": 501,
  // "amount": 50000,
  // "roiDaily": 150,
  // "roiInTotal": 75000,
  // "withdrawn": 0,
  // "total": 125000,
  // "balance": 200150,
  // "date": "21/10/2023",
  // "validTill": "NaN/NaN/NaN",
  // "isActive": true,
  // "createdAt": "2023-10-21T20:10:46.000Z",
  // "updatedAt": "2023-10-22T09:01:30.000Z"
}
const Historybar = ({ investments }: Props) => {
  console.log(investments);
  return <></>;
};
export default Historybar;
