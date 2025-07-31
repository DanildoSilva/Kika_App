import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { 
  Instagram, 
  Phone, 
  Mail, 
  MessageCircle, 
  Facebook,
  MapPin,
  Sparkles
} from "lucide-react";

const LinkInBioPage = () => {
  const contactLinks = [
    {
      name: "Ver Portfolio no Instagram",
      handle: "@fortes_kika",
      url: "https://instagram.com/fortes_kika",
      icon: Instagram,
      primary: true,
      color: "from-pink-500 to-purple-600"
    },
    {
      name: "Ligar para Agendar",
      handle: "9778557",
      url: "tel:+2389778557",
      icon: Phone,
      primary: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "WhatsApp",
      handle: "+238 9778557",
      url: "https://wa.me/2389778557",
      icon: MessageCircle,
      primary: false,
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Facebook",
      handle: "Kika Fortes",
      url: "https://www.facebook.com/kika.fortes.313727",
      icon: Facebook,
      primary: false,
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Email",
      handle: "kristencarvalho81@gmail.com",
      url: "mailto:kristencarvalho81@gmail.com",
      icon: Mail,
      primary: false,
      color: "from-gray-500 to-gray-700"
    }
  ];

  const handleContactClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-pink-100 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">
        {/* Hero Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <img 
                src="https://customer-assets.emergentagent.com/job_034b8ba9-5b44-431d-ba74-5ff38378c871/artifacts/46tuszry_logo_light_9-16.png"
                alt="Kika Fortes Logo"
                className="w-48 h-48 object-contain drop-shadow-lg animate-scale-in"
              />
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-pink-500 animate-bounce" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-display">
            Kika Fortes
          </h1>
          
          <p className="text-gray-700 leading-relaxed text-base mb-4 px-4">
            Especialista em estética e cuidados com a pele. Oferecemos tratamentos personalizados para realçar sua beleza natural com técnicas modernas e produtos de qualidade premium.
          </p>
          
          <div className="flex items-center justify-center mb-6 text-pink-600">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-base font-medium">Cabo Verde</span>
          </div>
        </div>

        {/* Contact Links */}
        <div className="space-y-4 animate-slide-up">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <Button
                  onClick={() => handleContactClick(link.url)}
                  className={`w-full h-auto p-0 border-0 bg-gradient-to-r ${link.color} hover:scale-105 transition-all duration-300 group ${link.primary ? 'ring-2 ring-pink-300 ring-offset-2' : ''}`}
                  variant="ghost"
                >
                  <div className="flex items-center justify-between w-full p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-semibold text-lg">
                          {link.name}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {link.handle}
                        </p>
                      </div>
                    </div>
                    <div className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 animate-fade-in-delayed">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-pink-100">
            <p className="text-gray-600 text-sm mb-2">
              ✨ Agende sua consulta hoje mesmo ✨
            </p>
            <p className="text-gray-500 text-xs">
              Horário de atendimento: Segunda à Sábado, 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkInBioPage;