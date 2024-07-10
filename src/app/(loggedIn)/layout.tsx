import ContextState from "../../../components/system/context/loggedInContextStates";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ContextState>
            {children}
        </ContextState>

    )
}
