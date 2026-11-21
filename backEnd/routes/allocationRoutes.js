import express from "express";

import {
  createAllocation
} from "../controllers/allocationController.js";

import {
  protect,
  verifiedHospitalOnly
} from "../middleware/authMiddleware.js";


const router = express.Router();


router.post(
  "/allocations",

  protect,
  verifiedHospitalOnly,

  createAllocation
);


export default router;