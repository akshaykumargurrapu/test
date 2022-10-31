function AuthenticationToken(res, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(403)

    jwt.verify(token, process.env.Access_Token, (err, user) => {
        if (err) return res.sendStatus(401)
        req.user = user
        next()
    })

}

export default AuthenticationToken