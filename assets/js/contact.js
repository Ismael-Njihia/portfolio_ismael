/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
     contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
    e.preventDefault()

    //SErviceId -templateId -#form -publicKey
    //serviceId - service_tio49hn
    emailjs.sendForm('service_npc2y53','template_wp44vwk','#contact-form','o64mKdSkgvN5rxYNX')
    .then(()=>{
        //show the sent Message
        contactMessage.textContent = 'Your message has been sent'

        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 6000)

        contactForm.reset()
    }, () =>{
        contactMessage.textContent = 'Your message was not sent'
    })
}

contactForm.addEventListener('submit', sendEmail)