import React, { useEffect, useState } from "react";
import "./EmailList.css";
import {
  useGetAllEmailQuery,
  useGetSearchMailQuery,
  useGetTrashMailQuery,
} from "../Services/Email/EmailApi";
import { FiSearch, FiEdit } from "react-icons/fi";
import { LABEL, queryString } from "../Components/Constants/constants";
import { BsDot } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
const EmailList = ({ setId, trash ,EmailListData,searchText,setSearchText , pageNumber ,setPageNumber}) => {
  
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  
  const handleAllDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      background: "#2d3748",
      color: "#cbd5e0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your Mail has been deleted.", "success");
        console.log("confirmed");
        // await deleteMailApi({ id: data?.id });
        // maildata.refetch();
      }
    });
  };
  console.log(EmailListData?.totalcount);
  const count = Math.ceil(EmailListData?.totalcount/10)
  const handleIncrement = ()=>{
    console.log(count);
    if(pageNumber < count)
    setPageNumber(pageNumber+1)
  }
  const handleDecrement = ()=>{
    console.log(count);
    if(pageNumber < count)
    setPageNumber(pageNumber+1)
  }
  // useEffect(() => {
  //   if (GetAllEmailList?.isError) {
  //     setState({ ...state, open: true });
  //   }
  // }, [GetAllEmailList]);
  
  console.log(EmailListData, "data");
  return (
    <>
      <div
        className="text-white col-span-4 border-l-2 border-solid border-zinc-950"
        style={{ backgroundColor: "rgb(28,28,28)" }}
      >
        <div className="ms-5 mt-5">
          <p className="text-white text-base text-lg text-xl ">
            {trash.trash ? LABEL?.TRASH : LABEL?.INBOX}
          </p>
          <label className="text-zinc-400">
            {EmailListData?.totalcount} {LABEL?.MESSAGE}
            {EmailListData?.unreadCount > 0
              ? `,${EmailListData?.unreadCount} ${LABEL?.UNREAD}`
              : ""}
          </label>
        </div>
        <div>
          <div className="flex items-center py-5">
            <FiSearch className="text-gray-400 ms-4 absolute " />
            <input
              className="w-10/12 gbinput text-white rounded-md py-3 pl-8 pr-3 ms-2 sm:text-sm outline-none divide-y"
              placeholder="Search"
              type="text"
              name="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="gbinput p-3 ms-2 rounded-md ">
              {trash.trash ? (
                <FaTrash className="me-2" onClick={() => handleAllDelete()} />
              ) : (
                <FiEdit />
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="relative inline-block">
              <select className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none">
                <option value="option1">10</option>
                <option value="option2">20</option>
                <option value="option3">30</option>
              </select>
            </div>
            <div className="flex items-center ml-4">
              <svg
                className="w-6 h-6 text-white-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              {pageNumber}
              <svg
                className="w-6 h-6 text-white-600 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={()=>handleIncrement()}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </div>

          <hr style={{ borderColor: "gray" }} />
          <div className="scrollable-grid-container">
            <div className="grid-container grid grid-cols-12 mt-2 ">
              {EmailListData?.data?.map((value) => (
                <>
                  <div className="item2 col-span-2 p-5">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                      <svg
                        className="absolute w-12 h-12 text-gray-400 -left-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="item2 col-span-10 cursor-pointer "
                    onClick={() => {
                      setId(value?.id);
                    }}
                  >
                    <div className="grid grid-cols-12 ">
                      <div className="col-span-9">
                        <p className="mt-3">{value?.title}</p>
                        <p className="text-zinc-400">
                          {value?.subject.length > 37
                            ? `${value?.subject.substring(0, 37)}`
                            : value?.subject}
                        </p>
                      </div>
                      <div className="col-span-3 ms-6 text-zinc-500 text-xs flex">
                        <label className="mt-5">Aug 17</label>

                        {value.Read === 0 ? (
                          <BsDot
                            className="mt-3 text-md text-sky-500"
                            size={30}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <p className="text-zinc-600">
                      {value.text.length > 90
                        ? `${value.text.substring(0, 90)}...`
                        : value.text}
                    </p>
                    <hr
                      className="mt-1 bg-zinc-600"
                      style={{ borderColor: "transparent" }}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailList;
