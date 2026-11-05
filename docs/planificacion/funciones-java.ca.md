# Funcions en Java

Pla de contingut confirmat el 5 de novembre de 2026 i ajustat durant la revisió del professor.

Unitat independent, al mateix nivell de navegació que Introducció a Java. Entrada `guides/funciones-en-java`; pàgines equivalents en castellà i valencià amb introducció, declaració i crida, flux d’execució, àmbit, pas d’arguments, sobrecàrrega i varargs, i recursió.

Explicacions detallades per a primer de DAM a partir de variables, control, entrada/eixida i arrays. S’utilitzen mètodes estàtics dins d’una classe i main tradicional. La versió docent de Java continua sense fixar-se; la comprovació usa JDK 24 i compatibilitat de compilació Java 8 per a estos exemples.

Material d’origen: `Funciones en Java/Funciones.docx`, `Funciones y recursión en Java.pptx` i `Urls interesantes`, fora del repositori. Es revisaren text i imatges del Word i text del PowerPoint. L’enllaç a sergarb1 no fou accessible mitjançant l’eina web; l’article d’OpenWebinars es va consultar com a material aportat. Les referències tècniques del temari es contrastaren amb Oracle.

Es conserven l’extracció del càlcul d’una suma i factorial, desenvolupats amb context executable, traces i límits. Es corregix la descripció d’arrays: Java copia per valor les referències; es distingix modificar l’objecte de reassignar el paràmetre. Se substituïxen «variables globals» per camps de classe i «sobreescriure» per ocultar un camp. Herència, concurrència i excepcions no es desenvolupen en profunditat.

Peticions posteriors del professor: incorporar més esquemes didàctics, retirar les proves de comprensió intercalades, eliminar completament Activitats i repàs i no mencionar diapositives en els apunts. L’abast final són set pàgines per idioma i set esquemes SVG per idioma. No restituir les activitats eliminades.

Les diapositives HTML externes es mantenen en `../Diapositivas/funciones-en-java-{es,ca}.html`, amb quinze diapositives, preguntes explicades i traces d’arrays i factorial. Accés des de `../Diapositivas/index.html`; no hi ha referències a elles en les pàgines del temari.

Els RA s’integren en el text introductori, sense apartat propi, per petició posterior del professor. També s’han precisat els RA en les introduccions de les altres dos unitats, conservant-ne els continguts.

Validació: build d’Astro correcte; 24 programes complets i 12 programes preparats amb fragments i casos límit, compilats i executats amb JDK 24 i --release 8; 6 errors deliberats rebutjats pel compilador. Es comprovaren 1147 enllaços i recursos locals en les 18 pàgines compilades afectades i els 14 SVG. Sintaxi dels dos scripts de diapositives i estructura de les dos presentacions verificades. Les skills superen el seu validador.

Revisió en navegador: navegació de la unitat independent i pàgines castellanes en escriptori; respostes correctes i incorrectes i avanç, límits i reinici de les traces en la presentació castellana. Pàgina de pas d’arguments revisada a 390 px sense desbordament horitzontal. La revisió completa de mòbil, les interaccions valencianes i l’obertura directa d’HTML local queden pendents: el servidor es va detindre i el reinici no es va autoritzar. El build mostra avisos de col·lecció i18n buida i pàgina 404 sense entrada de contingut, ja observats abans dels últims ajustos.
