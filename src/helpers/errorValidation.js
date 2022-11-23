const errorValidation = (err) => {
    // console.log(err)
    let status = 0
    let message = null
    
    if(
        (err.includes("Path") && err.includes("is required.")) 
        ||
        err.includes("allInputsMustBeFilled")
    ) {
        status = 400
        message = "Please fill out all of the inputs! (firstName, lastName, email, birthday, address, city, country)"
    }
    else if(err.includes("Cast to ObjectId failed for value")) {
        status = 400
        message = "Please input an ID with valid format!"
    }
    else if(err.includes("E11000 duplicate key error collection") && err.includes("email")) {
        status = 403
        message = "This email is already used, try another one!"
    }
    else if("invalidParamsId") {
        status = 400
        message = "Invalid params ID, none users were found with this ID!"
    }
    else {
        status = 500
        message = "Oops! It seems that something's wrong with the server!"
    }
    
    return { status, error: message }
}

export default errorValidation