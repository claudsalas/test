const PHONE_NUMBER = '+5511977377841';
const FALLBACK_LANGUAGE = 'pt-br';

const HTML_LANGUAGE_MAP = {
  'pt-br': 'pt-BR',
  en: 'en',
  es: 'es'
};

const translations = {
  en: {
    'page.title': 'Wagner Executive Transportation – Private Chauffeur Service',
    'language.label': 'Choose language',
    'language.ariaLabel': 'Choose language',
    'language.groupLabel': 'Select language',
    'brand.title': 'Wagner Executive Transportation',
    'brand.subtitle': 'Premium comfort, safety and punctuality',
    'topbar.cta': 'Chat on WhatsApp',
    'hero.badge': 'Based in São Paulo · Coastal transfers available',
    'hero.title': 'Tailored executive experience on every ride',
    'hero.description':
      'Premium transfers in a black Toyota Corolla Cross with a bilingual, discreet and punctual chauffeur. Perfect for airports, corporate agendas and coastal getaways.',
    'hero.ctaPrimary': 'Message Wagner now',
    'hero.ctaSecondary': 'Explore services',
    'hero.benefitAirport': 'Exclusive meet & greet at airports and luxury hotels',
    'hero.benefitCorporate': 'Bilingual chauffeur with impeccable presentation',
    'hero.benefitVip': 'Corolla Cross SUV comfort with onboard amenities',
    'hero.statsYearsLabel': 'Years serving premium clientele',
    'hero.statsAvailabilityLabel': 'Available for scheduled transfers 24/7',
    'hero.statsRatingLabel': 'Rated excellent by executives and families',
    'hero.statsAriaLabel': 'Service highlights',
    'hero.imageLabel': 'Black Toyota Corolla Cross on the road',
    'hero.imageAlt': 'Black Toyota Corolla Cross driving at sunset',
    'hero.ctaNote': 'Direct WhatsApp access to Wagner for instant replies',
    'services.title': 'Tailored services for discerning passengers',
    'services.subtitle':
      'From airports to coastal resorts, every journey receives meticulous attention to detail.',
    'services.airportTitle': 'Airport transfers',
    'services.airportDescription':
      'Flight tracking, meet & greet signage and luggage assistance at São Paulo’s major airports.',
    'services.airportAlt': 'Black Toyota Corolla Cross parked near an upscale destination',
    'services.corporateTitle': 'Executive itineraries',
    'services.corporateDescription':
      'Absolute discretion between meetings, with time to prepare agendas and support for international guests.',
    'services.corporateAlt': 'Black Toyota Corolla Cross overlooking Christ the Redeemer',
    'services.eventsTitle': 'Coastal & event travel',
    'services.eventsDescription':
      'Custom transfers to the North Shore, Costa Verde, resorts and social events with impeccable arrivals.',
    'services.eventsAlt': 'Black Toyota Corolla Cross at sunset',
    'promise.title': 'Why executives choose this service',
    'promise.subtitle':
      'Every ride is delivered with meticulous attention to detail and a commitment to your comfort and safety.',
    'promise.luxuryTitle': 'Luxury vehicle',
    'promise.luxuryDescription':
      'Black Toyota Corolla Cross with premium interior, bottled water, Wi-Fi and device charging.',
    'promise.driverTitle': 'Professional chauffeur',
    'promise.driverDescription':
      'Licensed, bilingual and sharply presented driver with deep knowledge of São Paulo and the coast.',
    'promise.coordinationTitle': 'Seamless coordination',
    'promise.coordinationDescription':
      'Real-time updates, itinerary management and flexibility for changing plans.',
    'promise.safetyTitle': 'Safety first',
    'promise.safetyDescription':
      'Rigorous sanitization, defensive driving and full passenger insurance.',
    'fleet.title': 'Executive vehicle highlights',
    'fleet.subtitle': 'Discover the black Toyota Corolla Cross ready for your next trip.',
    'fleet.suvTitle': 'Corolla Cross Black SUV',
    'fleet.suvDescription':
      'Spacious cabin, dual-zone climate control and a smooth drive to arrive refreshed.',
    'fleet.suvAlt': 'Black Toyota Corolla Cross overlooking Rio de Janeiro',
    'fleet.detailTitle': 'Commanding presence',
    'fleet.detailDescription':
      'Sophisticated styling, LED lighting and premium finishes that elevate your image.',
    'fleet.detailAlt': 'Front detail of a black Toyota Corolla Cross',
    'fleet.comfortTitle': 'Comfort for long journeys',
    'fleet.comfortDescription':
      'Leather seating, connectivity for work on the go and generous luggage space.',
    'fleet.comfortAlt': 'Black Toyota Corolla Cross on the road at sunset',
    'testimonials.title': 'Trusted by leaders and VIP travellers',
    'testimonials.subtitle':
      'Hear what clients say about their journeys with Wagner as their dedicated chauffeur.',
    'testimonials.quoteOne':
      '“Wagner is always punctual and impeccably professional. Our board rests easy knowing transportation is secured.”',
    'testimonials.authorOne': '— Sofia M., Corporate Travel Planner',
    'testimonials.quoteTwo':
      '“The experience mirrors our brand: refined, reliable and premium. Ideal for VIP guests.”',
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
      'Wagner arrives early, assists with luggage and ensures a smooth ride.',
    'cta.title': 'Ready to elevate your next trip?',
    'cta.subtitle':
      'Chat with Wagner on WhatsApp to secure luxury transportation on your schedule.',
    'cta.button': 'Chat with Wagner',
    'contact.title': 'Contact information',
    'contact.subtitle': 'Reach out for quotes, availability or special events.',
    'contact.phoneTitle': 'Phone / WhatsApp',
    'contact.phoneValue': '+55 11 97737-7841',
    'contact.emailTitle': 'Email',
    'contact.emailValue': 'wdstaxi@gmail.com',
    'contact.areaTitle': 'Service area',
    'contact.areaDescription':
      'Transfers to Ubatuba, Paraty, Angra dos Reis, Rio de Janeiro and the cruise port.',
    'contact.hoursTitle': 'Hours',
    'contact.hoursDescription': '24-hour service by appointment. Same-day requests subject to confirmation.',
    'contact.cardCaption':
      'Official Wagner Executive Transportation business card with QR code for instant booking.',
    'contact.cardAlt': 'Wagner Executive Transportation business card with QR code',
    'contact.cardAria': 'Business card for Wagner Executive Transportation',
    'footer.legalSuffix': 'Wagner Executive Transportation. All rights reserved.',
    'footer.cta': 'Reserve via WhatsApp',
    'whatsapp.general':
      'Hello Wagner! I would like to schedule an executive transfer. Could you share availability?',
    'floatingCta.label': 'Chat with Wagner',
    'floatingCta.ariaLabel': 'Open WhatsApp chat with Wagner'
  },
  'pt-br': {
    'page.title': 'Wagner Transporte Executivo - Motorista Particular',
    'language.label': 'Escolher idioma',
    'language.ariaLabel': 'Selecionar idioma',
    'language.groupLabel': 'Selecionar idioma',
    'brand.title': 'Wagner Transporte Executivo',
    'brand.subtitle': 'Conforto, segurança e pontualidade premium',
    'topbar.cta': 'Chamar no WhatsApp',
    'hero.badge': 'Base em São Paulo · Transfers para o litoral',
    'hero.title': 'Experiência executiva sob medida em cada viagem',
    'hero.description':
      'Traslados premium em Toyota Corolla Cross preto com motorista bilíngue, discreto e pontual. Perfeito para aeroportos, litoral paulista e agendas corporativas.',
    'hero.ctaPrimary': 'Falar com Wagner agora',
    'hero.ctaSecondary': 'Conhecer serviços',
    'hero.benefitAirport': 'Recepção exclusiva em aeroportos e hotéis de luxo',
    'hero.benefitCorporate': 'Motorista bilíngue, discreto e com apresentação impecável',
    'hero.benefitVip': 'SUV Corolla Cross com conforto superior e comodidades a bordo',
    'hero.statsYearsLabel': 'Anos conduzindo clientes premium',
    'hero.statsAvailabilityLabel': 'Disponibilidade para transfers agendados 24/7',
    'hero.statsRatingLabel': 'Avaliado com excelência por executivos e famílias',
    'hero.statsAriaLabel': 'Destaques do serviço',
    'hero.imageLabel': 'Toyota Corolla Cross preto em destaque',
    'hero.imageAlt': 'Toyota Corolla Cross preto em estrada ao entardecer',
    'hero.ctaNote': 'Atendimento direto com Wagner via WhatsApp',
    'services.title': 'Serviços sob medida para passageiros exigentes',
    'services.subtitle':
      'De aeroportos a resorts no litoral, cada trajeto recebe atenção total aos detalhes.',
    'services.airportTitle': 'Transfers aeroportuários',
    'services.airportDescription':
      'Monitoramento de voos, recepção com placa e assistência com bagagens nos principais aeroportos de São Paulo.',
    'services.airportAlt': 'Toyota Corolla Cross preto estacionado próximo a destino premium',
    'services.corporateTitle': 'Chofer para compromissos executivos',
    'services.corporateDescription':
      'Discrição absoluta entre reuniões, com tempo para revisar pautas e apoio para convidados internacionais.',
    'services.corporateAlt': 'Toyota Corolla Cross preto com vista para o Cristo Redentor',
    'services.eventsTitle': 'Viagens para litoral e eventos',
    'services.eventsDescription':
      'Transfers sob medida para litoral norte, costa verde, resorts e eventos sociais com chegada impecável.',
    'services.eventsAlt': 'Toyota Corolla Cross preto ao entardecer',
    'promise.title': 'Por que executivos escolhem este serviço',
    'promise.subtitle':
      'Cada viagem é entregue com atenção aos detalhes e compromisso com seu conforto e segurança.',
    'promise.luxuryTitle': 'Frota de luxo',
    'promise.luxuryDescription':
      'SUV Corolla Cross preto com interiores premium, água, Wi-Fi e carregadores.',
    'promise.driverTitle': 'Motorista profissional',
    'promise.driverDescription':
      'Motorista licenciado, bilíngue e bem-apresentado, com profundo conhecimento de São Paulo e litoral.',
    'promise.coordinationTitle': 'Coordenação impecável',
    'promise.coordinationDescription':
      'Atualizações em tempo real, gestão de itinerários e flexibilidade para mudanças de agenda.',
    'promise.safetyTitle': 'Segurança em primeiro lugar',
    'promise.safetyDescription':
      'Higienização rigorosa, condução defensiva e seguro completo para passageiros.',
    'fleet.title': 'Detalhes do veículo executivo',
    'fleet.subtitle': 'Conheça o SUV Corolla Cross preto disponível para a sua próxima viagem.',
    'fleet.suvTitle': 'SUV Corolla Cross Black',
    'fleet.suvDescription':
      'Amplo espaço, ar-condicionado dual zone e condução suave para chegar descansado ao destino.',
    'fleet.suvAlt': 'Toyota Corolla Cross preto com vista panorâmica do Rio de Janeiro',
    'fleet.detailTitle': 'Presença marcante',
    'fleet.detailDescription':
      'Visual sofisticado, iluminação em LED e acabamento premium que reforçam sua imagem.',
    'fleet.detailAlt': 'Detalhe frontal do Toyota Corolla Cross preto',
    'fleet.comfortTitle': 'Conforto em viagens longas',
    'fleet.comfortDescription':
      'Bancos em couro, conectividade para trabalhar no caminho e porta-malas generoso para bagagens.',
    'fleet.comfortAlt': 'Toyota Corolla Cross preto em estrada ao entardecer',
    'testimonials.title': 'Confiado por líderes e viajantes VIP',
    'testimonials.subtitle':
      'Veja o que os clientes dizem sobre suas viagens com Wagner como motorista dedicado.',
    'testimonials.quoteOne':
      '“Wagner é sempre pontual e impecável. Nosso conselho fica tranquilo sabendo que o transporte está garantido.”',
    'testimonials.authorOne': '— Sofia M., Coordenadora de Viagens Corporativas',
    'testimonials.quoteTwo':
      '“A experiência reflete nossa marca: refinada, confiável e premium. Ideal para hóspedes VIP.”',
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
      'Wagner chega com antecedência, ajuda com bagagens e garante um trajeto tranquilo.',
    'cta.title': 'Vamos planejar sua próxima viagem premium?',
    'cta.subtitle':
      'Converse diretamente com Wagner e receba confirmação rápida pelo WhatsApp.',
    'cta.button': 'Enviar mensagem para Wagner',
    'contact.title': 'Informações de contato',
    'contact.subtitle': 'Fale para orçamentos, disponibilidade ou eventos especiais.',
    'contact.phoneTitle': 'Telefone / WhatsApp',
    'contact.phoneValue': '+55 (11) 97737-7841',
    'contact.emailTitle': 'E-mail',
    'contact.emailValue': 'wdstaxi@gmail.com',
    'contact.areaTitle': 'Área de atendimento',
    'contact.areaDescription':
      'Transfers para Ubatuba, Paraty, Angra dos Reis, Rio de Janeiro e porto marítimo.',
    'contact.hoursTitle': 'Horários',
    'contact.hoursDescription':
      'Atendimento com agendamento 24 horas. Sujeito a confirmação para solicitações no mesmo dia.',
    'contact.cardCaption':
      'Cartão oficial Wagner Transporte Executivo com QR Code para agendamento imediato.',
    'contact.cardAlt': 'Cartão de visita Wagner Transporte Executivo com QR code',
    'contact.cardAria': 'Cartão de visita Wagner Transporte Executivo com informações de contato',
    'footer.legalSuffix': 'Wagner Transporte Executivo. Todos os direitos reservados.',
    'footer.cta': 'Reservar via WhatsApp',
    'whatsapp.general':
      'Olá Wagner! Gostaria de agendar um transporte executivo. Podemos falar sobre disponibilidade?',
    'floatingCta.label': 'Falar com Wagner',
    'floatingCta.ariaLabel': 'Abrir conversa com Wagner no WhatsApp'
  },
  es: {
    'page.title': 'Wagner Transporte Ejecutivo – Chofer Privado',
    'language.label': 'Elegir idioma',
    'language.ariaLabel': 'Seleccionar idioma',
    'language.groupLabel': 'Seleccionar idioma',
    'brand.title': 'Wagner Transporte Ejecutivo',
    'brand.subtitle': 'Confort, seguridad y puntualidad premium',
    'topbar.cta': 'Hablar por WhatsApp',
    'hero.badge': 'Con base en São Paulo · Traslados a la costa',
    'hero.title': 'Experiencia ejecutiva a medida en cada viaje',
    'hero.description':
      'Traslados premium en Toyota Corolla Cross negro con chofer bilingüe, discreto y puntual. Ideal para aeropuertos, agendas corporativas y escapadas al litoral.',
    'hero.ctaPrimary': 'Escribir a Wagner ahora',
    'hero.ctaSecondary': 'Ver servicios',
    'hero.benefitAirport': 'Recepción exclusiva en aeropuertos y hoteles de lujo',
    'hero.benefitCorporate': 'Chofer bilingüe, discreto y con presencia impecable',
    'hero.benefitVip': 'SUV Corolla Cross con comodidades a bordo',
    'hero.statsYearsLabel': 'Años atendiendo clientes premium',
    'hero.statsAvailabilityLabel': 'Disponibilidad para traslados programados 24/7',
    'hero.statsRatingLabel': 'Valorado con excelencia por ejecutivos y familias',
    'hero.statsAriaLabel': 'Aspectos destacados del servicio',
    'hero.imageLabel': 'Toyota Corolla Cross negro en destaque',
    'hero.imageAlt': 'Toyota Corolla Cross negro en carretera al atardecer',
    'hero.ctaNote': 'Atención directa con Wagner por WhatsApp',
    'services.title': 'Servicios a medida para pasajeros exigentes',
    'services.subtitle':
      'Desde aeropuertos hasta resorts costeros, cada traslado recibe atención total a los detalles.',
    'services.airportTitle': 'Transfers aeroportuarios',
    'services.airportDescription':
      'Monitoreo de vuelos, cartel de bienvenida y asistencia con equipaje en los principales aeropuertos de São Paulo.',
    'services.airportAlt': 'Toyota Corolla Cross negro estacionado junto a un destino premium',
    'services.corporateTitle': 'Itinerarios corporativos',
    'services.corporateDescription':
      'Discreción total entre reuniones, tiempo para preparar agendas y apoyo a invitados internacionales.',
    'services.corporateAlt': 'Toyota Corolla Cross negro con vista al Cristo Redentor',
    'services.eventsTitle': 'Viajes a eventos y litoral',
    'services.eventsDescription':
      'Traslados personalizados al Litoral Norte, Costa Verde, resorts y eventos sociales con llegada impecable.',
    'services.eventsAlt': 'Toyota Corolla Cross negro al atardecer',
    'promise.title': 'Por qué los ejecutivos eligen este servicio',
    'promise.subtitle':
      'Cada viaje se entrega con atención minuciosa y compromiso con tu comodidad y seguridad.',
    'promise.luxuryTitle': 'Vehículo de lujo',
    'promise.luxuryDescription':
      'SUV Toyota Corolla Cross negro con interior premium, agua, Wi-Fi y cargadores.',
    'promise.driverTitle': 'Chofer profesional',
    'promise.driverDescription':
      'Chofer con licencia, bilingüe y de presencia impecable, conocedor de São Paulo y el litoral.',
    'promise.coordinationTitle': 'Coordinación impecable',
    'promise.coordinationDescription':
      'Actualizaciones en tiempo real, gestión de itinerarios y flexibilidad ante cambios.',
    'promise.safetyTitle': 'Seguridad ante todo',
    'promise.safetyDescription':
      'Desinfección rigurosa, conducción defensiva y seguro completo para pasajeros.',
    'fleet.title': 'Detalles del vehículo ejecutivo',
    'fleet.subtitle': 'Conoce el Toyota Corolla Cross negro listo para tu próximo viaje.',
    'fleet.suvTitle': 'SUV Corolla Cross Black',
    'fleet.suvDescription':
      'Cabina amplia, climatización dual y conducción suave para llegar renovado.',
    'fleet.suvAlt': 'Toyota Corolla Cross negro con vista panorámica de Río de Janeiro',
    'fleet.detailTitle': 'Presencia imponente',
    'fleet.detailDescription':
      'Estilo sofisticado, iluminación LED y acabados premium que elevan tu imagen.',
    'fleet.detailAlt': 'Detalle frontal del Toyota Corolla Cross negro',
    'fleet.comfortTitle': 'Comodidad en trayectos largos',
    'fleet.comfortDescription':
      'Asientos de cuero, conectividad para trabajar en ruta y amplio espacio para equipaje.',
    'fleet.comfortAlt': 'Toyota Corolla Cross negro en carretera al atardecer',
    'testimonials.title': 'Elegido por líderes y viajeros VIP',
    'testimonials.subtitle':
      'Descubre lo que opinan los clientes cuando Wagner es su chofer dedicado.',
    'testimonials.quoteOne':
      '“Wagner siempre es puntual y totalmente profesional. Nuestro directorio está tranquilo sabiendo que el transporte está asegurado.”',
    'testimonials.authorOne': '— Sofía M., Coordinadora de Viajes Corporativos',
    'testimonials.quoteTwo':
      '“La experiencia refleja nuestra marca: refinada, confiable y premium. Perfecto para huéspedes VIP.”',
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
      'Wagner llega con anticipación, ayuda con el equipaje y garantiza un viaje sin contratiempos.',
    'cta.title': '¿Listo para tu próximo traslado premium?',
    'cta.subtitle':
      'Habla con Wagner por WhatsApp y recibe confirmación inmediata.',
    'cta.button': 'Hablar con Wagner',
    'contact.title': 'Información de contacto',
    'contact.subtitle': 'Contáctame para cotizaciones, disponibilidad o eventos especiales.',
    'contact.phoneTitle': 'Teléfono / WhatsApp',
    'contact.phoneValue': '+55 11 97737-7841',
    'contact.emailTitle': 'Correo',
    'contact.emailValue': 'wdstaxi@gmail.com',
    'contact.areaTitle': 'Zona de servicio',
    'contact.areaDescription':
      'Traslados a Ubatuba, Paraty, Angra dos Reis, Río de Janeiro y el puerto marítimo.',
    'contact.hoursTitle': 'Horario',
    'contact.hoursDescription':
      'Atención 24 horas con reserva. Solicitudes en el mismo día sujetas a confirmación.',
    'contact.cardCaption':
      'Tarjeta oficial de Wagner Transporte Executivo con código QR para reservar al instante.',
    'contact.cardAlt': 'Tarjeta de presentación de Wagner Transporte Executivo con código QR',
    'contact.cardAria': 'Tarjeta de presentación de Wagner Transporte Executivo',
    'footer.legalSuffix': 'Wagner Transporte Ejecutivo. Todos los derechos reservados.',
    'footer.cta': 'Reservar por WhatsApp',
    'whatsapp.general':
      'Hola Wagner. Me gustaría agendar un traslado ejecutivo. ¿Dispones de horarios?',
    'floatingCta.label': 'Hablar con Wagner',
    'floatingCta.ariaLabel': 'Abrir chat de WhatsApp con Wagner'
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

function syncLanguageToggles(lang) {
  const buttons = document.querySelectorAll('.language-toggle__button');
  buttons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function setLanguage(lang) {
  if (!translations[lang]) {
    lang = FALLBACK_LANGUAGE;
  }
  currentLanguage = lang;
  document.documentElement.lang = HTML_LANGUAGE_MAP[lang] || lang;
  try {
    localStorage.setItem('preferredLanguage', lang);
  } catch (error) {
    // Ignore storage errors (e.g., privacy mode)
  }
  applyTextTranslations(lang);
  applyWhatsAppMessages(lang);
  syncLanguageToggles(lang);
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

function setupLanguageToggles() {
  const buttons = document.querySelectorAll('.language-toggle__button');
  if (!buttons.length) {
    return;
  }
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setCurrentYear();
  const initialLanguage = detectInitialLanguage();
  setLanguage(initialLanguage);
  setupLanguageToggles();
  attachWhatsAppHandlers();
});