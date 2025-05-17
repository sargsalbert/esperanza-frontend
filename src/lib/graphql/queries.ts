import { gql } from '@apollo/client';

export const HOME_QUERY = gql`
  query Home($locale: I18NLocaleCode) {
    home(locale: $locale) {
      heroSection {
        heroImage {
          alternativeText
          url
        }
        heroText
      }
      destinationText {
        subtitle
        title
        description
        buttonText
      }
      destinationImages {
        multipleImages {
          alternativeText
          url
        }
      }
      headerTextWithSliderBlock {
        sectionText {
          subtitle
          title
          description
          buttonText
        }
        textImageSliderBlock {
          id
          title
          description
          image {
            alternativeText
            url
            documentId
            hash
            mime
            name
            provider
            size
          }
        }
      }
      wellnessText {
        subtitle
        title
        description
        buttonText
      }
      wellnessGridSlider {
        id
        title
        description
        image {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
      HeaderTextWithSliderBlockTwo {
        sectionText {
          subtitle
          title
          description
          buttonText
        }
        textImageSliderBlock {
          id
          title
          description
          image {
            alternativeText
            url
            documentId
            hash
            mime
            name
            provider
            size
          }
        }
      }
      experiencesText {
        subtitle
        title
        description
        buttonText
      }
      experiencesGridSlider {
        id
        title
        description
        image {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
    }
  }
`;

export const DESTINATION_QUERY = gql`
  query Destination($locale: I18NLocaleCode) {
    destination(locale: $locale) {
      heroSection {
        heroImage {
          alternativeText
          url
        }
        heroText
      }
      beforeMapText {
        subtitle
        title
        description
        buttonText
      }
      afterMapText
      architectureDesignText {
        subtitle
        title
        description
        buttonText
      }
      architectureDesignImages {
        multipleImages {
          alternativeText
          url
          documentId
        }
      }
      Seo {
        metaDescription
        metaTitle
        metaTitle
        shareImage {
          alternativeText
          url
        }
      }
    }
  }
`;

export const ROOMS_QUERY = gql`
  query RoomsAndSuite($locale: I18NLocaleCode) {
    roomsAndSuite(locale: $locale) {
      heroSection {
        heroImage {
          alternativeText
          url
        }
        heroText
      }
      spacesToBreatheText {
        subtitle
        title
        description
        buttonText
      }
      tabbedSliderBlock {
        title
        tabItem {
          id
          label
          tabContent
          contentJson
          useJsonContent
        }
        infoLineText
        actionButton {
          id
          buttonLink
          buttonText
        }
        images {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
        }
      }
    }
  }
`;

export const VILLA_QUERY = gql`
  query Villa($locale: I18NLocaleCode) {
    villa(locale: $locale) {
      heroSection {
        heroImage {
          alternativeText
          url
        }
        heroText
      }
      privateHeavensText {
        subtitle
        title
        description
        buttonText
      }
      tabbedSliderBlock {
        title
        tabItem {
          id
          label
          tabContent
          contentJson
          useJsonContent
        }
        infoLineText
        actionButton {
          id
          buttonLink
          buttonText
        }
        images {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
        }
      }
    }
  }
`;

export const WELLNESS_QUERY = gql`
  query Wellness($locale: I18NLocaleCode) {
    wellness(locale: $locale) {
      heroSection {
        heroImage {
          alternativeText
          url
        }
        heroText
      }
      ritualRenewalText {
        subtitle
        title
        description
        buttonText
      }
      ritualRenewalImages {
        multipleImages {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
      facilitiesText {
        subtitle
        title
        description
        buttonText
      }
      sectionGridSlider {
        id
        title
        description
        image {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
      tabbedSliderBlock {
        title
        tabItem {
          id
          label
          tabContent
          contentJson
          useJsonContent
        }
        infoLineText
        actionButton {
          id
          buttonLink
          buttonText
        }
        images {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
        }
      }
    }
  }
`;

export const DINING_QUERY = gql`
  query Dining($locale: I18NLocaleCode) {
    dining(locale: $locale) {
      heroSection {
        heroImage {
          alternativeText
          url
          url
        }
        heroText
      }
      beyondTableText {
        subtitle
        title
        description
        buttonText
      }
      tabbedSliderBlock {
        title
        tabItem {
          id
          label
          tabContent
          contentJson
          useJsonContent
        }
        actionButton {
          id
          buttonLink
          buttonText
        }
        images {
          alternativeText
          url
          documentId
          hash
          hash
          mime
          name
          provider
          size
        }
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
        }
      }
    }
  }
`;

export const MEETINGS_QUERY = gql`
  query MeetingsAndEvent($locale: I18NLocaleCode) {
    meetingsAndEvent(locale: $locale) {
      heroSection {
        heroImage {
          alternativeText
          url
        }
        heroText
      }
      timelessMomentstext {
        subtitle
        title
        description
        buttonText
      }
      tabbedSliderBlock {
        title
        tabItem {
          id
          label
          tabContent
          contentJson
          useJsonContent
        }
        infoLineText
        actionButton {
          id
          buttonLink
          buttonText
        }
        images {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
      sectionGridSlider {
        id
        title
        description
        image {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
      contactUsText {
        subtitle
        title
        description
        buttonText
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
        }
      }
    }
  }
`;

export const EXPERIENCE_QUERY = gql`
  query Experience($locale: I18NLocaleCode) {
    experience(locale: $locale) {
      heroSection {
        heroImage {
          alternativeText
          url
        }
        heroText
      }
      exploreEsperanzaText {
        subtitle
        title
        description
        buttonText
      }
      tabbedSliderBlock {
        title
        tabItem {
          id
          label
          tabContent
          contentJson
          useJsonContent
        }
        infoLineText
        actionButton {
          id
          buttonLink
          buttonText
        }
        images {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
      sectionGridSlider {
        id
        title
        description
        image {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
        }
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
        }
      }
    }
  }
`;

export const GALLERY_QUERY = gql`
  query Gallery($locale: I18NLocaleCode) {
    gallery(locale: $locale) {
      heroSection {
        heroImage {
          alternativeText
          url
        }
        heroText
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
        }
      }
    }
  }
`;

export const GIFTCARD_QUERY = gql`
  query GiftCard($locale: I18NLocaleCode) {
    giftCard(locale: $locale) {
      heroSection {
        heroImage {
          alternativeText
          url
        }
        heroText
      }
      quietLuxuryText {
        subtitle
        title
        description
        buttonText
      }
      formBottomNote
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
        }
      }
    }
  }
`;
