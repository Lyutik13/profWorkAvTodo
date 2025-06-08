// src/pages/BoardPage.tsx
import { useParams } from "react-router-dom";

export function BoardPage() {
  const { id } = useParams<{ id: string }>();
  return <div>Доска с ID: {id}</div>;
}
