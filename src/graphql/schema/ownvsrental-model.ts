const mongoose = require('mongoose');
const { Schema } = mongoose;

const ownVsRentalSchema = new Schema({
  commonData: {
    userId: Number,
    datasetId: {type: Schema.Types.ObjectId, ref: 'dataSet'},
    vehicleTypeId: {type: Schema.Types.ObjectId, ref: 'list'},
    description: String,
    fuelTypeId: {type: Schema.Types.ObjectId, ref: 'list'},
    workingDays: Number,
    fuelPrice: Number,
    fuelConsumption: Number,
    dailyMileage: Number,
  },
  own: {
    acquisitionValue: Number,
    tyresMileage: Number,
    tyresCost: Number,
    numOfBreakdowns: Number,
    avgBreakdownCost: Number,
    laborCost: Number,
    adminCost: Number,
    insuranceCost: Number,
    maintenanceCost: Number,
    repairsCost: Number,
    roadTaxes: Number,
    depreciationPeriod: Number,
    disposalMethod: {type: Schema.Types.ObjectId, ref: 'list'},
    disposalValue: Number
  },
  rent: {
    dailyRentalPrice: Number,
    isRentAllInclusive: Boolean,
    isRentalMaintenanceSeparate: Boolean,
    rentalMaintenanceCost: Number,
    isRentalRepairSeparate: Boolean,
    rentalRepairCost: Number,
    isRentalLaborSeparate: Boolean,
    rentalLaborCost: Number,
    isRentalAdminSeparate: Boolean,
    rentalAdminCost: Number
  },
},{ timestamps: true, });

export const OwnVsRental = mongoose.model('ownVsRental', ownVsRentalSchema); 