const mongoose = require("mongoose")
const ProfessionalData = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        hobbies:{type: String},
        weight: { type: String },
        height : {type: String}

    },
    { collection: "Professional-Data" }

)


const model = mongoose.model('Professional-Data', ProfessionalData)
module.exports = model
