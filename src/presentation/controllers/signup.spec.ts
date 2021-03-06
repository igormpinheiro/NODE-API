import {SignUpController} from './signup'
import {MissingParamError} from '../errors/missing-param-error'

describe('SignUp Controller', () => {
    test('Should return 400 if no name provided ', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                email: 'any_email@email.com',
                password: 'any_password',
                passwordConfirmation: 'any_password'

            }
        }
        const httpReponse = sut.handle(httpRequest)
        expect(httpReponse.statusCode).toBe(400)
        expect(httpReponse.body).toEqual(new MissingParamError('name'))
    });

    test('Should return 400 if no email provided ', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: 'any_name',
                password: 'any_password',
                passwordConfirmation: 'any_password'

            }
        }
        const httpReponse = sut.handle(httpRequest)
        expect(httpReponse.statusCode).toBe(400)
        expect(httpReponse.body).toEqual(new MissingParamError('email'))
    });

    test('Should return 400 if no password provided ', () => {
        const sut = new SignUpController()
        const httpRequest = {
            body: {
                name: 'any_name',
                email: 'any_email@email.com',
                passwordConfirmation: 'any_password'

            }
        }
        const httpReponse = sut.handle(httpRequest)
        expect(httpReponse.statusCode).toBe(400)
        expect(httpReponse.body).toEqual(new MissingParamError('password'))
    });
});