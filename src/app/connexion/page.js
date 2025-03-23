"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [loginMethod, setLoginMethod] = useState('cni');
  const [formData, setFormData] = useState({
    idNumber: '',
    birthdate: '',
    phoneNumber: '',
    otp: '',
    email: '',
    password: '',
  });
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler la vérification d'identité avec un délai
    setTimeout(() => {
      setLoading(false);
      
      if (loginMethod === 'cni') {
        // Vérification simulée - toujours réussie pour la démo
        setStep(2);
      } else {
        // Login avec email/mot de passe - simuler l'authentification
        if (formData.email === 'demo@cei.ci' && formData.password === 'password123') {
          router.push('/espace-electeur');
        } else {
          setError('Email ou mot de passe incorrect.');
        }
      }
    }, 1500);
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler une vérification OTP avec délai
    setTimeout(() => {
      setLoading(false);
      
      // Pour la démonstration, accepter n'importe quel OTP
      router.push('/espace-electeur');
    }, 1500);
  };

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-800 text-white p-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Connexion</h1>
              <p className="mt-1">Accédez à votre espace électeur</p>
            </div>
            <div className="h-12 w-auto">
              <Image 
                src="/images/Logo-CEI.png" 
                alt="Logo CEI" 
                width={80} 
                height={48}
                className="bg-white p-1 rounded"
              />
            </div>
          </div>
          
          {step === 1 && (
            <div className="p-6">
              {/* Options de connexion */}
              <div className="mb-6">
                <div className="flex border-b border-gray-200">
                  <button
                    className={`py-2 px-4 font-medium ${
                      loginMethod === 'cni' 
                        ? 'text-blue-800 border-b-2 border-blue-800' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    onClick={() => {
                      setLoginMethod('cni');
                      setError('');
                    }}
                  >
                    Numéro CNI
                  </button>
                  <button
                    className={`py-2 px-4 font-medium ${
                      loginMethod === 'email' 
                        ? 'text-blue-800 border-b-2 border-blue-800' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    onClick={() => {
                      setLoginMethod('email');
                      setError('');
                    }}
                  >
                    Email
                  </button>
                </div>
              </div>
              
              {loginMethod === 'cni' ? (
                <form onSubmit={handleSubmitStep1}>
                  <div className="space-y-4">
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
                  </div>
                  
                  {error && (
                    <div className="mt-4 bg-red-50 text-red-700 p-3 rounded-md">
                      {error}
                    </div>
                  )}
                  
                  <div className="mt-6">
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
                        'Se connecter'
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmitStep1}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe *</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                      />
                      <p className="text-right mt-1">
                        <Link href="/mot-de-passe-oublie" className="text-sm text-blue-800 hover:text-blue-600 transition-colors">
                          Mot de passe oublié ?
                        </Link>
                      </p>
                    </div>
                  </div>
                  
                  {error && (
                    <div className="mt-4 bg-red-50 text-red-700 p-3 rounded-md">
                      {error}
                    </div>
                  )}
                  
                  <div className="mt-6">
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
                          Connexion...
                        </>
                      ) : (
                        'Se connecter'
                      )}
                    </button>
                  </div>
                </form>
              )}
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Vous n'avez pas de compte ?{' '}
                  <Link href="/inscription" className="text-blue-800 hover:text-blue-600 transition-colors font-medium">
                    Inscrivez-vous
                  </Link>
                </p>
              </div>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 text-center">
                  En vous connectant, vous acceptez les{' '}
                  <Link href="/terms" className="text-blue-800 hover:text-blue-600 transition-colors">
                    Conditions d'utilisation
                  </Link>{' '}
                  et la{' '}
                  <Link href="/privacy" className="text-blue-800 hover:text-blue-600 transition-colors">
                    Politique de confidentialité
                  </Link>.
                </p>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="p-6">
              <div className="max-w-md mx-auto">
                <div className="mb-6 text-center">
                  <div className="bg-blue-50 text-blue-800 p-4 rounded-lg mb-6">
                    <p>Un code à 6 chiffres a été envoyé au numéro <strong>{formData.phoneNumber || '+225 XX XX XX XX XX'}</strong></p>
                  </div>
                  
                  <form onSubmit={handleVerifyOTP}>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-3">Code de vérification</label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      required
                      maxLength="6"
                      placeholder="Entrez le code à 6 chiffres"
                      className="w-full px-4 py-3 text-center text-xl tracking-widest border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent"
                    />
                    
                    {error && (
                      <div className="mt-4 bg-red-50 text-red-700 p-3 rounded-md">
                        {error}
                      </div>
                    )}
                    
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
                        onClick={() => {
                          // Simuler l'envoi d'un nouveau code
                          alert("Un nouveau code a été envoyé à votre numéro.");
                        }}
                      >
                        Renvoyer le code
                      </button>
                      
                      <button
                        type="button"
                        className="mt-2 text-gray-600 hover:text-gray-800 transition-colors"
                        onClick={() => setStep(1)}
                      >
                        Retour
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Informations supplémentaires */}
        <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Besoin d'aide ?</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Numéro CNI perdu ?</strong> Contactez le bureau d'état civil le plus proche pour obtenir un duplicata.
              </p>
              <p>
                <strong>Problème de connexion ?</strong> Appelez notre service d'assistance au <span className="text-blue-800 font-medium">+225 27 20 30 33 16</span> ou envoyez un email à <span className="text-blue-800 font-medium">support@cei.ci</span>.
              </p>
              <p>
                <strong>Première connexion ?</strong> Si vous êtes déjà inscrit sur les listes électorales, utilisez votre numéro de CNI pour vous connecter. Un code de vérification vous sera envoyé par SMS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}