const router = require('express').Router()
const { validationResult, check } = require("express-validator");
const Modelcourses = require('../models').Courses


router.get('/', async (req, res) => {
    try {
        const results = await Modelcourses.findAll()
        return res.json(results)
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.post('/', [
    check('name', 'campo requerido').not().isEmpty(),
    check('category', 'campo requerido').not().isEmpty(),
    check('instructor', 'campo requerido').not().isEmpty(),
    check('topics', 'campo requerido').not().isEmpty(),
    check('modality', 'campo requerido').not().isEmpty(),
    check('availability', 'campo requerido').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        const results = await Modelcourses.create(req.body)
        return res.json({ ok: true, results })
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.put('/:id', [
    check('name', 'campo requerido').not().isEmpty(),
    check('category', 'campo requerido').not().isEmpty(),
    check('instructor', 'campo requerido').not().isEmpty(),
    check('topics', 'campo requerido').not().isEmpty(),
    check('modality', 'campo requerido').not().isEmpty(),
    check('availability', 'campo requerido').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }
    try {
        await Modelcourses.update(req.body, {
            where: { id: req.params.id }
        })
        return res.json({ sucess: 'se ha modificado correctamente' })
    } catch (error) {
        console.log('Error .i.', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await Modelcourses.destroy({
            where: { id: req.params.id }
        });
        return res.json({ sucess: 'Se ha Borrado corrrectamente' });
    } catch (error) {
        console.log('Error .i. ', error)
        return res.status(500).json({
            smsError: 'Error de peticion'
        })
    }
})
module.exports = router