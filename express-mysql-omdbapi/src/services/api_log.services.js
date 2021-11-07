const db = require("../models")
const ApiLog = db.apiLog

exports.createLog = async (input) => {
    return ApiLog.create(input)
}