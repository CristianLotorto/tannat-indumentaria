import React, { useContext, useEffect } from 'react'
import {styled} from '@mui/material'
import { useAxiosFetch } from '../custom-hooks/useAxios';
import AdminProductCard from './AdminProductCard'
import FilterComponent from '../Shared/FilterComponent';
import ToastDelete from '../Shared/ToastDelete';
import { cartContext } from '../Context';
import { providerContext } from '../ProviderContextComponent';
import Loader from '../Loader';

const AdminContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection:'column',
  width:'100%'
})

const Wall = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  background: `white`,
  minWidth:'45rem',
  '@media (max-width: 650px)': {
    minWidth:'0',
  }
})

const ContainerDashboard = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent:'space-around',
  minHeight:'65rem',
  '@media (max-width: 700px)': {
    minHeight:'0',
  }
})

const BannerGreeting = styled('div')({
  width:'100%',
  height:'4rem',
  backgroundColor:'#151c29'
})

const ContainerAdminSearch = styled('div')({
  display:'flex',
  alignItems:'center',
  margin:'0 3rem',
  height:'3rem',
})



const AdminInterface = () => {

  const {fetchData, apiData} = useAxiosFetch();
  const { succ } = useContext(cartContext);
  const { shouldFetchData } = useContext(providerContext);

  useEffect(() => {
    if(shouldFetchData) {
      fetchData('http://localhost:4000/api/product');
    }

  }, [!apiData]);

  const filters = [
    'Temporada',
    'Genero',
    'Categoria'
  ];

// La Palabras tienen que coincidir exactamente entre filters y checks para que funcione.
// Ej: 'temporada !== Temporada' y 'Temporada === Temporada'.

  const checks = {
    'Temporada': ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    'Genero': ['Hombre', 'Mujer', 'Unisex', 'Niño', 'Niña'],
    'Categoria': ['Camisas', 'Pantalones', 'Camperas', 'Vestidos', 'Remeras']
  };



  return (
    <AdminContainer>
      <BannerGreeting>
        <p style={{color:'white', fontSize:'1.5rem', fontWeight:'600', paddingLeft:'1rem'}}>¡Holaa! Que vamos a hacer hoy?</p>
      </BannerGreeting>
      <ContainerAdminSearch>
        <h3>Mis productos</h3>
      </ContainerAdminSearch>
      <ContainerDashboard>
        {!shouldFetchData && <Loader />}
        <Wall>
          {apiData?.data.map((card) => (
              <AdminProductCard
              key={card?._id}
              imgId={card?.image}
              productName={card?.title}
              productDescription={card?.description}
              productSizes={card?.sizes}
              productPrice={card?.price}
              card={card}
              index={card?._id}
              />
              ))}
        </Wall>
        <FilterComponent
          filters={filters}
          checks={checks}
        />
      </ContainerDashboard>
      {succ && <ToastDelete />}
    </ AdminContainer>
  )
}

export default AdminInterface
