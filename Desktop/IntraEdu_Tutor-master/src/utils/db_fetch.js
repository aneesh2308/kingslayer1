import db from "../config/fbconfig";

const getAdmin = async (id) => {
  if (!id) return null;

  const admin = await db.collection("admins").doc(id).get();

  return {
    ...admin.data(),
    id: admin.id,
  };
};

const getUser = async (id) => {
  if (!id) return null;

  const user = await db.collection("users").doc(id).get();

  return {
    ...user.data(),
    id: user.id,
  };
};

const getInstitute = async (id) => {
  if (!id) return null;

  const institute = await db.collection("institutes").doc(id).get();

  return {
    ...institute.data(),
    id: institute.id,
  };
};

export { getAdmin, getInstitute, getUser };
