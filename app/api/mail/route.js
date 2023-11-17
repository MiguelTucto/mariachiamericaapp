import {NextResponse} from "next/server";
import {mailOptions, transporter} from "@/config/nodemailer";

export async function POST ( request ) {
    const { name, email, phone, location, date, typeOfShows, time, message } = await request.json();

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `SOLICITUD DE CONTRATO MARIACHI AMERICA`,
            text: "it's a test email",
            html: `<h1>El sr(a) ${name} ha solicitado un ${typeOfShows}</h1><ul><li>Telefono: ${phone}</li><li>Lugar: ${location}</li><li>Fecha: ${date}</li><li>Hora: ${time}</li><li>Mensaje: ${message}</li></ul>`
        });

        return NextResponse.json({ status: 201 });
    } catch (e) {
        return NextResponse.json({ error: e.message, status: 500 })
    }
}