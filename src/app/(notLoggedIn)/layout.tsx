import LoggedInNavigator from "../../../components/system/loggedInNavigator/loggedInNavigator"
import HeaderAndFooterLayout from "../../../components/user/layouts/headerAndFooterLayout"

/* 
     <Link href="#hero" className="mt-0 hover:text-primary"> Home </Link>
                    <Link href="#about" className="mt-0 hover:text-primary"> About </Link>
                    <Link href="#services" className="mt-0 hover:text-primary"> Services </Link>
                    <Link href="#contact" className="mt-0 hover:text-primary"> Contact </Link>
                    <Link href="#" className="mt-0 hover:text-primary"> 
                        <div className="flex gap-2 items-center" onClick={()=>setPopUpNumber ? setPopUpNumber(0) : ''}>
                            <FaRegUserCircle/>
                            Account 
                        </div>
                    </Link>
*/

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <LoggedInNavigator>

            <HeaderAndFooterLayout >
                {children}
            </HeaderAndFooterLayout>
        </LoggedInNavigator>

    )
}
