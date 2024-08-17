import { Router, Request, Response } from "express";


const router = Router();




router.get('/mensajes', (req: Request, res: Response) => {
   
    res.status(200).json({ 
        ok: true,
        message: 'Todo esta bien'

        
    });
});

router.post('/mensajes', (req: Request, res: Response) => {
   
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.status(200).json({ 
        ok: true,
        message: 'Todo esta bien desde el POST',
        cuerpo,
        de

        
    });
});


router.post('/mensajes/:id', (req: Request, res: Response) => {
   
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    res.status(200).json({ 
        ok: true,
        message: 'Todo esta bien desde el POST',
        cuerpo,
        de,
        id

        
    });
});

export default router