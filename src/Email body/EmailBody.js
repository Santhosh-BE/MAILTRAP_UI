import React, { useEffect, useState } from "react";
import "./EmailBody.css";
import { BsInfoCircleFill, BsTrashFill } from "react-icons/bs";
import { useDeleteMailApiMutation, useGetEmailByIdQuery } from "../Services/Email/EmailApi";
import { IoMdMailUnread } from "react-icons/io";

import { LABEL, label, queryString } from "../Components/Constants/constants";
import Model from "../Components/Constants/model";

const EmailBody = ({ id }) => {
    const [open, setOpen] = useState(false);
    const [deleteMailApi, DeleteMailApiData] = useDeleteMailApiMutation();
    const maildata = useGetEmailByIdQuery(queryString({ params: { id: id } }));
    useEffect(() => {
        if (id) {
            maildata.refetch();
        }
    }, [id]);
    const handleDelete = async (data) => {
        await deleteMailApi({ id: data });
        maildata.refetch();
    };
    return (
        <>
            <Model open={open} setOpen={setOpen} data={maildata} btnvalue2={"OK, Got It"}/>
            {maildata?.data && maildata?.data?.length ? (
                maildata?.data.map((data) => {
                    return (
                        <div className="text-white col-span-6 border-l-2 border-solid border-zinc-950 " style={{ backgroundColor: "rgb(28,28,28)" }}>
                            <div className="p-5 flex space-x-5  ms-3">
                                <BsTrashFill
                                    onClick={() => {
                                        handleDelete(data?.id);
                                    }}
                                    className="text-zinc-500 cursor-pointer"
                                />
                                <BsInfoCircleFill
                                    onClick={() => {
                                        setOpen(true);
                                    }}
                                    className="text-zinc-500 cursor-pointer"
                                />
                                <IoMdMailUnread className="text-zinc-500 cursor-pointer" />
                            </div>
                            <hr className="mt-1 bg-zinc-600" style={{ borderColor: "transparent" }} />
                            <div className="grid grid-cols-12">
                                <div className="p-5 col-span-1">
                                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                        <svg
                                            class="absolute w-12 h-12 text-gray-400 -left-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="col-span-11 p-5 ">
                                    <p>{data?.title}</p>
                                    <p className="text-sm text-neutral-500">to: {data?.to}</p>
                                </div>
                            </div>
                            <div className="p-4 ms-1 scrollable-grid-container" style={{ overflowY: "auto", maxHeight: "500px" }}>
                                <p className="text-xl">{data?.subject}</p>
                                <p className="text-sm mt-3 text-neutral-500">{data?.text}</p>
                                <p className="text-neutral-500"></p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div
                    className="text-white col-span-6 border-l-2 border-solid border-zinc-950 flex flex-col items-center justify-center h-screen"
                    style={{ backgroundColor: "rgb(28,28,28)" }}
                >
                    <img
                        style={{ width: "120px", height: "120px" }}
                        src="https://res-h3.public.cdn.office.net/owamail/20230804005.15/scripts/../resources/images/illustration_mail-hash-e2914995.m.svg"
                        alt=""
                    />
                    <p className="mt-2">{LABEL?.SELECT}</p>
                    <p className="text-neutral-500">{LABEL?.NOTHING}</p>
                </div>
            )}
        </>
    );
};

export default EmailBody;
