import UserContextState from "../../../../components/user/context/contextStates"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <UserContextState>
            {children}
        </UserContextState>

    )
}
