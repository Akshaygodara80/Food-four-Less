import React from "react";

const MorenebuViewless = ({ setMoremenu, moremenu }) => {
  return (
    <>
      <div className=" text-center mt-11">
        <button
          onClick={() => setMoremenu(!moremenu)}
          className=" duration-300 px-10 py-3 hover:bg-white  hover:text-[#FAB802] border-[1px] rounded-md border-[#FAB802] bg-[#FAB802] text-white text-[18px] font-bold leading-normal  "
        >
          {moremenu ? "View Less" : "More Menu"}
        </button>
      </div>
    </>
  );
};

export default MorenebuViewless;
