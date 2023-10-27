const Modal = ({ children, setOnClose }) => {
    return (
        <div className="">

            <div className=" w-full h-full fixed top-0 left-0" style={{background: 'rgba(0,0,0,0.5)' }}>
                <button className="" >
                    <i className={`absolute top-0 right-0 mt-5 mr-5`} onClick={() => {setOnClose(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-6 h-6 text-yellow-200`}>
                            <path fillRule="evenodd" d="M10 11.414l4.95 4.95 1.414-1.414L11.414 10l4.95-4.95L14.95 3.636 10 8.586 5.05 3.636 3.636 5.05 8.586 10l-4.95 4.95L5.05 16.364 10 11.414z" clipRule="evenodd" />
                        </svg>
                    </i>
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal;