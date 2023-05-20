import { Router } from 'express';
import user from '../controllers/user';
import auth from '../middleware/auth';

const userRoutes = Router();

userRoutes.post('/cadastrar', user.register);
userRoutes.get('/perfil/:id', user.profile);
userRoutes.get('/lista', auth, user.list);
userRoutes.patch('/editar/:id', user.update);
userRoutes.delete('/deletar/:id', user.remove);
userRoutes.put('/trocar-senha/:id', user.changePassword);

export default userRoutes;