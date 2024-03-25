import User from "../mongoDB/models/user";
import { connectToDB } from "../mongoDB/connect";

export const createOrUpdateUser = async (
  id,
  email_addresses,
  first_name,
  last_name,
  image_url,
  username
) => {
  try {
    await connectToDB();
    const user = await user.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          clerkId: id,
          firstName: first_name,
          lastName: last_name,
          username: username,
          email: email_addresses[0].email_addresses,
          profilePhoto: image_url,
        },
      },
      { upset: true, new: true }
    );

    await user.save();

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connectToDB();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log(error);
  }
};
