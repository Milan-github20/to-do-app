// import { useState, useEffect } from "react";
// import React from "react";

// function Gradovi() {
//   const [grad, setGrad] = useState([]);

//   const fetchGradovi = async () => {
//     const response = await fetch(
//       "http://81.93.66.18:8234/api.cfc?method=gradovi_lista"
//     );
//     const data = await response.json();

//     console.log(data);
//     const transformedData = data.gradovi.DATA.map((item) => {
//       return {
//         id_grada: item[0],
//         naziv: item[1],
//       };
//     });
//     setGrad(transformedData);
//   };

//   useEffect(() => {
//     fetchGradovi();
//   }, []);

//   return (
//     <table className="tabela--tabela_pacijenti">
//       <tr className="tr--header_tr">
//         <th>ID Grada</th>
//         <th>Naziv Grada</th>
//       </tr>
//       {grad.map((item) => (
//         <tr key={item.id} className="tr--main_dio_tabele">
//           <th>{item.id_grada}</th>
//           <th>{item.naziv}</th>
//         </tr>
//       ))}
//     </table>
//   );
// }

// export default Gradovi;
