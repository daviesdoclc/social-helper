import exec from 'await-exec'

export default async(req, res) => {

    const url = 'https://worldcat-org.now.sh/en/title/70775700'

    let {stdout:cookie} = await exec('curl -s -D - -o /dev/null -X POST -d \'_vercel_password=W3lcom3!\' ' + url + ' | grep -i Set-Cookie | grep _vercel_jwt | awk {\'print $2\'}')

    cookie = cookie.replace(';\n', '')

    console.log("cookie: ", cookie)

    const {stdout} = await exec('curl -H \'Cookie: ' + cookie + '\' ' + url)

    console.log("stdout: ", stdout)

    res.statusCode = 200
    res.end(stdout)
}
