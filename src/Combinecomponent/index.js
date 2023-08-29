import React, { useEffect, useState } from "react";
import EmailBody from "../Email body/EmailBody";
import EmailList from "../Email body/EmailList";
import Sidebar from "../sidebar/Sidebar";
import {
  useDeleteAllMailApiMutation,
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
  const [EmailListData, setEmailListData] = React.useState([]);
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
    queryString({ params: { title: searchText } })
  );
  const maildata = useGetEmailByIdQuery(queryString({ params: { id: id } }), {
    skip: !id && id === null && trash.trash,
  });
  const TrashMailId = useGetTrashEmailByIdQuery(
    queryString({ params: { id: id } }),
    {
      skip: id === undefined && id === null && !trash.trash,
    }
  );
  const [DeleteAllApi, DeleteAllApiData] = useDeleteAllMailApiMutation();

  useEffect(() => {
    if (searchText?.length === 0) {
      GetAllTrashEmailList.refetch();
    }
  }, [searchText]);
  useEffect(() => {
    if (trash.trash) {
      setEmailListData(GetAllTrashEmailList?.data);
    } else {
      setEmailListData(GetAllEmailList?.data);
    }
  }, [trash, GetAllTrashEmailList, GetAllEmailList]);
  useEffect(() => {
    setEmailListData(GetSearchData?.data);
  }, [GetSearchData]);
  useEffect(() => {
    GetAllTrashEmailList.refetch();
  }, [trashPageNumber, DeleteAllApiData]);
  useEffect(() => {
    if (id && !trash.trash) {
      setmailBodyData(maildata?.data);
    } else if (id && trash.trash) {
      setmailBodyData(TrashMailId?.data);
    }
  }, [maildata, TrashMailId, id]);
  useEffect(() => {
    setmailBodyData([]);
    setId(null);
    GetAllTrashEmailList.refetch();
    GetAllEmailList.refetch();
  }, [sideBarChange]);
  useEffect(() => {
    if (
      DeleteAllApiData?.isSuccess &&
      DeleteAllApiData?.data?.data === "No data found"
    ) {
      setmailBodyData([]);
    }
  }, [DeleteAllApiData]);
  return (
    <div className="grid grid-cols-12">
      <Sidebar setSideBarChange={setSideBarChange} />
      <EmailList
        setId={setId}
        trash={trash}
        EmailListData={EmailListData}
        searchText={searchText}
        setSearchText={setSearchText}
        pageNumber={trash.trash ? trashPageNumber : emailPageNumber}
        setPageNumber={trash.trash ? setTrashPageNumber : setEmailPageNumber}
        deleteAll={DeleteAllApi}
        getAllMail={maildata}
      />
      <EmailBody
        id={id}
        mailBodyData={DeleteAllApiData?.isSuccess ? [] : mailBodyData}
        setmailBodyData={setmailBodyData}
      />
    </div>
  );
};
