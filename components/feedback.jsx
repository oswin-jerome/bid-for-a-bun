import React from "react";
import StackGrid from "react-stack-grid";
const Feedback = () => {

    const cards = [
        {
            name: "Mr. Pallikonda Prabhudasu",
            message:"I have always imagine that B4B is a kind of library... If you don't like to read you haven't found a great book..."
        },
        {
            name: "Mr. Ranjith Samuel",
            message:"Nature and Bible alike testified in B4B. Nature talk's of its creator precisely in B4B. May the Lord bless the team with consistent and constructive resources."
        },
        {
            name: "Mr. Jonathan Gnanadurai",
            message:"I'm Jonathan Gnanadurai; bid for a bun teaches me many new things daily. I also understood that every part of nature teaches some valuable lessons to the one who loves to learn from it." 
        },
        {
            name: "Mrs. Charler",
            message:"500 ஆவது நாள் நல் வாழ்த்துக்கள். மேலும் ஊழியம் வளர தேவன் வழி நடத்துவாராக."
        },
        {
            name: "Ms. Demita Sofia",
            message:"I appreciate your consistent posting. I love the way you project God's word. I see lot of improvement in design and the words you use. Wish u say more about the subject u choose, that will reach other religion ppl too. I used to share with my friends they read it coz it is half about nature"
        },
        {
            name: "Pr S.Selvaraj ",
            sub:"Executive Secretary - NTC",
            message:"I wish “BID FOR A BUN “ ministry the 500th day of celebration. I admire this short and crispy capsule type spiritual message box every day . I appreciate Miss Elfino Prayer Elmo for her tireless contributions through this media  ministry .Let her  writings be ✍continued until the Advent of the Lord Almighty. "
        },
    ]

  return (
    <div className=" w-[90vw] md:w-[90vw] m-auto  mb-8 relative " >
         <h3 className="text-center mt-10 mb-8  md:mt-14 text-xl md:text-2xl font-bold text-gray-400">
        <span className="text-app-500">Feedbacks</span>
      </h3>
      <div className="bg-red-500 z-[-1] hidden md:block md:absolute w-96 h-96 -top-32 blur-3xl bg-opacity-5"></div>
      <div className="bg-blue-500 z-[-1] absolute w-96 h-96 right-64 blur-3xl bg-opacity-5 hidden md:block"></div>
     
      <StackGrid className=""  columnWidth={350} >
        {
            cards.map((card, index) => {
                return <div className="shadow bg-white rounded p-3" key={index}>
                    <div className="flex gap-5">
                        <div className="h-10 w-10">
                        <img src={"https://ui-avatars.com/api/?background=random&name="+card.name} className="h-full w-full rounded-md" alt="" />
                        </div>
                        <div>
                        <h4 className="font-bold text-gray-700">{card.name}</h4>
                        <p className="text-sm text-gray-500">{card.sub}</p>
                        </div>
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
