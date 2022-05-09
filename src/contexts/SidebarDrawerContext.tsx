import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";


interface SidebardDrawerProviderProps {
    children: ReactNode;
}


type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebardDrawerProvider({ children }: SidebardDrawerProviderProps) {
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}


export const useSidebarDrawer = () => useContext(SidebarDrawerContext)