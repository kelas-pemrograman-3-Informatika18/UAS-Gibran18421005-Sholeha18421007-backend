const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PesananSchema = new Schema({
  nama: {
    type: String
  },
  tanggal: {
    type: String
  },
  perawatan: {
    type: String
  },
  harga: {
    type: String
  }
})

module.exports = mongoose.model('pesanan', PesananSchema)