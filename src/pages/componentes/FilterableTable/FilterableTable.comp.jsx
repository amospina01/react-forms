import React, { useState } from 'react';
import Titulo from '../Titulo/Titulo.comp'
import LicoresTable from '../LicoresTable/LicoresTable.comp'
import LicoresPromocionTable from '../LicoresPromocionTable/LicoresPromocionTable.comp'

import  './FilterableTable.style.css'


const FilterableTable = (props) => {

    const [tipo, setTipo] = useState('l1');
    const [name, setName] = useState('');
    const [pais, setPais] = useState('');
    const [precio, setPrecio] = useState('');
    const [estado, setEstado] = useState('Disponible');

    const agregarLicor = (event) =>{
        event.preventDefault();
        console.log('tipo ' + tipo);
        console.log('name ' + name);
        console.log('pais ' + pais);
        console.log('precio ' + precio);
        console.log('estado ' + estado);
    }

    return(
        <div className='FilterableTable-container'>
            <Titulo/>
            <span className='products-form'>
                <form>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                Tipo
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                    <select value={tipo}
                     onChange={(event)=>{
                        setTipo(event.target.value);}}>
                        <option value="l1">Aguardiente</option>
                        <option value="l2">Ron</option>
                        <option value="l3">Whisky</option>
                    </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Marca
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={name}
                                onChange={(event)=>{
                                    setName(event.target.value);
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                pais
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={pais}
                                onChange={(event)=>{
                                    setPais(event.target.value);
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Precio
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={precio}
                                onChange={(event)=>{
                                    setPrecio(event.target.value);
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select value={estado}
                                onChange={(event)=>{
                                    setEstado(event.target.value);}}>
                                    <option value="Disponible">Disponible</option>
                                    <option value="Agotado">Agotado</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <button onClick={agregarLicor}>Agregar</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>


            </span>
            <LicoresTable listaLicores={props.listaLicores}/>
            
            <LicoresPromocionTable/>
            
        </div>
        
    );
}

export default FilterableTable;