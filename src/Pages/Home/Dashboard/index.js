import React from "react";
import withHoc from "../../../Components/Hoc";

const data1 = [
  {
    id: 1,
    title: "Global",
    tData: [123, 123, 123, 123],
  },
];

const data2 = [
  {
    id: 1,
    title: "TRLR Stock",
    tData: [544, 544, 544, 544],
  },
  {
    id: 2,
    title: "Price",
    tData: [123, 123, 123, 123],
  },
];

const data3 = [
  {
    id: 1,
    title: "Incount",
    tData: [544, 544, 544, 544],
  },
  {
    id: 2,
    title: "Adds",
    tData: [123, 123, 123, 123],
  },
];

const data4 = [
  {
    id: 1,
    title: "Total IN",
    tData: [544, 544, 544, 544],
  },
  {
    id: 2,
    title: "In/Adds Gross",
    tData: [123, 123, 123, 123],
  },
];

const data5 = [
  {
    id: 1,
    title: "Comps",
    tData: [544, 544, 544, 544],
  },
  {
    id: 2,
    title: "Out",
    tData: [123, 123, 123, 123],
  },
];

const data6 = [
  {
    id: 1,
    title: "Sold",
    tData: [544, 544, 544, 544],
  },
  {
    id: 2,
    title: "Sold gross",
    tData: [123, 123, 123, 123],
  },
];

const data7 = [
  {
    id: 1,
    title: "Apparel",
    tData: [
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
    ],
  },
  {
    id: 2,
    title: "Other",
    tData: [
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
    ],
  },
  {
    id: 3,
    title: "Music",
    tData: [
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
    ],
  },
];

const data8 = [
  {
    id: 1,
    title: "Total",
    tData: [
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
      "$ 5,440.00",
    ],
  },
];


export const Table = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-row">
      {data.map((item, index) => (
        <div
          className={`flex flex-col ${
            index % 3 === 0 ? "border" : "border-r border-b border-t"
          }   rounded-lg`}
          key={item.id}
        >
          <div className="bg-secondary py-2 rounded-t-md px-3">
            <p className="text-white font-pop text-[11px] text-center">
              {item.title}
            </p>
          </div>
          {item.tData.map((item1, index1) => (
            <div
              className={`px-6 py-2 ${
                index1 === item.tData.length - 1 ? "rounded-b" : "border-b"
              } border-secondary`}
            >
              <p className="text-secondary font-pop text-[11px] text-center">
                {item1}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};



export const Sizes = () => {
  return (
    <div className="flex flex-col gap-2 justify-center align-center">
      <div className="bg-secondary px-2 py-1 border-b border-secondary rounded-md">
        <p className="text-white font-pop text-xs text-center">xs</p>
      </div>
      <div className="bg-secondary px-2 py-1 border-b border-secondary rounded-md">
        <p className="text-white font-pop text-xs text-center">xs</p>
      </div>
      <div className="bg-secondary px-2 py-1 border-b border-secondary rounded-md">
        <p className="text-white font-pop text-xs text-center">xs</p>
      </div>
      <div className="bg-secondary px-2 py-1 border-b border-secondary rounded-md">
        <p className="text-white font-pop text-xs text-center">xs</p>
      </div>
    </div>
  );
};



const Home = () => {
  

  

  return (
    <>
      <div className="bg-grey px-7 py-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-8">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex justify-center items-center border border-secondary h-7 w-7 rounded-lg">
                <img src="/counts.png" className="w-3 h-3 object-contain" />
              </div>
              <p className="font-pop text-xs text-primary">Counts</p>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex justify-center items-center border border-secondary h-7 w-7 rounded-lg">
                <img src="/settle.png" className="w-3 h-3 object-contain" />
              </div>
              <p className="font-pop text-xs text-secondary">Settlements</p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex justify-center bg-primary items-center border border-secondary h-9 w-9 rounded-lg">
                <img src="/printer.png" className="w-5 h-5 object-contain" />
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-2">
              <div className="flex justify-center bg-primary items-center border border-secondary h-9 w-9 rounded-lg">
                <img src="/xcel.png" className="w-5 h-5 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center bg-white  px-7 py-3 gap-6">
        <div className="border border-primary rounded-lg p-3">
          <div className="flex flex-row gap-2">
            <div className="flex flex-row justify-center items-center bg-primary w-48	h-8	rounded-lg gap-2">
              <p className="font-pop text-white text-xs">
                New Port Yatching Centre
              </p>
              <img
                src="/chevron_down_white.png"
                className="w-2 h-2 object-contain"
              />
            </div>
            <div className="flex flex-row justify-center items-center bg-primary px-3 	h-8	rounded-lg gap-2">
              <p className="font-pop text-white text-xs">Capacity</p>
              <p className="font-pop text-white text-xs">|</p>
              <p className="font-pop text-white text-xs">200</p>
            </div>

            <div className="flex flex-row justify-center items-center bg-primary  px-3	h-8	rounded-lg gap-2">
              <p className="font-pop text-white text-xs">Sales Tax Included</p>
              <img
                src="/chevron_down_white.png"
                className="w-2 h-2 object-contain"
              />
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row justify-center items-center bg-primary px-3	h-8	rounded-l-lg gap-2">
                <p className="font-pop text-white text-xs">Tax Fee %</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-white border border-primary w-16	h-8	rounded-none gap-2">
                <p className="font-pop text-secondary text-xs">Apparel</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-white border border-primary w-16	h-8	rounded-none gap-2">
                <p className="font-pop text-secondary text-xs">Music</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-white border border-primary w-16	h-8	rounded-r-lg gap-2">
                <p className="font-pop text-secondary text-xs">Other</p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-row justify-center items-center bg-primary px-3	h-8	rounded-l-lg gap-2">
                <p className="font-pop text-white text-xs">Venue Fee %</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-white border border-primary w-16	h-8	rounded-none gap-2">
                <p className="font-pop text-secondary text-xs">Apparel</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-white border border-primary w-16	h-8	rounded-none gap-2">
                <p className="font-pop text-secondary text-xs">Music</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-white border border-primary w-16	h-8	rounded-r-lg gap-2">
                <p className="font-pop text-secondary text-xs">Other</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-primary rounded-lg p-3">
          <div className="flex flex-row gap-2">
            <div className="flex flex-row justify-center items-center bg-primary border border-primary w-7	h-7	rounded-lg">
              <p className="font-pop text-white text-xs">1</p>
            </div>
            <div className="flex flex-row justify-center items-center bg-white border border-primary w-7	h-7	rounded-lg">
              <p className="font-pop text-secondary text-xs">2</p>
            </div>
            <div className="flex flex-row justify-center items-center bg-white border border-primary w-7	h-7	rounded-lg">
              <p className="font-pop text-secondary text-xs">3</p>
            </div>
            <div className="flex flex-row justify-center items-center bg-white border border-primary w-7	h-7	rounded-lg">
              <p className="font-pop text-secondary text-xs">4</p>
            </div>
            <div className="flex flex-row justify-center items-center bg-primary w-24	h-8	rounded-lg gap-2">
              <p className="font-pop text-white text-xs"> + Add Stand</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-7 py-4">
        <div className="border border-primary rounded-lg p-5">
          <div className="flex flex-row justify-between align-center">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-primary font-medium font-pop text-sm">
                  Blue T-Shirt
                </p>
                <p className="text-secondary font-pop text-xs">Apparel</p>
                <div className="my-2">
                  <img src="/apparel.png" className="w-24 h-24" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-center items-center bg-primary w-28	h-6	rounded-lg gap-2 mt-6">
                  <p className="font-pop text-white text-xs">More details</p>
                  <img
                    src="/chevron_down_white.png"
                    className="w-2 h-2 object-contain"
                  />
                </div>
                <div className="flex flex-row justify-center items-center bg-primary w-20	h-6	rounded-lg gap-2">
                  <p className="font-pop text-white text-xs">More Inv</p>
                  <img
                    src="/chevron_down_white.png"
                    className="w-2 h-2 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <Table data={data1} />
              <Sizes />
              <Table data={data2} />
              <Table data={data3} />
              <Table data={data4} />
              <Table data={data5} />
              <Table data={data6} />
            </div>
          </div>
        </div>

        <div className="border border-primary rounded-lg p-5 my-6">
          <div className="flex flex-row justify-between align-center">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-primary font-medium font-pop text-sm">
                  Blue T-Shirt
                </p>
                <p className="text-secondary font-pop text-xs">Apparel</p>
                <div className="my-2">
                  <img src="/apparel.png" className="w-24 h-24" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-center items-center bg-primary w-28	h-6	rounded-lg gap-2 mt-6">
                  <p className="font-pop text-white text-xs">More details</p>
                  <img
                    src="/chevron_down_white.png"
                    className="w-2 h-2 object-contain"
                  />
                </div>
                <div className="flex flex-row justify-center items-center bg-primary w-20	h-6	rounded-lg gap-2">
                  <p className="font-pop text-white text-xs">More Inv</p>
                  <img
                    src="/chevron_down_white.png"
                    className="w-2 h-2 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <Table data={data1} />
              <Sizes />
              <Table data={data2} />
              <Table data={data3} />
              <Table data={data4} />
              <Table data={data5} />
              <Table data={data6} />
            </div>
          </div>
        </div>
        <div className="border border-primary rounded-lg p-5">
          <div className="flex flex-row gap-6 align-center">
            <div className="flex flex-col  justify-center align-center">
              <div className="bg-secondary px-2 py-3 border-b border-white rounded-t">
                <p className="text-white font-pop text-xs text-center">
                  Gross Value In
                </p>
              </div>
              <div className="bg-secondary px-2 py-3 border-b border-white">
                <p className="text-white font-pop text-xs text-center">
                  Gross Value Add
                </p>
              </div>
              <div className="bg-secondary px-2 py-3 border-b border-white">
                <p className="text-white font-pop text-xs text-center">
                  Gross Value In/Add
                </p>
              </div>
              <div className="bg-secondary px-2 py-3 border-b border-white">
                <p className="text-white font-pop text-xs text-center">
                  Comp Value
                </p>
              </div>
              <div className="bg-secondary px-2 py-3 border-b border-white rounded-b">
                <p className="text-white font-pop text-xs text-center">
                  Gross Sales Man Stand
                </p>
              </div>
            </div>
            <Table data={data7} />
            <Table data={data8} />

            <div className="flex flex-col items-center justify-center gap-6 mx-12">
              <div>
                <p className="font-pop text-md my-2">Main Stand #1</p>
                <div className="flex flex-row">
                  <div
                    className={`px-6 py-2 rounded-l-md border bg-primary border-primary w-36`}
                  >
                    <p className="text-white font-pop text-[11px] text-center">
                      Top Gross Sales
                    </p>
                  </div>
                  <div
                    className={`px-6 py-2 rounded-r-md border border-secondary w-36`}
                  >
                    <p className="text-secondary font-pop text-[11px] text-center">
                      $ 5,440.00
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-4">
                <p className="font-pop text-md my-2">Side Stand #1</p>
                <div className="flex flex-row">
                  <div
                    className={`px-6 py-2 rounded-l-md border bg-primary border-primary w-36`}
                  >
                    <p className="text-white font-pop text-[11px] text-center">
                      Top Gross Sales
                    </p>
                  </div>
                  <div
                    className={`px-6 py-2 rounded-r-md border border-secondary w-36`}
                  >
                    <p className="text-secondary font-pop text-[11px] text-center">
                      $ 5,440.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 align-center my-8">
            <div className="bg-secondary px-8 py-3 border-b border-white rounded-md">
              <p className="text-white font-pop text-xs text-center">
                Gross Value In
              </p>
            </div>
            <div className="flex flex-row">
              <div className={`py-3 rounded-l-md border border-secondary w-28`}>
                <p className="text-secondary font-pop text-[11px] text-center">
                  $ 5,440.00
                </p>
              </div>
              <div className={`py-3 border border-secondary w-28`}>
                <p className="text-secondary font-pop text-[11px] text-center">
                  $ 5,440.00
                </p>
              </div>
              <div className={`py-3  border border-secondary w-28`}>
                <p className="text-secondary font-pop text-[11px] text-center">
                  $ 5,440.00
                </p>
              </div>
            </div>
            <div className="bg-secondary px-8 py-3 border-b border-white rounded-md">
              <p className="text-white font-pop text-xs text-center">
                $ 42,0000
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const props = { showDate: true }
export default withHoc(Home, props);
