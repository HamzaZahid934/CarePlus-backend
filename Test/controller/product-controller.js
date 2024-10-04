import product from "../../Test/model/product-schema.js";



export const postProductData = async (req, res) => {
    try {
      const { name, description, price, quantity, user } = req.body;
      const isProductExisted = await product.findOne({ name: name });
      if (isProductExisted) {
        return res.status(400).json({ message: "Product is already existed" });
      }
  
      const productData = product({
        name,
        description,
        price,
        quantity,
        user
      });
  
      await productData.save();
      return res
        .status(200)
        .json({ message: "data saved succesfully", success: true, productData });
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
  export const getProductsData = async (req, res) => {
  try {
    const getProducts = await product.find();
    return res.status(200).json({ success: true, getProducts });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const getProductId = req.params.id;
    const productData = await product.findById(getProductId);
    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res
      .status(200)
      .json({ success: true, productData, message: "got product data" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
