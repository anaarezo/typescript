import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Ana', email: 'ana@mail.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({
            to: {
                name: 'Ana Laura',
                email: 'ana@mail.com'
            },
            message: {
                subject: 'Bem Vindo',
                body: 'Seja bem vindo'
            }
        });
        return res.send();
    }
};