import React, { useState, useEffect } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


const response = await fetch('/api/granjas');

export const CrudApp = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setdataToEdit] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/granjas');
        const data = await response.json();
        setDb(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


   const createData = (data) => {
     data.id = Date.now();
     setDb([...db, data]);
   };



  const updateData = (data) => {
    // Lógica para actualizar datos en la API
  };

  const deleteData = (id) => {
    // Lógica para eliminar datos en la API
  };

  return (
    <div>
      <h2>Crud App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setdataToEdit={setdataToEdit}
      />
      <CrudTable
        data={db}
        setdataToEdit={setdataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
