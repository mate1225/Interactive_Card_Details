import { createContext } from "react";
import { CardContextProps } from "../util/interfaces";

export const CardContext = createContext<CardContextProps>(null!);
