import React, { useEffect, useState } from "react";
import withHoc from "../../../Components/Hoc";
import CustomModal from "../../../Components/Modal";
import ShowsForm from "./ShowsForm";
import { apiCall, getApiCall } from "../../../Utilites/Api";
import { ApiUrl } from "../../../Constants";
import { toast } from "react-toastify";
import { convertToDbFormat } from "../../../Utilites/Date";
import moment from "moment";

const ShowItem = ({ item }) => {
  return (
    <div className="border-2 border-primary rounded-lg p-5 mb-8 shadow-lg">
      <div className="flex items-center flex-row justify-between">
        <div className="flex flex-col">
          <div className="border border-primary rounded-lg w-24 h-26">
            <div className="flex flex-col gap-3 py-2">
              <p className="font-pop text-xs text-primary text-center">
                {moment(item.start_date).format('MMMM')}
              </p>
              <div className="bg-primary py-2">
                <p className="font-pop text-lg text-white  font-medium text-center">
                  24
                </p>
                <p className="font-pop text-xs text-white text-center">{moment(item.start_date).format('dddd')}</p>  
              </div>
              <p className="font-pop text-xs text-primary text-center">{moment(item.start_date).format('YYYY')}</p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center border border-primary rounded-lg w-24 h-14 mt-7">
            <p className="font-pop text-[10px] text-secondary  font-medium text-center">
              Ticket sales
            </p>
            <p className="font-pop text-sm text-secondary  font-medium text-center">
              2560
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-6 border border-primary rounded-lg p-7">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-sm text-primary font-pop">
              {item.venue_name}
            </p>
            <p className="text-xs text-secondary font-pop">
              {item.venue_address}
            </p>
            <div className="flex gap-8 items-center flex-row">
              <div>
                <p className="text-xs text-secondary py-1 font-pop">Capacity</p>
                <p className="text-xs font-semibold text-primary font-pop">
                {item.show_capacity}
                </p>
              </div>
              <div>
                <p className="text-xs text-secondary py-1 font-pop">
                  No of Shows
                </p>
                <p className="text-xs font-semibold text-primary font-pop">{item.no_of_shows} </p>
              </div>
            </div>
            <div className="flex gap-8 items-center flex-row">
              <div>
                <p className="text-xs text-secondary py-1 font-pop">
                  Apparel tax
                </p>
                <p className="text-xs font-semibold text-primary font-pop">
                  {item.tax_apparel}%
                </p>
              </div>
              <div>
                <p className="text-xs text-secondary py-1 font-pop">
                  Musix tax
                </p>
                <p className="text-xs font-semibold text-primary font-pop">
                  {item.tax_music}%
                </p>
              </div>
              <div>
                <p className="text-xs text-secondary py-1 font-pop">
                  Other tax
                </p>
                <p className="text-xs font-semibold text-primary font-pop">
                  {item.tax_others}%
                </p>
              </div>
            </div>
          </div>
          <div className="border-l border-primary" />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-sm text-primary font-pop">Hall Fee</p>
            <p className="text-xs text-secondary font-pop"></p>
            <div className="flex gap-8 items-center flex-row">
              <div>
                <p className="text-xs text-secondary py-1 font-pop">Apparel</p>
                <p className="text-xs font-semibold text-primary font-pop">
                  6%
                </p>
              </div>
              <div>
                <p className="text-xs text-secondary py-1 font-pop">Other</p>
                <p className="text-xs font-semibold text-primary font-pop">
                  6%
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center flex-row">
              <div>
                <p className="text-xs text-secondary py-1 font-pop">Music</p>
                <p className="text-xs font-semibold text-primary font-pop">
                  6%
                </p>
              </div>
              <div>
                <p className="text-xs text-secondary py-1 font-pop">Vend</p>
                <p className="text-xs font-semibold text-primary font-pop">
                  6%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <textarea
            className="border border-primary rounded-lg p-4 placeholder-secondary font-pop text-sm w-[740px]"
            rows={8}
            placeholder="Notes . . ."
          >{item.note}</textarea>
        </div>
        <div className="flex flex-col gap-4 border border-primary rounded-lg p-7">
          <div className="w-24 h-8 bg-primary flex justify-center items-center rounded-md">
            <p className="font-pop text-white text-xs">Edit</p>
          </div>

          <div className="w-24 h-8 bg-grey flex justify-center items-center rounded-md">
            <p className="font-pop text-secondary text-xs">Postpone</p>
          </div>

          <div className="w-24 h-8 bg-grey flex justify-center items-center rounded-md">
            <p className="font-pop text-secondary text-xs">Cancel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Shows = () => {
  const [modalProps, setModalProps] = useState({
    visible: false,
    title: "",
    key: "",
  });
  const [venueList, setVenueList] = useState([]);
  const [showsList, setShowsList] = useState([]);

  useEffect(() => {
    getVenueList();
    getShowsList();
  }, []);

  const getVenueList = async () => {
    const resp = await getApiCall(ApiUrl.searchVenue);
    if (resp.status) {
      setVenueList(resp.data);
    }
  };

  const getShowsList = async () => {
    const resp = await getApiCall(ApiUrl.showsList);
    if (resp.status) {
      setShowsList(resp.data);
    }
  }

  const openAddShowModal = () => {
    setModalProps({
      visible: true,
      title: "Add Show",
      key: "addShow",
    });
  };

  const closeModal = () => {
    setModalProps({
      visible: false,
      title: "",
      key: "",
    });
  };

  const addNewShow = async ({ ...payload }) => {
    payload.venue_name = payload.venue_address.split(",")[0];
    payload.venue_address = payload.venue_address.split(",")[1];
    payload.tax_music = payload.tax_merch;
    payload.start_date = convertToDbFormat(payload.startDate);
    if(payload.end_date){
      payload.end_date = convertToDbFormat(payload.end_date);

    }
    const resp = await apiCall(ApiUrl.addShow, payload);
    if (resp.status) {
      closeModal();
      getVenueList();
      toast.success("Show added successfully");
    } else {
      toast.error("Show not added. Please try later");
    }
    console.log(resp);
  };

  return (
    <>
      <CustomModal handleModalClose={closeModal} modalProps={modalProps}>
        <ShowsForm
          handleModalClose={closeModal}
          venueList={venueList}
          handleAddShow={addNewShow}
        />
      </CustomModal>
      <div className="bg-grey px-7 py-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-8">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex justify-center items-center border border-secondary h-7 w-7 rounded-lg">
                <p className="font-pop text-xs text-secondary">29</p>
              </div>
              <p className="font-pop text-xs text-primary">Total Shows</p>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex justify-center items-center border border-secondary h-7 w-7 rounded-lg">
                <p className="font-pop text-xs text-secondary">29</p>
              </div>
              <p className="font-pop text-xs text-secondary">Shows left</p>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex justify-center items-center border border-secondary h-7 w-7 rounded-lg">
                <p className="font-pop text-xs text-secondary">29</p>
              </div>
              <p className="font-pop text-xs text-secondary">Cancelled</p>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex justify-center items-center border border-secondary h-7 w-7 rounded-lg">
                <p className="font-pop text-xs text-secondary">29</p>
              </div>
              <p className="font-pop text-xs text-secondary">Completed</p>
            </div>
          </div>

          <div
            className="flex flex-row justify-center items-center bg-primary w-40 h-9 rounded-lg gap-2 cursor-pointer"
            onClick={openAddShowModal}
          >
            <img src={"/plus.png"} className="w-3 h-3 object-contain" />
            <p className="font-pop text-xs text-white">Add New Show</p>
          </div>
        </div>
      </div>
      <div className="bg-white px-7 py-4">
        {
          showsList && showsList.length> 0 && showsList.map(item => (
            <ShowItem item={item} />
          ))
        }
       
      </div>
    </>
  );
};

export default withHoc(Shows, { showDate: false });
