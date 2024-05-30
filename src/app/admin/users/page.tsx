import TableDesign from "../../../../components/admin/tableDesign/tableDesign";
const Page = () => {
    return <TableDesign title="All users" tableRows={["Name", "Username", "Email", "Age", "Gender"]} dataKeys={["banner", "title", "location", "startDate", "endDate"]} />
}
export default Page;
