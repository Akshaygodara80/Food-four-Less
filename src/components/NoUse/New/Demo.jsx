// import React, { useState } from "react";

// const Demo = () => {
//   const [openmodal, setOpenmodal] = useState(true);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email || !phone || !age || !gender) {
//       setSubmitted(true);
//       return;
//     }
//     localStorage.setItem("name", name);
//     localStorage.setItem("Email", email);
//     localStorage.setItem("Phone no.", phone);
//     localStorage.setItem("Age", age);
//     localStorage.setItem("gender", gender);
//   };

//   return (
//     <>
//       <div>
//         <button
//           onClick={() => setOpenmodal(true)}
//           className=" p-4 bg-orange-400 m-8 cursor-pointer rounded-lg hover:bg-red-500 duration-300"
//         >
//           Open Modal
//         </button>
//         <div
//           className={`absolute top-0  max-w-[400px] w-full  pb-8 bg-green-400 ${
//             openmodal ? "right-0" : "right-[-100%]"
//           }`}
//         >
//           <button
//             onClick={() => setOpenmodal(false)}
//             className=" ms-[14%] text-[50px] "
//           >
//             close
//           </button>

//           <form
//             onSubmit={handlesubmit}
//             className=" flex flex-col gap-6 max-w-[70%] w-full mx-auto"
//           >
//             <div>
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 type="text"
//                 placeholder="Name"
//                 className=" w-full  px-4 py-3 outline-none border-[1px] border-gray-300 rounded-md"
//               />
//               {submitted && !name ? (
//                 <span className="text-red-500">Please enter your name</span>
//               ) : null}
//             </div>
//             <div>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 placeholder="Email"
//                 className=" w-full  px-4 py-3 outline-none border-[1px] border-gray-300 rounded-md"
//               />
//               {submitted && !email ? (
//                 <span className="text-red-500">Please enter your email</span>
//               ) : null}
//             </div>
//             <div>
//               <input
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 type="number"
//                 placeholder="Phone No."
//                 className=" w-full  px-4 py-3 outline-none border-[1px] border-gray-300 rounded-md"
//               />
//               {submitted && !phone ? (
//                 <span className="text-red-500">
//                   Please enter your phone number
//                 </span>
//               ) : null}
//             </div>
//             <div>
//               <input
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 type="number"
//                 placeholder="Age"
//                 className=" w-full  px-4 py-3 outline-none border-[1px] border-gray-300 rounded-md"
//               />
//               {submitted && !age ? (
//                 <span className="text-red-500">Please enter your age</span>
//               ) : null}
//             </div>
//             {/* <div>
//               <select
//                 onChange={(e) => setGender(e.target.value)}
//                 className=" py-3 rounded-md outline-none"
//                 value={gender}
//                 name=""
//                 id=""
//               >
//                 <option value="">Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Femal">Femal</option>
//                 <option value="other">other</option>
//               </select>
//               {gender ? null : (
//                 <span className="text-red-500">Please select your gender</span>
//               )}
//             </div> */}
//             <button
//               type="submit"
//               className="px-4 py-2 bg-black text-white cursor-pointer rounded-md mt-6 hover:bg-red-600 duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Demo;
