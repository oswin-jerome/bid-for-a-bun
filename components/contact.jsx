import React from 'react';

const Contact = () => {
    return ( <div className="p-5">
        <h3 className="text-center mt-10 md:mt-14 text-xl md:text-2xl font-bold text-gray-400">
        Send us your valuable <span className="text-app-500">feedbacks</span>
      </h3>

      <div className="w-[90vw] md:w-[60vw] shadow bg-white rounded-lg mt-8 mb-5 m-auto grid grid-cols-1 md:grid-cols-2" >
        <div className="bg-app-300 hidden md:block ">
            {/* <img src="assets/girl.png" className="h-80" alt="" /> */}
        </div>
        <div>
            <form name="contact" className="w-9/12 m-auto py-5 grid grid-cols-1" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact"/>
                <div className="grid w-full ">
                    <label className="text-md" htmlFor="">Name</label>
                    <input name="Name" type="text" className="border-2 p-3 rounded-lg" />
                </div>
                <div className="grid mt-2">
                    <label className="text-md" htmlFor="">Email</label>
                    <input name="Email" type="email" className="border-2 p-3 rounded-lg" />
                </div>
                <div className="grid mt-2">
                    <label className="text-md" htmlFor="">Message / Feedback</label>
                    <textarea name="message" className="border-2 p-3 rounded-lg"></textarea>
                </div>

                <button className= " bg-app-500 px-8 py-3 mt-10  rounded-lg shadow hover:shadow-lg hover:bg-app-600 text-white font-normal">Submit</button>
            </form>
        </div>
      </div>
    </div> );
}
 
export default Contact;