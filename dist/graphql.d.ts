export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    BigDecimal: {
        input: any;
        output: any;
    };
    Date: {
        input: any;
        output: any;
    };
    FerryDate: {
        input: any;
        output: any;
    };
    FerryTime: {
        input: any;
        output: any;
    };
    LocalTime: {
        input: any;
        output: any;
    };
    RslDate: {
        input: any;
        output: any;
    };
    RslDateTime: {
        input: any;
        output: any;
    };
};
export type Accommodation = {
    __typename?: 'Accommodation';
    code: Scalars['String']['output'];
    label?: Maybe<Scalars['String']['output']>;
    occupancy?: Maybe<Scalars['Int']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    totalAmount?: Maybe<Amount>;
    unitPrice?: Maybe<Amount>;
};
export type AccommodationInput = {
    code?: InputMaybe<Scalars['String']['input']>;
    quantity?: InputMaybe<Scalars['Int']['input']>;
};
export type AccommodationProductsInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    categoryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    excludeMandatoryProduct?: InputMaybe<Scalars['Boolean']['input']>;
    stayGuiid: Scalars['Int']['input'];
};
export type AccommodationProductsOutput = {
    __typename?: 'AccommodationProductsOutput';
    accommodationProducts?: Maybe<Array<Maybe<ProductByCategory>>>;
};
export type AccountInput = {
    facebookID?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
    password2?: InputMaybe<Scalars['String']['input']>;
    userName?: InputMaybe<Scalars['String']['input']>;
};
export type AddBabyInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    stayGuiid: Scalars['Int']['input'];
};
export type AddBabyOutput = {
    __typename?: 'AddBabyOutput';
    cart?: Maybe<Cart>;
};
export type AddOccupantInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    occupantType?: InputMaybe<OccupantTypeEnum>;
    stayGuiid: Scalars['Int']['input'];
};
export type AddOccupantOutput = {
    __typename?: 'AddOccupantOutput';
    cart?: Maybe<Cart>;
};
export type AddPartnerCustomerAccountInput = {
    address: CustomerAddressInput;
    birthDate: Scalars['Date']['input'];
    civility?: InputMaybe<Scalars['String']['input']>;
    firstName: Scalars['String']['input'];
    lastName: Scalars['String']['input'];
    relationshipId?: InputMaybe<Scalars['Int']['input']>;
};
export type AddonCategory = {
    __typename?: 'AddonCategory';
    code: Scalars['String']['output'];
    label?: Maybe<Scalars['String']['output']>;
    size?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export type Address = {
    __typename?: 'Address';
    addressComplementary1?: Maybe<Scalars['String']['output']>;
    addressComplementary2?: Maybe<Scalars['String']['output']>;
    addressCountry?: Maybe<Country>;
    city?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use 'addressCountry'. */
    country?: Maybe<Option>;
    fax?: Maybe<Scalars['String']['output']>;
    latitude?: Maybe<Scalars['String']['output']>;
    longitude?: Maybe<Scalars['String']['output']>;
    mail?: Maybe<Scalars['String']['output']>;
    phone1?: Maybe<Scalars['String']['output']>;
    phone2?: Maybe<Scalars['String']['output']>;
    postalLocality?: Maybe<Scalars['String']['output']>;
    streetName?: Maybe<Scalars['String']['output']>;
    zipCode?: Maybe<Scalars['String']['output']>;
};
export type AllOccupantProductsAllAgeRangesInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    categoryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    stayGuiid: Scalars['Int']['input'];
};
export type AllOccupantProductsAllAgeRangesOutput = {
    __typename?: 'AllOccupantProductsAllAgeRangesOutput';
    occupantProducts?: Maybe<Array<Maybe<ProductByCategory>>>;
};
export type AlternativeProposalRule = {
    __typename?: 'AlternativeProposalRule';
    dstProperties?: Maybe<Array<Maybe<Property>>>;
    id: Scalars['Int']['output'];
    label?: Maybe<Scalars['String']['output']>;
    priority?: Maybe<Scalars['Int']['output']>;
    roomFeatures?: Maybe<Array<Maybe<CriteriaValue>>>;
    srcProperty?: Maybe<Property>;
};
export type AlternativeProposalRulesForContractFolderInput = {
    contractFolderId: Scalars['Int']['input'];
};
export type AlternativeProposalRulesForContractFolderOutput = {
    __typename?: 'AlternativeProposalRulesForContractFolderOutput';
    alternativeProposalRules?: Maybe<Array<Maybe<AlternativeProposalRule>>>;
};
export type Amount = {
    __typename?: 'Amount';
    amount?: Maybe<Scalars['BigDecimal']['output']>;
    currencyCode?: Maybe<Scalars['String']['output']>;
};
export type AmountInput = {
    amount?: InputMaybe<Scalars['BigDecimal']['input']>;
    currencyCode?: InputMaybe<Scalars['String']['input']>;
};
export type ApiAliveOutput = {
    __typename?: 'ApiAliveOutput';
    alive?: Maybe<Scalars['Boolean']['output']>;
};
export type AssignRoomInput = {
    roomNumber: Scalars['String']['input'];
    stayGuiid: Scalars['Int']['input'];
};
export type AssignRoomOutput = {
    __typename?: 'AssignRoomOutput';
    cart?: Maybe<Cart>;
};
export type AuthenticationInput = {
    password: Scalars['String']['input'];
    username: Scalars['String']['input'];
};
export type AvailForRoomTypesInput = {
    baseProductCode?: InputMaybe<Scalars['String']['input']>;
    campaignCode: Scalars['String']['input'];
    childrenBirthdate?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
    endDate?: InputMaybe<Scalars['Date']['input']>;
    nbAdults: Scalars['Int']['input'];
    nbBabies?: InputMaybe<Scalars['Int']['input']>;
    nbChildren1?: InputMaybe<Scalars['Int']['input']>;
    nbChildren2?: InputMaybe<Scalars['Int']['input']>;
    nbDays?: InputMaybe<Scalars['Int']['input']>;
    propertyId: Scalars['Int']['input'];
    roomTypeCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    startDate: Scalars['Date']['input'];
};
export type AvailForRoomTypesOutput = {
    __typename?: 'AvailForRoomTypesOutput';
    availabilityRoomTypes?: Maybe<Array<Maybe<AvailabilityRoomType>>>;
};
export type AvailabilityRoomType = {
    __typename?: 'AvailabilityRoomType';
    availability?: Maybe<Scalars['Int']['output']>;
    bookable?: Maybe<Scalars['Boolean']['output']>;
    minAdults?: Maybe<Scalars['Int']['output']>;
    property?: Maybe<Property>;
    proposal?: Maybe<Proposal>;
    roomType?: Maybe<RoomType>;
};
export type AvailableRoomFeaturesInput = {
    propertyIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    roomFeatureCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type AvailableRoomFeaturesOutput = {
    __typename?: 'AvailableRoomFeaturesOutput';
    roomFeatures?: Maybe<Array<Maybe<RoomFeature>>>;
};
export type AvailableRoomsInput = {
    allTypes?: InputMaybe<Scalars['Boolean']['input']>;
    stayGuiid: Scalars['Int']['input'];
};
export type AvailableRoomsOutput = {
    __typename?: 'AvailableRoomsOutput';
    availableRooms?: Maybe<Array<Maybe<PlanningRoom>>>;
};
export type BookingCustomerDepositAccountInfosOutput = {
    __typename?: 'BookingCustomerDepositAccountInfosOutput';
    customerDepositAccountInfos?: Maybe<Array<Maybe<CustomerDepositAccountInfo>>>;
};
export type BookingDocumentsInput = {
    bookingId: Scalars['Int']['input'];
};
export type BookingDocumentsOutput = {
    __typename?: 'BookingDocumentsOutput';
    documents?: Maybe<Array<Maybe<File>>>;
};
export type BookingProductsInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    categoryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    excludeMandatoryInput?: InputMaybe<Scalars['Boolean']['input']>;
};
export type BookingProductsOutput = {
    __typename?: 'BookingProductsOutput';
    bookingProducts?: Maybe<Array<Maybe<ProductByCategory>>>;
};
export type BookingRecordCriteriasOutput = {
    __typename?: 'BookingRecordCriteriasOutput';
    criterias?: Maybe<Array<Maybe<Criteria>>>;
};
export declare enum BookingStatus {
    Estimate = "ESTIMATE",
    Guaranteed = "GUARANTEED",
    Option = "OPTION"
}
export type Brochure = {
    __typename?: 'Brochure';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type BrochureInput = {
    brochureIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type BrochureOutput = {
    __typename?: 'BrochureOutput';
    requested?: Maybe<Scalars['Boolean']['output']>;
};
export type BrochuresOutput = {
    __typename?: 'BrochuresOutput';
    brochureList?: Maybe<Array<Maybe<Brochure>>>;
    /** @deprecated Use 'brochureList'. */
    brochures?: Maybe<Array<Maybe<Option>>>;
};
export type CmsCriteria = {
    __typename?: 'CMSCriteria';
    classId: Scalars['Int']['output'];
    cmsCriteriaValues?: Maybe<Array<Maybe<CmsCriteriaValue>>>;
    code: Scalars['String']['output'];
    inputType?: Maybe<InputType>;
    label?: Maybe<Scalars['String']['output']>;
};
export type CalendarPeriod = {
    __typename?: 'CalendarPeriod';
    color?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    listPeriod?: Maybe<Array<Maybe<DatePeriod>>>;
    textColor?: Maybe<Scalars['String']['output']>;
};
export type Calfwidth = {
    __typename?: 'Calfwidth';
    id?: Maybe<Scalars['Int']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type Campaign = {
    __typename?: 'Campaign';
    code?: Maybe<Scalars['String']['output']>;
    endDate?: Maybe<Scalars['RslDate']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    startDate?: Maybe<Scalars['RslDate']['output']>;
};
export type CampaignsOutput = {
    __typename?: 'CampaignsOutput';
    campaignList?: Maybe<Array<Maybe<Campaign>>>;
    /** @deprecated Use 'campaignList'. */
    campaigns?: Maybe<Array<Maybe<Option>>>;
};
export type CancelFerryBookingInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    lineItemGuiid: Scalars['Int']['input'];
};
export type CancelFerryBookingOutput = {
    __typename?: 'CancelFerryBookingOutput';
    cart?: Maybe<Cart>;
};
export type Car = {
    __typename?: 'Car';
    make?: Maybe<Scalars['String']['output']>;
    model?: Maybe<Scalars['String']['output']>;
    vehicleCategoryCode?: Maybe<Scalars['String']['output']>;
};
export type Cart = {
    __typename?: 'Cart';
    fromFastCheckinCheckout?: Maybe<Scalars['Boolean']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    reservations?: Maybe<Array<Maybe<CustomerBooking>>>;
};
export type CartOutput = {
    __typename?: 'CartOutput';
    cart?: Maybe<Cart>;
};
export type CartPaymentMethodInput = {
    automaticPayment?: InputMaybe<Scalars['Boolean']['input']>;
    bookingStatus: BookingStatus;
    ccardType?: InputMaybe<Scalars['Int']['input']>;
    chequeNumber?: InputMaybe<Scalars['String']['input']>;
    forceSaveGuaranteedStatus?: InputMaybe<Scalars['Boolean']['input']>;
    manualPaymentOptions?: InputMaybe<Scalars['String']['input']>;
    paymentAmount?: InputMaybe<Scalars['String']['input']>;
    paymentMode?: InputMaybe<Scalars['String']['input']>;
    paymentModeSetOnlyFirst?: InputMaybe<Scalars['Boolean']['input']>;
    paymentOptions?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<PspUrl>;
};
export type CartPaymentMethodOutput = {
    __typename?: 'CartPaymentMethodOutput';
    cart?: Maybe<Cart>;
};
export type CartPaymentPlansInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    partnerPaymentPlan?: InputMaybe<Scalars['String']['input']>;
    paymentPlan?: InputMaybe<Scalars['String']['input']>;
};
export type CartPaymentPlansOutput = {
    __typename?: 'CartPaymentPlansOutput';
    cart?: Maybe<Cart>;
};
export type ChangePasswordInput = {
    confirmPassword: Scalars['String']['input'];
    password: Scalars['String']['input'];
    token: Scalars['String']['input'];
};
export type ChangePasswordOutput = {
    __typename?: 'ChangePasswordOutput';
    message: Scalars['String']['output'];
};
export type ChooseFerryProposalInput = {
    proposalId?: InputMaybe<Scalars['Int']['input']>;
};
export type ChooseFerryProposalOutput = {
    __typename?: 'ChooseFerryProposalOutput';
    ferryBooking?: Maybe<FerryBooking>;
};
export type ChooseProposalFromKeysInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    notGroupStays?: InputMaybe<Scalars['Boolean']['input']>;
    notPopulateOccupantFromService?: InputMaybe<Scalars['Boolean']['input']>;
    occupantList?: InputMaybe<Array<InputMaybe<ChooseProposalFromKeysOccupantInput>>>;
    proposalKeys: Array<Scalars['String']['input']>;
};
export type ChooseProposalFromKeysOccupantInput = {
    birthDate?: InputMaybe<Scalars['Date']['input']>;
    civilityCode?: InputMaybe<Scalars['String']['input']>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
};
export type ChooseProposalFromKeysOutput = {
    __typename?: 'ChooseProposalFromKeysOutput';
    cart?: Maybe<Cart>;
};
export type ChooseRoundTripProposalsInput = {
    outwardProposalId?: InputMaybe<Scalars['Int']['input']>;
    returnProposalId?: InputMaybe<Scalars['Int']['input']>;
};
export type ChooseRoundTripProposalsOutput = {
    __typename?: 'ChooseRoundTripProposalsOutput';
    ferryBooking?: Maybe<FerryBooking>;
};
export type CivilitiesOutput = {
    __typename?: 'CivilitiesOutput';
    /** @deprecated Use 'civilitiyList'. */
    civilities?: Maybe<Array<Maybe<Option>>>;
    civilitiyList?: Maybe<Array<Maybe<Civility>>>;
};
export type Civility = {
    __typename?: 'Civility';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type ClientType = {
    __typename?: 'ClientType';
    id: Scalars['Int']['output'];
    label?: Maybe<Scalars['String']['output']>;
};
export type CmsCriteriaValue = {
    __typename?: 'CmsCriteriaValue';
    code?: Maybe<Scalars['String']['output']>;
    color?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type CmsCriteriaValueInput = {
    code: Scalars['String']['input'];
    value: Scalars['String']['input'];
};
export type ConfirmFastCheckoutInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    confirmFastCheckout?: InputMaybe<Scalars['Boolean']['input']>;
};
export type ConfirmFastCheckoutOutput = {
    __typename?: 'ConfirmFastCheckoutOutput';
    cart?: Maybe<Cart>;
};
export type Contact = {
    __typename?: 'Contact';
    email?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
};
export type ContactInfo = {
    email?: InputMaybe<Scalars['String']['input']>;
    phone?: InputMaybe<Scalars['String']['input']>;
};
export type ContractFolder = {
    __typename?: 'ContractFolder';
    cmsCriterias?: Maybe<Array<Maybe<CriteriaValue>>>;
    id: Scalars['Int']['output'];
    label?: Maybe<Scalars['String']['output']>;
};
export type CoreTrip = {
    __typename?: 'CoreTrip';
    amount?: Maybe<Amount>;
};
export type CountriesOutput = {
    __typename?: 'CountriesOutput';
    /** @deprecated Use 'countryList'. */
    countries?: Maybe<Array<Maybe<Option>>>;
    countryList?: Maybe<Array<Maybe<Country>>>;
};
export type Country = {
    __typename?: 'Country';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type CreateCustomerAccountInput = {
    account?: InputMaybe<AccountInput>;
    address: CustomerAddressInput;
    birthDate: Scalars['Date']['input'];
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    civility?: InputMaybe<Scalars['String']['input']>;
    criterias?: InputMaybe<Array<InputMaybe<CriteriaValueInput>>>;
    customerCode?: InputMaybe<Scalars['String']['input']>;
    firstName: Scalars['String']['input'];
    languageCode?: InputMaybe<Scalars['String']['input']>;
    lastName: Scalars['String']['input'];
};
export type CreateCustomerAccountOutput = {
    __typename?: 'CreateCustomerAccountOutput';
    service?: Maybe<Service>;
};
export type CreateServiceCustomerAccountInput = {
    birthDate: Scalars['Date']['input'];
    civility?: InputMaybe<Scalars['String']['input']>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    lastName: Scalars['String']['input'];
    relaltionshipId?: InputMaybe<Scalars['Int']['input']>;
};
export type CreditCard = {
    __typename?: 'CreditCard';
    cardholderName?: Maybe<Scalars['String']['output']>;
    guiid?: Maybe<Scalars['Int']['output']>;
    maskedPan?: Maybe<Scalars['String']['output']>;
};
export type Criteria = {
    __typename?: 'Criteria';
    choiceList?: Maybe<Array<Maybe<CriteriaChoice>>>;
    /** @deprecated Use 'choiceList'. */
    choices?: Maybe<Array<Maybe<Option>>>;
    code: Scalars['String']['output'];
    isChoice?: Maybe<Scalars['Boolean']['output']>;
    isFile?: Maybe<Scalars['Boolean']['output']>;
    isFree?: Maybe<Scalars['Boolean']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    mandatory?: Maybe<Scalars['Boolean']['output']>;
};
export type CriteriaChoice = {
    __typename?: 'CriteriaChoice';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type CriteriaInformationInput = {
    code?: InputMaybe<Scalars['String']['input']>;
    customerCriteria?: InputMaybe<Scalars['Boolean']['input']>;
};
export type CriteriaInformationOutput = {
    __typename?: 'CriteriaInformationOutput';
    criteria?: Maybe<Criteria>;
};
export type CriteriaValue = {
    __typename?: 'CriteriaValue';
    code: Scalars['String']['output'];
    fileName?: Maybe<Scalars['String']['output']>;
    fileUrl?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    servicesList?: Maybe<Array<Maybe<Service>>>;
    startDate?: Maybe<Scalars['Date']['output']>;
    type?: Maybe<Scalars['Int']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type CriteriaValueInput = {
    code: Scalars['String']['input'];
    fileName?: InputMaybe<Scalars['String']['input']>;
    value?: InputMaybe<Scalars['String']['input']>;
};
export type Criterias = {
    baseProductCode?: InputMaybe<Scalars['String']['input']>;
    campaignCode?: InputMaybe<Scalars['String']['input']>;
    childrenBirthdate?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
    discountCode?: InputMaybe<Scalars['String']['input']>;
    endDate?: InputMaybe<Scalars['Date']['input']>;
    maxNbRooms?: InputMaybe<Scalars['Int']['input']>;
    maxResults?: InputMaybe<Scalars['Int']['input']>;
    nbAdults: Scalars['Int']['input'];
    nbBabies?: InputMaybe<Scalars['Int']['input']>;
    nbChildren1?: InputMaybe<Scalars['Int']['input']>;
    nbChildren2?: InputMaybe<Scalars['Int']['input']>;
    nbDays?: InputMaybe<Scalars['Int']['input']>;
    noCounterProposal?: InputMaybe<Scalars['Boolean']['input']>;
    partnerPrivilegeCardID?: InputMaybe<Scalars['Int']['input']>;
    privilegeCardID?: InputMaybe<Scalars['Int']['input']>;
    propertyIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    roomCategories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    roomFeatureValues?: InputMaybe<Array<InputMaybe<RoomFeatureValue>>>;
    roomType?: InputMaybe<Scalars['String']['input']>;
    sortString?: InputMaybe<Scalars['String']['input']>;
    startDate?: InputMaybe<Scalars['Date']['input']>;
};
export type CriteriasPort = {
    arrivalPortName: Scalars['String']['input'];
    departurePortName: Scalars['String']['input'];
};
export type CriteriasTrailer = {
    height?: InputMaybe<Scalars['Float']['input']>;
    length?: InputMaybe<Scalars['Float']['input']>;
    mark?: InputMaybe<Scalars['String']['input']>;
    model?: InputMaybe<Scalars['String']['input']>;
    trailerCategory: Scalars['String']['input'];
};
export type CriteriasTrip = {
    departureDate?: InputMaybe<Scalars['FerryDate']['input']>;
    departureTime?: InputMaybe<Scalars['FerryTime']['input']>;
};
export type CriteriasVehicle = {
    additionalHeight?: InputMaybe<Scalars['Float']['input']>;
    additionalLength?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    length?: InputMaybe<Scalars['Float']['input']>;
    mark?: InputMaybe<Scalars['String']['input']>;
    model?: InputMaybe<Scalars['String']['input']>;
    vehicleCategory: Scalars['String']['input'];
};
export type Crossing = {
    __typename?: 'Crossing';
    arrivalPort: Port;
    departurePort: Port;
};
export type CurrentCustomerAccountOutput = {
    __typename?: 'CurrentCustomerAccountOutput';
    service?: Maybe<Service>;
};
export type CustomerAccountInput = {
    account?: InputMaybe<AccountInput>;
    address?: InputMaybe<CustomerAddressInput>;
    birthDate: Scalars['Date']['input'];
    civility?: InputMaybe<Scalars['String']['input']>;
    criterias?: InputMaybe<Array<InputMaybe<CriteriaValueInput>>>;
    firstName: Scalars['String']['input'];
    languageCode?: InputMaybe<Scalars['String']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
};
export type CustomerAccountOutput = {
    __typename?: 'CustomerAccountOutput';
    service?: Maybe<Service>;
};
export type CustomerAddressInput = {
    addressComplementary1?: InputMaybe<Scalars['String']['input']>;
    addressComplementary2?: InputMaybe<Scalars['String']['input']>;
    city?: InputMaybe<Scalars['String']['input']>;
    country?: InputMaybe<Scalars['String']['input']>;
    fax?: InputMaybe<Scalars['String']['input']>;
    mail: Scalars['String']['input'];
    phone1?: InputMaybe<Scalars['String']['input']>;
    phone2?: InputMaybe<Scalars['String']['input']>;
    postalLocality?: InputMaybe<Scalars['String']['input']>;
    streetName?: InputMaybe<Scalars['String']['input']>;
    zipCode?: InputMaybe<Scalars['String']['input']>;
};
export type CustomerBooking = {
    __typename?: 'CustomerBooking';
    campaign?: Maybe<Campaign>;
    cartID?: Maybe<Scalars['Int']['output']>;
    cartItemID?: Maybe<Scalars['Int']['output']>;
    contractFolder?: Maybe<ContractFolder>;
    creationDate?: Maybe<Scalars['Date']['output']>;
    criterias?: Maybe<Array<Maybe<CriteriaValue>>>;
    discountCode?: Maybe<Scalars['String']['output']>;
    endDate?: Maybe<Scalars['Date']['output']>;
    externalCode?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    isCanceled?: Maybe<Scalars['Boolean']['output']>;
    isEnableEditPrimaryOccupant?: Maybe<Scalars['Boolean']['output']>;
    isEnableEditReservation?: Maybe<Scalars['Boolean']['output']>;
    isEnableFastCheckin?: Maybe<Scalars['Boolean']['output']>;
    isEnableFastCheckout?: Maybe<Scalars['Boolean']['output']>;
    isEnableFerryBooking?: Maybe<Scalars['Boolean']['output']>;
    isEstimate?: Maybe<Scalars['Boolean']['output']>;
    isFCIdone?: Maybe<Scalars['Boolean']['output']>;
    isMaster?: Maybe<Scalars['Boolean']['output']>;
    isOption?: Maybe<Scalars['Boolean']['output']>;
    isPSPPayment?: Maybe<Scalars['Boolean']['output']>;
    nbDays?: Maybe<Scalars['Int']['output']>;
    observation?: Maybe<Scalars['String']['output']>;
    optionDate?: Maybe<Scalars['Date']['output']>;
    partner?: Maybe<Service>;
    paymentStarted?: Maybe<Scalars['Boolean']['output']>;
    primaryOccupant?: Maybe<PrimaryOccupant>;
    property?: Maybe<Property>;
    salesperson?: Maybe<User>;
    selectedPaymentCCType?: Maybe<Scalars['Int']['output']>;
    selectedPaymentDue?: Maybe<Scalars['String']['output']>;
    selectedPaymentMethod?: Maybe<Scalars['String']['output']>;
    startDate?: Maybe<Scalars['Date']['output']>;
    status?: Maybe<CustomerBookingStatus>;
    stays?: Maybe<Array<Maybe<Stay>>>;
    subStatus?: Maybe<CustomerBookingSubStatus>;
    totalAmount?: Maybe<Amount>;
};
export type CustomerBookingInput = {
    bookingId: Scalars['Int']['input'];
    fastCheckinCheckout?: InputMaybe<Scalars['Boolean']['input']>;
};
export type CustomerBookingOutput = {
    __typename?: 'CustomerBookingOutput';
    cart?: Maybe<Cart>;
};
export type CustomerBookingStatus = {
    __typename?: 'CustomerBookingStatus';
    code?: Maybe<Scalars['String']['output']>;
    default?: Maybe<Scalars['Boolean']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type CustomerBookingSubStatus = {
    __typename?: 'CustomerBookingSubStatus';
    default?: Maybe<Scalars['Boolean']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type CustomerBookingsInput = {
    bookingIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    canceled?: InputMaybe<Scalars['Boolean']['input']>;
    estimate?: InputMaybe<Scalars['Boolean']['input']>;
    option?: InputMaybe<Scalars['Boolean']['input']>;
};
export type CustomerBookingsOutput = {
    __typename?: 'CustomerBookingsOutput';
    customerBookings?: Maybe<Array<Maybe<CustomerBooking>>>;
};
export type CustomerCriteriasInput = {
    criteriaCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type CustomerCriteriasOutput = {
    __typename?: 'CustomerCriteriasOutput';
    criterias?: Maybe<Array<Maybe<Criteria>>>;
};
export type CustomerDepositAccount = {
    __typename?: 'CustomerDepositAccount';
    balance?: Maybe<Amount>;
    id?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    propertyId: Scalars['Int']['output'];
    type?: Maybe<Scalars['Int']['output']>;
};
export type CustomerDepositAccountInfo = {
    __typename?: 'CustomerDepositAccountInfo';
    bookingId?: Maybe<Scalars['Int']['output']>;
    depositAccount?: Maybe<CustomerDepositAccount>;
    expectedDepositAmount?: Maybe<Amount>;
    service?: Maybe<Service>;
};
export type CustomerDepositAccountPaymentsInput = {
    bookingId: Scalars['Int']['input'];
    currencyCode: Scalars['String']['input'];
    depositAccountPayments?: InputMaybe<Array<InputMaybe<DepositAccountPaymentInput>>>;
};
export type CustomerDepositAccountPaymentsInputFromPaymentLink = {
    depositAccountPayments?: InputMaybe<Array<InputMaybe<DepositAccountPaymentInput>>>;
};
export type CustomerDepositAccountPaymentsOutput = {
    __typename?: 'CustomerDepositAccountPaymentsOutput';
    reservation?: Maybe<CustomerBooking>;
};
export type CustomerDepositAccountPaymentsOutputFromPaymentLink = {
    __typename?: 'CustomerDepositAccountPaymentsOutputFromPaymentLink';
    reservation?: Maybe<CustomerBooking>;
};
export type CustomerDepositAccountsOutput = {
    __typename?: 'CustomerDepositAccountsOutput';
    customerDepositAccounts?: Maybe<Array<Maybe<CustomerDepositAccount>>>;
};
export type CustomerGiftCodesOutput = {
    __typename?: 'CustomerGiftCodesOutput';
    giftCodes?: Maybe<Array<Maybe<GiftCode>>>;
};
export type CustomerLoyaltyPointsOutput = {
    __typename?: 'CustomerLoyaltyPointsOutput';
    points?: Maybe<Scalars['Int']['output']>;
};
export type CustomerPrivilegeCardsOutput = {
    __typename?: 'CustomerPrivilegeCardsOutput';
    privilegeCards?: Maybe<Array<Maybe<PrivilegeCard>>>;
};
export type CustomerType = {
    __typename?: 'CustomerType';
    code: Scalars['String']['output'];
    label?: Maybe<Scalars['String']['output']>;
};
export type DatePeriod = {
    __typename?: 'DatePeriod';
    endDate?: Maybe<Scalars['Date']['output']>;
    startDate?: Maybe<Scalars['Date']['output']>;
};
export type DepositAccountPaymentInput = {
    accountID: Scalars['Int']['input'];
    amount: AmountInput;
};
export type DisableEnablePartnerCustomerAccountInput = {
    customerCode: Scalars['String']['input'];
    disabled: Scalars['Boolean']['input'];
};
export type DisableServiceCustomerAccountInput = {
    serviceId?: InputMaybe<Scalars['Int']['input']>;
};
export type Discount = {
    __typename?: 'Discount';
    discountCode?: Maybe<Scalars['String']['output']>;
    documentLabel?: Maybe<Scalars['String']['output']>;
    fidelityPoints?: Maybe<Scalars['Int']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    price?: Maybe<Amount>;
    quantity?: Maybe<Scalars['Int']['output']>;
    specificLabel?: Maybe<Scalars['String']['output']>;
    voucherCode?: Maybe<Scalars['String']['output']>;
};
export type DiscountCodeInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    discountCode: Scalars['String']['input'];
};
export type DiscountCodeOutput = {
    __typename?: 'DiscountCodeOutput';
    cart?: Maybe<Cart>;
};
export type Distribution = {
    __typename?: 'Distribution';
    roomNumbers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    roomTypes?: Maybe<Array<Maybe<RoomType>>>;
};
export type DoFastCheckinInput = {
    bookingId?: InputMaybe<Scalars['Int']['input']>;
    isDepositCashless?: InputMaybe<Scalars['Boolean']['input']>;
};
export type DoFastCheckinOutput = {
    __typename?: 'DoFastCheckinOutput';
    reservation?: Maybe<CustomerBooking>;
};
export type DoFastCheckoutInput = {
    bookingId?: InputMaybe<Scalars['Int']['input']>;
};
export type DoFastCheckoutOutput = {
    __typename?: 'DoFastCheckoutOutput';
    reservation?: Maybe<CustomerBooking>;
};
export type ExpireSessionOutput = {
    __typename?: 'ExpireSessionOutput';
    isExpired?: Maybe<Scalars['Boolean']['output']>;
};
export type FacebookLoginInput = {
    facebookID: Scalars['String']['input'];
};
export type FacebookLoginOutput = {
    __typename?: 'FacebookLoginOutput';
    service?: Maybe<Service>;
};
export type FerryAddonCategoriesOutput = {
    __typename?: 'FerryAddonCategoriesOutput';
    addonCategories?: Maybe<Array<Maybe<AddonCategory>>>;
};
export type FerryAvailableAccommodationsOutput = {
    __typename?: 'FerryAvailableAccommodationsOutput';
    outwardAccommodations?: Maybe<Array<Maybe<Accommodation>>>;
    returnAccommodations?: Maybe<Array<Maybe<Accommodation>>>;
};
export type FerryBooking = {
    __typename?: 'FerryBooking';
    bookingRef?: Maybe<Scalars['String']['output']>;
    contact?: Maybe<Contact>;
    outwardTrip: Trip;
    passengers: Array<Maybe<Passenger>>;
    passportMandatory?: Maybe<Scalars['Boolean']['output']>;
    resFerryId?: Maybe<Scalars['Int']['output']>;
    returnTrip?: Maybe<Trip>;
    sendStatus?: Maybe<Scalars['String']['output']>;
    status?: Maybe<Scalars['String']['output']>;
    supplier: Supplier;
    totalAmount: Amount;
    /** @deprecated Vehicle moved in Trip */
    vehicle?: Maybe<Vehicle>;
};
export type FerryBookingCriterias = {
    flexibleDates?: InputMaybe<Scalars['Boolean']['input']>;
    nbAdults?: InputMaybe<Scalars['Int']['input']>;
    nbChildren?: InputMaybe<Scalars['Int']['input']>;
    outwardTrip?: InputMaybe<CriteriasTrip>;
    port?: InputMaybe<CriteriasPort>;
    returnTrip?: InputMaybe<CriteriasTrip>;
    strictPorts?: InputMaybe<Scalars['Boolean']['input']>;
    trailer?: InputMaybe<CriteriasTrailer>;
    vehicle?: InputMaybe<CriteriasVehicle>;
};
export type FerryCarsOutput = {
    __typename?: 'FerryCarsOutput';
    cars?: Maybe<Array<Maybe<Car>>>;
};
export type FerryCivilitiesOutput = {
    __typename?: 'FerryCivilitiesOutput';
    civilities?: Maybe<Array<Maybe<Civility>>>;
};
export type FerryCrossingsInput = {
    arrivalPortName?: InputMaybe<Scalars['String']['input']>;
    departurePortName?: InputMaybe<Scalars['String']['input']>;
};
export type FerryCrossingsOutput = {
    __typename?: 'FerryCrossingsOutput';
    crossings?: Maybe<Array<Maybe<Crossing>>>;
};
export type FerryNationalitiesOutput = {
    __typename?: 'FerryNationalitiesOutput';
    nationalities?: Maybe<Array<Maybe<Nationality>>>;
};
export type FerryPortsOutput = {
    __typename?: 'FerryPortsOutput';
    ports?: Maybe<Array<Maybe<Port>>>;
};
export type FerryProduct = {
    __typename?: 'FerryProduct';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type FerryProductsOutput = {
    __typename?: 'FerryProductsOutput';
    ferryProducts?: Maybe<Array<Maybe<FerryProduct>>>;
};
export type FerryProposal = {
    __typename?: 'FerryProposal';
    id: Scalars['Int']['output'];
    isFlexibleFare?: Maybe<Scalars['Boolean']['output']>;
    outwardTrip: Trip;
    returnTrip?: Maybe<Trip>;
    supplier: Supplier;
    tariff?: Maybe<FerryProposalTariff>;
    totalAmount: Amount;
};
export type FerryProposalTariff = {
    __typename?: 'FerryProposalTariff';
    tariffBand?: Maybe<Scalars['String']['output']>;
    tariffType?: Maybe<Scalars['String']['output']>;
};
export type FerryProposalsInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    criterias?: InputMaybe<FerryBookingCriterias>;
};
export type FerryProposalsOutput = {
    __typename?: 'FerryProposalsOutput';
    canChooseRoundTripProposals?: Maybe<Scalars['Boolean']['output']>;
    proposals?: Maybe<Array<Maybe<FerryProposal>>>;
    warningList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type FerryTrailerCategoriesOutput = {
    __typename?: 'FerryTrailerCategoriesOutput';
    trailerCategories?: Maybe<Array<Maybe<TrailerCategory>>>;
};
export type FerryVehicleCategoriesOutput = {
    __typename?: 'FerryVehicleCategoriesOutput';
    vehicleCategories?: Maybe<Array<Maybe<VehicleCategory>>>;
};
export type FerryVehicleFuel = {
    __typename?: 'FerryVehicleFuel';
    code: Scalars['String']['output'];
    label?: Maybe<Scalars['String']['output']>;
};
export type FerryVehicleFuelsOutput = {
    __typename?: 'FerryVehicleFuelsOutput';
    vehicleFuels?: Maybe<Array<Maybe<FerryVehicleFuel>>>;
};
export type FidelityLog = {
    __typename?: 'FidelityLog';
    date?: Maybe<Scalars['RslDateTime']['output']>;
    fidelityPoints?: Maybe<Scalars['Int']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    numResa?: Maybe<Scalars['Int']['output']>;
};
export type FidelityLogsOutput = {
    __typename?: 'FidelityLogsOutput';
    fidelityLogs?: Maybe<Array<Maybe<FidelityLog>>>;
};
export type FidelityPointToCartOutput = {
    __typename?: 'FidelityPointToCartOutput';
    cart?: Maybe<Cart>;
};
export type FidelityPointToProductInput = {
    fidelityPoints: Scalars['Int']['input'];
    lineItemGuiid: Scalars['Int']['input'];
};
export type FidelityRule = {
    __typename?: 'FidelityRule';
    fidelityPoints?: Maybe<Scalars['Int']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type FidelityRulesOutput = {
    __typename?: 'FidelityRulesOutput';
    fidelityRules?: Maybe<Array<Maybe<FidelityRule>>>;
};
export type File = {
    __typename?: 'File';
    date?: Maybe<Scalars['RslDateTime']['output']>;
    sentByEmail?: Maybe<Scalars['Boolean']['output']>;
    sentByPrint?: Maybe<Scalars['Boolean']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};
export type Footwidth = {
    __typename?: 'Footwidth';
    id?: Maybe<Scalars['Int']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type GatewayDescription = {
    __typename?: 'GatewayDescription';
    endPoint?: Maybe<Scalars['String']['output']>;
    isTest?: Maybe<Scalars['Boolean']['output']>;
    publicKey?: Maybe<Scalars['String']['output']>;
    url?: Maybe<PspUrlOutput>;
};
export type GiftCode = {
    __typename?: 'GiftCode';
    amount?: Maybe<Amount>;
    bookingId?: Maybe<Scalars['Int']['output']>;
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    type?: Maybe<Scalars['String']['output']>;
    useDate?: Maybe<Scalars['Date']['output']>;
    used?: Maybe<Scalars['Boolean']['output']>;
    valid?: Maybe<Scalars['Boolean']['output']>;
    validityDate?: Maybe<Scalars['Date']['output']>;
};
export type GiftCodeInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    giftCode: Scalars['String']['input'];
};
export type GiftCodeOutput = {
    __typename?: 'GiftCodeOutput';
    cart?: Maybe<Cart>;
};
export type HasProductsForOccupantInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    excludeMandatoryProduct?: InputMaybe<Scalars['Boolean']['input']>;
};
export type Headsize = {
    __typename?: 'Headsize';
    id?: Maybe<Scalars['Int']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type Heights = {
    __typename?: 'Heights';
    id?: Maybe<Scalars['Int']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export declare enum InputType {
    Checkbox = "CHECKBOX",
    Enum = "ENUM",
    Text = "TEXT"
}
export type Language = {
    __typename?: 'Language';
    code?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use 'code'. */
    codeLanguage?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use 'label'. */
    labelLanguage?: Maybe<Scalars['String']['output']>;
    languageVars?: Maybe<Array<Maybe<Translation>>>;
};
export type LanguagesOutput = {
    __typename?: 'LanguagesOutput';
    languages?: Maybe<Array<Maybe<Language>>>;
};
export type LatLng = {
    __typename?: 'LatLng';
    lat: Scalars['Float']['output'];
    lng: Scalars['Float']['output'];
};
export type Lineitem = {
    __typename?: 'Lineitem';
    criterias?: Maybe<Array<Maybe<CriteriaValue>>>;
    discounts?: Maybe<Array<Maybe<Discount>>>;
    duration?: Maybe<Scalars['Int']['output']>;
    ferryBooking?: Maybe<FerryBooking>;
    guiid?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    isSkiset?: Maybe<Scalars['Boolean']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    preReserved?: Maybe<Scalars['Boolean']['output']>;
    product?: Maybe<Product>;
    quantity?: Maybe<Scalars['Float']['output']>;
    totalAmount?: Maybe<Amount>;
    totalAmountWithoutDiscount?: Maybe<Amount>;
};
export type LoginAnyCustomerTypeInput = {
    login: Scalars['String']['input'];
    password: Scalars['String']['input'];
};
export type LoginAnyCustomerTypeOutput = {
    __typename?: 'LoginAnyCustomerTypeOutput';
    service?: Maybe<Service>;
};
export type LoginEtoModeInput = {
    bookingId: Scalars['String']['input'];
    startDate: Scalars['RslDate']['input'];
    value: Scalars['String']['input'];
};
export type LoginEtoModeOutput = {
    __typename?: 'LoginETOModeOutput';
    service?: Maybe<Service>;
};
export type LoginHash256Input = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    hash: Scalars['String']['input'];
    login: Scalars['String']['input'];
    password: Scalars['String']['input'];
};
export type LoginHash256Output = {
    __typename?: 'LoginHash256Output';
    service?: Maybe<Service>;
};
export type LoginInput = {
    login: Scalars['String']['input'];
    password: Scalars['String']['input'];
};
export type LoginOutput = {
    __typename?: 'LoginOutput';
    service?: Maybe<Service>;
};
export type LoginPartnerInput = {
    login: Scalars['String']['input'];
    password: Scalars['String']['input'];
};
export type LoginPartnerOutput = {
    __typename?: 'LoginPartnerOutput';
    service?: Maybe<Service>;
};
export type LogoutOutput = {
    __typename?: 'LogoutOutput';
    logout?: Maybe<Scalars['Boolean']['output']>;
};
export type LyraFormTokenInput = {
    amount: AmountInput;
    customerAccountContext?: InputMaybe<Scalars['Boolean']['input']>;
    globalPay?: InputMaybe<Scalars['Boolean']['input']>;
    instalmentId?: InputMaybe<Scalars['Int']['input']>;
    paymentLinkContext?: InputMaybe<Scalars['Boolean']['input']>;
    url?: InputMaybe<PspUrl>;
};
export type LyraFormTokenOutput = {
    __typename?: 'LyraFormTokenOutput';
    formToken?: Maybe<Scalars['String']['output']>;
    gatewayDescription?: Maybe<GatewayDescription>;
    orderId?: Maybe<Scalars['String']['output']>;
};
export declare enum LyraPaymentValidatationStatus {
    Failure = "FAILURE",
    Success = "SUCCESS"
}
export type LyraPaymentValidationInput = {
    clientAnswer: Scalars['String']['input'];
    hashKey: Scalars['String']['input'];
    orderId?: InputMaybe<Scalars['String']['input']>;
};
export type LyraPaymentValidationOutput = {
    __typename?: 'LyraPaymentValidationOutput';
    cart?: Maybe<Cart>;
    lyraStatus?: Maybe<LyraPaymentValidatationStatus>;
};
export type MapSelectorData = {
    __typename?: 'MapSelectorData';
    fileSystemName: Scalars['String']['output'];
    imageHeight?: Maybe<Scalars['Int']['output']>;
    imageWidth?: Maybe<Scalars['Int']['output']>;
    listUhDisabled?: Maybe<Array<Maybe<MapUh>>>;
    listUhOnMap?: Maybe<Array<Maybe<MapUh>>>;
    listUhSelected?: Maybe<Array<Maybe<MapUh>>>;
    opacity?: Maybe<Scalars['Float']['output']>;
    stayMapInfos?: Maybe<StayMapInfos>;
    zoom?: Maybe<Scalars['Float']['output']>;
};
export type MapSelectorDataInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    stayGuiid: Scalars['Int']['input'];
};
export type MapSelectorDataOutput = {
    __typename?: 'MapSelectorDataOutput';
    mapSelectorData?: Maybe<MapSelectorData>;
};
export type MapUh = {
    __typename?: 'MapUH';
    color: Scalars['String']['output'];
    coordinates: Array<Maybe<LatLng>>;
    id: Scalars['String']['output'];
    label: Scalars['String']['output'];
    roomTypeCode: Scalars['String']['output'];
    shape: Scalars['String']['output'];
    stayGuiid?: Maybe<Scalars['Int']['output']>;
    stayRoomIndex?: Maybe<Scalars['Int']['output']>;
    strokeColor?: Maybe<Scalars['String']['output']>;
    textColor?: Maybe<Scalars['String']['output']>;
};
export type Measurements = {
    __typename?: 'Measurements';
    calfwidths?: Maybe<Array<Maybe<Calfwidth>>>;
    footwidths?: Maybe<Array<Maybe<Footwidth>>>;
    headsizes?: Maybe<Array<Maybe<Headsize>>>;
    heights?: Maybe<Array<Maybe<Heights>>>;
    shoesizes?: Maybe<Array<Maybe<Shoesize>>>;
    unit?: Maybe<Scalars['String']['output']>;
    weights?: Maybe<Array<Maybe<Weight>>>;
};
export type MeasurementsOutput = {
    __typename?: 'MeasurementsOutput';
    measurements?: Maybe<Measurements>;
};
export type ModuleFacebookActivatedOutput = {
    __typename?: 'ModuleFacebookActivatedOutput';
    activated?: Maybe<Scalars['Boolean']['output']>;
};
export type Mutation = {
    __typename?: 'Mutation';
    addBaby?: Maybe<AddBabyOutput>;
    addCustomerDepositAccountPayments?: Maybe<CustomerDepositAccountPaymentsOutput>;
    addCustomerDepositAccountPaymentsFromPaymentLink?: Maybe<CustomerDepositAccountPaymentsOutputFromPaymentLink>;
    addDiscountCode?: Maybe<DiscountCodeOutput>;
    addFidelityPointToProduct?: Maybe<FidelityPointToCartOutput>;
    addGiftCode?: Maybe<GiftCodeOutput>;
    addObservation?: Maybe<ObservationOutput>;
    addOccupant?: Maybe<AddOccupantOutput>;
    addPartnerCustomerAccount?: Maybe<CustomerAccountOutput>;
    /**
     *  LANG_gql_partnerLogin
     *
     * ---
     *
     * ##  LANG_gql_resa
     * ### LANG_gql_actions
     */
    addPartnerToCart?: Maybe<PartnerToCartOutput>;
    addProductToBooking?: Maybe<ProductToBookingOutput>;
    addProductToOccupant?: Maybe<ProductToOccupantOutput>;
    assignRoom?: Maybe<AssignRoomOutput>;
    cancelFerryBooking?: Maybe<CancelFerryBookingOutput>;
    changePassword?: Maybe<ChangePasswordOutput>;
    chooseFerryProposal?: Maybe<ChooseFerryProposalOutput>;
    chooseProposalFromKeys?: Maybe<ChooseProposalFromKeysOutput>;
    chooseRoundTripProposals?: Maybe<ChooseRoundTripProposalsOutput>;
    confirmFastCheckout?: Maybe<ConfirmFastCheckoutOutput>;
    createCustomerAccount?: Maybe<CreateCustomerAccountOutput>;
    createServiceCustomerAccount?: Maybe<CustomerAccountOutput>;
    disableEnablePartnerCustomerAccount?: Maybe<CustomerAccountOutput>;
    disableServiceCustomerAccount?: Maybe<CustomerAccountOutput>;
    doFastCheckin?: Maybe<DoFastCheckinOutput>;
    doFastCheckout?: Maybe<DoFastCheckoutOutput>;
    expireSession?: Maybe<ExpireSessionOutput>;
    facebookLogin?: Maybe<FacebookLoginOutput>;
    generateLyraFormToken?: Maybe<LyraFormTokenOutput>;
    login?: Maybe<LoginOutput>;
    loginAnyCustomerType?: Maybe<LoginAnyCustomerTypeOutput>;
    loginETOMode?: Maybe<LoginEtoModeOutput>;
    loginHash256?: Maybe<LoginHash256Output>;
    loginPartner?: Maybe<LoginPartnerOutput>;
    logout?: Maybe<LogoutOutput>;
    payOnStoredCreditCard?: Maybe<PayOnStoredCreditCardOutput>;
    redirectPaymentGatewayForAccount?: Maybe<PaymentGatewayForAccountOutput>;
    redirectPaymentGatewayForAmount?: Maybe<PaymentGatewayForAmountOutput>;
    redirectPaymentGatewayForCart?: Maybe<PaymentGatewayForCartOutput>;
    redirectPaymentGatewayForInstalment?: Maybe<PaymentGatewayForInstalmentOutput>;
    redirectPaymentGatewayFromPaymentLink?: Maybe<PaymentGatewayFromPaymentLinkOutput>;
    removeBookingFromCart?: Maybe<RemoveBookingFromCartOutput>;
    removeCartPayments?: Maybe<RemoveCartPaymentsOutput>;
    removeCustomerAccount?: Maybe<RemoveCustomerAccountOutput>;
    removeDiscountCode?: Maybe<RemoveDiscountCodeOutput>;
    removeGiftCode?: Maybe<RemoveGiftCodeOutput>;
    removeOccupant?: Maybe<RemoveOccupantOutput>;
    removeStay?: Maybe<RemoveStayOutput>;
    resetCart?: Maybe<ResetCartOutput>;
    resetPendingFerryBooking?: Maybe<ResetPendingFerryBookingOutput>;
    saveCart?: Maybe<SaveCartOutput>;
    saveFerryBooking?: Maybe<SaveFerryBookingOutput>;
    setSessionLanguage?: Maybe<UserLanguageOutput>;
    switchToPartnerConvention?: Maybe<SwitchToPartnerConventionOutput>;
    unassignRoom?: Maybe<UnassignRoomOutput>;
    unlockBooking?: Maybe<UnlockBookingOutput>;
    updateBookingCriterias?: Maybe<UpdateBookingCriteriasOutput>;
    updateCartPaymentMethod?: Maybe<CartPaymentMethodOutput>;
    updateCartPaymentPlans?: Maybe<CartPaymentPlansOutput>;
    updateCustomerAccount?: Maybe<CustomerAccountOutput>;
    updateCustomerBooking?: Maybe<CustomerBookingOutput>;
    updateFerryAccommodations?: Maybe<UpdateFerryAccommodationsOutput>;
    updateFerryBooking?: Maybe<UpdateFerryBookingOutput>;
    updateFerryTravelersInformation?: Maybe<UpdateFerryTravelersInformationOutput>;
    updateOccupant?: Maybe<OccupantOutput>;
    updateOccupantSkisetMeasurements?: Maybe<UpdateOccupantSkisetMeasurementsOutput>;
    updatePartnerAccount?: Maybe<PartnerOutput>;
    updatePartnerCustomerAccount?: Maybe<CustomerAccountOutput>;
    updatePartnerPaymentPlans?: Maybe<PartnerPaymentPlansOutput>;
    updatePayerPaymentPlans?: Maybe<PayerPaymentPlansOutput>;
    updatePrimaryOccupant?: Maybe<PrimaryOccupantOutput>;
    updateProductCriterias?: Maybe<UpdateBookingCriteriasOutput>;
    updateRoomFromMap?: Maybe<RoomFromMapOutput>;
    updateServiceCustomerAccount?: Maybe<CustomerAccountOutput>;
    updateStayTime?: Maybe<StayTimeOutput>;
    updateTotalOccupants?: Maybe<TotalOccupantsOutput>;
    uploadFiles?: Maybe<UploadFilesOutput>;
    validateLyraPayment?: Maybe<LyraPaymentValidationOutput>;
};
export type MutationAddBabyArgs = {
    input: AddBabyInput;
    session: Session;
};
export type MutationAddCustomerDepositAccountPaymentsArgs = {
    input?: InputMaybe<CustomerDepositAccountPaymentsInput>;
    session: Session;
};
export type MutationAddCustomerDepositAccountPaymentsFromPaymentLinkArgs = {
    input?: InputMaybe<CustomerDepositAccountPaymentsInputFromPaymentLink>;
    paymentLinkAuthenticationInput: PaymentLinkAuthenticationInput;
};
export type MutationAddDiscountCodeArgs = {
    input: DiscountCodeInput;
    session: Session;
};
export type MutationAddFidelityPointToProductArgs = {
    input: FidelityPointToProductInput;
    session: Session;
};
export type MutationAddGiftCodeArgs = {
    input?: InputMaybe<GiftCodeInput>;
    session: Session;
};
export type MutationAddObservationArgs = {
    input: ObservationInput;
    session: Session;
};
export type MutationAddOccupantArgs = {
    input: AddOccupantInput;
    session: Session;
};
export type MutationAddPartnerCustomerAccountArgs = {
    input?: InputMaybe<AddPartnerCustomerAccountInput>;
    session: Session;
};
export type MutationAddPartnerToCartArgs = {
    input: PartnerToCartInput;
    session: Session;
};
export type MutationAddProductToBookingArgs = {
    input: ProductToBookingInput;
    session: Session;
};
export type MutationAddProductToOccupantArgs = {
    input: Array<InputMaybe<ProductToOccupantInput>>;
    session: Session;
};
export type MutationAssignRoomArgs = {
    input: AssignRoomInput;
    session: Session;
};
export type MutationCancelFerryBookingArgs = {
    input?: InputMaybe<CancelFerryBookingInput>;
    session: Session;
};
export type MutationChangePasswordArgs = {
    input: ChangePasswordInput;
    session: Session;
};
export type MutationChooseFerryProposalArgs = {
    input: ChooseFerryProposalInput;
    session: Session;
};
export type MutationChooseProposalFromKeysArgs = {
    input: ChooseProposalFromKeysInput;
    session: Session;
};
export type MutationChooseRoundTripProposalsArgs = {
    input: ChooseRoundTripProposalsInput;
    session: Session;
};
export type MutationConfirmFastCheckoutArgs = {
    input?: InputMaybe<ConfirmFastCheckoutInput>;
    session: Session;
};
export type MutationCreateCustomerAccountArgs = {
    input?: InputMaybe<CreateCustomerAccountInput>;
    session: Session;
};
export type MutationCreateServiceCustomerAccountArgs = {
    input?: InputMaybe<CreateServiceCustomerAccountInput>;
    session: Session;
};
export type MutationDisableEnablePartnerCustomerAccountArgs = {
    input?: InputMaybe<DisableEnablePartnerCustomerAccountInput>;
    session: Session;
};
export type MutationDisableServiceCustomerAccountArgs = {
    input?: InputMaybe<DisableServiceCustomerAccountInput>;
    session: Session;
};
export type MutationDoFastCheckinArgs = {
    input?: InputMaybe<DoFastCheckinInput>;
    session: Session;
};
export type MutationDoFastCheckoutArgs = {
    input?: InputMaybe<DoFastCheckoutInput>;
    session: Session;
};
export type MutationExpireSessionArgs = {
    session: Session;
};
export type MutationFacebookLoginArgs = {
    input: FacebookLoginInput;
    session: Session;
};
export type MutationGenerateLyraFormTokenArgs = {
    input: LyraFormTokenInput;
    session: Session;
};
export type MutationLoginArgs = {
    input: LoginInput;
    session: Session;
};
export type MutationLoginAnyCustomerTypeArgs = {
    input?: InputMaybe<LoginAnyCustomerTypeInput>;
    session: Session;
};
export type MutationLoginEtoModeArgs = {
    input: LoginEtoModeInput;
    session: Session;
};
export type MutationLoginHash256Args = {
    input: LoginHash256Input;
    session: Session;
};
export type MutationLoginPartnerArgs = {
    input?: InputMaybe<LoginPartnerInput>;
    session: Session;
};
export type MutationLogoutArgs = {
    session: Session;
};
export type MutationPayOnStoredCreditCardArgs = {
    input?: InputMaybe<PayOnStoredCreditCardInput>;
    session: Session;
};
export type MutationRedirectPaymentGatewayForAccountArgs = {
    input: PaymentGatewayForAccountInput;
    session: Session;
};
export type MutationRedirectPaymentGatewayForAmountArgs = {
    input: PaymentGatewayForAmountInput;
    session: Session;
};
export type MutationRedirectPaymentGatewayForCartArgs = {
    input: PaymentGatewayForCartInput;
    session: Session;
};
export type MutationRedirectPaymentGatewayForInstalmentArgs = {
    input: PaymentGatewayForInstalmentInput;
    session: Session;
};
export type MutationRedirectPaymentGatewayFromPaymentLinkArgs = {
    input?: InputMaybe<PaymentGatewayFromPaymentLinkInput>;
    paymentLinkAuthenticationInput: PaymentLinkAuthenticationInput;
};
export type MutationRemoveBookingFromCartArgs = {
    input?: InputMaybe<RemoveBookingFromCartInput>;
    session: Session;
};
export type MutationRemoveCartPaymentsArgs = {
    session: Session;
};
export type MutationRemoveCustomerAccountArgs = {
    session: Session;
};
export type MutationRemoveDiscountCodeArgs = {
    session: Session;
};
export type MutationRemoveGiftCodeArgs = {
    input?: InputMaybe<RemoveGiftCodeInput>;
    session: Session;
};
export type MutationRemoveOccupantArgs = {
    input: RemoveOccupantInput;
    session: Session;
};
export type MutationRemoveStayArgs = {
    input: RemoveStayInput;
    session: Session;
};
export type MutationResetCartArgs = {
    session: Session;
};
export type MutationResetPendingFerryBookingArgs = {
    session: Session;
};
export type MutationSaveCartArgs = {
    input?: InputMaybe<SaveCartInput>;
    session: Session;
};
export type MutationSaveFerryBookingArgs = {
    input?: InputMaybe<SaveFerryBookingInput>;
    session: Session;
};
export type MutationSetSessionLanguageArgs = {
    input: SessionLanguageInput;
    session: Session;
};
export type MutationSwitchToPartnerConventionArgs = {
    input: SwitchToPartnerConventionInput;
    session: Session;
};
export type MutationUnassignRoomArgs = {
    input: UnassignRoomInput;
    session: Session;
};
export type MutationUnlockBookingArgs = {
    input: UnlockBookingInput;
    session: Session;
};
export type MutationUpdateBookingCriteriasArgs = {
    input: UpdateBookingCriteriasInput;
    session: Session;
};
export type MutationUpdateCartPaymentMethodArgs = {
    input: CartPaymentMethodInput;
    session: Session;
};
export type MutationUpdateCartPaymentPlansArgs = {
    input?: InputMaybe<CartPaymentPlansInput>;
    session: Session;
};
export type MutationUpdateCustomerAccountArgs = {
    input?: InputMaybe<CustomerAccountInput>;
    session: Session;
};
export type MutationUpdateCustomerBookingArgs = {
    input: CustomerBookingInput;
    session: Session;
};
export type MutationUpdateFerryAccommodationsArgs = {
    input: UpdateFerryAccommodationsInput;
    session: Session;
};
export type MutationUpdateFerryBookingArgs = {
    input: UpdateFerryBookingInput;
    session: Session;
};
export type MutationUpdateFerryTravelersInformationArgs = {
    input: UpdateFerryTravelersInformationInput;
    session: Session;
};
export type MutationUpdateOccupantArgs = {
    input: OccupantInput;
    session: Session;
};
export type MutationUpdateOccupantSkisetMeasurementsArgs = {
    input: UpdateOccupantSkisetMeasurementsInput;
    session: Session;
};
export type MutationUpdatePartnerAccountArgs = {
    input?: InputMaybe<PartnerAccountInput>;
    session: Session;
};
export type MutationUpdatePartnerCustomerAccountArgs = {
    input?: InputMaybe<UpdatePartnerCustomerAccountInput>;
    session: Session;
};
export type MutationUpdatePartnerPaymentPlansArgs = {
    input?: InputMaybe<PartnerPaymentPlansInput>;
    session: Session;
};
export type MutationUpdatePayerPaymentPlansArgs = {
    input?: InputMaybe<PayerPaymentPlansInput>;
    session: Session;
};
export type MutationUpdatePrimaryOccupantArgs = {
    input: PrimaryOccupantInput;
    session: Session;
};
export type MutationUpdateProductCriteriasArgs = {
    input: UpdateProductCriteriasInput;
    session: Session;
};
export type MutationUpdateRoomFromMapArgs = {
    input: RoomFromMapInput;
    session: Session;
};
export type MutationUpdateServiceCustomerAccountArgs = {
    input?: InputMaybe<UpdateServiceCustomerAccountInput>;
    session: Session;
};
export type MutationUpdateStayTimeArgs = {
    input: StayTimeInput;
    session: Session;
};
export type MutationUpdateTotalOccupantsArgs = {
    input: TotalOccupantsInput;
    session: Session;
};
export type MutationUploadFilesArgs = {
    input: Array<InputMaybe<UploadFileInput>>;
    session: Session;
};
export type MutationValidateLyraPaymentArgs = {
    input: LyraPaymentValidationInput;
    session: Session;
};
export type MyLoginInput = {
    email?: InputMaybe<Scalars['String']['input']>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    zipCode?: InputMaybe<Scalars['String']['input']>;
};
export type MyLoginOutput = {
    __typename?: 'MyLoginOutput';
    login?: Maybe<Scalars['Boolean']['output']>;
};
export type Nationality = {
    __typename?: 'Nationality';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type NeobookingTranslationsInput = {
    languages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type NeobookingTranslationsOutput = {
    __typename?: 'NeobookingTranslationsOutput';
    translations?: Maybe<Array<Maybe<Language>>>;
};
export type ObservationInput = {
    bookingCartItemIDs?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    observation: Scalars['String']['input'];
};
export type ObservationOutput = {
    __typename?: 'ObservationOutput';
    cart?: Maybe<Cart>;
};
export type Occupant = {
    __typename?: 'Occupant';
    birthDate?: Maybe<Scalars['Date']['output']>;
    civility?: Maybe<Civility>;
    firstName?: Maybe<Scalars['String']['output']>;
    giftVoucherCode?: Maybe<Scalars['String']['output']>;
    guiid?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    isAdult?: Maybe<Scalars['Boolean']['output']>;
    isBaby?: Maybe<Scalars['Boolean']['output']>;
    isChildren1?: Maybe<Scalars['Boolean']['output']>;
    isChildren2?: Maybe<Scalars['Boolean']['output']>;
    lastName?: Maybe<Scalars['String']['output']>;
    lineItems?: Maybe<Array<Maybe<Lineitem>>>;
    paymentDues?: Maybe<Array<Maybe<PaymentDue>>>;
    skisetMeasurements?: Maybe<Array<Maybe<OccupantMeasurement>>>;
    totalAmount?: Maybe<Amount>;
};
export type OccupantInput = {
    birthDate?: InputMaybe<Scalars['Date']['input']>;
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    civilityCode?: InputMaybe<Scalars['String']['input']>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    occupantGuiid: Scalars['Int']['input'];
};
export type OccupantMeasurement = {
    __typename?: 'OccupantMeasurement';
    measureId: Scalars['Int']['output'];
    measureType: SkisetMeasureType;
};
export type OccupantMeasurementInput = {
    measureId: Scalars['Int']['input'];
    measureType: SkisetMeasureType;
    occupantGuiid: Scalars['Int']['input'];
};
export type OccupantOutput = {
    __typename?: 'OccupantOutput';
    cart?: Maybe<Cart>;
};
export type OccupantProductsInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    categoryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    excludeMandatoryProduct?: InputMaybe<Scalars['Boolean']['input']>;
    occupantGuiid: Scalars['Int']['input'];
};
export type OccupantProductsOutput = {
    __typename?: 'OccupantProductsOutput';
    occupantProducts?: Maybe<Array<Maybe<ProductByCategory>>>;
};
export declare enum OccupantTypeEnum {
    IsAdult = "IS_ADULT",
    IsChildren_1 = "IS_CHILDREN_1",
    IsChildren_2 = "IS_CHILDREN_2"
}
export type OccupantsFromCurrentCustomerInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
};
export type OccupantsFromCurrentCustomerOutput = {
    __typename?: 'OccupantsFromCurrentCustomerOutput';
    occupants?: Maybe<Array<Maybe<Occupant>>>;
};
export type Option = {
    __typename?: 'Option';
    code?: Maybe<Scalars['String']['output']>;
    default?: Maybe<Scalars['Boolean']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type OwnerLease = {
    __typename?: 'OwnerLease';
    etabId?: Maybe<Scalars['Int']['output']>;
    etabLabel?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    periods?: Maybe<Array<Maybe<OwnerLeasePeriod>>>;
};
export type OwnerLeasePeriod = {
    __typename?: 'OwnerLeasePeriod';
    id?: Maybe<Scalars['Int']['output']>;
    lots?: Maybe<Array<Maybe<OwnerLot>>>;
};
export type OwnerLot = {
    __typename?: 'OwnerLot';
    id?: Maybe<Scalars['Int']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    roomNumbers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};
export type OwnerRoomPlanningDataInput = {
    campaignCode: Scalars['String']['input'];
    month?: InputMaybe<Scalars['Int']['input']>;
    ownerLotId: Scalars['Int']['input'];
    year?: InputMaybe<Scalars['Int']['input']>;
};
export type OwnerRoomPlanningDataOutput = {
    __typename?: 'OwnerRoomPlanningDataOutput';
    calendarPeriods?: Maybe<Array<Maybe<CalendarPeriod>>>;
};
export type OwnerleasesOutput = {
    __typename?: 'OwnerleasesOutput';
    leases?: Maybe<Array<Maybe<OwnerLease>>>;
};
export type PartnerAccountInput = {
    account?: InputMaybe<AccountInput>;
    address?: InputMaybe<CustomerAddressInput>;
    birthDate?: InputMaybe<Scalars['Date']['input']>;
    civility?: InputMaybe<Scalars['String']['input']>;
    contactName?: InputMaybe<Scalars['String']['input']>;
    languageCode?: InputMaybe<Scalars['String']['input']>;
    partnerName?: InputMaybe<Scalars['String']['input']>;
};
export type PartnerContact = {
    __typename?: 'PartnerContact';
    mail?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    phone1?: Maybe<Scalars['String']['output']>;
    phone2?: Maybe<Scalars['String']['output']>;
};
export type PartnerCustomerInfo = {
    __typename?: 'PartnerCustomerInfo';
    civility?: Maybe<Scalars['String']['output']>;
    customerCode?: Maybe<Scalars['String']['output']>;
    disabled?: Maybe<Scalars['Boolean']['output']>;
    email?: Maybe<Scalars['String']['output']>;
    externalCode?: Maybe<Scalars['String']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export type PartnerCustomerInfoOutput = {
    __typename?: 'PartnerCustomerInfoOutput';
    customers?: Maybe<Array<Maybe<PartnerCustomerInfo>>>;
};
export type PartnerOutput = {
    __typename?: 'PartnerOutput';
    primaryContact?: Maybe<PartnerContact>;
    service?: Maybe<Service>;
};
export type PartnerPaymentPlansInput = {
    paymentPlan?: InputMaybe<Scalars['String']['input']>;
};
export type PartnerPaymentPlansOutput = {
    __typename?: 'PartnerPaymentPlansOutput';
    cart?: Maybe<Cart>;
};
export type PartnerToCartInput = {
    partnerCode: Scalars['String']['input'];
};
export type PartnerToCartOutput = {
    __typename?: 'PartnerToCartOutput';
    service?: Maybe<Service>;
};
export type Passenger = {
    __typename?: 'Passenger';
    availablePassengerTypes?: Maybe<Array<Maybe<PassengerType>>>;
    birthDate: Scalars['Date']['output'];
    civility?: Maybe<Civility>;
    firstName?: Maybe<Scalars['String']['output']>;
    index?: Maybe<Scalars['Int']['output']>;
    lastName: Scalars['String']['output'];
    nationality?: Maybe<Scalars['String']['output']>;
    passengerTypeCode?: Maybe<Scalars['String']['output']>;
    passport?: Maybe<Scalars['String']['output']>;
    passportExpiry?: Maybe<Scalars['Date']['output']>;
};
export type PassengerInfo = {
    birthDate?: InputMaybe<Scalars['Date']['input']>;
    civility?: InputMaybe<Scalars['String']['input']>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    index?: InputMaybe<Scalars['Int']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    nationality?: InputMaybe<Scalars['String']['input']>;
    passport?: InputMaybe<Scalars['String']['input']>;
    passportExpiry?: InputMaybe<Scalars['Date']['input']>;
    type?: InputMaybe<Scalars['String']['input']>;
};
export type PassengerType = {
    __typename?: 'PassengerType';
    code: Scalars['String']['output'];
    label?: Maybe<Scalars['String']['output']>;
};
export type PayerPaymentPlansInput = {
    paymentPlan?: InputMaybe<Scalars['String']['input']>;
};
export type PayerPaymentPlansOutput = {
    __typename?: 'PayerPaymentPlansOutput';
    cart?: Maybe<Cart>;
};
export type Payment = {
    __typename?: 'Payment';
    amount?: Maybe<Amount>;
    date?: Maybe<Scalars['RslDate']['output']>;
    guiid?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    paymentModeLabel?: Maybe<Scalars['String']['output']>;
    voucherCode?: Maybe<Scalars['String']['output']>;
};
export type PaymentDue = {
    __typename?: 'PaymentDue';
    amount?: Maybe<Amount>;
    code?: Maybe<Scalars['String']['output']>;
    creditCard?: Maybe<CreditCard>;
    date?: Maybe<Scalars['RslDate']['output']>;
    guiid?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    payments?: Maybe<Array<Maybe<Payment>>>;
    receivedAmount?: Maybe<Amount>;
    remainingAmount?: Maybe<Amount>;
    type?: Maybe<PaymentdueType>;
};
export type PaymentGatewayForAccountInput = {
    accountId: Scalars['Int']['input'];
    input: CartPaymentMethodInput;
};
export type PaymentGatewayForAccountOutput = {
    __typename?: 'PaymentGatewayForAccountOutput';
    gateway?: Maybe<Scalars['String']['output']>;
};
export type PaymentGatewayForAmountInput = {
    bookingId: Scalars['Int']['input'];
    ccAmount: Scalars['BigDecimal']['input'];
    input: CartPaymentMethodInput;
    instalmentId: Scalars['Int']['input'];
};
export type PaymentGatewayForAmountOutput = {
    __typename?: 'PaymentGatewayForAmountOutput';
    gateway?: Maybe<Scalars['String']['output']>;
};
export type PaymentGatewayForCartInput = {
    input: CartPaymentMethodInput;
    passNewAmountLowerThanPrevious?: InputMaybe<Scalars['Boolean']['input']>;
};
export type PaymentGatewayForCartOutput = {
    __typename?: 'PaymentGatewayForCartOutput';
    gateway?: Maybe<Scalars['String']['output']>;
};
export type PaymentGatewayForInstalmentInput = {
    input: CartPaymentMethodInput;
    instalmentId: Scalars['Int']['input'];
};
export type PaymentGatewayForInstalmentOutput = {
    __typename?: 'PaymentGatewayForInstalmentOutput';
    gateway?: Maybe<Scalars['String']['output']>;
};
export type PaymentGatewayFromPaymentLinkInput = {
    ccardType?: InputMaybe<Scalars['Int']['input']>;
    instalmentId?: InputMaybe<Scalars['Int']['input']>;
    paymentAmount?: InputMaybe<Scalars['BigDecimal']['input']>;
    url?: InputMaybe<PspUrl>;
};
export type PaymentGatewayFromPaymentLinkOutput = {
    __typename?: 'PaymentGatewayFromPaymentLinkOutput';
    gateway?: Maybe<Scalars['String']['output']>;
};
export type PaymentLinkAuthenticationInput = {
    paymentLinkToken: Scalars['String']['input'];
    username: Scalars['String']['input'];
};
export type PaymentLinkInfosOutput = {
    __typename?: 'PaymentLinkInfosOutput';
    customerBooking?: Maybe<CustomerBooking>;
    customerDepositAccounts?: Maybe<Array<Maybe<CustomerDepositAccount>>>;
    occupant?: Maybe<Occupant>;
    paymentMethod?: Maybe<PaymentMethod>;
    service?: Maybe<Service>;
};
export type PaymentMethod = {
    __typename?: 'PaymentMethod';
    automaticPaymentCode?: Maybe<Scalars['String']['output']>;
    /** @deprecated Use 'automaticPaymentMethodOption'. */
    automaticPaymentMethod?: Maybe<Array<Maybe<Option>>>;
    automaticPaymentMethodOption?: Maybe<Array<Maybe<PaymentMethodOption>>>;
    /** @deprecated Use 'paymentMethodOption'. */
    paymentMethod?: Maybe<Array<Maybe<Option>>>;
    paymentMethodOption?: Maybe<Array<Maybe<PaymentMethodOption>>>;
    virtualPaymentCode?: Maybe<Scalars['String']['output']>;
};
export type PaymentMethodOption = {
    __typename?: 'PaymentMethodOption';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type PaymentMethodsOutput = {
    __typename?: 'PaymentMethodsOutput';
    paymentMethod?: Maybe<PaymentMethod>;
};
export type PaymentPlan = {
    __typename?: 'PaymentPlan';
    cartItemID?: Maybe<Scalars['Int']['output']>;
    cmsCriterias?: Maybe<Array<Maybe<CriteriaValue>>>;
    code?: Maybe<Scalars['String']['output']>;
    isDefault?: Maybe<Scalars['Boolean']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    occupantPaymentDues?: Maybe<Array<Maybe<PaymentDue>>>;
    partnerPaymentDues?: Maybe<Array<Maybe<PaymentDue>>>;
    paymentMethod?: Maybe<PaymentMethod>;
};
export type PaymentPlansInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
};
export type PaymentPlansOutput = {
    __typename?: 'PaymentPlansOutput';
    paymentPlans?: Maybe<Array<Maybe<PaymentPlan>>>;
};
export declare enum PaymentdueType {
    Arrhes = "ARRHES",
    Cashless = "CASHLESS",
    Monthly = "MONTHLY",
    Solde = "SOLDE"
}
export type PendingFerryBookingOutput = {
    __typename?: 'PendingFerryBookingOutput';
    ferryBooking?: Maybe<FerryBooking>;
};
export type PlanningRoom = {
    __typename?: 'PlanningRoom';
    available?: Maybe<Scalars['Boolean']['output']>;
    endDate?: Maybe<Scalars['Date']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    roomNumber?: Maybe<Scalars['String']['output']>;
    roomTypeCode?: Maybe<Scalars['String']['output']>;
    startDate?: Maybe<Scalars['Date']['output']>;
};
export type Port = {
    __typename?: 'Port';
    label?: Maybe<Scalars['String']['output']>;
    portName?: Maybe<Scalars['String']['output']>;
};
export type PostCodeApiDetailInput = {
    apiSession: Scalars['String']['input'];
    context: Scalars['String']['input'];
};
export type PostCodeApiDetailOutput = {
    __typename?: 'PostCodeApiDetailOutput';
    code?: Maybe<Scalars['String']['output']>;
};
export type PostCodeApiSimpleInput = {
    country?: InputMaybe<Scalars['String']['input']>;
    postApiContext?: InputMaybe<Scalars['String']['input']>;
    term: Scalars['String']['input'];
};
export type PostCodeApiSimpleOutput = {
    __typename?: 'PostCodeApiSimpleOutput';
    code?: Maybe<Scalars['String']['output']>;
};
export type PrimaryOccupant = {
    __typename?: 'PrimaryOccupant';
    address?: Maybe<Address>;
    birthDate?: Maybe<Scalars['RslDate']['output']>;
    civility?: Maybe<Civility>;
    customerCode?: Maybe<Scalars['String']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use 'occupantLanguage'. */
    language?: Maybe<Option>;
    lastName?: Maybe<Scalars['String']['output']>;
    occupantLanguage?: Maybe<Language>;
};
export type PrimaryOccupantInput = {
    address?: InputMaybe<CustomerAddressInput>;
    birthDate?: InputMaybe<Scalars['Date']['input']>;
    bookingId?: InputMaybe<Scalars['Int']['input']>;
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    civility?: InputMaybe<Scalars['String']['input']>;
    firstName: Scalars['String']['input'];
    languageCode?: InputMaybe<Scalars['String']['input']>;
    lastName: Scalars['String']['input'];
};
export type PrimaryOccupantOutput = {
    __typename?: 'PrimaryOccupantOutput';
    cart?: Maybe<Cart>;
};
export type PrivilegeCard = {
    __typename?: 'PrivilegeCard';
    active?: Maybe<Scalars['Boolean']['output']>;
    bookingId?: Maybe<Scalars['Int']['output']>;
    endDate?: Maybe<Scalars['Date']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    points?: Maybe<Scalars['Int']['output']>;
    service?: Maybe<Service>;
    startDate?: Maybe<Scalars['Date']['output']>;
    type?: Maybe<Scalars['String']['output']>;
};
export type PrivilegeCardType = {
    __typename?: 'PrivilegeCardType';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type PrivilegeCardTypesOutput = {
    __typename?: 'PrivilegeCardTypesOutput';
    privilegeCardTypeList?: Maybe<Array<Maybe<PrivilegeCardType>>>;
    /** @deprecated Use 'privilegeCardTypeList'. */
    privilegeCardTypes?: Maybe<Array<Maybe<Option>>>;
};
export type Product = {
    __typename?: 'Product';
    ageFrom?: Maybe<Scalars['Int']['output']>;
    ageTo?: Maybe<Scalars['Int']['output']>;
    categoryCode?: Maybe<Scalars['String']['output']>;
    categoryLabel?: Maybe<Scalars['String']['output']>;
    cmsCriterias?: Maybe<Array<Maybe<CriteriaValue>>>;
    code: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    distributionType?: Maybe<ProductDistributionType>;
    forCart?: Maybe<Scalars['Boolean']['output']>;
    id: Scalars['Int']['output'];
    imagePath?: Maybe<Scalars['String']['output']>;
    isBase?: Maybe<Scalars['Boolean']['output']>;
    isLongStay?: Maybe<Scalars['Boolean']['output']>;
    isPackage?: Maybe<Scalars['Boolean']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    linkedToMap?: Maybe<Scalars['Boolean']['output']>;
    mandatory?: Maybe<Scalars['Boolean']['output']>;
    occupantApplication?: Maybe<ProductOccupantApplication>;
    originalLabel?: Maybe<Scalars['String']['output']>;
    otherCode?: Maybe<Scalars['String']['output']>;
    otherLabel?: Maybe<Scalars['String']['output']>;
    price?: Maybe<Amount>;
    priceWithoutDiscounts?: Maybe<Amount>;
    productCriterias?: Maybe<Array<Maybe<CriteriaValue>>>;
    /** @deprecated Use 'quantityMax'. */
    quantity?: Maybe<Scalars['Int']['output']>;
    quantityMax?: Maybe<Scalars['Int']['output']>;
    stock?: Maybe<Scalars['Int']['output']>;
    subProducts?: Maybe<Array<Maybe<Product>>>;
    webLabel?: Maybe<Scalars['String']['output']>;
};
export type ProductByCategory = {
    __typename?: 'ProductByCategory';
    categoryCode?: Maybe<Scalars['String']['output']>;
    categoryLabel?: Maybe<Scalars['String']['output']>;
    products?: Maybe<Array<Maybe<Product>>>;
};
export type ProductCmsCriteria = {
    __typename?: 'ProductCMSCriteria';
    cmsCriteria?: Maybe<CmsCriteria>;
};
export type ProductCmsCriteriasOutput = {
    __typename?: 'ProductCMSCriteriasOutput';
    criterias?: Maybe<Array<Maybe<ProductCmsCriteria>>>;
};
export type ProductCategoriesOutput = {
    __typename?: 'ProductCategoriesOutput';
    productCategories?: Maybe<Array<Maybe<ProductCategory>>>;
};
export type ProductCategory = {
    __typename?: 'ProductCategory';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    order?: Maybe<Scalars['Int']['output']>;
};
export declare enum ProductDistributionType {
    Campaign = "CAMPAIGN",
    Global = "GLOBAL",
    Occupant = "OCCUPANT",
    Room = "ROOM"
}
export declare enum ProductOccupantApplication {
    Everybody = "EVERYBODY",
    EverybodyInRoom = "EVERYBODY_IN_ROOM",
    Himself = "HIMSELF"
}
export type ProductOption = {
    __typename?: 'ProductOption';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type ProductPropertiesOutput = {
    __typename?: 'ProductPropertiesOutput';
    properties?: Maybe<Array<Maybe<Property>>>;
};
export type ProductProposal = {
    __typename?: 'ProductProposal';
    desc?: Maybe<Scalars['String']['output']>;
    endDate?: Maybe<Scalars['Date']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    productCode?: Maybe<Scalars['String']['output']>;
    propertyId?: Maybe<Scalars['Int']['output']>;
    proposalKey: Scalars['String']['output'];
    startDate?: Maybe<Scalars['Date']['output']>;
};
export type ProductProposalsInput = {
    cmsCriteriaValue?: InputMaybe<CmsCriteriaValueInput>;
    nbDays?: InputMaybe<Scalars['Int']['input']>;
    propertyId?: InputMaybe<Scalars['Int']['input']>;
    selectedDate: Scalars['Date']['input'];
};
export type ProductProposalsOutput = {
    __typename?: 'ProductProposalsOutput';
    proposals?: Maybe<Array<Maybe<ProductProposal>>>;
};
export type ProductToBookingInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    productCode: Scalars['String']['input'];
    productID: Scalars['Int']['input'];
    quantity?: InputMaybe<Scalars['Int']['input']>;
    stayGuiid?: InputMaybe<Scalars['Int']['input']>;
};
export type ProductToBookingOutput = {
    __typename?: 'ProductToBookingOutput';
    cart?: Maybe<Cart>;
};
export type ProductToOccupantInput = {
    occupantGuiid: Scalars['Int']['input'];
    productCode: Scalars['String']['input'];
    productID: Scalars['Int']['input'];
    quantity: Scalars['Int']['input'];
};
export type ProductToOccupantOutput = {
    __typename?: 'ProductToOccupantOutput';
    cart?: Maybe<Cart>;
};
export type ProductsForOccupantOutput = {
    __typename?: 'ProductsForOccupantOutput';
    hasProductsForOccupant?: Maybe<Scalars['Boolean']['output']>;
};
export type PropertiesInput = {
    propertyIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
    roomFeatureCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    stayType?: InputMaybe<Scalars['Int']['input']>;
};
export type PropertiesOutput = {
    __typename?: 'PropertiesOutput';
    properties?: Maybe<Array<Maybe<Property>>>;
};
export type Property = {
    __typename?: 'Property';
    address?: Maybe<Address>;
    cmsCriterias?: Maybe<Array<Maybe<CriteriaValue>>>;
    description?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    imagePath?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    roomFeatures?: Maybe<Array<Maybe<CriteriaValue>>>;
};
export type Proposal = {
    __typename?: 'Proposal';
    baseProductPrice?: Maybe<Amount>;
    discountInfo?: Maybe<Scalars['String']['output']>;
    distribution?: Maybe<Distribution>;
    endDate?: Maybe<Scalars['Date']['output']>;
    imagePath?: Maybe<Scalars['String']['output']>;
    isAlternativeProposal?: Maybe<Scalars['Boolean']['output']>;
    isCounterProposal?: Maybe<Scalars['Boolean']['output']>;
    isMonthPrice?: Maybe<Scalars['Boolean']['output']>;
    lineItems?: Maybe<Array<Maybe<Lineitem>>>;
    nbDays?: Maybe<Scalars['Int']['output']>;
    price?: Maybe<Amount>;
    priceWithoutDiscount?: Maybe<Amount>;
    /** @deprecated Use 'productOption'. */
    product?: Maybe<Option>;
    productOption?: Maybe<ProductOption>;
    propertyId?: Maybe<Scalars['Int']['output']>;
    /**
     *  Clé de proposition
     *
     * ---
     *
     * ## test
     * ### test2
     */
    proposalKey?: Maybe<Scalars['String']['output']>;
    roomFeaturesValues?: Maybe<Array<Maybe<CriteriaValue>>>;
    startDate?: Maybe<Scalars['Date']['output']>;
    stock?: Maybe<Scalars['String']['output']>;
};
export type ProposalByProperty = {
    __typename?: 'ProposalByProperty';
    property?: Maybe<Property>;
    proposals: Array<Proposal>;
};
export type ProposalByRoomTypesInput = {
    baseProductCode: Scalars['String']['input'];
    campaignCode?: InputMaybe<Scalars['String']['input']>;
    childrenBirthdate?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
    endDate?: InputMaybe<Scalars['Date']['input']>;
    nbAdults: Scalars['Int']['input'];
    nbBabies?: InputMaybe<Scalars['Int']['input']>;
    nbChildren1?: InputMaybe<Scalars['Int']['input']>;
    nbChildren2?: InputMaybe<Scalars['Int']['input']>;
    nbDays?: InputMaybe<Scalars['Int']['input']>;
    propertyId: Scalars['Int']['input'];
    roomTypeCodes: Array<InputMaybe<Scalars['String']['input']>>;
    startDate: Scalars['Date']['input'];
};
export type ProposalByRoomTypesOutput = {
    __typename?: 'ProposalByRoomTypesOutput';
    proposals: Array<Proposal>;
};
export type ProposalsByKeysInput = {
    proposalKeys: Array<Scalars['String']['input']>;
};
export type ProposalsByKeysOutput = {
    __typename?: 'ProposalsByKeysOutput';
    proposals: Array<Proposal>;
};
export type ProposalsByPropertiesInput = {
    criterias?: InputMaybe<Criterias>;
};
export type ProposalsByPropertiesOutput = {
    __typename?: 'ProposalsByPropertiesOutput';
    proposalByProperty: Array<ProposalByProperty>;
};
export type ProposalsInput = {
    criterias?: InputMaybe<Criterias>;
};
export type ProposalsOutput = {
    __typename?: 'ProposalsOutput';
    proposals: Array<Proposal>;
};
export type PspUrl = {
    acceptUrl?: InputMaybe<Scalars['String']['input']>;
    cancelUrl?: InputMaybe<Scalars['String']['input']>;
    declineUrl?: InputMaybe<Scalars['String']['input']>;
    exceptionUrl?: InputMaybe<Scalars['String']['input']>;
};
export type PspUrlOutput = {
    __typename?: 'PspUrlOutput';
    acceptUrl?: Maybe<Scalars['String']['output']>;
    cancelUrl?: Maybe<Scalars['String']['output']>;
    declineUrl?: Maybe<Scalars['String']['output']>;
    exceptionUrl?: Maybe<Scalars['String']['output']>;
};
/** test query */
export type Query = {
    __typename?: 'Query';
    checkApiAlive?: Maybe<ApiAliveOutput>;
    checkModuleFacebookActivated?: Maybe<ModuleFacebookActivatedOutput>;
    checkSessionActivated?: Maybe<SessionActivatedOutput>;
    checkValidLogin?: Maybe<ValidLoginOutput>;
    getAccommodationProducts?: Maybe<AccommodationProductsOutput>;
    getAllOccupantProductsAllAgeRanges?: Maybe<AllOccupantProductsAllAgeRangesOutput>;
    getAlternativeProposalRulesForContractFolder?: Maybe<AlternativeProposalRulesForContractFolderOutput>;
    getAvailForRoomTypes?: Maybe<AvailForRoomTypesOutput>;
    getAvailableRoomFeatures?: Maybe<AvailableRoomFeaturesOutput>;
    getAvailableRooms?: Maybe<AvailableRoomsOutput>;
    getBookingCustomerDepositAccountInfos?: Maybe<BookingCustomerDepositAccountInfosOutput>;
    getBookingDocuments?: Maybe<BookingDocumentsOutput>;
    getBookingPaymentPlans?: Maybe<PaymentPlansOutput>;
    getBookingProducts?: Maybe<BookingProductsOutput>;
    getBookingRecordCriterias?: Maybe<BookingRecordCriteriasOutput>;
    getBrochures?: Maybe<BrochuresOutput>;
    getCampaigns?: Maybe<CampaignsOutput>;
    getCart?: Maybe<CartOutput>;
    getCivilities?: Maybe<CivilitiesOutput>;
    getCountries?: Maybe<CountriesOutput>;
    /**
     *  LANG_gql_getCriteria
     *
     * ### LANG_gql_actions
     */
    getCriteriaInformation?: Maybe<CriteriaInformationOutput>;
    getCurrentCustomerAccount?: Maybe<CurrentCustomerAccountOutput>;
    getCustomerBookings?: Maybe<CustomerBookingsOutput>;
    getCustomerCriterias?: Maybe<CustomerCriteriasOutput>;
    getCustomerDepositAccounts?: Maybe<CustomerDepositAccountsOutput>;
    getCustomerGiftCodes?: Maybe<CustomerGiftCodesOutput>;
    getCustomerLoyaltyPoints?: Maybe<CustomerLoyaltyPointsOutput>;
    getCustomerPrivilegeCards?: Maybe<CustomerPrivilegeCardsOutput>;
    getFerryAddonCategories?: Maybe<FerryAddonCategoriesOutput>;
    getFerryAvailableAccommodations?: Maybe<FerryAvailableAccommodationsOutput>;
    getFerryCars?: Maybe<FerryCarsOutput>;
    getFerryCivilities?: Maybe<FerryCivilitiesOutput>;
    getFerryCrossings?: Maybe<FerryCrossingsOutput>;
    getFerryNationalities?: Maybe<FerryNationalitiesOutput>;
    getFerryPorts?: Maybe<FerryPortsOutput>;
    getFerryProducts?: Maybe<FerryProductsOutput>;
    getFerryProposals?: Maybe<FerryProposalsOutput>;
    getFerryTrailerCategories?: Maybe<FerryTrailerCategoriesOutput>;
    getFerryVehicleCategories?: Maybe<FerryVehicleCategoriesOutput>;
    getFerryVehicleFuels?: Maybe<FerryVehicleFuelsOutput>;
    getFidelityLogs?: Maybe<FidelityLogsOutput>;
    getFidelityRules?: Maybe<FidelityRulesOutput>;
    getLanguages?: Maybe<LanguagesOutput>;
    getLyraFormToken?: Maybe<LyraFormTokenOutput>;
    getMapSelectorData?: Maybe<MapSelectorDataOutput>;
    getMyLogin?: Maybe<MyLoginOutput>;
    getNeobookingTranslations?: Maybe<NeobookingTranslationsOutput>;
    getOccupantProducts?: Maybe<OccupantProductsOutput>;
    getOccupantsFromCurrentCustomer?: Maybe<OccupantsFromCurrentCustomerOutput>;
    getOwnerLeases?: Maybe<OwnerleasesOutput>;
    getOwnerRoomPlanningData?: Maybe<OwnerRoomPlanningDataOutput>;
    getPartner?: Maybe<PartnerOutput>;
    getPartnerCustomers?: Maybe<PartnerCustomerInfoOutput>;
    getPaymentLinkInfos?: Maybe<PaymentLinkInfosOutput>;
    getPaymentMethods?: Maybe<PaymentMethodsOutput>;
    getPaymentPlans?: Maybe<PaymentPlansOutput>;
    getPendingFerryBooking?: Maybe<PendingFerryBookingOutput>;
    getPostCodeApiDetail?: Maybe<PostCodeApiDetailOutput>;
    getPostCodeApiSimple?: Maybe<PostCodeApiSimpleOutput>;
    /**
     *  LANG_gql_getPrivilegeCards
     *
     * ---
     *
     * ## LANG_gql_client
     * ### LANG_gql_infos
     */
    getPrivilegeCardTypes?: Maybe<PrivilegeCardTypesOutput>;
    getProductCategories?: Maybe<ProductCategoriesOutput>;
    getProperties?: Maybe<PropertiesOutput>;
    getProposalByRoomTypes?: Maybe<ProposalByRoomTypesOutput>;
    getProposals?: Maybe<ProposalsOutput>;
    getProposalsByKeys?: Maybe<ProposalsByKeysOutput>;
    getProposalsByProperties?: Maybe<ProposalsByPropertiesOutput>;
    getRelationships?: Maybe<RelationshipOutput>;
    getResalysErrorList?: Maybe<ResalysErrorListOutput>;
    getResalysVersion?: Maybe<ResalysVersionOutput>;
    getRoomTypeCategories?: Maybe<RoomTypeCategoriesOutput>;
    getRoomTypes?: Maybe<RoomTypesOutput>;
    getSalesChannelMode?: Maybe<SalesChannelModeOutput>;
    /**
     * getSession
     * Il devra etre votre premier appel.<br/>
     *
     * Il utilisera comme paramètres les informations d'utilisateurs configurés dans Resalys.
     * Vous obtiendrez une session en réponse.\n
     * Cette session sera votre clé d'entrée pour toutes les autres requêtes.
     * Elle est également la clé mémoire qui stocke coté serveur toutes les actions que vous effectuez.
     * Pour la suite des tests, je vous invite à copier
     * le résultat de votre session dans l'objet session des "QUERY VARIABLES"
     * en lieux et place de "@session".
     */
    getSession?: Maybe<SessionOutput>;
    getSkisetMeasurements?: Maybe<MeasurementsOutput>;
    getTranslations?: Maybe<TranslationsOutput>;
    getUserLanguage?: Maybe<UserLanguageOutput>;
    hasProductsForOccupant?: Maybe<ProductsForOccupantOutput>;
    renewPassword?: Maybe<RenewPasswordOutput>;
    requestBrochure?: Maybe<BrochureOutput>;
};
/** test query */
export type QueryCheckModuleFacebookActivatedArgs = {
    session: Session;
};
/** test query */
export type QueryCheckSessionActivatedArgs = {
    session: Session;
};
/** test query */
export type QueryCheckValidLoginArgs = {
    input: ValidLoginInput;
    session: Session;
};
/** test query */
export type QueryGetAccommodationProductsArgs = {
    input: AccommodationProductsInput;
    session: Session;
};
/** test query */
export type QueryGetAllOccupantProductsAllAgeRangesArgs = {
    input: AllOccupantProductsAllAgeRangesInput;
    session: Session;
};
/** test query */
export type QueryGetAlternativeProposalRulesForContractFolderArgs = {
    input: AlternativeProposalRulesForContractFolderInput;
    session: Session;
};
/** test query */
export type QueryGetAvailForRoomTypesArgs = {
    input?: InputMaybe<AvailForRoomTypesInput>;
    session: Session;
};
/** test query */
export type QueryGetAvailableRoomFeaturesArgs = {
    input?: InputMaybe<AvailableRoomFeaturesInput>;
    session: Session;
};
/** test query */
export type QueryGetAvailableRoomsArgs = {
    input: AvailableRoomsInput;
    session: Session;
};
/** test query */
export type QueryGetBookingCustomerDepositAccountInfosArgs = {
    session: Session;
};
/** test query */
export type QueryGetBookingDocumentsArgs = {
    input: BookingDocumentsInput;
    session: Session;
};
/** test query */
export type QueryGetBookingPaymentPlansArgs = {
    input?: InputMaybe<PaymentPlansInput>;
    session: Session;
};
/** test query */
export type QueryGetBookingProductsArgs = {
    input?: InputMaybe<BookingProductsInput>;
    session: Session;
};
/** test query */
export type QueryGetBookingRecordCriteriasArgs = {
    session: Session;
};
/** test query */
export type QueryGetBrochuresArgs = {
    session: Session;
};
/** test query */
export type QueryGetCampaignsArgs = {
    session: Session;
};
/** test query */
export type QueryGetCartArgs = {
    session: Session;
};
/** test query */
export type QueryGetCivilitiesArgs = {
    session: Session;
};
/** test query */
export type QueryGetCountriesArgs = {
    session: Session;
};
/** test query */
export type QueryGetCriteriaInformationArgs = {
    input?: InputMaybe<CriteriaInformationInput>;
    session: Session;
};
/** test query */
export type QueryGetCurrentCustomerAccountArgs = {
    session: Session;
};
/** test query */
export type QueryGetCustomerBookingsArgs = {
    input?: InputMaybe<CustomerBookingsInput>;
    session: Session;
};
/** test query */
export type QueryGetCustomerCriteriasArgs = {
    input?: InputMaybe<CustomerCriteriasInput>;
    session: Session;
};
/** test query */
export type QueryGetCustomerDepositAccountsArgs = {
    session: Session;
};
/** test query */
export type QueryGetCustomerGiftCodesArgs = {
    session: Session;
};
/** test query */
export type QueryGetCustomerLoyaltyPointsArgs = {
    session: Session;
};
/** test query */
export type QueryGetCustomerPrivilegeCardsArgs = {
    session: Session;
};
/** test query */
export type QueryGetFerryAddonCategoriesArgs = {
    session: Session;
};
/** test query */
export type QueryGetFerryAvailableAccommodationsArgs = {
    session: Session;
};
/** test query */
export type QueryGetFerryCarsArgs = {
    session: Session;
};
/** test query */
export type QueryGetFerryCivilitiesArgs = {
    session: Session;
};
/** test query */
export type QueryGetFerryCrossingsArgs = {
    input?: InputMaybe<FerryCrossingsInput>;
    session: Session;
};
/** test query */
export type QueryGetFerryNationalitiesArgs = {
    session: Session;
};
/** test query */
export type QueryGetFerryPortsArgs = {
    session: Session;
};
/** test query */
export type QueryGetFerryProductsArgs = {
    session: Session;
};
/** test query */
export type QueryGetFerryProposalsArgs = {
    input: FerryProposalsInput;
    session: Session;
};
/** test query */
export type QueryGetFerryTrailerCategoriesArgs = {
    session: Session;
};
/** test query */
export type QueryGetFerryVehicleCategoriesArgs = {
    session: Session;
};
/** test query */
export type QueryGetFerryVehicleFuelsArgs = {
    session: Session;
};
/** test query */
export type QueryGetFidelityLogsArgs = {
    session: Session;
};
/** test query */
export type QueryGetFidelityRulesArgs = {
    session: Session;
};
/** test query */
export type QueryGetLanguagesArgs = {
    session: Session;
};
/** test query */
export type QueryGetLyraFormTokenArgs = {
    input: LyraFormTokenInput;
    session: Session;
};
/** test query */
export type QueryGetMapSelectorDataArgs = {
    input?: InputMaybe<MapSelectorDataInput>;
    session: Session;
};
/** test query */
export type QueryGetMyLoginArgs = {
    input?: InputMaybe<MyLoginInput>;
    session: Session;
};
/** test query */
export type QueryGetNeobookingTranslationsArgs = {
    input?: InputMaybe<NeobookingTranslationsInput>;
    session: Session;
};
/** test query */
export type QueryGetOccupantProductsArgs = {
    input?: InputMaybe<OccupantProductsInput>;
    session: Session;
};
/** test query */
export type QueryGetOccupantsFromCurrentCustomerArgs = {
    input?: InputMaybe<OccupantsFromCurrentCustomerInput>;
    session: Session;
};
/** test query */
export type QueryGetOwnerLeasesArgs = {
    session: Session;
};
/** test query */
export type QueryGetOwnerRoomPlanningDataArgs = {
    input: OwnerRoomPlanningDataInput;
    session: Session;
};
/** test query */
export type QueryGetPartnerArgs = {
    session: Session;
};
/** test query */
export type QueryGetPartnerCustomersArgs = {
    session: Session;
};
/** test query */
export type QueryGetPaymentLinkInfosArgs = {
    paymentLinkAuthenticationInput: PaymentLinkAuthenticationInput;
};
/** test query */
export type QueryGetPaymentMethodsArgs = {
    session: Session;
};
/** test query */
export type QueryGetPaymentPlansArgs = {
    input?: InputMaybe<PaymentPlansInput>;
    session: Session;
};
/** test query */
export type QueryGetPendingFerryBookingArgs = {
    session: Session;
};
/** test query */
export type QueryGetPostCodeApiDetailArgs = {
    input: PostCodeApiDetailInput;
    session: Session;
};
/** test query */
export type QueryGetPostCodeApiSimpleArgs = {
    input: PostCodeApiSimpleInput;
    session: Session;
};
/** test query */
export type QueryGetPrivilegeCardTypesArgs = {
    session: Session;
};
/** test query */
export type QueryGetProductCategoriesArgs = {
    session: Session;
};
/** test query */
export type QueryGetPropertiesArgs = {
    authentication: AuthenticationInput;
    input?: InputMaybe<PropertiesInput>;
};
/** test query */
export type QueryGetProposalByRoomTypesArgs = {
    input: ProposalByRoomTypesInput;
    session: Session;
};
/** test query */
export type QueryGetProposalsArgs = {
    input?: InputMaybe<ProposalsInput>;
    session: Session;
};
/** test query */
export type QueryGetProposalsByKeysArgs = {
    input: ProposalsByKeysInput;
    session: Session;
};
/** test query */
export type QueryGetProposalsByPropertiesArgs = {
    input?: InputMaybe<ProposalsByPropertiesInput>;
    session: Session;
};
/** test query */
export type QueryGetRelationshipsArgs = {
    session: Session;
};
/** test query */
export type QueryGetResalysErrorListArgs = {
    session: Session;
};
/** test query */
export type QueryGetResalysVersionArgs = {
    session: Session;
};
/** test query */
export type QueryGetRoomTypeCategoriesArgs = {
    input: RoomTypeCategoriesInput;
    session: Session;
};
/** test query */
export type QueryGetRoomTypesArgs = {
    input?: InputMaybe<RoomTypesInput>;
    session: Session;
};
/** test query */
export type QueryGetSalesChannelModeArgs = {
    session: Session;
};
/** test query */
export type QueryGetSessionArgs = {
    input?: InputMaybe<SessionInput>;
};
/** test query */
export type QueryGetSkisetMeasurementsArgs = {
    session: Session;
};
/** test query */
export type QueryGetTranslationsArgs = {
    input?: InputMaybe<TranslationsInput>;
    session: Session;
};
/** test query */
export type QueryGetUserLanguageArgs = {
    session: Session;
};
/** test query */
export type QueryHasProductsForOccupantArgs = {
    input?: InputMaybe<HasProductsForOccupantInput>;
    session: Session;
};
/** test query */
export type QueryRenewPasswordArgs = {
    input?: InputMaybe<RenewPasswordInput>;
    session: Session;
};
/** test query */
export type QueryRequestBrochureArgs = {
    input?: InputMaybe<BrochureInput>;
    session: Session;
};
export type Relationship = {
    __typename?: 'Relationship';
    id: Scalars['Int']['output'];
    label?: Maybe<Scalars['String']['output']>;
};
export type RelationshipOutput = {
    __typename?: 'RelationshipOutput';
    relationships?: Maybe<Array<Maybe<Relationship>>>;
};
export type RemoveBookingFromCartInput = {
    bookingCartItemID: Scalars['Int']['input'];
};
export type RemoveBookingFromCartOutput = {
    __typename?: 'RemoveBookingFromCartOutput';
    cart?: Maybe<Cart>;
};
export type RemoveCartPaymentsOutput = {
    __typename?: 'RemoveCartPaymentsOutput';
    removed?: Maybe<Scalars['Boolean']['output']>;
};
export type RemoveCustomerAccountOutput = {
    __typename?: 'RemoveCustomerAccountOutput';
    removed?: Maybe<Scalars['Boolean']['output']>;
};
export type RemoveDiscountCodeOutput = {
    __typename?: 'RemoveDiscountCodeOutput';
    cart?: Maybe<Cart>;
};
export type RemoveFerryInput = {
    ferryID: Scalars['String']['input'];
};
export type RemoveFerryOutput = {
    __typename?: 'RemoveFerryOutput';
    cart?: Maybe<Cart>;
};
export type RemoveGiftCodeInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    giftCode: Scalars['String']['input'];
};
export type RemoveGiftCodeOutput = {
    __typename?: 'RemoveGiftCodeOutput';
    cart?: Maybe<Cart>;
};
export type RemoveOccupantInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    occupantGuiid: Scalars['Int']['input'];
};
export type RemoveOccupantOutput = {
    __typename?: 'RemoveOccupantOutput';
    cart?: Maybe<Cart>;
};
export type RemoveStayInput = {
    lastStayRemoveAllFerryConfirmed?: InputMaybe<Scalars['Boolean']['input']>;
    stayGuiid: Scalars['Int']['input'];
};
export type RemoveStayOutput = {
    __typename?: 'RemoveStayOutput';
    cart?: Maybe<Cart>;
};
export type RenewPasswordInput = {
    mail?: InputMaybe<Scalars['String']['input']>;
};
export type RenewPasswordOutput = {
    __typename?: 'RenewPasswordOutput';
    renewPasswordDemand?: Maybe<Scalars['Boolean']['output']>;
};
export type ResalysError = {
    __typename?: 'ResalysError';
    code?: Maybe<Scalars['Int']['output']>;
    message?: Maybe<Scalars['String']['output']>;
};
export type ResalysErrorListOutput = {
    __typename?: 'ResalysErrorListOutput';
    errorList?: Maybe<Array<Maybe<ResalysError>>>;
};
export type ResalysVersionOutput = {
    __typename?: 'ResalysVersionOutput';
    version?: Maybe<Scalars['String']['output']>;
};
export type ResetCartOutput = {
    __typename?: 'ResetCartOutput';
    cart?: Maybe<Cart>;
};
export type ResetPendingFerryBookingOutput = {
    __typename?: 'ResetPendingFerryBookingOutput';
    ferryBooking?: Maybe<FerryBooking>;
};
export type RoomFeature = {
    __typename?: 'RoomFeature';
    categoryLabel?: Maybe<Scalars['String']['output']>;
    code: Scalars['String']['output'];
    label?: Maybe<Scalars['String']['output']>;
    options?: Maybe<Array<Maybe<RoomFeatureOption>>>;
};
export type RoomFeatureOption = {
    __typename?: 'RoomFeatureOption';
    code: Scalars['String']['output'];
    label?: Maybe<Scalars['String']['output']>;
};
export type RoomFeatureValue = {
    code: Scalars['String']['input'];
    mandatory?: InputMaybe<Scalars['Boolean']['input']>;
    value: Scalars['String']['input'];
};
export type RoomFromMapInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    mapUHID: Array<InputMaybe<Scalars['String']['input']>>;
    stayGuiid: Scalars['Int']['input'];
};
export type RoomFromMapOutput = {
    __typename?: 'RoomFromMapOutput';
    cart?: Maybe<Cart>;
};
export type RoomInfos = {
    __typename?: 'RoomInfos';
    commercialRoomTypeCode?: Maybe<Scalars['String']['output']>;
    commercialRoomTypeLabel?: Maybe<Scalars['String']['output']>;
    nbRooms?: Maybe<Scalars['Int']['output']>;
};
export type RoomType = {
    __typename?: 'RoomType';
    categoryCode?: Maybe<Scalars['String']['output']>;
    categoryLabel?: Maybe<Scalars['String']['output']>;
    cmsCriterias?: Maybe<Array<Maybe<CriteriaValue>>>;
    code: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    pax?: Maybe<Scalars['Int']['output']>;
    paxMax?: Maybe<Scalars['Int']['output']>;
    propertyId?: Maybe<Scalars['Int']['output']>;
    quantity?: Maybe<Scalars['Int']['output']>;
    roomFeatures?: Maybe<Array<Maybe<CriteriaValue>>>;
    webLabel?: Maybe<Scalars['String']['output']>;
};
export type RoomTypeCategoriesInput = {
    propertyId: Scalars['Int']['input'];
};
export type RoomTypeCategoriesOutput = {
    __typename?: 'RoomTypeCategoriesOutput';
    roomTypeCategories?: Maybe<Array<Maybe<RoomTypeCategory>>>;
};
export type RoomTypeCategory = {
    __typename?: 'RoomTypeCategory';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    roomTypes?: Maybe<Array<Maybe<RoomType>>>;
};
export type RoomTypesInput = {
    propertyId?: InputMaybe<Scalars['Int']['input']>;
    roomTypeCategoryCode?: InputMaybe<Scalars['String']['input']>;
};
export type RoomTypesOutput = {
    __typename?: 'RoomTypesOutput';
    roomTypeList?: Maybe<Array<Maybe<RoomType>>>;
    /** @deprecated Use 'roomTypeList'. */
    roomTypes?: Maybe<Array<Maybe<Option>>>;
};
export type SalesChannelModeOutput = {
    __typename?: 'SalesChannelModeOutput';
    mode?: Maybe<Scalars['Int']['output']>;
};
export type SaveCartInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    fastCheckinCheckout?: InputMaybe<Scalars['Boolean']['input']>;
    passNewAmountLowerThanPrevious?: InputMaybe<Scalars['Boolean']['input']>;
};
export type SaveCartOutput = {
    __typename?: 'SaveCartOutput';
    cart?: Maybe<Cart>;
};
export type SaveFerryBookingInput = {
    occupantGuiid?: InputMaybe<Scalars['Int']['input']>;
    productCode?: InputMaybe<Scalars['String']['input']>;
};
export type SaveFerryBookingOutput = {
    __typename?: 'SaveFerryBookingOutput';
    cart?: Maybe<Cart>;
};
export type Service = {
    __typename?: 'Service';
    address?: Maybe<Address>;
    birthDate?: Maybe<Scalars['RslDate']['output']>;
    civility?: Maybe<Civility>;
    clientType?: Maybe<ClientType>;
    criterias?: Maybe<Array<Maybe<CriteriaValue>>>;
    customerCode?: Maybe<Scalars['String']['output']>;
    customerType?: Maybe<CustomerType>;
    defaultPartnerServiceDisabled?: Maybe<Scalars['Boolean']['output']>;
    disabled?: Maybe<Scalars['Boolean']['output']>;
    fidelityPoints?: Maybe<Scalars['Int']['output']>;
    firstName?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    /** @deprecated Use 'serviceLanguage'. */
    language?: Maybe<Option>;
    lastName?: Maybe<Scalars['String']['output']>;
    login?: Maybe<Scalars['String']['output']>;
    needValidation?: Maybe<Scalars['Boolean']['output']>;
    /** @deprecated Use 'relationshipObject'. */
    relationship?: Maybe<Scalars['String']['output']>;
    relationshipObject?: Maybe<Relationship>;
    serviceLanguage?: Maybe<Language>;
    servicesList?: Maybe<Array<Maybe<Service>>>;
};
export type ServiceRelationship = {
    relationship: Scalars['Int']['input'];
    serviceId: Scalars['Int']['input'];
};
export type Session = {
    name?: InputMaybe<Scalars['String']['input']>;
};
export type SessionActivatedOutput = {
    __typename?: 'SessionActivatedOutput';
    activated?: Maybe<Scalars['Boolean']['output']>;
};
export type SessionInput = {
    publicPartnerCode?: InputMaybe<Scalars['String']['input']>;
    username: Scalars['String']['input'];
};
export type SessionLanguageInput = {
    languageCode?: InputMaybe<Scalars['String']['input']>;
};
export type SessionOutput = {
    __typename?: 'SessionOutput';
    name?: Maybe<Scalars['String']['output']>;
};
export type Shoesize = {
    __typename?: 'Shoesize';
    id?: Maybe<Scalars['Int']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export declare enum SkisetMeasureType {
    Height = "HEIGHT",
    Shoesize = "SHOESIZE",
    Weight = "WEIGHT"
}
export type Stay = {
    __typename?: 'Stay';
    arrivalTime?: Maybe<Scalars['LocalTime']['output']>;
    departureTime?: Maybe<Scalars['LocalTime']['output']>;
    distribution?: Maybe<Distribution>;
    endDate?: Maybe<Scalars['Date']['output']>;
    guiid?: Maybe<Scalars['Int']['output']>;
    id?: Maybe<Scalars['Int']['output']>;
    nbDays?: Maybe<Scalars['Int']['output']>;
    occupants?: Maybe<Array<Maybe<Occupant>>>;
    proposalkey?: Maybe<Scalars['String']['output']>;
    startDate?: Maybe<Scalars['Date']['output']>;
    totalAmount?: Maybe<Amount>;
};
export type StayMapInfos = {
    __typename?: 'StayMapInfos';
    hasNoAvailableRoom?: Maybe<Scalars['Boolean']['output']>;
    listStayRoomGuiid?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
    stayGuiid?: Maybe<Scalars['Int']['output']>;
};
export type StayTimeInput = {
    arrivalTime?: InputMaybe<Scalars['LocalTime']['input']>;
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    departureTime?: InputMaybe<Scalars['LocalTime']['input']>;
    stayGuiid: Scalars['Int']['input'];
};
export type StayTimeOutput = {
    __typename?: 'StayTimeOutput';
    cart?: Maybe<Cart>;
};
export type Supplier = {
    __typename?: 'Supplier';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type SwitchToPartnerConventionInput = {
    CartItemID?: InputMaybe<Scalars['Int']['input']>;
    partnerCode: Scalars['String']['input'];
};
export type SwitchToPartnerConventionOutput = {
    __typename?: 'SwitchToPartnerConventionOutput';
    cart?: Maybe<Cart>;
};
export type TotalOccupantsInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    nbAdults?: InputMaybe<Scalars['Int']['input']>;
    nbBabies?: InputMaybe<Scalars['Int']['input']>;
    nbChildren1?: InputMaybe<Scalars['Int']['input']>;
    nbChildren2?: InputMaybe<Scalars['Int']['input']>;
    stayGuiid: Scalars['Int']['input'];
};
export type TotalOccupantsOutput = {
    __typename?: 'TotalOccupantsOutput';
    cart?: Maybe<Cart>;
};
export type Trailer = {
    __typename?: 'Trailer';
    amount?: Maybe<Amount>;
    height?: Maybe<Scalars['Float']['output']>;
    length?: Maybe<Scalars['Float']['output']>;
    mark?: Maybe<Scalars['String']['output']>;
    model?: Maybe<Scalars['String']['output']>;
    registration?: Maybe<Scalars['String']['output']>;
    trailerType: Scalars['String']['output'];
};
export type TrailerCategory = {
    __typename?: 'TrailerCategory';
    code: Scalars['String']['output'];
    label?: Maybe<Scalars['String']['output']>;
};
export type TrailerInfo = {
    licensePlate?: InputMaybe<Scalars['String']['input']>;
};
export type Translation = {
    __typename?: 'Translation';
    code?: Maybe<Scalars['String']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type TranslationsInput = {
    listLanguageVarCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type TranslationsOutput = {
    __typename?: 'TranslationsOutput';
    translations?: Maybe<Array<Maybe<Translation>>>;
};
export type Trip = {
    __typename?: 'Trip';
    accommodations?: Maybe<Array<Maybe<Accommodation>>>;
    accommodationsAmount?: Maybe<Amount>;
    arrivalDate: Scalars['FerryDate']['output'];
    arrivalPort: Port;
    arrivalTime: Scalars['FerryTime']['output'];
    coreTrip?: Maybe<CoreTrip>;
    departureDate: Scalars['FerryDate']['output'];
    departurePort: Port;
    departureTime: Scalars['FerryTime']['output'];
    duration: Scalars['FerryTime']['output'];
    /** @deprecated Moved in CoreTrip */
    routeAmount?: Maybe<Amount>;
    shipName?: Maybe<Scalars['String']['output']>;
    trailer?: Maybe<Trailer>;
    vehicle?: Maybe<Vehicle>;
};
export type UnassignRoomInput = {
    stayGuiid: Scalars['Int']['input'];
};
export type UnassignRoomOutput = {
    __typename?: 'UnassignRoomOutput';
    cart?: Maybe<Cart>;
};
export type UnlockBookingInput = {
    bookingId: Scalars['Int']['input'];
};
export type UnlockBookingOutput = {
    __typename?: 'UnlockBookingOutput';
    bookingUnlocked?: Maybe<Scalars['Boolean']['output']>;
};
export type UpdateBookingCriteriasInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    criterias?: InputMaybe<Array<InputMaybe<CriteriaValueInput>>>;
};
export type UpdateBookingCriteriasOutput = {
    __typename?: 'UpdateBookingCriteriasOutput';
    cart?: Maybe<Cart>;
};
export type UpdateFerryAccommodationsInput = {
    outwardAccommodations?: InputMaybe<Array<InputMaybe<AccommodationInput>>>;
    returnAccommodations?: InputMaybe<Array<InputMaybe<AccommodationInput>>>;
};
export type UpdateFerryAccommodationsOutput = {
    __typename?: 'UpdateFerryAccommodationsOutput';
    ferryBooking?: Maybe<FerryBooking>;
};
export type UpdateFerryBookingInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    lineItemGuiid?: InputMaybe<Scalars['Int']['input']>;
    /** @deprecated Use 'lineItemGuiid'. */
    resFerryId?: InputMaybe<Scalars['Int']['input']>;
};
export type UpdateFerryBookingOutput = {
    __typename?: 'UpdateFerryBookingOutput';
    ferryBooking?: Maybe<FerryBooking>;
};
export type UpdateFerryTravelersInformationInput = {
    contact?: InputMaybe<ContactInfo>;
    passengers?: InputMaybe<Array<InputMaybe<PassengerInfo>>>;
    trailer?: InputMaybe<TrailerInfo>;
    vehicle?: InputMaybe<VehicleInfo>;
};
export type UpdateFerryTravelersInformationOutput = {
    __typename?: 'UpdateFerryTravelersInformationOutput';
    ferryBooking?: Maybe<FerryBooking>;
};
export type UpdateOccupantSkisetMeasurementsInput = {
    cartItemID?: InputMaybe<Scalars['Int']['input']>;
    occupantSkisetMeasurements?: InputMaybe<Array<InputMaybe<OccupantMeasurementInput>>>;
};
export type UpdateOccupantSkisetMeasurementsOutput = {
    __typename?: 'UpdateOccupantSkisetMeasurementsOutput';
    cart?: Maybe<Cart>;
};
export type UpdatePartnerCustomerAccountInput = {
    address: CustomerAddressInput;
    birthDate?: InputMaybe<Scalars['Date']['input']>;
    civility?: InputMaybe<Scalars['String']['input']>;
    customerCode: Scalars['String']['input'];
    firstName?: InputMaybe<Scalars['String']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    relationshipId?: InputMaybe<Scalars['Int']['input']>;
};
export type UpdateProductCriteriasInput = {
    criterias?: InputMaybe<Array<InputMaybe<CriteriaValueInput>>>;
    lineitemGUIID: Scalars['Int']['input'];
};
export type UpdateServiceCustomerAccountInput = {
    birthDate?: InputMaybe<Scalars['Date']['input']>;
    civility?: InputMaybe<Scalars['String']['input']>;
    firstName?: InputMaybe<Scalars['String']['input']>;
    lastName?: InputMaybe<Scalars['String']['input']>;
    relationshipId?: InputMaybe<Scalars['Int']['input']>;
    serviceId: Scalars['Int']['input'];
};
export type UploadFileData = {
    __typename?: 'UploadFileData';
    fileId: Scalars['String']['output'];
    uploadUrl: Scalars['String']['output'];
};
export type UploadFileInput = {
    fileName: Scalars['String']['input'];
};
export type UploadFilesOutput = {
    __typename?: 'UploadFilesOutput';
    uploadData?: Maybe<Array<Maybe<UploadFileData>>>;
};
export type User = {
    __typename?: 'User';
    grouping?: Maybe<UserGrouping>;
    name?: Maybe<Scalars['String']['output']>;
    profile?: Maybe<UserProfile>;
    userType?: Maybe<UserType>;
};
export type UserGrouping = {
    __typename?: 'UserGrouping';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type UserLanguageOutput = {
    __typename?: 'UserLanguageOutput';
    languageCode?: Maybe<Scalars['String']['output']>;
};
export type UserProfile = {
    __typename?: 'UserProfile';
    code?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type UserType = {
    __typename?: 'UserType';
    code?: Maybe<Scalars['Int']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type ValidLoginInput = {
    loginHashInput: LoginHash256Input;
};
export type ValidLoginOutput = {
    __typename?: 'ValidLoginOutput';
    valid?: Maybe<Scalars['Boolean']['output']>;
};
export type Vehicle = {
    __typename?: 'Vehicle';
    additionalHeight?: Maybe<Scalars['Float']['output']>;
    additionalLength?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    length?: Maybe<Scalars['Float']['output']>;
    mark?: Maybe<Scalars['String']['output']>;
    model?: Maybe<Scalars['String']['output']>;
    registration?: Maybe<Scalars['String']['output']>;
    vehicleType: Scalars['String']['output'];
};
export type VehicleCategory = {
    __typename?: 'VehicleCategory';
    code: Scalars['String']['output'];
    isCar?: Maybe<Scalars['Boolean']['output']>;
    label?: Maybe<Scalars['String']['output']>;
};
export type VehicleInfo = {
    fuel?: InputMaybe<Scalars['String']['input']>;
    licensePlate?: InputMaybe<Scalars['String']['input']>;
};
/**
 *  LANG_gql_WeeklyCriterias
 * LANG_gql_WeeklyCriterias_2
 */
export type WeeklyCriterias = {
    baseProductCode?: InputMaybe<Scalars['String']['input']>;
    childrenBirthDates?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
    division?: InputMaybe<Scalars['String']['input']>;
    endDate?: InputMaybe<Scalars['Date']['input']>;
    ignoreDayConstraints?: InputMaybe<Scalars['Boolean']['input']>;
    maxRooms?: InputMaybe<Scalars['Int']['input']>;
    month?: InputMaybe<Scalars['Int']['input']>;
    nbAdults: Scalars['Int']['input'];
    nbBabies?: InputMaybe<Scalars['Int']['input']>;
    nbChildren1?: InputMaybe<Scalars['Int']['input']>;
    nbChildren2?: InputMaybe<Scalars['Int']['input']>;
    periodCode?: InputMaybe<Scalars['String']['input']>;
    propertyId: Scalars['Int']['input'];
    roomTypeCategoryCodes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    startDate?: InputMaybe<Scalars['Date']['input']>;
    useCachedProposalsStd?: InputMaybe<Scalars['Boolean']['input']>;
    year?: InputMaybe<Scalars['Int']['input']>;
};
export type Weight = {
    __typename?: 'Weight';
    id?: Maybe<Scalars['Int']['output']>;
    value?: Maybe<Scalars['String']['output']>;
};
export type PayOnStoredCreditCardInput = {
    amount: AmountInput;
    creditcardGuiid: Scalars['Int']['input'];
    paymentDueGuiid: Scalars['Int']['input'];
};
export type PayOnStoredCreditCardOutput = {
    __typename?: 'payOnStoredCreditCardOutput';
    cart?: Maybe<Cart>;
};
