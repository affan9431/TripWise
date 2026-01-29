const Trip = require("../models/tripModel");
const AppError = require("../utils/AppError");

// TODO: MAKE THIS FILTER TRIP FUNCTION ACCURATE

exports.getFilterTrips = async (req, res, next) => {
  try {
    const { budget, tripStyle, groupSize } = req.query;

    console.log(budget, tripStyle);

    let query = {
      $and: [
        { estimatedCost: { $lte: Number(budget) } },
        { tripStyle: tripStyle },
        { hotels: { $elemMatch: { maxMembersPerRoom: { $eq: groupSize } } } },
      ],
    };

    const trips = await Trip.find(query);
    // console.log(trips);
    res.status(200).json({
      status: "Success",
      message: "Fliter Trips Successfully",
      data: trips,
    });
  } catch (error) {
    console.log(error);
    return next(new AppError("Filter Trip Error!", 404));
  }
};
