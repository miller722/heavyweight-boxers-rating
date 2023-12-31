import { heavyweightBoxers } from "../data/boxer-list.json";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import BoxerInfoModal from "./BoxerInfoModal";

export default function TopList() {
  const [lgShow, setLgShow] = useState(false);
  const [selectedBoxer, setSelectedBoxer] = useState("");
  const handleInfoClick = (boxer) => {
    setLgShow(true);
    setSelectedBoxer(boxer);
  };
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
              <td className="text-center" onClick={() => handleInfoClick(item)}>
                <img src="images/icon-info.png" alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <BoxerInfoModal
        selectedBoxer={selectedBoxer}
        lgShow={lgShow}
        setLgShow={setLgShow}
      />
    </div>
  );
}
