import request from 'async-request'

export default async(req, res) => {

    const { query: { url: url } } = req

    let response = await request(url, { method: 'POST', data: { "_vercel_password" : "W3lcom3!" } })

    let cookie = response.headers && response.headers['set-cookie'] ? response.headers['set-cookie'][0] : ''
    cookie = cookie.substring(0, cookie.indexOf(';'))

    response = await request(url, { headers: { 'Cookie': cookie } })

    res.statusCode = 200
    res.end(response.body)
}
