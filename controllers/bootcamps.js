const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

//@desc     Get all Bootcamps function
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@desc     Get single Bootcamp function
//@route    GET /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return next(
        //correct format not in DB
        new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
    //not correct format
    //   new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404)
    //);
  }
};

//@desc     Create new Bootcamp function
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    //hitting dup records return a 400
    next(err);
  }
};

//@desc     Update Bootcamp function
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return next(
        //correct format not in DB
        new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
  }
};

//@desc     delete bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return next(
        //correct format not in DB
        new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
