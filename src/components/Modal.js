import React, { useEffect } from 'react'

const Modal = ({open, setOpen}) => {

  useEffect(() => {
    if(window.innerHeight > window.innerWidth) {
        setOpen(true);
    }
  }, [])
  
  return (
      <>
        {open && (
            <div className="modal">
                <p>try to rotate your mobile for a better experience</p>
                <button onClick={() => setOpen(false)}>
                    close
                </button>
            </div>
        )}
      </>
  )
}

export default Modal