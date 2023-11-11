
import React, { useEffect, useState } from "react";
import { FaTimes, FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";
export default function CreateAccount() {
    const [isOpen, setIsOpen] = useState(true);
    const [isVerified, setIsVerified] = useState(false);
    const [nom, setNom] = useState('')
    const [prenom, setPrénom] = useState('')
    const [civilite, setCivilité] = useState('')
    const [sexe, setSexe] = useState('')
    const [specialite, setSpécialité] = useState('')
    const [mode_exercice, setMode] = useState('')
    const [annee_exercice, setannee] = useState('')
    const [pays, setPays] = useState('')
    const [code_postale, setCodepostal] = useState('')
    const [rpps, setRPPS] = useState('')
    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setMotdepasse] = useState('')
    const [confirmPassword, setConfirmMotdepasse] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [confirmEmail, setConfirmEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const router = useRouter();
    const handleCloseClick = () => {
        setIsOpen(false);
    };

    
    const handleRecaptchaVerify = (token: string | null) => {
        if (token) {
            setIsVerified(true);
        }
    };
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleConfirmEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const confirmEmail = e.target.value;
        setEmailError(email !== confirmEmail);
        setConfirmEmail(confirmEmail);
      };
      
    function CreateAcount() {
        if (password !== confirmPassword) {
            setPasswordError(true);
            return;
        } else {
            setPasswordError(false);
        }
        const acount = {
            nom, prenom, civilite, sexe, specialite, mode_exercice, annee_exercice, pays,
            code_postale, rpps, pseudo, email, password,
        }
        fetch("/api/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(acount),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("Account created successfully!");
                    setIsOpen(false);
                    router.push("/myacount/Myaccount");
                } else {
                    console.error("Failed to create account", acount);
                }
            })
            .catch((error) => {
                console.error("Error creating account:", acount);
            });
    }
    return (
        <>
            <div className={`create-account ${isOpen ? "" : "hidden"}`}>
                <div className="first-section">
                    <h1>S'inscrire :</h1>
                    <FaTimes className="close-acount-icon" onClick={handleCloseClick} />
                </div>
                <div className="utilisateur">
                    <form>
                        <div className="info-utilisateur">
                            <div className="input-acount">
                                <label /*htmlFor="text"*/ htmlFor="input-field">Nom</label>
                                <input className="form-input" id="input-field" required type="text"
                                    value={nom} name="nom" 
                                    onChange={(e) => {
                                        setNom(e.target.value);
                                      }} />
                            </div>
                            <div className="input-acount">
                                <label htmlFor="text">Prénom</label>
                                <input type="text" name="prenom" className="form-input" id="input-field"
                                    value={prenom} required onChange={(e) => { setPrénom(e.target.value) }} />
                            </div>
                            <div className="input-acount">
                                <label htmlFor="choices">Civilité (*)</label>
                                <select name="civilite" className="form-input" id="input-field"
                                    value={civilite} required onChange={(e) => { setCivilité(e.target.value) }}>
                                    <option value=""></option>
                                    <option value="choice1">Pr</option>
                                    <option value="choice2">Dr</option>
                                    <option value="choice3">M.</option>
                                    <option value="choice3">Mme</option>
                                    <option value="choice3">Mlle</option>
                                </select>
                            </div>
                            <div className="input-acount">
                                <label htmlFor="choices">Sexe (*)</label>
                                <select name="sexe" className="form-input" id="input-field"
                                    value={sexe} required onChange={(e) => { setSexe(e.target.value) }}>
                                    <option value=""></option>
                                    <option value="choice1">Indifini</option>
                                    <option value="choice2">Homme</option>
                                    <option value="choice3">Femme</option>
                                </select>
                            </div>
                            <div className="input-acount">
                                <label htmlFor="choices">Spécialité (*)</label>
                                <select name="specialite" className="form-input" id="input-field"
                                    value={specialite} required onChange={(e) => { setSpécialité(e.target.value) }}>
                                    <option value=""></option>
                                    <option value="choice1">Addictologie</option>
                                    <option value="choice2">Allorgologie</option>
                                    <option value="choice3">Anathomopathologie</option>
                                    <option value="choice3">Anasthésie-Réanimation</option>
                                    <option value="choice3">Angiologie-Phlébologie</option>
                                    <option value="choice3">Biologie</option>
                                    <option value="choice3">Cardiologie</option>
                                    <option value="choice3">Chercheur</option>
                                    <option value="choice3">Chirurgie</option>
                                    <option value="choice3">Dermatologie</option>
                                    <option value="choice3">Diabéto-Endocrinologie</option>
                                    <option value="choice3">Gériatrie</option>
                                    <option value="choice3">Gynéco-obstétrique</option>
                                    <option value="choice3">Hématologie</option>
                                    <option value="choice3">Hépato-Gastro-entérologie</option>
                                    <option value="choice3">Industrie pharmaceutique</option>
                                    <option value="choice3">Infecttiologie</option>
                                    <option value="choice3">Infermier(e)</option>
                                    <option value="choice3">Kinésithérapie</option>
                                    <option value="choice3">Médecine d'urgence</option>
                                    <option value="choice3">Médecine du travail</option>
                                    <option value="choice3">Médecine generale</option>
                                    <option value="choice3">Médecine interne</option>
                                    <option value="choice3">Médecine physique et de réadaptation</option>
                                    <option value="choice3">Néphrologie</option>
                                    <option value="choice3">Etudiant en medecine</option>
                                    <option value="choice3">Autres</option>
                                </select>

                            </div>
                            <div className="input-acount">
                                <label htmlFor="choices">Mode d'exercice (*)</label>
                                <select name="mode_exercice" className="form-input" id="input-field"
                                    value={mode_exercice} required onChange={(e) => { setMode(e.target.value) }}>
                                    <option value=""></option>
                                    <option value="choice1">Hosp/Lib</option>
                                    <option value="choice2">Hospitalier</option>
                                    <option value="choice3">Libéral</option>
                                </select>
                            </div>
                            <div className="input-acount">
                                <label htmlFor="number">Première année d’exercice</label>
                                <input type="number" name="annee_exercice" className="form-input" id="input-field"
                                    value={annee_exercice} required onChange={(e) => { setannee(e.target.value) }} />
                            </div>
                            <div className="input-acount">
                                <label htmlFor="choices">Pays (*)</label>
                                <select name="pays" className="form-input" id="input-field"
                                    value={pays} required onChange={(e) => { setPays(e.target.value) }}>
                                    <option value="">France</option>
                                    <option value="choice1">Algeria</option>
                                    <option value="choice2">Brazil</option>
                                    <option value="choice3">Canada</option>
                                    <option value="choice3">Germany</option>
                                    <option value="choice3">India</option>
                                    <option value="choice3">Japan</option>
                                    <option value="choice3">Korea</option>
                                    <option value="choice3">Mexico</option>
                                    <option value="">Netherlands</option>
                                    <option value="">Oman</option>
                                    <option value="">Portugal</option>
                                    <option value="">Qatar</option>
                                    <option value="">Russia</option>
                                    <option value="">Spain</option>
                                    <option value="">Turkey</option>
                                    <option value="">Tunis</option>
                                    <option value="">Autres</option>
                                </select>
                            </div>
                            <div className="input-acount">
                                <label htmlFor="number">Code postal (*)</label>
                                <input type="number" name="code_postale" className="form-input" id="input-field"
                                    value={code_postale} required onChange={(e) => { setCodepostal(e.target.value) }} />
                            </div>
                            <div className="input-acount">
                                <label htmlFor="text">RPPS (*)</label>
                                <input type="text" name="rpps" className="form-input" id="input-field"
                                    value={rpps} required onChange={(e) => { setRPPS(e.target.value) }} />
                            </div>
                            <div className="input-acount">
                                <label htmlFor="text">Pseudo</label>
                                <input type="text" name="pseudo" className="form-input" id="input-field"
                                    value={pseudo} required onChange={(e) => { setPseudo(e.target.value) }} />
                            </div>
                        </div>
                        <div className="gmail-account">
                            <div className="input-acount">
                                <label htmlFor="email">Email (*)</label>
                                <input type="email" placeholder="Donner votre compte Gmail" name="email"
                                    value={email} className="form-input" id="input-field"
                                    required onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="input-acount">
                                <label htmlFor="email">Confirmation Email (*)</label>
                                <input type="email" placeholder="Confirmer  votre compte Gmail"
                                 name="Confirmation Email" className="form-input" 
                                 id="input-field" required onChange={handleConfirmEmailChange}/>
                            </div>
                            {emailError && <p className="error-message">Les adresses e-mail ne correspondent pas.</p>}

                        </div>
                        <div className="pwd">

                            <div className="input-acount">
                                <label htmlFor="password">Mot de passe (*) </label>
                                <div className={`input-acount ${passwordError ? "error" : ""}`}>
                                    <input type={showPassword ? "text" : "password"} name="password"

                                        value={password} id="input-field" required
                                        onChange={(e) => {
                                            setMotdepasse(e.target.value);

                                        }} />
                                    <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>

                            </div>
                            <div className="input-acount">
                                <label htmlFor="password">Confirmation Mot de passe (*)</label>
                                <div className={`input-acount ${passwordError ? "error" : ""}`}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="confirmationMotdepasse"

                                        value={confirmPassword}
                                        id="input-field"
                                        required
                                        onChange={(e) => {
                                            setConfirmMotdepasse(e.target.value);

                                        }}
                                    />
                                </div>
                                {passwordError && <p className="error-message">Les mots de passe ne correspondent pas.</p>}
                            </div>

                        </div>
                        <div className="conditions">
                            <div className="conditions-account">
                                <input
                                    type="checkbox"
                                    className="form-input" id="input-field" required
                                />
                                <p>J'ai pris connaissance et j'accepte les conditions générales d'utilisation
                                    du site frequencemedicale.com</p>
                            </div>
                            <div className="conditions-account">
                                <input
                                    type="checkbox"
                                    id="tickInput"
                                />
                                <p>Je ne désire pas recevoir d'informations transmises par les partenaires du site
                                    frequencemedicale.com</p>
                            </div>
                            <ReCAPTCHA sitekey="6LcvYhsnAAAAADoRePtIYiyr6LTgHEgFi2O3Ts66" onChange={handleRecaptchaVerify} />
                        </div>
                    </form>
                    <div className=" validate-btn">
                        <button className="  bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2"
                            onClick={CreateAcount}>
                            Valider
                        </button>
                    </div>

                </div>

            </div>
        </>
    );
}
