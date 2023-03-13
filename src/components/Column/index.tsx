import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import {
  Button,
  CardList,
  Container,
  EditTitleButton,
  Footer,
  Header,
  Input,
  Title,
} from './styled';

import Card from '../Card';

export interface NewColumnProps {
  onSuccess: (id: string, title: string) => void;
  // onDismiss: () => void;
}

export default function Column({ onSuccess }: NewColumnProps) {
  const [title, setTitle] = useState('');
  const [isShowingInput, setIsShowingInput] = useState(false);
  const { id } = useParams();

  const onPressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (title) {
        onSuccess(id, title);
      }
    }
  };

  useEffect(() => {
    const onClick = () => {
      if (isShowingInput) {
        setIsShowingInput(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [isShowingInput]);

  return (
    <Container>
      <Header>
        {!isShowingInput && (
          <>
            <EditTitleButton
              onClick={() => {
                setIsShowingInput(true);
              }}
            />
            <Title>{title}</Title>
          </>
        )}
        {isShowingInput && (
          <Input
            rows={1}
            value={title}
            autoFocus
            onChange={({ target }) => setTitle(target.value)}
            onKeyDown={onPressEnter}
          />
        )}
      </Header>
      <CardList>
        <Card />
      </CardList>
      <Footer>
        <Button>ABCD</Button>
      </Footer>
    </Container>
  );
}
