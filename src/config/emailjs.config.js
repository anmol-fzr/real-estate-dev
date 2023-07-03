export default function config({ name, email, phone }) {
    return {
        SecureToken: import.meta.env.VITE_APP_MAIL_TOKEN,
        From: import.meta.env.VITE_APP_MAIL_FROM,
        To: import.meta.env.VITE_APP_MAIL_TO,
        Subject: `Lead Generated on Vimaan Vihar at ${new Date().toGMTString().slice(0, 22)} `,
        Body: `<p style="font-size:150%" >A New Lead Generated on Vimaan Vihar at ${new Date().toGMTString().slice(0, 22)}.
        <br />
        name: <strong>${name}</strong>,
        <br />
        email: <strong><a href='mailto:${email}'>${email}</a></strong>,
        <br />
        phone: <strong>${phone}</strong>,
        </p>`
    }
}