/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentSharedActionButton = {
  __typename?: 'ComponentSharedActionButton';
  buttonText?: Maybe<Scalars['String']['output']>;
  buttonUrl?: Maybe<Scalars['String']['output']>;
  desktopUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  newTab?: Maybe<Scalars['Boolean']['output']>;
};

export type ComponentSharedActionButtonFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedActionButtonFiltersInput>>>;
  buttonText?: InputMaybe<StringFilterInput>;
  buttonUrl?: InputMaybe<StringFilterInput>;
  desktopUrl?: InputMaybe<StringFilterInput>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSharedActionButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedActionButtonFiltersInput>>>;
};

export type ComponentSharedActionButtonInput = {
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  desktopUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentSharedBookingWidget = {
  __typename?: 'ComponentSharedBookingWidget';
  adults?: Maybe<Scalars['String']['output']>;
  buttonCheckAvailabilityText?: Maybe<Scalars['String']['output']>;
  buttonNextText?: Maybe<Scalars['String']['output']>;
  buttonPreviousText?: Maybe<Scalars['String']['output']>;
  buttonSearchText?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Scalars['String']['output']>;
  dates?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  noAvailability?: Maybe<Scalars['String']['output']>;
  roomsGuests?: Maybe<Scalars['String']['output']>;
  selectedDates?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedBookingWidgetInput = {
  adults?: InputMaybe<Scalars['String']['input']>;
  buttonCheckAvailabilityText?: InputMaybe<Scalars['String']['input']>;
  buttonNextText?: InputMaybe<Scalars['String']['input']>;
  buttonPreviousText?: InputMaybe<Scalars['String']['input']>;
  buttonSearchText?: InputMaybe<Scalars['String']['input']>;
  children?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  noAvailability?: InputMaybe<Scalars['String']['input']>;
  roomsGuests?: InputMaybe<Scalars['String']['input']>;
  selectedDates?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedDateRangeItem = {
  __typename?: 'ComponentSharedDateRangeItem';
  id: Scalars['ID']['output'];
};

export type ComponentSharedFormDate = {
  __typename?: 'ComponentSharedFormDate';
  from?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  to?: Maybe<Scalars['Date']['output']>;
};

export type ComponentSharedFormDateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedFormDateFiltersInput>>>;
  from?: InputMaybe<DateFilterInput>;
  not?: InputMaybe<ComponentSharedFormDateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedFormDateFiltersInput>>>;
  to?: InputMaybe<DateFilterInput>;
};

export type ComponentSharedFormDateInput = {
  from?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
};

export type ComponentSharedHeaderTextWithSliderBlock = {
  __typename?: 'ComponentSharedHeaderTextWithSliderBlock';
  id: Scalars['ID']['output'];
  sectionText?: Maybe<ComponentSharedSectionText>;
  textImageSliderBlock?: Maybe<Array<Maybe<ComponentSharedTextImageSliderBlock>>>;
};


export type ComponentSharedHeaderTextWithSliderBlockTextImageSliderBlockArgs = {
  filters?: InputMaybe<ComponentSharedTextImageSliderBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedHeaderTextWithSliderBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedHeaderTextWithSliderBlockFiltersInput>>>;
  not?: InputMaybe<ComponentSharedHeaderTextWithSliderBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedHeaderTextWithSliderBlockFiltersInput>>>;
  sectionText?: InputMaybe<ComponentSharedSectionTextFiltersInput>;
  textImageSliderBlock?: InputMaybe<ComponentSharedTextImageSliderBlockFiltersInput>;
};

export type ComponentSharedHeaderTextWithSliderBlockInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  sectionText?: InputMaybe<ComponentSharedSectionTextInput>;
  textImageSliderBlock?: InputMaybe<Array<InputMaybe<ComponentSharedTextImageSliderBlockInput>>>;
};

export type ComponentSharedHeroSection = {
  __typename?: 'ComponentSharedHeroSection';
  heroImage?: Maybe<UploadFile>;
  heroText?: Maybe<Scalars['String']['output']>;
  hideThisBlock?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedHeroSectionInput = {
  heroImage?: InputMaybe<Scalars['ID']['input']>;
  heroText?: InputMaybe<Scalars['String']['input']>;
  hideThisBlock?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedMedia = {
  __typename?: 'ComponentSharedMedia';
  file?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedMenuLinks = {
  __typename?: 'ComponentSharedMenuLinks';
  id: Scalars['ID']['output'];
  menuLabel: Scalars['String']['output'];
  showInMenu: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
};

export type ComponentSharedMenuLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMenuLinksFiltersInput>>>;
  menuLabel?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMenuLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMenuLinksFiltersInput>>>;
  showInMenu?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMenuLinksInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  menuLabel?: InputMaybe<Scalars['String']['input']>;
  showInMenu?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedModal = {
  __typename?: 'ComponentSharedModal';
  id: Scalars['ID']['output'];
  modalActionButton?: Maybe<ComponentSharedActionButton>;
  modalContent?: Maybe<Scalars['String']['output']>;
  modalHeaderLogo?: Maybe<UploadFile>;
  modalImage?: Maybe<UploadFile>;
  modalIsActive?: Maybe<Scalars['Boolean']['output']>;
  modalSubTitle?: Maybe<Scalars['String']['output']>;
  modalTitle?: Maybe<Scalars['String']['output']>;
  modal_storage_type?: Maybe<Enum_Componentsharedmodal_Modal_Storage_Type>;
};

export type ComponentSharedModalInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  modalActionButton?: InputMaybe<ComponentSharedActionButtonInput>;
  modalContent?: InputMaybe<Scalars['String']['input']>;
  modalHeaderLogo?: InputMaybe<Scalars['ID']['input']>;
  modalImage?: InputMaybe<Scalars['ID']['input']>;
  modalIsActive?: InputMaybe<Scalars['Boolean']['input']>;
  modalSubTitle?: InputMaybe<Scalars['String']['input']>;
  modalTitle?: InputMaybe<Scalars['String']['input']>;
  modal_storage_type?: InputMaybe<Enum_Componentsharedmodal_Modal_Storage_Type>;
};

export type ComponentSharedMultipleImages = {
  __typename?: 'ComponentSharedMultipleImages';
  id: Scalars['ID']['output'];
  multipleImages: Array<Maybe<UploadFile>>;
  multipleImages_connection?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentSharedMultipleImagesMultipleImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedMultipleImagesMultipleImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedMultipleImagesInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  multipleImages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentSharedQuote = {
  __typename?: 'ComponentSharedQuote';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedRichText = {
  __typename?: 'ComponentSharedRichText';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  simpleText?: Maybe<ComponentSharedSimpleText>;
};

export type ComponentSharedSectionGridSlider = {
  __typename?: 'ComponentSharedSectionGridSlider';
  description?: Maybe<Scalars['String']['output']>;
  hideThisBlock?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedSectionGridSliderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSectionGridSliderFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  hideThisBlock?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSharedSectionGridSliderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSectionGridSliderFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSectionGridSliderInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hideThisBlock?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSectionText = {
  __typename?: 'ComponentSharedSectionText';
  buttonText?: Maybe<Scalars['String']['output']>;
  buttonUrl?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hideThisBlock?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  newTab?: Maybe<Scalars['Boolean']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedSectionTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSectionTextFiltersInput>>>;
  buttonText?: InputMaybe<StringFilterInput>;
  buttonUrl?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  hideThisBlock?: InputMaybe<BooleanFilterInput>;
  newTab?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSharedSectionTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSectionTextFiltersInput>>>;
  subtitle?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSectionTextInput = {
  buttonText?: InputMaybe<Scalars['String']['input']>;
  buttonUrl?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hideThisBlock?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  id: Scalars['ID']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle: Scalars['String']['output'];
  shareImage?: Maybe<UploadFile>;
};

export type ComponentSharedSeoInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  shareImage?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedSimpleText = {
  __typename?: 'ComponentSharedSimpleText';
  id: Scalars['ID']['output'];
  simple?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedSiteFooterSocial = {
  __typename?: 'ComponentSharedSiteFooterSocial';
  icon?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
  linkUrl?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedSiteFooterSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSiteFooterSocialFiltersInput>>>;
  linkUrl?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSiteFooterSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSiteFooterSocialFiltersInput>>>;
};

export type ComponentSharedSiteFooterSocialInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  linkUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSlider = {
  __typename?: 'ComponentSharedSlider';
  Title?: Maybe<Scalars['String']['output']>;
  files: Array<Maybe<UploadFile>>;
  files_connection?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID']['output'];
};


export type ComponentSharedSliderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedSliderFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedTabItem = {
  __typename?: 'ComponentSharedTabItem';
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  tabContent?: Maybe<Scalars['JSON']['output']>;
  useSeparateFields?: Maybe<Scalars['Boolean']['output']>;
  useTextFieldsInstead?: Maybe<Array<Maybe<ComponentSharedUseTextFieldsInstead>>>;
};


export type ComponentSharedTabItemUseTextFieldsInsteadArgs = {
  filters?: InputMaybe<ComponentSharedUseTextFieldsInsteadFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedTabItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedTabItemFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedTabItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedTabItemFiltersInput>>>;
  tabContent?: InputMaybe<JsonFilterInput>;
  useSeparateFields?: InputMaybe<BooleanFilterInput>;
  useTextFieldsInstead?: InputMaybe<ComponentSharedUseTextFieldsInsteadFiltersInput>;
};

export type ComponentSharedTabItemInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  tabContent?: InputMaybe<Scalars['JSON']['input']>;
  useSeparateFields?: InputMaybe<Scalars['Boolean']['input']>;
  useTextFieldsInstead?: InputMaybe<Array<InputMaybe<ComponentSharedUseTextFieldsInsteadInput>>>;
};

export type ComponentSharedTabbedSliderBlock = {
  __typename?: 'ComponentSharedTabbedSliderBlock';
  actionButton?: Maybe<Array<Maybe<ComponentSharedActionButton>>>;
  hideThisBlock?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  images: Array<Maybe<UploadFile>>;
  images_connection?: Maybe<UploadFileRelationResponseCollection>;
  infoLineText?: Maybe<Scalars['String']['output']>;
  tabItem?: Maybe<Array<Maybe<ComponentSharedTabItem>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type ComponentSharedTabbedSliderBlockActionButtonArgs = {
  filters?: InputMaybe<ComponentSharedActionButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedTabbedSliderBlockImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedTabbedSliderBlockImages_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedTabbedSliderBlockTabItemArgs = {
  filters?: InputMaybe<ComponentSharedTabItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedTabbedSliderBlockFiltersInput = {
  actionButton?: InputMaybe<ComponentSharedActionButtonFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedTabbedSliderBlockFiltersInput>>>;
  hideThisBlock?: InputMaybe<BooleanFilterInput>;
  infoLineText?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedTabbedSliderBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedTabbedSliderBlockFiltersInput>>>;
  tabItem?: InputMaybe<ComponentSharedTabItemFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedTabbedSliderBlockInput = {
  actionButton?: InputMaybe<Array<InputMaybe<ComponentSharedActionButtonInput>>>;
  hideThisBlock?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  infoLineText?: InputMaybe<Scalars['String']['input']>;
  tabItem?: InputMaybe<Array<InputMaybe<ComponentSharedTabItemInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedTextImageSliderBlock = {
  __typename?: 'ComponentSharedTextImageSliderBlock';
  description?: Maybe<Scalars['String']['output']>;
  hideThisBlock?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedTextImageSliderBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedTextImageSliderBlockFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  hideThisBlock?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSharedTextImageSliderBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedTextImageSliderBlockFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedTextImageSliderBlockInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hideThisBlock?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedUseTextFieldsInstead = {
  __typename?: 'ComponentSharedUseTextFieldsInstead';
  firstTextField?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  secondTextField?: Maybe<Scalars['String']['output']>;
  specialTextField?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedUseTextFieldsInsteadFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedUseTextFieldsInsteadFiltersInput>>>;
  firstTextField?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedUseTextFieldsInsteadFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedUseTextFieldsInsteadFiltersInput>>>;
  secondTextField?: InputMaybe<StringFilterInput>;
  specialTextField?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedUseTextFieldsInsteadInput = {
  firstTextField?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  secondTextField?: InputMaybe<Scalars['String']['input']>;
  specialTextField?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentTabblocksBulletTab = {
  __typename?: 'ComponentTabblocksBulletTab';
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['JSON']['output']>;
};

export type ComponentTabblocksItems = {
  __typename?: 'ComponentTabblocksItems';
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ComponentTabblocksItemsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTabblocksItemsFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentTabblocksItemsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTabblocksItemsFiltersInput>>>;
  value?: InputMaybe<StringFilterInput>;
};

export type ComponentTabblocksTwoColumnTab = {
  __typename?: 'ComponentTabblocksTwoColumnTab';
  id: Scalars['ID']['output'];
  items?: Maybe<Array<Maybe<ComponentTabblocksItems>>>;
};


export type ComponentTabblocksTwoColumnTabItemsArgs = {
  filters?: InputMaybe<ComponentTabblocksItemsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactUsForm = {
  __typename?: 'ContactUsForm';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  formDates?: Maybe<ComponentSharedFormDate>;
  formEmail?: Maybe<Scalars['String']['output']>;
  formMessage?: Maybe<Scalars['String']['output']>;
  formNumberGuests?: Maybe<Scalars['Int']['output']>;
  formPhone?: Maybe<Scalars['String']['output']>;
  formSurname?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactUsFormEntityResponseCollection = {
  __typename?: 'ContactUsFormEntityResponseCollection';
  nodes: Array<ContactUsForm>;
  pageInfo: Pagination;
};

export type ContactUsFormFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactUsFormFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  formDates?: InputMaybe<ComponentSharedFormDateFiltersInput>;
  formEmail?: InputMaybe<StringFilterInput>;
  formMessage?: InputMaybe<StringFilterInput>;
  formNumberGuests?: InputMaybe<IntFilterInput>;
  formPhone?: InputMaybe<StringFilterInput>;
  formSurname?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactUsFormFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactUsFormFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactUsFormInput = {
  formDates?: InputMaybe<ComponentSharedFormDateInput>;
  formEmail?: InputMaybe<Scalars['String']['input']>;
  formMessage?: InputMaybe<Scalars['String']['input']>;
  formNumberGuests?: InputMaybe<Scalars['Int']['input']>;
  formPhone?: InputMaybe<Scalars['String']['input']>;
  formSurname?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type Destination = {
  __typename?: 'Destination';
  Seo?: Maybe<ComponentSharedSeo>;
  afterMapText?: Maybe<Scalars['String']['output']>;
  architectureDesignImages?: Maybe<ComponentSharedMultipleImages>;
  architectureDesignText?: Maybe<ComponentSharedSectionText>;
  beforeMapText?: Maybe<ComponentSharedSectionText>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  heroSection?: Maybe<ComponentSharedHeroSection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Destination>>;
  localizations_connection?: Maybe<DestinationRelationResponseCollection>;
  locationImages?: Maybe<ComponentSharedMultipleImages>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DestinationInput = {
  Seo?: InputMaybe<ComponentSharedSeoInput>;
  afterMapText?: InputMaybe<Scalars['String']['input']>;
  architectureDesignImages?: InputMaybe<ComponentSharedMultipleImagesInput>;
  architectureDesignText?: InputMaybe<ComponentSharedSectionTextInput>;
  beforeMapText?: InputMaybe<ComponentSharedSectionTextInput>;
  heroSection?: InputMaybe<ComponentSharedHeroSectionInput>;
  locationImages?: InputMaybe<ComponentSharedMultipleImagesInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DestinationRelationResponseCollection = {
  __typename?: 'DestinationRelationResponseCollection';
  nodes: Array<Destination>;
};

export type Dining = {
  __typename?: 'Dining';
  beyondTableText?: Maybe<ComponentSharedSectionText>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  heroSection?: Maybe<ComponentSharedHeroSection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Dining>>;
  localizations_connection?: Maybe<DiningRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  tabbedSliderBlock?: Maybe<Array<Maybe<ComponentSharedTabbedSliderBlock>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type DiningTabbedSliderBlockArgs = {
  filters?: InputMaybe<ComponentSharedTabbedSliderBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DiningInput = {
  beyondTableText?: InputMaybe<ComponentSharedSectionTextInput>;
  heroSection?: InputMaybe<ComponentSharedHeroSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  tabbedSliderBlock?: InputMaybe<Array<InputMaybe<ComponentSharedTabbedSliderBlockInput>>>;
};

export type DiningRelationResponseCollection = {
  __typename?: 'DiningRelationResponseCollection';
  nodes: Array<Dining>;
};

export enum Enum_Componentsharedmodal_Modal_Storage_Type {
  LocalStorage = 'localStorage',
  SessionStorage = 'sessionStorage'
}

export type EmailSubscriber = {
  __typename?: 'EmailSubscriber';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmailSubscriberEntityResponseCollection = {
  __typename?: 'EmailSubscriberEntityResponseCollection';
  nodes: Array<EmailSubscriber>;
  pageInfo: Pagination;
};

export type EmailSubscriberFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EmailSubscriberFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EmailSubscriberFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EmailSubscriberFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EmailSubscriberInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Experience = {
  __typename?: 'Experience';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  exploreEsperanzaText?: Maybe<ComponentSharedSectionText>;
  heroSection?: Maybe<ComponentSharedHeroSection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Experience>>;
  localizations_connection?: Maybe<ExperienceRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sectionGridSlider?: Maybe<Array<Maybe<ComponentSharedSectionGridSlider>>>;
  seo?: Maybe<ComponentSharedSeo>;
  tabbedSliderBlock?: Maybe<Array<Maybe<ComponentSharedTabbedSliderBlock>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ExperienceSectionGridSliderArgs = {
  filters?: InputMaybe<ComponentSharedSectionGridSliderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ExperienceTabbedSliderBlockArgs = {
  filters?: InputMaybe<ComponentSharedTabbedSliderBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ExperienceInput = {
  exploreEsperanzaText?: InputMaybe<ComponentSharedSectionTextInput>;
  heroSection?: InputMaybe<ComponentSharedHeroSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sectionGridSlider?: InputMaybe<Array<InputMaybe<ComponentSharedSectionGridSliderInput>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  tabbedSliderBlock?: InputMaybe<Array<InputMaybe<ComponentSharedTabbedSliderBlockInput>>>;
};

export type ExperienceRelationResponseCollection = {
  __typename?: 'ExperienceRelationResponseCollection';
  nodes: Array<Experience>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Gallery = {
  __typename?: 'Gallery';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  galleryImages?: Maybe<ComponentSharedMultipleImages>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Gallery>>;
  localizations_connection?: Maybe<GalleryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sectionText?: Maybe<ComponentSharedSectionText>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GalleryInput = {
  galleryImages?: InputMaybe<ComponentSharedMultipleImagesInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sectionText?: InputMaybe<ComponentSharedSectionTextInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type GalleryRelationResponseCollection = {
  __typename?: 'GalleryRelationResponseCollection';
  nodes: Array<Gallery>;
};

export type GenericMorph = ComponentSharedActionButton | ComponentSharedBookingWidget | ComponentSharedDateRangeItem | ComponentSharedFormDate | ComponentSharedHeaderTextWithSliderBlock | ComponentSharedHeroSection | ComponentSharedMedia | ComponentSharedMenuLinks | ComponentSharedModal | ComponentSharedMultipleImages | ComponentSharedQuote | ComponentSharedRichText | ComponentSharedSectionGridSlider | ComponentSharedSectionText | ComponentSharedSeo | ComponentSharedSimpleText | ComponentSharedSiteFooterSocial | ComponentSharedSlider | ComponentSharedTabItem | ComponentSharedTabbedSliderBlock | ComponentSharedTextImageSliderBlock | ComponentSharedUseTextFieldsInstead | ComponentTabblocksBulletTab | ComponentTabblocksItems | ComponentTabblocksTwoColumnTab | ContactUsForm | Destination | Dining | EmailSubscriber | Experience | Gallery | GiftCard | GiftCardForm | Global | Home | I18NLocale | MeetingsAndEvent | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | RoomsAndSuite | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Villa | Wellness;

export type GiftCard = {
  __typename?: 'GiftCard';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  formAmount?: Maybe<Scalars['String']['output']>;
  formBottomNote?: Maybe<Scalars['JSON']['output']>;
  formButtonText?: Maybe<Scalars['String']['output']>;
  formDelivery?: Maybe<Scalars['String']['output']>;
  formDeliveryOption1?: Maybe<Scalars['String']['output']>;
  formDeliveryOption2?: Maybe<Scalars['String']['output']>;
  formEmail?: Maybe<Scalars['String']['output']>;
  formName?: Maybe<Scalars['String']['output']>;
  formPhone?: Maybe<Scalars['String']['output']>;
  formSurname?: Maybe<Scalars['String']['output']>;
  heroSection?: Maybe<ComponentSharedHeroSection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<GiftCard>>;
  localizations_connection?: Maybe<GiftCardRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quietLuxuryText?: Maybe<ComponentSharedSectionText>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GiftCardForm = {
  __typename?: 'GiftCardForm';
  amount?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  voucherMessage?: Maybe<Scalars['String']['output']>;
  voucherType?: Maybe<Scalars['String']['output']>;
};

export type GiftCardFormEntityResponseCollection = {
  __typename?: 'GiftCardFormEntityResponseCollection';
  nodes: Array<GiftCardForm>;
  pageInfo: Pagination;
};

export type GiftCardFormFiltersInput = {
  amount?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GiftCardFormFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<GiftCardFormFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GiftCardFormFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  surname?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  voucherMessage?: InputMaybe<StringFilterInput>;
  voucherType?: InputMaybe<StringFilterInput>;
};

export type GiftCardFormInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  voucherMessage?: InputMaybe<Scalars['String']['input']>;
  voucherType?: InputMaybe<Scalars['String']['input']>;
};

export type GiftCardInput = {
  formAmount?: InputMaybe<Scalars['String']['input']>;
  formBottomNote?: InputMaybe<Scalars['JSON']['input']>;
  formButtonText?: InputMaybe<Scalars['String']['input']>;
  formDelivery?: InputMaybe<Scalars['String']['input']>;
  formDeliveryOption1?: InputMaybe<Scalars['String']['input']>;
  formDeliveryOption2?: InputMaybe<Scalars['String']['input']>;
  formEmail?: InputMaybe<Scalars['String']['input']>;
  formName?: InputMaybe<Scalars['String']['input']>;
  formPhone?: InputMaybe<Scalars['String']['input']>;
  formSurname?: InputMaybe<Scalars['String']['input']>;
  heroSection?: InputMaybe<ComponentSharedHeroSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quietLuxuryText?: InputMaybe<ComponentSharedSectionTextInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type GiftCardRelationResponseCollection = {
  __typename?: 'GiftCardRelationResponseCollection';
  nodes: Array<GiftCard>;
};

export type Global = {
  __typename?: 'Global';
  bookButton?: Maybe<ComponentSharedActionButton>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Global>>;
  localizations_connection?: Maybe<GlobalRelationResponseCollection>;
  menuFooterEmail?: Maybe<Scalars['String']['output']>;
  menuFooterLocation?: Maybe<Scalars['String']['output']>;
  menuFooterPhone?: Maybe<Scalars['String']['output']>;
  menuFooterSmallText?: Maybe<Scalars['String']['output']>;
  menuLinks: Array<Maybe<ComponentSharedMenuLinks>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  siteFooterBottomText?: Maybe<Scalars['String']['output']>;
  siteFooterBottomTextLink?: Maybe<ComponentSharedActionButton>;
  siteFooterContactLinks?: Maybe<Array<Maybe<ComponentSharedActionButton>>>;
  siteFooterFormButtonText?: Maybe<Scalars['String']['output']>;
  siteFooterFormPlaceholder?: Maybe<Scalars['String']['output']>;
  siteFooterFormSuccessMessage?: Maybe<Scalars['String']['output']>;
  siteFooterSocial?: Maybe<Array<Maybe<ComponentSharedSiteFooterSocial>>>;
  siteLogoFooter?: Maybe<UploadFile>;
  siteLogoHeader?: Maybe<UploadFile>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GlobalMenuLinksArgs = {
  filters?: InputMaybe<ComponentSharedMenuLinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GlobalSiteFooterContactLinksArgs = {
  filters?: InputMaybe<ComponentSharedActionButtonFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GlobalSiteFooterSocialArgs = {
  filters?: InputMaybe<ComponentSharedSiteFooterSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GlobalInput = {
  bookButton?: InputMaybe<ComponentSharedActionButtonInput>;
  menuFooterEmail?: InputMaybe<Scalars['String']['input']>;
  menuFooterLocation?: InputMaybe<Scalars['String']['input']>;
  menuFooterPhone?: InputMaybe<Scalars['String']['input']>;
  menuFooterSmallText?: InputMaybe<Scalars['String']['input']>;
  menuLinks?: InputMaybe<Array<InputMaybe<ComponentSharedMenuLinksInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  siteFooterBottomText?: InputMaybe<Scalars['String']['input']>;
  siteFooterBottomTextLink?: InputMaybe<ComponentSharedActionButtonInput>;
  siteFooterContactLinks?: InputMaybe<Array<InputMaybe<ComponentSharedActionButtonInput>>>;
  siteFooterFormButtonText?: InputMaybe<Scalars['String']['input']>;
  siteFooterFormPlaceholder?: InputMaybe<Scalars['String']['input']>;
  siteFooterFormSuccessMessage?: InputMaybe<Scalars['String']['input']>;
  siteFooterSocial?: InputMaybe<Array<InputMaybe<ComponentSharedSiteFooterSocialInput>>>;
  siteLogoFooter?: InputMaybe<Scalars['ID']['input']>;
  siteLogoHeader?: InputMaybe<Scalars['ID']['input']>;
};

export type GlobalRelationResponseCollection = {
  __typename?: 'GlobalRelationResponseCollection';
  nodes: Array<Global>;
};

export type Home = {
  __typename?: 'Home';
  HeaderTextWithSliderBlockTwo?: Maybe<Array<Maybe<ComponentSharedHeaderTextWithSliderBlock>>>;
  bookingWidget?: Maybe<ComponentSharedBookingWidget>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  destinationImages?: Maybe<ComponentSharedMultipleImages>;
  destinationText?: Maybe<ComponentSharedSectionText>;
  documentId: Scalars['ID']['output'];
  experiencesGridSlider?: Maybe<Array<Maybe<ComponentSharedSectionGridSlider>>>;
  experiencesText?: Maybe<ComponentSharedSectionText>;
  headerTextWithSliderBlock?: Maybe<Array<Maybe<ComponentSharedHeaderTextWithSliderBlock>>>;
  heroSection?: Maybe<ComponentSharedHeroSection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Home>>;
  localizations_connection?: Maybe<HomeRelationResponseCollection>;
  modal?: Maybe<ComponentSharedModal>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  wellnessGridSlider?: Maybe<Array<Maybe<ComponentSharedSectionGridSlider>>>;
  wellnessText?: Maybe<ComponentSharedSectionText>;
};


export type HomeHeaderTextWithSliderBlockTwoArgs = {
  filters?: InputMaybe<ComponentSharedHeaderTextWithSliderBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomeExperiencesGridSliderArgs = {
  filters?: InputMaybe<ComponentSharedSectionGridSliderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomeHeaderTextWithSliderBlockArgs = {
  filters?: InputMaybe<ComponentSharedHeaderTextWithSliderBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomeWellnessGridSliderArgs = {
  filters?: InputMaybe<ComponentSharedSectionGridSliderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeInput = {
  HeaderTextWithSliderBlockTwo?: InputMaybe<Array<InputMaybe<ComponentSharedHeaderTextWithSliderBlockInput>>>;
  bookingWidget?: InputMaybe<ComponentSharedBookingWidgetInput>;
  destinationImages?: InputMaybe<ComponentSharedMultipleImagesInput>;
  destinationText?: InputMaybe<ComponentSharedSectionTextInput>;
  experiencesGridSlider?: InputMaybe<Array<InputMaybe<ComponentSharedSectionGridSliderInput>>>;
  experiencesText?: InputMaybe<ComponentSharedSectionTextInput>;
  headerTextWithSliderBlock?: InputMaybe<Array<InputMaybe<ComponentSharedHeaderTextWithSliderBlockInput>>>;
  heroSection?: InputMaybe<ComponentSharedHeroSectionInput>;
  modal?: InputMaybe<ComponentSharedModalInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  wellnessGridSlider?: InputMaybe<Array<InputMaybe<ComponentSharedSectionGridSliderInput>>>;
  wellnessText?: InputMaybe<ComponentSharedSectionTextInput>;
};

export type HomeRelationResponseCollection = {
  __typename?: 'HomeRelationResponseCollection';
  nodes: Array<Home>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type MeetingsAndEvent = {
  __typename?: 'MeetingsAndEvent';
  contactUsText?: Maybe<ComponentSharedSectionText>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  formButtonText?: Maybe<Scalars['String']['output']>;
  formCalendarDoneButtonText?: Maybe<Scalars['String']['output']>;
  formCalendarResetButtonText?: Maybe<Scalars['String']['output']>;
  formDates?: Maybe<Scalars['String']['output']>;
  formEmail?: Maybe<Scalars['String']['output']>;
  formMessage?: Maybe<Scalars['String']['output']>;
  formName?: Maybe<Scalars['String']['output']>;
  formNumberGuests?: Maybe<Scalars['String']['output']>;
  formPhone?: Maybe<Scalars['String']['output']>;
  formSuccessText?: Maybe<Scalars['String']['output']>;
  formSurname?: Maybe<Scalars['String']['output']>;
  heroSection?: Maybe<ComponentSharedHeroSection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<MeetingsAndEvent>>;
  localizations_connection?: Maybe<MeetingsAndEventRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sectionGridSlider?: Maybe<Array<Maybe<ComponentSharedSectionGridSlider>>>;
  seo?: Maybe<ComponentSharedSeo>;
  tabbedSliderBlock?: Maybe<Array<Maybe<ComponentSharedTabbedSliderBlock>>>;
  timelessMomentstext?: Maybe<ComponentSharedSectionText>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MeetingsAndEventSectionGridSliderArgs = {
  filters?: InputMaybe<ComponentSharedSectionGridSliderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MeetingsAndEventTabbedSliderBlockArgs = {
  filters?: InputMaybe<ComponentSharedTabbedSliderBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MeetingsAndEventInput = {
  contactUsText?: InputMaybe<ComponentSharedSectionTextInput>;
  formButtonText?: InputMaybe<Scalars['String']['input']>;
  formCalendarDoneButtonText?: InputMaybe<Scalars['String']['input']>;
  formCalendarResetButtonText?: InputMaybe<Scalars['String']['input']>;
  formDates?: InputMaybe<Scalars['String']['input']>;
  formEmail?: InputMaybe<Scalars['String']['input']>;
  formMessage?: InputMaybe<Scalars['String']['input']>;
  formName?: InputMaybe<Scalars['String']['input']>;
  formNumberGuests?: InputMaybe<Scalars['String']['input']>;
  formPhone?: InputMaybe<Scalars['String']['input']>;
  formSuccessText?: InputMaybe<Scalars['String']['input']>;
  formSurname?: InputMaybe<Scalars['String']['input']>;
  heroSection?: InputMaybe<ComponentSharedHeroSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sectionGridSlider?: InputMaybe<Array<InputMaybe<ComponentSharedSectionGridSliderInput>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  tabbedSliderBlock?: InputMaybe<Array<InputMaybe<ComponentSharedTabbedSliderBlockInput>>>;
  timelessMomentstext?: InputMaybe<ComponentSharedSectionTextInput>;
};

export type MeetingsAndEventRelationResponseCollection = {
  __typename?: 'MeetingsAndEventRelationResponseCollection';
  nodes: Array<MeetingsAndEvent>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createContactUsForm?: Maybe<ContactUsForm>;
  createEmailSubscriber?: Maybe<EmailSubscriber>;
  createGiftCardForm?: Maybe<GiftCardForm>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteContactUsForm?: Maybe<DeleteMutationResponse>;
  deleteDestination?: Maybe<DeleteMutationResponse>;
  deleteDining?: Maybe<DeleteMutationResponse>;
  deleteEmailSubscriber?: Maybe<DeleteMutationResponse>;
  deleteExperience?: Maybe<DeleteMutationResponse>;
  deleteGallery?: Maybe<DeleteMutationResponse>;
  deleteGiftCard?: Maybe<DeleteMutationResponse>;
  deleteGiftCardForm?: Maybe<DeleteMutationResponse>;
  deleteGlobal?: Maybe<DeleteMutationResponse>;
  deleteHome?: Maybe<DeleteMutationResponse>;
  deleteMeetingsAndEvent?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteRoomsAndSuite?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVilla?: Maybe<DeleteMutationResponse>;
  deleteWellness?: Maybe<DeleteMutationResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateContactUsForm?: Maybe<ContactUsForm>;
  updateDestination?: Maybe<Destination>;
  updateDining?: Maybe<Dining>;
  updateEmailSubscriber?: Maybe<EmailSubscriber>;
  updateExperience?: Maybe<Experience>;
  updateGallery?: Maybe<Gallery>;
  updateGiftCard?: Maybe<GiftCard>;
  updateGiftCardForm?: Maybe<GiftCardForm>;
  updateGlobal?: Maybe<Global>;
  updateHome?: Maybe<Home>;
  updateMeetingsAndEvent?: Maybe<MeetingsAndEvent>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateRoomsAndSuite?: Maybe<RoomsAndSuite>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVilla?: Maybe<Villa>;
  updateWellness?: Maybe<Wellness>;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateContactUsFormArgs = {
  data: ContactUsFormInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateEmailSubscriberArgs = {
  data: EmailSubscriberInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateGiftCardFormArgs = {
  data: GiftCardFormInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteContactUsFormArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteDestinationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteDiningArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteEmailSubscriberArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteExperienceArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteGalleryArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteGiftCardArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteGiftCardFormArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteGlobalArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHomeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMeetingsAndEventArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteRoomsAndSuiteArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVillaArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteWellnessArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateContactUsFormArgs = {
  data: ContactUsFormInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateDestinationArgs = {
  data: DestinationInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateDiningArgs = {
  data: DiningInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateEmailSubscriberArgs = {
  data: EmailSubscriberInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateExperienceArgs = {
  data: ExperienceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateGalleryArgs = {
  data: GalleryInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateGiftCardArgs = {
  data: GiftCardInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateGiftCardFormArgs = {
  data: GiftCardFormInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateMeetingsAndEventArgs = {
  data: MeetingsAndEventInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateRoomsAndSuiteArgs = {
  data: RoomsAndSuiteInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateVillaArgs = {
  data: VillaInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateWellnessArgs = {
  data: WellnessInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  contactUsForm?: Maybe<ContactUsForm>;
  contactUsForms: Array<Maybe<ContactUsForm>>;
  contactUsForms_connection?: Maybe<ContactUsFormEntityResponseCollection>;
  destination?: Maybe<Destination>;
  dining?: Maybe<Dining>;
  emailSubscriber?: Maybe<EmailSubscriber>;
  emailSubscribers: Array<Maybe<EmailSubscriber>>;
  emailSubscribers_connection?: Maybe<EmailSubscriberEntityResponseCollection>;
  experience?: Maybe<Experience>;
  gallery?: Maybe<Gallery>;
  giftCard?: Maybe<GiftCard>;
  giftCardForm?: Maybe<GiftCardForm>;
  giftCardForms: Array<Maybe<GiftCardForm>>;
  giftCardForms_connection?: Maybe<GiftCardFormEntityResponseCollection>;
  global?: Maybe<Global>;
  home?: Maybe<Home>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  meetingsAndEvent?: Maybe<MeetingsAndEvent>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  roomsAndSuite?: Maybe<RoomsAndSuite>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  villa?: Maybe<Villa>;
  wellness?: Maybe<Wellness>;
};


export type QueryContactUsFormArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContactUsFormsArgs = {
  filters?: InputMaybe<ContactUsFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContactUsForms_ConnectionArgs = {
  filters?: InputMaybe<ContactUsFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDestinationArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryDiningArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEmailSubscriberArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEmailSubscribersArgs = {
  filters?: InputMaybe<EmailSubscriberFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryEmailSubscribers_ConnectionArgs = {
  filters?: InputMaybe<EmailSubscriberFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryExperienceArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGalleryArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGiftCardArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGiftCardFormArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGiftCardFormsArgs = {
  filters?: InputMaybe<GiftCardFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGiftCardForms_ConnectionArgs = {
  filters?: InputMaybe<GiftCardFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGlobalArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryHomeArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryMeetingsAndEventArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryRoomsAndSuiteArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryVillaArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryWellnessArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type RoomsAndSuite = {
  __typename?: 'RoomsAndSuite';
  bookButtonShowMobile?: Maybe<ComponentSharedActionButton>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  heroSection?: Maybe<ComponentSharedHeroSection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<RoomsAndSuite>>;
  localizations_connection?: Maybe<RoomsAndSuiteRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  spacesToBreatheText?: Maybe<ComponentSharedSectionText>;
  tabbedSliderBlock?: Maybe<Array<Maybe<ComponentSharedTabbedSliderBlock>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type RoomsAndSuiteTabbedSliderBlockArgs = {
  filters?: InputMaybe<ComponentSharedTabbedSliderBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RoomsAndSuiteInput = {
  bookButtonShowMobile?: InputMaybe<ComponentSharedActionButtonInput>;
  heroSection?: InputMaybe<ComponentSharedHeroSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  spacesToBreatheText?: InputMaybe<ComponentSharedSectionTextInput>;
  tabbedSliderBlock?: InputMaybe<Array<InputMaybe<ComponentSharedTabbedSliderBlockInput>>>;
};

export type RoomsAndSuiteRelationResponseCollection = {
  __typename?: 'RoomsAndSuiteRelationResponseCollection';
  nodes: Array<RoomsAndSuite>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type Villa = {
  __typename?: 'Villa';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  heroSection?: Maybe<ComponentSharedHeroSection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Villa>>;
  localizations_connection?: Maybe<VillaRelationResponseCollection>;
  privateHeavensText?: Maybe<ComponentSharedSectionText>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  tabbedSliderBlock?: Maybe<Array<Maybe<ComponentSharedTabbedSliderBlock>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type VillaTabbedSliderBlockArgs = {
  filters?: InputMaybe<ComponentSharedTabbedSliderBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VillaInput = {
  heroSection?: InputMaybe<ComponentSharedHeroSectionInput>;
  privateHeavensText?: InputMaybe<ComponentSharedSectionTextInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  tabbedSliderBlock?: InputMaybe<Array<InputMaybe<ComponentSharedTabbedSliderBlockInput>>>;
};

export type VillaRelationResponseCollection = {
  __typename?: 'VillaRelationResponseCollection';
  nodes: Array<Villa>;
};

export type Wellness = {
  __typename?: 'Wellness';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  facilitiesText?: Maybe<ComponentSharedSectionText>;
  heroSection?: Maybe<ComponentSharedHeroSection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations: Array<Maybe<Wellness>>;
  localizations_connection?: Maybe<WellnessRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  ritualRenewalImages?: Maybe<ComponentSharedMultipleImages>;
  ritualRenewalText?: Maybe<ComponentSharedSectionText>;
  sectionGridSlider?: Maybe<Array<Maybe<ComponentSharedSectionGridSlider>>>;
  seo?: Maybe<ComponentSharedSeo>;
  tabbedSliderBlock?: Maybe<Array<Maybe<ComponentSharedTabbedSliderBlock>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type WellnessSectionGridSliderArgs = {
  filters?: InputMaybe<ComponentSharedSectionGridSliderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WellnessTabbedSliderBlockArgs = {
  filters?: InputMaybe<ComponentSharedTabbedSliderBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WellnessInput = {
  facilitiesText?: InputMaybe<ComponentSharedSectionTextInput>;
  heroSection?: InputMaybe<ComponentSharedHeroSectionInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  ritualRenewalImages?: InputMaybe<ComponentSharedMultipleImagesInput>;
  ritualRenewalText?: InputMaybe<ComponentSharedSectionTextInput>;
  sectionGridSlider?: InputMaybe<Array<InputMaybe<ComponentSharedSectionGridSliderInput>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  tabbedSliderBlock?: InputMaybe<Array<InputMaybe<ComponentSharedTabbedSliderBlockInput>>>;
};

export type WellnessRelationResponseCollection = {
  __typename?: 'WellnessRelationResponseCollection';
  nodes: Array<Wellness>;
};

export type GlobalQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GlobalQuery = { __typename?: 'Query', global?: { __typename?: 'Global', menuFooterEmail?: string | null, menuFooterLocation?: string | null, menuFooterPhone?: string | null, menuFooterSmallText?: string | null, siteFooterFormPlaceholder?: string | null, siteFooterFormButtonText?: string | null, siteFooterBottomText?: string | null, siteFooterFormSuccessMessage?: string | null, bookButton?: { __typename?: 'ComponentSharedActionButton', buttonText?: string | null, buttonUrl?: string | null, desktopUrl?: string | null, newTab?: boolean | null } | null, menuLinks: Array<{ __typename?: 'ComponentSharedMenuLinks', menuLabel: string, slug: string, showInMenu: boolean } | null>, siteFooterSocial?: Array<{ __typename?: 'ComponentSharedSiteFooterSocial', linkUrl?: string | null, icon?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null> | null, siteFooterContactLinks?: Array<{ __typename?: 'ComponentSharedActionButton', id: string, buttonUrl?: string | null, desktopUrl?: string | null, buttonText?: string | null, newTab?: boolean | null } | null> | null, siteFooterBottomTextLink?: { __typename?: 'ComponentSharedActionButton', id: string, buttonUrl?: string | null, desktopUrl?: string | null, buttonText?: string | null, newTab?: boolean | null } | null, siteLogoHeader?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null, siteLogoFooter?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null };

export type HomeQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type HomeQuery = { __typename?: 'Query', home?: { __typename?: 'Home', heroSection?: { __typename?: 'ComponentSharedHeroSection', id: string, heroText?: string | null, heroImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null, destinationText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, destinationImages?: { __typename?: 'ComponentSharedMultipleImages', multipleImages: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null, headerTextWithSliderBlock?: Array<{ __typename?: 'ComponentSharedHeaderTextWithSliderBlock', sectionText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, textImageSliderBlock?: Array<{ __typename?: 'ComponentSharedTextImageSliderBlock', id: string, title?: string | null, description?: string | null, hideThisBlock?: boolean | null, image?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null> | null } | null> | null, wellnessText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, wellnessGridSlider?: Array<{ __typename?: 'ComponentSharedSectionGridSlider', id: string, title?: string | null, description?: string | null, hideThisBlock?: boolean | null, image?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null> | null, HeaderTextWithSliderBlockTwo?: Array<{ __typename?: 'ComponentSharedHeaderTextWithSliderBlock', sectionText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, textImageSliderBlock?: Array<{ __typename?: 'ComponentSharedTextImageSliderBlock', id: string, title?: string | null, description?: string | null, hideThisBlock?: boolean | null, image?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null> | null } | null> | null, experiencesText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, experiencesGridSlider?: Array<{ __typename?: 'ComponentSharedSectionGridSlider', id: string, title?: string | null, description?: string | null, hideThisBlock?: boolean | null, image?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null> | null, bookingWidget?: { __typename?: 'ComponentSharedBookingWidget', adults?: string | null, buttonCheckAvailabilityText?: string | null, buttonNextText?: string | null, buttonPreviousText?: string | null, buttonSearchText?: string | null, children?: string | null, dates?: string | null, id: string, noAvailability?: string | null, roomsGuests?: string | null, selectedDates?: string | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null, modal?: { __typename?: 'ComponentSharedModal', id: string, modalIsActive?: boolean | null, modal_storage_type?: Enum_Componentsharedmodal_Modal_Storage_Type | null, modalTitle?: string | null, modalSubTitle?: string | null, modalContent?: string | null, modalHeaderLogo?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null, modalImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null, modalActionButton?: { __typename?: 'ComponentSharedActionButton', id: string, buttonUrl?: string | null, desktopUrl?: string | null, buttonText?: string | null, newTab?: boolean | null } | null } | null } | null };

export type DestinationQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type DestinationQuery = { __typename?: 'Query', destination?: { __typename?: 'Destination', afterMapText?: string | null, heroSection?: { __typename?: 'ComponentSharedHeroSection', heroText?: string | null, hideThisBlock?: boolean | null, heroImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null, beforeMapText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, locationImages?: { __typename?: 'ComponentSharedMultipleImages', multipleImages: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null, architectureDesignText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, architectureDesignImages?: { __typename?: 'ComponentSharedMultipleImages', multipleImages: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null, Seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, shareImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null } | null };

export type RoomsAndSuiteQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type RoomsAndSuiteQuery = { __typename?: 'Query', roomsAndSuite?: { __typename?: 'RoomsAndSuite', heroSection?: { __typename?: 'ComponentSharedHeroSection', heroText?: string | null, hideThisBlock?: boolean | null, heroImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null, spacesToBreatheText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, tabbedSliderBlock?: Array<{ __typename?: 'ComponentSharedTabbedSliderBlock', title?: string | null, infoLineText?: string | null, hideThisBlock?: boolean | null, tabItem?: Array<{ __typename?: 'ComponentSharedTabItem', id: string, label?: string | null, tabContent?: any | null, useSeparateFields?: boolean | null, useTextFieldsInstead?: Array<{ __typename?: 'ComponentSharedUseTextFieldsInstead', id: string, firstTextField?: string | null, secondTextField?: string | null, specialTextField?: string | null } | null> | null } | null> | null, actionButton?: Array<{ __typename?: 'ComponentSharedActionButton', id: string, buttonUrl?: string | null, desktopUrl?: string | null, buttonText?: string | null, newTab?: boolean | null } | null> | null, images: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null> | null, bookButtonShowMobile?: { __typename?: 'ComponentSharedActionButton', id: string, buttonText?: string | null, buttonUrl?: string | null, desktopUrl?: string | null, newTab?: boolean | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null } | null };

export type VillaQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type VillaQuery = { __typename?: 'Query', villa?: { __typename?: 'Villa', heroSection?: { __typename?: 'ComponentSharedHeroSection', heroText?: string | null, hideThisBlock?: boolean | null, heroImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null, privateHeavensText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, tabbedSliderBlock?: Array<{ __typename?: 'ComponentSharedTabbedSliderBlock', title?: string | null, infoLineText?: string | null, hideThisBlock?: boolean | null, tabItem?: Array<{ __typename?: 'ComponentSharedTabItem', id: string, label?: string | null, tabContent?: any | null, useSeparateFields?: boolean | null, useTextFieldsInstead?: Array<{ __typename?: 'ComponentSharedUseTextFieldsInstead', id: string, firstTextField?: string | null, secondTextField?: string | null, specialTextField?: string | null } | null> | null } | null> | null, actionButton?: Array<{ __typename?: 'ComponentSharedActionButton', id: string, buttonUrl?: string | null, desktopUrl?: string | null, buttonText?: string | null, newTab?: boolean | null } | null> | null, images: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null> | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null } | null };

export type WellnessQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type WellnessQuery = { __typename?: 'Query', wellness?: { __typename?: 'Wellness', heroSection?: { __typename?: 'ComponentSharedHeroSection', heroText?: string | null, hideThisBlock?: boolean | null, heroImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null, ritualRenewalText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, ritualRenewalImages?: { __typename?: 'ComponentSharedMultipleImages', multipleImages: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null, facilitiesText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, sectionGridSlider?: Array<{ __typename?: 'ComponentSharedSectionGridSlider', id: string, title?: string | null, description?: string | null, hideThisBlock?: boolean | null, image?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null> | null, tabbedSliderBlock?: Array<{ __typename?: 'ComponentSharedTabbedSliderBlock', title?: string | null, infoLineText?: string | null, hideThisBlock?: boolean | null, tabItem?: Array<{ __typename?: 'ComponentSharedTabItem', id: string, label?: string | null, tabContent?: any | null, useSeparateFields?: boolean | null, useTextFieldsInstead?: Array<{ __typename?: 'ComponentSharedUseTextFieldsInstead', id: string, firstTextField?: string | null, secondTextField?: string | null, specialTextField?: string | null } | null> | null } | null> | null, actionButton?: Array<{ __typename?: 'ComponentSharedActionButton', id: string, buttonUrl?: string | null, desktopUrl?: string | null, buttonText?: string | null, newTab?: boolean | null } | null> | null, images: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null> | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null } | null };

export type DiningQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type DiningQuery = { __typename?: 'Query', dining?: { __typename?: 'Dining', heroSection?: { __typename?: 'ComponentSharedHeroSection', heroText?: string | null, hideThisBlock?: boolean | null, heroImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null, beyondTableText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, tabbedSliderBlock?: Array<{ __typename?: 'ComponentSharedTabbedSliderBlock', title?: string | null, hideThisBlock?: boolean | null, tabItem?: Array<{ __typename?: 'ComponentSharedTabItem', id: string, label?: string | null, tabContent?: any | null, useSeparateFields?: boolean | null, useTextFieldsInstead?: Array<{ __typename?: 'ComponentSharedUseTextFieldsInstead', id: string, firstTextField?: string | null, secondTextField?: string | null, specialTextField?: string | null } | null> | null } | null> | null, actionButton?: Array<{ __typename?: 'ComponentSharedActionButton', id: string, buttonUrl?: string | null, desktopUrl?: string | null, buttonText?: string | null, newTab?: boolean | null } | null> | null, images: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null> | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null } | null };

export type MeetingsAndEventQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type MeetingsAndEventQuery = { __typename?: 'Query', meetingsAndEvent?: { __typename?: 'MeetingsAndEvent', formName?: string | null, formSurname?: string | null, formPhone?: string | null, formEmail?: string | null, formDates?: string | null, formNumberGuests?: string | null, formMessage?: string | null, formButtonText?: string | null, formSuccessText?: string | null, formCalendarResetButtonText?: string | null, formCalendarDoneButtonText?: string | null, heroSection?: { __typename?: 'ComponentSharedHeroSection', heroText?: string | null, hideThisBlock?: boolean | null, heroImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null, timelessMomentstext?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, tabbedSliderBlock?: Array<{ __typename?: 'ComponentSharedTabbedSliderBlock', title?: string | null, infoLineText?: string | null, hideThisBlock?: boolean | null, tabItem?: Array<{ __typename?: 'ComponentSharedTabItem', id: string, label?: string | null, tabContent?: any | null, useSeparateFields?: boolean | null, useTextFieldsInstead?: Array<{ __typename?: 'ComponentSharedUseTextFieldsInstead', id: string, firstTextField?: string | null, secondTextField?: string | null, specialTextField?: string | null } | null> | null } | null> | null, actionButton?: Array<{ __typename?: 'ComponentSharedActionButton', id: string, buttonUrl?: string | null, desktopUrl?: string | null, buttonText?: string | null, newTab?: boolean | null } | null> | null, images: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null> | null, sectionGridSlider?: Array<{ __typename?: 'ComponentSharedSectionGridSlider', id: string, title?: string | null, description?: string | null, hideThisBlock?: boolean | null, image?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null> | null, contactUsText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null } | null };

export type ExperienceQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type ExperienceQuery = { __typename?: 'Query', experience?: { __typename?: 'Experience', heroSection?: { __typename?: 'ComponentSharedHeroSection', heroText?: string | null, hideThisBlock?: boolean | null, heroImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null, exploreEsperanzaText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, tabbedSliderBlock?: Array<{ __typename?: 'ComponentSharedTabbedSliderBlock', title?: string | null, infoLineText?: string | null, hideThisBlock?: boolean | null, tabItem?: Array<{ __typename?: 'ComponentSharedTabItem', id: string, label?: string | null, tabContent?: any | null, useSeparateFields?: boolean | null, useTextFieldsInstead?: Array<{ __typename?: 'ComponentSharedUseTextFieldsInstead', id: string, firstTextField?: string | null, secondTextField?: string | null, specialTextField?: string | null } | null> | null } | null> | null, actionButton?: Array<{ __typename?: 'ComponentSharedActionButton', id: string, buttonUrl?: string | null, desktopUrl?: string | null, buttonText?: string | null, newTab?: boolean | null } | null> | null, images: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null> | null, sectionGridSlider?: Array<{ __typename?: 'ComponentSharedSectionGridSlider', id: string, title?: string | null, description?: string | null, hideThisBlock?: boolean | null, image?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null> | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null } | null };

export type GalleryQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GalleryQuery = { __typename?: 'Query', gallery?: { __typename?: 'Gallery', sectionText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, galleryImages?: { __typename?: 'ComponentSharedMultipleImages', multipleImages: Array<{ __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null> } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null } | null };

export type GiftCardQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
}>;


export type GiftCardQuery = { __typename?: 'Query', giftCard?: { __typename?: 'GiftCard', formBottomNote?: any | null, formName?: string | null, formSurname?: string | null, formPhone?: string | null, formEmail?: string | null, formAmount?: string | null, formDelivery?: string | null, formDeliveryOption1?: string | null, formDeliveryOption2?: string | null, formButtonText?: string | null, heroSection?: { __typename?: 'ComponentSharedHeroSection', heroText?: string | null, hideThisBlock?: boolean | null, heroImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null, quietLuxuryText?: { __typename?: 'ComponentSharedSectionText', subtitle?: string | null, title?: string | null, description?: string | null, buttonText?: string | null, buttonUrl?: string | null, newTab?: boolean | null, hideThisBlock?: boolean | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, shareImage?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, documentId: string, hash: string, mime: string, name: string, provider: string, size: number, formats?: any | null } | null } | null } | null };


export const GlobalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Global"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"global"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuFooterEmail"}},{"kind":"Field","name":{"kind":"Name","value":"menuFooterLocation"}},{"kind":"Field","name":{"kind":"Name","value":"menuFooterPhone"}},{"kind":"Field","name":{"kind":"Name","value":"menuFooterPhone"}},{"kind":"Field","name":{"kind":"Name","value":"menuFooterSmallText"}},{"kind":"Field","name":{"kind":"Name","value":"bookButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"menuLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuLabel"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"showInMenu"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteFooterSocial"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteFooterContactLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteFooterFormPlaceholder"}},{"kind":"Field","name":{"kind":"Name","value":"siteFooterFormButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"siteFooterBottomText"}},{"kind":"Field","name":{"kind":"Name","value":"siteFooterBottomTextLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteFooterFormSuccessMessage"}},{"kind":"Field","name":{"kind":"Name","value":"siteLogoHeader"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"siteLogoFooter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]} as unknown as DocumentNode<GlobalQuery, GlobalQueryVariables>;
export const HomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Home"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"home"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"destinationText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"destinationImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multipleImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"headerTextWithSliderBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sectionText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textImageSliderBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"wellnessText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"wellnessGridSlider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"HeaderTextWithSliderBlockTwo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sectionText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"textImageSliderBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"experiencesText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experiencesGridSlider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookingWidget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adults"}},{"kind":"Field","name":{"kind":"Name","value":"buttonCheckAvailabilityText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonNextText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonPreviousText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonSearchText"}},{"kind":"Field","name":{"kind":"Name","value":"children"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noAvailability"}},{"kind":"Field","name":{"kind":"Name","value":"roomsGuests"}},{"kind":"Field","name":{"kind":"Name","value":"selectedDates"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shareImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modal"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"modalIsActive"}},{"kind":"Field","name":{"kind":"Name","value":"modal_storage_type"}},{"kind":"Field","name":{"kind":"Name","value":"modalHeaderLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"modalImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"modalTitle"}},{"kind":"Field","name":{"kind":"Name","value":"modalSubTitle"}},{"kind":"Field","name":{"kind":"Name","value":"modalContent"}},{"kind":"Field","name":{"kind":"Name","value":"modalActionButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomeQuery, HomeQueryVariables>;
export const DestinationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Destination"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"destination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroText"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beforeMapText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"afterMapText"}},{"kind":"Field","name":{"kind":"Name","value":"locationImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multipleImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"architectureDesignText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"architectureDesignImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multipleImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"shareImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DestinationQuery, DestinationQueryVariables>;
export const RoomsAndSuiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RoomsAndSuite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"roomsAndSuite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroText"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"spacesToBreatheText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tabbedSliderBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tabItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"tabContent"}},{"kind":"Field","name":{"kind":"Name","value":"useSeparateFields"}},{"kind":"Field","name":{"kind":"Name","value":"useTextFieldsInstead"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstTextField"}},{"kind":"Field","name":{"kind":"Name","value":"secondTextField"}},{"kind":"Field","name":{"kind":"Name","value":"specialTextField"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infoLineText"}},{"kind":"Field","name":{"kind":"Name","value":"actionButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bookButtonShowMobile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shareImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]} as unknown as DocumentNode<RoomsAndSuiteQuery, RoomsAndSuiteQueryVariables>;
export const VillaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Villa"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"villa"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroText"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"privateHeavensText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tabbedSliderBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tabItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"tabContent"}},{"kind":"Field","name":{"kind":"Name","value":"useSeparateFields"}},{"kind":"Field","name":{"kind":"Name","value":"useTextFieldsInstead"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstTextField"}},{"kind":"Field","name":{"kind":"Name","value":"secondTextField"}},{"kind":"Field","name":{"kind":"Name","value":"specialTextField"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infoLineText"}},{"kind":"Field","name":{"kind":"Name","value":"actionButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shareImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]} as unknown as DocumentNode<VillaQuery, VillaQueryVariables>;
export const WellnessDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Wellness"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"wellness"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroText"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ritualRenewalText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ritualRenewalImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multipleImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"facilitiesText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sectionGridSlider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tabbedSliderBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tabItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"tabContent"}},{"kind":"Field","name":{"kind":"Name","value":"useSeparateFields"}},{"kind":"Field","name":{"kind":"Name","value":"useTextFieldsInstead"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstTextField"}},{"kind":"Field","name":{"kind":"Name","value":"secondTextField"}},{"kind":"Field","name":{"kind":"Name","value":"specialTextField"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infoLineText"}},{"kind":"Field","name":{"kind":"Name","value":"actionButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shareImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]} as unknown as DocumentNode<WellnessQuery, WellnessQueryVariables>;
export const DiningDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Dining"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dining"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroText"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"beyondTableText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tabbedSliderBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tabItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"tabContent"}},{"kind":"Field","name":{"kind":"Name","value":"useSeparateFields"}},{"kind":"Field","name":{"kind":"Name","value":"useTextFieldsInstead"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstTextField"}},{"kind":"Field","name":{"kind":"Name","value":"secondTextField"}},{"kind":"Field","name":{"kind":"Name","value":"specialTextField"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"actionButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shareImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DiningQuery, DiningQueryVariables>;
export const MeetingsAndEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeetingsAndEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingsAndEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroText"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timelessMomentstext"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tabbedSliderBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tabItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"tabContent"}},{"kind":"Field","name":{"kind":"Name","value":"useSeparateFields"}},{"kind":"Field","name":{"kind":"Name","value":"useTextFieldsInstead"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstTextField"}},{"kind":"Field","name":{"kind":"Name","value":"secondTextField"}},{"kind":"Field","name":{"kind":"Name","value":"specialTextField"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infoLineText"}},{"kind":"Field","name":{"kind":"Name","value":"actionButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sectionGridSlider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactUsText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"formName"}},{"kind":"Field","name":{"kind":"Name","value":"formSurname"}},{"kind":"Field","name":{"kind":"Name","value":"formPhone"}},{"kind":"Field","name":{"kind":"Name","value":"formEmail"}},{"kind":"Field","name":{"kind":"Name","value":"formDates"}},{"kind":"Field","name":{"kind":"Name","value":"formNumberGuests"}},{"kind":"Field","name":{"kind":"Name","value":"formMessage"}},{"kind":"Field","name":{"kind":"Name","value":"formButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"formSuccessText"}},{"kind":"Field","name":{"kind":"Name","value":"formCalendarResetButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"formCalendarDoneButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shareImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MeetingsAndEventQuery, MeetingsAndEventQueryVariables>;
export const ExperienceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Experience"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroText"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exploreEsperanzaText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tabbedSliderBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tabItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"tabContent"}},{"kind":"Field","name":{"kind":"Name","value":"useSeparateFields"}},{"kind":"Field","name":{"kind":"Name","value":"useTextFieldsInstead"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstTextField"}},{"kind":"Field","name":{"kind":"Name","value":"secondTextField"}},{"kind":"Field","name":{"kind":"Name","value":"specialTextField"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"infoLineText"}},{"kind":"Field","name":{"kind":"Name","value":"actionButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"desktopUrl"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sectionGridSlider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shareImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ExperienceQuery, ExperienceQueryVariables>;
export const GalleryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Gallery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gallery"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sectionText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"galleryImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multipleImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"40"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shareImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GalleryQuery, GalleryQueryVariables>;
export const GiftCardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GiftCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"I18NLocaleCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"giftCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroSection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroText"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quietLuxuryText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"buttonText"}},{"kind":"Field","name":{"kind":"Name","value":"buttonUrl"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"hideThisBlock"}}]}},{"kind":"Field","name":{"kind":"Name","value":"formBottomNote"}},{"kind":"Field","name":{"kind":"Name","value":"formName"}},{"kind":"Field","name":{"kind":"Name","value":"formSurname"}},{"kind":"Field","name":{"kind":"Name","value":"formPhone"}},{"kind":"Field","name":{"kind":"Name","value":"formEmail"}},{"kind":"Field","name":{"kind":"Name","value":"formAmount"}},{"kind":"Field","name":{"kind":"Name","value":"formDelivery"}},{"kind":"Field","name":{"kind":"Name","value":"formDeliveryOption1"}},{"kind":"Field","name":{"kind":"Name","value":"formDeliveryOption2"}},{"kind":"Field","name":{"kind":"Name","value":"formButtonText"}},{"kind":"Field","name":{"kind":"Name","value":"seo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"shareImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GiftCardQuery, GiftCardQueryVariables>;