import React from 'react';

import { Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  ComentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>

            <Dot />

            <time>30 de mar</time>
          </Header>

          <Description>Foguetes não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <ComentIcon />
              32
            </Status>

            <Status>
              <RetweetIcon />
              66
            </Status>

            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
          
        </Content>
      </Body>

    </Container>
  );
}

export default Tweet;