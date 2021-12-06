import React from "react";

const Join = () => {
  const groups = [
      {
        name: "English",
        link: "https://chat.whatsapp.com/IrpE1pMFFOy4QrjF1yAt1A"
      },
      {
        name: "English - 2",
        link: "https://chat.whatsapp.com/FjJx6nJRKlJJNKETj3uOTJ"
      },
      {
        name: "Tamil",
        link: "https://chat.whatsapp.com/DmA7ib4bhrZ2mBhA7V4oXD"
      },
      {
        name: "Tamil - 2",
        link: "https://chat.whatsapp.com/Fiqe2WFLqFL7px83lD49PS"
      },
      {
        name: "Malay - Malaysia",
        link: "https://chat.whatsapp.com/LrWxYfQ9muT2sfpIXp4FHX"
      },
      {
        name: "Hindi",
        link: "https://chat.whatsapp.com/E1dtCPctj0AGcZ5gtEO0kW"
      },
      {
        name: "Telugu",
        link: "https://chat.whatsapp.com/KB8G0VAxtmN736PJqjy23f"
      },
      {
        name: "Malaayalam",
        link: "https://chat.whatsapp.com/KkTIO5yjaDr6hnAFMXEO9z"
      }
  ];

  return (
    <div className="relative pb-20 overflow-hidden">
      <div className="bg-app-500 z-[-1] absolute w-96 h-96 top-32 blur-3xl bg-opacity-20"></div>
      <div className="bg-red-500 z-[-1] absolute w-96 h-96 right-64 blur-3xl bg-opacity-5 hidden md:block"></div>
      <h3 className="text-center mt-10 md:mt-14 text-xl md:text-2xl font-bold text-gray-400">
        Join us through our <span className="text-app-500">whatsapp</span> groups
      </h3>
      <div id="groups" className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-12 lg:w-[70vw] m-auto z-10 px-5 md:px-0">
        {groups.map((group, index) => {
          return (
            <div className="shadow p-3 rounded bg-white" key={index}>
              <h1 className="font-bold text-gray-600">{group.name}</h1>
              <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, explicabo.</p>

                <a target="_blank" rel="noreferrer" href={group.link}>
                <button className="flex gap-2 mt-3 text-app-500 font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 "><path fill="currentColor" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
                  Join now
                </button>
                </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Join;
