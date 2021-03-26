import React, {useState} from 'react'
import Modal from 'react-modal';
import Button from '../button/Button'
import Music from '../music/Music'
import './modal.css'

 const ModalWindow = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleOpenModal () {
    setModalIsOpen(true)
  }
  
  function handleCloseModal () {
    setModalIsOpen(false)
  }
  
  return (
    <>
      <Button 
        class = 'bttn bttn_middle'
        name = 'Setup'
        onClick={handleOpenModal} />

      <Modal 
          isOpen={modalIsOpen}
          contentLabel="Setup Modal"
          onRequestClose={handleCloseModal}
          ariaHideApp={false}
          className="modal">
         
          <Button 
            class = 'bttn bttn_small bttn_modal'
            name = {<i className="fas fa-times"/>} 
            onClick={handleCloseModal} />

          <h2 className = 'modal_text'>Setup</h2>
          <p className = 'modal_p'>Вы можете управлять игрой при помощи своей клавиатуры. 
          <br/>
          Для этого используйте цифровые клавиши или цифровой блок своей клавиатуры 1 - 9.
          <br/>
          Чтобы начать новую игру - нажмите Пробел или Enter. 
          <br/>
          Чтобы отменить последний ход - нажмите цифру 0</p>
        
          <Music/>
        
      </Modal>
    </>
  );
}


export default ModalWindow