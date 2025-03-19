interface IProps {
  Msg: string;
}
const ErrorMsg = ({ Msg }: IProps) => {
  return Msg ? (
    <span className="block text-red-700 px-2 font-semibold text-sm">{Msg}</span>
  ) : null;
};
export default ErrorMsg;
