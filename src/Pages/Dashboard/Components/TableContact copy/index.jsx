import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import './tablecontact.scss'
import Paginador from '../Paginador'

function TableContact() {

    const data = [
        {id: 1, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        {id: 2, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        {id: 3, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        {id: 4, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        {id: 5, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        {id: 6, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        {id: 7, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        {id: 8, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        {id: 9, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        {id: 10, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        {id: 11, firstName: 'Gabriel', lastName: 'Galindo', email: 'gabriel@gmail.com', tags: [{id: 1, tagName:'greenB', color: 'green'}, {id: 2, tagName:'blue', color: 'blue'}, {id: 3, tagName:'red', color: 'red'}], createdBy: 'Andrés Martínez'},
        
    ]

    return (
        <>
            <div className='molecule-container-document-table'>
                <table className='molecule-container-document-table__table'>
                    <thead className='molecule-container-document-table__table__thead'>
                    <tr className='molecule-container-document-table__table__thead__tr'>
                        <th className='molecule-container-document-table__table__thead__tr__th molecule-container-document-table__table__thead__tr__th--checkbox'><input type="checkbox" /></th>
                        <th className='molecule-container-document-table__table__thead__tr__th molecule-container-document-table__table__thead__tr__th--new'>ID Empleado</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Nombre</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Departamento</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Tags</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Created By</th>
                        
                    </tr>
                    </thead>
                    <tbody className='molecule-container-document-table__table__tbody'>
                    {data.map((doc) => (
                        <tr className='molecule-container-document-table__table__tbody__tr' key={doc.id}>
                            <input className='molecule-container-document-table__table__tbody__tr__td molecule-container-document-table__table__tbody__tr__td--checkbox' type="checkbox" />
                            <td className='molecule-container-document-table__table__tbody__tr__td molecule-container-document-table__table__tbody__tr__td--title'>
                                <div className='molecule-container-document-table__table__tbody__tr__td--title__div'>
                                    <div className='molecule-container-document-table__table__tbody__tr__td--title__div__div molecule-container-document-table__table__tbody__tr__td--title__div__div--new'>
                                        <span className='molecule-container-document-table__table__tbody__tr__td--title__div__div__span'>{doc.firstName}</span>
                                    </div>
                                </div>
                            </td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.lastName}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.email}</td>
                            <div className='molecule-container-document-table__table__tbody__tr__td tags-conatiner'>
                                {
                                    doc.tags.map(tag => (
                                        <td style={{backgroundColor: tag.color === 'green' && '#F6FFEC' || tag.color === 'red' && '#FFF1F0' || tag.color === 'blue' && '#BFD0FB',
                                            color: tag.color === 'green' && '#6BC93F' || tag.color === 'red' && '#FD4954' || tag.color === 'blue' && '#567AF2',
                                            border: tag.color === 'green' && '1px solid #6BC93F' || tag.color === 'red' && '1px solid #FD4954' || tag.color === 'blue' && '1px solid #567AF2'
                                         }} key={tag.id} className='tags-color'>{tag.tagName}</td>
                                    ))
                                }
                            </div>
                            
                            <div className='molecule-container-document-table__table__tbody__tr__td table-contact-create-by-menu'>
                                <td className='molecule-container-document-table__table__tbody__tr__td max'>{doc.createdBy}</td>
                                <EllipsisVerticalIcon className='table-contact-icon'/>
                            </div>
                            
                        </tr>
                    ))}
                    </tbody>
                    
                </table>
                
            </div>
        </>
    )
}

export default TableContact
