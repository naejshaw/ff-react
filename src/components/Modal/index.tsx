import React, {useEffect} from 'react'
import Portal from './Portal/index.tsx'

import {Dialog, Overlay} from './styles.js';

interface IModal{children?:any, open:boolean, onClose:()=>void}

const Modal = ({children, open, onClose}:IModal) => {
    useEffect(() => {
        function onEsc(e){
            if(e.keyCode === 27) onClose()
        }

        window.addEventListener('keydown', onEsc)

        return () => {
            window.removeEventListener('keydown', onEsc)
        }
    }, [onClose])

    if(!open) return null;

    function onOverlayClick(){
        onClose();
    }
    function onDialogClick(e){
        e.stopPropagation();
    }
    return (
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogClick}>{children}</Dialog>
            </Overlay>
        </Portal>
    )
}

export default Modal