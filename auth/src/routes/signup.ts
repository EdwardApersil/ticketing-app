import express, { Response, Request } from 'express'
import { body, validationResult } from 'express-validator'
import {RequestValidationError} from '../errors/request-validation-error'
import {DatabaseConnectionError} from '../errors/database-connection-error'

const router = express.Router();

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage("Emails is invalid, please try again"),
    body('password')
        .trim()
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")

], (req: Request, res: Response): any => {
    const errors = validationResult(req)


    if(!errors.isEmpty()){
        throw new RequestValidationError(errors.array())
    }
    const { email, password } = req.body

    console.log("Creating a user...")
    throw new DatabaseConnectionError()

    res.send({})

})

export { router as signupRouter }