import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    firstname: { type: string, required: true },
    lastname: { type: string, required: true },
    phone: { type: string, required: true },
    city: { type: string, required: true },
    pincode: { type: string, required: true },
    locality: { type: string, required: false },
    address: { type: string, required: true }

})

const addressModel = mongoose.models.address || mongoose.model('address', addressSchema);
export default addressModel