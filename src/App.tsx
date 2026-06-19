import { ArrowRight, Mail, MapPin, Check, TrendingUp, Lightbulb, Target } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-secondary font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-display font-bold text-xl tracking-tight text-secondary">
                (you)r communication
              </span>
            </div>
            <div className="hidden sm:flex space-x-8 items-center">
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Leistungen
              </a>
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                Über uns
              </a>
              <a 
                href="mailto:yourcommunication@gmail.com" 
                className="bg-secondary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center gap-12 sm:gap-20">
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Aus Wolfurt</span>
                </div>
                <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight text-secondary leading-[1.1]">
                  Klares, effektives <br />
                  <span className="text-primary">Marketing</span> für Sie.
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed">
                  Wir sind spezialisiert auf praktische Marketing-Aktivitäten, die echte Ergebnisse liefern. Kein Fachjargon, nur klare Strategien, die Ihrem lokalen Unternehmen helfen zu wachsen.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href="mailto:yourcommunication@gmail.com" 
                  className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary-hover transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Jetzt kontaktieren
                </a>
                <a 
                  href="#services" 
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-lg text-secondary hover:bg-gray-50 border border-gray-200 transition-all flex items-center justify-center gap-2"
                >
                  Unsere Leistungen
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Minimal Geometric Hero Graphic instead of generic laptop photos */}
            <div className="hidden lg:block flex-1 relative">
               <div className="w-full aspect-square bg-gray-50 rounded-[3rem] p-8 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute top-1/4 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
                  <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
                  
                  <div className="relative bg-white p-8 rounded-3xl shadow-xl w-3/4 transform rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                       <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-1/2 mb-8"></div>
                    <div className="flex space-x-3">
                       <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                       <div className="h-2 bg-primary rounded-full w-full"></div>
                       <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="font-display text-4xl font-bold text-secondary mb-4">Marketing Aktivitäten</h2>
              <p className="text-gray-600 text-lg">
                Wir übernehmen das komplette Spektrum an Marketing-Aktivitäten, damit Sie sich auf Ihr Geschäft konzentrieren können. Von der Strategie bis zur Umsetzung verfolgen wir einen fokussierten Ansatz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Strategische Positionierung",
                  desc: "Klar definieren, wer Sie sind, was Sie anbieten und warum Ihre Kunden Sie der Konkurrenz vorziehen sollten."
                },
                {
                  icon: Lightbulb,
                  title: "Markenkommunikation",
                  desc: "Entwicklung einer klaren, einheitlichen Botschaft über alle Kanäle hinweg, um Vertrauen am Markt aufzubauen."
                },
                {
                  icon: TrendingUp,
                  title: "Digitale Kampagnen",
                  desc: "Gezielte digitale Marketing-Maßnahmen, um genau Ihre Zielgruppe zu erreichen und echte Anfragen zu generieren."
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Trust Section */}
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-secondary rounded-[3rem] p-10 sm:p-20 flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
                  Warum Sie mit uns arbeiten sollten
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Als Agentur direkt hier in Wolfurt verstehen wir den lokalen Markt. Wir glauben, dass gutes Marketing nicht kompliziert sein muss. Es sollte transparent, messbar und direkt auf Ihre Ziele ausgerichtet sein.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Kein leeres Gerede oder Startup-Jargon",
                    "Direkte Kommunikation und Transparenz",
                    "Abgestimmt auf Ihre lokalen Bedürfnisse",
                    "Fokus auf ROI und praktische Ergebnisse"
                  ].map((point, index) => (
                    <li key={index} className="flex items-center text-gray-300 gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full relative">
                <div className="aspect-[4/3] bg-gray-800 rounded-3xl border border-gray-700 p-8 flex flex-col justify-between">
                   <div className="space-y-4">
                      <div className="w-10 h-10 bg-gray-700 rounded-full mb-8"></div>
                      <div className="h-6 w-3/4 bg-gray-700 rounded-lg"></div>
                      <div className="h-6 w-1/2 bg-gray-700 rounded-lg"></div>
                   </div>
                   <div className="flex justify-end mt-12">
                      <div className="h-12 w-32 bg-primary rounded-full"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Location Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-10">
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-display text-4xl font-bold text-secondary">Bereit loszulegen?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir sind stolz darauf, in Wolfurt ansässig zu sein. Egal, ob Sie eine komplette Neuausrichtung Ihres Marketings oder spezifische Aktivitäten benötigen, wir sind für Sie da.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
              <a 
                href="mailto:yourcommunication@gmail.com" 
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-hover transition-colors flex items-center justify-center gap-3 text-lg"
              >
                <Mail className="w-5 h-5" />
                yourcommunication@gmail.com
              </a>
              <a 
                href="mailto:yourcommunication@gmail.com" 
                className="w-full sm:w-auto bg-white text-secondaryborder border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 text-lg"
              >
                Angebot anfordern
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-secondary">(you)r communication</span>
          </div>
          <p className="text-gray-500 text-sm">
            Marketing-Agentur &bull; Wolfurt
          </p>
          <div className="flex text-sm text-gray-500 space-x-6">
            <a href="mailto:yourcommunication@gmail.com" className="hover:text-primary transition-colors">Kontakt</a>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
