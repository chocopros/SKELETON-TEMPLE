const adminValidate = ( req, res, next ) => {
    const role = req.user.role;

    if (role !== 'admin') {
        return res.status(401).json({message: 'Access Deny!!!, no permitions'})
    } else {
        return next()
    };
};

module.exports = adminValidate;