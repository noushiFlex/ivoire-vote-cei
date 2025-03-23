"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: 'general', name: 'Général' },
    { id: 'inscription', name: 'Inscription électorale' },
    { id: 'vote', name: 'Processus de vote' },
    { id: 'securite', name: 'Sécurité et confidentialité' },
    { id: 'resultats', name: 'Résultats électoraux' },
    { id: 'technique', name: 'Support technique' },
  ];
  
  const faqItems = {
    general: [
      {
        question: "Qu'est-ce que la Commission Électorale Indépendante (CEI) ?",
        answer: "La Commission Électorale Indépendante (CEI) est l'organe chargé d'organiser, d'administrer et de superviser toutes les opérations électorales et référendaires en République de Côte d'Ivoire. Elle garantit la transparence et l'équité du processus électoral."
      },
      {
        question: "Quelles sont les élections organisées par la CEI ?",
        answer: "La CEI organise les élections présidentielles, législatives, régionales et municipales. Elle est également responsable de l'organisation des référendums nationaux."
      },
      {
        question: "Comment contacter la CEI ?",
        answer: "Vous pouvez contacter la CEI par téléphone au +225 27 20 30 33 16, par email à info@cei.ci, ou en vous rendant à notre siège situé à Avenue Franchet d'Esperey, Abidjan. Nous disposons également de bureaux régionaux dans les principales villes du pays."
      },
      {
        question: "Comment devenir observateur électoral ?",
        answer: "Pour devenir observateur électoral, vous devez soumettre une demande auprès de la CEI. Les candidatures peuvent être envoyées par les organisations de la société civile, les partis politiques ou les institutions internationales reconnues. Contactez-nous à observateurs@cei.ci pour plus d'informations."
      },
    ],
    inscription: [
      {
        question: "Comment puis-je m'inscrire sur les listes électorales ?",
        answer: "Vous pouvez vous inscrire sur les listes électorales en ligne via notre plateforme, ou en vous rendant dans l'un de nos bureaux d'inscription. Vous devrez présenter une pièce d'identité nationale valide et fournir certaines informations personnelles."
      },
      {
        question: "Quels documents sont nécessaires pour s'inscrire ?",
        answer: "Pour vous inscrire, vous devez fournir une copie de votre carte nationale d'identité (recto-verso), une photo d'identité récente, et un justificatif de domicile datant de moins de 3 mois."
      },
      {
        question: "Puis-je vérifier mon inscription sur les listes électorales ?",
        answer: "Oui, vous pouvez vérifier votre inscription sur notre site web en utilisant votre numéro de CNI, ou en envoyant un SMS au 1020 avec le format 'VERIF suivi de votre numéro de CNI'. Vous pouvez également vous rendre dans n'importe quel bureau de la CEI."
      },
      {
        question: "Quelle est la date limite pour s'inscrire avant une élection ?",
        answer: "La date limite d'inscription est généralement fixée à 90 jours avant la date du scrutin. Toutefois, cette date peut varier en fonction du calendrier électoral. Nous recommandons de s'inscrire dès que possible pour éviter tout problème de dernière minute."
      },
      {
        question: "Comment puis-je mettre à jour mes informations personnelles ?",
        answer: "Vous pouvez mettre à jour vos informations personnelles (changement d'adresse, etc.) en vous connectant à votre compte sur notre plateforme en ligne ou en vous rendant dans un bureau de la CEI avec votre pièce d'identité et les justificatifs nécessaires."
      },
    ],
    vote: [
      {
        question: "Comment fonctionne le vote électronique ?",
        answer: "Le vote électronique sur notre plateforme se déroule en 3 étapes : identification de l'électeur (avec CNI ou vérification biométrique), accès au bulletin de vote électronique, et confirmation du choix. Le système garantit l'anonymat du vote tout en assurant qu'une personne ne peut voter qu'une seule fois."
      },
      {
        question: "Où puis-je voter le jour de l'élection ?",
        answer: "Vous pouvez voter dans le bureau de vote qui vous a été assigné lors de votre inscription. Consultez votre carte d'électeur ou vérifiez en ligne sur notre site web pour connaître l'emplacement de votre bureau de vote."
      },
      {
        question: "Quelles sont les heures d'ouverture des bureaux de vote ?",
        answer: "Les bureaux de vote sont généralement ouverts de 7h00 à 18h00 le jour du scrutin. Il est recommandé de voter tôt pour éviter les files d'attente."
      },
      {
        question: "Puis-je voter si j'ai perdu ma carte d'électeur ?",
        answer: "Oui, vous pouvez voter avec votre carte nationale d'identité si vous êtes inscrit sur les listes électorales. Toutefois, il est recommandé de faire une déclaration de perte et de demander un duplicata de votre carte d'électeur au bureau de la CEI le plus proche."
      },
      {
        question: "Comment voter si je suis à l'étranger ?",
        answer: "Les Ivoiriens résidant à l'étranger peuvent voter dans les ambassades et consulats de Côte d'Ivoire, à condition d'être inscrits sur les listes électorales consulaires. Pour plus d'informations, contactez votre représentation diplomatique."
      },
    ],
    securite: [
      {
        question: "Comment la confidentialité de mon vote est-elle garantie ?",
        answer: "La confidentialité de votre vote est garantie par un système de chiffrement avancé qui dissocie votre identité de votre vote. Une fois votre vote enregistré, il est impossible de relier votre identité à votre choix, même pour les administrateurs du système."
      },
      {
        question: "Quelles mesures de sécurité sont mises en place pour le vote électronique ?",
        answer: "Notre système de vote électronique utilise un chiffrement de bout en bout, une authentification à deux facteurs, des audits réguliers par des experts indépendants, et une surveillance continue contre les tentatives d'intrusion. De plus, le code source du système est régulièrement audité par des organismes indépendants."
      },
      {
        question: "Comment puis-je être sûr que mon vote a bien été pris en compte ?",
        answer: "Après avoir voté, vous recevez un reçu avec un code unique qui confirme l'enregistrement de votre vote. Ce reçu ne révèle pas votre choix mais vous permet de vérifier que votre vote a bien été comptabilisé dans le décompte final."
      },
      {
        question: "Est-ce que quelqu'un peut voir pour qui j'ai voté ?",
        answer: "Non, personne ne peut voir pour qui vous avez voté. Le système est conçu pour garantir l'anonymat total du vote. Dès que votre vote est validé, il est dissocié de vos informations d'identification et impossible à tracer."
      },
    ],
    resultats: [
      {
        question: "Quand les résultats des élections sont-ils publiés ?",
        answer: "Les résultats provisoires sont généralement publiés dans les 48 à 72 heures suivant la fermeture des bureaux de vote. Les résultats définitifs sont proclamés après traitement des éventuelles contestations, généralement dans un délai de 5 à 7 jours."
      },
      {
        question: "Où puis-je consulter les résultats des élections ?",
        answer: "Les résultats sont publiés sur notre site web officiel, diffusés dans les médias nationaux, et affichés dans tous les bureaux de la CEI à travers le pays. Vous pouvez également recevoir les résultats par SMS en vous abonnant à notre service d'alerte."
      },
      {
        question: "Comment les résultats sont-ils vérifiés ?",
        answer: "Les résultats sont vérifiés à plusieurs niveaux. Des représentants des partis politiques, des observateurs nationaux et internationaux, et le personnel de la CEI participent au dépouillement. Le système de vote électronique génère également des journaux d'audit qui peuvent être vérifiés par des experts indépendants."
      },
      {
        question: "Comment contester les résultats d'une élection ?",
        answer: "Les contestations doivent être adressées au Conseil Constitutionnel dans un délai de 72 heures après la publication des résultats provisoires. La requête doit être accompagnée de preuves tangibles d'irrégularités susceptibles d'avoir affecté les résultats."
      },
    ],
    technique: [
      {
        question: "Que faire si je rencontre un problème technique lors du vote électronique ?",
        answer: "En cas de problème technique, contactez immédiatement notre service d'assistance au +225 27 20 30 34 18 ou par email à support@cei.ci. Un technicien vous guidera pour résoudre le problème ou vous orientera vers d'autres options de vote."
      },
      {
        question: "Comment puis-je récupérer mon mot de passe si je l'ai oublié ?",
        answer: "Vous pouvez récupérer votre mot de passe en cliquant sur 'Mot de passe oublié' sur la page de connexion. Un lien de réinitialisation sera envoyé à l'adresse email ou au numéro de téléphone associé à votre compte."
      },
      {
        question: "Quels navigateurs sont compatibles avec la plateforme de vote ?",
        answer: "Notre plateforme est compatible avec les versions récentes de Chrome, Firefox, Safari, Edge et Opera. Pour une expérience optimale, nous recommandons d'utiliser la dernière version de votre navigateur préféré."
      },
      {
        question: "Puis-je voter depuis mon téléphone mobile ?",
        answer: "Oui, notre plateforme est entièrement adaptée aux appareils mobiles. Vous pouvez voter depuis un smartphone ou une tablette en accédant à notre site web ou en téléchargeant notre application mobile officielle disponible sur App Store et Google Play."
      },
      {
        question: "La plateforme est-elle accessible aux personnes en situation de handicap ?",
        answer: "Oui, notre plateforme est conçue pour être accessible à tous, y compris aux personnes en situation de handicap. Elle est compatible avec les lecteurs d'écran, propose des options de contraste élevé, et permet d'augmenter la taille des caractères. Des options d'assistance vocale sont également disponibles."
      },
    ],
  };
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredFaqs = searchQuery.length > 2 
    ? Object.values(faqItems).flat().filter(
        item => item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqItems[activeCategory];
  
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* En-tête de page */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-blue-800 text-white p-6">
              <h1 className="text-2xl font-bold">Questions fréquemment posées</h1>
              <p className="mt-2">Trouvez des réponses à vos questions concernant le processus électoral.</p>
            </div>
            
            <div className="p-6">
              {/* Recherche */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher une question..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchQuery.length > 0 && searchQuery.length < 3 && (
                  <p className="text-sm text-gray-500 mt-2">Veuillez saisir au moins 3 caractères pour la recherche.</p>
                )}
              </div>
              
              {/* Catégories */}
              {searchQuery.length < 3 && (
                <div className="mb-8 overflow-x-auto">
                  <div className="flex space-x-2 pb-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className={`px-4 py-2 rounded-md whitespace-nowrap ${
                          activeCategory === category.id
                            ? 'bg-blue-800 text-white'
                            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Questions et réponses */}
              <div className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <details className="group">
                        <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                          <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-600">{item.answer}</p>
                        </div>
                      </details>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Aucun résultat trouvé</h3>
                    <p className="text-gray-600">Essayez avec d'autres termes ou consultez une autre catégorie.</p>
                  </div>
                )}
              </div>
              
              {/* Contact section */}
              <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Vous n'avez pas trouvé de réponse à votre question ?</h2>
                <p className="text-gray-600 mb-6">
                  Contactez notre équipe d'assistance qui se fera un plaisir de vous aider.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact" className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-md font-medium transition-colors">
                    Nous contacter
                  </Link>
                  <a href="tel:+22527203033" className="bg-white hover:bg-gray-100 text-blue-800 border border-blue-800 px-6 py-3 rounded-md font-medium transition-colors">
                    +225 27 20 30 33 16
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Documents utiles */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Documents utiles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="#" className="block bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Guide de l'électeur</h3>
                      <p className="text-sm text-gray-600">PDF - 2.3 MB</p>
                    </div>
                  </div>
                </a>
                
                <a href="#" className="block bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Code électoral</h3>
                      <p className="text-sm text-gray-600">PDF - 4.8 MB</p>
                    </div>
                  </div>
                </a>
                
                <a href="#" className="block bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-md mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Tutoriel vote électronique</h3>
                      <p className="text-sm text-gray-600">PDF - 1.5 MB</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}