import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
    const [showContact, setShowContact] = useState(true);
    const [nom, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const toggleContact = () => {
        setShowContact(!showContact);
    };
    const handleClose = () => {
        setShowContact(false);
    };
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { // Update event type
        setMessage(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => { // Update event type
        e.preventDefault();

        // Perform any necessary actions with the form data
        console.log('Name:', nom);
        console.log('Email:', email);
        console.log('Message:', message);

        // Reset the form inputs
        setName('');
        setEmail('');
        setMessage('');
    };
    function AddContact() {
        
        const contact = {
            nom, email, message
        }
        fetch("/api/AddContact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Account created successfully!");
                    router.push("./myacount/Myaccount");
                } else {
                    console.error("Failed to create account", contact);
                }
            })
            .catch((error) => {
                console.error("Error creating account:", contact);
            });
    }
    return (
        <>
            {showContact && (
                <div className="contact-container">
                    <div className=" icon-menubar px-4 py-2">
                        <FaTimes className=" icon-close-menubar text-xl text-black cursor-pointer"
                        onClick={handleClose} />
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="contact-input">
                            <label htmlFor="nom" className="contact-text">Nom:</label>
                            <input type="text" placeholder="nom" className="input-mycontact"
                                value={nom} name="nom" onChange={handleNameChange} />
                        </div>
                        <div className="contact-input">
                            <label htmlFor="email" className="contact-text">Email:</label>
                            <input type="email" placeholder="Email" className="input-mycontact"
                                value={email} name="email" onChange={handleEmailChange} />
                        </div>
                        <div className="contact-input">
                            <label htmlFor="message" className="contact-text">Message:</label>
                            <textarea placeholder="Message" className="input-mycontact"
                                value={message}  name="message" onChange={handleMessageChange} /> {/* Update event type */}
                        </div>


                    </form>
                    <div className=" validate-contact-btn">
                        <button className=" contact-btn  bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2"
                        onClick={AddContact}>
                            Envoyer
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
