const asyncHandler = require("express-async-handler");
const Product = require("../models/ProductModel");
const { fileSizeFormatter } = require("../utils/fileUpload");
const cloudinary = require("cloudinary").v2;


const createProduct = asyncHandler( async (req, res) => {
    const {name, sku, category, quantity, price, description } = req.body;


    //Validation
    if(! name || !category || !quantity || !price || !description){
        res.status(400);
        throw new Error("Please fill in all fields");
    };

    //Handle Image upload
    let fileData = {}
    if(req.file){
        //Save image to Cloudinary
        let uploadedFile;
        try {
            uploadedFile = await cloudinary.uploader.upload(req.file.path,{folder: "Pinvent App", resource_type: "image"})
        } catch (error) {
            res.status(500);
            throw new Error("Image could not be uploaded");
        }
        fileData = {
            fileName : req.file.originalname,
            filePath : uploadedFile.secure_url,
            fileType : req.file.mimetype,
            fileSize : fileSizeFormatter(req.file.size, 2) ,
        };
    }

    //Create product 
    const product = await Product.create({
        user: req.user.id,
        name,
        sku,
        category,
        quantity,
        price,
        description,
        image : fileData,
    })
    res.status(201).json(product);
});

//Get all products
const getProducts = asyncHandler(async(req,res)=>{
    const products = await Product.find({user: req.user.id}).sort("-CreatedAt");
    res.status(200).json(products);
});

//Get Single product
const getProduct = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    //if product does not exist
    if(!product){
        res.status(404);
        throw new Error("Product not found");
    }
    //March product to its user
    if(product.user.toString() !== req.user.id){
        res.status(404);
        throw new Error("user not authorized");
    }
    res.status(200).json(product);
});

//Delete Product

const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    if (product.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Product deleted" });
  });

  //Update Product
  const updateProduct = asyncHandler(async (req, res) => {
    const { name, category, quantity, price, description } = req.body;
    const { id } = req.params;
  
    const product = await Product.findById(id);
  
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
  
    // Match product to its user
    if (product.user.toString() !== req.user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }
  
    // Handle Image upload
    let fileData = {};
    if (req.file) {
      // Save image to Cloudinary
      let uploadedFile;
      try {
        uploadedFile = await cloudinary.uploader.upload(req.file.path, {
          folder: "Pinvent App",
          resource_type: "image",
        });
      } catch (error) {
        res.status(500);
        throw new Error("Image could not be uploaded");
      }
      fileData = {
        fileName: req.file.originalname,
        filePath: uploadedFile.secure_url,
        fileType: req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2),
      };
    }
  
    // Update product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        category,
        quantity,
        price,
        description,
        image: fileData ? fileData : (product ? product.image : undefined),
      },
      {
        new: true,
        runValidators: true,
      }
    );
  
    res.status(201).json(updatedProduct);
  });
  

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct, 
    updateProduct,
}
