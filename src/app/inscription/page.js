"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Registration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    birthdate: '',
    birthplace: '',
    gender: '',
    nationality: 'Ivoirienne',
    idNumber: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    region: '',
    photo: null,
    idCardFront: null,
    idCardBack: null,
  });

  const regions = [
    "Abidjan", "Yamoussoukro", "Bouaké", "Daloa", "Korhogo", 
    "San-Pédro", "Abengourou", "Man", "Dimbokro", "Séguéla",
    "Odienné", "Bondoukou", "Gagnoa", "Divo", "Sassandra"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez implémenter l'envoi des données au serveur
    alert("Votre demande d'inscription a été soumise avec succès. Vous recevrez un email de confirmation.");
    // Redirection vers la page d'accueil ou une page de confirmation
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-800 text-white p-6">
            <h1 className="text-2xl font-bold">Inscription sur les listes électorales</h1>
            <p className="mt-2">Complétez ce formulaire pour vous inscrire en tant qu'électeur.</p>
          </div>
          
          {/* Progress Bar */}
          <div className="px-6 pt-6">
            <div className="relative">
              <div className="flex mb-2 justify-between">
                <div className={`w-1/3 text-center ${step >= 1 ? 'text-blue-800 font-medium' : 'text-gray-500'}`}>
                  Informations personnelles
                </div>
                <div className={`w-1/3 text-center ${step >= 2 ? 'text-blue-800 font-medium' : 'text-gray-500'}`}>
                  Coordonnées
                </div>
                <div className={`w-1/3 text-center ${step >= 3 ? 'text-blue-800 font-medium' : 'text-gray-500'}`}>
                  Documents
                </div>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div style={{ width: `${(step / 3) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-800 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {/* Step 1: Informations personnelles */}
            {step === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  focus:border-transparent text-black "
                    />
                  </div>
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">Prénoms *</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">Date de naissance *</label>
                    <input
                      type="date"
                      id="birthdate"
                      name="birthdate"
                      value={formData.birthdate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="birthplace" className="block text-sm font-medium text-gray-700 mb-1">Lieu de naissance *</label>
                    <input
                      type="text"
                      id="birthplace"
                      name="birthplace"
                      value={formData.birthplace}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Sexe *</label>
                    <div className="flex space-x-4 mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="M"
                          checked={formData.gender === 'M'}
                          onChange={handleChange}
                          required
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 "
                        />
                        <span className="ml-2 text-gray-700">Masculin</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="F"
                          checked={formData.gender === 'F'}
                          onChange={handleChange}
                          required
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 "
                        />
                        <span className="ml-2 text-gray-700">Féminin</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">Nationalité *</label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">Numéro de CNI *</label>
                    <input
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      required
                      placeholder="C0000000000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Suivant
                  </button>
                </div>
              </>
            )}

            {/* Step 2: Coordonnées */}
            {step === 2 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone *</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      placeholder="+225 XX XX XX XX XX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="exemple@email.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black  focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Adresse *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ville *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Région *</label>
                    <select
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                    >
                      <option value="">Sélectionnez une région</option>
                      {regions.map((region, index) => (
                        <option key={index} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Précédent
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Suivant
                  </button>
                </div>
              </>
            )}

            {/* Step 3: Documents */}
            {step === 3 && (
              <>
                <p className="text-gray-600 mb-6">Veuillez télécharger une photo d'identité récente et les deux faces de votre carte nationale d'identité.</p>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Photo d'identité *</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="photo" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                            <span>Télécharger un fichier</span>
                            <input 
                              id="photo" 
                              name="photo" 
                              type="file"
                              accept="image/*"
                              required
                              onChange={handleFileChange}
                              className="sr-only" 
                            />
                          </label>
                          <p className="pl-1">ou glisser-déposer</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                        {formData.photo && (
                          <p className="text-sm text-green-600 mt-2">
                            Fichier sélectionné: {formData.photo.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CNI - Recto *</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="idCardFront" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                            <span>Télécharger un fichier</span>
                            <input 
                              id="idCardFront" 
                              name="idCardFront" 
                              type="file"
                              accept="image/*"
                              required
                              onChange={handleFileChange}
                              className="sr-only" 
                            />
                          </label>
                          <p className="pl-1">ou glisser-déposer</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                        {formData.idCardFront && (
                          <p className="text-sm text-green-600 mt-2">
                            Fichier sélectionné: {formData.idCardFront.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CNI - Verso *</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="idCardBack" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                            <span>Télécharger un fichier</span>
                            <input 
                              id="idCardBack" 
                              name="idCardBack" 
                              type="file"
                              accept="image/*"
                              required
                              onChange={handleFileChange}
                              className="sr-only" 
                            />
                          </label>
                          <p className="pl-1">ou glisser-déposer</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                        {formData.idCardBack && (
                          <p className="text-sm text-green-600 mt-2">
                            Fichier sélectionné: {formData.idCardBack.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500  border-gray-300 rounded mt-1"
                      />
                      <div className="ml-3">
                        <label htmlFor="terms" className="text-sm text-gray-700">
                          Je certifie sur l'honneur que les informations fournies sont exactes et j'accepte les{' '}
                          <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                            conditions d'utilisation
                          </Link>
                          {' '}et la{' '}
                          <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                            politique de confidentialité
                          </Link>
                          .
                        </label>
                      </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Précédent
                  </button>
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                  >
                    Soumettre ma demande
                  </button>
                </div>
              </>
            )}
          </form>
        </div>

        {/* Informations complémentaires */}
        <div className="max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Informations importantes</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Documents requis :</strong> Pour vous inscrire, vous devez fournir une photo d'identité récente et une copie de votre carte nationale d'identité (recto verso).
              </p>
              <p>
                <strong>Délai de traitement :</strong> Votre demande sera traitée dans un délai de 5 jours ouvrables. Une notification vous sera envoyée par SMS et/ou email.
              </p>
              <p>
                <strong>Assistance :</strong> Pour toute question ou assistance, veuillez contacter notre service d'assistance au <span className="text-blue-800 font-medium">+225 27 20 30 33 16</span> ou par email à <span className="text-blue-800 font-medium">assistance@cei.ci</span>.
              </p>
              <p>
                <strong>Date limite d'inscription :</strong> Les inscriptions pour les prochaines élections se terminent le <span className="text-red-600 font-medium">31 mai 2025</span>. Assurez-vous de soumettre votre demande avant cette date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}