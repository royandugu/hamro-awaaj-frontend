import TableDesign from "../../components/tableDesign/tableDesign";

const UserList=()=>{
    return <TableDesign title="All users" tableRows={["Name", "Username", "Email", "Age", "Gender"]} dataKeys={["banner", "title", "location", "startDate", "endDate"]} />
}
export default UserList;