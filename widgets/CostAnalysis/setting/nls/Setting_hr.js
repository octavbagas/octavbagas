// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Postavi tekst za konfiguraciju:",generalSettings:{tabTitle:"Op\u0107e postavke",measurementUnitLabel:"Mjerna jedinica",currencyLabel:"Simbol mjerne jedinice",roundCostLabel:"Zaokru\u017eeni tro\u0161ak",projectOutputSettings:"Izlazne postavke projekta",typeOfProjectAreaLabel:"Vrsta podru\u010dja projekta",bufferDistanceLabel:"Veli\u010dina pojasa",csvReportExportLabel:"Dopusti korisniku izvoz izvje\u0161\u0107a o projektu",editReportSettingsBtnTooltip:"Uredi postavke izvje\u0161\u0107a",
roundCostValues:{twoDecimalPoint:"Dva decimalna zareza",nearestWholeNumber:"Najbli\u017ei cijeli broj",nearestTen:"Najbli\u017ea desetica",nearestHundred:"Najbli\u017ea stotica",nearestThousand:"Najbli\u017ea tisu\u0107ica",nearestTenThousands:"Najbli\u017eih deset tisu\u0107a"},reportSettings:{reportSettingsPopupTitle:"Postavke izvje\u0161\u0107a",reportNameLabel:"Naziv izvje\u0161\u0107a (neobavezno) :",checkboxLabel:"Prika\u017ei",layerTitle:"Naziv",columnLabel:"Oznaka",duplicateMsg:"Dvostruka oznaka"},
projectAreaType:{outline:"Obris",buffer:"Pojas"},errorMessages:{currency:"Neva\u017ee\u0107a valuta jedinice",bufferDistance:"Neva\u017ee\u0107a udaljenost pojasa",outOfRangebufferDistance:"Vrijednost bi trebala biti ve\u0107a od 0 i manja ili jednaka 100"}},projectSettings:{tabTitle:"Postavke projekta",costingGeometrySectionTitle:"Definiraj geografiju za tro\u0161kove (neobavezno)",costingGeometrySectionNote:"Napomena: konfiguracijom ovog sloja omogu\u0107it \u0107e se korisniku postavljanje jednad\u017ebi za tro\u0161kove predlo\u017eaka geoobjekata na temelju geografija.",
projectTableSectionTitle:"Mogu\u0107nost postavki spremanja/u\u010ditavanja projekta (neobavezno)",projectTableSectionNote:"Napomena: konfiguracijom svih tablica i slojeva omogu\u0107it \u0107e se korisniku spremanje/u\u010ditavanje projekta za kasniju upotrebu.",costingGeometryLayerLabel:"Sloj geometrije za tro\u0161kove",fieldLabelGeography:"Polje za ozna\u010davanje geografije",projectAssetsTableLabel:"Tablica sa sredstvima projekta",projectMultiplierTableLabel:"Tablica dodatnih tro\u0161kova mno\u017eitelja projekta",
projectLayerLabel:"Sloj projekta",configureFieldsLabel:"Konfiguriranje polja",fieldDescriptionHeaderTitle:"Opis polja",layerFieldsHeaderTitle:"Polje sloja",selectLabel:"Odaberi",errorMessages:{duplicateLayerSelection:"${layerName} je ve\u0107 odabran",invalidConfiguration:"Odaberite ${fieldsString}"},costingGeometryHelp:"\x3cp\x3ePrikazat \u0107e se poligonalni slojevi sa sljede\u0107im uvjetima: \x3cbr/\x3e \x3cli\x3e\tsloj mora imati mogu\u0107nost \u00e2\u20ac\u0153Upita\u00e2\u20ac\u009d\x3c/li\x3e\x3cli\x3e\tsloj mora imati polje GlobalID\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3ePolja niza i broj\u010dana polja odabranog \u00e2\u20ac\u0153Sloja geometrije za tro\u0161kove\u00e2\u20ac\u009d prikazat \u0107e se u padaju\u0107em izborniku \u00e2\u20ac\u0153Polje za ozna\u010davanje geografije\u00e2\u20ac\u009d.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3ePrikazat \u0107e se tablice sa sljede\u0107im uvjetima: \x3cbr/\x3e \x3cli\x3etablica mora imati mogu\u0107nost ure\u0111ivanja, i to \u00e2\u20ac\u0153Stvori\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Izbri\u0161i\u00e2\u20ac\u009d i \u00e2\u20ac\u0153A\u017euriraj\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3etablica mora imati \u0161est polja s to\u010dnom vrstom naziva i podataka:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (polje GUID)\x3c/li\x3e\x3cli\x3e\tCostEquation (polje niza)\x3c/li\x3e\x3cli\x3e\tscenarij (polje niza)\x3c/li\x3e\x3cli\x3e\tTemplateName (polje niza)\x3c/li\x3e\x3cli\x3e    GeographyGUID (polje GUID)\x3c/li\x3e\x3cli\x3e\tProjectGUID (polje GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3ePrikazat \u0107e se tablice sa sljede\u0107im uvjetima: \x3cbr/\x3e \x3cli\x3etablica mora imati mogu\u0107nost ure\u0111ivanja, i to \u00e2\u20ac\u0153Stvori\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Izbri\u0161i\u00e2\u20ac\u009d i \u00e2\u20ac\u0153A\u017euriraj\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3etablica mora imati pet polja s to\u010dnom vrstom naziva i podataka:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\topis (polje niza)\x3c/li\x3e\x3cli\x3e\tvrsta (polje niza)\x3c/li\x3e\x3cli\x3e\tvrijednost (plutaju\u0107e/dvostruko polje)\x3c/li\x3e\x3cli\x3e\tindeks tro\u0161ka (polje cijelog broja)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (polje GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3ePrikazat \u0107e se poligonski sloj sa sljede\u0107im uvjetima: \x3cbr/\x3e \x3cli\x3esloj mora imati mogu\u0107nost ure\u0111ivanja, i to \u00e2\u20ac\u0153Stvori\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Izbri\u0161i\u00e2\u20ac\u009d i \u00e2\u20ac\u0153A\u017euriraj\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3esloj mora imati pet polja s to\u010dnom vrstom naziva i podataka:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tProjectName (polje niza)\x3c/li\x3e\x3cli\x3e\topis (polje niza)\x3c/li\x3e\x3cli\x3e\tTotalassetcost (plutaju\u0107e/dvostruko polje)\x3c/li\x3e\x3cli\x3e\tGrossprojectcost (plutaju\u0107e/dvostruko polje)\x3c/li\x3e\x3cli\x3eGlobalID (polje GlobalID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
pointLayerCentroidLabel:"Sredi\u0161te to\u010dkastog sloja",selectRelatedPointLayerDefaultOption:"Odaberi",pointLayerHintText:"\x3cp\x3ePrikazat \u0107e se to\u010dkasti slojevi sa sljede\u0107im uvjetima: \x3cbr/\x3e \x3cli\x3e\tSloj mora imati polje \u201eProjectid\u201d (vrste GUID)\x3c/li\x3e\x3cli\x3e\tSloj mora imati mogu\u0107nosti ure\u0111ivanja, i to \u201eStvori\u201d, \u201eIzbri\u0161i\u201d i \u201eA\u017euriraj\u201d\x3c/li\x3e\x3c/p\x3e"},layerSettings:{tabTitle:"Postavke sloja",
layerNameHeaderTitle:"Naziv sloja",layerNameHeaderTooltip:"Popis slojeva na karti",EditableLayerHeaderTitle:"Mo\u017ee se ure\u0111ivati",EditableLayerHeaderTooltip:"Uklju\u010dite sloj i njegove predlo\u0161ke u widget za tro\u0161kove",SelectableLayerHeaderTitle:"Mo\u017ee se odabrati",SelectableLayerHeaderTooltip:"Geometrija iz geoobjekta mo\u017ee se upotrijebiti za generiranje nove stavke tro\u0161ka",fieldPickerHeaderTitle:"ID projekta (neobavezno)",fieldPickerHeaderTooltip:"Neobavezno polje (vrste niza) za pohranjivanje ID-a projekta",
selectLabel:"Odaberi",noAssetLayersAvailable:"Nema sloja sredstva na odabranoj web-karti",disableEditableCheckboxTooltip:"Ovaj sloj nema mogu\u0107nosti za ure\u0111ivanje",missingCapabilitiesMsg:"Ovom sloju nedostaju sljede\u0107e mogu\u0107nosti:",missingGlobalIdMsg:"Ovaj sloj nema polje GlobalId",create:"Stvori",update:"A\u017euriraj",deleteColumnLabel:"Izbri\u0161i",attributeSettingHeaderTitle:"Postavke atributa",addFieldLabelTitle:"Dodaj atribute",layerAttributesHeaderTitle:"Atributi sloja",
projectLayerAttributesHeaderTitle:"Atributi sloja projekta",attributeSettingsPopupTitle:"Postavke atributa sloja"},costingInfo:{tabTitle:"Informacije o tro\u0161kovima",proposedMainsLabel:"Predlo\u017eene glavne vrijednosti",addCostingTemplateLabel:"Dodavanje predlo\u0161ka tro\u0161kova",manageScenariosTitle:"Upravljanje scenarijima",featureTemplateTitle:"Predlo\u017eak geoobjekta",costEquationTitle:"Jednad\u017eba tro\u0161ka",geographyTitle:"Geografija",scenarioTitle:"Scenarij",actionTitle:"Radnje",
scenarioNameLabel:"Naziv scenarija",addBtnLabel:"Dodaj",srNoLabel:"Br.",deleteLabel:"Izbri\u0161i",duplicateScenarioName:"Duplicirani naziv scenarija",hintText:"\x3cdiv\x3ePodsjetnik: upotrijebite sljede\u0107e klju\u010dne rije\u010di\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: upotrebljava ukupni broj sredstava iste vrste u geografiji\x3c/li\x3e \x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: upotrebljava duljinu za sredstvo linije i podru\u010dje za sredstvo poligona\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: upotrebljava ukupnu duljinu za sredstvo linije i ukupno podru\u010dje za sredstvo poligona iste vrste u geografiji\x3c/li\x3e\x3c/ul\x3eMo\u017eete upotrijebiti funkcije kao \u0161to su:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eUredite jednad\u017ebu za tro\u0161kove prema potrebama va\u0161eg projekta.",
noneValue:"Nema",requiredCostEquation:"Neva\u017ee\u0107a jednad\u017eba za tro\u0161kove za ${layerName} : ${templateName}",duplicateTemplateMessage:"Postoji duplicirani unos predlo\u0161ka za ${layerName} : ${templateName}",defaultEquationRequired:"Potrebna je zadana jednad\u017eba za ${layerName} : ${templateName}",validCostEquationMessage:"Unesite valjanu jednad\u017ebu za tro\u0161kove",costEquationHelpText:"Uredite jednad\u017ebu za tro\u0161kove prema potrebama va\u0161eg projekta",scenarioHelpText:"Odaberite scenarij prema potrebama va\u0161eg projekta",
copyRowTitle:"Kopiranje reda",noTemplateAvailable:"Dodajte barem jedan predlo\u017eak za ${layerName}",manageScenarioLabel:"Upravljaj scenarijem",noLayerMessage:"Unesite barem jedan sloj u ${tabName}",noEditableLayersAvailable:"Slojevi moraju biti ozna\u010deni da se mogu ure\u0111ivati u kartici s postavkama sloja",updateProjectCostCheckboxLabel:"A\u017euriraj jednad\u017ebe projekta",updateProjectCostEquationHint:"Savjet: time \u0107e se omogu\u0107iti korisniku da a\u017eurira jednad\u017ebe tro\u0161kova imovine koja je ve\u0107 dodana u postoje\u0107e projekte s novim jednad\u017ebama definiranim u nastavku na temelju predlo\u0161ka geoobjekata, zemljopisa i scenarija. Ako kombinacija nije prona\u0111ena, bit \u0107e postavljena na zadanu jednad\u017ebu tro\u0161kova, tj. zemljopis i scenarij kao \u201eNi\u0161ta\u201d. U slu\u010daju uklonjenog predlo\u0161ka geoobjekata, tro\u0161ak \u0107e biti postavljena na 0."},
statisticsSettings:{tabTitle:"Dodatne postavke",addStatisticsLabel:"Dodavanje statistike",fieldNameTitle:"Polje",statisticsTitle:"Oznaka",addNewStatisticsText:"Dodavanje novih statistika",deleteStatisticsText:"Brisanje statistika",moveStatisticsUpText:"Pomicanje statistika prema gore",moveStatisticsDownText:"Pomicanje statistika prema dolje",selectDeselectAllTitle:"Odaberi sve"},projectCostSettings:{addProjectCostLabel:"Dodavanje dodatnog tro\u0161ka projekta",additionalCostValueColumnHeader:"Vrijednost",
invalidProjectCostMessage:"Neva\u017ee\u0107i unos tro\u0161kova projekta",additionalCostLabelColumnHeader:"Oznaka",additionalCostTypeColumnHeader:"Vrsta"},statisticsType:{countLabel:"Broj",averageLabel:"Prosje\u010dno",maxLabel:"Maksimum",minLabel:"Minimum",summationLabel:"Sa\u017eetak",areaLabel:"Poligon",lengthLabel:"Duljina"},_localized:{}}});