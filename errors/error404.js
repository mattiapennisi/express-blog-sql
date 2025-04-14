const error404 = (err, req, res, next) => {

    res.status(404).json({

        error: '404 not found',
        message: err.message
    })
}

module.exports = error404