import { Request, Response } from 'express';

const users = [
    { name: 'Ana', email: 'ana@mail.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
};