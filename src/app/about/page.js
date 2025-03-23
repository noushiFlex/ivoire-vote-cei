import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* En-tête de page */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-blue-800 text-white p-6">
              <h1 className="text-2xl font-bold">
                À propos de la Commission Électorale Indépendante
              </h1>
              <p className="mt-2">
                Découvrez notre mission, notre histoire et notre engagement pour
                des élections transparentes.
              </p>
            </div>

            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Notre Mission
                  </h2>
                  <p className="text-gray-600 mb-4">
                    La Commission Électorale Indépendante (CEI) est l'organe
                    chargé d'organiser, d'administrer et de superviser toutes
                    les opérations électorales et référendaires en République de
                    Côte d'Ivoire.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Notre mission principale est de garantir l'organisation
                    d'élections libres, transparentes et crédibles, permettant
                    ainsi aux citoyens ivoiriens d'exercer leur droit de vote
                    dans les meilleures conditions.
                  </p>
                  <p className="text-gray-600">
                    Nous nous engageons à moderniser continuellement le
                    processus électoral, avec l'introduction progressive du vote
                    électronique et des technologies de pointe pour assurer
                    l'intégrité du vote.
                  </p>
                </div>
                <div className="md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center p-6">
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/Logo-CEI.png"
                      alt="Logo Commission Électorale Indépendante"
                      className="object-contain"
                      fill
                    />
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Notre Histoire
                </h2>
                <div className="relative">
                  {/* Timeline */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

                  {/* Points Timeline */}
                  <div className="space-y-12 relative">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                        <h3 className="text-lg font-medium text-blue-800">
                          2000
                        </h3>
                        <p className="text-gray-600">
                          Création de la Commission Électorale Indépendante en
                          Côte d'Ivoire pour garantir des élections
                          transparentes.
                        </p>
                      </div>
                      <div className="z-10 relative flex items-center justify-center w-8 h-8 bg-blue-800 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1"></div>
                      <div className="z-10 relative flex items-center justify-center w-8 h-8 bg-blue-800 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 order-1 md:order-2 mb-4 md:mb-0">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                        <h3 className="text-lg font-medium text-blue-800">
                          2010
                        </h3>
                        <p className="text-gray-600">
                          Adoption de nouvelles technologies pour améliorer
                          l'identification des électeurs et sécuriser le
                          processus électoral.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                        <h3 className="text-lg font-medium text-blue-800">
                          2015
                        </h3>
                        <p className="text-gray-600">
                          Réforme de la CEI pour renforcer son indépendance et
                          optimiser la gestion des élections à tous les niveaux.
                        </p>
                      </div>
                      <div className="z-10 relative flex items-center justify-center w-8 h-8 bg-blue-800 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1"></div>
                      <div className="z-10 relative flex items-center justify-center w-8 h-8 bg-blue-800 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 order-1 md:order-2 mb-4 md:mb-0">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12 md:text-left order-3">
                        <h3 className="text-lg font-medium text-blue-800">
                          2020
                        </h3>
                        <p className="text-gray-600">
                          Déploiement de la première phase pilote du vote
                          électronique dans certaines régions du pays.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                        <h3 className="text-lg font-medium text-blue-800">
                          2025
                        </h3>
                        <p className="text-gray-600">
                          Lancement de la plateforme nationale de vote
                          électronique, accessible à tous les électeurs
                          ivoiriens.
                        </p>
                      </div>
                      <div className="z-10 relative flex items-center justify-center w-8 h-8 bg-blue-800 rounded-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <div className="md:w-1/2 md:pl-12 md:text-left"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Notre Équipe
                </h2>
                <p className="text-gray-600 mb-6">
                  La CEI est dirigée par un conseil de 15 membres nommés pour un
                  mandat de 6 ans, représentant différentes institutions et
                  groupes de la société ivoirienne.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gray-200 h-40">
                      <img
                        src="https://www.koaci.com/assets/news/thumbnails/1500/2024/01/photo_1705507586.jpg"
                        className="object-cover h-full w-full  "
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">
                        M. Ibrahima Coulibaly
                      </h3>
                      <p className="text-sm text-gray-600">
                        Président de la CEI
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gray-200 h-40">
                      <img
                        src="https://www.infomediaire.net/wp-content/uploads/2019/05/Aminata-Tour%C3%A9.jpg"
                        className="object-cover h-full w-full  "
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">
                        Mme. Aminata Touré
                      </h3>
                      <p className="text-sm text-gray-600">Vice-présidente</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gray-200 h-40">
                      <img
                        src="https://media-files.abidjan.net/photo/ebrottie-emile-porte-parole-de-la-commission-electorale-independante-cei_84w2xhjr5oj.jpg"
                        className="object-cover h-full w-full  "
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">
                        M. EBROTIE Emile
                      </h3>
                      <p className="text-sm text-gray-600">
                        Secrétaire Permanent Adjoint 1
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <Link
                    href="/equipe"
                    className="text-blue-800 hover:text-blue-600 font-medium"
                  >
                    Voir tous les membres →
                  </Link>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Nos Valeurs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-blue-800 text-3xl mb-3">⚖️</div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Indépendance
                    </h3>
                    <p className="text-sm text-gray-600">
                      Nous agissons en toute indépendance, sans influence
                      extérieure.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-blue-800 text-3xl mb-3">🔍</div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Transparence
                    </h3>
                    <p className="text-sm text-gray-600">
                      Nous assurons un processus électoral transparent à toutes
                      les étapes.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-blue-800 text-3xl mb-3">🤝</div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Inclusion
                    </h3>
                    <p className="text-sm text-gray-600">
                      Nous garantissons que tous les citoyens puissent exercer
                      leur droit de vote.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <div className="text-blue-800 text-3xl mb-3">🔒</div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Intégrité
                    </h3>
                    <p className="text-sm text-gray-600">
                      Nous veillons à l'intégrité et à la sécurité du processus
                      électoral.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Partenaires et Collaborations
                </h2>
                <p className="text-gray-600 mb-6">
                  La CEI travaille en étroite collaboration avec diverses
                  institutions nationales et internationales pour garantir la
                  qualité et la crédibilité des processus électoraux.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 border border-gray-200 rounded-lg flex items-center justify-center h-24">
                    <p className="text-gray-500 font-medium">
                      Gouvernement Ivoirien
                    </p>
                  </div>
                  <div className="bg-white p-4 border border-gray-200 rounded-lg flex items-center justify-center h-24">
                    <p className="text-gray-500 font-medium">Nations Unies</p>
                  </div>
                  <div className="bg-white p-4 border border-gray-200 rounded-lg flex items-center justify-center h-24">
                    <p className="text-gray-500 font-medium">Union Africaine</p>
                  </div>
                  <div className="bg-white p-4 border border-gray-200 rounded-lg flex items-center justify-center h-24">
                    <p className="text-gray-500 font-medium">CEDEAO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-800 text-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Rejoignez-nous dans notre mission
              </h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Participez activement à la vie démocratique de la Côte d'Ivoire
                en vous inscrivant sur les listes électorales et en votant lors
                des prochaines élections.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/inscription"
                  className="bg-white text-blue-800 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  S'inscrire maintenant
                </Link>
                <Link
                  href="/contact"
                  className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
