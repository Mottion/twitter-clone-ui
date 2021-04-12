import React from 'react';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Fallowage,
  EditButton
} from './styles';
import Feed from "../Feed"


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined >Editar Perfil</EditButton>

        <h1>Adrian Elizandro</h1>
        <h2>@adrian_eli</h2>

         <p>
           Developer at <a href="https://rocketseat.com.br"> @Rocketseat </a>
         </p>
        
        <ul>
          <li>
            <LocationIcon />
            Paraná, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 02 de fevereiro de 2003
          </li>
        </ul>

        <Fallowage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672</strong> seguidores
          </span>
        </Fallowage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;