import React, { useEffect, useState } from "react";
import EmailBody from "../Email body/EmailBody";
import EmailList from "../Email body/EmailList";
import Sidebar from "../sidebar/Sidebar";
import {
  useGetAllEmailQuery,
  useGetEmailByIdQuery,
  useGetSearchMailQuery,
  useGetTrashEmailByIdQuery,
  useGetTrashMailQuery,
} from "../Services/Email/EmailApi";
import { queryString } from "../Components/Constants/constants";

export const Homepage = (trash) => {
  const [id, setId] = useState();
  const [sideBarChange, setSideBarChange] = useState(null);
  const [emailPageNumber, setEmailPageNumber] = useState(1);
  const [emailPageSize, setEmailPageSize] = useState(10);
  const [trashPageNumber, setTrashPageNumber] = useState(1);
  const [trashPageSize, setTrashPageSize] = useState(10);
  const [searchText, setSearchText] = useState();
  const [EmailListData, setEmailListData] = React.useState();
  const [mailBodyData, setmailBodyData] = useState();
  const GetAllEmailList = useGetAllEmailQuery(
    queryString({ params: { page: emailPageNumber, pageLimit: emailPageSize } })
  );
  const GetAllTrashEmailList = useGetTrashMailQuery(
    queryString({
      params: { page: trashPageNumber, pageLimit: trashPageSize },
    }),
    {
      skip: !trash.trash,
    }
  );
  const GetSearchData = useGetSearchMailQuery(
    queryString({ params: { title: searchText } }),
    {
      skip: !searchText,
    }
  );
  const maildata = useGetEmailByIdQuery(queryString({ params: { id: id } }), {
    skip: !id && trash.trash,
  });
  const TrashMailId = useGetTrashEmailByIdQuery(
    queryString({ params: { id: id } }),
    {
      skip: id === undefined || !trash.trash,
    }
  );
  useEffect(() => {
    if (trash.trash) {
      setEmailListData(GetAllTrashEmailList?.data);
    } else {
      setEmailListData(GetAllEmailList?.data);
    }
  }, [trash]);
  useEffect(() => {
    setEmailListData(GetSearchData?.data);
  }, [GetSearchData]);

  useEffect(() => {
    if (id && !trash.trash) {
      setmailBodyData(maildata?.data);
    } else if (trash.trash) {
      console.log(id, "-----", trash.trash, ".........");
      console.log(TrashMailId?.data, "TrashMailId?.data");
      setmailBodyData(TrashMailId?.data);
    }
  }, [maildata]);
  useEffect(() => {
    setmailBodyData([]);
  }, [sideBarChange]);
  console.log(trash, "kldksdsfjsdfhsdfjhsdkjfhsdkfh");
  return (
    <div className="grid grid-cols-12">
      <Sidebar setSideBarChange={setSideBarChange} />
      <EmailList
        setId={setId}
        trash={trash}
        EmailListData={EmailListData}
        searchText={searchText}
        setSearchText={setSearchText}
        pageNumber={emailPageNumber}
        setPageNumber={setEmailPageNumber}
      />
      <EmailBody id={id} mailBodyData={mailBodyData} />
    </div>
  );
};
