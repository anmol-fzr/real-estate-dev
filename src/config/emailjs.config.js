export default function config({ name, email, phone }) {
    const currentTime = new Date().toGMTString().slice(0, 16) + " " + new Date().toLocaleTimeString()
    return {
        SecureToken: import.meta.env.VITE_APP_MAIL_TOKEN,
        From: import.meta.env.VITE_APP_MAIL_FROM,
        To: import.meta.env.VITE_APP_MAIL_TO,
        Subject: `Lead Generated on Vimaan Vihar at ${currentTime} `,

        Body: `<p style="font-size:150%" >A New Lead Generated on Vimaan Vihar at ${currentTime}.
        ${!!name ? `
        <br />
        name: <strong>${name}</strong>,
        `: ``}
        ${!!email ? `
        <br />
        email: <strong><a href='mailto:${email}'>${email}</a></strong>,
        `: ``}
        ${!!phone ? `
        <br />
        phone: <strong>${phone}</strong>,
        `: ``}
        </p>`
    }
}