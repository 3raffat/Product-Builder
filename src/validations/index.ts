interface IProd {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}

export const ProductValidation = (Product: IProd) => {
  const { title, description, imageURL, price } = Product;
  const errors: IProd = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(imageURL);

  if (!title.trim() || title.length < 10 || title.length > 80) {
    errors.title = "Product title must be between 10 and 80 characters!";
  }
  if (
    !description.trim() ||
    description.length < 10 ||
    description.length > 900
  ) {
    errors.description =
      "Product description must be between 10 and 900 characters!";
  }
  if (!imageURL.trim() || !validUrl) {
    errors.imageURL = "Valid image URL is required";
  }
  if (!price.trim() || isNaN(Number(price))) {
    errors.price = "Valid price is required!";
  }
  return errors;
};
