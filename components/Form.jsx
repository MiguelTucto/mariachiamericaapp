const Form = () => {
    return (
        <>
            <div className={'md:px-80 px-10 md:py-[100px] pt-32 pb-20 flex md:flex-row flex-col'}>
                <div className={'flex flex-col justify-center '}>
                    <h2 className={'font-bold md:text-8xl text-5xl '}>Realiza una cotización</h2>
                    <p className={'md:pr-36 md:pt-10 pr-0 pt-5'}>Para una mejor comunicación, completa el formulario y así poder concretar algo bonito. ¡No dudes en hacerlo!</p>
                </div>
                <form className={' p-5 shadow rounded-3xl sm:p-10 bg-blue-50 md:w-[700px] w-[300px] md:mt-0 mt-5'}>
                    <div>
                        <label htmlFor="name" className="block text-xl font-medium text-gray-700">Nombre</label>
                        <input type="text" name="name" id="name" autoComplete="given-name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="email" className="block text-xl font-medium text-gray-700">Correo</label>
                        <input type="email" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="phone" className="block text-xl font-medium text-gray-700">Telefono</label>
                        <input type="text" name="phone" id="phone" autoComplete="phone" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className={'mt-6'}>
                        <label htmlFor="location" className="block text-xl font-medium text-gray-700">Dirección</label>
                        <input type="text" name="location" id="location" autoComplete="location" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className={'md:mt-6 mt-3  flex md:flex-row flex-col justify-between '}>
                        <div className={''}>
                            <label htmlFor="date" className="block text-xl font-medium text-gray-700">Fecha</label>
                            <input type="date" name="date" id="date" autoComplete="date" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className={'md:mt-0 mt-6'}>
                            <label htmlFor="typeOfShows" className="block text-xl font-medium text-gray-700">Tipo de Evento</label>
                            <select id="typeOfShows" name="typeOfShows" autoComplete="typeOfShows" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                <option value="1">Cumpleaños</option>
                                <option value="2">Matrimonio</option>
                                <option value="3">Misa</option>
                                <option value="4">Sorpresas</option>
                                <option value="5">Serenata</option>
                                <option value="6">Otros</option>
                            </select>

                        </div>
                        <div className={'md:mt-0 mt-6'}>
                            <label htmlFor="time" className="block text-xl font-medium text-gray-700">Hora</label>
                            <input type="time" name="time" id="time" autoComplete="time" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="message" className="block text-xl font-medium text-gray-700">Mensaje</label>
                        <textarea id="message" name="message" rows={4} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={''} />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;