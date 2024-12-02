import React from 'react';
import HomeIcon from '../../../components/For_Postres/Homeicon';

const Postres = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      style={{
        background: 'linear-gradient(to bottom, #332F29, #5A4A42)',
        color: '#EAA669',
      }}
    >


      {/* Ícono de Home */}
      <HomeIcon />


      {/* Título */}
      <h1 className="mb-5" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        Postres
      </h1>

      {/* Botones de selección */}
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-danger rounded-pill mx-3 px-4 py-2"
          style={{ fontWeight: 'bold' }}
        >
          Calientes
        </button>

        <span
          style={{
            color: '#FFFFFF',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          ó
        </span>

        <button
          className="btn btn-primary rounded-pill mx-3 px-4 py-2"
          style={{ fontWeight: 'bold' }}
        >
          Fríos
        </button>
      </div>

      {/* Botón de "Atrás" */}
      <button
        className="btn btn-link text-light mt-5"
        style={{ textDecoration: 'none', fontSize: '1rem' }}
        onClick={() => window.history.back()}
      >
        <i className="bi bi-arrow-left"></i> Atrás
      </button>
    </div>
  );
};

export default Postres;













// import React from 'react';
// import '../../../StylesViews/Postres.css';

// const Postres = () => {
//   return (
//     <div
//       className="d-flex flex-column justify-content-center align-items-center vh-100"
      
//     >
//       {/* Título */}
//       <h1 className="mb-5" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
//         Postres
//       </h1>
//       <br/>
//       <br/>
//       <br/>
//       <br/>

//       {/* Botones de selección */}
//       <div className="d-flex justify-content-between align-items-center">
//         <button
//           className="btn btn-danger rounded-pill mx-3 px- py-2"
//           style={{ fontWeight: 'bold' }}
//         >
//           Calientes
//         </button>

//         <span
//           style={{
//             color: '#FFFFFF',
//             fontSize: '1.5rem',
//             fontWeight: 'bold',
//           }}
//         >
          
//         </span>

//         <button
//           className="btn btn-primary rounded-pill mx-3 px-4 py-2"
//           style={{ fontWeight: 'bold' }}
//         >
//           Fríos
//         </button>
//       </div>
//       <br/>
//       <br/>
//       <br/>
//       <br/>

//       {/* Botón de "Atrás" */}
//       <button
//         className="btn btn-link text-black mt-5 "
//         style={{ textDecoration: 'none', fontSize: '1.1rem' }}
//         onClick={() => window.history.back()}
//       >
//         <i className="bi bi-arrow-left"></i> Atrás
//       </button>
//     </div>
//   );
// };

// export default Postres;
