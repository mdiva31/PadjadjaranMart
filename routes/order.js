const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// Create
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Product dikeranjang telah dihapus");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get User Order
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const Orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const Orders = await Order.find();
    res.status(200).json(Orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get monthly inconme

router.get("/income", verifyTokenAndAdmin, async (req, res)=>{

});

module.exports = router;
