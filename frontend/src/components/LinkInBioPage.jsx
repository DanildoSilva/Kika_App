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
        <div className="space-y-4 animate-slide-up mb-8">
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

        {/* Instagram Feed */}
        <div className="mb-8 animate-fade-in-delayed">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6 font-display">
            Últimos Trabalhos
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
            <div className="text-center">
              <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">
                Veja nossos trabalhos mais recentes no Instagram
              </p>
              
              {/* Instagram Official Widget */}
              <div className="instagram-embed-container flex justify-center">
                <blockquote 
                  className="instagram-media" 
                  data-instgrm-permalink="https://www.instagram.com/fortes_kika/"
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '99.375%'
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'row', 
                      alignItems: 'center' 
                    }}>
                      <div style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        flexGrow: '0',
                        height: '40px',
                        marginRight: '14px',
                        width: '40px'
                      }}></div>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: '1',
                        justifyContent: 'center'
                      }}>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: '0',
                          height: '14px',
                          marginBottom: '6px',
                          width: '100px'
                        }}></div>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          flexGrow: '0',
                          height: '14px',
                          width: '60px'
                        }}></div>
                      </div>
                    </div>
                    <div style={{ padding: '19% 0' }}></div>
                    <div style={{ 
                      display: 'block', 
                      height: '50px', 
                      margin: '0 auto 12px', 
                      width: '50px' 
                    }}>
                      <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                            <g>
                              <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div style={{ paddingTop: '8px' }}>
                      <div style={{ 
                        color: '#3897f0', 
                        fontFamily: 'Arial,sans-serif', 
                        fontSize: '14px', 
                        fontStyle: 'normal', 
                        fontWeight: '550', 
                        lineHeight: '18px' 
                      }}>
                        Ver esta publicação no Instagram
                      </div>
                    </div>
                    <div style={{ padding: '12.5% 0' }}></div>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'row', 
                      marginBottom: '14px', 
                      alignItems: 'center' 
                    }}>
                      <div>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          height: '12.5px',
                          width: '12.5px',
                          transform: 'translateX(0px) translateY(7px)'
                        }}></div>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          height: '12.5px',
                          transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
                          width: '12.5px',
                          flexGrow: '0',
                          marginRight: '14px',
                          marginLeft: '2px'
                        }}></div>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          height: '12.5px',
                          width: '12.5px',
                          transform: 'translateX(9px) translateY(-18px)'
                        }}></div>
                      </div>
                      <div style={{ marginLeft: '8px' }}>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '50%',
                          flexGrow: '0',
                          height: '20px',
                          width: '20px'
                        }}></div>
                        <div style={{
                          width: '0',
                          height: '0',
                          borderTop: '2px solid transparent',
                          borderLeft: '6px solid #f4f4f4',
                          borderBottom: '2px solid transparent',
                          transform: 'translateX(16px) translateY(-4px) rotate(30deg)'
                        }}></div>
                      </div>
                      <div style={{ marginLeft: 'auto' }}>
                        <div style={{
                          width: '0px',
                          borderTop: '8px solid #F4F4F4',
                          borderRight: '8px solid transparent',
                          transform: 'translateY(16px)'
                        }}></div>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          flexGrow: '0',
                          height: '12px',
                          width: '16px',
                          transform: 'translateY(-4px)'
                        }}></div>
                        <div style={{
                          width: '0',
                          height: '0',
                          borderTop: '8px solid #F4F4F4',
                          borderLeft: '8px solid transparent',
                          transform: 'translateY(-4px) translateX(8px)'
                        }}></div>
                      </div>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      flexGrow: '1', 
                      justifyContent: 'center', 
                      marginBottom: '24px' 
                    }}>
                      <div style={{ 
                        backgroundColor: '#F4F4F4', 
                        borderRadius: '4px', 
                        flexGrow: '0', 
                        height: '14px', 
                        marginBottom: '6px', 
                        width: '224px' 
                      }}></div>
                      <div style={{ 
                        backgroundColor: '#F4F4F4', 
                        borderRadius: '4px', 
                        flexGrow: '0', 
                        height: '14px', 
                        width: '144px' 
                      }}></div>
                    </div>
                  </div>
                  <p style={{ 
                    color: '#c9c8cd', 
                    fontFamily: 'Arial,sans-serif', 
                    fontSize: '14px', 
                    lineHeight: '17px', 
                    marginBottom: '0', 
                    marginTop: '8px', 
                    overflow: 'hidden', 
                    padding: '8px 0 7px', 
                    textAlign: 'center', 
                    textOverflow: 'ellipsis', 
                    whiteSpace: 'nowrap' 
                  }}>
                    <a 
                      href="https://www.instagram.com/fortes_kika/" 
                      style={{ 
                        color: '#c9c8cd', 
                        fontFamily: 'Arial,sans-serif', 
                        fontSize: '14px', 
                        fontStyle: 'normal', 
                        fontWeight: 'normal', 
                        lineHeight: '17px', 
                        textDecoration: 'none' 
                      }} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Uma publicação compartilhada por Kika Fortes (@fortes_kika)
                    </a>
                  </p>
                </blockquote>
              </div>
              
              <div className="mt-6">
                <Button
                  onClick={() => handleContactClick("https://instagram.com/fortes_kika")}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Ver Mais no Instagram
                </Button>
              </div>
            </div>
          </div>
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