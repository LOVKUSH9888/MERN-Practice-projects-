const User = require("../../models/userSchema");

//READ
const getResource = async (req, res) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(404).json({ error: "No users found" });
    }

    // Extract resources from all users
    const allResources = users.map((user) => ({
      userId: user._id,
      resources: user.resources,
    }));

    res.json(allResources);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//We can also make findById also for a specfic ID finding

//UPDATE
const createResource = async (req, res) => {
  const { name, description } = req.body;

  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newResource = { name, description };
    user.resources.push(newResource);
    await user.save();

    res.json({
      message: "Resource created successfully",
      resource: newResource,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//UPDATE
const updateResource = (req, res) => {
  res.json({ message: "Resource updated successfully" });
};

//DELETE
const deleteResource = (req, res) => {
  res.json({ message: "Resource deleted successfully" });
};

// //UPDATE
// const updateResourceById = async (req, res) => {
//   const resourceId = req.params.id;
//   const { name, description } = req.body;

//   try {
//     const user = await User.findById(req.user.userId);

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const resourceIndex = user.resources.findIndex((r) => r._id.toString() === resourceId);

//     if (resourceIndex === -1) {
//       return res.status(404).json({ error: 'Resource not found' });
//     }

//     user.resources[resourceIndex] = { _id: resourceId, name, description };
//     await user.save();

//     res.json({ message: 'Resource updated successfully', resource: user.resources[resourceIndex] });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// //DELETE
// const deleteResourceById = async (req, res) => {
//   const resourceId = req.params.id;

//   try {
//     const user = await User.findById(req.user.userId);

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const resourceIndex = user.resources.findIndex((r) => r._id.toString() === resourceId);

//     if (resourceIndex === -1) {
//       return res.status(404).json({ error: 'Resource not found' });
//     }

//     user.resources.splice(resourceIndex, 1);
//     await user.save();

//     res.json({ message: 'Resource deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

module.exports = {
  getResource,
  createResource,
  updateResource,
  deleteResource,
};

/* const getResource = (req, res) => {
  res.json({ message: "You have access to this resource" });
};

const createResource = (req, res) => {
  res.json({ message: "Resource created successfully" });
};

const updateResource = (req, res) => {
  res.json({ message: "Resource updated successfully" });
};

const deleteResource = (req, res) => {
  res.json({ message: "Resource deleted successfully" });
};

module.exports = {
  getResource,
  createResource,
  updateResource,
  deleteResource,
}; */
