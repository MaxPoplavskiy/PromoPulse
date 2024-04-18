import { createContext } from "react";
import { UserContext } from "./types/user-context.type";

export const userContext = createContext<null | UserContext>(null);