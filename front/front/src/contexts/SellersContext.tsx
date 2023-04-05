import { createContext, ReactNode, useState } from 'react';

export type ChangeSeller = (sellerId: keyof typeof sellers) => void;

type SellersContextType = {
    changeSeller: ChangeSeller,
    currentSeller: number,
}

type SellersContextProps = {
    children: ReactNode,
}

const initialValue = {
    changeSeller: () => {},
    currentSeller: 1,
}

const sellers = {
    leonardo: 1,
    marina: 2,
}

export const SellersContext = createContext<SellersContextType>(initialValue);

export const SellersContextProvider = ({ children }: SellersContextProps) => {

    const [currentSeller, setCurrentSeller] = useState<number>(initialValue.currentSeller);

    const changeSeller:ChangeSeller = (sellerId)  => {
       setCurrentSeller(sellers[sellerId]);
       console.log(sellerId);
       console.log('chamou');
    }

    return (
        <SellersContext.Provider value={{currentSeller, changeSeller}}>
            {children}
        </SellersContext.Provider>
    )
}
