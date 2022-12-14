import errorValidation from "./errorValidation.js"

class ResultJSON {
    static success = (res, message, data) => {
        res.status(200).json({
            response: "--> OK.",
            message,
            data
        })
    }
    static failed = (res, err) => {
        const errorMessage = errorValidation(err)
        const { status, error } = errorMessage
        res.status(status).json({
            status,
            response: "--> Not OK.",
            error
        })
    }
}

export default ResultJSON