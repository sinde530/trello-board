import './App.css';
import { useState } from 'react';
import {
  AddBox,
  AddCardButton,
  AddListButton,
  Board,
  CancelButton,
  Card,
  Container,
  InputField,
  List,
  ListBox,
  TitleText,
} from './styled';
import { CardData, ListData } from './types';

export default function App() {
  const [newListTitle, setNewListTitle] = useState<string>('');
  const [isAddingList, setIsAddingList] = useState<boolean>(false);
  const [newCardText, setNewCardText] = useState<string>('');
  const [newCardDescription, setNewCardDescription] = useState<string>('');
  const [newCardLabels, setNewCardLabels] = useState<string[]>([]);
  const [newCardDueDate, setNewCardDueDate] = useState<string>('');
  const [newCardAssignedMembers, setNewCardAssignedMembers] = useState<
    string[]
  >([]);

  const [lists, setLists] = useState<ListData[]>([
    {
      id: 1,
      title: 'To Do',
      cards: [],
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [],
    },
    {
      id: 3,
      title: 'Done',
      cards: [],
    },
  ]);

  const addList = () => {
    if (newListTitle.trim() === '') {
      return;
    }

    const newList: ListData = {
      id: Date.now(),
      title: newListTitle,
      cards: [],
    };

    setLists((prevLists) => [...prevLists, newList]);
    setNewListTitle('');
    setIsAddingList(false);
  };

  const cancelAddList = () => {
    setIsAddingList(false);
    setNewListTitle('');
  };

  const toggleAddList = () => {
    setIsAddingList((prev) => !prev);
  };

  const addCard = (listId: number) => {
    const newCard: CardData = {
      id: Date.now(),
      text: newCardText,
      description: newCardDescription,
      label: newCardLabels,
      dueDate: newCardDueDate,
      assignedMembers: newCardAssignedMembers,
    };

    const updateLists = lists.map((list) => {
      if (list.id === listId) {
        return { ...list, cards: [...list.cards, newCard] };
      }
      return list;
    });
    setLists(updateLists);

    setNewCardText('');
    setNewCardDescription('');
    setNewCardLabels([]);
    setNewCardDueDate('');
    setNewCardAssignedMembers([]);
  };

  return (
    <Container>
      <Board>
        {lists.map((list) => (
          <List key={list.id}>
            <TitleText>{list.title}</TitleText>
            <ListBox>
              {list.cards.map((card) => (
                <Card key={card.id}>{card.text}</Card>
              ))}
            </ListBox>
            <AddCardButton onClick={() => addCard(list.id)}>
              Add Card
            </AddCardButton>
          </List>
        ))}
        {isAddingList ? (
          <>
            <InputField
              type="text"
              value={newListTitle}
              onChange={(e) => setNewListTitle(e.target.value)}
            />
            <AddBox>
              <CancelButton type="button" onClick={cancelAddList}>
                Cancel
              </CancelButton>
              <AddListButton onClick={addList}>Add List</AddListButton>
            </AddBox>
          </>
        ) : (
          <AddListButton onClick={toggleAddList}>Add List</AddListButton>
        )}
      </Board>
      {isAddingList && (
        <div>
          <InputField
            type="text"
            value={newCardText}
            onChange={(e) => setNewCardText(e.target.value)}
          />
          <InputField
            type="text"
            value={newCardDescription}
            onChange={(e) => setNewCardDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
      )}
    </Container>
  );
}
