const express = require('express');
const router = express.Router();


/*
* Retorna todos os produtos
*/

router.get('/', (req,res, next) => {
    res.status(200).send({
        mensagem: "Usando o GET dentro da rota de produtos"
    });

});

/*
    Insere um produto
*/
router.post('/', (req, res, next) => {
const produto = {
    nome: req.body.nome,
    preco: req.body.preco
};

    res.status(201).send({
        mensagem: "Insere produtos",
        produtoCriado: produto
    }); 

});

/*
    Busca produto específico pela id
*/
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto
    res.status(200).send({
        mensagem: "Usando GET id_produto"
    });
});

/*
    Atualizando o produto
*/
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando PATH do produto'
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).send({
        mesnagem: 'Usando DELETE do produto'
    });
});
module.exports = router;