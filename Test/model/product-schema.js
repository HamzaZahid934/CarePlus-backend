import mongoose from "mongoose";
import user from "../../Test/model/user-schema";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
    },
   
},
{
    timestamps: true
}
)


let product = mongoose.model("product", productSchema);
export default productSchema