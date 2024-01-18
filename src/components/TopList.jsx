import { heavyweightBoxers } from "../data/boxer-list.json";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import BoxerInfoModal from "./BoxerInfoModal";
import BoxerCharacteristics from "./BoxerCharacteristics";

export default function TopList() {
  const [boxerInfoShow, setBoxerInfoShow] = useState(false);
  const [boxerSkillsShow, setBoxerSkillsShow] = useState(false);
  const [selectedBoxer, setSelectedBoxer] = useState("");
  const handleInfoClick = (boxer) => {
    setBoxerInfoShow(true);
    setSelectedBoxer(boxer);
  };
  const handleSkillsClick = (boxer) => {
    setBoxerSkillsShow(true);
    setSelectedBoxer(boxer);
  };

  return (
    <div>
      <Table
        className="table-list  table-border"
        striped
        bordered
        hover
        variant="dark"
      >
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Name</th>
            <th className="text-center">Skills</th>
            <th className="text-center">Bio</th>
          </tr>
        </thead>
        <tbody>
          {heavyweightBoxers.map((item, index) => (
            <tr key={index}>
              <td className="text-center">{item.id}</td>
              <td>{item.name}</td>
              <td
                className="text-center img-icon"
                onClick={() => handleSkillsClick(item)}
              >
                <img src="images/icon-skills.png" alt="" />
              </td>
              <td
                className="text-center img-icon"
                onClick={() => handleInfoClick(item)}
              >
                <img src="images/icon-info.png" alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <BoxerInfoModal
        selectedBoxer={selectedBoxer}
        lgShow={boxerInfoShow}
        setLgShow={setBoxerInfoShow}
      />
      <BoxerCharacteristics
        lgShow={boxerSkillsShow}
        setLgShow={setBoxerSkillsShow}
        selectedBoxer={selectedBoxer}
      />
    </div>
  );
}
