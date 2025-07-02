
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-brand-primary">
                Conditions d'utilisation
              </h1>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Termes</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    En accédant à cette école, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables, et vous convenez d'être responsable du respect de toutes les lois locales applicables. 
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Si vous n'êtes pas d'accord avec l'une de ces conditions, il vous est interdit d'utiliser ou d'accéder à ce site. Les matériaux contenus dans cette école sont protégés par les lois applicables en matière de droits d'auteur et de marques de commerce.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Licence d'utilisation</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Une autorisation est accordée pour télécharger temporairement une copie de tout matériel téléchargeable sur le site Web de l'école uniquement pour une visualisation personnelle, non commerciale et transitoire. 
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Il s'agit d'une autorisation, et non d'un transfert de titre, et en vertu de cette licence, vous n'êtes pas autorisé à :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                    <li>modifier ou copier les matériaux ;</li>
                    <li>utiliser les matériaux à des fins commerciales, ou pour toute diffusion publique (commerciale ou non commerciale) ;</li>
                    <li>tenter de décompiler ou de rétro-ingénierie de tout logiciel contenu sur le site Web de l'école ;</li>
                    <li>supprimer toute mention de droits d'auteur ou autre mention de propriété des matériaux ; ou</li>
                    <li>transférer les matériaux à une autre personne ou "copier" les matériaux sur tout autre serveur.</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Cette licence se résilie automatiquement si vous enfreignez l'une de ces restrictions et peut être résiliée par l'entreprise à tout moment. À la résiliation de votre visionnage de ces matériaux ou à la résiliation de cette licence, vous devez détruire tout matériel téléchargé en votre possession, que ce soit sous forme électronique ou imprimée.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Avertissement</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les matériaux sur le site Web de l'école sont fournis "tels quels". L'école ne fait aucune garantie, expresse ou implicite, et par la présente, rejette et annule toutes les autres garanties, y compris, sans limitation, les garanties implicites ou les conditions de qualité marchande, d'aptitude à un usage particulier ou de non-violation de droits de propriété intellectuelle ou d'autres violations de droits.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    De plus, l'école ne garantit pas et ne fait aucune déclaration concernant l'exactitude, les résultats probables ou la fiabilité de l'utilisation des matériaux sur son site Web ou liés à ces matériaux, ou sur tout site lié à ce site.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Limitations</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En aucun cas, l'école ne sera responsable de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) résultant de l'utilisation ou de l'incapacité d'utiliser les matériaux sur le site Web de l'école, même si l'école ou un représentant autorisé de l'école a été informé verbalement ou par écrit de la possibilité de tels dommages.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Étant donné que certaines juridictions n'autorisent pas de limitations aux garanties implicites, ou de limitations de responsabilité pour des dommages consécutifs ou accessoires, ces limitations peuvent ne pas s'appliquer à vous.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Révisions et erreurs</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les matériaux figurant sur le site Web de l'école peuvent contenir des erreurs techniques, typographiques ou photographiques. L'école ne garantit pas que les matériaux sur son site Web sont exacts, complets ou à jour.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    L'école peut apporter des modifications aux matériaux contenus sur son site Web à tout moment sans préavis. Cependant, l'école ne s'engage pas à mettre à jour les matériaux.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">6. Liens</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    L'école n'a pas examiné tous les sites liés à son site Web et n'est pas responsable du contenu de ces sites liés. L'inclusion de tout lien n'implique pas une approbation de la part de l'école du site.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    L'utilisation de tout site Web lié se fait aux risques de l'utilisateur.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">7. Modifications des conditions d'utilisation du site</h2>
                  <p className="text-gray-700 leading-relaxed">
                    L'école peut réviser ces conditions d'utilisation pour son site Web à tout moment sans préavis. En utilisant ce site Web, vous acceptez d'être lié par la version actuelle de ces conditions d'utilisation.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800">8. Loi applicable</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Toute réclamation liée au site Web de l'école sera régie par les lois de la juridiction du propriétaire de l'école, sans égard à ses dispositions en matière de conflit de lois.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
