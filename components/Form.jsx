import { motion } from "framer-motion";
import {useFormik} from "formik";

const Form = () => {
    const cardVariants = {
        offscreen: {
            y: 300,

        },
        onscreen: {
            y: 0,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.6,

            }
        }
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            location: '',
            date: '',
            typeOfShows: '',
            time: '',
            message: ''
        },
        onSubmit: async (values) => {
            console.log(values);
            alert("Mensaje enviado con éxito");
        }
    })

    return (
        <>
            <div className={'md:px-80 px-10 md:py-[100px] pt-36 pb-10 flex md:flex-row flex-col '}>
                <div className={'flex flex-col justify-center '}>
                    <motion.h2 initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants} className={'font-bold md:text-8xl text-5xl '}>Realiza una cotización</motion.h2>
                    <motion.p initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1}} variants={cardVariants} className={'md:pr-36 md:pt-10 pr-0 pt-2 font-sans'}>Para una mejor comunicación, completa el formulario y así poder concretar algo bonito. ¡No dudes en hacerlo!</motion.p>
                </div>
                <form onSubmit={formik.handleSubmit} className={'flex flex-col items-center p-5 shadow rounded-3xl sm:p-10 bg-blue-50 md:w-[700px] w-[300px] md:mt-0 mt-5'}>
                    <div className={'w-full'}>
                        <label htmlFor="name" className="block text-xl font-medium text-gray-700">Nombre</label>
                        <input value={formik.values.name} onChange={formik.handleChange} {...formik.getFieldProps('name')} type="text" name="name" id="name" autoComplete="given-name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="email" className="block text-xl font-medium text-gray-700">Correo</label>
                        <input value={formik.values.email} onChange={formik.handleChange} {...formik.getFieldProps('email')} type="email" name="email" id="email" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="phone" className="block text-xl font-medium text-gray-700">Telefono</label>
                        <input value={formik.values.phone} onChange={formik.handleChange} {...formik.getFieldProps('phone')} type="text" name="phone" id="phone" autoComplete="phone" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className={'mt-6 w-full'}>
                        <label htmlFor="location" className="block text-xl font-medium text-gray-700">Dirección</label>
                        <input value={formik.values.location} onChange={formik.handleChange} {...formik.getFieldProps('location')} type="text" name="location" id="location" autoComplete="location" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className={'md:mt-6 mt-3  flex md:flex-row flex-col justify-between w-full '}>
                        <div className={''}>
                            <label htmlFor="date" className="block text-xl font-medium text-gray-700">Fecha</label>
                            <input value={formik.values.date} onChange={formik.handleChange} {...formik.getFieldProps('date')} type="date" name="date" id="date" autoComplete="date" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className={'md:mt-0 mt-6'}>
                            <label htmlFor="typeOfShows" className="block text-xl font-medium text-gray-700">Tipo de Evento</label>
                            <select  value={formik.values.typeOfShows} onChange={formik.handleChange} onBlur={formik.handleBlur} {...formik.getFieldProps('typeOfShows')} id="typeOfShows" name="typeOfShows" autoComplete="typeOfShows" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                <option value="Cumpleaños">Cumpleaños</option>
                                <option value="Matrimonio">Matrimonio</option>
                                <option value="Misa">Misa</option>
                                <option value="Sorpresas">Sorpresas</option>
                                <option value="Serenata">Serenata</option>
                                <option value="Otros">Otros</option>
                            </select>

                        </div>
                        <div className={'md:mt-0 mt-6'}>
                            <label htmlFor="time" className="block text-xl font-medium text-gray-700">Hora</label>
                            <input value={formik.values.time} onChange={formik.handleChange} {...formik.getFieldProps('time')} type="time" name="time" id="time" autoComplete="time" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div className="mt-6 w-full">
                        <label htmlFor="message" className="block text-xl font-medium text-gray-700">Mensaje</label>
                        <textarea value={formik.values.message} onChange={formik.handleChange} {...formik.getFieldProps('message')} id="message" name="message" rows={4} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue={''} />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="flex items-center justify-between py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Enviar
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 font-bold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>

                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;