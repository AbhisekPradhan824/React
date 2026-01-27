
import { DataGrid } from "../../components-library/data-grid";

export function PropsDemo() {
  return (
    <div className="container-fluid">
      <h1>Employee Details</h1>
      <DataGrid
        caption="Employee Data"
        fields={["Employee Name", "Employee Id", "Salary"]}
        tablestyle="table-boder"
        data={[
          { Empname: "Salini Khusi", empId: 102, Salary: 50000 },
          { Empname: "Abhisek Pradhan", empId: 103, Salary: 52000 },
        ]}
      />
      <hr />
      <DataGrid
        caption="Student Data"
        fields={["Student Name", "Student Id", "Branch", "Semester"]}
        tablestyle="table-primary table-striped"
        data={[
          {
            StdName: "Salini Khusi",
            stdId: 102,
            Branch: "B.ed",
            Semester: "3rd",
          },
          {
            StdName: "Abhisek Pradhan",
            stdId: 103,
            Branch: "B.Tech",
            Semester: "4th",
          },
        ]}
      />
    </div>
  );
}
