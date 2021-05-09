let data = []

const getData = (req, res) => {
  res.rest.success({ data })
}

const addData = (req, res) => {
  const { judul, keterangan } = req.body
  data.push({ id: Date.now(), judul: judul, keterangan: keterangan })
  res.rest.success('Berhasil ditambah')
}

const updateData = (req, res) => {
  const { id } = req.params
  const { judul, keterangan } = req.body
  const index = data.findIndex((d) => d.id == id)
  if (index === -1) return res.rest.badRequest('Data tidak ditemukan')
  data[index].judul = judul
  data[index].keterangan = keterangan
  res.rest.success('Berhasil diupdate')
}

const deleteData = (req, res) => {
  const { id } = req.params
  const index = data.findIndex((d) => d.id == id)
  if (index === -1) return res.rest.badRequest('Data tidak ditemukan')
  data.splice(index, 1)
  res.rest.success('Berhasil dihapus')
}

module.exports = {
  getData,
  addData,
  updateData,
  deleteData,
}
