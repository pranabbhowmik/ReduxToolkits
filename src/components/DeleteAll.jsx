import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/slice/UserSlice";

export const DeleteAllUser = () => {
    const dispatch = useDispatch()
    const removeall = () =>{
        dispatch(deleteUser())
    }
  return (
    <div className="flex justify-center mt-4">
      <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600" onClick={()=>removeall()}>
        Delete All Users
      </button>
    </div>
  );
};
