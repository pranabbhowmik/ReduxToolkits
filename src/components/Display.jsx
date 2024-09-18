import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeUser } from "../store/slice/UserSlice";

export const Display = () => {
    const dispatch = useDispatch()
  const data = useSelector((state) => state.user);
  console.log(data);
  const remove = (id) =>{
    dispatch(removeUser(id))
  }

  return (
    <ul className="list-none space-y-4">
      {data.map((user, id) => (
        <li
          key={id}
          className="bg-gray-100 rounded-lg shadow-md p-4 hover:bg-gray-200"
        >
          {user}<button className="w-10 ml-10" onClick={()=>remove(id)}><MdDelete/></button>
        </li>
      ))}
    </ul>
  );
};
