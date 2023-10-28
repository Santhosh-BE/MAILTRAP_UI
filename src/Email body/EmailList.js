import React, { useEffect, useState } from "react";
import "./EmailList.css";
import {
  useDeleteAllMailApiMutation,
  useGetAllEmailQuery,
  useGetSearchMailQuery,
  useGetTrashMailQuery,
} from "../Services/Email/EmailApi";
import { FiSearch, FiEdit } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { isArray } from "lodash";
import { LABEL } from "../Constants/constants";
const EmailList = ({
  setId,
  trash,
  deleteAll,
  EmailListData,
  searchText,
  setSearchText,
  pageNumber,
  setPageNumber,
}) => {
  console.log(trash,"listtrash");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const handleAllDelete = () => {
    Swal.fire({
      title: "Are you sure to delete all?",
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
        await deleteAll();
        // maildata.refetch();
      }
    });
  };
  const count = Math.ceil(EmailListData?.totalcount / 10);
  const handleIncrement = () => {
    if (pageNumber < count) setPageNumber(pageNumber + 1);
  };
  const handleDecrement = () => {
    if (pageNumber <= count && pageNumber != 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  // useEffect(() => {
  //   if (GetAllEmailList?.isError) {
  //     setState({ ...state, open: true });
  //   }
  // }, [GetAllEmailList]);
console.log(EmailListData,"EmailListData");
  return (
    <>
      <div
        className="text-white col-span-4 border-l-2 border-solid border-zinc-950"
        style={{ backgroundColor: "rgb(28,28,28)" }}
      >
        <div className="ms-5 mt-5">
          <p className="text-white text-base text-lg text-xl ">
            {trash ? LABEL?.TRASH : LABEL?.INBOX}
          </p>
          <label className="text-zinc-400" data-testid="total-count">
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
              {trash ? (
                <FaTrash className="me-2" onClick={() => handleAllDelete()} />
              ) : (
                <FiEdit />
              )}
            </div>
          </div>
          {EmailListData?.totalcount <= 1 || searchText?.length>0 ? (
            ""
          ) : (
            <div className="flex justify-between">
              <div className="relative inline-block">
                <select className="px-3 py-2 text-white-700 bg-gray-800 rounded-lg focus:outline-none">
                  <option value="option1">10</option>
                  <option value="option2">20</option>
                  <option value="option3">30</option>
                </select>
              </div>

              <div className="flex items-center ml-4">
                {pageNumber != 1 && (
                  <svg
                    className="w-6 h-6 text-white-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleDecrement()}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                )}
                <div className="gbinput p-3 ms-2 rounded-md ">{pageNumber}</div>
                {pageNumber != count && (
                  <svg
                    className="w-6 h-6 text-white-600 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleIncrement()}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          )}

          <hr style={{ borderColor: "gray" }} />
          <div className="scrollable-grid-container">
            <div className="grid-container grid grid-cols-12 mt-2 ">
              {EmailListData &&
              isArray(EmailListData?.data) &&
              EmailListData?.data?.length > 0 ? (
                EmailListData?.data?.map((value) => (
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
                ))
              ) : (
                <div
                  className="text-white col-span-12 border-l-2 border-solid border-zinc-950 flex flex-col items-center justify-center h-3/2"
                  style={{ backgroundColor: "rgb(28,28,28)" }}
                >
                  <img
                    style={{ width: "120px", height: "120px" }}
                    src="https://res-h3.public.cdn.office.net/owamail/20230804005.15/scripts/../resources/images/illustration_mail-hash-e2914995.m.svg"
                    alt=""
                  />
                  <p className="mt-2">No Data Found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailList;
