import emailjs from '@emailjs/nodejs';


const templateParams = {
    name: 'James',
    notes: 'Check this out!',
};

emailjs.send('service_yxs5g58', 'template_yg8iyfa', templateParams, {
    publicKey: '92IulNKPYfpyDYIaA',
    privateKey: '1-JhZXd1YT4MecTGvTElv', // optional, highly recommended for security reasons
}).then((response) => {
    console.log('SUCCESS!', response.status, response.text);
},
    (err) => {
        console.log('FAILED...', err);
    },
);