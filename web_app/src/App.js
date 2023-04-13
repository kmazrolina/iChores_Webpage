import React from 'react';
import './App.css';
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';



function App() {
	return (
		<div>
			
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png" />
					</div>
					<li><a href="About">About</a></li>
					<li><a href="Architecture">Architecture</a></li>
					<li><a href='Collaborators'>Collaborators</a></li>
				</ul>

				
			</nav>
			<section class="section">
				<div >
						<h1 class="title">
							iChores
						</h1>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
							About
						</h1>
						<p class="text-small">
							cos o porjekcie
						</p>
					</div>
				</div>
			</section>
			
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Architecture
						</h1>
						<p class="text-small">
						Co znaczy Lorem ipsum? Lorem ipsum dolor sit amet . Operatorzy graficzni i typograficzni dobrze to wiedzą, w rzeczywistości wszystkie profesje zajmujące się wszechświatem komunikacji mają stabilny związek z tymi słowami, ale co to jest? Lorem ipsum to tekst atrapowy bez żadnego sensu. Jest to sekwencja łacińskich słów , które, ponieważ są pozycjonowane, nie tworzą zdań o pełnym znaczeniu, ale nadają życiu tekst testowy przydatny do wypełnienia spacji, które będą następnie zajmować się tekstami ad hoc tworzonymi przez specjalistów ds. komunikacji.Jest to z pewnością najbardziej znany tekst zastępczy , nawet jeśli istnieją różne wersje, które można odróżnić od kolejności, w której powtarzane są łacińskie słowa.Lorem ipsum zawiera krój pisma więcej w użyciu, aspekt pozwalający na przeglądanie renderowania tekstu w kategoriach wyboru czcionki i rozmiar czcionki .W odniesieniu do Lorem ipsum używane są różne wyrażenia, mianowicie wypełnij tekst , fikcyjny tekst , ślepy tekst lub tekst zastępczy : w skrócie, jego znaczenie może również wynosić zero, ale jego użyteczność jest tak jasna, że ​​można przejść przez wieki i oprzeć się ironicznym i nowoczesnym wersjom, które pojawiły się wraz z nadejściem sieci.Najczęściej używana wersja Lorem Ipsum?« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. » Generator tekstów Lorem Ipsum jest SEO-proof!Dzięki naszemu narzędziu do generowania tekstu wypełniania , oprócz dostosowywania tekstu za pomocą elementów HTML , masz możliwość utworzenia nowego, zaczynającego się bezpośrednio od tekstu!W ten sposób unikniesz indeksowania strony za pomocą słów kluczowych zawartych w klasycznym Lorem Ipsum.Dzięki narzędziu Lorem Ipzum możesz wstawiać teksty bezpośrednio za pomocą słów kluczowych, które będą służyć do indeksowania Twojej witryny. Spróbuj!Dlaczego używasz?Tekst wypełniający Lorem ipum jest używany przez grafików, programistów i drukarzy w celu zajmowania przestrzeni witryny internetowej, produktu reklamowego lub produkcji wydawniczej, której ostateczny tekst nie jest jeszcze gotowy.Ta funkcja służy do zapoznania się z gotowym produktem, który wkrótce zostanie wydrukowany lub rozpowszechniony za pośrednictwem kanałów cyfrowych.Aby uzyskać wynik bardziej zgodny z końcowym wynikiem, graficy, projektanci lub drukarze zgłaszają tekst Lorem ipsum w odniesieniu do dwóch podstawowych aspektów, mianowicie czytelności i wymagań redakcyjnych.Wybór czcionki i rozmiaru czcionki, z jaką Lorem ipsum jest odtwarzany, odpowiada na konkretne potrzeby, które wykraczają poza proste i proste wypełnianie przestrzeni przeznaczonych do przyjmowania prawdziwych tekstów i pozwalających mieć ręce produkt reklamowy / wydawniczy, zarówno w sieci, jak i papierze, zgodnie z rzeczywistością. Jego bzdury pozwalają skupić się tylko na układzie graficznym obiektywnie oceniając stylistyczne wybory projektu, dlatego jest instalowany na wielu programach graficznych na wielu platformach oprogramowania personalnego publikowania i systemu zarządzania treścią.Jakie są początki Lorem Ipsum?Wbrew temu, co można by pomyśleć, tekst Lorem ipsum, mimo iż jest bez znaczenia, ma szlachetne pochodzenie.Obiektywnie złożony z niepowiązanych słów, Lorem ipsum zawdzięcza swoje istnienie Marco Tullio Cicerone i niektórym krokom jego De finibus bonorum et malorum (Najwyższy dobre i najwyższe zło) napisane w 45 roku pne , klasyka literatury łacińskiej sprzed ponad 2000 lat.Odkrycie dokonał Richard McClintock , profesor łaciny w Hampden-Sydney College w Virginii, który stanął w obliczu gwałtownego nawrotu ciemnego słowa consectetur w tekście Lorem ipsum badał jego pochodzenie, aby zidentyfikować je w sekcjach 1.10.32 i 1.10.33 wspomnianego dzieła filozoficznego Cycerona.Słowa wzięte z jednego z dialogów zawartych w De finibus są zatem fragmentami najbardziej znanego bezsensownego tekstu na świecie.Odkrycie, które nadało większą wagę Lorem ipsum, które pozostało na grzbiecie fali od 500, to znaczy, według profesora Richarda McClintocka, jego użycie rozpowszechniło się wśród drukarek tamtych czasów.Oczywiście wiemy, że większość z nich była znana z rozgłosu lat sześćdziesiątych, a mianowicie ze zbywalnych kart postaci Letraset: przezroczyste arkusze samoprzylepne, na których tekst Lorem ipsum został nadrukowany z łatwością przeniesiony na produkty redakcyjne przed pojawieniem się komputera.
						</p>

					</div>
				</div>
			</section>
			
			<div class = "circle">
				<Circle  r={200} fill={{color:'rgba(255,255,255,0)'}} stroke={{color:'#E65243'}} strokeWidth={16} />
			</div>

			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							Collaborators
						</h1>
						<p class="text-small">
						
							linki
						</p>
					</div>
				</div>
			</section>
			
			<footer className="footer">
				<p className="text-footer">
					jakis footer, moze logo uj czy cos
				</p>
			</footer>
			
		</div>
		
		
	)
}

export default App
