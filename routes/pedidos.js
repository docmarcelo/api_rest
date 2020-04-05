const express = require('express');
const router = express.Router();


/*
* Retorna todos os pedidos
*/

router.get('/', (req,res, next) => {
    res.status(200).send({
        mensagem: "Usando o GET dentro da rota de pedidos"
    });

});

/*
    Insere um pedido
*/
router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    };

    res.status(201).send({
        mensagem: "Inserindo pedidos",
        pedidoCriado: pedido
    }); 

});

/*
    Busca pedido específico pela id
*/
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: "Usando GET id_pedido"
    });
});

/*
    Atualizando o pedido
*/
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando PATH do pedido'
    });
});

/* 
    Deleta o registro referente 
*/

router.delete('/', (req, res, next) => {
    res.status(200).send({
        mesnagem: 'Usando DELETE do pedido'
    });
});
module.exports = router;