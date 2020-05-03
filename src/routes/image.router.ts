import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/verification', 
    async (req: Request, res: Response) => {
        return res.status(200).send({ auth: true, message: 'Authenticated.' });
});

export const ImageRouter: Router = router;