export enum ApplicantEducation {
  PRADINIS = 'Pradinis', VIDURINIS = 'Vidurinis', SPEC_VIDURINIS = 'Spec. vidurinis', AUKSTESNYSIS = 'Aukštesnysis',
  AUKSTASIS = 'Aukštasis'
}

export enum ApplicantPosition {
  DARBININKAS = 'Darbininkas', SPEC_TARNAUTOJAS = 'Specialistas, tarnautojas', VYR_SPECIALISTAS = 'Vyr. specialistas',
  VADOVAS = 'Vadovas (skyriaus, padalinio)', IMONES_VADOVAS = 'Įmonės vadovas', SAVININKAS = 'Savininkas',
  STUDENTAS = 'Studentas', PENSININKAS = 'Pensininkas', NAMU_SEIMININKE = 'Namų šeimininkė',
  NIEKUR_NEDIRBU = 'Niekur nedirbu', INDIVIDUALI_VEIKLA = 'Individuali veikla'
}

export enum ApplicantField {
  ZEMES_UKIS = 'Žemės ūkis, miškininkystė, medžioklė, žuvininkystė', STATYBA = 'Statyba, apdirbamoji pramonė',
  PRAMONE = 'Pramonė', PREKYBA = 'Prekyba, aptarnavimas', TRANSPORTAS = 'Transportas, pervežimas, ryšiai',
  FINANSAI = 'Finansinis tarpininkavimas', SVIETIMAS_KULTURA = 'Švietimas, kultūra',
  NEKILNOJAMAS_TURTAS = 'Nekilnojamas turtas, nuoma', IT = 'Informacinės technologijos',
  TEISE = 'Teisinis tarpininkavimas, auditas ir kita veikla', SVEIKATA = 'Sveikatos apsauga, socialinis darbas',
  VALSTYBE = 'Valstybes valdymas ir gynimas'
}

export enum ApplicantEmploymentContractType {
  NETERMINUOTA = 'Neterminuota', TERMINUOTA = 'Terminuota', KITA = 'Kita'
}

export enum ApplicantEmploymentDuration {
  BANDOMASIS = 'Bandomasis laikotarpis', IKI_VIENU_METU = 'Iki 1 metų', IKI_DVIEJU_METU = 'Iki 2 metų',
  IKI_TRIJU_METU = 'Iki 3 metų', IKI_KETURIU_METU = 'Iki 4 metų', IKI_PENKIU_METU = 'Iki 5 metų',
  VIRS_PENKIU_METU = 'Virš 5 metų'
}

export enum ApplicantMaritalStatus {
  NVEDES = 'Nevedęs (netekėjusi)', VEDES = 'Vedęs (ištekįjusi)', BENDRAS_GYVENIMAS = 'Bendras gyvenimas nesusituokus',
  ISSISKYRES = 'Išsiskyręs (-usi)', NASLYS = 'Našlys (-ė)'
}

export enum ApplicantLoanPayoutDates {
  TRECIA = '3', SEPTINTA = '7', DVYLIKTA = '12', SEPTYNIOLIKTA = '17', DVIDESIMTANTRA = '22', DVIDESIMTSEPTINTA = '27'
}

export interface Application {
  name: string;
  lastName: string;
  pid: number;
  loanAmount: number;
  loanDuration: number;
  paymentDay: number;
  netSalary: number;
  education: ApplicantEducation;
  position: ApplicantPosition;
  field: ApplicantField;
  employmentContractType: ApplicantEmploymentContractType;
  employmentDuration: ApplicantEmploymentDuration;
  maritalStatus: ApplicantMaritalStatus;
  loanPayDate: number;
  phone: number;
}
