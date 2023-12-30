import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

export default function BoxerInfoModal({ lgShow, setLgShow }) {
  return (
    <div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            <div>
              <img
                className="title-info__image"
                src="images/Ike-Ibeabuchi-info.webp"
                alt=""
              />
            </div>
            {/* <div>speed:</div>
            <div>attack:</div>
            <div>hitpoint:</div>
            <div>strong:</div> */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ikemefula Charles "Ike" Ibeabuchi (born February 2, 1973) is a
          Nigerian former professional boxer who competed from 1994 to 1999 in
          the heavyweight division. He defeated the previously undefeated highly
          ranked contender David Tua in 1997 and another highly ranked contender
          and future world champion Chris Byrd in 1999. He was ranked by BoxRec
          as the world's No.8 heavyweight in 1997 and 1998, and as No.10
          heavyweight in 1999.[1] After compiling an impressive record of 20–0
          // eslint-disable-next-line react/no-unescaped-entities with 15
          knockouts, Ibeabuchi's natural talent and potential inside the ring
          was eventually overshadowed by emotional instability and violent
          tendencies in his personal life. After a series of run-ins with law
          enforcement, he was imprisoned in Las Vegas in July 1999, after
          submitting an Alford plea for charges on sexual misconduct. This also
          marked the end of his professional boxing career. In November 2015,
          Ibeabuchi was released from the custody of United States Immigration
          and Customs Enforcement (ICE) after completing his 16-year Nevada
          state prison sentence without incident. He announced his desire to
          return to the ring to resume his professional boxing career, but was
          rearrested before his comeback could take place.
        </Modal.Body>
      </Modal>
    </div>
  );
}
