import React from 'react'
import { CrudTableFila } from './CrudTableFila'

export const CrudTable = ({data}) => {
  return (
    <div>
        <h3>Tabla de Productos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Categorias</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ? (
                <tr>
                    <td colSpan="4">Sin Datos</td>
                </tr>
                ):(
                    data.map((el) => 
                    <CrudTableFila key={el.id} el={el}/>)
                )}
            </tbody>
        </table>
    </div>
  )
}

export default CrudTable;