import { updateProfileThunk } from "@/store/authThunk";
import { useDispatch } from "react-redux";

const useProfile = () => {
  const dispatch = useDispatch();

  const updateProfile = async (payload) => {
    await dispatch(updateProfileThunk(payload)).unwrap();
  };

  return {
    updateProfile,
  };
};

export default useProfile;
