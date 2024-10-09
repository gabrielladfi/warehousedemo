import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { useContext, useState } from 'react'
import './tablecontact.scss'
import Paginador from '../Paginador'
import videoDelta from '../../../../assets/videoDelta.mp4'
import { GlobalState } from '../../../../Context/GlobalState'

function TableContact() {

    const { control, inventario, video } = useContext(GlobalState);
    


    

    const data = [
        {
            id: 1, 
            id_empleado: '0001', 
            firstName: 'Gabriel', 
            departamento: 'importaciones', 
            posicion: 'descargue', 
            fecha_registro: '20/10/2024',
            e_casco: 'true',
            es_casco: 'Regular',
            e_chaleco: 'true',
            es_chaleco: 'Regular',
            e_botas: 'true',
            es_botas: 'Regular',
            ultimo_control: '1/09/2024',
            observaciones: 'pendiente para cambio',
            firma_responsable: 'daniel mejia',
            firma_empleado: 'andres catro',
            
        

        },
        
    ]
    const dataI = [
        {
            id: 1, 
            id_paquete: '0001', 
            codigo_rastreo: 'xgkldbf67',
            descripcion: 'paquete delicado', 
            peso: '5 kilos', 
            dimesiones: '20x40x120', 
            fecha_ingreso: '20/10/2024',
            e_paquete: 'sin daños',
            destino: 'Medellin',
            fecha_entrega_estimada: '12/12/2024',
            fecha_entrega_real: '12/16/2024',
            destinatario: 'Andres ramiro',
            firma_recibido: 'Andres ramiro',
            transportista: 'Deprisa',
            observaciones: 'entregar en horas de la tarde'
        },
        
    ]

    return (
        <>
            {
                control && 
                <div className='molecule-container-document-table'>
                <table className='molecule-container-document-table__table'>
                    <thead className='molecule-container-document-table__table__thead'>
                    <tr className='molecule-container-document-table__table__thead__tr'>
                        <th className='molecule-container-document-table__table__thead__tr__th molecule-container-document-table__table__thead__tr__th--checkbox'><input type="checkbox" /></th>
                        <th className='molecule-container-document-table__table__thead__tr__th molecule-container-document-table__table__thead__tr__th--new'>ID Empleado</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Nombre</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Departamento</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Posicion</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Fecha de registro</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Equipo casco</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Estado casco</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Equipo chaleco</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Estado chaleco</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Equipo botas</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Estado botas</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Ultimo control</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Observaciones</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Firma responsable</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Firma empleado</th>


                        
                    </tr>
                    </thead>
                    <tbody className='molecule-container-document-table__table__tbody'>
                    {data.map((doc) => (
                        <tr className='molecule-container-document-table__table__tbody__tr' key={doc.id}>
                            <input className='molecule-container-document-table__table__tbody__tr__td molecule-container-document-table__table__tbody__tr__td--checkbox' type="checkbox" />
                            <td className='molecule-container-document-table__table__tbody__tr__td molecule-container-document-table__table__tbody__tr__td--title'>
                                <div className='molecule-container-document-table__table__tbody__tr__td--title__div'>
                                    <div className='molecule-container-document-table__table__tbody__tr__td--title__div__div molecule-container-document-table__table__tbody__tr__td--title__div__div--new'>
                                        <span className='molecule-container-document-table__table__tbody__tr__td--title__div__div__span'>{doc.id_empleado}</span>
                                    </div>
                                </div>
                            </td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.firstName}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.departamento}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.posicion}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.fecha_registro}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.e_casco}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.es_casco}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.e_chaleco}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.es_chaleco}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.e_botas}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.es_botas}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.ultimo_control}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.observaciones}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.firma_responsable}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.firma_empleado}</td>
                        </tr>
                    ))}
                    </tbody>
                    
                </table>
                
                </div>
            }

{
                inventario && 
                <div className='molecule-container-document-table'>
                <table className='molecule-container-document-table__table'>
                    <thead className='molecule-container-document-table__table__thead'>
                    <tr className='molecule-container-document-table__table__thead__tr'>
                        <th className='molecule-container-document-table__table__thead__tr__th molecule-container-document-table__table__thead__tr__th--checkbox'><input type="checkbox" /></th>
                        <th className='molecule-container-document-table__table__thead__tr__th molecule-container-document-table__table__thead__tr__th--new'>ID Paquete</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Codigo de rastreo</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Descripcion</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Peso</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Dimenciones</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Fecha de ingreso almacen</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Estado del paquete</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Destino</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Fecha de entrega estimada</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Fecha de entrega real</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Destinatario</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Firma recibido</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Transportista</th>
                        <th className='molecule-container-document-table__table__thead__tr__th'>Observaciones</th>
                


                        
                    </tr>
                    </thead>
                    <tbody className='molecule-container-document-table__table__tbody'>
                    {dataI.map((doc) => (
                        <tr className='molecule-container-document-table__table__tbody__tr' key={doc.id}>
                            <input className='molecule-container-document-table__table__tbody__tr__td molecule-container-document-table__table__tbody__tr__td--checkbox' type="checkbox" />
                            <td className='molecule-container-document-table__table__tbody__tr__td molecule-container-document-table__table__tbody__tr__td--title'>
                                <div className='molecule-container-document-table__table__tbody__tr__td--title__div'>
                                    <div className='molecule-container-document-table__table__tbody__tr__td--title__div__div molecule-container-document-table__table__tbody__tr__td--title__div__div--new'>
                                        <span className='molecule-container-document-table__table__tbody__tr__td--title__div__div__span'>{doc.id_paquete}</span>
                                    </div>
                                </div>
                            </td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.codigo_rastreo}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.descripcion}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.peso}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.dimesiones}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.fecha_ingreso}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.e_paquete}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.destino}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.fecha_entrega_estimada}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.fecha_entrega_real}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.destinatario}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.firma_recibido}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.transportista}</td>
                            <td className='molecule-container-document-table__table__tbody__tr__td'>{doc.observaciones}</td>
                            
                        </tr>
                    ))}
                    </tbody>
                    
                </table>
                
                </div>
            }
            {
                video &&

                <div className='video'>
                    <video width="80%" controls>
                        <source src={videoDelta} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>

            }

            
        </>
    )
}

export default TableContact
