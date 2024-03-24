import React, { useEffect, useState } from "react";
import withHoc from "../../../Components/Hoc";
import CustomModal from "../../../Components/Modal";
import ToursForm from "./ToursForm";
import LoadingOverlay from "react-loading-overlay";
import { BeatLoader } from "react-spinners";
import { AppData, TableHeaderData } from "../../../Constants/AppData";
import { apiCall, getApiCall } from "../../../Utilites/Api";
import { ApiUrl } from "../../../Constants/Api";
import { toast } from "react-toastify";
import {
  covertToReadableFormat,
  convertToDbFormat,
} from "../../../Utilites/Date";
import { AppImages } from "../../../Constants/Images";
import { useNavigate  } from "react-router-dom";
import { ReactComponent as CurrentTours } from "../../../Assets/current_tours.svg";
import { ReactComponent as CompletedTours } from "../../../Assets/completed_tours.svg";
import { ReactComponent as ClosedTours } from "../../../Assets/closed_tours.svg";

export const TableData = ({ data, hanldeTourClick }) => {
  return (
    <div class="shadow overflow-hidden rounded-lg border border-primary ">
      <table className="w-full bg-white" cellPadding={20}>
        <thead className="border-b shadow-md">
          <tr>
            {TableHeaderData.tours.map((item) => (
              <th>
                <p
                  className="font-pop text-sm text-secondary font-medium text-center"
                  key={item.id}
                >
                  {item.title}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="shadow-md">
          {data &&
            data.list.length > 0 &&
            data.list.map((item, index) => (
              <tr
                className={`border-secondary border-b' ${
                  index % 2 !== 0 && "bg-grey"
                }`}
                onClick={() => hanldeTourClick(item)}
              >
                <td>
                  <p className="font-pop text-xs text-secondary text-center font-medium">
                    {index + 1}
                  </p>
                </td>
                <td>
                  <p className="font-pop text-xs text-secondary text-center font-medium">
                    {item.tour_name}
                  </p>
                </td>
                <td>
                  <p className="font-pop text-xs text-secondary text-center font-medium">
                    {covertToReadableFormat(item.start_date)} -{" "}
                    {covertToReadableFormat(item.end_date)}
                  </p>
                </td>
                {/* <td>
                  <p className="font-pop text-xs text-secondary text-center font-medium">
                    19 Oct 23 - 23 Oct 23
                  </p>
                </td> */}
                <td>
                  <div
                    className={`${
                      item.vend_fee === "Enable" ? "bg-success" : "bg-danger"
                    } bg-opacity-20 p-1 rounded-lg`}
                  >
                    <p
                      className={`font-pop text-xs ${
                        item.vend_fee === "Enable"
                          ? "text-success"
                          : "text-danger"
                      } text-center font-medium`}
                    >
                      {item.vend_fee}
                    </p>
                  </div>
                </td>
                <td>
                  <p className="font-pop text-xs text-secondary text-center font-medium">
                    {item.tour_type}
                  </p>
                </td>
                <td>
                  <div className="flex flex-row justify-center  items-center gap-10">
                    <p className="font-pop text-xs text-secondary text-center font-medium w-20">
                      {item.report_currency}
                    </p>
                    <div className="flex justify-center items-center bg-primary w-7 h-7 border border-secondary rounded-md">
                      <img
                        src={AppImages.edit}
                        className="w-5 h-5 object-contain mt-1"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const Tours = () => {
  const [toursData, setToursData] = useState(null);
  const [addToursData, setAddToursData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTourStatus, setSelectedTourStatus] = useState("upcoming");
  const navigate = useNavigate();
  const [modalProps, setModalProps] = useState({
    visible: false,
    title: "",
    key: "",
  });

  useEffect(() => {
    setIsLoading(true);
    getAddToursData();
  }, []);

  useEffect(() => {
    getTours(selectedTourStatus);
  }, [selectedTourStatus]);

  const getTours = async (selectedTourStatus) => {
    const resp = await getApiCall(ApiUrl.toursList(selectedTourStatus));
    if (resp.status) {
      setIsLoading(false);
      setToursData(resp.data);
      localStorage.setItem('initalTourId', resp.data.list[0]?.id);
    } else {
      setIsLoading(false);
    }
  };

  const getAddToursData = async () => {
    const resp = await getApiCall(ApiUrl.addToursData);
    if (resp.status) {
      setAddToursData(resp.data);
    }
  };

  const openAddTourModal = () => {
    setModalProps({
      visible: true,
      title: "Add Tour",
      key: "addTour",
    });
  };

  const closeModal = () => {
    setModalProps({
      visible: false,
      title: "",
      key: "",
    });
  };

  const addNewTour = async ({ ...payload }) => {
    setIsLoading(true)
    payload.start_date = convertToDbFormat(payload.startDate);
    if (payload.end_date) {
      payload.end_date = convertToDbFormat(payload.end_date);
    }
    payload.vend_fee = payload.vend_fee ? "Enable" : "Disable";
    payload.settlement_email = payload.settlement_email ? "Enable" : "Disable";
    const resp = await apiCall(ApiUrl.addTour, payload);
    if (resp.status) {
      closeModal();
      getTours(selectedTourStatus);
      setSelectedTourStatus('upcoming')
      toast.success("Tour added successfully");
    } else {
      toast.error("Tour not added. Please try later");
    }
  };

  const handleSetTourStatus = (item) => {
    setIsLoading(true);
    setSelectedTourStatus(item.key);
  };

  const onTourClick = (item) => {
    navigate(`/shows/${item.id}`)
  }


  return (
    <LoadingOverlay active={isLoading} classNamePrefix='customLoader' spinner={<BeatLoader color="white"  size={20} />}>
      <CustomModal handleModalClose={closeModal} modalProps={modalProps} className="h-[550px]">
        <ToursForm
          handleModalClose={closeModal}
          handleAddTour={addNewTour}
          addToursData={addToursData}
        />
      </CustomModal>
      <div className="bg-grey px-7 py-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-8">
            {toursData &&
              toursData.tour_status.map((item) => (
                <div
                  className="flex flex-row justify-center items-center gap-2 cursor-pointer"
                  key={item.key}
                  onClick={() => handleSetTourStatus(item)}
                >
                  <div className="flex justify-center items-center border border-secondary h-7 w-7 rounded-lg ">
                    {item.key === "upcoming" ? (
                      <CurrentTours
                        stroke={selectedTourStatus === item.key && "#1C1C1C"}
                      />
                    ) : item.key === "completed" ? (
                      <CompletedTours
                        stroke={selectedTourStatus === item.key && "#1C1C1C"}
                      />
                    ) : (
                      <ClosedTours
                        stroke={selectedTourStatus === item.key && "#1C1C1C"}
                      />
                    )}
                  </div>
                  <p
                    className={`font-pop text-xs text-primary ${
                      selectedTourStatus === item.key && "font-semibold"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-12">
            <div
              className="flex flex-row justify-center items-center bg-primary w-40 h-9 rounded-lg gap-2 cursor-pointer"
              onClick={openAddTourModal}
            >
              <img src={"/plus.png"} className="w-3 h-3 object-contain" />
              <p className="font-pop text-xs text-white">Add Tour</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-7 py-5">
        <TableData data={toursData}  hanldeTourClick={onTourClick}/>
      </div>
    </LoadingOverlay>
  );
};
const secondaryMenu = AppData.toursSecondaryMenu;
export default withHoc(Tours, { secondaryMenu, page: "tours" });
