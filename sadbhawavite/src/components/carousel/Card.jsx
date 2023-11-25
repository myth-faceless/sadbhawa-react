import React from "react";
function Card(props) {
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="font-serif italic text-[100px]">"</h1>
        <p className="text-5xl px-20 font-serif italic font-light text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. optio consequuntur.</p>
        <div className="mt-10 flex flex-col items-center ">
            <h1 className="text-[30px] font-serif">Ram Kac</h1>
            <p>Review</p>
        </div>

      {/* <img src={props.img} alt="images" /> */}
    </div>
  );
}
export default Card;


// import React from "react";
// function Card(props) {
//   return (
//     <div className="w-[500px] h-[200px] bg-darkBackground text-white font-normal my-0 mx-[200px] flex justify-center items-center">
//       <img src={props.img} alt="images" className="w-[100%] h-[100%]"/>
//     </div>
//   );
// }
// export default Card;
