"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      title: "Élections Présidentielles 2025",
      description: "Participez aux élections présidentielles. Votre voix compte!",
      imageUrl: "https://www.cei.ci/wp-content/uploads/2020/06/343A4492.jpg",
    },
    {
      title: "Vote Électronique Sécurisé",
      description: "Notre plateforme utilise les technologies les plus avancées pour garantir l'intégrité de votre vote.",
      imageUrl: "/images/secure-voting.jpg",
    },
    {
      title: "Résultats en Temps Réel",
      description: "Suivez les résultats des élections en temps réel sur notre plateforme.",
      imageUrl: "/images/results.jpg",
    }
  ];
  
  // Services proposés
  const services = [
    {
      title: "Inscription en ligne",
      description: "Inscrivez-vous sur les listes électorales facilement depuis votre domicile",
      icon: "📝",
      link: "/inscription"
    },
    {
      title: "Vote électronique",
      description: "Votez en toute sécurité via notre plateforme numérique",
      icon: "🗳️",
      link: "/vote"
    },
    {
      title: "Vérification d'identité",
      description: "Vérifiez votre éligibilité et votre bureau de vote",
      icon: "🔍",
      link: "/verification"
    },
    {
      title: "Résultats électoraux",
      description: "Consultez les résultats des élections en temps réel",
      icon: "📊",
      link: "/resultats"
    },
  ];
  
  // Actualités
  const news = [
    {
      title: "Début des inscriptions pour les élections présidentielles 2025",
      date: "22 Mars 2025",
      excerpt: "Les inscriptions pour les élections présidentielles commencent aujourd'hui. Tous les citoyens sont invités à s'inscrire...",
      imageUrl: "https://www.cei.ci/wp-content/uploads/2025/03/B05I3611.jpg",
      link: "/actualites/1"
    },
    {
      title: "Mise à jour de la plateforme de vote électronique",
      date: "15 Mars 2025",
      excerpt: "Notre plateforme de vote électronique a été mise à jour avec de nouvelles fonctionnalités de sécurité...",
      imageUrl: "https://www.cei.ci/wp-content/uploads/2020/06/343A4582.jpg",
      link: ""
    },
    {
      title: "Formation des agents électoraux",
      date: "10 Mars 2025",
      excerpt: "Une session de formation pour les agents électoraux a été organisée pour assurer le bon déroulement des élections...",
      imageUrl: "https://www.cei.ci/wp-content/uploads/2020/06/343A4688.jpg",
      link: ""
    },
  ];

  // Gestion du slider
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Changement automatique des slides
  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header Banner */}
      <div className="relative h-[500px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative h-full w-full">
              {/* Placeholder pour l'image (à remplacer par de vraies images) */}
              <div className="absolute inset-0 bg-blue-800 opacity-80"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl text-center max-w-3xl">{slide.description}</p>
                <div className="mt-8">
                  <Link href="/inscription" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-all">
                    S'inscrire maintenant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Contrôles du slider */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 p-2 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Indicateurs */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link href={service.link} key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compteur/Statistiques */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">8.5M+</div>
              <p className="text-lg">Électeurs inscrits</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <p className="text-lg">Bureaux de vote</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-lg">Communes couvertes</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-lg">Taux de sécurité</p>
            </div>
          </div>
        </div>
      </section>

      {/* Actualités */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Dernières Actualités</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-300 relative">
                  {/* Placeholder pour l'image (à remplacer par de vraies images) */}
                  <img className=" object-cover w-full h-full" src={item.imageUrl}></img>

                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <Link href={item.link} className="text-orange-500 hover:text-orange-600 font-medium">
                    Lire la suite →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/actualites" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all">
              Voir toutes les actualités
            </Link>
          </div>
        </div>
      </section>

      {/* Processus électoral */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Processus Électoral</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto md:mx-0">1</div>
                <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-black">Inscription sur les listes électorales</h3>
                <p className="text-gray-600 text-center md:text-left">Inscrivez-vous sur les listes électorales en ligne ou dans les bureaux d'inscription désignés.</p>
              </div>
              <div className="md:w-1/2 bg-gray-800 h-64 rounded-lg">
              <img src='https://img.freepik.com/vecteurs-libre/illustration-du-concept-connexion-ordinateur_114360-7962.jpg' className='w-full h-full object-cover rounded-lg'></img>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center mb-12">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
                <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto md:mx-0">2</div>
                <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-black">Vérification des informations</h3>
                <p className="text-gray-600 text-center md:text-left">Confirmez vos informations personnelles et votre bureau de vote.</p>
              </div>
              <div className="md:w-1/2 bg-gray-200 h-64 rounded-lg">
              <img src='https://img.freepik.com/vecteurs-libre/illustration-concept-abstrait-carte-identite-intelligente_335657-1814.jpg?w=360' className='w-full h-full object-cover rounded-lg'></img></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto md:mx-0">3</div>
                <h3 className="text-xl font-semibold mb-2 text-center md:text-left text-black">Vote électronique</h3>
                <p className="text-gray-600 text-center md:text-left">Votez en toute sécurité via notre plateforme numérique le jour de l'élection.</p>
              </div>
              <div className="md:w-1/2 bg-gray-200 h-64 rounded-lg">
              <img src='https://www.lunel.com/wp-content/uploads/2022/03/4116831-768x768.jpg' className='w-full h-full object-cover rounded-lg'></img>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
                <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 mx-auto md:mx-0">4</div>
                <h3 className="text-xl font-semibold mb-2 text-center md:text-left">Résultats des élections</h3>
                <p className="text-gray-600 text-center md:text-left">Consultez les résultats en temps réel sur notre plateforme.</p>
              </div>
              <div className="md:w-1/2 bg-gray-200 h-64 rounded-lg">
              <img src='https://img.freepik.com/premium-vector/sales-audit-report-review-inspect-analysis-research-data-tax-quality-evaluation-overview-results_212005-735.jpg?semt=ais_hybrid&w=740' className='w-full h-full object-cover rounded-lg'></img></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à participer aux élections ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Inscrivez-vous dès aujourd'hui pour exercer votre droit de vote et contribuer à l'avenir de notre nation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/inscription" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-all">
              S'inscrire
            </Link>
            <Link href="/informations" className="bg-white hover:bg-gray-100 text-blue-800 px-8 py-3 rounded-md font-semibold text-lg transition-all">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}