import './App.css';
import react from 'react';
import Header from './components/Header';
import NewsNotification from './components/NewsNotification';
import MainSection from './components/MainSection';
import SideNews from './components/SideNews';





function App() {

  const NewsNotificationData = [
    {
      topic: 'Kulttuuri',
      body: 'Kokoelma Mad Max -elokuvassa nähtyjä autoja tulee myyntiin huutokaupassa'
    },
    {
      topic: 'Päivän Timantti',
      body: 'Venäjältä adoptoitu Mikaela Mäkinen alkoi selvittää juuriaan, ja sisko löytyi lopulta Instagramista'
    },
  ];

  const MainNewsNotificationData = [
    {
      topic: 'Rajoitukset ',
      body: 'Hallituksessa jälleen kiistaa ravintolarajoituksista, aukioloajat ovat joka tapauksessa pidentymässä'
    },
    {
      topic: 'Päivän Timantti',
      body: 'Venäjältä adoptoitu Mikaela Mäkinen alkoi selvittää juuriaan, ja sisko löytyi lopulta Instagramista'
    }
  ];

  const SideNewsNotificationData = [
    {
      topic: 'Rajoitukset ',
      body: 'Hallituksessa jälleen kiistaa ravintolarajoituksista, aukioloajat ovat joka tapauksessa pidentymässä'
    },
    {
      topic: 'Päivän Timantti',
      body: 'Venäjältä adoptoitu Mikaela Mäkinen alkoi selvittää juuriaan, ja sisko löytyi lopulta Instagramista'
    },
    {
      topic: 'Päivän Timantti',
      body: 'Venäjältä adoptoitu Mikaela Mäkinen alkoi selvittää juuriaan, ja sisko löytyi lopulta Instagramista'
    },
    {
      topic: 'Päivän Timantti',
      body: 'Venäjältä adoptoitu Mikaela Mäkinen alkoi selvittää juuriaan, ja sisko löytyi lopulta Instagramista'
    },

  ];
  
  return (
    <div>
      <Header />
      {
      NewsNotificationData.map(element => <NewsNotification topic={ element.topic } body={ element.body } />)
      }
      {   
      MainNewsNotificationData.map(element => <MainSection topic={ element.topic } body={ element.body } />)
      }
      {
      SideNewsNotificationData.map(element => <SideNews topic={ element.topic} body={ element.body} />)
      }
    </div>
  );
}

export default App;
