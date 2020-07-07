const pesananModel = require('../model/Pesanan')
const objectId = require('mongoose').Types.ObjectId

exports.simpanPesanan = (data) =>
  new Promise((resolve, reject) => {
    pesananModel.create(data)
      .then(() => {
        resolve({
          sukses: true,
          pesan: 'Berhasil di Pesan'
        })
      }).catch(() => {
        reject({
          sukses: false,
          pesan: 'Gagal di Pesan'
        })
      })
  })

exports.tampilPesanan = () =>
  new Promise((resolve, reject) => {
    pesananModel.find()
      .then(data => {
        resolve({
          sukses: true,
          pesan: 'Berhasil Memuat Data',
          data: data
        })
      }).catch(() => {
        reject({
          sukses: false,
          pesan: 'Gagal Memuat Data',
          data: []
        })
      })
  })

exports.edit = (data, id) =>
  new Promise((resolve, reject) => {
    pesananModel.updateOne({
      _id: objectId(id)
    }, data).then(() => {
      resolve({
        sukses: true,
        pesan: 'Berhasil Mengubah Data'
      })
    }).catch(() => {
      reject({
        sukses: false,
        pesan: 'Gagal Mengubah Data'
      })
    })
  })

exports.tampilSatuData = (id) =>
  new Promise((resolve, reject) => {
    pesananModel.findOne({
      _id: objectId(id)
    }).then((data) => {
      resolve(data)
    }).catch(() => reject({
      sukses: false,
      pesan: 'Gagal Memuat Data'
    }))
  })

exports.delete = (id) =>
  new Promise((resolve, reject) => {
    pesananModel.deleteOne({
      _id: objectId(id)
    }).then(() => {
      resolve({
        sukses: true,
        pesan: 'Berhasil Menghapus Data'
      })
    }).catch(() => {
      reject({
        sukses: false,
        pesan: 'Gagal Menghapus Data'
      })
    })
  })