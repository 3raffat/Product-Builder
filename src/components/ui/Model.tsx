import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Buttom";
import Input from "./Input";
import { formInputsList } from "../../data";

import { IProduct } from "../../interfaces";

function Model() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  /* __________________State_____________________*/
  const [Product, SetProduct] = useState<IProduct>(defaultProductObj);
  const [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    SetProduct(defaultProductObj);
    setIsOpen(false);
  }
  /* __________________HANDLER____________________*/
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    SetProduct({
      ...Product,
      [name]: value,
    });
  };

  const SubmitHandler = (e: FormEvent<HTMLFormElement>) => {};

  /* __________________RENDER____________________*/
  const FrrmListRender = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col font-sm">
      <label htmlFor={input.name}>{input.label}</label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={Product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));
  console.log(Product);

  return (
    <>
      <Button
        onClick={open}
        className="bg-green-600  hover:bg-green-900 p-3 "
        width=" w-fit"
      >
        Open dialog
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-md"
            >
              <DialogTitle
                as="h3"
                className="text-3xl  font-bold text-black mb-5 p-2"
              >
                ADD A NEW PRODUCT
              </DialogTitle>
              <form className=" space-y-4 " onSubmit={SubmitHandler}>
                {FrrmListRender}
              </form>

              {/* <MultiSelect /> */}
              <div className=" flex space-x-2 mt-6">
                <Button
                  type="submit"
                  className=" items-center gap-2 rounded-md bg-green-600 hover:bg-green-800 p-3 text-md font-semibold text-black"
                  width="w-full"
                >
                  SUPMIT
                </Button>
                <Button
                  className=" items-center gap-2 rounded-md bg-red-600 hover:bg-red-800 p-3 text-md font-semibold text-black"
                  onClick={close}
                  width="w-full"
                >
                  CANCLE
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
export default Model;
