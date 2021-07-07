import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'
export default function CharacterCard(props) {
  const {name,image,status,species,gender}=props;
  return (
    <div class="card">
      <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
  <span className='date'>Status: {status}</span>
      </Card.Meta>
      <Card.Description>
        Gender: {gender}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {species}
      </a>
    </Card.Content>
  </Card>
    </div>
  )
}
