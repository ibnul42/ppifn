import { useDispatch, useSelector } from "react-redux";
import Layout from "./layouts";

import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { defaultType } from "./Feature/Auth/authSlice";
import "./app.css";

function App() {
  const dispatch = useDispatch();
  const { selectedType } = useSelector((state) => state.auth);
  const [show, setShow] = useState(true);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const typeSelector = (e) => {
    dispatch(defaultType(e));
    setShow(false);
  };
  return (
    <div className="container">
      <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch static backdrop modal
        </Button> */}
        <Modal
          show={show}
          onHide={() => setShow(false)}
          backdrop="static"
          keyboard={false}
          className="w-100 h-100 d-flex justify-content-center align-items-center modal_main"
        >
          <div className="row">
            <div className="col-4 bg-dark p_50 fs-2 fw-bold">
              <p className="text-light">Blook</p>
            </div>
            <div className="col-8">
              <div className="h-75 content_oveflow">
                <h1 className="fw-bold">Welcome to the Aladdin® site</h1>

                <p className="h6">
                  Please read this page before proceeding, as it explains
                  certain restrictions imposed by law on the distribution of
                  this information and the jurisdictions in which our products
                  and services are authorised to be offered or sold. It is your
                  responsibility to be aware of and to observe all applicable
                  laws and regulations of any relevant jurisdiction.
                </p>
                <p>
                  By entering this site you are agreeing that you have reviewed
                  and agreed to the terms contained herein, including any legal
                  or regulatory restrictions, the Client and Vendor Privacy
                  Notice, which explains how we collect, use, and disclose your
                  personal information and how it is protected, and the Cookie
                  Notice, which explains how we use cookies on our sites.
                </p>
                <p className="h5">Additional Information</p>
                <p>
                  Investment involves risks. Past performance is not a guide to
                  future performance. The value of investments and the income
                  from them can fall as well as rise and is not guaranteed. You
                  may not get back the amount originally invested. Changes in
                  the rates of exchange between currencies may cause the value
                  of investments to diminish or increase.
                </p>
              </div>
              <div className="h-25">
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => typeSelector("decline")}
                  >
                    Decline
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => typeSelector("accept")}
                  >
                    Accept
                  </Button>
                </Modal.Footer>
              </div>
            </div>
          </div>
          {/* <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => typeSelector("decline")}>
              Decline
            </Button>
            <Button variant="primary" onClick={() => typeSelector("accept")}>
              Accept
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
      {selectedType ? <Layout /> : null}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
