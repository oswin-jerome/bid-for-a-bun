import React from "react";
import StackGrid from "react-stack-grid";
const Feedback = () => {

    const cards = [
        {
            name: "Oswin Jerome",
            message:"lorem 23 kskdskdksdksk kksdk"
        },
        {
            name: "Prem Kumar",
            message:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        },
        {
            name: "Bala Kumar",
            message:"It is a long established fact that a reader will be distracted. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        },
        {
            name: "Abish Wilson",
            message:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        },
        {
            name: "Dinesh",
            message:"lorem 23 kskdskdksdksk kksdk"
        },
        {
            name: "Joey",
            message:"It is a long established fact that a reader will be distracted. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        },
    ]

  return (
    <div className=" w-[90vw] md:w-[90vw] m-auto  mb-8 relative" >
         <h3 className="text-center mt-10 mb-8  md:mt-14 text-xl md:text-2xl font-bold text-gray-400">
        <span className="text-app-500">Feedbacks</span>
      </h3>
      <div className="bg-red-500 z-[-1] absolute w-96 h-96 -top-32 blur-3xl bg-opacity-5"></div>
      <div className="bg-blue-500 z-[-1] absolute w-96 h-96 right-64 blur-3xl bg-opacity-5 hidden md:block"></div>
     
      <StackGrid className="" gutterHeight={20} gutterWidth={20} columnWidth={450}>
        {
            cards.map((card, index) => {
                return <div className="shadow bg-white rounded p-3" key={index}>
                    <div className="flex gap-5">
                        <div className="h-10 w-10">
                        <img src={"https://ui-avatars.com/api/?background=random&name="+card.name} className="h-full w-full rounded-md" alt="" />
                        </div>
                        <h4 className="font-bold text-gray-700">{card.name}</h4>
                    </div>
                        <p className="text-gray-500 mt-2">{card.message}</p>
                </div>
            })
        }
      </StackGrid>
    </div>
  );
};

export default Feedback;
