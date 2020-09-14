
//@desc     Get all Bootcamps function
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: 'Show all bootcamps' });
}

//@desc     Get single Bootcamp function
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}

//@desc     Create new Bootcamp function
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: 'Create new bootcamp' });
}

//@desc     Update Bootcamp function
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}

//@desc     delete bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
}