import React from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { heavyweightBoxers } from "../data/boxer-list.json";

export default function BoxerCharacteristics({
  selectedBoxer,
  lgShow,
  setLgShow,
}) {
  return (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <div className="boxing-record__container">
          <img
            className="img__wrapper "
            src={selectedBoxer.puthImageSkillsFirst}
            alt=""
          />
          <div>
            <h1 className="boxing-record__name">{selectedBoxer.name}</h1>
            <div className="boxing-record__wrapper">
              <h4>Boxing record:</h4>
              <div className="boxing-record__title">
                <div className="boxing-record__item">
                  <h5>Total fights:</h5>
                  <span>{selectedBoxer.totalFights}</span>
                </div>
                <div className="boxing-record__item">
                  <h5>Wins:</h5>
                  <span>{selectedBoxer.wins}</span>
                </div>
                <div className="boxing-record__item">
                  <h5>Wins by KO:</h5>
                  <span>{selectedBoxer.winsByKO}</span>
                </div>
                <div className="boxing-record__item">
                  <h5>Losses:</h5>
                  <span>{selectedBoxer.losses}</span>
                </div>
                {/* <div>
    <h5>Draws:</h5>
    <span>{selectedBoxer.draws}</span>
  </div> */}
              </div>
            </div>
          </div>
          <img
            className="img__wrapper "
            src={selectedBoxer.puthImageSkillsSecond}
            alt=""
          />
        </div>
        <div className="skills__container">
          <div className="skills__item">
            <div>
              <h5>Height</h5>
            </div>
            <div>
              <h5>Weight</h5>
            </div>
            <div>
              <h5>Height Bonus</h5>
            </div>
            <div>
              <h5>Punching Power</h5>
            </div>
            <div>
              <h5>Defense</h5>
            </div>
            <div>
              <h5>Chin</h5>
            </div>
            <div>
              <h5>Intelligence</h5>
            </div>
            <div>
              <h5>Endurance</h5>
            </div>
            <div>
              <h5>Speed</h5>
            </div>
            <div>
              <h5>Total</h5>
            </div>
          </div>
          <div className="skills__item-score">
            <div>
              <p>{selectedBoxer.height}</p>
            </div>
            <div>
              <p>{selectedBoxer.weight}</p>
            </div>
            <div>
              <p>{selectedBoxer.heightAdvantage}</p>
            </div>
            <div>
              <p>{selectedBoxer.punchingPower}</p>
            </div>
            <div>
              <p>{selectedBoxer.defense}</p>
            </div>
            <div>
              <p>{selectedBoxer.chin}</p>
            </div>
            <div>
              <p>{selectedBoxer.intelligence}</p>
            </div>
            <div>
              <p>{selectedBoxer.endurance}</p>
            </div>
            <div>
              <p>{selectedBoxer.speed}</p>
            </div>
            <div>
              <p>{selectedBoxer.total}</p>
            </div>
          </div>
        </div>
        <>
          {/* <Table className="table-list" striped bordered hover variant="dark">
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Height Advantage</th>
                <th>Punching Power</th>
                <th>Defense</th>
                <th>Chin</th>
                <th>Intelligence</th>
                <th>Endurance</th>
                <th>Speed</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>{selectedBoxer.name}</td>
                <td>{selectedBoxer.height}</td>
                <td>{selectedBoxer.weight}</td>
                <td>{selectedBoxer.heightAdvantage}</td>
                <td>{selectedBoxer.punchingPower}</td>
                <td>{selectedBoxer.defense}</td>
                <td>{selectedBoxer.chin}</td>
                <td>{selectedBoxer.intelligence}</td>
                <td>{selectedBoxer.endurance}</td>
                <td>{selectedBoxer.speed}</td>
                <td>{selectedBoxer.total}</td>
              </tr>
            </tbody>
          </Table> */}
        </>
      </Modal>
    </div>
  );
}
