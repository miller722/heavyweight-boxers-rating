import { heavyweightBoxers } from "../data/boxer-list.json";
import Table from "react-bootstrap/Table";

export default function TopList() {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {heavyweightBoxers.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.weight}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
