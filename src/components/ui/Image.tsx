interface IProps {
  imgUrl: string;
  alt: string;
  className?: string;
}
const Image = ({ imgUrl, alt, className }: IProps) => {
  return (
    <>
      <img src={imgUrl} alt={alt} className={className} />
    </>
  );
};
export default Image;
