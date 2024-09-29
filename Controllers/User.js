import user from "../Models/user-model.js";

export const postUserData = async (req, res) => {
  try {
    const { name,  password, email } = req.body;
    console.log(name, email, password);
    const isEmailExisted = await user.findOne({ email: email });
    if (isEmailExisted) {
      return res.status(400).json({ message: "Email is already existed" });
    }

    const userData = user({
      name,
      email,
      password,
    });

    await userData.save();
    return res
      .status(200)
      .json({ message: "data saved succesfully", success: true, userData });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getUsersData = async (req, res) => {
  try {
    const getUsers = await user.find();
    return res.status(200).json({ success: true, getUsers });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const getUserId = req.params.id;
    const userData = await user.findById(getUserId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ success: true, userData, message: "got user data" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateUserData = async (req, res) => {
  try {
    const getUserId = req.params.id;
    const userData = await user.findById(getUserId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    const { name, password, email } = req.body;
    userData.name = name;
    userData.password = password;
    userData.email = email;

    await userData.save();
    return res
      .status(200)
      .json({ message: "data updated succesfully", success: true, userData });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteUserData = async (req, res) => {
  try {
    const getUserId = req.params.id;
    const userData = await user.findByIdAndRemove(getUserId);
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "data deleted succesfully", success: true });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
