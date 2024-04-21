-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 21. 22:08
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

CREATE DATABASE forum COLLATE 'utf8mb4_general_ci';

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

USE forum;
--
-- Adatbázis: `forum`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `comments`
--

CREATE TABLE `comments` (
  `id` int(100) NOT NULL,
  `movieid` int(100) NOT NULL,
  `userid` int(100) NOT NULL,
  `content` varchar(2000) NOT NULL,
  `commentwhen` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `comments`
--

INSERT INTO `comments` (`id`, `movieid`, `userid`, `content`, `commentwhen`) VALUES
(1, 1, 125, 'Drive - Gázt! egy lenyűgözően stílusos és mesterien rendezett film, amely tele van feszültséggel és izgalommal. Ryan Gosling zseniális alakítása és a film vizuális megvalósítása egyszerűen lenyűgöző. A művészi lassú felépítés és a hihetetlenül feszült akció jól egyensúlyozva van egymással, így a film minden pillanata lebilincselő. Egy igazi modern klasszikus, amelyet mindenkinek látnia kell, aki szereti a mesterien megrendezett és atmoszférikus thrillereket!', '2024-03-25'),
(2, 1, 136, 'egy igazi stílus-ikon, amely megállíthatatlanul hajt előre, mint egy felgyorsított versenyautó az éjszakában. A film egyedülálló hangulata és zenei válogatása olyan élményt nyújt, amelyben minden pillanat tele van intenzitással és érzelemmel. Ryan Gosling lenyűgöző játéka és Nicolas Winding Refn rendezői zsenialitása együttesen alkotnak egy olyan művet, amely örök életre marad az emberben. A Drive nem csak film, hanem egy művészi alkotás, amely mélyen a nézőbe vésődik, és hosszú ideig ott marad.', '2024-03-25'),
(3, 1, 186, 'nem csupán egy egyszerű autós akciófilm, hanem egy lélekbe hatoló műalkotás, amely megmelengeti a szívünket és egyben összeszorítja a torkunkat. A karakterek mélysége és a cselekmény izgalmai egyaránt magukkal ragadnak minket, miközben a lenyűgöző vizuális megvalósítás és a remek zenék még inkább elmélyítik az élményt. Egy olyan film, amelyet újra és újra nézni lehet, minden alkalommal újabb rétegeket fedezve fel benne, és minden alkalommal meghatódva az emberi sorsok és érzelmek szépségétől és kegyetlenségétől.', '2024-03-25'),
(4, 2, 186, 'Az \"Amerikai Pszichó\" egy lenyűgözően provokatív és megosztó film, amelynek nézése után az ember hosszú ideig elgondolkodik és vitatkozik a jelentéseiről és üzeneteiről. Christian Bale elképesztő alakítása és az általa megformált Patrick Bateman karakter pszichotikus és kíméletlen világába való belépés olyan élményt nyújt, amely még a legbátrabbakat is megdöbbenti. A film tökéletesen egyensúlyoz a fekete humor és a borzongató dráma között, és egy olyan társadalomkritikát hordoz magában, amely még évtizedek múltán is aktuális marad. Az \"Amerikai Pszichó\" nem csupán egy film, hanem egy mélyen megrendítő és felkavaró művészeti alkotás, amelyet érdemes felfedezni és megvizsgálni.', '2024-03-25'),
(5, 2, 123, 'nem csupán egy film, hanem egy lélektani mélyrepülés az emberi elmébe és a társadalmi normák sötét oldalára. Christian Bale lenyűgöző alakítása olyan hátborzongatóan valósághűvé teszi Patrick Bateman karakterét, hogy az néha már kényelmetlenül közel kerül a valósághoz. A film látszólagos felületessége mögött rejlő mélységek és az egymást átlapozó rétegek igazi intellektuális csemegét jelentenek a nézőnek. Az \"Amerikai Pszichó\" nem csak egy film, hanem egy társadalomkritikai kordokumentum, amely örökre beíródik az emberi psziché sötét zugainak lexikonjába.', '2024-03-25'),
(6, 3, 112, 'A Batman filmek mindig is izgalmasak és inspirálóak voltak, és mindig várjuk az újabb részeket, hogy tovább mélyítsék a sötét lovag legendáját. A karakter mélysége és komplexitása, valamint az általa képviselt igazság és bosszú mindig aktuális témák, amelyek mélyen megszólítják a nézőket. A Batman filmek nemcsak izgalmas akciókat és kiváló karaktereket kínálnak, hanem gyakran mély társadalmi üzeneteket is hordoznak magukban. Minden új Batman film egy izgalmas utazás a Gotham City sötét utcáin, amely mindig újabb rétegeket fed fel a hős és a gonosz közötti örök harcról.', '2024-03-25'),
(7, 3, 116, 'A Batman filmek az idők során nemcsak az akció és a szuperhősök világának ikonikus részeivé váltak, hanem egyfajta művészi és filozófiai elemeket is hordoznak magukban. A karakter pszichológiája és morális dilemmái mélyen megérintik a nézőket, miközben a Gotham City sötét hangulata és káprázatos képi világa lenyűgözi őket. A Batman filmek egy olyan univerzumban kalandoznak, ahol a jó és a rossz közötti határ sokszor elmosódik, és ezáltal reflektálnak az emberi természet bonyolultságára és az igazság relativitására. Minden új Batman film egy izgalmas és gondolatébresztő utazás, amely mélyen a néző emlékezetébe vésődik.', '2024-03-25'),
(8, 4, 116, 'A Szárnyas Fejvadász univerzum mindig is lenyűgöző volt, és az újabb filmek mindig izgalommal teltek. Ridley Scott eredeti mesterműve óta a Szárnyas Fejvadász egy olyan ikonikus franchise lett, amely mélyen beépült a popkultúrába. A misztikus hangulat, a filozófiai töltet és a lenyűgöző vizuális megvalósítás mind hozzájárulnak ahhoz, hogy ezek a filmek maradandó élményt nyújtsanak a nézőknek. Minden új Szárnyas Fejvadász film egy újabb mélyreható utazás a mesterséges intelligencia és az emberi lélek körüli kétértelműségek birodalmában, amelyre az ember mindig kíváncsi és nyitott marad.', '2024-03-25'),
(9, 4, 107, 'A Szárnyas Fejvadász filmek egy olyan világba repítenek minket, ahol a tudomány és a kreatív képzelet találkozik. Ridley Scott kultikus alkotása óta a Szárnyas Fejvadász franchise egyfajta művészi és filozófiai utazás a jövőbe. A különböző filmek nemcsak kalandos történeteket mesélnek el, hanem mélyebb kérdéseket is felvetnek az emberi lét lényegéről, az élet és a tudat természetéről. A Szárnyas Fejvadász filmek egy olyan univerzumban kalandoznak, ahol a sci-fi és a noir elemek ötvöződnek, és ezáltal egyedi és feledhetetlen élményt nyújtanak minden nézőnek.', '2024-03-25'),
(10, 4, 128, '\"A Szárnyas Fejvadász franchise nemcsak egy sorozat film, hanem egy egész univerzum, amelyben elmerülhetünk. A különböző részek és folytatások minden alkalommal újabb kérdéseket vetnek fel az emberi létezésről és az ember és gép közötti határokról. A rendezők és írók művészi megközelítése és az elképesztő látványvilág mindig garantálja, hogy egy Szárnyas Fejvadász film megtekintése után mélyen elgondolkodunk a jövőről és az emberi természet rejtelmeiről. Egy ilyen univerzumba belépni minden alkalommal egy kaland, amelynek részesei lehetünk, és ami mindig friss perspektívákat kínál a világról és önmagunkról való gondolkodásra.', '2024-03-25'),
(11, 4, 114, 'A Szárnyas Fejvadász filmek az emberi lélek mélységeit és a technológia határait feszegetik olyan módon, ami egyszerre lenyűgöző és megdöbbentő. A világuk tele van misztikummal és sötét árnyakkal, miközben egyfajta látomásos jövőt festenek elénk. A karakterek bonyolultsága és a cselekmények komplexitása mindig magukkal ragadnak minket, és arra késztetnek, hogy elmélkedjünk az emberi létezés és az identitás fogalmáról. A Szárnyas Fejvadász filmek nem csupán szórakoztató alkotások, hanem mély filozófiai és etikai kérdéseket vetnek fel, amelyekre hosszú időn át gondolkodunk majd vissza.', '2024-03-25'),
(12, 5, 189, 'A \'Darabokban\' egy lenyűgöző és megrendítő alkotás, amely mélyen beleveti a nézőt az emberi lélek legmélyebb bugyraiba. A film egy tragikus eseményt követ, amely megrengeti egy közösség életét, miközben az egyes karakterek saját belső démonaikkal és fájdalmaikkal küzdenek. A színészi alakítások kivételesen erősek, és az érzelmi töltet minden pillanatban átütően hat. A rendezés és a forgatókönyvírás precíz és érzékeny, ami lehetővé teszi számunkra, hogy közelebbről megismerjük és megértjük az egyes karaktereket és sorsukat. A \'Darabokban\' nemcsak egy film, hanem egy művészeti alkotás, amely hosszú ideig hatással marad a nézőre, és mély nyomot hagy az emberi lélekben.\r\n\r\n\r\n\r\n\r\n', '2024-03-25'),
(13, 5, 159, 'A \'Darabokban\' egy lélekbe markoló és megrendítő film, amely mélyen belevisz minket egy családi dráma és egyben túlélési harc történetébe. A karakterek sorsának és kapcsolatainak bonyolult hálója szövi át a cselekményt, miközben a film apró részletekben felfedi az emberi lélek mélységeit és a megbocsátás lehetőségét. A rendezés és a színészi alakítások magas színvonalon mozognak, és minden pillanatban lebilincselik a nézőt. A \'Darabokban\' egy olyan film, amely után hosszú ideig elgondolkodunk az élet értelméről és az emberi kapcsolatok erejéről', '2024-03-25'),
(14, 6, 126, 'A \'Dűne\' második része egy izgalmas folytatása a lenyűgöző sci-fi univerzumnak, amelyet Frank Herbert klasszikus regénye teremtett meg. A folytatás tovább mélyíti a karaktereket és a világot, miközben újabb rétegeket fed fel a történetben és az univerzum nagyobb politikai és vallási konfliktusaiban. A rendezői és vizuális kivitelezés továbbra is lenyűgöző, és a színészi alakítások ismét kiválóak. A \'Dűne\' második része egy olyan film, amely újra elvarázsolja a nézőt és visszavezeti őket a sivatagok és a csillagok közötti lenyűgöző utazásra', '2024-03-25'),
(15, 6, 159, 'A \'Dűne\' második része tovább fűzi azt a gazdag és összetett világot, amelyet Frank Herbert alkotott meg, és amelyet a rendező és a színészek mesterségesen jelenítenek meg. A történet tovább sodor minket a politikai intrikák és a hatalmi harcok bonyolult hálójába, miközben további mélységeket fedezünk fel az univerzum és a karakterek mögött. Az akció jelenetek és a látványvilág lenyűgöző, és újra belehelyez minket ebbe a lenyűgöző, sivatagokkal és különleges kultúrákkal teli világba.', '2024-03-25'),
(16, 6, 180, 'A \'Dűne\' második része folytatja az első rész izgalmas és epikus történetét, újabb kihívások elé állítva a főhősöket és felfedve további rejtélyeket és veszélyeket az univerzum peremén. A rendezői munka és a látványvilág újra lenyűgöző, és az új szereplőkkel kibővült karaktergárda új színeket és dimenziókat hoz a történetbe. A \'Dűne\' második része egy olyan film, amely nemcsak a sci-fi rajongókat, hanem a mély és összetett történetek iránt érdeklődőket is lenyűgözi.', '2024-03-25'),
(17, 7, 124, 'A \'Harcosok Klubbja\' egy kultikus státuszú film, amely nemcsak izgalmas akciókkal és szórakoztató karakterekkel, hanem mélyebb filozófiai üzenetekkel is rendelkezik. A film az identitás kereséséről, az elfojtott indulatokról és a társadalmi lázadásról szól, miközben egy elképesztően izgalmas történetet mesél el. A rendezés és a színészi alakítások kiválóak, és minden egyes jelenet teljesen lebilincselő. A \'Harcosok Klubbja\' nem csupán egy film, hanem egy élmény, amely elgondolkodtat és inspirál.', '2024-03-25'),
(18, 7, 117, 'A \'Harcosok Klubbja\' egy lenyűgöző utazás a férfiasság és a lázadás világába, ahol az álarcok mögött rejlő igazi önmagunkat keresve próbáljuk megérteni a világot és saját helyünket benne. A film erős üzenettel bír a társadalmi normák és elvárások elleni lázadásról, miközben megkérdőjelezi az identitásunkat és az élet értelmét. A \'Harcosok Klubbja\' egy igazi kultikus alkotás, amely örök érvényű üzeneteket hordoz magában.', '2024-03-25'),
(19, 7, 103, 'A \'Harcosok Klubbja\' egy olyan film, amely hosszú idő után is mély benyomást kelt. Az izgalmas cselekmény, a karakterek összetettsége és a kiváló rendezés együtt alkotnak egy olyan művet, amely túlmutat az egyszerű akciófilmeken. A film kihívás elé állítja a nézőt, hogy gondolkozzon el az identitás, a társadalom és az emberi kapcsolatok kérdéseiről, miközben lebilincseli és magával ragadja a figyelmet.', '2024-03-25'),
(20, 8, 113, 'A \'Bosszúállók: Végtelen háború\' lenyűgöző katarzist kínál a képernyőn, ahogy a Marvel Univerzum ikonikus szuperhősei összecsapnak a legnagyobb fenyegetéssel, amivel valaha szembenéztek. A film nem csupán akcióban gazdag, hanem érzelmi mélységet is hordoz, ahogy a karakterek kénytelenek szembenézni a veszteségekkel és a döntéseik következményeivel. A vizuális effektek lenyűgözőek, a cselekmény pedig izgalmas és fordulatos. A \'Végtelen háború\' egy epikus mű, amely minden szuperhősről és rajongóról emlékezetes nyomot hagy.', '2024-03-25'),
(21, 8, 112, 'A \'Bosszúállók: Végtelen háború\' a Marvel filmuniverzum legnagyobb és legambiciózusabb alkotása, amelyben minden eddigi történés egy grandiózus klimaxba torkollik. A film nemcsak egy szórakoztató szuperhősfilm, hanem egy évtizedeket átfogó epikus történet csúcspontja, amely összeköti a múltat, a jelent és a jövőt. A karakterek fejlődése, az izgalmas csaták és a váratlan fordulatok mind azt bizonyítják, hogy a \'Végtelen háború\' valóban méltó befejezése ennek a hihetetlen kalandnak.', '2024-03-25'),
(22, 8, 171, 'A \'Bosszúállók: Végtelen háború\' egy elképesztően grandiózus és emlékezetes filmélmény, amely tele van akcióval, humorral és érzelmi hullámokkal. A karakterek összecsapása és az ősi gonosz elleni harc izgalmas és felejthetetlen pillanatokat kínál a nézőknek. A rendezés és a vizuális effektek magas szinten állnak, ami egy lenyűgözően látványos élményt eredményez. A \'Végtelen háború\' nemcsak egy film, hanem egy emlékezetes utazás a képernyőn, amely örök életre marad a rajongók szívében.', '2024-03-25'),
(23, 8, 120, 'A \'Bosszúállók: Végtelen háború\' olyan film, amely minden elvárást felülmúl. A karakterek összehangolt csapata és az epikus csaták nemcsak izgalmasak, de érzelmi mélységet is hordoznak. A film egyszerre lenyűgöző és megható, miközben egy hihetetlenül összetett és összefonódó történetet mesél el a szuperhősök és a gonoszok közötti végső küzdelemről. A \'Végtelen háború\' egy hatalmas szerelmi nyilatkozat a rajongók felé, egy olyan film, amely összekapcsolja és megkoronázza a Marvel Univerzumot', '2024-03-25'),
(24, 9, 133, 'A \'Csillagok között\' egy lenyűgöző utazás a tudomány és az érzelmek határán. Christopher Nolan rendezése és a fantasztikus színészi alakítások együttesen alkotnak egy olyan filmet, amely nemcsak a kalandra vágyóknak szól, hanem azoknak is, akik az emberi lélek mélységeit szeretnék felfedezni. A film vizuálisan lenyűgöző és érzelmileg mély, hagyományos sci-fi elemeket ötvözve egy eredeti és megindító történettel. Az utolsó percig leköt és elgondolkodtat, és olyan kérdéseket vet fel, amelyeket hosszú ideig magunkkal viszünk.', '2024-03-25'),
(25, 9, 116, 'A \'Csillagok között\' egy olyan film, amely nem csak a tudományos fantasztikum rajongóinak nyújt felejthetetlen élményt, hanem bárki számára, aki hajlandó elmerülni egy kalandban, ami az emberi vágyak és érzelmek határain túlra repít. A rendező, Christopher Nolan, ismételten bebizonyítja, hogy képes ötvözni az izgalmas cselekményt az érzelmi mélységgel, miközben a látványvilág lélegzetelállító. A \'Csillagok között\' egy olyan utazás, amelyet nemcsak nézni kell, hanem megélni és átélni.', '2024-03-25'),
(26, 9, 175, 'A \'Csillagok között\' egy lenyűgöző és filozófikus film, amely egy távoli jövőbe repít minket, miközben a család, a szeretet és az emberiség túlélése körül forognak a történet szálai. A film nemcsak izgalmas és látványos, hanem mélyen megragadja az emberi lélek legmélyebb rétegeit és vágyait is. A karakterek és a cselekmény egyaránt magukkal ragadják a nézőt, és egy olyan utazásra invitálnak, amelynek hatása hosszú időn át elkísér minket.', '2024-03-25'),
(27, 10, 126, 'Az \'Éjjeli féreg\' egy lenyűgözően sötét és kényelmetlenül megindító film, amely mélyen belemegy az emberi psziché legmélyebb bugyraiba. A karakterek összetettsége és a rendezői megvalósítás együttesen teremtenek egy elgondolkodtató és érzelmileg intenzív élményt, amelynek hatása hosszú ideig elkísér minket a film után. A vizuális stílus és a színészi alakítások kiválóak, és együttesen hozzájárulnak a film lenyűgöző atmoszférájához.', '2024-03-25'),
(28, 10, 182, 'Az \'Éjjeli féreg\' egy olyan film, amely nem hagyja közömbösen a nézőt. A sötét és zavarbaejtő történet, valamint a karakterek kusza érzelmi világa megfogja az embert, és magával ragadja a kegyetlen valóságba. A rendezés és a színészi alakítások olyan mélységet adnak a történetnek, hogy az ember hosszú időn át gondolkodik el azon, amit látott. Az \'Éjjeli féreg\' egy igazi művészfilm, amely nem hagyja közömbösen a nézőt, hanem mélyen a lelkébe hatol.', '2024-03-25'),
(29, 11, 174, 'Az \'Oppenheimer\' egy izgalmas és mélyen megrázó film, amely bemutatja az emberiség egyik legfontosabb történelmi pillanatát, az atombomba fejlesztését. A rendező, Christopher Nolan, képességei és elkötelezettsége alapján nagy várakozásokkal tekintek erre a projektre. A film remek lehetőséget kínál arra, hogy mélyebben megértsük a tudomány és a hatalom összetett kapcsolatát, miközben elgondolkodunk az emberiség sorsáról és felelősségéről.', '2024-03-25'),
(30, 11, 128, 'Az \'Oppenheimer\' egy olyan film, amely a tudomány és a morál kérdéseit veti fel azáltal, hogy bemutatja Robert Oppenheimer és csapata munkáját az atombomba kifejlesztésében. A film ígéretesnek tűnik a rendező, Christopher Nolan keze alatt, aki ismert a bonyolult és mély történetek megrendezésében. Ez a film lehetőséget kínál arra, hogy átfogóbban megértsük az emberi döntések mögött rejlő etikai és morális dilemmákat.', '2024-03-25'),
(31, 11, 164, 'Az \'Oppenheimer\' egy várva várt film, amely bemutatja az atombomba megalkotásának történetét és az azon dolgozó emberek belső küzdelmeit. Christopher Nolan rendezőként ígéretes választásnak tűnik, hogy érzelmileg megrázó és gondolkodásra késztető módon tárja elénk ezt a fontos történelmi eseményt. A film valószínűleg lehetőséget fog nyújtani a nézőknek arra, hogy jobban megértsék az emberiség múltját és jövőjét egyaránt.', '2024-03-25'),
(32, 12, 162, 'A \'Taxi Sofőr\' egy lenyűgöző és megrázó film, amely egy taxi sofőr mindennapjait követi New York forgalmas utcáin. A rendezői és színészi munka kiválóan összehangolt, és a karakterek élethűsége elvarázsolja a nézőt. A film nemcsak egy utazás a város zajos éjszakáiban, hanem egy mélyebb betekintés a modern városi élet és az emberi magány körüli kérdésekbe is. A \'Taxi Sofőr\' egy érzelmi hullámvasút, amely hosszú ideig elkíséri a nézőt a moziból.', '2024-03-25'),
(33, 12, 166, 'A \'Taxi Sofőr\' egy stílusos és lenyűgöző film, amely mélyen átélhető karakterekkel és egy izgalmas cselekménnyel rendelkezik. A rendezői munka és a látványvilág magával ragadó, és az éjszakai New York vibráló atmoszférája tökéletesen átjön a vásznon. A film folyamatosan fenntartja a feszültséget és az érdeklődést, miközben elgondolkodtató kérdéseket vet fel az emberi kapcsolatokról és az elidegenedésről.', '2024-03-25'),
(34, 12, 170, 'A \'Taxi Sofőr\' egy intenzív és szuggesztív film, amely egy különleges és néha veszélyes világba kalauzolja el a nézőt. A karakterek gazdagok és mélyek, a történet pedig tele van váratlan fordulatokkal és izgalmas pillanatokkal. A film nemcsak egy egyszerű utazás a taxi hátsó ülésén, hanem egy mélyebb utazás is, amely során a nézők elgondolkodnak az élet és a városi létezés rejtett aspektusairól.', '2024-03-25'),
(35, 12, 166, 'A \'Taxi Sofőr\' egy lenyűgöző moziélmény, amely tele van izgalmas karakterekkel és érzelmi hullámvasúttal. A film képes egy egyszerű taxisofőr mindennapi életét ábrázolni olyan mélységgel és összetettséggel, amely megragadja a néző figyelmét az első perctől az utolsóig. A rendező és a színészek együttesen alkotnak egy olyan művet, amely hosszú időre belevési magát a néző emlékezetébe.', '2024-03-25'),
(36, 1, 201, 'asd', '2024-04-16'),
(37, 1, 201, 'asd2', '2024-04-16'),
(38, 1, 201, 'asd2asd', '2024-04-16'),
(39, 1, 201, 'asdasdasda', '2024-04-16'),
(40, 6, 201, 'asdasd', '2024-04-18'),
(41, 1, 206, 'nogyonjooooo', '2024-04-19');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `movies`
--

CREATE TABLE `movies` (
  `id` int(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `image` varchar(100) NOT NULL,
  `coverimage` varchar(100) NOT NULL,
  `rating` int(32) NOT NULL,
  `ganre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `movies`
--

INSERT INTO `movies` (`id`, `title`, `description`, `image`, `coverimage`, `rating`, `ganre`) VALUES
(1, 'Drive-Gázt!', 'Driver (Ryan Gosling) nappal autós kaszkadőrként égeti a gumit Hollywood-ban, de ez csak a második műszak, főállásban éjszakai rablásoknál segédkezik, mint a menekülési útvonalat biztosító sofőr. Nem hétköznapi szakmájában ő a legkeresettebb, köszönhetően speciális tudásának: hajszálpontosan ismeri a város labirintusszerű utcáit, fejében van egész Los Angeles térképe. Melóit az ügynöke, Shannon (Bryan Cranston) hajtja fel, aki valójában a nagy áttörésre készül: építeni egy autót Drivernek, hogy profi versenyen indulhasson, rendes versenypályán. A buliba bevonja Bernie Rose-t (Albert Brooks), aki valamikor filmproducerként kezdte, azóta kispályás gengszter. Miután Bernie látta Drivert akció közben a pályán, ragaszkodik hozzá, hogy gyerekkori barátja, Nino (Ron Perlman) is beszálljon az üzletbe.', '/web-projekt/kepek/drive.jpg', '/web-projekt/kepek/cover/drive.jpg', 3, 'action, adventure'),
(2, 'Amerikai pszichó', 'Patrick Bateman egy gazdag és befolyásos Wall Street-i befektető fia, igazi aranyifjú. Könnyen halad előre az apja által kitaposott úton, megszállottja a pénznek, a sikernek, a divatnak és a stílusnak. Igazi társasági ember, központi figura, amolyan kétlábon járó sikersztori. Bateman emellett minden idők legkegyetlenebb és leggátlástalanabb sorozatgyilkosa is. Ismerősöket és ismeretleneket mészárol le különös kegyetlenséggel, nem válogatva az eszközökben - kés, láncfűrész, fegyver, nála egyre mePatrick Bateman egy gazdag és befolyásos Wall Street-i befektető fia, igazi aranyifjú. Könnyen halad előre az apja által kitaposott úton, megszállottja a pénznek, a sikernek, a divatnak és a stílusnak. Igazi társasági ember, központi figura, amolyan kétlábon járó sikersztori. Bateman emellett minden idők legkegyetlenebb és leggátlástalanabb sorozatgyilkosa is. Ismerősöket és ismeretleneket mészárol le különös kegyetlenséggel, nem válogatva az eszközökben - kés, láncfűrész, fegyver, nála egyre megy. Indítéka nincs - hacsak az ölés gyönyöre nem számít annak. A rendőrség sötétben tapogatózik, eleinte senki nem gondol arra, hogy a legbefolyásosabb körökben kellene keresni az egyes számú közellenséget.', '/web-projekt/kepek/americanpsycho.jpg', '/web-projekt/kepek/cover/americanpsycho.jpg', 2, 'horror'),
(3, 'Batman', 'Batman (Robert Pattinson) már két éve rója Gotham City utcáit, és üldözi a város gonosztevőit – így hát egyre mélyebbre merül a sikátorok sötétségébe. Már alig néhány emberben bízhat: mindenfelől korrupt hivatalnokok és romlott nagymenők veszik körül. csupán Alfred Pennyworth-szel (Andy Serkis) és Jame Gordon hadnaggyal (Jeffrey Wright) oszthatja meg a titkait. Egyedül maradt: rajta kívül nincs más, aki bosszút állhatna a város lakóinak sérelmeiért.\nEgy gyilkos épp Gotham elitjét veszi célba, éBatman (Robert Pattinson) már két éve rója Gotham City utcáit, és üldözi a város gonosztevőit – így hát egyre mélyebbre merül a sikátorok sötétségébe. Már alig néhány emberben bízhat: mindenfelől korrupt hivatalnokok és romlott nagymenők veszik körül. csupán Alfred Pennyworth-szel (Andy Serkis) és Jame Gordon hadnaggyal (Jeffrey Wright) oszthatja meg a titkait. Egyedül maradt: rajta kívül nincs más, aki bosszút állhatna a város lakóinak sérelmeiért.\nEgy gyilkos épp Gotham elitjét veszi célba, és a szadista machinációi után hátrahagyott titokzatos nyomok a világ legnagyobb detektívjét a város alvilágába vezetik. Ott találkozik Selina Kyle-lal, vagyis Macskanővel (Zoë Kravitz), Oswald Cobblepottal, a Pingvinnel (Colin Farrell), Carmine Falcone-nal (John Turturro) és Edward Nashtonnal, Rébusszal (Paul Dano). A bizonyítékok azonban a saját otthona felé vezetik, és minél jobban szűkül a gyanúsítottak köre, annál félelmetesebbé válik.\nBatmannek új szövetségeket kell kötnie, le kell lepleznie az igazi bűnöst, és meg kell szabadítania Gothamet a hatalmaskodás és a korrupció pestisétől.\n\nAz egyik legmenőbb képregényhős fantasztikus szereposztással tér vissza, és közben látványosabb, izgalmasabb és keményebb, mint valaha.', '/web-projekt/kepek/batman.jpg', '/web-projekt/kepek/cover/batman.jpg', 2, 'action'),
(4, 'Szárnyas fejvadász 2049', 'Harminc évvel Deckard (Harrison Ford) eltűnése után K (Ryan Gosling), a Los Angeles-i rendőrség rendőrtisztje egy olyan rég eltemetett titkot tár fel, amely fenekestül fordíthatja fel a világ aktuális társadalmi berendezkedését. Bár 2049-ben az emberiség korszerűbb replikánsokkal dolgoztat, a korábbi, hosszú élettartalmú androidokkal továbbra is rengeteg a baj. K rájön, hogy a replikánsokat felügyelő szárnyas fejvadászoknak fontos szerepük van ebben a titokban, és az emberiség jövője múlik azon, hogy Rick Deckardot (Harrison Ford) megtalálja.', '/web-projekt/kepek/bladerunner.jpg', '/web-projekt/kepek/cover/bladerunner.jpg', 2, 'sci-fi, action'),
(5, 'Darabokban', 'Davis sikeres befektetési bankár, szép feleséggel, házzal, autóval. Egy nap azonban autóbalesetben elveszíti nejét. Sajátos módon dolgozza fel a veszteséget: ahelyett, hogy összetörne, tovább éli az életét. Az érzéseit egy büféautomata üzemeltetőjének írott panaszleveleiben kezdi kibeszélni, míg a frusztrációját rossz háztartási gépek szétszedésében éli ki. Davis levelei felkeltik az ügyfélszolgálaton dolgozó Karen érdeklődését, és a két idegen között valószerűtlen kapcsolat kezd kibontakozni.', '/web-projekt/kepek/demolition.jpg', '/web-projekt/kepek/cover/demolition.jpg', 3, 'adventure, drama'),
(6, 'Dűne: Második rész', 'A távoli jövőben, a bolygóközi királyságok korában játszódó történetben két nagyhatalmú uralkodóház harcol az Arrakis bolygó feletti hatalomért, mert az ismert univerzumban egyedül az itteni végtelen sivatagban bányászható az a fűszer, amely lehetővé teszi a csillagközi utazást.\n\nA Harkonnenek ura kiirtatta az Atreides családot. De Paul Atreides herceg (Timothée Chalamet) megmenekült: a pusztaságban bujkál egy titokzatos, nomád nép, a fremenek között, ahol megismerkedik egy lánnyal, Csanival (Zendaya). Az a sorsa, hogy bosszút álljon a családjáért, háborúba vezesse a hozzá hű seregeket. Döntenie kell, hogy élete nagy szerelmét választja-e, vagy beteljesíti a végzetét. Az univerzum sorsa múlik azon, hogy mit határoz: és végül olyan útra lép, amely megváltoztathatja azt a szörnyű jövőt, amelyet egyedül ő lát előre.', '/web-projekt/kepek/dune.jpg', '/web-projekt/kepek/cover/dune.jpg', 4, 'sci-fi, action, adventure, fantasy'),
(7, 'Harcosok klubbja', 'Amerika nagyvárosainak pincéiben egy titkos szervezet működik: ha egy éjjel az utca összes nyilvános telefonja összetörik, ők jártak ott; ha egy köztéri szobor óriás fémgömbje legurul talapzatáról, és szétrombol egy gyorsétkezdét, az az ő művük; ha egy elegáns bank parkolójának összes autóját rettentően összerondítják a galambok - az sem véletlen. Vigyáznak a leveleinkre, átveszik telefonüzeneteinket, kísérnek az utcán: és még csak készülnek a végső dobásra: a nagy bummra... Pedig az egészet csak két túlzottan unatkozó jóbarát találta ki: azzal kezdték, hogy rájöttek, nincs jobb stresszoldó, mint ha alaposan megverik egymást. Pofonokat adni jó. Pofonokat kapni jó. Számukra ez a boldog élet szabálya.\n\nA történetet egy jól szituált, de cinikus és kiábrándult fiatalember meséli el. Nevét nem tudjuk, néha Jacknek (Edward Norton) hívja magát. Önismereti terápiás csoportokba jár, mégsem kerül közelebb valódi énjéhez és embertársaihoz. Véletlenül összeismerkedik Tylerrel (Brad Pitt), akiben felfedezi hiányzó tulajdonságait. Tyler egy különös, titkos társaság megalapításával próbál megszállottan úrrá lenni a világ káoszán. A Harcosok Klubjának híre hamar elterjed a túl hamar meggazdagodott menedzser nemzedék tagjai között, akik egyre intenzívebb élményekre várnak. Az egyetlen, aki a két rokonlélek közé ékelődik, egy nő. Marla (Helena Bonham Carter) kétségbe vonja Tyler erőltetetten férfias ideológiáját.', '/web-projekt/kepek/fightclub.jpg', '/web-projekt/kepek/cover/fightclub.jpg', 5, 'adventure, action'),
(8, 'Bosszúállók: Végtelen háború\r\n', 'A Marvel mozis univerzumának egészét felölelő, tíz év eseményeinek tetőpontját jelentő Bosszúállók: Végtelen háborúban minden idők legnagyobb és leghalálosabb leszámolására kerül sor. A Bosszúállóknak és szövetségeseiknek mindent kockára kell tenniük, hogy megfékezzék a nagy erejű Thanost, aki egy szemvillanás alatt elpusztíthatja a világot.', '/web-projekt/kepek/infinitywar.jpg', '/web-projekt/kepek/cover/infinitywar.jpg', 3, 'sci-fi, action, adventure'),
(9, 'Csillagok között', 'A legendásan titkolózó rendező új sci-fijéről annyit már tudni, hogy csupa sztár működik közre benne és a csillagok között játszódik. Tudósok felfedeznek egy féreglyukat az űrben, és egy csapatnyi felfedező meg kalandor nekivág, hogy átlépje mindazokat a határokat, amelyeket addig áthághatatlannak hittünk: túl akarnak lépni téren és időn.', '/web-projekt/kepek/interstellar.jpg', '/web-projekt/kepek/cover/interstellar.jpg', 5, 'sci-fi, adventure'),
(10, 'Éjjeli féreg', 'Az amerikai álom elérhetetlen távolságba került Lou Bloom (Jake Gyllenhaal) generációja számára. A munkanélküliség, nagyratörő célok és az elkeseredett próbálkozás olyan útra sodorja a férfit, ami a mélybe vezet. Minden éjjel, míg a város az igazak álmát alussza, véres sztorikra éhes mini stábok, gyors kocsikkal, kamerákkal és harsogó rendőrségi rádiókkal felszerelve portyáznak a terpeszkedő Los Angeles szennyes utcáin. A rendőrséget megelőzve egyik tetthelyről a másikra rajzanak és a felvételeket a televízióknak eladva váltják dollárra a vért. Lou megmámorosodik a nagy pénzzel kecsegtető lehetőségtől és gátlástalanul gázol át mindenen és mindenkin a sötétben.', '/web-projekt/kepek/nightcrawler.jpg', '/web-projekt/kepek/cover/nightcrawler.jpg', 4, 'drama, adventure'),
(11, 'Oppenheimer', 'A film J. Robert Oppenheimer fizikusról szól, aki kollégáival - köztük a magyar származású Teller Edével és Szilárd Leóval - a Manhattan Terv vezetőjeként az első atomfegyver létrehozásáért felelős. A találmány a II. világháborúban megváltoztatta a történelem menetét, és a bombának köszönhető valószínűleg az is, hogy a 20. század második felében a két nagy szuperhatalom szembenállása, a hidegháború nem fajult valódi fegyveres konfliktussá.', '/web-projekt/kepek/oppenheimer.jpg', '/web-projekt/kepek/cover/oppenheimer.jpg', 3, 'historical, adventure'),
(12, 'Taxi sofőr', 'Travis Bickle, a Vietnamot megjárt veterán nem leli helyét New Yorkban. Éjszakai taxisként dolgozik, aki napközben álmatlanságtól gyötörve a tévét bámulja, éjjel pedig furábbnál furább figurákat fuvaroz. Nőttön nő benne a vágy, hogy ne csak dühöngjön a világ mocskosságán, hanem változtasson is rajta. Sikertelenül közeledik egy szép politikai aktivista lányhoz, hasztalan győzködi a vidékről feljött, kiskorú prostituáltat, hogy térjen jó útra, hiába üzeni a polgármesterjelöltnek, hogy takarítsa el az utcákról a szemetet. Úgy érzi, neki kell cselekednie: kopasz fején kis sörénnyel, dagadóra gyúrt izmokkal, pisztollyal a kezében elindul, hogy rendet tegyen?\nA film 1976-ban elnyerte a Cannes-i Filmfesztivál nagydíját, az Arany Pálmát.', '/web-projekt/kepek/taxidriver.jpg', '/web-projekt/kepek/cover/taxidriver.jpg', 3, 'drama');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rates`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `movie_id` int(11) DEFAULT NULL,
  `rating` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `rates`
--

INSERT INTO `ratings` (`id`, `user_id`, `movie_id`, `rating`) VALUES
(2, 207, 1, 3),
(3, 207, 3, 5),
(4, 207, 10, 4),
(5, 204, 1, 4),
(6, 204, 10, 2);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `token` varchar(250) NOT NULL DEFAULT '0',
  `session` varchar(250) NOT NULL,
  `profileimage` varchar(100) NOT NULL DEFAULT '../kepek/profile/default.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `username`, `fullname`, `email`, `password`, `token`, `session`, `profileimage`) VALUES
(101, 'kanna', 'Kovács Anna', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(102, 'pnagy', 'Nagy Péter', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(103, 'kissi', 'Kiss István', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(104, 'mszabo', 'Szabó Mária', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(105, 'h.gabor', 'Horváth Gábor', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(106, 'ztoth', 'Tóth Zsuzsanna', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(107, 'vjani', 'Varga János', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(108, 'kfarkas', 'Farkas Katalin', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(109, 'fpapp', 'Papp Ferenc', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(110, 'beva', 'Balázs Éva', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(111, 'kvirag', 'Kis Virág', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(112, 'abalogh', 'Balogh Attila', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(113, 'bkrisztina', 'Barta Krisztina', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(114, 'tfodor', 'Fodor Tamás', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(115, 'emolnar', 'Molnár Éva', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(116, 'gpat', 'Pataki Gergő', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(117, 'zkisfaludy', 'Kisfaludy Zsófia', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(118, 'lhuszar', 'Huszár László', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(119, 'snovak', 'Novák Szilvia', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(120, 'gbudai', 'Budai Gábor', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(121, 'zlaszlo', 'László Zsolt', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(122, 'keszter', 'Katona Eszter', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(123, 'bferenc', 'Barna Ferenc', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(124, 'julia', 'Király Júlia', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(125, 'dkozma', 'Kozma Dániel', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(126, 'kkrisztina', 'Kovács Krisztina', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(127, 'tistvan', 'Takács István', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(128, 'tanna', 'Török Anna', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(129, 'pfekete', 'Fekete Péter', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(130, 'dlakatos', 'Lakatos Dóra', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(131, 'kovacs', 'Kovács István', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(132, 'bakos', 'Bakos Adrienn', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(133, 'gsimon', 'Simon Gábor', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(134, 'zmeszaros', 'Mészáros Zsófia', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(135, 'bfulop', 'Fülöp Balázs', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(136, 'bboglarka', 'Major Boglárka', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(137, 'bmolnar', 'Molnár Béla', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(138, 'apap', 'Pap Ágnes', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(139, 'bgergely', 'Balog Gergely', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(140, 'kbiro', 'Bíró Katalin', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(141, 'anemeth', 'Németh Attila', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(142, 'amagyar', 'Magyar Anna', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(143, 'btamas', 'Barta Tamás', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(144, 'pdora', 'Pintér Dóra', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(145, 'bferenc', 'Budai Ferenc', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(146, 'kmeszaros', 'Mészáros Katalin', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(147, 'jmolnar', 'Molnár János', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(148, 'bzsofia', 'Bakos Zsófia', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(149, 'gpapp', 'Papp Gábor', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(150, 'eszter', 'Sipos Eszter', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(151, 'kkrisztian', 'Fekete Krisztián', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(152, 'pvarga', 'Varga Petra', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(153, 'ztibor', 'Tóth Zoltán', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(154, 'zszuzsa', 'Nagy Zsuzsa', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(155, 'ktamas', 'Kiss Tamás', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(156, 'ktakacs', 'Takács Katalin', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(157, 'bpeter', 'Balogh Péter', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(158, 'esandor', 'Sándor Éva', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(159, 'klaszlo', 'Kovács László', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(160, 'kzsofia', 'Kovács Zsófia', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(161, 'mfeher', 'Fehér Márton', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(162, 'kvarga', 'Varga Katalin', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(163, 'asimon', 'Simon András', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(164, 'bmarta', 'Bakos Márta', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(165, 'bzoltan', 'Balogh Zoltán', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(166, 'zszuszanna', 'Molnár Zsuzsanna', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(167, 'gszabo', 'Szabó Gábor', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(168, 'keniko', 'Kovács Enikő', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(169, 'zpeter', 'Tóth Péter', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(170, 'kieniko', 'Kiss Enikő', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(171, 'bgabor', 'Balogh Gábor', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(172, 'pandrea', 'Pap Andrea', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(173, 'nmolnar', 'Molnár Norbert', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(174, 'katalin', 'Nagy Katalin', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(175, 'kgabor', 'Kis Gábor', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(176, 'zszuzsa', 'Fehér Zsuzsa', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(177, 'btakacs', 'Takács Béla', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(178, 'andrea', 'Szabó Andrea', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(179, 'kbence', 'Kovács Bence', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(180, 'jtoth', 'Tóth Judit', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(181, 'kmarton', 'Kis Márton', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(182, 'bzsolt', 'Balogh Zsolt', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(183, 'emeszaros', 'Mészáros Eszter', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(184, 'kzoltan', 'Kiss Zoltán', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(185, 'zszuzsa', 'Fekete Zsuzsa', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(186, 'bgabor', 'Bakos Gábor', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(187, 'nandrea', 'Nagy Andrea', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(188, 'kmarta', 'Kovács Márta', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(189, 'pistvan', 'Pataki István', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(190, 'bkata', 'Balogh Kata', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(191, 'gtoth', 'Tóth Gergő', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(192, 'njudit', 'Nagy Judit', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(193, 'kispeter', 'Kiss Péter', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(194, 'keva', 'Kovács Éva', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(195, 'zzsolt', 'Takács Zsolt', '', '', '', '', '/web-projekt/kepek/profile/default.png'),
(201, 'admin', 'Adminisztrátor', '', 'c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec', '', '', '/web-projekt/kepek/profile/default.png');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `rates`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `movie_id` (`movie_id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT a táblához `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT a táblához `rates`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=208;


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
