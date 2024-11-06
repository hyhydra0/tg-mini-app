import Layout from "@/layout";
import event from "@/assets/event.jpg";
// import axios from "axios";
import { LINKS } from "./data";
import { useState } from "react";

const App: React.FC = () => {
  const [loadingBtn, setLoadingBtn] = useState<{
    name: string;
    status: boolean;
  }>({ name: "", status: false });
  const goTo = async (val: string) => {
    setLoadingBtn({
      name: val,
      status: true,
    });
    // try {
    //   // await axios.get(`${import.meta.env.VITE_REQUEST_BASE_URL}/home`);
    //   // const response = await axios.post(
    //   //   `${import.meta.env.VITE_REQUEST_BASE_URL}/get_chat_id`
    //   // );
    //   // const chatId = response.data;
    //   const chatId = 1;
    //   if (chatId) {
    //     await axios.post(
    //       `${import.meta.env.VITE_REQUEST_BASE_URL}/data_received`,
    //       {
    //         val,
    //         chatId,
    //       }
    //     );
    //   }
    // } finally {
    //   setLoadingBtn({
    //     name: val,
    //     status: false,
    //   });
    // }
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.openLink("https://projectpolyverse.cpventure.io");
    }
  };
  return (
    <Layout>
      <div className="flex flex-col p-[16px] gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <div className="text-[14px] font-[700]">
            Polyverse Project, powered by CP Venture, is designed to quickly
            help you navigate through Polyverse and its numerous features
          </div>
          <div className="flex flex-col gap-[8px] py-[16px] px-[12px] rounded-[16px] bg-[#0C0C0CEB] custom-box-shadow-1">
            <div className="text-[14px] font-[700]">
              The next generation Web3 RPG Game
            </div>
            <div className="text-[12px] text-[#B2B2B2]">
              Polyverse is an RPG ultra-competitive survival game. This genre
              combines the expansive, persistent worlds of RPGs with the high
              stakes and strategic depth of survival games, creating a unique
              and engaging experience for our players.
            </div>
          </div>
        </div>

        {LINKS.map((item) => (
          <div
            key={item.id}
            className="flex gap-[12px] flex-col py-[12px] px-[12px] rounded-[16px] bg-[#0C0C0CEB] custom-box-shadow-2"
          >
            <div className="flex gap-[8px] items-center">
              <img src={event} alt="" className="w-[120px] rounded-[12px]" />
              <div className="flex flex-col ">
                <div className="text-[13px] font-[500]">{item.name}</div>
                <div className="text-[12px] text-[#B2B2B2]">{item.title}</div>
              </div>
            </div>
            <button
              className="border-[1px] border-solid border-white text-center text-[12px] rounded-[8px] py-[2px]"
              onClick={() => goTo(item.name)}
            >
              {loadingBtn.name === item.name && loadingBtn.status === true
                ? "Loading..."
                : "Visit"}
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default App;
