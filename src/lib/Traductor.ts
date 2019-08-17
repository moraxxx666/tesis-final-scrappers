async function traducir (textoObtenido:string) {
    let texto;
    switch (textoObtenido) {
        case "Event":
            texto = "Evento";
            break;
        case "NaturalDisaster":
            texto = "Desastre Natural";
            break;
        case "NaturalPhenomena":
            texto = "Fenomeno Natural";
            break;
        case "Occasion":
            texto = "Ocacion";
            break;
        case "Conference":
            texto = "Conferencia";
            break;
        case "Games":
            texto = "Juegos";
            break;
        case "War":
            texto = "Guerra";
            break;
        case "Id":
            texto = "Identificador Unico";
            break;
        case "Cashtag":
            texto = "Cashtag";
            break;
        case "Email":
            texto = "Correo Electronico";
            break;
        case "Hashtag":
            texto = "Hashtag";
            break;
        case "NickName":
            texto = "Apodo";
            break;
        case "PhoneNumber":
            texto = "Numero de Telefono";
            break;
        case "PostalCode":
            texto = "Codigo Postal";
            break;
        case "LivingThing":
            texto = "Ser Vivo";
            break;
        case "Invertebrate":
            texto = "Animal Invertebrado";
            break;
        case "Insect":
            texto = "Insecto";
            break;
        case "Vertebrate":
            texto = "Animal Vertebrado";
            break;
        case "Amphibian":
            texto = "Animal Anfibio";
            break;
        case "Bird":
            texto = "Pajaro";
            break;
        case "Fish":
            texto = "Pez";
            break;
        case "Mammal":
            texto = "Mamifero";
            break;
        case "Reptile":
            texto = "Reptil";
            break;
        case "BodyPart":
            texto = "Parte del Cuerpo";
            break;
        case "Flora":
            texto = "Planta";
            break;
        case "FloraPart":
            texto = "Parte de una Planta";
            break;
        case "Location":
            texto = "Lugar";
            break;
        case "Address":
            texto = "Direccion";
            break;
        case "AstralBody":
            texto = "Cuerpo Astral";
            break;
        case "Planet":
            texto = "Planeta";
            break;
        case "Star":
            texto = "Estrella";
            break;
        case "Facility":
            texto = "Instalaciones";
            break;
        case "AmusementPark":
            texto = "Parque de Atracciones";
            break;
        case "ArcheologicalPlace":
            texto = "Lugar Arqueologico";
            break;
        case "FacilityPart":
            texto = "Otras Instalaciones";
            break;
        case "Line":
            texto = "Via de transito";
            break;
        case "RailRoad":
            texto = "Ferrocarril";
            break;
        case "Road":
            texto = "Camino";
            break;
        case "Tunnel":
            texto = "Tunel";
            break;
        case "Market":
            texto = "Mercado";
            break;
        case "Monument":
            texto = "Monumento";
            break;
        case "Park":
            texto = "Parque";
            break;
        case "Prison":
            texto = "Carcel";
            break;
        case "SportsFacility":
            texto = "Instalaciones Deportivas";
            break;
        case "StationTop":
            texto = "Terminal de Transito";
            break;
        case "Airpot":
            texto = "Aeropuerto";
            break;
        case "Port":
            texto = "Puerto";
            break;
        case "Station":
            texto = "Estacion de Bus o Tren";
            break;
        case "Theatre":
            texto = "Teatro";
            break;
        case "GeographicalEntity":
            texto = "Entidad Geografica";
            break;
        case "LandForm":
            texto = "Forma de Tierra";
            break;
        case "Basin":
            texto = "Cuenca de Tierra";
            break;
        case "Beach":
            texto = "Playa";
            break;
        case "Cape":
            texto = "Capa de Tierra";
            break;
        case "Desert":
            texto = "Desierto";
            break;
        case "Forest":
            texto = "Bosque";
            break;
        case "Isle":
            texto = "Isla";
            break;
        case "Mountain":
            texto = "Montaña";
            break;
        case "Valley":
            texto = "Valle";
            break;
        case "Volcano":
            texto = "Volcan";
            break;
        case "NaturalReserve":
            texto = "Reserva Natural";
            break;
        case "WaterForm":
            texto = "Forma de Agua";
            break;
        case "Channel":
            texto = "Canal de Agua";
            break;
        case "Gulf":
            texto = "Golfo de Agua";
            break;
        case "Lake":
            texto = "Lago";
            break;
        case "Ocean":
            texto = "Oceano";
            break;
        case "River":
            texto = "Rio";
            break;
        case "Sea":
            texto = "Mar";
            break;
        case "GeoPoliticalEntity":
            texto = "Entidad Geopolitica";
            break;
        case "Adm1":
            texto = "Division Administrativa de Primer Nivel";
            break;
        case "Adm2":
            texto = "Division Administrativa de Segundo Nivel";
            break;
        case "Adm3":
            texto = "Division Administrativa de Tercer Nivel";
            break;
        case "City":
            texto = "Ciudad";
            break;
        case "Continent":
            texto = "Continente";
            break;
        case "Country":
            texto = "Pais";
            break;
        case "District":
            texto = "Distrito";
            break;
        case "Numex":
            texto = "Numero";
            break;
        case "Age":
            texto = "Edad";
            break;
        case "Calorie":
            texto = "Calorias";
            break;
        case "Intensity":
            texto = "Intensidad";
            break;
        case "Money":
            texto = "Dinero";
            break;
        case "PhysicalExtent":
            texto = "Extension Fisica";
            break;
        case "Space":
            texto = "Medida de Espacio";
            break;
        case "Speed":
            texto = "Medida de Velocidad";
            break;
        case "Temperature":
            texto = "Medida de Temperatura";
            break;
        case "Volume":
            texto = "Medida de Volumen";
            break;
        case "Weight":
            texto = "Medida de Peso";
            break;
        case "Organization":
            texto = "Organizacion";
            break;
        case "ArtisticOrganization":
            texto = "Oraganizacion Artistica";
            break;
        case "Museum":
            texto = "Museo";
            break;
        case "MusicGroup":
            texto = "Grupo Musical";
            break;
        case "Company":
            texto = "Compañia";
            break;
        case "ConsumerGoodsCompany":
            texto = "Compañia Manufacturadora";
            break;
        case "Discretionary":
            texto = "Organizacion de bienes de consumo";
            break;
        case "AutomobileCompany":
            texto = "Compañia Automobilistica";
            break;
        case "ConsumerDurablesCompany":
            texto = "Manufacturadora de Productos";
            break;
        case "ConsumerServicesCompany":
            texto = "Compañia Proveedora de Servicios";
            break;
        case "Casinos":
            texto = "Casino";
            break;
        case "Entertainment":
            texto = "Compañia de Entretenimiento";
            break;
        case "Hotels":
            texto = "Hoteles";
            break;
        case "MediaCompany":
            texto = "Compañia de Medios";
            break;
        case "Restaurants":
            texto = "Restaurante";
            break;
        case "RetailingCompany":
            texto = "Empresa Minorista";
            break;
        case "Staples":
            texto = "Compañia de Necesidades Basicas";
            break;
        case "FoodCompany":
            texto = "Compañia de Comida";
            break;
        case "FoodDrugRetailing":
            texto = "Compañia de Medicamentos";
            break;
        case "HouseholdProductsCompany":
            texto = "Compañia de Objetos del Hogar";
            break;
        case "PersonalProductsCompany":
            texto = "Compañia de Productos Personales";
            break;
        case "PersonalServicesCompany":
            texto = "Compañia de Servicios Personales";
            break;
        case "EnergyCompany":
            texto = "Compañia Energetica";
            break;
        case "FinancialCompany":
            texto = "Compañia Financiera";
            break;
        case "BankingCompany":
            texto = "Compañia Bancaria";
            break;
        case "Banking Services":
            texto = "Servicios Bancarios";
            break;
        case "Bank":
            texto = "Banco";
            break;
        case "DiversifiedFinancialServices":
            texto = "Servicios Financieros Diversificados";
            break;
        case "InvestmentServices":
            texto = "Servicios de Inversion";
            break;
        case "Insurance":
            texto = "Seguro Bancario";
            break;
        case "InvestmentTrust":
            texto = "Confianza de Inversion";
            break;
        case "RealEstate":
            texto = "Bienes Raices";
            break;
        case "HealthcareCompany":
            texto = "Compañia de Salud";
            break;
        case "HealthcareEquipmentCompany":
            texto = "Compañia de Equipamiento Medico";
            break;
        case "HealthcareServicesCompany":
            texto = "Compañia de servicios Medicos";
            break;
        case "Hospitals":
            texto = "Hospital";
            break;
        case "PharmaCompany":
            texto = "Compañia Farmaceutica";
            break;
        case "BiotechCompany":
            texto = "Compañia Biotecnologica";
            break;
        case "Pharmaceutical":
            texto = "Farmacia";
            break;
        case "IndustrialCompany":
            texto = "Compañia Industrial";
            break;
        case "IndustrialGoods":
            texto = "Bienes Industriales";
            break;
        case "AerospaceDefense":
            texto = "Defensa Aero Espacial";
            break;
        case "EquipmentCompany":
            texto = "Compañia de Equipamento";
            break;
        case "IndustrialServicesCompany":
            texto = "Compañia de Servicios Industriales";
            break;
        case "CommercialServices":
            texto = "Servicios Comerciales";
            break;
        case "ConstructionServices":
            texto = "Servicios de Construccion";
            break;
        case "DistributionServices":
            texto = "Servicios de Distribucion";
            break;
        case "TransportationCompany":
            texto = "Compañia de Transporte";
            break;
        case "MaterialsCompany":
            texto = "Compañia de Materiales";
            break;
        case "AppliedResources":
            texto = "Recursos Aplicados";
            break;
        case "ChemicalCompany":
            texto = "Compañia Quimica";
            break;
        case "MineralResources":
            texto = "Recursos Minerales";
            break;
        case "TechnologyCompany":
            texto = "Compañia Tecnologica";
            break;
        case "SoftwareCompany":
            texto = "Compañia de Software";
            break;
        case "TechnologyEquipmentCompany":
            texto = "Compañia de Equipamiento Tecnologico";
            break;
        case "Communication":
            texto = "Compañia de Comunicacion";
            break;
        case "Hardware":
            texto = "Compañia de Hardware";
            break;
        case "Semiconductors":
            texto = "Semiconductores";
            break;
        case "TelcoServicesCompany":
            texto = "Compañia de Telecomunicaciones";
            break;
        case "UtilitiesCompany":
            texto = "Empresa de Servicios Publicos";
            break;
        case "ElectricUtilities":
            texto = "Utilidades Electricas";
            break;
        case "MultilineUtilities":
            texto = "Utilidades Multilinea";
            break;
        case "NaturalGasUtilities":
            texto = "Utilidades de Gas Natural";
            break;
        case "WaterUtilities":
            texto = "Utilidades de Agua";
            break;
        case "EducationalOrganization":
            texto = "Organizacion Educacional";
            break;
        case "School":
            texto = "Colegio - Escuela";
            break;
        case "University":
            texto = "Universidad";
            break;
        case "Government":
            texto = "Gobierno";
            break;
        case "Institute":
            texto = "Instituto";
            break;
        case "CulturalInstitute":
            texto = "Instituto Cultural";
            break;
        case "EnterpriseAssociation":
            texto = "Asociacion Empresarial";
            break;
        case "LaborUnion":
            texto = "Sindicato";
            break;
        case "Ngo":
            texto = "Organizacion Sin Fines de Lucro";
            break;
        case "ProfessionalAssociation":
            texto = "Asociacion Profesional";
            break;
        case "InternationalOrganization":
            texto = "Organizacion Internacional";
            break;
        case "Military":
            texto = "Organizacion Militar";
            break;
        case "Army":
            texto = "Armada";
            break;
        case "Police":
            texto = "Policia";
            break;
        case "PoliticalParty":
            texto = "Partido Politico";
            break;
        case "PublishInstitution":
            texto = "Instituto Publico";
            break;
        case "ReligiousOrganization":
            texto = "Organizacion Religiosa";
            break;
        case "SportsOrganization":
            texto = "Organizacion Deportiva";
            break;
        case "SportsLeague":
            texto = "Club Deportivo";
            break;
        case "SportsTeam":
            texto = "Equipo Deportivo";
            break;
        case "StockMarket":
            texto = "Bolsa de Valores";
            break;
        case "TerroristOrganization":
            texto = "Organizacion Terrorista";
            break;
        case "OtherEntity":
            texto = "Otras Entidades";
            break;
        case "Award":
            texto = "Premio";
            break;
        case "Class":
            texto = "Clase";
            break;
        case "Color":
            texto = "Color";
            break;
        case "Disease":
            texto = "Enfermedad";
            break;
        case "Doctrine":
            texto = "Doctrina";
            break;
        case "Academic":
            texto = "Academico";
            break;
        case "CultureEntity":
            texto = "Entidad Cultural";
            break;
        case "GroupTendency":
            texto = "Tendencia Grupal";
            break;
        case "Movement":
            texto = "Movimiento Como Doctrina";
            break;
        case "PersonTendency":
            texto = "Persona en Tendencia";
            break;
        case "ReligionEntity":
            texto = "Entidad Religiosa";
            break;
        case "Sports":
            texto = "Deportes";
            break;
        case "Style":
            texto = "Estilo";
            break;
        case "Theory":
            texto = "Teoria";
            break;
        case "EthnicGroup":
            texto = "Grupo Etnico";
            break;
        case "Gentilic":
            texto = "Gentilicio";
            break;
        case "God":
            texto = "Dios";
            break;
        case "IndexName":
            texto = "Nombre del Indice";
            break;
        case "EconomicIndexName":
            texto = "Indice Economico";
            break;
        case "StockIndexName":
            texto = "Indice de Valores";
            break;
        case "Language":
            texto = "Idioma";
            break;
        case "MethodSystem":
            texto = "Sistema de Metodo";
            break;
        case "Nationality":
            texto = "Nacionalidad";
            break;
        case "Offence":
            texto = "Ofensa - Insulto";
            break;
        case "Rule":
            texto = "Ley";
            break;
        case "Contract":
            texto = "Contrato";
            break;
        case "LawRule":
            texto = "Regla de la Ley";
            break;
        case "Treaty":
            texto = "Tratado";
            break;
        case "Title":
            texto = "titulo";
            break;
        case "Vocation":
            texto = "Vocacion";
            break;
        case "Person":
            texto = "Persona";
            break;
        case "FirstName":
            texto = "Nombre";
            break;
        case "FullName":
            texto = "Nombre Competo";
            break;
        case "LastName":
            texto = "Apellido";
            break;
        case "Process":
            texto = "Proceso";
            break;
        case "CausingHappiness":
            texto = "Proceso que Causa Felicidad";
            break;
        case "ContentBearingProcess":
            texto = "Proceso con Proposicion";
            break;
        case "CommunicationProcess":
            texto = "Proceso de Comunicacion";
            break;
        case "Disseminating":
            texto = "Diseminado";
            break;
        case "Expressing":
            texto = "Proceso Exprestivo";
            break;
        case "Gesture":
            texto = "Gestos";
            break;
        case "Indicating":
            texto = "Indicando";
            break;
        case "LinguisticCommunication":
            texto = "Comunicacion Linguistica";
            break;
        case "Telephoning":
            texto = "Proceso de Llamada Telefonica";
            break;
        case "DualObjectProcess":
            texto = "Proceso de dos entidades";
            break;
        case "Attaching":
            texto = "Adjuntando";
            break;
        case "Combining":
            texto = "Combinando";
            break;
        case "Comparing":
            texto = "Comparando";
            break;
        case "Detaching":
            texto = "Desprendiendo";
            break;
        case "Separating":
            texto = "Separando";
            break;
        case "Substituting":
            texto = "Sustituyendo";
            break;
        case "Transaction":
            texto = "Transaccion";
            break;
        case "IntentionalProcess":
            texto = "Proceso Intencional";
            break;
        case "Commeting":
            texto = "Comentando";
            break;
        case "ContentDevelopment":
            texto = "Desarrollo de Contenido";
            break;
        case "ArtPainting":
            texto = "Pintura de Arte";
            break;
        case "ComposingMusic":
            texto = "Componiendo Musica";
            break;
        case "ComputerProgramming":
            texto = "Programacion Computacional";
            break;
        case "Drawing":
            texto = "Dibujar";
            break;
        case "FilmMaking":
            texto = "Grabar Peliculas";
            break;
        case "Photographing":
            texto = "Fotografia";
            break;
        case "Publication":
            texto = "Publicacion";
            break;
        case "Reading":
            texto = "Lectura";
            break;
        case "Tracing":
            texto = "Rastreo";
            break;
        case "Translating":
            texto = "Traducir";
            break;
        case "Writing":
            texto = "Escribir";
            break;
        case "CriminalAction":
            texto = "Acto Criminal";
            break;
        case "IntentionalPsychologicalProcess":
            texto = "Proceso Psicologico Intencional";
            break;
        case "Calculating":
            texto = "Calcular";
            break;
        case "Classifying":
            texto = "Clasificar";
            break;
        case "Designing":
            texto = "Designar";
            break;
        case "Discovering":
            texto = "Descubrir";
            break;
        case "Interpreting":
            texto = "Interpretar";
            break;
        case "Investigating":
            texto = "Investigar";
            break;
        case "Learning":
            texto = "Aprender";
            break;
        case "Planning":
            texto = "Planear";
            break;
        case "Predicting":
            texto = "Predecir";
            break;
        case "Reasoning":
            texto = "Razonar";
            break;
        case "Selecting":
            texto = "Seleccionar";
            break;
        case "Keeping":
            texto = "Mantener";
            break;
        case "Listening":
            texto = "Escuchar";
            break;
        case "Looking":
            texto = "Mirar";
            break;
        case "Maintaining":
            texto = "Mantener";
            break;
        case "Making":
            texto = "Hacer";
            break;
        case "OrganizationalProcess":
            texto = "Proceso Organizacional";
            break;
        case "BeginnigOperations":
            texto = "Empezar Operaciones";
            break;
        case "CeasingOperations":
            texto = "Terminar Operaciones";
            break;
        case "Election":
            texto = "Encuesta";
            break;
        case "Founding":
            texto = "Fundacion";
            break;
        case "JoiningAnOrganization":
            texto = "Unirse a Una Organizacion";
            break;
        case "LeavingAnOrganization":
            texto = "Abandonar Una Organizacion";
            break;
        case "OrganizationalMergig":
            texto = "Union de Organizaciones";
            break;
        case "Pursuing":
            texto = "Perseguir";
            break;
        case "RecreationOrExercise":
            texto = "Recreacion - Ejercicio";
            break;
        case "Gaming":
            texto = "Jugar";
            break;
        case "Smoking":
            texto = "Fumar";
            break;
        case "SocialParty":
            texto = "Fiesta";
            break;
        case "Vacationing":
            texto = "Vacaciones";
            break;
        case "Repairing":
            texto = "Reparar";
            break;
        case "SocialInteraction":
            texto = "Interaccion Social";
            break;
        case "Ceremony":
            texto = "Ceremonia";
            break;
        case "ChangeOfPossession":
            texto = "Cambiar de Posesion";
            break;
        case "Contest":
            texto = "Consurso";
            break;
        case "Cooperation":
            texto = "Coperacion";
            break;
        case "Meeting":
            texto = "Encuentro";
            break;
        case "InternalChange":
            texto = "Cambio Interno";
            break;
        case "BiologicalProcess":
            texto = "Proceso Biologico";
            break;
        case "ChemicalProcess":
            texto = "Proceso Quimico";
            break;
        case "Creation":
            texto = "Creacion";
            break;
        case "Damaging":
            texto = "Dañar";
            break;
        case "GeologicalProcess":
            texto = "Proceso Geologico";
            break;
        case "QuantityChange":
            texto = "Cambio de Cantidad";
            break;
        case "Decreasing":
            texto = "Decrementar";
            break;
        case "Focusing":
            texto = "Cambio en la Distancia Relativa";
            break;
        case "Increasing":
            texto = "Incrementar";
            break;
        case "Shape Change":
            texto = "Cambio de Forma";
            break;
        case "StateChange":
            texto = "Cambio de Estado";
            break;
        case "SurfaceChange":
            texto = "Cambio en la Superficie";
            break;
        case "TidalProcess":
            texto = "Cambio en la Marea";
            break;
        case "TurningOffDevice":
            texto = "Apagar Dipositvo";
            break;
        case "TurningOnDevice":
            texto = "Encender Dispositivo";
            break;
        case "Motion":
            texto = "Movimiento";
            break;
        case "BodyMotion":
            texto = "Movimiento del Cuerpo";
            break;
        case "Closing":
            texto = "Acercarse";
            break;
        case "DirectionChange":
            texto = "Cambio de Direccion";
            break;
        case "GasMotion":
            texto = "Movimiento de Gas";
            break;
        case "Irrigating":
            texto = "Regar";
            break;
        case "LiquidMotion":
            texto = "Movimiento de Liquido";
            break;
        case "MotionDownward":
            texto = "Movimiento Hacia Abajo";
            break;
        case "MotionUpward":
            texto = "Movimiento Hacia Arriba";
            break;
        case "Opening":
            texto = "Abrir";
            break;
        case "Pulling":
            texto = "Jalar";
            break;
        case "Radiating":
            texto = "Radiar";
            break;
        case "Reversing":
            texto = "Dar la Vuelta";
            break;
        case "Rotating":
            texto = "Rotar";
            break;
        case "Stretching":
            texto = "Adelgazar";
            break;
        case "Swarming":
            texto = "Hacer";
            break;
        case "Translocation":
            texto = "Cambio de Posicion";
            break;
        case "Accelerating":
            texto = "Acelerar";
            break;
        case "Ambulating":
            texto = "Ambular";
            break;
        case "Arriving":
            texto = "Llegar";
            break;
        case "Boarding":
            texto = "Abordar";
            break;
        case "Deboarding":
            texto = "Desabordar";
            break;
        case "Decelerating":
            texto = "Desacelerar";
            break;
        case "Escaping":
            texto = "Escapar";
            break;
        case "Falling":
            texto = "Caer";
            break;
        case "Flying":
            texto = "Volar";
            break;
        case "Inmigrating":
            texto = "Inmigrar";
            break;
        case "Landing":
            texto = "Aterrizar";
            break;
        case "Leaving":
            texto = "Abandonar";
            break;
        case "Returning":
            texto = "Retornar";
            break;
        case "TakingOff":
            texto = "Despegar";
            break;
        case "Transfer":
            texto = "Transferir";
            break;
        case "Tranportation":
            texto = "Transportar";
            break;
        case "Trespassing":
            texto = "Traspasar";
            break;
        case "NaturalProcess":
            texto = "Proceso Natural";
            break;
        case "WeatherProcess":
            texto = "Proceso Climatico";
            break;
        case "Product":
            texto = "Producto";
            break;
        case "Cosmetic":
            texto = "Cosmetico";
            break;
        case "CulturalProduct":
            texto = "Producto Cultural";
            break;
        case "Broadcast":
            texto = "Programa de Emision";
            break;
        case "Composition":
            texto = "Composicion";
            break;
        case "Dance":
            texto = "Baile";
            break;
        case "Game":
            texto = "Juego";
            break;
        case "Movie":
            texto = "Pelicula";
            break;
        case "MusicalProduct":
            texto = "Producto Musical";
            break;
        case "Picture":
            texto = "Imagen";
            break;
        case "Printing":
            texto = "Impresion";
            break;
        case "Book":
            texto = "Libro";
            break;
        case "Document":
            texto = "Documento";
            break;
        case "Magazine":
            texto = "Revista";
            break;
        case "Newspaper":
            texto = "Periodico";
            break;
        case "Show":
            texto = "Espectaculo";
            break;
        case "Food":
            texto = "Comida";
            break;
        case "Beverage":
            texto = "Bebida";
            break;
        case "CookedPlate":
            texto = "Plato Cocinado";
            break;
        case "DairyProduct":
            texto = "Producto Diario";
            break;
        case "FishFood":
            texto = "Plato de Pescado";
            break;
        case "FruitOrVegetable":
            texto = "Fruta o Vegetal";
            break;
        case "Legume":
            texto = "Legumbre";
            break;
        case "Meat":
            texto = "Carne";
            break;
        case "OilOrGrease":
            texto = "Aceite o Grasa";
            break;
        case "Tobacco":
            texto = "Tabaco";
            break;
        case "Furniture":
            texto = "Mueble";
            break;
        case "Machine":
            texto = "Maquina";
            break;
        case "ElectricalAppliance":
            texto = "Aparato Electrico";
            break;
        case "ElectronicAppliance":
            texto = "Aparato Electronico";
            break;
        case "Computer":
            texto = "Computadora";
            break;
        case "ElectronicApplianceOther":
            texto = "Otros Aparatos Electronicos";
            break;
        case "ElectronicDevice":
            texto = "Dispositivo Electronico";
            break;
        case "MobilePhone":
            texto = "Celular";
            break;
        case "Instrument":
            texto = "Instrumento";
            break;
        case "Vehicle":
            texto = "Vehiculo";
            break;
        case "Aircraft":
            texto = "Aeronave";
            break;
        case "Car":
            texto = "Auto";
            break;
        case "Ship":
            texto = "Barco";
            break;
        case "Spaceship":
            texto = "Nave Espacial";
            break;
        case "Train":
            texto = "Tren";
            break;
        case "Weapon":
            texto = "Arma";
            break;
        case "Part":
            texto = "Parte";
            break;
        case "ProfessionalService":
            texto = "Servicio Profesional";
            break;
        case "AssistanceService":
            texto = "Servicio de Asistencia";
            break;
        case "CourierService":
            texto = "Servicio de Entrega";
            break;
        case "EducationalService":
            texto = "Servicio Educacional";
            break;
        case "EnquiryService":
            texto = "Servicio de Consulta";
            break;
        case "EnvironmentalService":
            texto = "Servicio Ambiental";
            break;
        case "FinancialService":
            texto = "Servicio Financiero";
            break;
        case "FoodOrBerverageService":
            texto = "Servicio de Comida o Bebida";
            break;
        case "LegalService":
            texto = "Servicio Legal";
            break;
        case "LeisureService":
            texto = "Servicio de Ocio";
            break;
        case "LodgingService":
            texto = "Servicio de Alojamiento";
            break;
        case "PassengerService":
            texto = "Servicio de Pasajero";
            break;
        case "RealEstateService":
            texto = "Servicio de Bienes Raices";
            break;
        case "RentingService":
            texto = "Servicio de Renta";
            break;
        case "SocialService":
            texto = "Servicio Social";
            break;
        case "TelecommunicationsService":
            texto = "Servicio de Telecomunicaciones";
            break;
        case "Substance":
            texto = "Sustancia";
            break;
        case "ChemicalCompound":
            texto = "Compuesto Quimico";
            break;
        case "ChemicalElement":
            texto = "Elemento Quimico";
            break;
        case "Drug":
            texto = "Droga";
            break;
        case "Fuel":
            texto = "Combustible";
            break;
        case "Metal":
            texto = "Metal";
            break;
        case "Textile":
            texto = "Textil";
            break;
        case "Accessory":
            texto = "Accesorio";
            break;
        case "Clothes":
            texto = "Ropa";
            break;
        case "Fabric":
            texto = "Fabrica";
            break;
        case "Footwear":
            texto = "Zapato";
            break;
        case "Toy":
            texto = "Juguete";
            break;
        case "Utensil":
            texto = "Utensilio";
            break;
        case "Container":
            texto = "Contenedor";
            break;
        case "UtensilOther":
            texto = "Otros Utensilios";
            break;
        case "WasteProduct":
            texto = "Producto de Desecho";
            break;
        case "Timex":
            texto = "Tiempo";
            break;
        case "Date":
            texto = "Fecha";
            break;
        case "Period":
            texto = "Periodo de Tiempo";
            break;
        case "Time":
            texto = "Hora";
            break;
        case "Unit":
            texto = "Unidad de Medida";
            break;
        case "CalorieUnit":
            texto = "Calorias";
            break;
        case "Currency":
            texto = "Unidad Monetaria";
            break;
        case "IntensityUnit":
            texto = "Unidad de Intensidad";
            break;
        case "PhysicalExtentUnit":
            texto = "Unidad de Extension Fisica";
            break;
        case "SpaceUnit":
            texto = "Unidad de Espacio";
            break;
        case "SpeedUnit":
            texto = "Unidad de Velocidad";
            break;
        case "TemperatureUnit":
            texto = "Unidad de Temperatura";
            break;
        case "TimeUnit":
            texto = "Unidad de Tiempo";
            break;
        case "Day":
            texto = "Dia";
            break;
        case "Era":
            texto = "Eras";
            break;
        case "Month":
            texto = "Mes";
            break;
        case "Season":
            texto = "Temporada";
            break;
        case "VolumeUnit":
            texto = "Unidad de Volumen";
            break;
        case "WeightUnit":
            texto = "Unidad de Peso";
            break;

        default:
            texto = textoObtenido;
            break;

    }
    return texto;
};
export default traducir;