# Kampania Dungeons & Dragons

Interaktywna historia na zasadach piątej edycji Dungeons & Dragons. Odkryj tajemnice jakie kryje za sobą Wieża Tajemnych Arkan, rozwiąż zagadkę stojącą za tajemniczym morderstwem, wypełnij zadanie, które zlecił Ci sam Oghma oraz staw czoła niebezpieczeństwom stojącym Ci na drodze do Twojego celu!

Na ten moment strona jest na etapie pisania dalszej historii, budowania ogromnego schematu potencjalnych wyborów postaci oraz implementowania systemu rzutu kością d20, z uwzględnieniem umiejętności postaci, efektów i ewentualnych "wyjątkowych sytuacji".

Strona została zbudowana z użyciem biblioteki React, jQuery oraz wykorzystuje metodę Responsive Web Design i Single Page Website. Styl strony oparty jest w głównej mierze na preprocesorze SCSS, dodatkiem jest Bootstrap, jednak tylko do wyświetlania tymczasowych ikon. Całą zawartość główną strony (historię, przedmioty itp) przechowują pliki .json, dostosowane i opisane w taki sposób, by nie było problemów z poruszaniem się po nich. Wszystkie dane, które są potrzebne w zależności od czynności lub etapu historii są przechowywane w Redux Storze. Za pomocą React-Redux każdy komponent, który wyświetla odpowiednie dane (np. waga przedmiotów z ekwipunku w bocznym menu) uaktualnia się wraz ze zmianą danych. 

Aktualny wygląd strony jest tymczasowy i będzie się zmieniać wraz z rozwojem strony. 
