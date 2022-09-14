import './App.css';
import React from 'react';
import ListItem from "./bricks/ListItem";
import 'bootstrap/dist/css/bootstrap.min.css';  

const recipes = [{
  "name": "Salát z naklíčené čočky",
  "description": "Mrkev, okurku a papriku nakrájejte na malé kostičky a dejte do větší mísy spolu s naklíčenou čočkou. Cibuli nakrájejte najemno a přidejte k zelenině. Přisypte nasekanou petrželku. V misce nebo hrníčku důkladně promíchejte lák z okurek, olivový olej a med. Zálivku nalijte do mísy a důkladně promíchejte. Na závěr dochuťte solí a pepřem.",
  "imgUri": "https://zachranjidlo.cz/wp-content/uploads/dsc02309-1-e1652694711486-1024x433-1200x500-c-default.jpg",
}, 
{
  "name": "Ovesné placičky",
  "description": "Cibuli oloupejte a nastrouhejte nahrubo. Mrkev důkladně umyjte a nastrouhejte najemno spolu s česnekem. V míse smíchejte vločky, cibuli, mrkev, česnek a koření. Přidejte strouhanku a důkladně promíchejte, ideálně rukou tak, aby vznikla jednotná směs. Pokud je směs příliš suchá, přidejte trošku vody, pokud je příliš mokrá, přidejte trošku strouhanky. Na pánvi rozpalte olej, ze směsi vytvarujte malé placičky a smažte z obou stran dozlatova.",
  "imgUri": "https://zachranjidlo.cz/wp-content/uploads/dsc-0516-1-1024x480-1200x500-c-default.jpg",
},
{
  "name": "Barbecue burger ze zbylého kuřete",
  "description": "Rozehřejte troubu na 240 °C. Obrané drůbeží maso natrhejte na vlákna, zamíchejte s barbecue omáčkou a rozprostřete do pekáčku. Dejte do trouby a pečte asi 10 minut. Rozpůlené bulky opečte na rozpálené pánvi na sucho z obou stran. Limetu umyjte, nastrouhejte kůru, šťávu vymačkejte a obojí smíchejte s majonézou. Pomocí škrabky udělejte z mrkve tenké proužky. Přendejte je do misky, přidejte špetku soli a pepře a pár kapek limety a promíchejte. Začněte skládat burger. Obě půlky bulek pomažte limetovou majonézou. Na spodní polovinu bulky navrstvěte natrhaný koriandr, na plátky nasekanou chilli papričku, mrkvové proužky, tenká kolečka šalotky a plátek rajčete. Nakonec přidejte vrstvu zapečeného bbq kuřete a plátek cheddaru. Přiklopte vrchní polovinou bulky a podávejte.",
  "imgUri": "https://zachranjidlo.cz/wp-content/uploads/bbq-kure-burger-1024x493-1200x500-c-default.png",
},]

function App() {
  return (
      <div className="App">
          <ListItem recipes={recipes} />
      </div>
  );
}

export default App;

