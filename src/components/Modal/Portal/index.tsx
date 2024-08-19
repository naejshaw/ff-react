import ReactDOM from 'react-dom'

interface IPortal{
    children?: any
}

export default function PortalModal ({children}:IPortal){
    const portal = document.getElementById('modal-root')
    return ReactDOM.createPortal(children, portal)
}