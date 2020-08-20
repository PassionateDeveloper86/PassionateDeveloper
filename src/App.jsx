import React from 'react';
import './css/App.css';
import './css/Circle.css';
import './css/Exp.css';
import Contact from './Contact'
import Blogging from './Blogging'
import Education from './Education'
import Projects from './Projects'
import AboutMe from './AboutMe'
import MyExperience from './MyExperience'
import TechStack from './TechStack'
import Landing from './Landing'
import Impressum from './Impressum'
import useStickyState from './hooks/useStickyState'


function App() {
  var defaultLang = "en";
  if ((navigator.language || navigator.userLanguage) === "de" || (navigator.language || navigator.userLanguage) === "de-DE")
  {
     defaultLang = "de";
  }
  const [state, setState] = useStickyState({lang: defaultLang}, "lang");
  console.log(state)
  const translations = {
    'en': {
      'expText7a': 'Develpment of simple features and removing bugs of allready released software with the using of ASP.Net 2.0',
      'expText6a': 'Work as freelancer, see the projectlist',
      'expText5a': 'Development of customer requirements by intranet websites. Automation, finance and HR. Project responsibility and leader of a team with near customercontact. TechStack ASP.Net, HTML5, JavaScript, JQuery, C#.Net, EF6',
      'expText4a': 'Further development of a software for statistic evaluations within a compone that builds and creates its own refrigeration systems. Focus on graphical frontend and reporting on the base of 300+ million datarows. Projectresponsibility for the datawarehouse webservice. Teaching of trainees and apprentices.',
      'expText3a': 'Teacher for software development at a school for apprentices.',
      'expText3b': 'Curses: Basic knowledge of databases, experience knowledge of databases, basic project management & software quality',
      'expText3c': 'Teacher at a IT-Highschool in the classes for business informatics certification',
      'expText3d': 'Curses: Java software development, basic knowledge of OOP',
      'expText2a': 'Leading of a own 2 year-project with picking a projectteam to create an intranet website for automation of processes in finance and rental department with the techstack React, MaterialUI, C#.Net Core, GraphQL and MS SQL DB.',
      'expText2b': 'Deputy head of IT department with budget responsibility, ',
      'expText2c': 'Leading and teaching of a apprentice "Fachinformatiker Fachrichtung Anwendungsentwicklung"',
      'expText1b': 'Development of microservices as communication hub between hardware systems on the base of AMQP (MessageBus), Docker with C#.Net Core 3.1.',
      'expText1a': 'Focus on DevOps with administrational lead of the CI & CD system GitLab and support of intragroup teams.',
      'expSub1': "Senior software developer",
      'expSub2a': 'Teamleader',
      'expSub2b': 'Senior software develoer',
      'expSub4': 'Teacher (parttime)',
      'expSub5a': 'Projectleader',
      'expSub5b': "Senior software developer",
      'expSub6': "Software developer",
      'expSub7': "CEO / freelancer",
      'expSub8': "Junior software developer",
      'projectText1': 'WebApplication for eInvoice / ZUGferd, a digital invoice format in the EU on the base of the known PDF / XML-format. Secure transfer and ISO certificated invoice storage.',
      'projectText2': 'WebSite for a movement company with full automation of the movement process, invoicing, caluclation and customer assistent. Customer driven project as freelancer.',
      'projectText3': 'DesktopApplication for statistical review of a datawarehouse with 300+ billion datarows. Graphical export features.',
      'projectText4': 'WebSite for written role play games in the area of manga & anime.',
      'projectText6': 'WebSite to host email-adresses for user for free (like gmail.com) within server hosting for simple static websites. Additional marketing and advertisment features like yellow pages.',
      'projectText5': 'iPhone-App as connection to a middlebig online community in the area of manga / anime (japanise comics). Features like chats, rpgs, text message system and pictures uploads.',
      'projectText7': 'WebSite to create an online community for flirts and partnership (no erotic). First project with independent implementation from the beginning to the end.',
      'projectText8': 'WebSite for online auctions within a backend module as desktop application to monitor the auctions and administrate users. First sold website.',
      'projectTitle1': "WebApp: E-Invoicing",
      'projectTitle2': "WebSite: Movement",
      'projectTitle3': "Applikation: BigData",
      'projectTitle4': "WebSite: RPGs",
      'projectTitle5': "App: Online-Community",
      'projectTitle6': "WebSite: Mailing",
      'projectTitle7': "WebSite: Flirt",
      'projectTitle8': "WebSite: Auctions",
      'edu1': 'AEVO certification',
      'edu2': 'Certification to be an IT-trainer / teacher',
      'edu3': 'State certified IT assistent',
      'edu4': 'Best in class for practical programming',
      'edu5': 'High School',
      'edu6': 'Specialization IT',
      'bloggingText1': 'My goal for 2020:',
      'bloggingText2': '10 blog enytries to teach what I know!',
      'germany': 'Germany',
      'send': 'Send',
      'contactMessage': 'Your message*',
      'contactText1': 'Contact form successfully send.',
      'contactText2': 'I am looking forward to respond to your message.',
      'contactText3': 'Thank you very much.',
      'contactErrorName': 'Please insert your name.',
      'contactErrorEmail': 'Please insert your email.',
      'contactErrorText': 'Please insert your text.',
      'contactErrorCon': 'Sorry, we have connection problems. Please try again later.',
      'impress': 'Impress (only in German, sorry!)',
      'aboutMeText1': 'Software-Development combines creativity, logical thinking and the ability to abstract. What I love!',
      'aboutMeText2': 'Birthday',
      'aboutMeText3': 'Adress',
      'aboutMeText4': 'Achtert Wallen 14, Aurich, Germany',
      'softText1': 'employee responsibility / Projectlead',
      'softText2': 'reliability / team spirit',
      'passionText3': 'work is no longer an obligation',
      'passionText2': 'If you turn your hobby into a profession,',
      'passionText1': 'Passion',
      'databaseAdmin': 'database administration',
      'datensätze': 'billion datarows',
      'database': 'Database',
      'landingText1': 'Hey, I am ',
      'landingText2': 'Software-Developer &',
      'landingText3': 'I love my job',
      'hobbys': 'Hobbies',
      'tooltipExp': 'Working certificat available',
      'tooltipExp2': 'For data protection reasons this is not downloadable, please use the contact form to recieve a copy.',
    },
    'de': {
      'expText7a': 'Entwicklung von Features und beheben von Bugs in bestehender Software auf Basis von ASP.Net 2.0',
      'expText6a': 'Arbeit als Freelancer, siehe Projekte',
      'expText5a': 'Entwicklung von Kundenlösungen durch Intranetwebsites im Bereich der Ablaufkontrolle, Finance und Personalmanagment. Projektverantwortung und Mitarbeiterverantwortung mit engem Kundenkontakt im TechStack ASP.Net, HTML5, JavaScript, JQuery, C#.Net, EF6',
      'expText4a': 'Weiterentwicklung der Auswertungssoftware für Endkunden im Bereich der durch die Firma hergestellten Kälteanlagen, grafisches Frontend und Erarbeitung von Auswertungen auf Grundlage von 300 Milliarden Datensätzen im BigData-Bereich. Projektverantwortlichkeit für WebService-Projekte der Firma. Übernahme von Praktikanten und einem Auszubildenden.',
      'expText3a': 'Lehrer im Fach Anwendungsentwicklung in den Berufsschulklassen für die Ausbildung Fachinformatiker und Systemelektroniker',
      'expText3b': 'Themengebiete: Grundlagen Datenbanken, Erweiterungen Datenbanken, Grundlagen Projektmanagement & Softwarequalität',
      'expText3c': 'Lehrer im Fach Wirtschaftsinformatik in den Abiturklassen mit Wahlschwerpunkt Informatik',
      'expText3d': 'Themengebiete: Grundlagen Java, Grundlagen OOP',
      'expText2a': 'Leitung eines eigenen Projektes und Projektteams zur Erstellung einer Intranetlösung zur automatisierung diverser Prozesse im Finanz- und Mietwesen im TechStack React, MaterialUI, C#.Net Core, GraphQL und MS SQL DB.',
      'expText2b': 'Stellvertrende Abteilungsleitung mit Budgetverantwortung, ',
      'expText2c': 'Führung eines Auszubildenden als Fachinformatiker Fachrichtung Anwendungsentwicklung',
      'expText1b': 'Entwicklung von Microservices als Verbindungsschnittstelle zwischen Hardwareexpertensystemen auf Basis von AMQP (MessageBus), Docker mit C#.Net Core 3.1.',
      'expText1a': 'Schwerpunkt DevOps mit Administration des CI & CD Systems GitLab und Support konzerninterner Teams mit den Themen "Monolith zu Microservice" und Docker',
      'expSub1': "Senior Software-Entwickler",
      'expSub2a': 'Teamleiter',
      'expSub2b': 'Senior Software-Entwickler',
      'expSub4': 'Lehrer (Teilzeit)',
      'expSub5a': 'Projektleiter',
      'expSub5b': "Senior Software-Entwickler",
      'expSub6': "Software-Entwickler",
      'expSub7': "Geschäftsführer / Freelancer",
      'expSub8': "Junior Software-Entwickler",
      'projectText1': 'Webapplikation im Bereich eInvoice / ZUGferd, einem digitalen Rechnungsformat auf PDF / XML Basis. Sichere Übertragung und garantierte Datenspeicherung, ISO Zeritifizert.',
      'projectText2': 'WebSite für ein Umzugsunternehmen mit vollautomatisiertem Umzugsassistent, Berechnung des Umzugspreises und Angebotserstellung.',
      'projectText3': 'Desktop-Applikation zur statistischen Auswertung eines DataWarehouses im Bereich Big Data (300 Milliarden Datensätzen).',
      'projectText4': 'WebSite für schriftliche Rollenspiele im Anime/Manga-Bereich.',
      'projectText6': 'WebSite zum kostenlosten erstellen von Emails mit ServerHosting aähnliche wie Web.de. Angebunden an eine online Werbevermarkung im B2B Bereich ähnlich Gelbe Seiten.  ',
      'projectText5': 'iPhone-App als Anbindung an eine mittelgroße Online-Community im Bereich japanischer Zeichnungen (Manga / Anime). Features wie Chats, Rollenspiele, Nachrichtensystem und Nutzerprofile.',
      'projectText7': 'WebSite zum Aufbau einer Online-Community im Bereich Flirt & Partnerschaft (keine Erotik). Selbstständige Durchführung vom Pflichtenheft bis zum Release der Webseite',
      'projectText8': 'WebSite für Onlineauktionen inkl. BackEnd-Modul als Windows Applikation zum überwachen der Auktionen und Administrieren der Benutzer. Erstes verkauftes Produkt.',
      'projectTitle1': "WebApp: E-Invoicing",
      'projectTitle2': "WebSite: Umzüge",
      'projectTitle3': "Applikation: BigData",
      'projectTitle4': "WebSite: Rollenspiele",
      'projectTitle5': "App: Online-Community",
      'projectTitle6': "WebSite: Mailing",
      'projectTitle7': "WebSite: Flirt",
      'projectTitle8': "WebSite: Auktionen",
      'edu1': 'AEVO-Schein',
      'edu2': 'Zertifizierung zum Ausbilder',
      'edu3': 'Staatl. geprüfter IT-Assistent',
      'edu4': 'Jahrgangsbester im Fach Programmierung',
      'edu5': 'Abitur',
      'edu6': 'Fachrichtung Informatik',
      'bloggingText1': 'Mein Ziel für 2020:',
      'bloggingText2': '10 Blog Beiträge schreiben und mein Wissen mit der Welt teilen',
      'germany': 'Deutschland',
      'send': 'Absenden',
      'contactMessage': 'Ihre Nachricht*',
      'contactText1': 'Kontaktformular erfolgreich abgesendet.',
      'contactText2': 'Ich werde mich zeitnah bei Ihnen melden.',
      'contactText3': 'Vielen Dank für Ihre Nachricht.',
      'contactErrorName': 'Bitte Ihren Namen eingeben.',
      'contactErrorEmail': "Bitte EMail eingeben.",
      'contactErrorText': "Bitte eine Nachricht eingeben.",
      'contactErrorCon': "Fehler beim Verbindungsaufbau, bitte versuchen Sie es später noch einmal.",
      'impress': 'Impressum | Datenschutzerklärung',
      'aboutMeText1': 'Software-Entwicklung vereint Kreativität, logisches Denken und Abstraktionsvermögen. Genau mein Ding!',
      'aboutMeText2': 'Geburtsdatum',
      'aboutMeText3': 'Adresse',
      'aboutMeText4': 'Achtert Wallen 14, Aurich, Deutschland',
      'softText1': 'Personalverantwortung / Projektleitung',
      'softText2': 'Zuverlässigkeit / Teamfähigkeit',
      'passionText1': 'Leidenschaft',
      'passionText3': 'ist Arbeit keine Pflicht mehr.',
      'passionText2': 'Wenn man das Hobby zum Beruf macht,',
      'databaseAdmin': 'Datenbank-Administration',
      'datensätze': 'Millionen Datensätze',
      'database': 'Datenbank',
      'hobbys': 'Hobbys',
      'landingText1': 'Hey, ich bin',
      'landingText2': 'Software-Entwicker &',
      'landingText3': 'Ich liebe meinen Job',
      'tooltipExp': 'Arbeitzeugniss vorhanden.',
      'tooltipExp2': 'Aus Datenschutzgründen verwenden Sie bitte das Kontaktformular um diese als Kopie zu erhalten.',
    },
  }
  
  const getTranslation = (text) => {
    return translations[state.lang][text];
  }

  var changeLanguageHandler = (lang) => {
    setState({ lang: lang });
  }

  return (
    <div className="App">
      <Landing changeLanguageHandler={changeLanguageHandler} getTranslation={getTranslation} />
      <TechStack getTranslation={getTranslation} />
      <MyExperience getTranslation={getTranslation} />
      <AboutMe getTranslation={getTranslation} />
      <Projects getTranslation={getTranslation} />
      <Education getTranslation={getTranslation} />
      <Blogging getTranslation={getTranslation} />
      <Contact getTranslation={getTranslation} />
      <Impressum getTranslation={getTranslation} />
    </div>
  );
}

export default App;
