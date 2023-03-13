import { useState } from 'react';
import { Container, Title } from './styled';

interface Props {
  title: string;
}

export default function Card({ title }: Props) {
  const [currentTitle, setCurrentTitle] = useState(title);
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
