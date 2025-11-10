const PHONE_NUMBER = '+1234567890';
const FALLBACK_LANGUAGE = 'en';

const translations = {
  en: {
    'page.title': 'Executive Taxi Driver Services',
    'language.label': 'Choose language',
    'language.ariaLabel': 'Choose language',
    'brand.title': 'Executive Taxi Driver',
    'brand.subtitle': 'Premium city & airport rides',
    'topbar.cta': 'Book a Ride',
    'hero.title': 'Your personal chauffeur on demand',
    'hero.description':
      'Enjoy punctual, comfortable and discreet transfers with a dedicated executive driver. Perfect for airport pick-ups, corporate travel and VIP guests.',
    'hero.ctaPrimary': 'Reserve via WhatsApp',
    'hero.ctaSecondary': 'Explore services',
    'hero.statsYearsLabel': 'Years of professional driving',
    'hero.statsAvailabilityLabel': 'Availability for scheduled rides',
    'hero.statsRatingLabel': 'Top-rated by executive clients',
    'hero.statsAriaLabel': 'Service highlights',
    'hero.imageLabel': 'Luxury vehicle placeholder',
    'hero.imageAlt': 'Executive vehicle exterior',
    'services.title': 'Tailored services for discerning passengers',
    'services.subtitle':
      'From airport transfers to corporate roadshows, every journey is carefully planned for comfort, discretion and punctuality.',
    'services.airportTitle': 'Airport Meet & Greet',
    'services.airportDescription':
      'Flight tracking, luggage assistance and warm welcome signage to impress your guests.',
    'services.airportAlt': 'Executive driver greeting passengers at the airport',
    'services.corporateTitle': 'Corporate Travel',
    'services.corporateDescription':
      'Seamless transfers between meetings, ensuring punctuality and a calm space to prepare on the move.',
    'services.corporateAlt': 'Executive sedan waiting outside an office building',
    'services.eventsTitle': 'VIP Events',
    'services.eventsDescription':
      'Elegant arrivals and departures for galas, red-carpet events and special celebrations.',
    'services.eventsAlt': 'Luxury vehicle arriving at an evening event',
    'promise.title': 'Why executives choose this service',
    'promise.subtitle':
      'Every ride is delivered with meticulous attention to detail and a commitment to your comfort and safety.',
    'promise.luxuryTitle': 'Luxury fleet',
    'promise.luxuryDescription':
      'Late-model sedans and SUVs with premium interiors, bottled water, Wi-Fi and device charging.',
    'promise.driverTitle': 'Professional driver',
    'promise.driverDescription':
      'Fully licensed, multilingual and well-presented driver with extensive knowledge of city routes.',
    'promise.coordinationTitle': 'Seamless coordination',
    'promise.coordinationDescription':
      'Real-time updates, itinerary management and flexible scheduling for changing plans.',
    'promise.safetyTitle': 'Safety first',
    'promise.safetyDescription':
      'Rigorous sanitization, discreet service and adherence to corporate travel policies.',
    'fleet.title': 'Fleet ready for any occasion',
    'fleet.subtitle': 'Choose the vehicle that matches the tone of your engagement.',
    'fleet.sedanTitle': 'Executive Sedan',
    'fleet.sedanDescription':
      'Ideal for individual executives seeking a quiet, productive ride.',
    'fleet.sedanAlt': 'Black executive sedan parked in the city',
    'fleet.suvTitle': 'Luxury SUV',
    'fleet.suvDescription':
      'Spacious comfort for teams or guests travelling with luggage.',
    'fleet.suvAlt': 'Luxury SUV in front of a hotel entrance',
    'fleet.vanTitle': 'Business Van',
    'fleet.vanDescription':
      'Perfect for roadshows, family trips or executive groups on the go.',
    'fleet.vanAlt': 'Business van ready for group transfer',
    'testimonials.title': 'Trusted by leaders and VIP travellers',
    'testimonials.subtitle':
      'Hear what clients say about their journeys with a dedicated executive driver.',
    'testimonials.quoteOne':
      '“Always punctual and impeccably professional. Our board members feel at ease knowing their transportation is handled.”',
    'testimonials.authorOne': '— Sofia M., Corporate Travel Planner',
    'testimonials.quoteTwo':
      '“The ride experience reflects our brand: refined, reliable and premium. Highly recommended for VIP guests.”',
    'testimonials.authorTwo': '— Daniel K., Luxury Hotel Manager',
    'process.title': 'How to secure your ride',
    'process.subtitle': 'Booking your executive transfer is effortless and fast.',
    'process.stepOneTitle': 'Share your itinerary',
    'process.stepOneDescription':
      'Send your pick-up details, schedule and any special requests.',
    'process.stepTwoTitle': 'Receive confirmation',
    'process.stepTwoDescription':
      'Get a tailored quote and confirmation with driver profile.',
    'process.stepThreeTitle': 'Travel in comfort',
    'process.stepThreeDescription':
      'Your driver arrives early, assists with luggage and ensures a smooth ride.',
    'cta.title': 'Ready to elevate your next ride?',
    'cta.subtitle':
      'Message me on WhatsApp to secure luxury transportation tailored to your schedule.',
    'cta.button': 'Chat on WhatsApp',
    'contact.title': 'Contact information',
    'contact.subtitle': 'Feel free to reach out for quotes, availability or special events.',
    'contact.phoneTitle': 'Phone',
    'contact.phoneValue': '+1 (234) 567-890',
    'contact.emailTitle': 'Email',
    'contact.emailValue': 'hello@executive-driver.com',
    'contact.areaTitle': 'Service area',
    'contact.areaDescription': 'Greater metropolitan region and surrounding airports.',
    'contact.hoursTitle': 'Hours',
    'contact.hoursDescription': 'Available by reservation 24/7. Same-day rides upon request.',
    'footer.legalSuffix': 'Executive Taxi Driver. All rights reserved.',
    'footer.cta': 'WhatsApp booking',
    'whatsapp.general':
      'Hello! I would like to schedule an executive ride. Could you please help me?'
  },
  'pt-br': {
    'page.title': 'Serviço de Motorista Executivo',
    'language.label': 'Escolher idioma',
    'language.ariaLabel': 'Selecionar idioma',
    'brand.title': 'Motorista Executivo',
    'brand.subtitle': 'Traslados premium urbanos e aeroportuários',
    'topbar.cta': 'Agendar corrida',
    'hero.title': 'Seu motorista particular sob demanda',
    'hero.description':
      'Desfrute de traslados pontuais, confortáveis e discretos com um motorista executivo dedicado. Ideal para aeroportos, compromissos corporativos e convidados VIP.',
    'hero.ctaPrimary': 'Reservar pelo WhatsApp',
    'hero.ctaSecondary': 'Conhecer serviços',
    'hero.statsYearsLabel': 'Anos de experiência profissional',
    'hero.statsAvailabilityLabel': 'Disponibilidade para corridas agendadas',
    'hero.statsRatingLabel': 'Avaliado com excelência por executivos',
    'hero.statsAriaLabel': 'Destaques do serviço',
    'hero.imageLabel': 'Imagem ilustrativa de veículo de luxo',
    'hero.imageAlt': 'Exterior de um veículo executivo',
    'services.title': 'Serviços sob medida para passageiros exigentes',
    'services.subtitle':
      'De transfers aeroportuários a roadshows corporativos, cada trajeto é planejado com conforto, discrição e pontualidade.',
    'services.airportTitle': 'Recepção no aeroporto',
    'services.airportDescription':
      'Acompanhamento de voos, auxílio com bagagens e placa de boas-vindas para impressionar seus convidados.',
    'services.airportAlt': 'Motorista executivo recebendo passageiros no aeroporto',
    'services.corporateTitle': 'Transporte corporativo',
    'services.corporateDescription':
      'Traslados entre reuniões com pontualidade e um ambiente calmo para se preparar.',
    'services.corporateAlt': 'Sedã executivo aguardando em frente a um escritório',
    'services.eventsTitle': 'Eventos VIP',
    'services.eventsDescription':
      'Chegadas e partidas elegantes para eventos, tapetes vermelhos e celebrações especiais.',
    'services.eventsAlt': 'Veículo de luxo chegando a um evento noturno',
    'promise.title': 'Por que executivos escolhem este serviço',
    'promise.subtitle':
      'Cada viagem é entregue com atenção aos detalhes e compromisso com seu conforto e segurança.',
    'promise.luxuryTitle': 'Frota de luxo',
    'promise.luxuryDescription':
      'Sedãs e SUVs novos, com interiores premium, água, Wi-Fi e carregadores.',
    'promise.driverTitle': 'Motorista profissional',
    'promise.driverDescription':
      'Motorista licenciado, multilíngue e bem-apresentado, com profundo conhecimento da cidade.',
    'promise.coordinationTitle': 'Coordenação impecável',
    'promise.coordinationDescription':
      'Atualizações em tempo real, gestão de itinerários e flexibilidade para mudanças.',
    'promise.safetyTitle': 'Segurança em primeiro lugar',
    'promise.safetyDescription':
      'Higienização rigorosa, serviço discreto e conformidade com políticas corporativas.',
    'fleet.title': 'Frota pronta para qualquer ocasião',
    'fleet.subtitle': 'Escolha o veículo que combina com o seu compromisso.',
    'fleet.sedanTitle': 'Sedã Executivo',
    'fleet.sedanDescription':
      'Ideal para executivos que buscam um trajeto silencioso e produtivo.',
    'fleet.sedanAlt': 'Sedã executivo preto estacionado na cidade',
    'fleet.suvTitle': 'SUV de Luxo',
    'fleet.suvDescription':
      'Amplo conforto para equipes ou convidados com bagagem.',
    'fleet.suvAlt': 'SUV de luxo em frente à entrada de um hotel',
    'fleet.vanTitle': 'Van Corporativa',
    'fleet.vanDescription':
      'Perfeita para roadshows, viagens em família ou grupos executivos.',
    'fleet.vanAlt': 'Van corporativa pronta para transporte de grupo',
    'testimonials.title': 'Confiado por líderes e viajantes VIP',
    'testimonials.subtitle':
      'Veja o que os clientes dizem sobre suas viagens com um motorista executivo dedicado.',
    'testimonials.quoteOne':
      '“Sempre pontual e impecavelmente profissional. Nosso conselho fica tranquilo sabendo que o transporte está garantido.”',
    'testimonials.authorOne': '— Sofia M., Coordenadora de Viagens Corporativas',
    'testimonials.quoteTwo':
      '“A experiência reflete nossa marca: refinada, confiável e premium. Recomendado para hóspedes VIP.”',
    'testimonials.authorTwo': '— Daniel K., Gerente de Hotel de Luxo',
    'process.title': 'Como garantir sua corrida',
    'process.subtitle': 'Reservar seu transfer executivo é simples e rápido.',
    'process.stepOneTitle': 'Envie seu itinerário',
    'process.stepOneDescription':
      'Informe detalhes de embarque, horários e pedidos especiais.',
    'process.stepTwoTitle': 'Receba a confirmação',
    'process.stepTwoDescription':
      'Receba orçamento personalizado e confirmação com perfil do motorista.',
    'process.stepThreeTitle': 'Viaje com conforto',
    'process.stepThreeDescription':
      'O motorista chega com antecedência, ajuda com bagagens e garante um trajeto tranquilo.',
    'cta.title': 'Pronto para elevar sua próxima viagem?',
    'cta.subtitle':
      'Mande mensagem no WhatsApp e garanta um transporte de luxo alinhado à sua agenda.',
    'cta.button': 'Falar no WhatsApp',
    'contact.title': 'Informações de contato',
    'contact.subtitle': 'Entre em contato para orçamentos, disponibilidade ou eventos especiais.',
    'contact.phoneTitle': 'Telefone',
    'contact.phoneValue': '+1 (234) 567-890',
    'contact.emailTitle': 'E-mail',
    'contact.emailValue': 'hello@executive-driver.com',
    'contact.areaTitle': 'Área de atendimento',
    'contact.areaDescription':
      'Região metropolitana e aeroportos próximos.',
    'contact.hoursTitle': 'Horários',
    'contact.hoursDescription':
      'Atendimento com reserva 24/7. Corridas no mesmo dia sob consulta.',
    'footer.legalSuffix': 'Motorista Executivo. Todos os direitos reservados.',
    'footer.cta': 'Reservar via WhatsApp',
    'whatsapp.general':
      'Olá! Gostaria de agendar um transporte executivo. Pode me ajudar?'
  },
  es: {
    'page.title': 'Servicio de Chofer Ejecutivo',
    'language.label': 'Elegir idioma',
    'language.ariaLabel': 'Seleccionar idioma',
    'brand.title': 'Chofer Ejecutivo',
    'brand.subtitle': 'Traslados premium urbanos y aeroportuarios',
    'topbar.cta': 'Reservar viaje',
    'hero.title': 'Tu chofer personal a demanda',
    'hero.description':
      'Disfruta traslados puntuales, cómodos y discretos con un chofer ejecutivo dedicado. Perfecto para aeropuertos, viajes corporativos e invitados VIP.',
    'hero.ctaPrimary': 'Reservar por WhatsApp',
    'hero.ctaSecondary': 'Ver servicios',
    'hero.statsYearsLabel': 'Años de experiencia profesional',
    'hero.statsAvailabilityLabel': 'Disponibilidad para traslados programados',
    'hero.statsRatingLabel': 'Calificación sobresaliente de clientes ejecutivos',
    'hero.statsAriaLabel': 'Aspectos destacados del servicio',
    'hero.imageLabel': 'Imagen de referencia de vehículo de lujo',
    'hero.imageAlt': 'Exterior de un vehículo ejecutivo',
    'services.title': 'Servicios a medida para pasajeros exigentes',
    'services.subtitle':
      'Desde traslados aeroportuarios hasta roadshows corporativos, cada viaje se planifica para brindar comodidad, discreción y puntualidad.',
    'services.airportTitle': 'Recepción en aeropuerto',
    'services.airportDescription':
      'Monitoreo de vuelos, asistencia con equipaje y cartel de bienvenida para impresionar a tus invitados.',
    'services.airportAlt': 'Chofer ejecutivo recibiendo pasajeros en el aeropuerto',
    'services.corporateTitle': 'Traslados corporativos',
    'services.corporateDescription':
      'Traslados fluidos entre reuniones, asegurando puntualidad y un espacio tranquilo para prepararse.',
    'services.corporateAlt': 'Sedán ejecutivo esperando frente a un edificio de oficinas',
    'services.eventsTitle': 'Eventos VIP',
    'services.eventsDescription':
      'Llegadas y salidas elegantes para galas, alfombras rojas y celebraciones especiales.',
    'services.eventsAlt': 'Vehículo de lujo llegando a un evento nocturno',
    'promise.title': 'Por qué los ejecutivos eligen este servicio',
    'promise.subtitle':
      'Cada traslado se realiza con minuciosa atención al detalle y compromiso con tu comodidad y seguridad.',
    'promise.luxuryTitle': 'Flota de lujo',
    'promise.luxuryDescription':
      'Sedanes y SUVs de último modelo con interiores premium, agua, Wi-Fi y cargadores.',
    'promise.driverTitle': 'Chofer profesional',
    'promise.driverDescription':
      'Chofer con licencia, multilingüe y con amplio conocimiento de la ciudad.',
    'promise.coordinationTitle': 'Coordinación sin fricciones',
    'promise.coordinationDescription':
      'Actualizaciones en tiempo real, gestión de itinerarios y flexibilidad para cambios.',
    'promise.safetyTitle': 'Seguridad ante todo',
    'promise.safetyDescription':
      'Desinfección rigurosa, servicio discreto y cumplimiento de políticas corporativas.',
    'fleet.title': 'Flota lista para cualquier ocasión',
    'fleet.subtitle': 'Elige el vehículo acorde a tu compromiso.',
    'fleet.sedanTitle': 'Sedán Ejecutivo',
    'fleet.sedanDescription':
      'Ideal para ejecutivos que buscan un traslado tranquilo y productivo.',
    'fleet.sedanAlt': 'Sedán ejecutivo negro estacionado en la ciudad',
    'fleet.suvTitle': 'SUV de Lujo',
    'fleet.suvDescription':
      'Comodidad amplia para equipos o invitados con equipaje.',
    'fleet.suvAlt': 'SUV de lujo frente a la entrada de un hotel',
    'fleet.vanTitle': 'Van Ejecutiva',
    'fleet.vanDescription':
      'Perfecta para roadshows, viajes familiares o grupos ejecutivos.',
    'fleet.vanAlt': 'Van ejecutiva lista para traslado grupal',
    'testimonials.title': 'Elegido por líderes y viajeros VIP',
    'testimonials.subtitle':
      'Conoce lo que dicen los clientes sobre sus viajes con un chofer ejecutivo dedicado.',
    'testimonials.quoteOne':
      '“Siempre puntual y totalmente profesional. Nuestro directorio está tranquilo sabiendo que el transporte está asegurado.”',
    'testimonials.authorOne': '— Sofía M., Coordinadora de Viajes Corporativos',
    'testimonials.quoteTwo':
      '“La experiencia refleja nuestra marca: refinada, confiable y premium. Muy recomendado para huéspedes VIP.”',
    'testimonials.authorTwo': '— Daniel K., Gerente de Hotel de Lujo',
    'process.title': 'Cómo asegurar tu traslado',
    'process.subtitle': 'Reservar tu transfer ejecutivo es sencillo y rápido.',
    'process.stepOneTitle': 'Comparte tu itinerario',
    'process.stepOneDescription':
      'Envía tus datos de recogida, horarios y solicitudes especiales.',
    'process.stepTwoTitle': 'Recibe la confirmación',
    'process.stepTwoDescription':
      'Obtén una cotización personalizada y confirmación con el perfil del chofer.',
    'process.stepThreeTitle': 'Viaja con comodidad',
    'process.stepThreeDescription':
      'Tu chofer llega con anticipación, ayuda con el equipaje y garantiza un viaje sin contratiempos.',
    'cta.title': '¿Listo para elevar tu próximo traslado?',
    'cta.subtitle':
      'Envíame un mensaje por WhatsApp para asegurar un transporte de lujo acorde a tu agenda.',
    'cta.button': 'Chatear por WhatsApp',
    'contact.title': 'Información de contacto',
    'contact.subtitle': 'Escríbeme para cotizaciones, disponibilidad o eventos especiales.',
    'contact.phoneTitle': 'Teléfono',
    'contact.phoneValue': '+1 (234) 567-890',
    'contact.emailTitle': 'Correo',
    'contact.emailValue': 'hello@executive-driver.com',
    'contact.areaTitle': 'Zona de servicio',
    'contact.areaDescription':
      'Zona metropolitana y aeropuertos cercanos.',
    'contact.hoursTitle': 'Horario',
    'contact.hoursDescription':
      'Disponible con reserva 24/7. Traslados el mismo día según disponibilidad.',
    'footer.legalSuffix': 'Chofer Ejecutivo. Todos los derechos reservados.',
    'footer.cta': 'Reservar por WhatsApp',
    'whatsapp.general':
      '¡Hola! Me gustaría agendar un traslado ejecutivo. ¿Podrías ayudarme?'
  }
};

function getTranslation(lang, key) {
  if (translations[lang] && Object.prototype.hasOwnProperty.call(translations[lang], key)) {
    return translations[lang][key];
  }
  if (
    translations[FALLBACK_LANGUAGE] &&
    Object.prototype.hasOwnProperty.call(translations[FALLBACK_LANGUAGE], key)
  ) {
    return translations[FALLBACK_LANGUAGE][key];
  }
  return '';
}

function applyTextTranslations(lang) {
  document.title = getTranslation(lang, 'page.title') || document.title;

  const textNodes = document.querySelectorAll('[data-i18n]');
  textNodes.forEach((element) => {
    const key = element.dataset.i18n;
    const translation = getTranslation(lang, key);
    if (translation) {
      element.textContent = translation;
    }
  });

  const attrNodes = document.querySelectorAll('[data-i18n-attr]');
  attrNodes.forEach((element) => {
    const mappings = element.dataset.i18nAttr.split(',');
    mappings.forEach((mapping) => {
      const [attr, key] = mapping.split(':').map((value) => value.trim());
      if (!attr || !key) {
        return;
      }
      const translation = getTranslation(lang, key);
      if (translation) {
        element.setAttribute(attr, translation);
      }
    });
  });
}

function applyWhatsAppMessages(lang) {
  const buttons = document.querySelectorAll('[data-message-key]');
  buttons.forEach((element) => {
    const key = element.dataset.messageKey;
    const message = getTranslation(lang, key || 'whatsapp.general');
    element.dataset.message = message || getTranslation(FALLBACK_LANGUAGE, 'whatsapp.general');
  });
}

function buildWhatsAppUrl(phone, message) {
  const sanitizedPhone = phone.replace(/[^\d+]/g, '');
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${sanitizedPhone.replace('+', '')}?text=${encodedMessage}`;
}

function attachWhatsAppHandlers() {
  const buttons = document.querySelectorAll('.cta-whatsapp');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const phone = button.dataset.phone || PHONE_NUMBER;
      const message = button.dataset.message || getTranslation(FALLBACK_LANGUAGE, 'whatsapp.general');
      window.open(buildWhatsAppUrl(phone, message), '_blank', 'noopener');
    });
  });
}

function setCurrentYear() {
  const target = document.getElementById('copyright-year');
  if (target) {
    target.textContent = new Date().getFullYear();
  }
}

let currentLanguage = FALLBACK_LANGUAGE;

function setLanguage(lang) {
  if (!translations[lang]) {
    lang = FALLBACK_LANGUAGE;
  }
  currentLanguage = lang;
  document.documentElement.lang = lang;
  try {
    localStorage.setItem('preferredLanguage', lang);
  } catch (error) {
    // Ignore storage errors (e.g., privacy mode)
  }
  applyTextTranslations(lang);
  applyWhatsAppMessages(lang);
  const select = document.getElementById('language-switcher');
  if (select && select.value !== lang) {
    select.value = lang;
  }
}

function detectInitialLanguage() {
  try {
    const stored = localStorage.getItem('preferredLanguage');
    if (stored && translations[stored]) {
      return stored;
    }
  } catch (error) {
    // Ignore storage errors
  }
  const browserLang = navigator.language || navigator.userLanguage;
  if (!browserLang) {
    return FALLBACK_LANGUAGE;
  }
  const normalized = browserLang.toLowerCase();
  if (translations[normalized]) {
    return normalized;
  }
  if (normalized.startsWith('pt')) {
    return 'pt-br';
  }
  if (normalized.startsWith('es')) {
    return 'es';
  }
  return FALLBACK_LANGUAGE;
}

function setupLanguageSwitcher() {
  const select = document.getElementById('language-switcher');
  if (!select) {
    return;
  }
  select.addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setCurrentYear();
  const initialLanguage = detectInitialLanguage();
  setLanguage(initialLanguage);
  setupLanguageSwitcher();
  attachWhatsAppHandlers();
});
