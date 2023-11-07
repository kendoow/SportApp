import request from 'supertest';
import { app } from '../index';

describe('AuthController', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/auth/signup')
            .send({ name: "randomName", email: "someEmail@mail.ru", password: "somepassword" });

        expect(response.status).toBe(200);

    });

    // it('should log in a user', async () => {
    //     const response = await request(app)
    //         .post('/auth/login')
    //         .send({ name: "randomName", email: "someEmail@mail.ru", password: "somepassword" });

    //     expect(response.status).toBe(200);

    // });
});
