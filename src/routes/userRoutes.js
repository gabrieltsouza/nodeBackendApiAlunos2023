import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index);
// router.get('/:id', userController.show);

// Deveriam existir
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);
export default router;

/*
index -> lista os usuários -> get
store/create -> cria -> post
delete -> apaga um -> delete
show -> mostra um -> get
update -> atualiza um -> patch ou put
*/
