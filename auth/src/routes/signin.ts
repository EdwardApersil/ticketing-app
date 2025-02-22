import express, { Response, Request } from 'express'
import { body, validationResult } from 'express-validator'

const router = express.Router();

router.post('/api/users/signin', [
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
        return res.status(400).send(errors.array());
    }
    const { email, password } = req.body

})

export { router as signinRouter }