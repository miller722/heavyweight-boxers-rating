import { heavyweightBoxers } from "../data/boxer-list.json";
import Table from "react-bootstrap/Table";

export default function TopList() {
  return (
    <div>
      <Table className="table-list" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Name</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Full Info</th>
          </tr>
        </thead>
        <tbody>
          {heavyweightBoxers.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{item.id}</td>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.weight}</td>
              <td className="text-center">
                <img src="images/icon-info.png" alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <img
        className="images-avatar"
        src="images/George-Foreman.webp"
        alt="avatar"
      /> */}
    </div>
  );
}
