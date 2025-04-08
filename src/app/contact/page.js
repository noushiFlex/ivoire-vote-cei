"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, error: null });
    
    // Simuler une soumission de formulaire avec délai
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false, error: null });
      // Réinitialiser le formulaire
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };
  
  const offices = [
    { name: "Siège Abidjan", address: "Avenue Franchet d'Esperey, 01 BP 1609 Abidjan 01", phone: "+225 27 20 30 33 16", email: "info@cei.ci" },
    { name: "Bureau de Yamoussoukro", address: "Boulevard Houphouët-Boigny, Yamoussoukro", phone: "+225 27 30 64 42 98", email: "yamoussoukro@cei.ci" },
    { name: "Bureau de Bouaké", address: "Avenue de la République, Bouaké", phone: "+225 27 31 63 53 17", email: "bouake@cei.ci" },
    { name: "Bureau de San Pedro", address: "Rue des Cocotiers, San Pedro", phone: "+225 27 34 72 67 81", email: "sanpedro@cei.ci" },
  ];
  
  const faqItems = [
    { question: "Comment puis-je vérifier mon inscription sur les listes électorales ?", answer: "Vous pouvez vérifier votre inscription sur notre plateforme en ligne en utilisant votre numéro de CNI, ou en vous rendant dans l'un de nos bureaux locaux." },
    { question: "Comment signaler un problème technique sur la plateforme de vote ?", answer: "Pour signaler un problème technique, veuillez utiliser le formulaire de contact en sélectionnant 'Support technique' comme sujet, ou appeler notre ligne d'assistance au +225 27 20 30 33 16." },
    { question: "Puis-je devenir observateur lors des élections ?", answer: "Oui, vous pouvez postuler pour devenir observateur électoral. Veuillez nous contacter par email à observateurs@cei.ci pour plus d'informations sur la procédure à suivre." },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* En-tête de page */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-blue-800 text-white p-6">
              <h1 className="text-2xl font-bold">Contactez-nous</h1>
              <p className="mt-2">Nous sommes à votre disposition pour répondre à toutes vos questions.</p>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Téléphone</h3>
                  <p className="text-gray-600 mb-2">Lundi au vendredi, 8h-17h</p>
                  <p className="text-blue-800 font-medium">+225 27 20 30 33 16</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600 mb-2">Réponse sous 24-48h</p>
                  <p className="text-blue-800 font-medium">info@cei.ci</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="bg-blue-100 p-3 rounded-full inline-flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Adresse</h3>
                  <p className="text-gray-600 mb-2">Siège de la CEI</p>
                  <p className="text-blue-800 font-medium">Avenue Franchet d'Esperey, Abidjan</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Formulaire de contact */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Envoyez-nous un message</h2>
                  
                  {formStatus.submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-800 mb-2">Message envoyé avec succès !</h3>
                      <p className="text-gray-600">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet *</label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="inscription">Inscription électorale</option>
                          <option value="vote">Procédure de vote</option>
                          <option value="technique">Support technique</option>
                          <option value="resultats">Résultats électoraux</option>
                          <option value="autre">Autre demande</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        ></textarea>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          disabled={formStatus.loading}
                          className={`${
                            formStatus.loading ? 'bg-gray-500' : 'bg-blue-800 hover:bg-blue-900'
                          } text-white px-6 py-3 rounded-md font-medium transition-colors w-full flex items-center justify-center`}
                        >
                          {formStatus.loading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Envoi en cours...
                            </>
                          ) : (
                            'Envoyer le message'
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
                
                {/* Carte */}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Localisez-nous</h2>
                  <div className="bg-gray-200 rounded-lg h-80 mb-4">
                    {/* Emplacement pour une carte interactive Google Maps ou OpenStreetMap */}
                    <div className="h-full w-full flex items-center justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.226573277685!2d-3.993531829148264!3d5.38239118066404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc19500285e0ea1%3A0xc62a450d9dbf3f80!2sCEI%20Commission%20%C3%89lectorale%20Ind%C3%A9pendante!5e0!3m2!1sfr!2sci!4v1743765378460!5m2!1sfr!2sci" width="600" height="450" className='object-cover h-full w-full' loading="lazy" ></iframe>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Siège de la CEI</strong><br />
                      Avenue Franchet d'Esperey<br />
                      01 BP 1609 Abidjan 01<br />
                      Côte d'Ivoire
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Heures d'ouverture:</strong><br />
                      Lundi au vendredi: 8h00 - 17h00<br />
                      Samedi: 9h00 - 13h00 (période électorale uniquement)
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bureaux régionaux */}
              <div className="mb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Nos bureaux régionaux</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {offices.map((office, index) => (
                    <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">{office.name}</h3>
                      <p className="text-gray-600 mb-2">{office.address}</p>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <p className="text-gray-600">
                          <span className="inline-block mr-1">📞</span> {office.phone}
                        </p>
                        <p className="text-gray-600">
                          <span className="inline-block mr-1">✉️</span> {office.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* FAQ */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Questions fréquentes</h2>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <Link href="/faq" className="text-blue-800 hover:text-blue-600 font-medium">
                    Voir toutes les questions fréquentes →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="bg-blue-800 text-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités sur les élections et les activités de la CEI.
              </p>
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="bg-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 flex-grow"
                  required
                />
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}