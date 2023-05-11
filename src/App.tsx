import './App.css';
import { useState } from 'react';
import {
  AddCardButton,
  AddListButton,
  Board,
  Card,
  Container,
  List,
} from './styled';

interface CardData {
  id: number;
  text: string;
}

interface ListData {
  id: number;
  title: string;
  cards: CardData[];
}

export default function App() {
  const [lists, setLists] = useState<ListData[]>([]);

  const addList = () => {
    const newList: ListData = {
      id: Date.now(),
      title: 'New List',
      cards: [],
    };

    setLists((prevLists) => [...prevLists, newList]);
  };

  const addCard = (listId: number) => {
    const newCard: CardData = {
      id: Date.now(),
      text: 'New Card',
    };

    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
          return { ...list, cards: [...list.cards, newCard] };
        }
        return list;
      }),
    );
  };

  return (
    <Container>
      <Board>
        {lists.map((list) => (
          <List key={list.id}>
            <h3>{list.title}</h3>
            <div>
              {list.cards.map((card) => (
                <Card key={card.id}>{card.text}</Card>
              ))}
            </div>
            <AddCardButton onClick={() => addCard(list.id)}>
              Add Card
            </AddCardButton>
          </List>
        ))}
        <AddListButton onClick={addList}>Add List</AddListButton>
      </Board>
    </Container>
  );
}
