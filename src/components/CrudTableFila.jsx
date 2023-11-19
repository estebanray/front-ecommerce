import React from 'react'

export const CrudTableFila = ({el}) => {
  return (
    <tr>
    <td>{el.nombre}</td>
    <td>{el.precio}</td>
    <td>{el.categoria}</td>
    <td>
        <button>Editar</button>
        <button>Eliminar</button>
    </td>
</tr>
  )
}
