"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function VoterDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Données fictives pour simuler l'utilisateur connecté
  const mockUser = {
    name: "Kouamé Adama",
    idNumber: "C1234567890",
    photo: "/images/user-avatar.jpg", // Placeholder
    registrationDate: "15/01/2023",
    birthdate: "05/06/1982",
    gender: "M",
    address: "45 Avenue des Flamboyants, Cocody",
    city: "Abidjan",
    phoneNumber: "+225 07 08 09 10 11",
    email: "k.adama@example.com",
    pollingStation: "École primaire de Cocody",
    pollingCode: "ABI-COC-001",
    electoralList: true,
    votingStatus: {
      presidential2025: false,
      legislative2024: true,
      municipal2023: true
    },
    upcomingElections: [
      {
        id: "pres2025",
        name: "Élection Présidentielle 2025",
        date: "22 mars 2025",
        status: "À venir",
        canVote: true
      }
    ],
    pastElections: [
      {
        id: "leg2024",
        name: "Élections Législatives 2024",
        date: "15 décembre 2024",
        status: "Voté",
        receipt: "VR-12345-LEG-2024"
      },
      {
        id: "local2023",
        name: "Élections Municipales 2023",
        date: "30 avril 2023",
        status: "Voté",
        receipt: "VR-98765-MUN-2023"
      }
    ],
    documents: [
      {
        name: "Carte d'électeur",
        type: "PDF",
        size: "245 KB",
        date: "15/01/2023",
        url: "#"
      },
      {
        name: "Attestation d'inscription",
        type: "PDF",
        size: "180 KB",
        date: "15/01/2023",
        url: "#"
      },
      {
        name: "Reçu de vote - Législatives 2024",
        type: "PDF",
        size: "210 KB",
        date: "15/12/2024",
        url: "#"
      }
    ],
    notifications: [
      {
        id: 1,
        title: "Élection Présidentielle 2025",
        message: "L'élection présidentielle aura lieu le 22 mars 2025. Préparez vos documents.",
        date: "22/02/2025",
        read: false
      },
      {
        id: 2,
        title: "Vérification d'inscription",
        message: "Votre inscription sur les listes électorales a été confirmée pour la prochaine élection.",
        date: "15/01/2025",
        read: true
      },
      {
        id: 3,
        title: "Reçu de vote disponible",
        message: "Votre reçu de vote pour les élections législatives 2024 est maintenant disponible.",
        date: "16/12/2024",
        read: true
      }
    ]
  };

  useEffect(() => {
    // Simuler le chargement des données utilisateur
    setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    // Simuler la déconnexion
    router.push('/');
  };

  const markNotificationAsRead = (notificationId) => {
    setUser(prev => ({
      ...prev,
      notifications: prev.notifications.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    }));
  };

  if (loading) {
    return (
      <div className="py-20 min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <svg className="animate-spin h-12 w-12 text-blue-800 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600">Chargement de votre espace électeur...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 p-6 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="h-16 w-16 bg-white rounded-full overflow-hidden mr-4 flex items-center justify-center text-2xl font-bold text-blue-800">
                  {user.name.charAt(0)}
                </div>
                <div className="text-white">
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-blue-100">Numéro électeur: {user.idNumber}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="mr-4 text-right hidden md:block">
                  <div className="text-white font-medium">{new Date().toLocaleDateString()}</div>
                  <div className="text-blue-100">Connecté(e) en tant qu'électeur</div>
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-white text-blue-800 hover:bg-gray-100 px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Déconnexion
                </button>
              </div>
            </div>
            
            {/* Onglets de navigation */}
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                <button 
                  className={`py-4 px-6 font-medium whitespace-nowrap ${
                    activeTab === 'dashboard' 
                      ? 'text-blue-800 border-b-2 border-blue-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('dashboard')}
                >
                  Tableau de bord
                </button>
                <button 
                  className={`py-4 px-6 font-medium whitespace-nowrap ${
                    activeTab === 'elections' 
                      ? 'text-blue-800 border-b-2 border-blue-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('elections')}
                >
                  Élections
                </button>
                <button 
                  className={`py-4 px-6 font-medium whitespace-nowrap ${
                    activeTab === 'profile' 
                      ? 'text-blue-800 border-b-2 border-blue-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  Mon profil
                </button>
                <button 
                  className={`py-4 px-6 font-medium whitespace-nowrap ${
                    activeTab === 'documents' 
                      ? 'text-blue-800 border-b-2 border-blue-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('documents')}
                >
                  Documents
                </button>
                <button 
                  className={`py-4 px-6 font-medium whitespace-nowrap flex items-center ${
                    activeTab === 'notifications' 
                      ? 'text-blue-800 border-b-2 border-blue-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onClick={() => setActiveTab('notifications')}
                >
                  Notifications
                  {user.notifications.some(n => !n.read) && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {user.notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenu principal */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          {/* Tableau de bord */}
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Statut de l'électeur</h3>
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <div className="text-xl font-bold text-green-600">Actif</div>
                  </div>
                  <p className="text-gray-600 mt-2">Inscrit depuis le {user.registrationDate}</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Prochaine élection</h3>
                  {user.upcomingElections.length > 0 ? (
                    <>
                      <div className="text-xl font-bold text-blue-800">{user.upcomingElections[0].name}</div>
                      <p className="text-gray-600 mt-2">Date: {user.upcomingElections[0].date}</p>
                    </>
                  ) : (
                    <p className="text-gray-600">Aucune élection à venir</p>
                  )}
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Bureau de vote</h3>
                  <div className="text-xl font-bold text-gray-800">{user.pollingStation}</div>
                  <p className="text-gray-600 mt-2">Code: {user.pollingCode}</p>
                </div>
              </div>
              
              {/* Actions rapides */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Actions rapides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Link 
                  href="/vote"
                  className="bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 p-4 rounded-lg text-center transition-colors group"
                >
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mx-auto mb-2 group-hover:bg-blue-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="font-medium text-gray-800">Voter</div>
                </Link>
                
                <button 
                  className="bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 p-4 rounded-lg text-center transition-colors group"
                  onClick={() => setActiveTab('documents')}
                >
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mx-auto mb-2 group-hover:bg-blue-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="font-medium text-gray-800">Mes documents</div>
                </button>
                
                <Link 
                  href="/resultats"
                  className="bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 p-4 rounded-lg text-center transition-colors group"
                >
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mx-auto mb-2 group-hover:bg-blue-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="font-medium text-gray-800">Résultats</div>
                </Link>
                
                <button 
                  className="bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 p-4 rounded-lg text-center transition-colors group"
                  onClick={() => setActiveTab('profile')}
                >
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mx-auto mb-2 group-hover:bg-blue-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="font-medium text-gray-800">Mon profil</div>
                </button>
              </div>
              
              {/* Dernières activités */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Historique récent</h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Élection</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reçu</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {user.pastElections.map((election, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{election.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{election.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {election.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {election.receipt}
                        </td>
                      </tr>
                    ))}
                    {user.upcomingElections.map((election, index) => (
                      <tr key={`upcoming-${index}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{election.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{election.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            {election.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          -
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* Élections */}
          {activeTab === 'elections' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Élections</h2>
              
              {/* Élections à venir */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Élections à venir</h3>
                
                {user.upcomingElections.length > 0 ? (
                  <div className="space-y-4">
                    {user.upcomingElections.map((election, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                          <div className="mb-4 md:mb-0">
                            <h4 className="text-lg font-semibold text-gray-800">{election.name}</h4>
                            <p className="text-gray-600">Date: {election.date}</p>
                            {election.canVote ? (
                              <p className="mt-2 text-green-600 font-medium">Vous êtes éligible pour voter à cette élection</p>
                            ) : (
                              <p className="mt-2 text-red-600 font-medium">Vous n'êtes pas éligible pour cette élection</p>
                            )}
                          </div>
                          
                          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
                            <Link
                              href="/informations-election"
                              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors text-center"
                            >
                              Détails
                            </Link>
                            {election.canVote && (
                              <Link
                                href="/vote"
                                className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
                              >
                                Voter
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-gray-600">Aucune élection à venir pour le moment.</p>
                  </div>
                )}
              </div>
              
              {/* Élections passées */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Historique des élections</h3>
                
                <div className="space-y-4">
                  {user.pastElections.map((election, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="mb-4 md:mb-0">
                          <div className="flex items-center">
                            <h4 className="text-lg font-semibold text-gray-800">{election.name}</h4>
                            <span className="ml-3 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {election.status}
                            </span>
                          </div>
                          <p className="text-gray-600">Date: {election.date}</p>
                          <p className="text-gray-600 mt-1">Reçu: {election.receipt}</p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
                          <Link
                            href={`/resultats?election=${election.id}`}
                            className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
                          >
                            Voir les résultats
                          </Link>
                          <Link
                            href="#"
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors text-center"
                          >
                            Télécharger reçu
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* Profil */}
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Mon profil</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
                    <div className="h-32 w-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl font-bold text-white">
                      {user.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
                    <p className="text-gray-600 mb-4">Électeur inscrit</p>
                    
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Numéro électeur:</span>
                        <span className="font-medium text-gray-800">{user.idNumber}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Inscrit depuis:</span>
                        <span className="font-medium text-gray-800">{user.registrationDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Statut:</span>
                        <span className="font-medium text-green-600">Actif</span>
                      </div>
                    </div>
                    
                    <button className="mt-6 bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md font-medium transition-colors w-full">
                      Mettre à jour la photo
                    </button>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Informations personnelles</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Nom complet</div>
                        <div className="font-medium text-gray-800">{user.name}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Date de naissance</div>
                        <div className="font-medium text-gray-800">{user.birthdate}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Sexe</div>
                        <div className="font-medium text-gray-800">{user.gender === 'M' ? 'Masculin' : 'Féminin'}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Numéro CNI</div>
                        <div className="font-medium text-gray-800">{user.idNumber}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-t border-gray-200 pt-6">Coordonnées</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Adresse</div>
                        <div className="font-medium text-gray-800">{user.address}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Ville</div>
                        <div className="font-medium text-gray-800">{user.city}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Téléphone</div>
                        <div className="font-medium text-gray-800">{user.phoneNumber}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Email</div>
                        <div className="font-medium text-gray-800">{user.email || "Non renseigné"}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-t border-gray-200 pt-6">Informations électorales</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Bureau de vote</div>
                        <div className="font-medium text-gray-800">{user.pollingStation}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-sm mb-1">Code du bureau</div>
                        <div className="font-medium text-gray-800">{user.pollingCode}</div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                      <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md font-medium transition-colors">
                        Modifier mes coordonnées
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-medium transition-colors">
                        Changer mon mot de passe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Documents */}
          {activeTab === 'documents' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Mes documents</h2>
              
              <p className="text-gray-600 mb-6">
                Téléchargez vos documents officiels d'électeur et vos reçus de vote.
              </p>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taille</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {user.documents.map((doc, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.size}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doc.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href={doc.url} className="text-blue-800 hover:text-blue-600 transition-colors">
                            Télécharger
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Certificats électroniques</h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 mb-4 md:mb-0 md:mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">Certificat de participation électronique</h4>
                      <p className="text-gray-600 mb-4">
                        Ce certificat atteste de votre participation aux élections et peut être vérifié électroniquement par les autorités compétentes.
                      </p>
                      <p className="text-gray-600">
                        <strong>Identifiant du certificat:</strong> CEI-CERT-{user.idNumber}-2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Notifications */}
          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h2>
              
              <div className="space-y-4">
                {user.notifications.length > 0 ? (
                  user.notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`border ${notification.read ? 'border-gray-200' : 'border-blue-300 bg-blue-50'} rounded-lg p-4`}
                    >
                      <div className="flex justify-between">
                        <h3 className={`text-lg ${notification.read ? 'font-medium text-gray-800' : 'font-semibold text-blue-800'}`}>
                          {notification.title}
                        </h3>
                        <span className="text-sm text-gray-500">{notification.date}</span>
                      </div>
                      <p className="text-gray-600 mt-2 mb-3">{notification.message}</p>
                      
                      {!notification.read && (
                        <button 
                          onClick={() => markNotificationAsRead(notification.id)}
                          className="text-blue-800 hover:text-blue-600 text-sm font-medium transition-colors"
                        >
                          Marquer comme lu
                        </button>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-gray-600">Vous n'avez pas de nouvelles notifications.</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="text-blue-800 hover:text-blue-600 font-medium transition-colors">
                  Marquer toutes comme lues
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}