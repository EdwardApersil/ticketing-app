import { CustomError } from "./custom-error";

export class NotFundError extends CustomError {
    statusCode = 404;

    constructor() {
        super("Route Not Found")
        Object.setPrototypeOf(this, NotFundError.prototype)
    }

    serializeErrors(){
        return [{message: "Not Found"}]
    }
}