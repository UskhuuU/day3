// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { darkModeContext } from "../App";

// function Log_in() {
//   const [data, setData] = useState([]);
//   const { isDarkMode } = useContext(darkModeContext);
//   const styles = {
//     box: {
//       backgroundColor: isDarkMode ? "black" : "white",
//       color: isDarkMode ? "white" : "black",
//     },
//   };
//   const request = () => {
//     axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//       setData(res.data);
//       console.log(res.data);
//     });
//   };
//   useEffect(() => {
//     request();
//   }, []);

//   return (
//     <div style={styles.box}>
//       <div id="border2">
//         {data.map((id) => {
//           return (
//             <div id="border">
//               <div>{id.name}</div>
//               <div>{id.username}</div>
//               <div>{id.email}</div>
//               <div>{id.adderss}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Log_in;
