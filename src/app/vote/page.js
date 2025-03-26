"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function VotePage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [step, setStep] = useState(1);
  const [identificationMethod, setIdentificationMethod] = useState('idCard');
  const [verificationData, setVerificationData] = useState({
    idNumber: '',
    birthdate: '',
    phoneNumber: '',
    otp: '',
  });
  const [currentElection, setCurrentElection] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [voteCast, setVoteCast] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 minutes
  const [loading, setLoading] = useState(false);

  // Données fictives pour simuler l'élection en cours
  const electionData = {
    id: 'pres-2025',
    title: 'Élection Présidentielle 2025',
    date: '22 Mars 2025',
    description: 'Élection du Président de la République de Côte d\'Ivoire pour un mandat de 5 ans.',
    candidates: [
      {
        id: 1,
        name: 'Jean Kouassi',
        party: 'Parti pour la Démocratie et le Progrès',
        photo: '/images/candidate1.jpg',
        color: 'blue',
      },
      {
        id: 2,
        name: 'Marie Yao',
        party: 'Alliance pour le Renouveau National',
        photo: '/images/candidate2.jpg',
        color: 'green',
      },
      {
        id: 3,
        name: 'Pierre Koffi',
        party: 'Mouvement des Citoyens Solidaires',
        photo: '/images/candidate3.jpg',
        color: 'orange',
      },
      {
        id: 4,
        name: 'Aya Sanogo',
        party: 'Union pour la Paix et le Développement',
        photo: '/images/candidate4.jpg',
        color: 'purple',
      },
    ]
  };

  useEffect(() => {
    // Récupérer l'élection en cours
    setCurrentElection(electionData);
  }, []);

  useEffect(() => {
    let timer;
    if (authenticated && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      handleSessionExpired();
    }
    return () => clearTimeout(timer);
  }, [authenticated, countdown]);

  const handleSessionExpired = () => {
    alert("Votre session a expiré pour des raisons de sécurité. Veuillez vous identifier à nouveau.");
    setAuthenticated(false);
    setStep(1);
    setCountdown(300);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVerificationData(prev => ({ ...prev, [name]: value }));
  };

  const handleVerifyIdentity = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler une vérification d'identité avec délai
    setTimeout(() => {
      setLoading(false);
      
      // Pour la démonstration, accepter n'importe quelle entrée
      if (identificationMethod === 'idCard') {
        // Envoyer un SMS fictif avec OTP
        setStep(2);
      } else {
        // Authentification réussie directement avec la biométrie
        setAuthenticated(true);
        setStep(3);
      }
    }, 2000);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler une vérification OTP avec délai
    setTimeout(() => {
      setLoading(false);
      
      // Pour la démonstration, accepter n'importe quel OTP
      setAuthenticated(true);
      setStep(3);
    }, 1500);
  };

  const handleCandidateSelect = (candidate) => {
    setSelectedCandidate(candidate);
  };

  const handleConfirmVote = () => {
    setLoading(true);
    
    // Simuler l'enregistrement du vote
    setTimeout(() => {
      setLoading(false);
      setVoteCast(true);
      setStep(4);
    }, 2000);
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Timer de session une fois authentifié */}
          {authenticated && step < 4 && (
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex justify-between items-center">
              <div>
                <span className="font-medium text-gray-700">Session sécurisée</span>
              </div>
              <div className={`font-medium ${countdown < 60 ? 'text-red-600' : 'text-gray-700'}`}>
                Temps restant: {formatTime(countdown)}
              </div>
            </div>
          )}

          {/* Étape 1: Identification */}
          {step === 1 && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-800 text-white p-6">
                <h1 className="text-2xl font-bold">Plateforme de Vote Électronique</h1>
                <p className="mt-2">Identifiez-vous pour accéder au bulletin de vote.</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Méthode d'identification</h2>
                  <div className="flex flex-col md:flex-row gap-4">
                    <button
                      className={`flex-1 p-4 border-2 rounded-lg flex flex-col items-center ${
                        identificationMethod === 'idCard' 
                          ? 'border-blue-800 bg-blue-50' 
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setIdentificationMethod('idCard')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                      <span className="font-medium text-black">Carte Nationale d'Identité</span>
                      <span className="text-sm text-gray-600 mt-1">+ Vérification par SMS</span>
                    </button>
                    
                    <button
                      className={`flex-1 p-4 border-2 rounded-lg flex flex-col items-center ${
                        identificationMethod === 'biometric' 
                          ? 'border-blue-800 bg-blue-50' 
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setIdentificationMethod('biometric')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                      <span className="font-medium text-black">Vérification Biométrique</span>
                      <span className="text-sm text-gray-600 mt-1">Empreinte digitale ou reconnaissance faciale</span>
                    </button>
                  </div>
                </div>
                
                {identificationMethod === 'idCard' ? (
                  <form onSubmit={handleVerifyIdentity}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">Numéro de CNI *</label>
                        <input
                          type="text"
                          id="idNumber"
                          name="idNumber"
                          value={verificationData.idNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="C0000000000"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1">Date de naissance *</label>
                        <input
                          type="date"
                          id="birthdate"
                          name="birthdate"
                          value={verificationData.birthdate}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone *</label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={verificationData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          placeholder="+225 XX XX XX XX XX"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={loading}
                        className={`${
                          loading ? 'bg-gray-500' : 'bg-blue-800 hover:bg-blue-900'
                        } text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center`}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Vérification...
                          </>
                        ) : (
                          'Vérifier mon identité'
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center p-8">
                    <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </div>
                    <p className="text-gray-800 mb-6">Pour une vérification biométrique, veuillez vous approcher d'un bureau de vote équipé d'un système de reconnaissance biométrique ou utiliser l'application mobile officielle de la CEI.</p>
                    
                    <form onSubmit={handleVerifyIdentity}>
                      <button
                        type="submit"
                        disabled={loading}
                        className={`${
                          loading ? 'bg-gray-500' : 'bg-blue-800 hover:bg-blue-900'
                        } text-white px-6 py-2 rounded-md font-medium transition-colors mx-auto flex items-center`}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Simulation en cours...
                          </>
                        ) : (
                          'Simuler une vérification biométrique'
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Étape 2: Vérification par OTP */}
          {step === 2 && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-800 text-white p-6">
                <h1 className="text-2xl font-bold">Vérification en deux étapes</h1>
                <p className="mt-2">Veuillez entrer le code à usage unique reçu par SMS.</p>
              </div>
              
              <div className="p-6">
                <div className="max-w-md mx-auto">
                  <div className="mb-6 text-center">
                    <div className="bg-blue-50 text-blue-800 p-4 rounded-lg mb-6">
                      <p>Un code à 6 chiffres a été envoyé au numéro <strong>{verificationData.phoneNumber || '+225 XX XX XX XX XX'}</strong></p>
                    </div>
                    
                    <form onSubmit={handleVerifyOTP}>
                      <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-3">Code de vérification</label>
                      <input
                        type="text"
                        id="otp"
                        name="otp"
                        value={verificationData.otp}
                        onChange={handleInputChange}
                        required
                        maxLength="6"
                        placeholder="Entrez le code à 6 chiffres"
                        className="w-full px-4 py-3 text-center text-xl tracking-widest border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      
                      <div className="mt-8 flex flex-col items-center">
                        <button
                          type="submit"
                          disabled={loading}
                          className={`${
                            loading ? 'bg-gray-500' : 'bg-blue-800 hover:bg-blue-900'
                          } text-white px-6 py-2 rounded-md font-medium transition-colors w-full flex justify-center items-center`}
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Vérification...
                            </>
                          ) : (
                            'Vérifier le code'
                          )}
                        </button>
                        
                        <button
                          type="button"
                          className="mt-4 text-blue-800 hover:text-blue-600 font-medium transition-colors"
                        >
                          Renvoyer le code
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Étape 3: Bulletin de vote */}
          {step === 3 && currentElection && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-800 text-white p-6">
                <h1 className="text-2xl font-bold">{currentElection.title}</h1>
                <p className="mt-2">{currentElection.description}</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Bulletins de vote</h2>
                  <p className="text-gray-600 mb-6">Sélectionnez le candidat de votre choix. Votre vote est anonyme et sécurisé.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentElection.candidates.map((candidate) => (
                      <div
                        key={candidate.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          selectedCandidate?.id === candidate.id 
                            ? `border-${candidate.color}-500 bg-${candidate.color}-50` 
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        onClick={() => handleCandidateSelect(candidate)}
                      >
                        <div className="flex items-center">
                          <div className={`h-16 w-16 bg-${candidate.color}-200 rounded-full mr-4 flex items-center justify-center overflow-hidden`}>
                            {/* Placeholder pour la photo du candidat */}
                            <span className="text-2xl font-bold text-gray-700">{candidate.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">{candidate.name}</h3>
                            <p className="text-gray-600">{candidate.party}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleConfirmVote}
                    disabled={!selectedCandidate || loading}
                    className={`${
                      !selectedCandidate 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : loading 
                          ? 'bg-gray-500' 
                          : 'bg-green-600 hover:bg-green-700'
                    } text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enregistrement du vote...
                      </>
                    ) : (
                      'Confirmer mon vote'
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Étape 4: Confirmation du vote */}
          {step === 4 && voteCast && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <h1 className="text-2xl font-bold">Vote enregistré avec succès</h1>
                <p className="mt-2">Merci d'avoir participé à cette élection.</p>
              </div>
              
              <div className="p-8 text-center">
                <div className="mb-6">
                  <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Votre vote a été comptabilisé</h2>
                  <p className="text-gray-600 max-w-lg mx-auto">
                    Votre vote a été enregistré de manière anonyme et sécurisée. Vous avez participé à l'élection "{currentElection?.title}". 
                    Un reçu de vote anonyme a été généré comme preuve de votre participation.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg inline-block mb-6">
                  <p className="text-gray-800 font-medium">ID de confirmation: {Math.random().toString(36).substring(2, 15).toUpperCase()}</p>
                  <p className="text-gray-600 text-sm">Date et heure: {new Date().toLocaleString()}</p>
                </div>
                
                <div className="mt-6">
                  <p className="text-gray-600 mb-4">Les résultats seront publiés à la clôture du scrutin.</p>
                  <Link href="/resultats" className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md font-medium transition-colors inline-block">
                    Consulter les résultats
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {/* Informations de sécurité */}
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Sécurité et confidentialité</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">Vote sécurisé</h3>
                  <p className="text-gray-600 text-sm">Votre vote est protégé par un chiffrement de bout en bout.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">Anonymat garanti</h3>
                  <p className="text-gray-600 text-sm">Votre identité est dissociée de votre vote pour garantir l'anonymat.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2">Transparence</h3>
                  <p className="text-gray-600 text-sm">Le processus électoral est auditable par des observateurs indépendants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}