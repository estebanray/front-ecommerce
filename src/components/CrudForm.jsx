import React, { useState } from 'react'

const initialForm = {
    id: null,
    nombre: "", 
    precio: '', 
    categoria_id: ''
};

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.nombre || !form.precio || !form.categoria_id){
      alert("Datos incompletos");
      return;
    }

    if(form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  }

  return (
    <div>
        <h3>Agregar Productos</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name='nombre' placeholder='Nombre' onChange={handleChange} value={form.nombre}/>
            <input type="text" name='precio' placeholder='Precio' onChange={handleChange} value={form.precio}/>
            <input type="text" name='categoria_id' placeholder='Categoria_id' onChange={handleChange} value={form.categoria_id}/>
            <input type="submit" value="Enviar"/>
            <input type="reset" value="Limpiar" onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm