import { gql } from '@apollo/client';

export const GLOBAL_QUERY = gql`
  query Global($locale: I18NLocaleCode) {
    global(locale: $locale) {
      menuFooterEmail
      menuFooterLocation
      menuFooterPhone
      menuFooterPhone
      menuFooterSmallText
      bookButton {
        buttonText
        buttonUrl
        newTab
      }
      menuLinks {
        label
      }
      siteFooterSocial {
        icon {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
        linkUrl
      }
      siteFooterContactLinks {
        id
        buttonUrl
        buttonText
        newTab
      }
      siteFooterFormPlaceholder
      siteFooterFormButtonText
      siteFooterBottomText
      siteFooterBottomTextLink {
        id
        buttonUrl
        buttonText
        newTab
      }
      siteFooterFormSuccessMessage
      siteLogoHeader {
        alternativeText
        url
        documentId
        hash
        mime
        name
        provider
        size
        formats
      }
      siteLogoFooter {
        alternativeText
        url
        documentId
        hash
        mime
        name
        provider
        size
        formats
      }
    }
  }
`;

export const HOME_QUERY = gql`
  query Home($locale: I18NLocaleCode) {
    home(locale: $locale) {
      heroSection {
        id
        heroImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
        heroText
      }
      destinationText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      destinationImages {
        multipleImages(pagination: { limit: 40 }) {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
      }
      headerTextWithSliderBlock(pagination: { limit: 30 }) {
        sectionText {
          subtitle
          title
          description
          buttonText
          buttonUrl
          newTab
          hideThisBlock
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
            formats
          }
          hideThisBlock
        }
      }
      wellnessText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      wellnessGridSlider(pagination: { limit: 30 }) {
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
          formats
        }
        hideThisBlock
      }
      HeaderTextWithSliderBlockTwo(pagination: { limit: 30 }) {
        sectionText {
          subtitle
          title
          description
          buttonText
          buttonUrl
          newTab
          hideThisBlock
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
            formats
          }
          hideThisBlock
        }
      }
      experiencesText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      experiencesGridSlider(pagination: { limit: 30 }) {
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
          formats
        }
        hideThisBlock
      }
      bookingWidget {
        adults
        buttonCheckAvailabilityText
        buttonNextText
        buttonPreviousText
        buttonSearchText
        children
        dates
        id
        noAvailability
        roomsGuests
        selectedDates
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
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
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
        heroText
        hideThisBlock
      }
      beforeMapText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      afterMapText
      architectureDesignText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      architectureDesignImages {
        multipleImages(pagination: { limit: 40 }) {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
      }
      Seo {
        metaDescription
        metaTitle
        metaTitle
        shareImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
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
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
        heroText
        hideThisBlock
      }
      spacesToBreatheText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      tabbedSliderBlock(pagination: { limit: 30 }) {
        title
        tabItem {
          id
          label
          tabContent
          useSeparateFields
          useTextFieldsInstead {
            id
            firstTextField
            secondTextField
            specialTextField
          }
        }
        infoLineText
        actionButton {
          id
          buttonUrl
          buttonText
          newTab
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
          formats
        }
        hideThisBlock
      }
      bookButtonShowMobile {
        id
        buttonText
        buttonUrl
        newTab
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
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
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
        heroText
        hideThisBlock
      }
      privateHeavensText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      tabbedSliderBlock(pagination: { limit: 30 }) {
        title
        tabItem {
          id
          label
          tabContent
          useSeparateFields
          useTextFieldsInstead {
            id
            firstTextField
            secondTextField
            specialTextField
          }
        }
        infoLineText
        actionButton {
          id
          buttonUrl
          buttonText
          newTab
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
          formats
        }
        hideThisBlock
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
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
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
        heroText
        hideThisBlock
      }
      ritualRenewalText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      ritualRenewalImages {
        multipleImages(pagination: { limit: 40 }) {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
      }
      facilitiesText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      sectionGridSlider(pagination: { limit: 30 }) {
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
          formats
        }
        hideThisBlock
      }
      tabbedSliderBlock(pagination: { limit: 30 }) {
        title
        tabItem {
          id
          label
          tabContent
          useSeparateFields
          useTextFieldsInstead {
            id
            firstTextField
            secondTextField
            specialTextField
          }
        }
        infoLineText
        actionButton {
          id
          buttonUrl
          buttonText
          newTab
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
          formats
        }
        hideThisBlock
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
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
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
        heroText
        hideThisBlock
      }
      beyondTableText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      tabbedSliderBlock(pagination: { limit: 30 }) {
        title
        tabItem {
          id
          label
          tabContent
          useSeparateFields
          useTextFieldsInstead {
            id
            firstTextField
            secondTextField
            specialTextField
          }
        }
        actionButton {
          id
          buttonUrl
          buttonText
          newTab
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
          formats
        }
        hideThisBlock
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
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
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
        heroText
        hideThisBlock
      }
      timelessMomentstext {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      tabbedSliderBlock(pagination: { limit: 30 }) {
        title
        tabItem {
          id
          label
          tabContent
          useSeparateFields
          useTextFieldsInstead {
            id
            firstTextField
            secondTextField
            specialTextField
          }
        }
        infoLineText
        actionButton {
          id
          buttonUrl
          buttonText
          newTab
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
          formats
        }
        hideThisBlock
      }
      sectionGridSlider(pagination: { limit: 30 }) {
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
          formats
        }
        hideThisBlock
      }
      contactUsText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }

      formName
      formSurname
      formPhone
      formEmail
      formDates
      formNumberGuests
      formMessage
      formButtonText
      formSuccessText
      formCalendarResetButtonText
      formCalendarDoneButtonText
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
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
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
        heroText
        hideThisBlock
      }
      exploreEsperanzaText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      tabbedSliderBlock(pagination: { limit: 30 }) {
        title
        tabItem {
          id
          label
          tabContent
          useSeparateFields
          useTextFieldsInstead {
            id
            firstTextField
            secondTextField
            specialTextField
          }
        }
        infoLineText
        actionButton {
          id
          buttonUrl
          buttonText
          newTab
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
          formats
        }
        hideThisBlock
      }
      sectionGridSlider(pagination: { limit: 30 }) {
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
          formats
        }
        hideThisBlock
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
      }
    }
  }
`;

export const GALLERY_QUERY = gql`
  query Gallery($locale: I18NLocaleCode) {
    gallery(locale: $locale) {
      sectionText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }

      galleryImages {
        multipleImages(pagination: { limit: 40 }) {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
      }

      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
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
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
        heroText
        hideThisBlock
      }
      quietLuxuryText {
        subtitle
        title
        description
        buttonText
        buttonUrl
        newTab
        hideThisBlock
      }
      formBottomNote

      formName
      formSurname
      formPhone
      formEmail
      formAmount
      formDelivery
      formDeliveryOption1
      formDeliveryOption2
      formButtonText

      seo {
        metaTitle
        metaDescription
        shareImage {
          alternativeText
          url
          documentId
          hash
          mime
          name
          provider
          size
          formats
        }
      }
    }
  }
`;
