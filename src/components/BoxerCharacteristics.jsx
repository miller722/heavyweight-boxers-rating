import React from "react";
import Modal from "react-bootstrap/Modal";
import { heavyweightBoxers } from "../data/boxer-list.json";

export default function BoxerCharacteristics({
  selectedBoxer,
  lgShow,
  setLgShow,
}) {
  const calculateProgress = (value) => {
    return (value / 10) * 100; // Процент заполненности прогресс-бара
  };

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
          <div className="boxing-record__wrapper">
            <h1 className="boxing-record__name">{selectedBoxer.name}</h1>
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
          <img
            className="img__wrapper"
            src={selectedBoxer.puthImageSkillsSecond}
            alt=""
          />
        </div>
        <div className="img__container">
          <img
            className="img__wrapper img--hidden"
            src={selectedBoxer.puthImageSkillsFirst}
            alt=""
          />
          <img
            className="img__wrapper img--hidden"
            src={selectedBoxer.puthImageSkillsSecond}
            alt=""
          />
        </div>
        <div className="skills__container">
          <div className="skills__item">
            {/* <div>
              <h5>Height</h5>
            </div>
            <div>
              <h5>Weight</h5>
            </div> */}
            <div>
              <h5>Anthropometric </h5>
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

          <div className="progress-bar__wrapper">
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${calculateProgress(
                    selectedBoxer.anthropometricBonus
                  )}%`,
                }}
              ></div>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${calculateProgress(selectedBoxer.punchingPower)}%`,
                }}
              ></div>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${calculateProgress(selectedBoxer.defense)}%`,
                }}
              ></div>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${calculateProgress(selectedBoxer.chin)}%`,
                }}
              ></div>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${calculateProgress(selectedBoxer.intelligence)}%`,
                }}
              ></div>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${calculateProgress(selectedBoxer.endurance)}%`,
                }}
              ></div>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${calculateProgress(selectedBoxer.speed)}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="skills__item-score">
            {/* <div>
              <p>{selectedBoxer.height}</p>
            </div>
            <div>
              <p>{selectedBoxer.weight}</p>
            </div> */}
            <div>
              <p>{selectedBoxer.anthropometricBonus}</p>
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
      </Modal>
    </div>
  );
}
