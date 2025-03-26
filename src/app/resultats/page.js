"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ResultsPage() {
  const [selectedElection, setSelectedElection] = useState("pres2025");
  const [resultsData, setResultsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mapView, setMapView] = useState(false);
  
  // Données fictives pour simuler les résultats d'élections
  const allElectionsData = {
    pres2025: {
      title: "Élection Présidentielle 2025",
      date: "22 mars 2025",
      totalVoters: 8500000,
      votesCount: 6375000,
      participationRate: 75,
      candidates: [
        { name: "Jean Kouassi", party: "Parti pour la Démocratie et le Progrès", votes: 2803500, percentage: 44, color: "blue" },
        { name: "Marie Yao", party: "Alliance pour le Renouveau National", votes: 1912500, percentage: 30, color: "green" },
        { name: "Pierre Koffi", party: "Mouvement des Citoyens Solidaires", votes: 1083750, percentage: 17, color: "orange" },
        { name: "Aya Sanogo", party: "Union pour la Paix et le Développement", votes: 575250, percentage: 9, color: "purple" },
      ],
      regions: [
        { name: "Abidjan", winner: "Jean Kouassi", participation: 78 },
        { name: "Yamoussoukro", winner: "Marie Yao", participation: 72 },
        { name: "Bouaké", winner: "Jean Kouassi", participation: 70 },
        { name: "Daloa", winner: "Pierre Koffi", participation: 75 },
        { name: "San Pedro", winner: "Marie Yao", participation: 68 },
        { name: "Korhogo", winner: "Jean Kouassi", participation: 76 },
      ]
    },
    leg2024: {
      title: "Élections Législatives 2024",
      date: "15 décembre 2024",
      totalVoters: 8200000,
      votesCount: 5330000,
      participationRate: 65,
      parties: [
        { name: "Parti pour la Démocratie et le Progrès", seats: 120, percentage: 41, color: "blue" },
        { name: "Alliance pour le Renouveau National", seats: 80, percentage: 33, color: "green" },
        { name: "Mouvement des Citoyens Solidaires", seats: 40, percentage: 17, color: "orange" },
        { name: "Union pour la Paix et le Développement", seats: 15, percentage: 7, color: "purple" },
        { name: "Autres partis", seats: 5, percentage: 2, color: "gray" },
      ],
      regions: [
        { name: "Abidjan", mainParty: "Parti pour la Démocratie et le Progrès", seats: 45, participation: 70 },
        { name: "Yamoussoukro", mainParty: "Alliance pour le Renouveau National", seats: 20, participation: 65 },
        { name: "Bouaké", mainParty: "Parti pour la Démocratie et le Progrès", seats: 35, participation: 63 },
        { name: "Daloa", mainParty: "Mouvement des Citoyens Solidaires", seats: 18, participation: 67 },
        { name: "San Pedro", mainParty: "Alliance pour le Renouveau National", seats: 22, participation: 62 },
        { name: "Korhogo", mainParty: "Parti pour la Démocratie et le Progrès", seats: 30, participation: 69 },
      ]
    },
    local2023: {
      title: "Élections Municipales et Régionales 2023",
      date: "30 avril 2023",
      totalVoters: 7800000,
      votesCount: 4290000,
      participationRate: 55,
      parties: [
        { name: "Parti pour la Démocratie et le Progrès", municipalities: 85, regions: 18, percentage: 38, color: "blue" },
        { name: "Alliance pour le Renouveau National", municipalities: 70, regions: 14, percentage: 32, color: "green" },
        { name: "Mouvement des Citoyens Solidaires", municipalities: 45, regions: 8, percentage: 20, color: "orange" },
        { name: "Union pour la Paix et le Développement", municipalities: 15, regions: 3, percentage: 8, color: "purple" },
        { name: "Indépendants", municipalities: 5, regions: 1, percentage: 2, color: "gray" },
      ]
    },
  };

  useEffect(() => {
    // Simuler le chargement des données depuis un serveur
    setLoading(true);
    setTimeout(() => {
      setResultsData(allElectionsData[selectedElection]);
      setLoading(false);
    }, 800);
  }, [selectedElection]);

  const elections = [
    { id: "pres2025", name: "Présidentielle 2025" },
    { id: "leg2024", name: "Législatives 2024" },
    { id: "local2023", name: "Municipales 2023" },
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-blue-800 text-white p-6">
              <h1 className="text-2xl font-bold">Résultats des Élections</h1>
              <p className="mt-2">Consultez les résultats officiels des élections en Côte d'Ivoire.</p>
            </div>
            
            <div className="p-6">
              {/* Sélection des élections */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {elections.map((election) => (
                    <button
                      key={election.id}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        selectedElection === election.id
                          ? 'bg-blue-800 text-white'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                      onClick={() => setSelectedElection(election.id)}
                    >
                      {election.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Affichage des résultats */}
              {loading ? (
                <div className="flex justify-center items-center py-16">
                  <svg className="animate-spin h-10 w-10 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : resultsData ? (
                <div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">{resultsData.title}</h2>
                    <p className="text-gray-600">Date du scrutin : {resultsData.date}</p>
                  </div>
                  
                  {/* Statistiques générales */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Participation</h3>
                      <div className="text-3xl font-bold text-blue-800">{resultsData.participationRate}%</div>
                      <p className="text-gray-600 mt-1">{resultsData.votesCount.toLocaleString()} votants sur {resultsData.totalVoters.toLocaleString()} inscrits</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {selectedElection === "pres2025" ? "Bulletins valides" : "Sièges pourvus"}
                      </h3>
                      <div className="text-3xl font-bold text-green-700">
                        {selectedElection === "pres2025" 
                          ? "98.2%" 
                          : selectedElection === "leg2024" 
                            ? "260" 
                            : "220"}
                      </div>
                      <p className="text-gray-600 mt-1">
                        {selectedElection === "pres2025" 
                          ? "1.8% de bulletins nuls" 
                          : selectedElection === "leg2024" 
                            ? "Nombre total de sièges à l'Assemblée" 
                            : "Municipalités et régions"}
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Bureaux de vote</h3>
                      <div className="text-3xl font-bold text-orange-700">11,250</div>
                      <p className="text-gray-600 mt-1">100% des résultats comptabilisés</p>
                    </div>
                  </div>
                  
                  {/* Onglets pour basculer entre les vues */}
                  <div className="flex border-b border-gray-200 mb-6">
                    <button
                      className={`py-2 px-4 font-medium ${!mapView ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-600 hover:text-gray-800'}`}
                      onClick={() => setMapView(false)}
                    >
                      Résultats nationaux
                    </button>
                    <button
                      className={`py-2 px-4 font-medium ${mapView ? 'text-blue-800 border-b-2 border-blue-800' : 'text-gray-600 hover:text-gray-800'}`}
                      onClick={() => setMapView(true)}
                    >
                      Résultats par région
                    </button>
                  </div>
                  
                  {!mapView ? (
                    // Vue des résultats nationaux
                    <div>
                      {selectedElection === "pres2025" ? (
                        // Résultats présidentiels
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-4">Résultats des candidats</h3>
                          
                          <div className="space-y-4 mb-8">
                            {resultsData.candidates.map((candidate, index) => (
                              <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                  <div className="flex items-center mb-2 md:mb-0">
                                    <div className={`h-10 w-10 bg-${candidate.color}-200 rounded-full mr-3 flex items-center justify-center`}>
                                      <span className="font-bold text-gray-600">{candidate.name.charAt(0)}</span>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-600">{candidate.name}</h4>
                                      <p className="text-sm text-black">{candidate.party}</p>
                                    </div>
                                  </div>
                                  <div className="text-2xl font-bold text-gray-600">{candidate.percentage}%</div>
                                </div>
                                
                                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                  <div
                                    className={`bg-${candidate.color}-500 h-4`}
                                    style={{ width: `${candidate.percentage}%` }}
                                  ></div>
                                </div>
                                
                                <div className="mt-2 text-sm text-gray-600">
                                  {candidate.votes.toLocaleString()} votes
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        // Résultats législatifs et municipaux
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            {selectedElection === "leg2024" ? "Répartition des sièges" : "Répartition des municipalités et régions"}
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                              <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                <h4 className="font-semibold mb-4">
                                  {selectedElection === "leg2024" ? "Sièges à l'Assemblée Nationale" : "Municipalités remportées"}
                                </h4>
                                
                                <div className="space-y-4">
                                  {resultsData.parties.map((party, index) => (
                                    <div key={index}>
                                      <div className="flex justify-between mb-1">
                                        <span>{party.name}</span>
                                        <span className="font-semibold">
                                          {selectedElection === "leg2024" ? party.seats : party.municipalities}
                                        </span>
                                      </div>
                                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div
                                          className={`bg-${party.color}-500 h-3`}
                                          style={{ 
                                            width: `${selectedElection === "leg2024" 
                                              ? (party.seats / 260) * 100 
                                              : (party.municipalities / 220) * 100}%` 
                                          }}
                                        ></div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="bg-white p-4 border border-gray-200 rounded-lg">
                                <h4 className="font-semibold mb-4">
                                  {selectedElection === "leg2024" ? "Pourcentage des votes nationaux" : "Régions remportées"}
                                </h4>
                                
                                {selectedElection === "leg2024" ? (
                                  // Graphique en cercle pour les législatives
                                  <div className="h-64 relative flex justify-center">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="text-center">
                                        <div className="text-xl font-bold">260</div>
                                        <div className="text-sm text-gray-600">sièges</div>
                                      </div>
                                    </div>
                                    <svg width="250" height="250" viewBox="0 0 100 100">
                                      {/* Simulation d'un graphique en donut */}
                                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="0" />
                                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10B981" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="251.2" strokeDashoffset="150.72" />
                                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F97316" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="251.2" strokeDashoffset="107.66" />
                                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8B5CF6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="251.2" strokeDashoffset="42.7" />
                                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#6B7280" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="251.2" strokeDashoffset="5.02" />
                                    </svg>
                                  </div>
                                ) : (
                                  // Liste pour les municipales
                                  <div className="space-y-4">
                                    {resultsData.parties.map((party, index) => (
                                      <div key={index}>
                                        <div className="flex justify-between mb-1">
                                          <span>{party.name}</span>
                                          <span className="font-semibold">{party.regions}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                          <div
                                            className={`bg-${party.color}-500 h-3`}
                                            style={{ width: `${(party.regions / 44) * 100}%` }}
                                          ></div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // Vue des résultats par région (carte)
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Résultats par région</h3>
                      
                      <div className="bg-white p-6 border border-gray-200 rounded-lg mb-6">
                        <p className="text-gray-600 mb-6">La carte ci-dessous montre les résultats par région. Cliquez sur une région pour voir les détails.</p>
                        
                        {/* Placeholder pour une carte interactive */}
                        <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center mb-4">
                          <p className="text-gray-500">Carte interactive de la Côte d'Ivoire</p>
                        </div>
                        
                        <p className="text-sm text-gray-500 text-center">Cliquez sur une région pour voir les résultats détaillés</p>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Résultats par principales régions</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {resultsData.regions.map((region, index) => (
                          <div key={index} className="bg-white p-4 border border-gray-200 rounded-lg">
                            <h4 className="font-semibold mb-2">{region.name}</h4>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-600">
                                {selectedElection === "pres2025" 
                                  ? `Vainqueur: ${region.winner}` 
                                  : `Parti majoritaire: ${region.mainParty}`}
                              </span>
                              <span className="font-medium text-blue-800">
                                {selectedElection === "leg2024" && `${region.seats} sièges`}
                              </span>
                            </div>
                            <div className="text-gray-600">Participation: {region.participation}%</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Téléchargement des résultats */}
                  <div className="mt-8 flex flex-col sm:flex-row justify-between items-center p-6 bg-gray-100 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Télécharger les résultats complets</h3>
                      <p className="text-gray-600 text-sm">Accédez aux résultats détaillés au format PDF ou Excel</p>
                    </div>
                    <div className="flex space-x-3 mt-4 sm:mt-0">
                      <a href="#" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        PDF
                      </a>
                      <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Excel
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">Aucune donnée disponible pour cette élection.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Section FAQ */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Questions fréquemment posées</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-800 mb-2">Comment les résultats sont-ils comptabilisés ?</h3>
                  <p className="text-gray-600">Les résultats sont collectés à partir de chaque bureau de vote, vérifiés par des observateurs indépendants, puis centralisés par la Commission Électorale Indépendante.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-800 mb-2">Quand les résultats définitifs sont-ils publiés ?</h3>
                  <p className="text-gray-600">Les résultats provisoires sont généralement disponibles dans les 48 heures suivant la fermeture des bureaux de vote. Les résultats définitifs sont publiés après traitement de toutes les réclamations, généralement sous 5 jours.</p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="font-medium text-gray-800 mb-2">Comment puis-je contester les résultats ?</h3>
                  <p className="text-gray-600">Les candidats ou leurs représentants peuvent déposer des recours auprès du Conseil Constitutionnel dans un délai de 72 heures après la publication des résultats provisoires.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Les résultats peuvent-ils être modifiés après publication ?</h3>
                  <p className="text-gray-600">Les résultats provisoires peuvent être ajustés en cas d'erreurs matérielles ou suite à des décisions du Conseil Constitutionnel. Les résultats définitifs, une fois proclamés, sont irrévocables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}