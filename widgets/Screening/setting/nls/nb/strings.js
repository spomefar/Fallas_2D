﻿///////////////////////////////////////////////////////////////////////////
// Copyright � Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define({
  "units": {
    "areaSquareFeetUnit": "Kvadratfot",
    "areaAcresUnit": "Dekar",
    "areaSquareMetersUnit": "Kvadratmeter",
    "areaSquareKilometersUnit": "Kvadratkilometer",
    "areaHectaresUnit": "Hektar",
    "areaSquareMilesUnit": "Kvadratmiles",
    "lengthFeetUnit": "Fot",
    "lengthMilesUnit": "Miles",
    "lengthMetersUnit": "Meter",
    "lengthKilometersUnit": "Kilometer"
  },
  "analysisTab": {
    "analysisTabLabel": "Analyse",
    "selectAnalysisLayerLabel": "Analyselag",
    "addLayerLabel": "Legg til lag",
    "noValidLayersForAnalysis": "Finner ingen gyldige lag i det valgte webkartet.",
    "noValidFieldsForAnalysis": "Finner ingen gyldige felt i det valgte webkartet. Fjern det valgte laget.",
    "allowGroupingLabel": "Grupper geoobjekter etter felt med samme verdi",
    "groupingHintDescription": "Hint: Som standard blir alle geoobjekter med samme verdi for de valgte feltene gruppert slik at de vises som en enkelt oppføring i rapporten. Deaktiver alternativet for gruppering etter like attributter for å vise en oppføring for hvert geoobjekt i stedet.",
    "addLayersHintText": "Tips: Velg hvilke lag og felter som skal tas med i analysen og rapporten",
    "queryCapabilityHintText": "Bare lag med spørringsfunksjoner vises",
    "addLayerNameTitle": "Lagnavn",
    "addFieldsLabel": "Legg til felt",
    "addFieldsPopupTitle": "Velg felter",
    "addFieldsNameTitle": "Feltnavn",
    "aoiToolsLegendLabel": "Interesseområdeverktøy",
    "aoiToolsDescriptionLabel": "Velg og angi etikett for tilgjengelige verktøy for å opprette interesseområdet.",
    "placenameLabel": "Stedsnavn",
    "drawToolsLabel": "Velg tegneverktøy",
    "uploadShapeFileLabel": "Last opp en shapefil",
    "coordinatesLabel": "Koordinater",
    "coordinatesDrpDwnHintText": "Tips: Velg enhet for visning av angitte polygondrag",
    "coordinatesBearingDrpDwnHintText": "Tips: Velg peiling for visning av angitte polygondrag",
    "allowShapefilesUploadLabel": "Tillat brukere å laste opp shapefiler som skal tas med i analysen",
    "allowShapefilesUploadLabelHintText": "Tips: Legg til et alternativ i Rapport-kategorien, der brukerne kan laste opp sine egne data som en shapefil og ta den med i analyserapporten",
    "allowVisibleLayerAnalysisLabel": "Ikke analyser eller rapporter resultater for lag som ikke er synlige",
    "allowVisibleLayerAnalysisHintText": "Tips: Lag som er slått av, eller som ikke er synlige på grunn av innstillingene for målestokksynligheten, blir ikke analysert eller tatt med i resultater som skrives ut eller lastes ned.",
    "areaUnitsLabel": "Enheter for analyseresultater(område)",
    "lengthUnitsLabel": "Enheter for analyseresultater(lengde)",
    "maxFeatureForAnalysisLabel": "Maksimalt antall geoobjekter som kan analyseres",
    "maxFeatureForAnalysisHintText": "Tips: Angi det maksimale antallet geoobjekter som skal tas med i analysen",
    "searchToleranceLabelText": "Søketoleranse",
    "searchToleranceHint": "Tips: Søketoleransen brukes til analysering av punkt- og linjeinndata",
    "placenameButtonText": "Stedsnavn",
    "drawToolsButtonText": "Tegn",
    "shapefileButtonText": "Shapefil",
    "coordinatesButtonText": "Koordinater",
    "invalidLayerErrorMsg": "Konfigurer feltene for",
    "drawToolSelectableLayersLabel": "Velg valgbare lag",
    "drawToolSelectableLayersHint": "Tips: Velg lagene som inneholder geoobjektene som kan velges ved hjelp av Velg tegneverktøy",
    "drawToolsSettingsFieldsetLabel": "Opptegningsverktøy",
    "drawToolPointLabel": "Punkt",
    "drawToolPolylineLabel": "Polylinje",
    "drawToolExtentLabel": "Utstrekning",
    "drawToolPolygonLabel": "Polygon",
    "drawToolCircleLabel": "Sirkel",
    "selectDrawToolsText": "Velg tilgjengelig tegneverktøy for å opprette interesseområdet",
    "selectingDrawToolErrorMessage": "Velg minst ett tegneverktøy eller valglag for å bruke alternativet Tegneverktøy for AOI-verktøy.",
    "sortingSettingsLegend": "Sorteringsinnstillinger",
    "ascendingLabel": "Stigende",
    "descendingLabel": "Synkende",
    "sortFieldSelectLabel": "Velg sorteringsfelt",
    "statisticsCountLabel": "Statistikk: Antall",
    "statisticsTotalLengthLabel": "Statistikk: Total lengde",
    "statisticsTotalAreaLabel": "Statistikk: Totalt areal"
  },
  "downloadTab": {
    "downloadLegend": "Nedlastingsinnstillinger",
    "reportLegend": "Rapportinnstillinger",
    "downloadTabLabel": "Last ned",
    "syncEnableOptionLabel": "Geoobjektslag",
    "syncEnableOptionHint": "Tips: Velg lagene som kan lastes ned, og angi formatet hvert lag er tilgjengelig i. Nedlastede datasett vil inneholde de geoobjektene som krysser interesseområdet.",
    "syncEnableOptionNote": "Merk: Nedlasting av geodatabasefiler og shapefiler krever geoobjektlag som er aktivert for synkronisering. Shapefilformatet støttes bare med ArcGIS Online-hostede geoobjektlag.",
    "extractDataTaskOptionLabel": "Geoprosesseringstjeneste for ekstrahering av data",
    "extractDataTaskOptionHint": "Tips: Bruk en publisert geoprosesseringstjeneste for ekstrahering av data til å laste ned geoobjekter som krysser interesseområdet i geodatabase- eller shapefilformater.",
    "cannotDownloadOptionLabel": "Deaktiver nedlasting",
    "syncEnableTableHeaderTitle": {
      "layerNameLabel": "Lagnavn",
      "csvFileFormatLabel": "CSV",
      "fileGDBFormatLabel": "Filgeodatabase",
      "ShapefileFormatLabel": "Shapefil",
      "allowDownloadLabel": "Tillat nedlasting"
    },
    "setButtonLabel": "Angi",
    "GPTaskLabel": "Angi URL til geoprosesseringstjeneste",
    "printGPServiceLabel": "URL for utskriftstjeneste",
    "setGPTaskTitle": "Angi nødvendig URL til geoprosesseringstjeneste",
    "logoLabel": "Logo",
    "logoChooserHint": "Tips: Klikk på bildeikonet for å endre logoen som vises i rapportens øverste venstre hjørne",
    "footnoteLabel": "Fotnote",
    "columnTitleColorPickerLabel": "Farge på kolonneoverskrifter i rapporten",
    "reportTitleLabel": "Rapportens tittel",
    "displaySummaryLabel": "Vis sammendrag",
    "hideZeroValueRowLabel": "Skjul rader med 0-verdi for alle analysefelt",
    "hideNullValueRowLabel": "Skjul rader uten dataverdi (null eller tom) for alle analysefelt",
    "errorMessages": {
      "invalidGPTaskURL": "Ugyldig geoprosesseringstjeneste. Velg en geoprosesseringstjeneste som inneholder en oppgave for ekstrahering av data.",
      "noExtractDataTaskURL": "Velg en geoprosesseringstjeneste som inneholder en oppgave for ekstrahering av data.",
      "duplicateCustomOption": "Det finnes en duplikat oppføring for ${duplicateValueSizeName} .",
      "invalidLayoutWidth": "Ugyldig bredde angitt for ${customLayoutOptionValue}.",
      "invalidLayoutHeight": "Ugyldig høyde angitt for ${customLayoutOptionValue}.",
      "invalidLayoutPageUnits": "Ugyldig sideenhet valgt for ${customLayoutOptionValue}.",
      "failtofetchbuddyTaskDimension": "Feil under henting av følgeoppgavens dimensjonsopplysninger. Prøv på nytt.",
      "failtofetchbuddyTaskName": "Feil under henting av følgeoppgavens navn. Prøv på nytt.",
      "failtofetchChoiceList": "Feil under henting av valgliste fra utskriftstjenesten. Prøv på nytt.",
      "invalidWidth": "Ugyldig bredde.",
      "invalidHeight": "Ugyldig høyde."
    },
    "addCustomLayoutTitle": "Legg til egendefinert oppsett",
    "customLayoutOptionHint": "Tips: Legg til oppsett fra utskriftstjenesten i listen over utskriftsalternativer.",
    "reportDefaultOptionLabel": "Standardoppsett",
    "pageSizeUnits": {
      "millimeters": "Millimeter",
      "points": "Punkter"
    },
    "noDataTextRepresentation": "Ingen dataverdi",
    "naTextRepresentation": "Ingen aktuell verdi",
    "noDataDefaultText": "Ingen data",
    "notApplicableDefaultText": "Ikke tilgjengelig"
  },
  "generalTab": {
    "generalTabLabel": "Generelt",
    "tabLabelsLegend": "Paneletiketter",
    "tabLabelsHint": "Tips: Angi etiketter",
    "AOITabLabel": "Interesseområdepanel",
    "ReportTabLabel": "Rapportpanel",
    "bufferSettingsLegend": "Bufferinnstillinger",
    "defaultBufferDistanceLabel": "Standard bufferavstand",
    "defaultBufferUnitsLabel": "Bufferenheter",
    "generalBufferSymbologyHint": "Tips: Symbolene som skal brukes til å angi bufferområdet rundt det definerte interesseområdet",
    "aoiGraphicsSymbologyLegend": "Interesseområdesymboler",
    "aoiGraphicsSymbologyHint": "Tips: Symboler som brukes til å angi punkt- linje- og polygonbaserte interesseområder",
    "pointSymbologyLabel": "Punkt",
    "previewLabel": "Forhåndsvisning",
    "lineSymbologyLabel": "Linje",
    "polygonSymbologyLabel": "Polygon",
    "aoiBufferSymbologyLabel": "Buffersymboler",
    "pointSymbolChooserPopupTitle": "Adresse- eller punktlokasjonssymbol",
    "polygonSymbolChooserPopupTitle": "Polygonsymbol",
    "lineSymbolChooserPopupTitle": "Linjesymbol",
    "aoiSymbolChooserPopupTitle": "Buffersymbol",
    "aoiTabText": "AOI",
    "reportTabText": "Rapport",
    "invalidSymbolValue": "Ugyldig symbolverdi."
  },
  "searchSourceSetting": {
    "searchSourceSettingTabTitle": "Søkekildeinnstillinger",
    "searchSourceSettingTitle": "Søkekildeinnstillinger",
    "searchSourceSettingTitleHintText": "Legg til og konfigurer geokodingstjenester eller geoobjektslag som søkekilder. Disse angitte kildene avgjør hva som er søkbart i søkeboksen.",
    "addSearchSourceLabel": "Legg til søkekilde",
    "featureLayerLabel": "Geoobjektlag",
    "geocoderLabel": "Geokoder",
    "generalSettingLabel": "Generell innstilling",
    "allPlaceholderLabel": "Plassholdertekst for søk i alt:",
    "allPlaceholderHintText": "Hint: Skriv inn teksten som skal vises som plassholder når du søker i alle lag og geokoder.",
    "generalSettingCheckboxLabel": "Vis popuptekst for funnet geoobjekt eller lokasjon",
    "countryCode": "Lands- eller regionskode(r)",
    "countryCodeEg": "f.eks. ",
    "countryCodeHint": "Hvis du lar dette feltet stå tomt, søkes det i alle land og regioner",
    "questionMark": "?",
    "searchInCurrentMapExtent": "Søk kun i gjeldende kartutstrekning",
    "locatorUrl": "Geokoder-URL",
    "locatorName": "Geokodernavn",
    "locatorExample": "Eksempel",
    "locatorWarning": "Denne versjonen av geokodingstjenesten støttes ikke. Widgeten støtter versjon 10.0 og nyere av geokodingstjenesten.",
    "locatorTips": "Forslag er ikke tilgjengelige fordi geokodingstjenesten ikke har støtte for forslag.",
    "layerSource": "Lagkilde",
    "setLayerSource": "Angi lagkilde",
    "setGeocoderURL": "Angi geokoder-URL",
    "searchLayerTips": "Forslag er ikke tilgjengelige, fordi featuretjenesten ikke har støtte for paginering.",
    "placeholder": "Plassholdertekst",
    "searchFields": "Søkefelter",
    "displayField": "Visningsfelt",
    "exactMatch": "Nøyaktig treff",
    "maxSuggestions": "Maks. antall forslag",
    "maxResults": "Maks. antall resultater",
    "enableLocalSearch": "Aktiver lokalt søk",
    "minScale": "Minste målestokk",
    "minScaleHint": "Når kartmålestokken er større enn denne målestokken, brukes lokalt søk",
    "radius": "Radius",
    "radiusHint": "Angir radiusen for et område rundt det gjeldende midtpunktet i kartet som brukes til å styrke rangeringen til geokodingskandidater, slik at kandidater nærmest lokasjonen returneres først",
    "setSearchFields": "Angi søkefelter",
    "set": "Angi",
    "invalidUrlTip": "URL-en ${URL} er ugyldig eller ikke tilgjengelig.",
    "invalidSearchSources": "Ugyldige søkekildeinnstillinger"
  },
  "errorMsg": {
    "textboxFieldsEmptyErrorMsg": "Fyll ut de obligatoriske feltene",
    "bufferDistanceFieldsErrorMsg": "Angi gyldige verdier",
    "invalidSearchToleranceErrorMsg": "Angi en gyldig verdi for søketoleranse",
    "atLeastOneCheckboxCheckedErrorMsg": "Ugyldig konfigurasjon: Minst ett interesseområdeverktøy er obligatorisk.",
    "noLayerAvailableErrorMsg": "Ingen lag tilgjengelig",
    "layerNotSupportedErrorMsg": "Ikke støttet ",
    "noFieldSelected": "Bruk redigeringsfunksjonen til å velge felt til analyser.",
    "duplicateFieldsLabels": "Duplikat etikett \"${labelText}\" lagt til for: \"${itemNames}\"",
    "noLayerSelected": "Velg minst ett lag for analyse.",
    "errorInSelectingLayer": "Kan ikke velge lag. Prøv på nytt.",
    "errorInMaxFeatureCount": "Angi en gyldig maksimumsverdi for antall geoobjekter til analyse."
  }
});