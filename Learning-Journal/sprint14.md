---
layout: layout.html
title: Learning Journal sprint 14
---

[vorige](../sprint13) [volgende](../sprint15)

# Sprint 14
## Ma 30 sept
### CSS LAYOUTS
- https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats
- https://web.dev/learn/css/layout/
- https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_mode
- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html
- https://developer.chrome.com/docs/devtools/css/grid

Verschillende layouts:
- Flow
- Grid
- Mansonry
- Flexbox
- Float
- Positioned
- Multi-column 

Opdracht:
https://github.com/fdnd-task/layout-in-css/blob/main/docs/INSTRUCTIONS.md

### SVELTEKIT STRUCTUUR
- In SRC:
	App.html is de schil van het project. In routes zitten je pagina's. In de lib/.server zit alleen maar server side code. Bijv het inlog systeem of waar de API key wordt gebruikt. 
- In static staat alles waar sveltekit niks meer mee hoeft, zoals downloads en afbeeldingen.
- In .gitignore staat alles wat niet naar github mag. Zoals node modules en .env bestanden. 
- .env mag niet naar github omdat er gevoelige data in staat. .env.example is hetzelfde maar dan zonder geheimen. Die stuur je wel naar github. 
- In package.json staan al je packages. Dit heb je nodig voor sveltekit
- In svelte.config.js staat vastgelegd hoe svelte draait. Als je via vercel wilt moet je hierin een adapter aanpassen. 
- vite.config.js is een build tool. 

Voordat je je site live zet, run eerst build. 

### ROUTING
Maak een sitemap om de routes te begrijpen

### ERROR HANDLING
+error.svelte is 1 van de manieren om error handling te gebruiken. Als er dan iets mis gaat of als je naar een niet bestaande route gaat, krijg je geen 404 of 500 meer, maar je eigen custom error pagina. Je kan hier een layout in zetten. Je kan layouts nesten. In layout.svelte maak je een layout en die kan je inladen. De error.svelte is hetzelfde als een page.svelte. 
Met $page.error kun je de error message weergeven. 

Als svelte helemaal niet meer werkt gaat ie naar error.html. 

### LOADING DATA
In page.server.js gebruik je een 
```js
export async function load() {
	return {
		foo: 'whatever'
		bar: '42'
		type: 'TOPG'
	}
}
```
Je moet export voor een functie zetten die je ergens anders wil inladen. 

PUBLIC_ betekent dat het niet beschermd is. 

### DATA BINDING
Framework projecten hebben een manier om data te binden. 

``` js
<schript>
	let name = 'world'
<script>

<input bind:value={name}>

<p>Hello {name}!<p> //dit geeft de output 'Hello world!'
```
Door let te vervangen door $: maak je het reactive. 

### Library
'$lib' is library. 

```js
<script> 
	import {Header, Nav, Footer} from '$lib'
<script>
```


## wo 2 okt Design critique

- Dieter Rams, ten princibles for better design
- Less is more 
- kan designkeuzes uitleggen

## vrij 4 okt we love web
Lief Amsterdam 
lifeworld 
have natural animation easings
loer architekten 
areas
alcest
think of aniamtion and interaction as an extention to an original intent
be open minded
ask yourself what it brings and ask for feedback
be ready to spend a lot of time on it
gsap accesibility 

## ma 7 okt
maak een simpele portfolio, we hebben geen les gehad in graphic design. zolang je maar iets hebt. 

signaleert knelpunten en dingen die beter kunnen in de samenwerking. 
Get agile is een boekje 
waterval vs agile 
heel veel werk systemen voor software development
comprehensive system
itererend werken 
agile development 
scrum 
minimum viable product: project met alle must haves 
optimum viable product: must haves, should haves en could haves af
product owner: persoon in bedrijf die user stories maakt
stand up: max een kwartier, doe je staand, vertel waar je bent en wat goed of fout gaat
continuous integration: automatische intergratie 
scrum is goed voor onzekere dingen
elke werkdag een checkout waarbij je je learning journal bijhoud. 
een agile team kan eventuele problemen oplossen omdat er nodige expertise in het team zit. 

CHECKOUT:
We hebben geleerd hoe scrum werkt en wat rollen zijn binnen een team, en hoe we dit zelf kunnen gebruiken. We hebben besproken dat in dit groepje Ruben de rol als scrum master het meest speelt. We hebben een planning gemaakt voor een standup en een checkout. Rond 1 uur een standup en rond 4 uur een checkout. In een checkout schrijf je kort op wat je die dag hebt geleerd en besproken, zodat je de volgende dag dit er weer bij kan pakken en gelijk door kan gaan. We hebben ook het project board wat opgeschoond en de laatste taken verdeeld. 

## Wo 9 okt
Je hoeft geen database te gebruiken voor de i love web pagina, je kan gewoon je data opslaan in de site zelf op github, in een json bestand. 

Changelog in je readme
Tests
Linter voor code zoals prettier 
Vragen wat de klant wil

leervraag: zelf omarmen van nieuwe technologie

stappenplan maken voor problemen
- eerst documentatie
- googlen
- klasgenoot
- docent


## do 10 okt 

FEEDBACK SPRINT REVIEW
- achtergrond kleur gebaseerd op de foto
- utility buttons sticky
- header sticky maar zonder rubrieken en zwarte balk
- schaduwen passen niet in het red pers plaatje
- spelen met witruimte
- hoekig design 
- niet te veel animaties 
- doneren is erg belangrijk en moet opvallen
- spacing qua lettertypen klopt niet helemaal


## vrij 11 okt
2.1 : signaleert verbeterpunten 

smashing
masterdon
youtube
kevin paul
performance now
smashing magazine 
linkedin
insta 
twitter
slack
reddit


betekenis
wat is het, onderbouwen
dit is goeie bewijslast omdat
leervraag

## ma 14 okt
nieuwe headless cms
je mag content kopieren 
bewijslast toevoegen
presenteren onderzoek
documenteren en communiceren 
heel veel frameworks
zoveel dat mensen stress krijgen
dat maakt frontend moeilijk 
factors for choosing a tech stack
side generators 
gatsby 

## wo 16 okt 
### directus talk
- perfectionism 
- tech stack selection 
- database, framework, hosting provider, ui library
- choice comes from what you already know
- trade of between the best and what you know
- design systems 
- performance vs maintainability
- by what degree? over what scale?
- cost, energy 
- tailwind is a ui css utility library 
- take a bit more time now, way less time later on maintainance
- velocity vs flexibility 
- innovation vs reliabilty
- business talk
- trade off 
- ai :(
	- ethics, 
	- theft, 
	- everyone is doing it, 
	- cost, 
	- environmental impact, 
	- acuracy 
- ai in directus, query data, what if you get it wrong, responsibility 
- directus ai approach was very catious 
- distraction 
- fast, good or cheap, the iron triangle
- weighted decision matrix
- using directus
	- cms
	- not the best cms
	- good speed
	- high quality
	- directus is never what people are looking for
	- directus is flexible
	- used in many ways
	- storyblock, cms is very ui pretty
	- directus is very data driven
- youre going to make bad deciosions, own them, make better decisions next time
- its part of learning, over you will be able to make better decisions 
- root your decisions in user needs 
	- developers are also a stakeholder, we need to maintain and build the code
	- any impact that doesn't matter for end users, doesnt matter
	- like what stack you use, doesnt matter for end users
- **do you use poker planning? what tools do you use?**
	- we estimate time at the beginning of a project, and plan and see if it is met
	- we have different teams
- **do you access how many code workers produce?** no absolutely not 
	- lines of code are not a product of productivity
	- productivty ebbes and flowes and thats life, its more important to keep people happy
-  5 to 8 people in a team
- are they self governing? no there is a head of product
- we have a notion of a player coach 
- **how does directus gather feedback?**
	- from multiple places
	- most of our users will never become customers, wich is unnusual 
	- community members are active in discord and github
	- customers are also active in communicty
	- users just use the product and arents really active
	- audience 
	- if appropriate add issues into docs 
	- everyone is a customer
- Imposter syndrome 
	- library with learning collections 
	- many people feel imposter syndrome
	- its an irrational feeling 
	- its ok not to know everything
	- highly curated 
- directus tv 
	- its a streaming platform 
	- directus academy
	- it has all of the features
	- watch all the episodes 
	- acces control
	- flows
	- github webhook for commit 
	- a web socket is a two way connection

### Triple talk
- shyanta vleugel
- tech lead
- cmd gestudeerd
- 7 jaar triple
- web, smart tv, android, nos, design en backend 
- hypersolid
- sfeer is belangrijk 
- feestjes, funky friday, converenties 

- het webteam
- angular, door naar react
- react native en smart tv
- 3 teams, zelfde stack
- web werkt in react of svelte
- oud blijft react tenzij het opnieuw word gebouwd
- nieuw word svelte tenzij reacte native word gebruikt
- smart tv app is een web app maar draait op smart tv, daarom svelte omdat het licht is
- react native team, manier om iets te bouwen voor meerdere platform lagen
- way of working
- scrum
	- daily standup
	- refinements
	- retrospective
	- sprint review/planning
	- techload en product owner rol
- JIRA = ticket management systeem, net als project board
- GIT code reviews
- conventional commits 
- wat doet een tech lead? 
	- je zorgt ervoor dat de devs weten wat ze moeten doen
	- dingen uitschetsen is heel belangrijk
- werken met react of svelte, html en scss en typescript 
- wiki's, ted talks, nieuwe features talks, alles delen
- andere producten met andere uitdagingen
- verschillende api's
- waarom kies je tech stacks? 
- eindproduct, moet het seo performance zijn? doe dan server side rendered
- eenmalige website? wens voor animaties?
- onderzoeken naar tech stacks
- kennis sessies zijn belangrijk
- kijken naar nieuwe dingen
- tijd vrijgemaakt om dingen te onderzoeken mits je een presentatie geeft
- tips:
	- dont repeat yourself
	- componenten gebruiken
	- componenten zijn lego blokjes
	- componenten zijn heilig, maar het framework staat er los van
- web components, importeren in je frameworks 

### justus talk
- proof of concept
- logica en argumentatie
- je kan een standpunt innemen 
- user experience, developer experience, content-management experience 
- maak een argumentatie schema 
- meervoudige argumentatie 
- werk het schema uit
- zondag 27 okt 23.59 portflow inleveren

## Vrij 18 okt
### We love web Dion Pieters
- portfolio
- e-commerce 
- houdt je gewoon aan het design
- spotify, loui viton, squarespace 
- wie gaat het designen? heb ik nog een oud portfolio? wat wil ik laten zien? wie gaat het bekijken? Hoeveel tijd moet ik eraan besteden? 
- moet een developer kunnen designen en moet een designer kunnen developen? nee.
- geen limitaties 
- te design georienteerd, paste niet bij hem
- beginnen met een opzet, eigen creativiteit eraan toevoegen
- overleggen wat hij wilt en wat zijn doelen zijn
- branding gemaakt, smiley, grote naam, felle kleuren
- moet ieder element op je site een vorm van animatie hebben? ja
- een website is juist interactief en stuurt je in een andere dimensie en moet losgaan
- laat zien wat je leuk vind, zodat je daar meer projecten van krijgt
- found.byspotify.com
- activetheory.net
- jij hebt zelf de kennis om een klant te overtuigen waarom je iets moet doen
- hoe houdbaar is je portfolio? wanneer moet je een nieuwe maken met nieuwe trends? 
	- niet zo houdbaar, steeds veranderen 
- box sizing border box zorgt ervoor dat de padding aan de binnenkant van het element zit ipv buitenkant, zodat het element niet breder word

## schakelprogramma
- Francisca 
- dit jaar anders
- profileringsblok kiezen
- 4 blokken
- 1 niet: tech
- ook nog een special
- blok 4 dagen per week
- 1 dag special op woensdag
- keuzemodules
- meer dan 5
- marketing, 3d, kleine onderwerpen
- 1 blok en 1 special kiezen
- aangepaste cmd programma, 2 en een half jaar
- 1e half jaar 2 blokken met jaar 1 en 2 vakken, blok 1 jaar 1, blok 2 jaar 2
- interactie vakken blok 1
- blok 2 verder kijken dan scherm en web
- 2e helft jaar verder met profilierings blokken
- jaar 2 semesters
- 1e half thema semester
- minoren folder
- visual interface disign, information design, webdesign mag niet
- nieuwe tech, ai
- information design ook technisch 
- service design, onderzoek en diensten
- 2e half lange stage van 20 weken
- daarna onderzoek doen 
- je kan ook later instromen in cmd, maar vragen examencomissie
- portfolio is belangrijk
- je mag wel een frontend stage doen
- veel tijd bezig met onderzoek, veel methodes oefenen, meer theorie zoals psychologie 
- competenties, 4 ontwerp en 4 proffesionele 
- onderzoek service design efteling
- 1e jaar is pittig want je doet elk blok wat anders en in een andere klas en ander jaar
- de inschrijving is volgende week dinsdag om 8 uur ochtend, snel inschrijven 
- ook op de inschrijf lijst staan
- maandag namen voor lijst
- academy attendance 

[vorige](../sprint13) [volgende](../sprint15)