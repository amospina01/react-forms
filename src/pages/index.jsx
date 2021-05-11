import React from 'react';
import FilterableTable from './componentes/FilterableTable/FilterableTable.comp';


const ProductsPage = () => {
    let listaLicores = [
            {
                id:"l1",
                name:'Aguardiente',
                products:[
                    {
                        id:"l1p1",
                        name:'Antioqueño',
                        pais:'Colombia',
                        precio: 42100,
                        estado: 'Disponible'

                    },
                    {
                        id:"l1p2",
                        name:'Cristal',
                        pais:'Colombia',
                        precio: 49900,
                        estado: 'Disponible',

                    },
                    {
                        id:"l1p3",
                        name:'Real Silver',
                        pais:'Colombia',
                        precio: 64300,
                        estado: 'Agotado'

                    }
                ]    
            },
            {
                id:"l2",
                name:'Ron',
                products:[
                    {
                        id:"l2p1",
                        name:'Viejo de Caldas',
                        pais:'Colombia',
                        precio: 118000,
                        estado: 'Agotado'

                    },
                    {
                        id:"l2p2",
                        name:'Bacardi',
                        pais:'Cuba',
                        precio: 48800,
                        estado: 'Disponible',

                    },
                    {
                        id:"l2p3",
                        name:'Zacapa XO',
                        pais:'Guatemala',
                        precio: 431600,
                        estado: 'Agotado'

                    },
                    {
                        id:"l2p4",
                        name:'Medellin 3 años',
                        pais:'Colombia',
                        precio: 30600,
                        estado: 'Agotado'

                    }
                ]    
            },
            {
                id:"l3",
                name:'Whisky',
                products:[
                    {
                        id:"l3p1",
                        name:'Old Parr 12 años',
                        pais:'Escocia',
                        precio: 106000,
                        estado: 'Disponible'

                    },
                    {
                        id:"l3p2",
                        name:'Johnnie Walker',
                        pais:'Escocia',
                        precio: 67500,
                        estado: 'Agotado',

                    },
                    {
                        id:"l3p3",
                        name:'Singleton',
                        pais:'Escocia',
                        precio: 192700,
                        estado: 'Disponible'

                    },
                    {
                        id:"l3p4",
                        name:'Black and white',
                        pais:'Escocia',
                        precio: 41400,
                        estado: 'Disponible'

                    }
                ]    
            }
        ]

    
    



    return(
        <FilterableTable listaLicores={listaLicores}/>
      
    );
}

export default ProductsPage;