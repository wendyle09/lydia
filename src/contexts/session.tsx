import { createContext } from "react";
import { Party } from "../types/party";

interface SessionContextProps {
	parties: Party[];
}

export const SessionContext = createContext<SessionContextProps>(
	{} as SessionContextProps
);
