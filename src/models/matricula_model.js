const mongoose = require ("mongoose")
const student_schema = mongoose.Schema ({
    name: {type: String, require: true},
    id_code: {type: String, require: true},
    university: {type: String, require: true, unique: true},
    tuition_number: {type: String, require: true, unique: true},
    subjet: {
        type: Object,
        require: true,
        name: {type: String, require: true},
        credits: {
            type: Object,
            require: true,
            credits_amount: {type: Number, require: true},
            credits_cost: {type: parseFloat, require: true}
        },
    },
});
module.exports = mongoose.model("StudentTuition", student_schema);