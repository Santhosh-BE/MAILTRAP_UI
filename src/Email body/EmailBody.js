import React from "react";
import "./EmailBody.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { BsInfoCircleFill, BsTrashFill } from "react-icons/bs";
import { useDeleteMailApiMutation } from "../Services/Email/EmailApi";
import { IoMdMailUnread } from "react-icons/io";

const EmailBody = ({ data }) => {
    const navigate = useNavigate();
    const [deleteMailApi, DeleteMailApiData] = useDeleteMailApiMutation();

    const goToMessage = (messageId) => {
        navigate(`/mailbox/${messageId}`);
    };
    const handleDelete = (id) => {
        console.log(id, "id");
        deleteMailApi({ id: id.toString() });
    };
    return (
        <>
            <div className="text-white col-span-6 border-l-2 border-solid border-zinc-950 " style={{ backgroundColor: "rgb(28,28,28)" }}>
                <div className="p-5 flex space-x-5  ms-3">
                    <BsTrashFill className="text-zinc-500 cursor-pointer" />
                    <BsInfoCircleFill className="text-zinc-500 cursor-pointer" />
                    <IoMdMailUnread className="text-zinc-500 cursor-pointer" />
                </div>
                <hr className="mt-1 bg-zinc-600" style={{ borderColor: "transparent" }} />
                <div className="grid grid-cols-12">
                    <div className="p-5 col-span-1">
                        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="col-span-11 p-5 ">
                        <p>Mark Andrew</p>
                        <p className="text-sm text-neutral-500">to: Test@gmail.com</p>
                    </div>
                </div>
                <div className="p-4 ms-1 scrollable-grid-container" style={{ overflowY: "auto", maxHeight: "500px" }}>
                    <p className="text-xl">Documnet Meeting about test </p>
                    <p className="text-sm mt-3 text-neutral-500">
                        Porta lorem mollis aliquam ut porttitor leo. Quisque id diam vel quam elementum pulvinar etiam non. Ac odio tempor orci dapibus ultrices
                        in iaculis. Tortor consequat id porta nibh venenatis cras sed felis eget. Adipiscing enim eu turpis egestas pretium aenean pharetra
                        magna. Nec feugiat nisl pretium fusce id velit. Nisl suscipit adipiscing bibendum est.Malesuada nunc vel risus commodo viverra maecenas
                        accumsan. Nisl nisi scelerisque eu ultrices vitae auctor. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.
                        Aliquam malesuada bibendum arcu vitae. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Pellentesque habitant morbi
                        tristique senectus. Est pellentesque elit ullamcorper dignissim. Accumsan tortor posuere ac ut consequat. Fusce ut placerat orci nulla
                        pellentesque dignissim. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Sed libero enim sed faucibus turpis in eu mi,
                        Quis auctor elit sed vulputate mi sit amet mauris. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Donec ac odio tempor
                        orci dapibus ultrices in iaculis.Porta lorem mollis aliquam ut porttitor leo. Quisque id diam vel quam elementum pulvinar etiam non. Ac
                        odio tempor orci dapibus ultrices in iaculis. Tortor consequat id porta nibh venenatis cras sed felis eget. Adipiscing enim eu turpis
                        egestas pretium aenean pharetra magna. Nec feugiat nisl pretium fusce id velit. Nisl suscipit adipiscing bibendum est.Malesuada nunc vel
                        risus commodo viverra maecenas accumsan. Nisl nisi scelerisque eu ultrices vitae auctor. Suspendisse interdum consectetur libero id
                        faucibus nisl tincidunt eget. Aliquam malesuada bibendum arcu vitae. Elementum eu facilisis sed odio morbi quis commodo odio aenean.
                        Pellentesque habitant morbi tristique senectus. Est pellentesque elit ullamcorper dignissim. Accumsan tortor posuere ac ut consequat.
                        Fusce ut placerat orci nulla pellentesque dignissim.Porta lorem mollis aliquam ut porttitor leo. Quisque id diam vel quam elementum
                        pulvinar etiam non. Ac odio tempor orci dapibus ultrices in iaculis. Tortor consequat id porta nibh venenatis cras sed felis eget.
                        Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Nec feugiat nisl pretium fusce id velit. Nisl suscipit adipiscing
                        bibendum est.Malesuada nunc vel risus commodo viverra maecenas accumsan. Nisl nisi scelerisque eu ultrices vitae auctor. Suspendisse
                        interdum consectetur libero id faucibus nisl tincidunt eget. Aliquam malesuada bibendum arcu vitae. Elementum eu facilisis sed odio
                        morbi quis commodo odio aenean. Pellentesque habitant morbi tristique senectus. Est pellentesque elit ullamcorper dignissim. Accumsan
                        tortor posuere ac ut consequat. Fusce ut placerat orci nulla pellentesque dignissim.
                    </p>
                    <p className="text-neutral-500"></p>
                </div>
            </div>
        </>
    );
};

export default EmailBody;
