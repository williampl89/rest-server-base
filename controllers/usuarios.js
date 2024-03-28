const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre='No name', apikey, page= 1} = req.query

    res.json({
        msg: 'get API - constrollador',
        q,
        nombre,
        apikey,
        page
    })
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - constrollador',
        nombre,
        edad,
    })
}

const usuariosPut = (req, res = response) => {

    const { id }= req.params;

    res.json({
        msg: 'put API - constrollador',
        id
    })
}


const usuariosPatch= (req, res = response) => {
    res.json({
        msg: 'patch API - constrollador'
    })
}

const usuariosDelete= (req, res = response) => {
    res.json({
        msg: 'delete API - constrollador'
    })
}

module.exports = { 
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
 }