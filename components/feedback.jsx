import React from "react";
import StackGrid from "react-stack-grid";
const Feedback = () => {

    const cards = [
        {
            name: "Pr. Marshall Isaac",
            message:"God bless you as have reached the 500 milestone. May God grant you more wisdom to connect the nuggets from nature with God's word!."
        },
        {
            name: "Pr. Edwin Paul ",
            sub:"President, NTC",
            message:`Bit for a Bun" is a  familiar topic for all of us in this group. The writer of this  unique presentation is none other than Miss Elfino Elmo. It is a wonderful platform to share great moral lessons everyday morning.  It's amazing to know her writing had never ceased until this  500 days . I sincerely appreciate  Miss Elfino Elmo on this 500th day thought presentation.  She has made good effort by
            using nature like plants, animals, birds, fishes, reptiles and etc and bringout a great lesson to each one of us. I appreciate and congradulate for her tireless ministry through writing.  May God continue to bless her good ministry in the days ahead. 
           With Prayers .. `
        },
        
        {
            name: "Pr S.Selvaraj ",
            sub:"Executive Secretary - NTC",
            message:"I wish “BID FOR A BUN “ ministry the 500th day of celebration. I admire this short and crispy capsule type spiritual message box every day . I appreciate Miss Elfino Prayer Elmo for her tireless contributions through this media  ministry .Let her  writings be ✍continued until the Advent of the Lord Almighty. "
        },
        {
            name: "Dr. Frederick John",
            sub:"",
            message:`Every morning it has become a habit to search and read the message from BID FOR A BUN , 

            500 days has rolled by Reminding everyone to Rejoice always, pray without ceasing, give thanks in all circumstances and appreciate the wonder of God's creation . 
           
           May God richly bless you , guide you with heavenly knowledge , ELFINO PRAYER ELMO , as you continue the ministry in God's vineyard.`
        },
        {
            name:"Mr. Paulson",
            message:`Bid for a bun kindles me at 9 in the night and energies me at 5 in the morning. Long live and God bless.`
        },
        {
            name:"Dr. Sophy Arun",
            message:`A hungry stomach smiles when it gets bun.
            But a hungry spirit in christ smiles when it gets "BID FOR A BUN" 
            Though it seems to be a small work, this too need lots of effort.All your thoughts seems to be a gift from God. God bless you dear Elfino. Really God  will reward u.`
        },
        {
            name:"Mr. Isaac Selvaraj",
            message:`Bid for a Bun - 
            Creating awareness & Connecting people with God, as Jesus did through parables.
            Bid for a Bun - 
            Rainbow of WhatsApp forum`
        },
        {
            name:"Dr. Koberson Langhu",
            message:`"Bid for a Bun" teaches us valuable life lessons from God's amazing nature in a fun way. Information and lessons provided are truly thought-provoking.`
        },
        {
            name:"Prof. Anish",
            message:`Bid for a Bun is a like a starter for the spiritual food that we need every day. I really appreciate the short but meaningful insights that this ministry is consistently bringing to us every morning. It is a blessing in somebody's life every day. God bless the ministry.`
        },
        {
            name:"Mr. Andrews Selvaraj",
            message:`Bid for Bun 500th day
            A daily devotional by Elfino Prayer Elmo. It's a worthy bid to read before my day ends. I'm amazed at her talent and praise the Lord for His Gift to her. She has learnt and experienced more of God's Creation. It’s beauty and purpose, aptly connected to our daily life. I pray and wish this ministry will grow stronger in strengthening our faith. May God grant and enrich His wisdom on her as she spreads the good news to hasten our Lords returns.
            God Be With Us. Congratulations Elfino...`   
        },
        {
            name:"Mrs. Jeba Jeya",
            message:`I am extremely proud of the insight you bring each day through B4B. I am left astounded at the level of dedication and hard work you put in bringing unique spiritual message through nature everyday. Congratulations on attaining 500th day. May God use you more and more for His glory.`
        },
        {
            name: "Mr. Ranjith Samuel",
            message:"Nature and Bible alike testified in B4B. Nature talk's of its creator precisely in B4B. May the Lord bless the team with consistent and constructive resources."
        },
        {
            name:"Mr. Noah Johnson",
            message:`Praise the Lord!!
            I am Noah Johnson, glad to be a member of Bid for Bun. Initially when i noticed Bid for Bun in whatsapp, thought its something as usual one like others would quote everyday, so neglected it for nearly one year.  One day my imagination went on  why God created these many natural things for us, n what does Bible says about them. So started to google search for the same, to my surprise it was bid for bun which popped up first. From that time  I started following Bid for Bin, lots of new creative thinking about nature. It creates a kind of wow, n how great is God's creation n how much we experience the love of Christ through nature. PRAISE THE LORD`
        },
        {
            name: "Ms. Demita Sofia",
            message:"I appreciate your consistent posting. I love the way you project God's word. I see lot of improvement in design and the words you use. Wish u say more about the subject u choose, that will reach other religion ppl too. I used to share with my friends they read it coz it is half about nature"
        },
        {
            name:"Mr. Alex",
            message:`Hello everyone I'm Alex from Anantha Ashram  Church, Hosur. Bid_for_a_Bun is one of the finest thing which I've seen and enjoy these days. As a church we wanna do something Online so we planned to do Sabbath reception every week and we were in lack of contents so Bid_for_a_bun was the only resource we could get and still we r running our channel with a lot of its content. I would like to congratulate the hard work of sister Elfino for the wonderful art she is doing wish you all the very best. God bless Bid_for_a_bun.`
        },
        {
            name: "Mr. Jonathan Gnanadurai",
            message:"I'm Jonathan Gnanadurai; bid for a bun teaches me many new things daily. I also understood that every part of nature teaches some valuable lessons to the one who loves to learn from it." 
        },
        {
            name: "Mrs. Charler",
            message:"500 ஆவது நாள் நல் வாழ்த்துக்கள். மேலும் ஊழியம் வளர தேவன் வழி நடத்துவாராக."
        },
       
    ]

  return (
    <div className=" w-[90vw] md:w-[90vw] m-auto  mb-8 relative " >
         <h3 className="text-center mt-10 mb-8  md:mt-14 text-xl md:text-2xl font-bold text-gray-400">
        <span className="text-app-500">Feedbacks</span>
      </h3>
      <div className="bg-red-500 z-[-1] hidden md:block md:absolute w-96 h-96 -top-32 blur-3xl bg-opacity-5"></div>
      <div className="bg-blue-500 z-[-1] absolute w-96 h-96 right-64 blur-3xl bg-opacity-5 hidden md:block"></div>
     
      <StackGrid className="" gutterHeight={20} gutterWidth={20}   columnWidth={300} >
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
