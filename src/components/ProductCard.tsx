import { productList } from "../data";
import { IProduct } from "../interfaces";
import Button from "./ui/Buttom";
import Image from "./ui/Image";

interface IProps {
  Product: IProduct;
}
function txtSliser(txt: string, length: number = 50) {
  if (txt.length > length) {
    return `${txt.slice(0, length)} ...`;
  }
  return txt;
}
const ProductCard = ({ Product }: IProps) => {
  const { title, price, imageURL, description, category } = Product;
  return (
    <>
      <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-4 flex flex-col">
        <Image imgUrl={imageURL} alt="" className=" rounded-md mb-3" />
        <h3 className=" font-bold">{title}</h3>
        <p className=" text-[13px] text-gray-900 break-words">
          {txtSliser(description, 200)}
        </p>
        <div className="flex flex-row items-center my-4 space-x-2">
          <span className=" w-5 h-5 rounded-full bg-amber-400  cursor-pointer" />
          <span className=" w-5 h-5 rounded-full bg-amber-400  cursor-pointer" />
          <span className=" w-5 h-5 rounded-full bg-amber-400  cursor-pointer" />
        </div>
        <div className="flex  items-center justify-between p-3">
          <span className="text-3xl">${price}</span>
          <Image
            imgUrl={category.imageURL}
            alt=""
            className=" w-10 h-10 rounded-full  "
          />
        </div>
        <div className="flex space-x-1.5 mt-4">
          <Button className="bg-green-600  hover:bg-green-900 " width="w-full">
            Edit
          </Button>
          <Button className="bg-red-600  hover:bg-red-900" width="w-full">
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
