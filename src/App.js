import { useDispatch, useSelector } from "react-redux";
import Layout from "./layouts";

import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { defaultType } from "./Feature/Auth/authSlice";

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
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => typeSelector("participant")}
            >
              Participants
            </Button>
            <Button variant="primary" onClick={() => typeSelector("pool")}>
              Pools
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      {selectedType ? <Layout /> : null}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
