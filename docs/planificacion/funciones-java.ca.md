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

Revisió del 6 de novembre de 2026: es retira la frase introductòria sobre la numeració del mòdul 0485, conservant les referències als RA. S’afigen nou requadres per idioma amb definicions i aclariments senzills mitjançant analogies quotidianes, reutilitzant java-document-note. No es modifiquen exemples Java, esquemes ni diapositives. La preferència didàctica es guarda en la skill d’edició.

## Ampliació confirmada: testing amb JUnit

El professor confirma l’índex i concreta VS Code amb projectes Java sense Maven ni Gradle. S’afig una octava pàgina al final de Funcions: `testing-con-junit`. Abast: prova unitària, instal·lació amb JAR autònom, @Test, assertEquals, preparar/executar/comprovar, casos normals i límits, booleans/cadenes/arrays/decimals, interpretar errors, corregir i repetir, i errors habituals. No es restituïxen les activitats ni les proves de comprensió eliminades. Les proves parametritzades, mocks i excepcions queden fora.

Versions fixades per a reproduir els exemples: JUnit Jupiter 5.13.4 amb Platform Console Standalone 1.13.4; no es presenten com les últimes versions ni fixen un nou JDK per al curs. Es consulten la guia oficial de JUnit 5.13.4 i la documentació de Java Testing de VS Code.

Lliurables: apunts en castellà i valencià, dos esquemes per idioma, exemples editables en `ejemplos/testing-junit/{es,ca}` i ZIP publicats en `public/ejemplos/` sense incloure el JAR extern. README del projecte i traducció actualitzats; diapositives externes ampliades de 15 a 23. No s’afigen referències a diapositives en els apunts.

Validació real amb JDK 24 i JUnit descarregat: 13 tests correctes en cada ZIP; l’error de restar en sumar produïx 2 errors i l’informe expected 5 / was -1; excloure zero del rang de notes produïx 1 error; modificar l’array original produïx 1 error. El test inicial i els 8 tests construïts amb els fragments progressius també compilen i passen en els dos idiomes. Es restaura i executa la bateria completa després de les variants. Astro compila 71 pàgines. La revisió visual en navegador i l’execució mitjançant els botons de VS Code queden pendents: no es va autoritzar iniciar el servidor. El CLI de JUnit sí que està verificat.

El professor sol·licita ampliar les explicacions dels mètodes principals prenent com a referència el seu document de Google: https://docs.google.com/document/d/1bIacVwr0B5GcT4v-oJK4wsgz5SpAFWt8jbR_y47Wwlw/edit?usp=sharing . Es va poder llegir mitjançant exportació de text. Es desenvolupen assertEquals, assertTrue, assertFalse, assertArrayEquals, assertNotNull i assertNull, amb la variant decimal, missatges opcionals i DisplayName. S’afigen les quatre anotacions de cicle de vida, corregint la possible confusió entre execució per classe i per test, un tercer esquema per idioma i quatre diapositives addicionals (27 en total). S’amplien els descarregables a 18 tests: 16 d’assercions i 2 de cicle de vida, amb ordres de compilació diferenciades per a l’exemple inicial i el complet. No s’incorporen mocks ni excepcions. README i traduccions es mantenen sincronitzats.

Validació de l’ampliació: 18 tests correctes per idioma; els dos tests de cicle de vida funcionen per separat. Es verificaren els comptadors de preparació i finalització i la seua execució després d’una asserció fallida. Les variants deliberades de suma, límit de nota, modificació de l’original i retorn de cadena buida en lloc de null es detecten. El primer test i les 11 proves construïdes amb els fragments i missatges passen en els dos idiomes. Els ZIP coincidixen amb els fonts i no contenen JAR ni classes compilades. Es verifiquen 556 enllaços/recursos de sis pàgines compilades, sis SVG de testing, paritat d’estructura entre idiomes, recursos de les dos presentacions i sintaxi dels seus scripts. Compilació de 71 pàgines correcta amb els avisos ja existents d’i18n i 404. La comprovació visual i l’execució mitjançant els botons de VS Code continuen pendents.

Decisió posterior: Testing és una unitat independent de huit pàgines; Funcions torna a tindre’n set. Reorganització i retirada del bloc descarregable documentades en testing-junit.ca.md.

## Revisió de diapositives confirmada

S’amplia la presentació amb exemples desenvolupats, esquemes i raonaments pas a pas, mantenint les dos llengües. Funcions té 29 diapositives i Testing 30. Totes les presentacions i recursos es traslladen a `public/diapositivas/` per a disposar d’URL directa i compartir-la en Aules. No afegir enllaços des dels apunts, navegació de Starlight ni visors. Esta decisió substituïx la ubicació externa de lliuraments anteriors.
