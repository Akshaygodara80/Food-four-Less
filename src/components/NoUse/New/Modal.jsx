// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

// const Modal = () => {
//   const [openmodal, setOpenmodal] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [submit, setSubmit] = useState(false);

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     if (name.trim() && email.trim() && phone.trim() && age.trim() && gender) {
//       localStorage.setItem("name", name);
//       localStorage.setItem("Email", email);
//       localStorage.setItem("Phone no.", phone);
//       localStorage.setItem("Age", age);
//       localStorage.setItem("gender", gender);
//       setSubmit(false);
//       setOpenmodal(false);
//       setName("");
//       setEmail("");
//       setPhone("");
//       setGender("");
//       setAge("");
//       toast.success("Form submitted successfully!");
//     } else {
//       setSubmit(true);
//     }
//   };
//   const resetForm = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setAge("");
//     setGender("");
//     setSubmit(false);
//   };
//   return (
//     <>
//       <ToastContainer />
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
//             onClick={() => {
//               setOpenmodal(false);
//               resetForm();
//             }}
//             className=" ms-[14%] text-[50px] hover:text-red-600 duration-300 "
//           >
//             close
//           </button>

//           <form
//             onSubmit={handlesubmit}
//             className=" relative flex flex-col gap-6 max-w-[70%] w-full mx-auto"
//           >
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               placeholder="Name"
//               className=" w-full  px-4 py-3 outline-none border-[1px] border-gray-300 rounded-md"
//             />
//             {submit && name.trim() === "" ? (
//               <span className=" absolute text-red-700 top-12 left-10">
//                 {" "}
//                 *fill this field
//               </span>
//             ) : null}
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               placeholder="Email"
//               className=" w-full  px-4 py-3 outline-none border-[1px] border-gray-300 rounded-md"
//             />
//             {submit && email.trim() === "" ? (
//               <span className=" absolute text-red-700 top-[120px] left-10">
//                 {" "}
//                 *fill this field
//               </span>
//             ) : null}
//             <input
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               type="number"
//               placeholder="Phone No."
//               className=" w-full  px-4 py-3 outline-none border-[1px] border-gray-300 rounded-md"
//             />
//             {submit && phone.trim() === "" ? (
//               <span className=" absolute text-red-700 top-[195px] left-10">
//                 {" "}
//                 *fill this field
//               </span>
//             ) : null}
//             <input
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               type="number"
//               placeholder="Age"
//               className=" w-full  px-4 py-3 outline-none border-[1px] border-gray-300 rounded-md"
//             />
//             {submit && age.trim() === "" ? (
//               <span className=" absolute text-red-700 top-[270px] left-10">
//                 {" "}
//                 *fill this field
//               </span>
//             ) : null}
//             <select
//               onChange={(e) => setGender(e.target.value)}
//               className="py-3 rounded-md outline-none"
//               value={gender}
//               name=""
//               id=""
//             >
//               <option value="">Gender</option>
//               <option value="Male">Male</option>
//               <option value="Femal">Femal</option>
//               <option value="other">other</option>
//             </select>
//             {submit && gender === "" ? (
//               <span className=" absolute text-red-700 top-[340px] left-10">
//                 {" "}
//                 *fill this field
//               </span>
//             ) : null}
//             <button
//               type="submit"
//               className="px-4 py-2 bg-black text-white cursor-pointer rounded-md  hover:bg-red-600 duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;
