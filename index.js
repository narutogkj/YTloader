const express = require('express')
const ytdl = require('ytdl-core')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  const url = req.query.d
  res.header('Content-Disposition', `attachment; filename="my${Date.now()}.mp4"`)
  ytdl(url, { format: 'mp4' }).pipe(res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})