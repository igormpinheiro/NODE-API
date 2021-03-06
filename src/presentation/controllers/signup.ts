import {httpReponse, httpRequest} from '../protocols/http'
import {MissingParamError} from '../errors/missing-param-error'
import {badRequest} from '../helpers/http-helper'

export class SignUpController{
    handle(httpRequest: httpRequest): httpReponse {
        const requiredFields = ['name', 'email', 'password']
        for(const field of requiredFields) {
            if(!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }
        }
    }
}