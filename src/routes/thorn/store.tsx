import { createContext } from "@builder.io/qwik";

export const context = createContext<{
  chaseCount: number;
}>("stuff");
