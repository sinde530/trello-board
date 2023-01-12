import React, { useEffect, useState } from "react";

import {
  Button,
  CardList,
  Container,
  EditTitleButton,
  Footer,
  Header,
  Input,
  Title,
} from "./styled";

export default function Column() {
  const [title, setTitle] = useState("To do");
  const [isShowingInput, setIsShowingInput] = useState(false);

  const onPressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      setIsShowingInput(false);
    }
  };

  useEffect(() => {
    const onClick = () => {
      if (isShowingInput) {
        setIsShowingInput(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [isShowingInput]);

  console.log(title);

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
      <CardList />
      <Footer>
        <Button>ABCD</Button>
      </Footer>
    </Container>
  );
}
