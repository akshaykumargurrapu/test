
const mongoose = require("mongoose")
const PersonalData = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        hobbies: { type: Array },
        tShirt: { type: Number },
        weight: { type: Number },
        height: { type: Number }

    },
    { collection: "Personal-Data" }

)

const model = mongoose.model('Personal-Data', PersonalData)
module.exports = model
