import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export type ProviderProps = { children: ReactNode; initialValue?: UserStore };

export type UserStore = {
  name: string;
  email: string;
  password: string;
  color: string;
  terms: boolean;
};

const UserContext = createContext<
  { user: UserStore; setUser: Dispatch<SetStateAction<UserStore>> } | undefined
>(undefined);

const UserProvider = ({ children, initialValue }: ProviderProps) => {
  const [user, setUser] = useState(
    initialValue ?? {
      name: '',
      email: '',
      password: '',
      color: '',
      terms: false,
    }
  );
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
