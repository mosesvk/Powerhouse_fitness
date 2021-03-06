import React, {useRef} from 'react'
import './programs.scss'
import {FaTimes} from 'react-icons/fa';
import Modal from '../Modal/Modal'
import ModalTwo from '../Modal/ModalTwo'

const Programs = () => {
  const modalRef = useRef();
  const modalRef2 = useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };
  const openModal2 = () => {
    modalRef2.current.openModal();
  }

  return (
    <div className='program-container'>
      <div className='program-wrap'>
        <div className="card">
          <div className="card__image">
            <div className="blue-filter card-1-img">
              <button className="btn-reveal" onClick={openModal}>See Details</button>
            </div>
          </div>
          <div className="price-title">
            <h2 className="ca rd-title card-title-1">Individual Training</h2>
            <p className="price">$ 89</p>
          </div>
        </div>
        <div className="card">
          <div className="card__image">
            <div className="blue-filter card-2-img">
              <button className="btn-reveal" onClick={openModal2}>See Details</button>
            </div>
          </div>
          <div className="price-title">
            <h2 className="card-title card-title-2">Group Training</h2>
            <p className="price">$ 49 per</p>
          </div>

        </div>
        <Modal ref={modalRef}>
          <button onClick={() => modalRef.current.close()}><FaTimes/></button>
          <h1>Individual Training</h1>
          <p>
            loremNostrud ipsum dolor culpa dolore nulla sunt ullamco laboris ad commodo deserunt. Amet magna sit cillum adipisicing voluptate ullamco duis cupidatat aliqua qui occaecat Lorem et ea. Ipsum amet ullamco voluptate cillum anim in velit quis ea aliquip fugiat nisi exercitation reprehenderit.
          </p>
        </Modal>
        <ModalTwo ref={modalRef2}>
          <button onClick={() => modalRef2.current.close()}><FaTimes/></button>
          <h1 className="modal-h1">Group Training</h1>
          <p className="modal-p">
            loremNostrud ipsum dolor culpa dolore nulla sunt ullamco laboris ad commodo deserunt. Amet magna sit cillum adipisicing voluptate ullamco duis cupidatat aliqua qui occaecat Lorem et ea. Ipsum amet ullamco voluptate cillum anim in velit quis ea aliquip fugiat nisi exercitation reprehenderit.
          </p>
        </ModalTwo>
      </div>
    </div>
  )
}

export default Programs
