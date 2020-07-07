const router = require('express').Router()
const pesananController = require('../controller/Pesanan')

router.post('/input', (req, res) => {
  pesananController.simpanPesanan(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.get('/tampil', (req, res) => {
  pesananController.tampilPesanan()
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
})

router.put('/edit/:id', (req, res) => {
  pesananController.edit(req.body, req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/tampilsingle/:id', (req, res) => {
  pesananController.tampilSatuData(req.params.id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res) => {
  pesananController.delete(req.params.id)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

module.exports = router