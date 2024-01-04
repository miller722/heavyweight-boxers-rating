import Modal from "react-bootstrap/Modal";
import { heavyweightBoxers } from "../data/boxer-list.json";

export default function BoxerInfoModal({ selectedBoxer, lgShow, setLgShow }) {
  return (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <div>
                <img
                  className="title-info__image"
                  src={selectedBoxer.puthImage}
                  alt=""
                />
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedBoxer.bio}</Modal.Body>
        </>
      </Modal>
    </div>
  );
}
