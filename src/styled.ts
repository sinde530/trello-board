import styled from '@emotion/styled';

export const Container = styled.div({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f2f2f2',
});

export const Board = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  marginBlock: '20px',
  backgroundColor: '#fff',
  padding: '10px',
  borderRadius: '4px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const List = styled.div({
  flex: '1',
  minHeight: '250px',
  marginRight: '20px',
  padding: '10px',
  backgroundColor: '#f9f9f9',
  borderRadius: '4px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
});

export const Card = styled.div({
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#fff',
  borderRadius: '4px',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
});

export const AddListButton = styled.button({
  marginTop: '10px',
  backgroundColor: '#dfe1e6',
  border: 'none',
  borderRadius: '4px',
  padding: '5px 10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#c4c9d2',
  },
});

export const AddCardButton = styled.button({
  marginTop: '5px',
  backgroundColor: '#dfe1e6',
  border: 'none',
  borderRadius: '4px',
  padding: '5px 10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#c4c9d2',
  },
});
