interface Props {
  user: {
    userID: number;
    fullname: string;
    email: string;
    phone_number: string;
    amount: string;
  };
  textStyle?: string;
  btnTitle?: string;
}
const CardDetails = ({ user, textStyle, btnTitle }: Props) => {};
export default CardDetails;
