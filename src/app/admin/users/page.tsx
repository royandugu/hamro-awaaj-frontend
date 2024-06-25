import UserList from "../../../../components/admin/pages/userList/userList";
import UniversalQueryClientProvider from "../../../../components/system/components/wrappers/queryClientProviders/queryClientProviders";

const Page = () => {
    return (
        <UniversalQueryClientProvider>
            <UserList />
        </UniversalQueryClientProvider>
    )
}
export default Page;
