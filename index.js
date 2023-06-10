const express = require('express')
const ytdl = require('ytdl-core')
const app = express()
const port = 3000

app.get('/download', (req, res) => {
  const url = req.query.url
  const name = req.query.url
  res.header('Content-Disposition', `attachment; filename="${name}.mp4"`)
  ytdl(url, { format: 'mp4' }).pipe(res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})