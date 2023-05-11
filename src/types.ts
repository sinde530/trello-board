export interface CardData {
  id: number;
  text: string;
  description: string;
  label: any[];
  dueDate: string;
  assignedMembers: any[];
}

export interface ListData {
  id: number;
  title: string;
  cards: CardData[];
}
