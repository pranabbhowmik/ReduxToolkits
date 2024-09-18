import React from "react";
import { DeleteAllUser } from "./DeleteAll";
import { fakedata } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSlice";
import { Display } from "./Display";


const UserDetails = () => {


  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };
  return (
    <div className="mx-8 my-4">
      <div className="content">
        <div className="admin-table flex justify-between flex-wrap my-16">
          <div className="admin-subtitle text-4xl">List of User Details</div>
          <button
            className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => addNewUser(fakedata())} // Wrap the function call inside an arrow function
          >
            Add New Users
          </button>
        </div>
        <ul className="list-none flex flex-col">
        <Display/>
        </ul>
        <hr className="my-4" />
        <DeleteAllUser />
      </div>
    </div>
  );
};

export default UserDetails;
