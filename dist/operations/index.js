import gql from 'graphql-tag';
export const AddBaby = gql `
    mutation addBaby($session: Session!, $input: AddBabyInput!) {
  addBaby(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const AddCustomerDepositAccountPayments = gql `
    mutation addCustomerDepositAccountPayments($session: Session!, $input: CustomerDepositAccountPaymentsInput) {
  addCustomerDepositAccountPayments(session: $session, input: $input) {
    reservation {
      id
      externalCode
      cartID
      cartItemID
      campaign {
        code
        label
        startDate
        endDate
      }
      property {
        id
        label
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          addressCountry {
            code
            label
          }
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        description
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        imagePath
      }
      nbDays
      startDate
      endDate
      discountCode
      observation
      isOption
      isEstimate
      isCanceled
      status {
        code
        label
        default
      }
      subStatus {
        id
        label
        default
      }
      stays {
        id
        guiid
        startDate
        endDate
        nbDays
        distribution {
          roomTypes {
            code
            label
            webLabel
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            roomFeatures {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            description
            paxMax
            quantity
            categoryCode
            categoryLabel
            pax
            propertyId
          }
          roomNumbers
        }
        occupants {
          id
          guiid
          lastName
          firstName
          birthDate
          civility {
            code
            label
          }
          lineItems {
            id
            guiid
            label
            preReserved
            quantity
            discounts {
              label
              specificLabel
              quantity
              price {
                amount
                currencyCode
              }
              voucherCode
              documentLabel
              discountCode
              fidelityPoints
            }
            totalAmount {
              amount
              currencyCode
            }
            product {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              price {
                amount
                currencyCode
              }
              priceWithoutDiscounts {
                amount
                currencyCode
              }
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              productCriterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              subProducts {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            totalAmountWithoutDiscount {
              amount
              currencyCode
            }
            isSkiset
            ferryBooking {
              resFerryId
              bookingRef
              status
              sendStatus
              supplier {
                code
                label
              }
              passengers {
                index
                passengerTypeCode
                lastName
                firstName
                birthDate
                civility {
                  code
                  label
                }
                nationality
                passport
                passportExpiry
                availablePassengerTypes {
                  code
                  label
                }
              }
              outwardTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              returnTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              contact {
                email
                phone
              }
              totalAmount {
                amount
                currencyCode
              }
              passportMandatory
            }
            duration
            criterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          giftVoucherCode
          paymentDues {
            id
            guiid
            code
            amount {
              amount
              currencyCode
            }
            receivedAmount {
              amount
              currencyCode
            }
            remainingAmount {
              amount
              currencyCode
            }
            date
            payments {
              id
              guiid
              amount {
                amount
                currencyCode
              }
              date
              paymentModeLabel
              voucherCode
            }
            label
            type
            creditCard {
              guiid
              maskedPan
              cardholderName
            }
          }
          isAdult
          isChildren1
          isChildren2
          isBaby
          skisetMeasurements {
            measureType
            measureId
          }
        }
        totalAmount {
          amount
          currencyCode
        }
        proposalkey
        arrivalTime
        departureTime
      }
      totalAmount {
        amount
        currencyCode
      }
      primaryOccupant {
        id
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        occupantLanguage {
          code
          label
          languageVars {
            code
            value
          }
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
      }
      isEnableFastCheckin
      isEnableFastCheckout
      isEnableEditReservation
      isEnableEditPrimaryOccupant
      isEnableFerryBooking
      selectedPaymentDue
      selectedPaymentMethod
      selectedPaymentCCType
      isPSPPayment
      contractFolder {
        id
        label
        cmsCriterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
      }
      optionDate
      creationDate
      partner {
        id
        login
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        serviceLanguage {
          code
          label
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          birthDate
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        customerType {
          code
          label
        }
        relationshipObject {
          id
          label
        }
        clientType {
          id
          label
        }
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      criterias {
        code
        label
        value
        type
        fileName
        startDate
        fileUrl
      }
      salesperson {
        name
        userType {
          code
          label
        }
        profile {
          code
          label
        }
        grouping {
          code
          label
        }
      }
      isFCIdone
      isMaster
      paymentStarted
    }
  }
}
    `;
export const AddCustomerDepositAccountPaymentsFromPaymentLink = gql `
    mutation addCustomerDepositAccountPaymentsFromPaymentLink($paymentLinkAuthenticationInput: PaymentLinkAuthenticationInput!, $input: CustomerDepositAccountPaymentsInputFromPaymentLink) {
  addCustomerDepositAccountPaymentsFromPaymentLink(
    paymentLinkAuthenticationInput: $paymentLinkAuthenticationInput
    input: $input
  ) {
    reservation {
      id
      externalCode
      cartID
      cartItemID
      campaign {
        code
        label
        startDate
        endDate
      }
      property {
        id
        label
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          addressCountry {
            code
            label
          }
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        description
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        imagePath
      }
      nbDays
      startDate
      endDate
      discountCode
      observation
      isOption
      isEstimate
      isCanceled
      status {
        code
        label
        default
      }
      subStatus {
        id
        label
        default
      }
      stays {
        id
        guiid
        startDate
        endDate
        nbDays
        distribution {
          roomTypes {
            code
            label
            webLabel
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            roomFeatures {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            description
            paxMax
            quantity
            categoryCode
            categoryLabel
            pax
            propertyId
          }
          roomNumbers
        }
        occupants {
          id
          guiid
          lastName
          firstName
          birthDate
          civility {
            code
            label
          }
          lineItems {
            id
            guiid
            label
            preReserved
            quantity
            discounts {
              label
              specificLabel
              quantity
              price {
                amount
                currencyCode
              }
              voucherCode
              documentLabel
              discountCode
              fidelityPoints
            }
            totalAmount {
              amount
              currencyCode
            }
            product {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              price {
                amount
                currencyCode
              }
              priceWithoutDiscounts {
                amount
                currencyCode
              }
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              productCriterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              subProducts {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            totalAmountWithoutDiscount {
              amount
              currencyCode
            }
            isSkiset
            ferryBooking {
              resFerryId
              bookingRef
              status
              sendStatus
              supplier {
                code
                label
              }
              passengers {
                index
                passengerTypeCode
                lastName
                firstName
                birthDate
                civility {
                  code
                  label
                }
                nationality
                passport
                passportExpiry
                availablePassengerTypes {
                  code
                  label
                }
              }
              outwardTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              returnTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              contact {
                email
                phone
              }
              totalAmount {
                amount
                currencyCode
              }
              passportMandatory
            }
            duration
            criterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          giftVoucherCode
          paymentDues {
            id
            guiid
            code
            amount {
              amount
              currencyCode
            }
            receivedAmount {
              amount
              currencyCode
            }
            remainingAmount {
              amount
              currencyCode
            }
            date
            payments {
              id
              guiid
              amount {
                amount
                currencyCode
              }
              date
              paymentModeLabel
              voucherCode
            }
            label
            type
            creditCard {
              guiid
              maskedPan
              cardholderName
            }
          }
          isAdult
          isChildren1
          isChildren2
          isBaby
          skisetMeasurements {
            measureType
            measureId
          }
        }
        totalAmount {
          amount
          currencyCode
        }
        proposalkey
        arrivalTime
        departureTime
      }
      totalAmount {
        amount
        currencyCode
      }
      primaryOccupant {
        id
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        occupantLanguage {
          code
          label
          languageVars {
            code
            value
          }
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
      }
      isEnableFastCheckin
      isEnableFastCheckout
      isEnableEditReservation
      isEnableEditPrimaryOccupant
      isEnableFerryBooking
      selectedPaymentDue
      selectedPaymentMethod
      selectedPaymentCCType
      isPSPPayment
      contractFolder {
        id
        label
        cmsCriterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
      }
      optionDate
      creationDate
      partner {
        id
        login
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        serviceLanguage {
          code
          label
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          birthDate
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        customerType {
          code
          label
        }
        relationshipObject {
          id
          label
        }
        clientType {
          id
          label
        }
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      criterias {
        code
        label
        value
        type
        fileName
        startDate
        fileUrl
      }
      salesperson {
        name
        userType {
          code
          label
        }
        profile {
          code
          label
        }
        grouping {
          code
          label
        }
      }
      isFCIdone
      isMaster
      paymentStarted
    }
  }
}
    `;
export const AddDiscountCode = gql `
    mutation addDiscountCode($session: Session!, $input: DiscountCodeInput!) {
  addDiscountCode(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const AddFidelityPointToProduct = gql `
    mutation addFidelityPointToProduct($session: Session!, $input: FidelityPointToProductInput!) {
  addFidelityPointToProduct(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const AddGiftCode = gql `
    mutation addGiftCode($session: Session!, $input: GiftCodeInput) {
  addGiftCode(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const AddObservation = gql `
    mutation addObservation($session: Session!, $input: ObservationInput!) {
  addObservation(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const AddOccupant = gql `
    mutation addOccupant($session: Session!, $input: AddOccupantInput!) {
  addOccupant(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const AddPartnerCustomerAccount = gql `
    mutation addPartnerCustomerAccount($session: Session!, $input: AddPartnerCustomerAccountInput) {
  addPartnerCustomerAccount(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const AddPartnerToCart = gql `
    mutation addPartnerToCart($session: Session!, $input: PartnerToCartInput!) {
  addPartnerToCart(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const AddProductToBooking = gql `
    mutation addProductToBooking($session: Session!, $input: ProductToBookingInput!) {
  addProductToBooking(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const AddProductToOccupant = gql `
    mutation addProductToOccupant($session: Session!, $input: [ProductToOccupantInput]!) {
  addProductToOccupant(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const AssignRoom = gql `
    mutation assignRoom($session: Session!, $input: AssignRoomInput!) {
  assignRoom(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const CancelFerryBooking = gql `
    mutation cancelFerryBooking($session: Session!, $input: CancelFerryBookingInput) {
  cancelFerryBooking(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const ChangePassword = gql `
    mutation changePassword($session: Session!, $input: ChangePasswordInput!) {
  changePassword(session: $session, input: $input) {
    message
  }
}
    `;
export const ChooseFerryProposal = gql `
    mutation chooseFerryProposal($session: Session!, $input: ChooseFerryProposalInput!) {
  chooseFerryProposal(session: $session, input: $input) {
    ferryBooking {
      resFerryId
      bookingRef
      status
      sendStatus
      supplier {
        code
        label
      }
      passengers {
        index
        passengerTypeCode
        lastName
        firstName
        birthDate
        civility {
          code
          label
        }
        nationality
        passport
        passportExpiry
        availablePassengerTypes {
          code
          label
        }
      }
      outwardTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        coreTrip {
          amount {
            amount
            currencyCode
          }
        }
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
          amount {
            amount
            currencyCode
          }
        }
        accommodations {
          code
          label
          occupancy
          quantity
          unitPrice {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      returnTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
        }
        accommodations {
          code
          label
          occupancy
          quantity
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      contact {
        email
        phone
      }
      totalAmount {
        amount
        currencyCode
      }
      passportMandatory
    }
  }
}
    `;
export const ChooseProposalFromKeys = gql `
    mutation chooseProposalFromKeys($session: Session!, $input: ChooseProposalFromKeysInput!) {
  chooseProposalFromKeys(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const ChooseRoundTripProposals = gql `
    mutation chooseRoundTripProposals($session: Session!, $input: ChooseRoundTripProposalsInput!) {
  chooseRoundTripProposals(session: $session, input: $input) {
    ferryBooking {
      resFerryId
      bookingRef
      status
      sendStatus
      supplier {
        code
        label
      }
      passengers {
        index
        passengerTypeCode
        lastName
        firstName
        birthDate
        civility {
          code
          label
        }
        nationality
        passport
        passportExpiry
        availablePassengerTypes {
          code
          label
        }
      }
      outwardTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        coreTrip {
          amount {
            amount
            currencyCode
          }
        }
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
          amount {
            amount
            currencyCode
          }
        }
        accommodations {
          code
          label
          occupancy
          quantity
          unitPrice {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      returnTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
        }
        accommodations {
          code
          label
          occupancy
          quantity
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      contact {
        email
        phone
      }
      totalAmount {
        amount
        currencyCode
      }
      passportMandatory
    }
  }
}
    `;
export const ConfirmFastCheckout = gql `
    mutation confirmFastCheckout($session: Session!, $input: ConfirmFastCheckoutInput) {
  confirmFastCheckout(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const CreateCustomerAccount = gql `
    mutation createCustomerAccount($session: Session!, $input: CreateCustomerAccountInput) {
  createCustomerAccount(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const CreateServiceCustomerAccount = gql `
    mutation createServiceCustomerAccount($session: Session!, $input: CreateServiceCustomerAccountInput) {
  createServiceCustomerAccount(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const DisableEnablePartnerCustomerAccount = gql `
    mutation disableEnablePartnerCustomerAccount($session: Session!, $input: DisableEnablePartnerCustomerAccountInput) {
  disableEnablePartnerCustomerAccount(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const DisableServiceCustomerAccount = gql `
    mutation disableServiceCustomerAccount($session: Session!, $input: DisableServiceCustomerAccountInput) {
  disableServiceCustomerAccount(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const DoFastCheckin = gql `
    mutation doFastCheckin($session: Session!, $input: DoFastCheckinInput) {
  doFastCheckin(session: $session, input: $input) {
    reservation {
      id
      externalCode
      cartID
      cartItemID
      campaign {
        code
        label
        startDate
        endDate
      }
      property {
        id
        label
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          addressCountry {
            code
            label
          }
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        description
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        imagePath
      }
      nbDays
      startDate
      endDate
      discountCode
      observation
      isOption
      isEstimate
      isCanceled
      status {
        code
        label
        default
      }
      subStatus {
        id
        label
        default
      }
      stays {
        id
        guiid
        startDate
        endDate
        nbDays
        distribution {
          roomTypes {
            code
            label
            webLabel
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            roomFeatures {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            description
            paxMax
            quantity
            categoryCode
            categoryLabel
            pax
            propertyId
          }
          roomNumbers
        }
        occupants {
          id
          guiid
          lastName
          firstName
          birthDate
          civility {
            code
            label
          }
          lineItems {
            id
            guiid
            label
            preReserved
            quantity
            discounts {
              label
              specificLabel
              quantity
              price {
                amount
                currencyCode
              }
              voucherCode
              documentLabel
              discountCode
              fidelityPoints
            }
            totalAmount {
              amount
              currencyCode
            }
            product {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              price {
                amount
                currencyCode
              }
              priceWithoutDiscounts {
                amount
                currencyCode
              }
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              productCriterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              subProducts {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            totalAmountWithoutDiscount {
              amount
              currencyCode
            }
            isSkiset
            ferryBooking {
              resFerryId
              bookingRef
              status
              sendStatus
              supplier {
                code
                label
              }
              passengers {
                index
                passengerTypeCode
                lastName
                firstName
                birthDate
                civility {
                  code
                  label
                }
                nationality
                passport
                passportExpiry
                availablePassengerTypes {
                  code
                  label
                }
              }
              outwardTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              returnTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              contact {
                email
                phone
              }
              totalAmount {
                amount
                currencyCode
              }
              passportMandatory
            }
            duration
            criterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          giftVoucherCode
          paymentDues {
            id
            guiid
            code
            amount {
              amount
              currencyCode
            }
            receivedAmount {
              amount
              currencyCode
            }
            remainingAmount {
              amount
              currencyCode
            }
            date
            payments {
              id
              guiid
              amount {
                amount
                currencyCode
              }
              date
              paymentModeLabel
              voucherCode
            }
            label
            type
            creditCard {
              guiid
              maskedPan
              cardholderName
            }
          }
          isAdult
          isChildren1
          isChildren2
          isBaby
          skisetMeasurements {
            measureType
            measureId
          }
        }
        totalAmount {
          amount
          currencyCode
        }
        proposalkey
        arrivalTime
        departureTime
      }
      totalAmount {
        amount
        currencyCode
      }
      primaryOccupant {
        id
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        occupantLanguage {
          code
          label
          languageVars {
            code
            value
          }
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
      }
      isEnableFastCheckin
      isEnableFastCheckout
      isEnableEditReservation
      isEnableEditPrimaryOccupant
      isEnableFerryBooking
      selectedPaymentDue
      selectedPaymentMethod
      selectedPaymentCCType
      isPSPPayment
      contractFolder {
        id
        label
        cmsCriterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
      }
      optionDate
      creationDate
      partner {
        id
        login
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        serviceLanguage {
          code
          label
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          birthDate
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        customerType {
          code
          label
        }
        relationshipObject {
          id
          label
        }
        clientType {
          id
          label
        }
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      criterias {
        code
        label
        value
        type
        fileName
        startDate
        fileUrl
      }
      salesperson {
        name
        userType {
          code
          label
        }
        profile {
          code
          label
        }
        grouping {
          code
          label
        }
      }
      isFCIdone
      isMaster
      paymentStarted
    }
  }
}
    `;
export const DoFastCheckout = gql `
    mutation doFastCheckout($session: Session!, $input: DoFastCheckoutInput) {
  doFastCheckout(session: $session, input: $input) {
    reservation {
      id
      externalCode
      cartID
      cartItemID
      campaign {
        code
        label
        startDate
        endDate
      }
      property {
        id
        label
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          addressCountry {
            code
            label
          }
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        description
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        imagePath
      }
      nbDays
      startDate
      endDate
      discountCode
      observation
      isOption
      isEstimate
      isCanceled
      status {
        code
        label
        default
      }
      subStatus {
        id
        label
        default
      }
      stays {
        id
        guiid
        startDate
        endDate
        nbDays
        distribution {
          roomTypes {
            code
            label
            webLabel
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            roomFeatures {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            description
            paxMax
            quantity
            categoryCode
            categoryLabel
            pax
            propertyId
          }
          roomNumbers
        }
        occupants {
          id
          guiid
          lastName
          firstName
          birthDate
          civility {
            code
            label
          }
          lineItems {
            id
            guiid
            label
            preReserved
            quantity
            discounts {
              label
              specificLabel
              quantity
              price {
                amount
                currencyCode
              }
              voucherCode
              documentLabel
              discountCode
              fidelityPoints
            }
            totalAmount {
              amount
              currencyCode
            }
            product {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              price {
                amount
                currencyCode
              }
              priceWithoutDiscounts {
                amount
                currencyCode
              }
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              productCriterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              subProducts {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            totalAmountWithoutDiscount {
              amount
              currencyCode
            }
            isSkiset
            ferryBooking {
              resFerryId
              bookingRef
              status
              sendStatus
              supplier {
                code
                label
              }
              passengers {
                index
                passengerTypeCode
                lastName
                firstName
                birthDate
                civility {
                  code
                  label
                }
                nationality
                passport
                passportExpiry
                availablePassengerTypes {
                  code
                  label
                }
              }
              outwardTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              returnTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              contact {
                email
                phone
              }
              totalAmount {
                amount
                currencyCode
              }
              passportMandatory
            }
            duration
            criterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          giftVoucherCode
          paymentDues {
            id
            guiid
            code
            amount {
              amount
              currencyCode
            }
            receivedAmount {
              amount
              currencyCode
            }
            remainingAmount {
              amount
              currencyCode
            }
            date
            payments {
              id
              guiid
              amount {
                amount
                currencyCode
              }
              date
              paymentModeLabel
              voucherCode
            }
            label
            type
            creditCard {
              guiid
              maskedPan
              cardholderName
            }
          }
          isAdult
          isChildren1
          isChildren2
          isBaby
          skisetMeasurements {
            measureType
            measureId
          }
        }
        totalAmount {
          amount
          currencyCode
        }
        proposalkey
        arrivalTime
        departureTime
      }
      totalAmount {
        amount
        currencyCode
      }
      primaryOccupant {
        id
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        occupantLanguage {
          code
          label
          languageVars {
            code
            value
          }
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
      }
      isEnableFastCheckin
      isEnableFastCheckout
      isEnableEditReservation
      isEnableEditPrimaryOccupant
      isEnableFerryBooking
      selectedPaymentDue
      selectedPaymentMethod
      selectedPaymentCCType
      isPSPPayment
      contractFolder {
        id
        label
        cmsCriterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
      }
      optionDate
      creationDate
      partner {
        id
        login
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        serviceLanguage {
          code
          label
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          birthDate
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        customerType {
          code
          label
        }
        relationshipObject {
          id
          label
        }
        clientType {
          id
          label
        }
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      criterias {
        code
        label
        value
        type
        fileName
        startDate
        fileUrl
      }
      salesperson {
        name
        userType {
          code
          label
        }
        profile {
          code
          label
        }
        grouping {
          code
          label
        }
      }
      isFCIdone
      isMaster
      paymentStarted
    }
  }
}
    `;
export const ExpireSession = gql `
    mutation expireSession($session: Session!) {
  expireSession(session: $session) {
    isExpired
  }
}
    `;
export const FacebookLogin = gql `
    mutation facebookLogin($session: Session!, $input: FacebookLoginInput!) {
  facebookLogin(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const GenerateLyraFormToken = gql `
    mutation generateLyraFormToken($session: Session!, $input: LyraFormTokenInput!) {
  generateLyraFormToken(session: $session, input: $input) {
    gatewayDescription {
      endPoint
      publicKey
      isTest
      url {
        acceptUrl
        declineUrl
        cancelUrl
        exceptionUrl
      }
    }
    orderId
    formToken
  }
}
    `;
export const Login = gql `
    mutation login($session: Session!, $input: LoginInput!) {
  login(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const LoginAnyCustomerType = gql `
    mutation loginAnyCustomerType($session: Session!, $input: LoginAnyCustomerTypeInput) {
  loginAnyCustomerType(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const LoginEtoMode = gql `
    mutation loginETOMode($session: Session!, $input: LoginETOModeInput!) {
  loginETOMode(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const LoginHash256 = gql `
    mutation loginHash256($session: Session!, $input: LoginHash256Input!) {
  loginHash256(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const LoginPartner = gql `
    mutation loginPartner($session: Session!, $input: LoginPartnerInput) {
  loginPartner(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const Logout = gql `
    mutation logout($session: Session!) {
  logout(session: $session) {
    logout
  }
}
    `;
export const PayOnStoredCreditCard = gql `
    mutation payOnStoredCreditCard($session: Session!, $input: payOnStoredCreditCardInput) {
  payOnStoredCreditCard(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const RedirectPaymentGatewayForAccount = gql `
    mutation redirectPaymentGatewayForAccount($session: Session!, $input: PaymentGatewayForAccountInput!) {
  redirectPaymentGatewayForAccount(session: $session, input: $input) {
    gateway
  }
}
    `;
export const RedirectPaymentGatewayForAmount = gql `
    mutation redirectPaymentGatewayForAmount($session: Session!, $input: PaymentGatewayForAmountInput!) {
  redirectPaymentGatewayForAmount(session: $session, input: $input) {
    gateway
  }
}
    `;
export const RedirectPaymentGatewayForCart = gql `
    mutation redirectPaymentGatewayForCart($session: Session!, $input: PaymentGatewayForCartInput!) {
  redirectPaymentGatewayForCart(session: $session, input: $input) {
    gateway
  }
}
    `;
export const RedirectPaymentGatewayForInstalment = gql `
    mutation redirectPaymentGatewayForInstalment($session: Session!, $input: PaymentGatewayForInstalmentInput!) {
  redirectPaymentGatewayForInstalment(session: $session, input: $input) {
    gateway
  }
}
    `;
export const RedirectPaymentGatewayFromPaymentLink = gql `
    mutation redirectPaymentGatewayFromPaymentLink($paymentLinkAuthenticationInput: PaymentLinkAuthenticationInput!, $input: PaymentGatewayFromPaymentLinkInput) {
  redirectPaymentGatewayFromPaymentLink(
    paymentLinkAuthenticationInput: $paymentLinkAuthenticationInput
    input: $input
  ) {
    gateway
  }
}
    `;
export const RemoveBookingFromCart = gql `
    mutation removeBookingFromCart($session: Session!, $input: RemoveBookingFromCartInput) {
  removeBookingFromCart(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const RemoveCartPayments = gql `
    mutation removeCartPayments($session: Session!) {
  removeCartPayments(session: $session) {
    removed
  }
}
    `;
export const RemoveCustomerAccount = gql `
    mutation removeCustomerAccount($session: Session!) {
  removeCustomerAccount(session: $session) {
    removed
  }
}
    `;
export const RemoveDiscountCode = gql `
    mutation removeDiscountCode($session: Session!) {
  removeDiscountCode(session: $session) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const RemoveGiftCode = gql `
    mutation removeGiftCode($session: Session!, $input: RemoveGiftCodeInput) {
  removeGiftCode(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const RemoveOccupant = gql `
    mutation removeOccupant($session: Session!, $input: RemoveOccupantInput!) {
  removeOccupant(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const RemoveStay = gql `
    mutation removeStay($session: Session!, $input: RemoveStayInput!) {
  removeStay(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const ResetCart = gql `
    mutation resetCart($session: Session!) {
  resetCart(session: $session) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const ResetPendingFerryBooking = gql `
    mutation resetPendingFerryBooking($session: Session!) {
  resetPendingFerryBooking(session: $session) {
    ferryBooking {
      resFerryId
      bookingRef
      status
      sendStatus
      supplier {
        code
        label
      }
      passengers {
        index
        passengerTypeCode
        lastName
        firstName
        birthDate
        civility {
          code
          label
        }
        nationality
        passport
        passportExpiry
        availablePassengerTypes {
          code
          label
        }
      }
      outwardTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        coreTrip {
          amount {
            amount
            currencyCode
          }
        }
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
          amount {
            amount
            currencyCode
          }
        }
        accommodations {
          code
          label
          occupancy
          quantity
          unitPrice {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      returnTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
        }
        accommodations {
          code
          label
          occupancy
          quantity
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      contact {
        email
        phone
      }
      totalAmount {
        amount
        currencyCode
      }
      passportMandatory
    }
  }
}
    `;
export const SaveCart = gql `
    mutation saveCart($session: Session!, $input: SaveCartInput) {
  saveCart(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const SaveFerryBooking = gql `
    mutation saveFerryBooking($session: Session!, $input: SaveFerryBookingInput) {
  saveFerryBooking(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const SetSessionLanguage = gql `
    mutation setSessionLanguage($session: Session!, $input: SessionLanguageInput!) {
  setSessionLanguage(session: $session, input: $input) {
    languageCode
  }
}
    `;
export const SwitchToPartnerConvention = gql `
    mutation switchToPartnerConvention($session: Session!, $input: SwitchToPartnerConventionInput!) {
  switchToPartnerConvention(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UnassignRoom = gql `
    mutation unassignRoom($session: Session!, $input: UnassignRoomInput!) {
  unassignRoom(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UnlockBooking = gql `
    mutation unlockBooking($session: Session!, $input: UnlockBookingInput!) {
  unlockBooking(session: $session, input: $input) {
    bookingUnlocked
  }
}
    `;
export const UpdateBookingCriterias = gql `
    mutation updateBookingCriterias($session: Session!, $input: UpdateBookingCriteriasInput!) {
  updateBookingCriterias(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdateCartPaymentMethod = gql `
    mutation updateCartPaymentMethod($session: Session!, $input: CartPaymentMethodInput!) {
  updateCartPaymentMethod(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdateCartPaymentPlans = gql `
    mutation updateCartPaymentPlans($session: Session!, $input: CartPaymentPlansInput) {
  updateCartPaymentPlans(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdateCustomerAccount = gql `
    mutation updateCustomerAccount($session: Session!, $input: CustomerAccountInput) {
  updateCustomerAccount(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const UpdateCustomerBooking = gql `
    mutation updateCustomerBooking($session: Session!, $input: CustomerBookingInput!) {
  updateCustomerBooking(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdateFerryAccommodations = gql `
    mutation updateFerryAccommodations($session: Session!, $input: UpdateFerryAccommodationsInput!) {
  updateFerryAccommodations(session: $session, input: $input) {
    ferryBooking {
      resFerryId
      bookingRef
      status
      sendStatus
      supplier {
        code
        label
      }
      passengers {
        index
        passengerTypeCode
        lastName
        firstName
        birthDate
        civility {
          code
          label
        }
        nationality
        passport
        passportExpiry
        availablePassengerTypes {
          code
          label
        }
      }
      outwardTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        coreTrip {
          amount {
            amount
            currencyCode
          }
        }
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
          amount {
            amount
            currencyCode
          }
        }
        accommodations {
          code
          label
          occupancy
          quantity
          unitPrice {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      returnTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
        }
        accommodations {
          code
          label
          occupancy
          quantity
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      contact {
        email
        phone
      }
      totalAmount {
        amount
        currencyCode
      }
      passportMandatory
    }
  }
}
    `;
export const UpdateFerryBooking = gql `
    mutation updateFerryBooking($session: Session!, $input: UpdateFerryBookingInput!) {
  updateFerryBooking(session: $session, input: $input) {
    ferryBooking {
      resFerryId
      bookingRef
      status
      sendStatus
      supplier {
        code
        label
      }
      passengers {
        index
        passengerTypeCode
        lastName
        firstName
        birthDate
        civility {
          code
          label
        }
        nationality
        passport
        passportExpiry
        availablePassengerTypes {
          code
          label
        }
      }
      outwardTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        coreTrip {
          amount {
            amount
            currencyCode
          }
        }
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
          amount {
            amount
            currencyCode
          }
        }
        accommodations {
          code
          label
          occupancy
          quantity
          unitPrice {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      returnTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
        }
        accommodations {
          code
          label
          occupancy
          quantity
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      contact {
        email
        phone
      }
      totalAmount {
        amount
        currencyCode
      }
      passportMandatory
    }
  }
}
    `;
export const UpdateFerryTravelersInformation = gql `
    mutation updateFerryTravelersInformation($session: Session!, $input: UpdateFerryTravelersInformationInput!) {
  updateFerryTravelersInformation(session: $session, input: $input) {
    ferryBooking {
      resFerryId
      bookingRef
      status
      sendStatus
      supplier {
        code
        label
      }
      passengers {
        index
        passengerTypeCode
        lastName
        firstName
        birthDate
        civility {
          code
          label
        }
        nationality
        passport
        passportExpiry
        availablePassengerTypes {
          code
          label
        }
      }
      outwardTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        coreTrip {
          amount {
            amount
            currencyCode
          }
        }
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
          amount {
            amount
            currencyCode
          }
        }
        accommodations {
          code
          label
          occupancy
          quantity
          unitPrice {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      returnTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
        }
        accommodations {
          code
          label
          occupancy
          quantity
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      contact {
        email
        phone
      }
      totalAmount {
        amount
        currencyCode
      }
      passportMandatory
    }
  }
}
    `;
export const UpdateOccupant = gql `
    mutation updateOccupant($session: Session!, $input: OccupantInput!) {
  updateOccupant(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdateOccupantSkisetMeasurements = gql `
    mutation updateOccupantSkisetMeasurements($session: Session!, $input: UpdateOccupantSkisetMeasurementsInput!) {
  updateOccupantSkisetMeasurements(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdatePartnerAccount = gql `
    mutation updatePartnerAccount($session: Session!, $input: PartnerAccountInput) {
  updatePartnerAccount(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
    primaryContact {
      name
      mail
      phone1
      phone2
    }
  }
}
    `;
export const UpdatePartnerCustomerAccount = gql `
    mutation updatePartnerCustomerAccount($session: Session!, $input: UpdatePartnerCustomerAccountInput) {
  updatePartnerCustomerAccount(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const UpdatePartnerPaymentPlans = gql `
    mutation updatePartnerPaymentPlans($session: Session!, $input: PartnerPaymentPlansInput) {
  updatePartnerPaymentPlans(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdatePayerPaymentPlans = gql `
    mutation updatePayerPaymentPlans($session: Session!, $input: PayerPaymentPlansInput) {
  updatePayerPaymentPlans(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdatePrimaryOccupant = gql `
    mutation updatePrimaryOccupant($session: Session!, $input: PrimaryOccupantInput!) {
  updatePrimaryOccupant(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdateProductCriterias = gql `
    mutation updateProductCriterias($session: Session!, $input: UpdateProductCriteriasInput!) {
  updateProductCriterias(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdateRoomFromMap = gql `
    mutation updateRoomFromMap($session: Session!, $input: RoomFromMapInput!) {
  updateRoomFromMap(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdateServiceCustomerAccount = gql `
    mutation updateServiceCustomerAccount($session: Session!, $input: UpdateServiceCustomerAccountInput) {
  updateServiceCustomerAccount(session: $session, input: $input) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const UpdateStayTime = gql `
    mutation updateStayTime($session: Session!, $input: StayTimeInput!) {
  updateStayTime(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UpdateTotalOccupants = gql `
    mutation updateTotalOccupants($session: Session!, $input: TotalOccupantsInput!) {
  updateTotalOccupants(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const UploadFiles = gql `
    mutation uploadFiles($session: Session!, $input: [UploadFileInput]!) {
  uploadFiles(session: $session, input: $input) {
    uploadData {
      uploadUrl
      fileId
    }
  }
}
    `;
export const ValidateLyraPayment = gql `
    mutation validateLyraPayment($session: Session!, $input: LyraPaymentValidationInput!) {
  validateLyraPayment(session: $session, input: $input) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
    lyraStatus
  }
}
    `;
export const CheckApiAlive = gql `
    query checkApiAlive {
  checkApiAlive {
    alive
  }
}
    `;
export const CheckModuleFacebookActivated = gql `
    query checkModuleFacebookActivated($session: Session!) {
  checkModuleFacebookActivated(session: $session) {
    activated
  }
}
    `;
export const CheckSessionActivated = gql `
    query checkSessionActivated($session: Session!) {
  checkSessionActivated(session: $session) {
    activated
  }
}
    `;
export const CheckValidLogin = gql `
    query checkValidLogin($session: Session!, $input: ValidLoginInput!) {
  checkValidLogin(session: $session, input: $input) {
    valid
  }
}
    `;
export const GetAccommodationProducts = gql `
    query getAccommodationProducts($session: Session!, $input: AccommodationProductsInput!) {
  getAccommodationProducts(session: $session, input: $input) {
    accommodationProducts {
      categoryCode
      categoryLabel
      products {
        id
        code
        label
        webLabel
        originalLabel
        mandatory
        otherCode
        otherLabel
        price {
          amount
          currencyCode
        }
        priceWithoutDiscounts {
          amount
          currencyCode
        }
        quantityMax
        stock
        description
        isPackage
        isBase
        imagePath
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              addressCountry {
                code
                label
              }
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        productCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        subProducts {
          id
          code
          label
          webLabel
          originalLabel
          mandatory
          otherCode
          otherLabel
          price {
            amount
            currencyCode
          }
          priceWithoutDiscounts {
            amount
            currencyCode
          }
          quantityMax
          stock
          description
          isPackage
          isBase
          imagePath
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          productCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          subProducts {
            id
            code
            label
            webLabel
            originalLabel
            mandatory
            otherCode
            otherLabel
            quantityMax
            stock
            description
            isPackage
            isBase
            imagePath
            linkedToMap
            ageFrom
            ageTo
            distributionType
            categoryCode
            categoryLabel
            occupantApplication
            forCart
            isLongStay
          }
          linkedToMap
          ageFrom
          ageTo
          distributionType
          categoryCode
          categoryLabel
          occupantApplication
          forCart
          isLongStay
        }
        linkedToMap
        ageFrom
        ageTo
        distributionType
        categoryCode
        categoryLabel
        occupantApplication
        forCart
        isLongStay
      }
    }
  }
}
    `;
export const GetAllOccupantProductsAllAgeRanges = gql `
    query getAllOccupantProductsAllAgeRanges($session: Session!, $input: AllOccupantProductsAllAgeRangesInput!) {
  getAllOccupantProductsAllAgeRanges(session: $session, input: $input) {
    occupantProducts {
      categoryCode
      categoryLabel
      products {
        id
        code
        label
        webLabel
        originalLabel
        mandatory
        otherCode
        otherLabel
        price {
          amount
          currencyCode
        }
        priceWithoutDiscounts {
          amount
          currencyCode
        }
        quantityMax
        stock
        description
        isPackage
        isBase
        imagePath
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              addressCountry {
                code
                label
              }
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        productCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        subProducts {
          id
          code
          label
          webLabel
          originalLabel
          mandatory
          otherCode
          otherLabel
          price {
            amount
            currencyCode
          }
          priceWithoutDiscounts {
            amount
            currencyCode
          }
          quantityMax
          stock
          description
          isPackage
          isBase
          imagePath
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          productCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          subProducts {
            id
            code
            label
            webLabel
            originalLabel
            mandatory
            otherCode
            otherLabel
            quantityMax
            stock
            description
            isPackage
            isBase
            imagePath
            linkedToMap
            ageFrom
            ageTo
            distributionType
            categoryCode
            categoryLabel
            occupantApplication
            forCart
            isLongStay
          }
          linkedToMap
          ageFrom
          ageTo
          distributionType
          categoryCode
          categoryLabel
          occupantApplication
          forCart
          isLongStay
        }
        linkedToMap
        ageFrom
        ageTo
        distributionType
        categoryCode
        categoryLabel
        occupantApplication
        forCart
        isLongStay
      }
    }
  }
}
    `;
export const GetAlternativeProposalRulesForContractFolder = gql `
    query getAlternativeProposalRulesForContractFolder($session: Session!, $input: AlternativeProposalRulesForContractFolderInput!) {
  getAlternativeProposalRulesForContractFolder(session: $session, input: $input) {
    alternativeProposalRules {
      id
      priority
      label
      dstProperties {
        id
        label
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          addressCountry {
            code
            label
          }
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        description
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        imagePath
      }
      srcProperty {
        id
        label
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        description
        cmsCriterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        imagePath
      }
      roomFeatures {
        code
        label
        value
        type
        fileName
        startDate
        fileUrl
      }
    }
  }
}
    `;
export const GetAvailForRoomTypes = gql `
    query getAvailForRoomTypes($session: Session!, $input: AvailForRoomTypesInput) {
  getAvailForRoomTypes(session: $session, input: $input) {
    availabilityRoomTypes {
      availability
      roomType {
        code
        label
        webLabel
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              addressCountry {
                code
                label
              }
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        description
        paxMax
        quantity
        categoryCode
        categoryLabel
        pax
        propertyId
      }
      proposal {
        proposalKey
        propertyId
        startDate
        endDate
        nbDays
        productOption {
          code
          label
        }
        priceWithoutDiscount {
          amount
          currencyCode
        }
        roomFeaturesValues {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        stock
        imagePath
        price {
          amount
          currencyCode
        }
        baseProductPrice {
          amount
          currencyCode
        }
        discountInfo
        distribution {
          roomTypes {
            code
            label
            webLabel
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            roomFeatures {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            description
            paxMax
            quantity
            categoryCode
            categoryLabel
            pax
            propertyId
          }
          roomNumbers
        }
        isCounterProposal
        isAlternativeProposal
        lineItems {
          id
          guiid
          label
          preReserved
          quantity
          discounts {
            label
            specificLabel
            quantity
            price {
              amount
              currencyCode
            }
            voucherCode
            documentLabel
            discountCode
            fidelityPoints
          }
          totalAmount {
            amount
            currencyCode
          }
          product {
            id
            code
            label
            webLabel
            originalLabel
            mandatory
            otherCode
            otherLabel
            price {
              amount
              currencyCode
            }
            priceWithoutDiscounts {
              amount
              currencyCode
            }
            quantityMax
            stock
            description
            isPackage
            isBase
            imagePath
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            productCriterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            subProducts {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              price {
                amount
                currencyCode
              }
              priceWithoutDiscounts {
                amount
                currencyCode
              }
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              productCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              subProducts {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            linkedToMap
            ageFrom
            ageTo
            distributionType
            categoryCode
            categoryLabel
            occupantApplication
            forCart
            isLongStay
          }
          totalAmountWithoutDiscount {
            amount
            currencyCode
          }
          isSkiset
          ferryBooking {
            resFerryId
            bookingRef
            status
            sendStatus
            supplier {
              code
              label
            }
            passengers {
              index
              passengerTypeCode
              lastName
              firstName
              birthDate
              civility {
                code
                label
              }
              nationality
              passport
              passportExpiry
              availablePassengerTypes {
                code
                label
              }
            }
            outwardTrip {
              departurePort {
                portName
                label
              }
              arrivalPort {
                portName
                label
              }
              departureDate
              departureTime
              arrivalDate
              arrivalTime
              duration
              shipName
              coreTrip {
                amount {
                  amount
                  currencyCode
                }
              }
              vehicle {
                vehicleType
                mark
                model
                height
                length
                additionalHeight
                additionalLength
                registration
              }
              trailer {
                trailerType
                mark
                model
                height
                length
                registration
                amount {
                  amount
                  currencyCode
                }
              }
              accommodations {
                code
                label
                occupancy
                quantity
                unitPrice {
                  amount
                  currencyCode
                }
                totalAmount {
                  amount
                  currencyCode
                }
              }
              accommodationsAmount {
                amount
                currencyCode
              }
            }
            returnTrip {
              departurePort {
                portName
                label
              }
              arrivalPort {
                portName
                label
              }
              departureDate
              departureTime
              arrivalDate
              arrivalTime
              duration
              shipName
              vehicle {
                vehicleType
                mark
                model
                height
                length
                additionalHeight
                additionalLength
                registration
              }
              trailer {
                trailerType
                mark
                model
                height
                length
                registration
              }
              accommodations {
                code
                label
                occupancy
                quantity
              }
              accommodationsAmount {
                amount
                currencyCode
              }
            }
            contact {
              email
              phone
            }
            totalAmount {
              amount
              currencyCode
            }
            passportMandatory
          }
          duration
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        isMonthPrice
      }
      bookable
      minAdults
      property {
        id
        label
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        description
        cmsCriterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        imagePath
      }
    }
  }
}
    `;
export const GetAvailableRoomFeatures = gql `
    query getAvailableRoomFeatures($session: Session!, $input: AvailableRoomFeaturesInput) {
  getAvailableRoomFeatures(session: $session, input: $input) {
    roomFeatures {
      categoryLabel
      code
      label
      options {
        code
        label
      }
    }
  }
}
    `;
export const GetAvailableRooms = gql `
    query getAvailableRooms($session: Session!, $input: AvailableRoomsInput!) {
  getAvailableRooms(session: $session, input: $input) {
    availableRooms {
      roomNumber
      label
      roomTypeCode
      available
      startDate
      endDate
    }
  }
}
    `;
export const GetBookingCustomerDepositAccountInfos = gql `
    query getBookingCustomerDepositAccountInfos($session: Session!) {
  getBookingCustomerDepositAccountInfos(session: $session) {
    customerDepositAccountInfos {
      depositAccount {
        id
        name
        propertyId
        type
        balance {
          amount
          currencyCode
        }
      }
      expectedDepositAmount {
        amount
        currencyCode
      }
      bookingId
      service {
        id
        login
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        serviceLanguage {
          code
          label
          languageVars {
            code
            value
          }
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          addressCountry {
            code
            label
          }
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        criterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              customerType {
                code
                label
              }
              relationshipObject {
                id
                label
              }
              clientType {
                id
                label
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          birthDate
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        customerType {
          code
          label
        }
        relationshipObject {
          id
          label
        }
        clientType {
          id
          label
        }
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
    }
  }
}
    `;
export const GetBookingDocuments = gql `
    query getBookingDocuments($session: Session!, $input: BookingDocumentsInput!) {
  getBookingDocuments(session: $session, input: $input) {
    documents {
      type
      date
      sentByEmail
      sentByPrint
      url
    }
  }
}
    `;
export const GetBookingPaymentPlans = gql `
    query getBookingPaymentPlans($session: Session!, $input: PaymentPlansInput) {
  getBookingPaymentPlans(session: $session, input: $input) {
    paymentPlans {
      code
      label
      isDefault
      cmsCriterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      occupantPaymentDues {
        id
        guiid
        code
        amount {
          amount
          currencyCode
        }
        receivedAmount {
          amount
          currencyCode
        }
        remainingAmount {
          amount
          currencyCode
        }
        date
        payments {
          id
          guiid
          amount {
            amount
            currencyCode
          }
          date
          paymentModeLabel
          voucherCode
        }
        label
        type
        creditCard {
          guiid
          maskedPan
          cardholderName
        }
      }
      partnerPaymentDues {
        id
        guiid
        code
        amount {
          amount
          currencyCode
        }
        receivedAmount {
          amount
          currencyCode
        }
        remainingAmount {
          amount
          currencyCode
        }
        date
        payments {
          id
          guiid
          date
          paymentModeLabel
          voucherCode
        }
        label
        type
        creditCard {
          guiid
          maskedPan
          cardholderName
        }
      }
      paymentMethod {
        automaticPaymentCode
        virtualPaymentCode
        paymentMethodOption {
          code
          label
        }
        automaticPaymentMethodOption {
          code
          label
        }
      }
      cartItemID
    }
  }
}
    `;
export const GetBookingProducts = gql `
    query getBookingProducts($session: Session!, $input: BookingProductsInput) {
  getBookingProducts(session: $session, input: $input) {
    bookingProducts {
      categoryCode
      categoryLabel
      products {
        id
        code
        label
        webLabel
        originalLabel
        mandatory
        otherCode
        otherLabel
        price {
          amount
          currencyCode
        }
        priceWithoutDiscounts {
          amount
          currencyCode
        }
        quantityMax
        stock
        description
        isPackage
        isBase
        imagePath
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              addressCountry {
                code
                label
              }
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        productCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        subProducts {
          id
          code
          label
          webLabel
          originalLabel
          mandatory
          otherCode
          otherLabel
          price {
            amount
            currencyCode
          }
          priceWithoutDiscounts {
            amount
            currencyCode
          }
          quantityMax
          stock
          description
          isPackage
          isBase
          imagePath
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          productCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          subProducts {
            id
            code
            label
            webLabel
            originalLabel
            mandatory
            otherCode
            otherLabel
            quantityMax
            stock
            description
            isPackage
            isBase
            imagePath
            linkedToMap
            ageFrom
            ageTo
            distributionType
            categoryCode
            categoryLabel
            occupantApplication
            forCart
            isLongStay
          }
          linkedToMap
          ageFrom
          ageTo
          distributionType
          categoryCode
          categoryLabel
          occupantApplication
          forCart
          isLongStay
        }
        linkedToMap
        ageFrom
        ageTo
        distributionType
        categoryCode
        categoryLabel
        occupantApplication
        forCart
        isLongStay
      }
    }
  }
}
    `;
export const GetBookingRecordCriterias = gql `
    query getBookingRecordCriterias($session: Session!) {
  getBookingRecordCriterias(session: $session) {
    criterias {
      code
      label
      isChoice
      isFree
      isFile
      choiceList {
        code
        label
      }
      mandatory
    }
  }
}
    `;
export const GetBrochures = gql `
    query getBrochures($session: Session!) {
  getBrochures(session: $session) {
    brochureList {
      code
      label
    }
  }
}
    `;
export const GetCampaigns = gql `
    query getCampaigns($session: Session!) {
  getCampaigns(session: $session) {
    campaignList {
      code
      label
      startDate
      endDate
    }
  }
}
    `;
export const GetCart = gql `
    query getCart($session: Session!) {
  getCart(session: $session) {
    cart {
      id
      reservations {
        id
        externalCode
        cartID
        cartItemID
        campaign {
          code
          label
          startDate
          endDate
        }
        property {
          id
          label
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          description
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          imagePath
        }
        nbDays
        startDate
        endDate
        discountCode
        observation
        isOption
        isEstimate
        isCanceled
        status {
          code
          label
          default
        }
        subStatus {
          id
          label
          default
        }
        stays {
          id
          guiid
          startDate
          endDate
          nbDays
          distribution {
            roomTypes {
              code
              label
              webLabel
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              roomFeatures {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              description
              paxMax
              quantity
              categoryCode
              categoryLabel
              pax
              propertyId
            }
            roomNumbers
          }
          occupants {
            id
            guiid
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            lineItems {
              id
              guiid
              label
              preReserved
              quantity
              discounts {
                label
                specificLabel
                quantity
                price {
                  amount
                  currencyCode
                }
                voucherCode
                documentLabel
                discountCode
                fidelityPoints
              }
              totalAmount {
                amount
                currencyCode
              }
              product {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              totalAmountWithoutDiscount {
                amount
                currencyCode
              }
              isSkiset
              ferryBooking {
                resFerryId
                bookingRef
                status
                sendStatus
                supplier {
                  code
                  label
                }
                passengers {
                  index
                  passengerTypeCode
                  lastName
                  firstName
                  birthDate
                  nationality
                  passport
                  passportExpiry
                }
                outwardTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                returnTrip {
                  departureDate
                  departureTime
                  arrivalDate
                  arrivalTime
                  duration
                  shipName
                }
                contact {
                  email
                  phone
                }
                totalAmount {
                  amount
                  currencyCode
                }
                passportMandatory
              }
              duration
              criterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
            }
            totalAmount {
              amount
              currencyCode
            }
            giftVoucherCode
            paymentDues {
              id
              guiid
              code
              amount {
                amount
                currencyCode
              }
              receivedAmount {
                amount
                currencyCode
              }
              remainingAmount {
                amount
                currencyCode
              }
              date
              payments {
                id
                guiid
                amount {
                  amount
                  currencyCode
                }
                date
                paymentModeLabel
                voucherCode
              }
              label
              type
              creditCard {
                guiid
                maskedPan
                cardholderName
              }
            }
            isAdult
            isChildren1
            isChildren2
            isBaby
            skisetMeasurements {
              measureType
              measureId
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          proposalkey
          arrivalTime
          departureTime
        }
        totalAmount {
          amount
          currencyCode
        }
        primaryOccupant {
          id
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          occupantLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
        }
        isEnableFastCheckin
        isEnableFastCheckout
        isEnableEditReservation
        isEnableEditPrimaryOccupant
        isEnableFerryBooking
        selectedPaymentDue
        selectedPaymentMethod
        selectedPaymentCCType
        isPSPPayment
        contractFolder {
          id
          label
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        optionDate
        creationDate
        partner {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          customerType {
            code
            label
          }
          relationshipObject {
            id
            label
          }
          clientType {
            id
            label
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        salesperson {
          name
          userType {
            code
            label
          }
          profile {
            code
            label
          }
          grouping {
            code
            label
          }
        }
        isFCIdone
        isMaster
        paymentStarted
      }
      fromFastCheckinCheckout
    }
  }
}
    `;
export const GetCivilities = gql `
    query getCivilities($session: Session!) {
  getCivilities(session: $session) {
    civilitiyList {
      code
      label
    }
  }
}
    `;
export const GetCountries = gql `
    query getCountries($session: Session!) {
  getCountries(session: $session) {
    countryList {
      code
      label
    }
  }
}
    `;
export const GetCriteriaInformation = gql `
    query getCriteriaInformation($session: Session!, $input: CriteriaInformationInput) {
  getCriteriaInformation(session: $session, input: $input) {
    criteria {
      code
      label
      isChoice
      isFree
      isFile
      choiceList {
        code
        label
      }
      mandatory
    }
  }
}
    `;
export const GetCurrentCustomerAccount = gql `
    query getCurrentCustomerAccount($session: Session!) {
  getCurrentCustomerAccount(session: $session) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
  }
}
    `;
export const GetCustomerBookings = gql `
    query getCustomerBookings($session: Session!, $input: CustomerBookingsInput) {
  getCustomerBookings(session: $session, input: $input) {
    customerBookings {
      id
      externalCode
      cartID
      cartItemID
      campaign {
        code
        label
        startDate
        endDate
      }
      property {
        id
        label
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          addressCountry {
            code
            label
          }
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        description
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        imagePath
      }
      nbDays
      startDate
      endDate
      discountCode
      observation
      isOption
      isEstimate
      isCanceled
      status {
        code
        label
        default
      }
      subStatus {
        id
        label
        default
      }
      stays {
        id
        guiid
        startDate
        endDate
        nbDays
        distribution {
          roomTypes {
            code
            label
            webLabel
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            roomFeatures {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            description
            paxMax
            quantity
            categoryCode
            categoryLabel
            pax
            propertyId
          }
          roomNumbers
        }
        occupants {
          id
          guiid
          lastName
          firstName
          birthDate
          civility {
            code
            label
          }
          lineItems {
            id
            guiid
            label
            preReserved
            quantity
            discounts {
              label
              specificLabel
              quantity
              price {
                amount
                currencyCode
              }
              voucherCode
              documentLabel
              discountCode
              fidelityPoints
            }
            totalAmount {
              amount
              currencyCode
            }
            product {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              price {
                amount
                currencyCode
              }
              priceWithoutDiscounts {
                amount
                currencyCode
              }
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              productCriterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              subProducts {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            totalAmountWithoutDiscount {
              amount
              currencyCode
            }
            isSkiset
            ferryBooking {
              resFerryId
              bookingRef
              status
              sendStatus
              supplier {
                code
                label
              }
              passengers {
                index
                passengerTypeCode
                lastName
                firstName
                birthDate
                civility {
                  code
                  label
                }
                nationality
                passport
                passportExpiry
                availablePassengerTypes {
                  code
                  label
                }
              }
              outwardTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              returnTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              contact {
                email
                phone
              }
              totalAmount {
                amount
                currencyCode
              }
              passportMandatory
            }
            duration
            criterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          giftVoucherCode
          paymentDues {
            id
            guiid
            code
            amount {
              amount
              currencyCode
            }
            receivedAmount {
              amount
              currencyCode
            }
            remainingAmount {
              amount
              currencyCode
            }
            date
            payments {
              id
              guiid
              amount {
                amount
                currencyCode
              }
              date
              paymentModeLabel
              voucherCode
            }
            label
            type
            creditCard {
              guiid
              maskedPan
              cardholderName
            }
          }
          isAdult
          isChildren1
          isChildren2
          isBaby
          skisetMeasurements {
            measureType
            measureId
          }
        }
        totalAmount {
          amount
          currencyCode
        }
        proposalkey
        arrivalTime
        departureTime
      }
      totalAmount {
        amount
        currencyCode
      }
      primaryOccupant {
        id
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        occupantLanguage {
          code
          label
          languageVars {
            code
            value
          }
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
      }
      isEnableFastCheckin
      isEnableFastCheckout
      isEnableEditReservation
      isEnableEditPrimaryOccupant
      isEnableFerryBooking
      selectedPaymentDue
      selectedPaymentMethod
      selectedPaymentCCType
      isPSPPayment
      contractFolder {
        id
        label
        cmsCriterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
      }
      optionDate
      creationDate
      partner {
        id
        login
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        serviceLanguage {
          code
          label
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          birthDate
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        customerType {
          code
          label
        }
        relationshipObject {
          id
          label
        }
        clientType {
          id
          label
        }
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      criterias {
        code
        label
        value
        type
        fileName
        startDate
        fileUrl
      }
      salesperson {
        name
        userType {
          code
          label
        }
        profile {
          code
          label
        }
        grouping {
          code
          label
        }
      }
      isFCIdone
      isMaster
      paymentStarted
    }
  }
}
    `;
export const GetCustomerCriterias = gql `
    query getCustomerCriterias($session: Session!, $input: CustomerCriteriasInput) {
  getCustomerCriterias(session: $session, input: $input) {
    criterias {
      code
      label
      isChoice
      isFree
      isFile
      choiceList {
        code
        label
      }
      mandatory
    }
  }
}
    `;
export const GetCustomerDepositAccounts = gql `
    query getCustomerDepositAccounts($session: Session!) {
  getCustomerDepositAccounts(session: $session) {
    customerDepositAccounts {
      id
      name
      propertyId
      type
      balance {
        amount
        currencyCode
      }
    }
  }
}
    `;
export const GetCustomerGiftCodes = gql `
    query getCustomerGiftCodes($session: Session!) {
  getCustomerGiftCodes(session: $session) {
    giftCodes {
      valid
      used
      type
      code
      amount {
        amount
        currencyCode
      }
      validityDate
      useDate
      bookingId
      label
    }
  }
}
    `;
export const GetCustomerLoyaltyPoints = gql `
    query getCustomerLoyaltyPoints($session: Session!) {
  getCustomerLoyaltyPoints(session: $session) {
    points
  }
}
    `;
export const GetCustomerPrivilegeCards = gql `
    query getCustomerPrivilegeCards($session: Session!) {
  getCustomerPrivilegeCards(session: $session) {
    privilegeCards {
      active
      bookingId
      label
      startDate
      endDate
      type
      service {
        id
        login
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        serviceLanguage {
          code
          label
          languageVars {
            code
            value
          }
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          addressCountry {
            code
            label
          }
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        criterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              customerType {
                code
                label
              }
              relationshipObject {
                id
                label
              }
              clientType {
                id
                label
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          birthDate
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        customerType {
          code
          label
        }
        relationshipObject {
          id
          label
        }
        clientType {
          id
          label
        }
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      points
    }
  }
}
    `;
export const GetFerryAddonCategories = gql `
    query getFerryAddonCategories($session: Session!) {
  getFerryAddonCategories(session: $session) {
    addonCategories {
      code
      label
      size
      type
    }
  }
}
    `;
export const GetFerryAvailableAccommodations = gql `
    query getFerryAvailableAccommodations($session: Session!) {
  getFerryAvailableAccommodations(session: $session) {
    outwardAccommodations {
      code
      label
      occupancy
      quantity
      unitPrice {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
    }
    returnAccommodations {
      code
      label
      occupancy
      quantity
      unitPrice {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
    }
  }
}
    `;
export const GetFerryCars = gql `
    query getFerryCars($session: Session!) {
  getFerryCars(session: $session) {
    cars {
      make
      model
      vehicleCategoryCode
    }
  }
}
    `;
export const GetFerryCivilities = gql `
    query getFerryCivilities($session: Session!) {
  getFerryCivilities(session: $session) {
    civilities {
      code
      label
    }
  }
}
    `;
export const GetFerryCrossings = gql `
    query getFerryCrossings($session: Session!, $input: FerryCrossingsInput) {
  getFerryCrossings(session: $session, input: $input) {
    crossings {
      departurePort {
        portName
        label
      }
      arrivalPort {
        portName
        label
      }
    }
  }
}
    `;
export const GetFerryNationalities = gql `
    query getFerryNationalities($session: Session!) {
  getFerryNationalities(session: $session) {
    nationalities {
      code
      label
    }
  }
}
    `;
export const GetFerryPorts = gql `
    query getFerryPorts($session: Session!) {
  getFerryPorts(session: $session) {
    ports {
      portName
      label
    }
  }
}
    `;
export const GetFerryProducts = gql `
    query getFerryProducts($session: Session!) {
  getFerryProducts(session: $session) {
    ferryProducts {
      code
      label
    }
  }
}
    `;
export const GetFerryProposals = gql `
    query getFerryProposals($session: Session!, $input: FerryProposalsInput!) {
  getFerryProposals(session: $session, input: $input) {
    proposals {
      id
      supplier {
        code
        label
      }
      outwardTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        coreTrip {
          amount {
            amount
            currencyCode
          }
        }
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
          amount {
            amount
            currencyCode
          }
        }
        accommodations {
          code
          label
          occupancy
          quantity
          unitPrice {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      returnTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
        }
        accommodations {
          code
          label
          occupancy
          quantity
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      totalAmount {
        amount
        currencyCode
      }
      isFlexibleFare
      tariff {
        tariffBand
        tariffType
      }
    }
    warningList
    canChooseRoundTripProposals
  }
}
    `;
export const GetFerryTrailerCategories = gql `
    query getFerryTrailerCategories($session: Session!) {
  getFerryTrailerCategories(session: $session) {
    trailerCategories {
      code
      label
    }
  }
}
    `;
export const GetFerryVehicleCategories = gql `
    query getFerryVehicleCategories($session: Session!) {
  getFerryVehicleCategories(session: $session) {
    vehicleCategories {
      code
      label
      isCar
    }
  }
}
    `;
export const GetFerryVehicleFuels = gql `
    query getFerryVehicleFuels($session: Session!) {
  getFerryVehicleFuels(session: $session) {
    vehicleFuels {
      code
      label
    }
  }
}
    `;
export const GetFidelityLogs = gql `
    query getFidelityLogs($session: Session!) {
  getFidelityLogs(session: $session) {
    fidelityLogs {
      numResa
      fidelityPoints
      date
      label
    }
  }
}
    `;
export const GetFidelityRules = gql `
    query getFidelityRules($session: Session!) {
  getFidelityRules(session: $session) {
    fidelityRules {
      label
      fidelityPoints
    }
  }
}
    `;
export const GetLanguages = gql `
    query getLanguages($session: Session!) {
  getLanguages(session: $session) {
    languages {
      code
      label
      languageVars {
        code
        value
      }
    }
  }
}
    `;
export const GetLyraFormToken = gql `
    query getLyraFormToken($session: Session!, $input: LyraFormTokenInput!) {
  getLyraFormToken(session: $session, input: $input) {
    gatewayDescription {
      endPoint
      publicKey
      isTest
      url {
        acceptUrl
        declineUrl
        cancelUrl
        exceptionUrl
      }
    }
    orderId
    formToken
  }
}
    `;
export const GetMapSelectorData = gql `
    query getMapSelectorData($session: Session!, $input: MapSelectorDataInput) {
  getMapSelectorData(session: $session, input: $input) {
    mapSelectorData {
      fileSystemName
      imageHeight
      imageWidth
      listUhOnMap {
        id
        label
        color
        roomTypeCode
        coordinates {
          lat
          lng
        }
        textColor
        strokeColor
        stayGuiid
        stayRoomIndex
        shape
      }
      listUhSelected {
        id
        label
        color
        roomTypeCode
        coordinates {
          lat
          lng
        }
        textColor
        strokeColor
        stayGuiid
        stayRoomIndex
        shape
      }
      listUhDisabled {
        id
        label
        color
        roomTypeCode
        coordinates {
          lat
          lng
        }
        textColor
        strokeColor
        stayGuiid
        stayRoomIndex
        shape
      }
      stayMapInfos {
        stayGuiid
        hasNoAvailableRoom
        listStayRoomGuiid
      }
      zoom
      opacity
    }
  }
}
    `;
export const GetMyLogin = gql `
    query getMyLogin($session: Session!, $input: MyLoginInput) {
  getMyLogin(session: $session, input: $input) {
    login
  }
}
    `;
export const GetNeobookingTranslations = gql `
    query getNeobookingTranslations($session: Session!, $input: NeobookingTranslationsInput) {
  getNeobookingTranslations(session: $session, input: $input) {
    translations {
      code
      label
      languageVars {
        code
        value
      }
    }
  }
}
    `;
export const GetOccupantProducts = gql `
    query getOccupantProducts($session: Session!, $input: OccupantProductsInput) {
  getOccupantProducts(session: $session, input: $input) {
    occupantProducts {
      categoryCode
      categoryLabel
      products {
        id
        code
        label
        webLabel
        originalLabel
        mandatory
        otherCode
        otherLabel
        price {
          amount
          currencyCode
        }
        priceWithoutDiscounts {
          amount
          currencyCode
        }
        quantityMax
        stock
        description
        isPackage
        isBase
        imagePath
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              addressCountry {
                code
                label
              }
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        productCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        subProducts {
          id
          code
          label
          webLabel
          originalLabel
          mandatory
          otherCode
          otherLabel
          price {
            amount
            currencyCode
          }
          priceWithoutDiscounts {
            amount
            currencyCode
          }
          quantityMax
          stock
          description
          isPackage
          isBase
          imagePath
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          productCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          subProducts {
            id
            code
            label
            webLabel
            originalLabel
            mandatory
            otherCode
            otherLabel
            quantityMax
            stock
            description
            isPackage
            isBase
            imagePath
            linkedToMap
            ageFrom
            ageTo
            distributionType
            categoryCode
            categoryLabel
            occupantApplication
            forCart
            isLongStay
          }
          linkedToMap
          ageFrom
          ageTo
          distributionType
          categoryCode
          categoryLabel
          occupantApplication
          forCart
          isLongStay
        }
        linkedToMap
        ageFrom
        ageTo
        distributionType
        categoryCode
        categoryLabel
        occupantApplication
        forCart
        isLongStay
      }
    }
  }
}
    `;
export const GetOccupantsFromCurrentCustomer = gql `
    query getOccupantsFromCurrentCustomer($session: Session!, $input: OccupantsFromCurrentCustomerInput) {
  getOccupantsFromCurrentCustomer(session: $session, input: $input) {
    occupants {
      id
      guiid
      lastName
      firstName
      birthDate
      civility {
        code
        label
      }
      lineItems {
        id
        guiid
        label
        preReserved
        quantity
        discounts {
          label
          specificLabel
          quantity
          price {
            amount
            currencyCode
          }
          voucherCode
          documentLabel
          discountCode
          fidelityPoints
        }
        totalAmount {
          amount
          currencyCode
        }
        product {
          id
          code
          label
          webLabel
          originalLabel
          mandatory
          otherCode
          otherLabel
          price {
            amount
            currencyCode
          }
          priceWithoutDiscounts {
            amount
            currencyCode
          }
          quantityMax
          stock
          description
          isPackage
          isBase
          imagePath
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              civility {
                code
                label
              }
              birthDate
              serviceLanguage {
                code
                label
                languageVars {
                  code
                  value
                }
              }
              address {
                streetName
                addressComplementary1
                addressComplementary2
                postalLocality
                zipCode
                city
                addressCountry {
                  code
                  label
                }
                phone1
                phone2
                fax
                mail
                latitude
                longitude
              }
              criterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          productCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          subProducts {
            id
            code
            label
            webLabel
            originalLabel
            mandatory
            otherCode
            otherLabel
            price {
              amount
              currencyCode
            }
            priceWithoutDiscounts {
              amount
              currencyCode
            }
            quantityMax
            stock
            description
            isPackage
            isBase
            imagePath
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            productCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            subProducts {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            linkedToMap
            ageFrom
            ageTo
            distributionType
            categoryCode
            categoryLabel
            occupantApplication
            forCart
            isLongStay
          }
          linkedToMap
          ageFrom
          ageTo
          distributionType
          categoryCode
          categoryLabel
          occupantApplication
          forCart
          isLongStay
        }
        totalAmountWithoutDiscount {
          amount
          currencyCode
        }
        isSkiset
        ferryBooking {
          resFerryId
          bookingRef
          status
          sendStatus
          supplier {
            code
            label
          }
          passengers {
            index
            passengerTypeCode
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            nationality
            passport
            passportExpiry
            availablePassengerTypes {
              code
              label
            }
          }
          outwardTrip {
            departurePort {
              portName
              label
            }
            arrivalPort {
              portName
              label
            }
            departureDate
            departureTime
            arrivalDate
            arrivalTime
            duration
            shipName
            coreTrip {
              amount {
                amount
                currencyCode
              }
            }
            vehicle {
              vehicleType
              mark
              model
              height
              length
              additionalHeight
              additionalLength
              registration
            }
            trailer {
              trailerType
              mark
              model
              height
              length
              registration
              amount {
                amount
                currencyCode
              }
            }
            accommodations {
              code
              label
              occupancy
              quantity
              unitPrice {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
            }
            accommodationsAmount {
              amount
              currencyCode
            }
          }
          returnTrip {
            departurePort {
              portName
              label
            }
            arrivalPort {
              portName
              label
            }
            departureDate
            departureTime
            arrivalDate
            arrivalTime
            duration
            shipName
            vehicle {
              vehicleType
              mark
              model
              height
              length
              additionalHeight
              additionalLength
              registration
            }
            trailer {
              trailerType
              mark
              model
              height
              length
              registration
            }
            accommodations {
              code
              label
              occupancy
              quantity
            }
            accommodationsAmount {
              amount
              currencyCode
            }
          }
          contact {
            email
            phone
          }
          totalAmount {
            amount
            currencyCode
          }
          passportMandatory
        }
        duration
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
      }
      totalAmount {
        amount
        currencyCode
      }
      giftVoucherCode
      paymentDues {
        id
        guiid
        code
        amount {
          amount
          currencyCode
        }
        receivedAmount {
          amount
          currencyCode
        }
        remainingAmount {
          amount
          currencyCode
        }
        date
        payments {
          id
          guiid
          amount {
            amount
            currencyCode
          }
          date
          paymentModeLabel
          voucherCode
        }
        label
        type
        creditCard {
          guiid
          maskedPan
          cardholderName
        }
      }
      isAdult
      isChildren1
      isChildren2
      isBaby
      skisetMeasurements {
        measureType
        measureId
      }
    }
  }
}
    `;
export const GetOwnerLeases = gql `
    query getOwnerLeases($session: Session!) {
  getOwnerLeases(session: $session) {
    leases {
      id
      etabId
      etabLabel
      periods {
        id
        lots {
          id
          label
          roomNumbers
        }
      }
    }
  }
}
    `;
export const GetOwnerRoomPlanningData = gql `
    query getOwnerRoomPlanningData($session: Session!, $input: OwnerRoomPlanningDataInput!) {
  getOwnerRoomPlanningData(session: $session, input: $input) {
    calendarPeriods {
      id
      label
      color
      textColor
      listPeriod {
        startDate
        endDate
      }
    }
  }
}
    `;
export const GetPartner = gql `
    query getPartner($session: Session!) {
  getPartner(session: $session) {
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
        languageVars {
          code
          value
        }
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            customerType {
              code
              label
            }
            relationshipObject {
              id
              label
            }
            clientType {
              id
              label
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
    primaryContact {
      name
      mail
      phone1
      phone2
    }
  }
}
    `;
export const GetPartnerCustomers = gql `
    query getPartnerCustomers($session: Session!) {
  getPartnerCustomers(session: $session) {
    customers {
      civility
      name
      firstName
      externalCode
      email
      disabled
      customerCode
    }
  }
}
    `;
export const GetPaymentLinkInfos = gql `
    query getPaymentLinkInfos($paymentLinkAuthenticationInput: PaymentLinkAuthenticationInput!) {
  getPaymentLinkInfos(
    paymentLinkAuthenticationInput: $paymentLinkAuthenticationInput
  ) {
    customerBooking {
      id
      externalCode
      cartID
      cartItemID
      campaign {
        code
        label
        startDate
        endDate
      }
      property {
        id
        label
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          addressCountry {
            code
            label
          }
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        description
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        imagePath
      }
      nbDays
      startDate
      endDate
      discountCode
      observation
      isOption
      isEstimate
      isCanceled
      status {
        code
        label
        default
      }
      subStatus {
        id
        label
        default
      }
      stays {
        id
        guiid
        startDate
        endDate
        nbDays
        distribution {
          roomTypes {
            code
            label
            webLabel
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            roomFeatures {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            description
            paxMax
            quantity
            categoryCode
            categoryLabel
            pax
            propertyId
          }
          roomNumbers
        }
        occupants {
          id
          guiid
          lastName
          firstName
          birthDate
          civility {
            code
            label
          }
          lineItems {
            id
            guiid
            label
            preReserved
            quantity
            discounts {
              label
              specificLabel
              quantity
              price {
                amount
                currencyCode
              }
              voucherCode
              documentLabel
              discountCode
              fidelityPoints
            }
            totalAmount {
              amount
              currencyCode
            }
            product {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              price {
                amount
                currencyCode
              }
              priceWithoutDiscounts {
                amount
                currencyCode
              }
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              productCriterias {
                code
                label
                value
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                type
                fileName
                startDate
                fileUrl
              }
              subProducts {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                price {
                  amount
                  currencyCode
                }
                priceWithoutDiscounts {
                  amount
                  currencyCode
                }
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                cmsCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                productCriterias {
                  code
                  label
                  value
                  type
                  fileName
                  startDate
                  fileUrl
                }
                subProducts {
                  id
                  code
                  label
                  webLabel
                  originalLabel
                  mandatory
                  otherCode
                  otherLabel
                  quantityMax
                  stock
                  description
                  isPackage
                  isBase
                  imagePath
                  linkedToMap
                  ageFrom
                  ageTo
                  distributionType
                  categoryCode
                  categoryLabel
                  occupantApplication
                  forCart
                  isLongStay
                }
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            totalAmountWithoutDiscount {
              amount
              currencyCode
            }
            isSkiset
            ferryBooking {
              resFerryId
              bookingRef
              status
              sendStatus
              supplier {
                code
                label
              }
              passengers {
                index
                passengerTypeCode
                lastName
                firstName
                birthDate
                civility {
                  code
                  label
                }
                nationality
                passport
                passportExpiry
                availablePassengerTypes {
                  code
                  label
                }
              }
              outwardTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              returnTrip {
                departurePort {
                  portName
                  label
                }
                arrivalPort {
                  portName
                  label
                }
                departureDate
                departureTime
                arrivalDate
                arrivalTime
                duration
                shipName
                vehicle {
                  vehicleType
                  mark
                  model
                  height
                  length
                  additionalHeight
                  additionalLength
                  registration
                }
                trailer {
                  trailerType
                  mark
                  model
                  height
                  length
                  registration
                }
                accommodations {
                  code
                  label
                  occupancy
                  quantity
                }
                accommodationsAmount {
                  amount
                  currencyCode
                }
              }
              contact {
                email
                phone
              }
              totalAmount {
                amount
                currencyCode
              }
              passportMandatory
            }
            duration
            criterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
          }
          totalAmount {
            amount
            currencyCode
          }
          giftVoucherCode
          paymentDues {
            id
            guiid
            code
            amount {
              amount
              currencyCode
            }
            receivedAmount {
              amount
              currencyCode
            }
            remainingAmount {
              amount
              currencyCode
            }
            date
            payments {
              id
              guiid
              amount {
                amount
                currencyCode
              }
              date
              paymentModeLabel
              voucherCode
            }
            label
            type
            creditCard {
              guiid
              maskedPan
              cardholderName
            }
          }
          isAdult
          isChildren1
          isChildren2
          isBaby
          skisetMeasurements {
            measureType
            measureId
          }
        }
        totalAmount {
          amount
          currencyCode
        }
        proposalkey
        arrivalTime
        departureTime
      }
      totalAmount {
        amount
        currencyCode
      }
      primaryOccupant {
        id
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        occupantLanguage {
          code
          label
          languageVars {
            code
            value
          }
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
      }
      isEnableFastCheckin
      isEnableFastCheckout
      isEnableEditReservation
      isEnableEditPrimaryOccupant
      isEnableFerryBooking
      selectedPaymentDue
      selectedPaymentMethod
      selectedPaymentCCType
      isPSPPayment
      contractFolder {
        id
        label
        cmsCriterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
      }
      optionDate
      creationDate
      partner {
        id
        login
        customerCode
        firstName
        lastName
        civility {
          code
          label
        }
        birthDate
        serviceLanguage {
          code
          label
        }
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          birthDate
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        customerType {
          code
          label
        }
        relationshipObject {
          id
          label
        }
        clientType {
          id
          label
        }
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      criterias {
        code
        label
        value
        type
        fileName
        startDate
        fileUrl
      }
      salesperson {
        name
        userType {
          code
          label
        }
        profile {
          code
          label
        }
        grouping {
          code
          label
        }
      }
      isFCIdone
      isMaster
      paymentStarted
    }
    occupant {
      id
      guiid
      lastName
      firstName
      birthDate
      civility {
        code
        label
      }
      lineItems {
        id
        guiid
        label
        preReserved
        quantity
        isSkiset
        duration
      }
      totalAmount {
        amount
        currencyCode
      }
      giftVoucherCode
      paymentDues {
        id
        guiid
        code
        date
        label
        type
      }
      isAdult
      isChildren1
      isChildren2
      isBaby
      skisetMeasurements {
        measureType
        measureId
      }
    }
    service {
      id
      login
      customerCode
      firstName
      lastName
      civility {
        code
        label
      }
      birthDate
      serviceLanguage {
        code
        label
      }
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      criterias {
        code
        label
        value
        type
        fileName
        startDate
        fileUrl
      }
      servicesList {
        id
        login
        customerCode
        firstName
        lastName
        birthDate
        fidelityPoints
        needValidation
        disabled
        defaultPartnerServiceDisabled
      }
      customerType {
        code
        label
      }
      relationshipObject {
        id
        label
      }
      clientType {
        id
        label
      }
      fidelityPoints
      needValidation
      disabled
      defaultPartnerServiceDisabled
    }
    customerDepositAccounts {
      id
      name
      propertyId
      type
      balance {
        amount
        currencyCode
      }
    }
    paymentMethod {
      automaticPaymentCode
      virtualPaymentCode
      paymentMethodOption {
        code
        label
      }
      automaticPaymentMethodOption {
        code
        label
      }
    }
  }
}
    `;
export const GetPaymentMethods = gql `
    query getPaymentMethods($session: Session!) {
  getPaymentMethods(session: $session) {
    paymentMethod {
      automaticPaymentCode
      virtualPaymentCode
      paymentMethodOption {
        code
        label
      }
      automaticPaymentMethodOption {
        code
        label
      }
    }
  }
}
    `;
export const GetPaymentPlans = gql `
    query getPaymentPlans($session: Session!, $input: PaymentPlansInput) {
  getPaymentPlans(session: $session, input: $input) {
    paymentPlans {
      code
      label
      isDefault
      cmsCriterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      occupantPaymentDues {
        id
        guiid
        code
        amount {
          amount
          currencyCode
        }
        receivedAmount {
          amount
          currencyCode
        }
        remainingAmount {
          amount
          currencyCode
        }
        date
        payments {
          id
          guiid
          amount {
            amount
            currencyCode
          }
          date
          paymentModeLabel
          voucherCode
        }
        label
        type
        creditCard {
          guiid
          maskedPan
          cardholderName
        }
      }
      partnerPaymentDues {
        id
        guiid
        code
        amount {
          amount
          currencyCode
        }
        receivedAmount {
          amount
          currencyCode
        }
        remainingAmount {
          amount
          currencyCode
        }
        date
        payments {
          id
          guiid
          date
          paymentModeLabel
          voucherCode
        }
        label
        type
        creditCard {
          guiid
          maskedPan
          cardholderName
        }
      }
      paymentMethod {
        automaticPaymentCode
        virtualPaymentCode
        paymentMethodOption {
          code
          label
        }
        automaticPaymentMethodOption {
          code
          label
        }
      }
      cartItemID
    }
  }
}
    `;
export const GetPendingFerryBooking = gql `
    query getPendingFerryBooking($session: Session!) {
  getPendingFerryBooking(session: $session) {
    ferryBooking {
      resFerryId
      bookingRef
      status
      sendStatus
      supplier {
        code
        label
      }
      passengers {
        index
        passengerTypeCode
        lastName
        firstName
        birthDate
        civility {
          code
          label
        }
        nationality
        passport
        passportExpiry
        availablePassengerTypes {
          code
          label
        }
      }
      outwardTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        coreTrip {
          amount {
            amount
            currencyCode
          }
        }
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
          amount {
            amount
            currencyCode
          }
        }
        accommodations {
          code
          label
          occupancy
          quantity
          unitPrice {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      returnTrip {
        departurePort {
          portName
          label
        }
        arrivalPort {
          portName
          label
        }
        departureDate
        departureTime
        arrivalDate
        arrivalTime
        duration
        shipName
        vehicle {
          vehicleType
          mark
          model
          height
          length
          additionalHeight
          additionalLength
          registration
        }
        trailer {
          trailerType
          mark
          model
          height
          length
          registration
        }
        accommodations {
          code
          label
          occupancy
          quantity
        }
        accommodationsAmount {
          amount
          currencyCode
        }
      }
      contact {
        email
        phone
      }
      totalAmount {
        amount
        currencyCode
      }
      passportMandatory
    }
  }
}
    `;
export const GetPostCodeApiDetail = gql `
    query getPostCodeApiDetail($session: Session!, $input: PostCodeApiDetailInput!) {
  getPostCodeApiDetail(session: $session, input: $input) {
    code
  }
}
    `;
export const GetPostCodeApiSimple = gql `
    query getPostCodeApiSimple($session: Session!, $input: PostCodeApiSimpleInput!) {
  getPostCodeApiSimple(session: $session, input: $input) {
    code
  }
}
    `;
export const GetPrivilegeCardTypes = gql `
    query getPrivilegeCardTypes($session: Session!) {
  getPrivilegeCardTypes(session: $session) {
    privilegeCardTypeList {
      code
      label
    }
  }
}
    `;
export const GetProductCategories = gql `
    query getProductCategories($session: Session!) {
  getProductCategories(session: $session) {
    productCategories {
      code
      label
      order
    }
  }
}
    `;
export const GetProperties = gql `
    query getProperties($authentication: AuthenticationInput!, $input: PropertiesInput) {
  getProperties(authentication: $authentication, input: $input) {
    properties {
      id
      label
      address {
        streetName
        addressComplementary1
        addressComplementary2
        postalLocality
        zipCode
        city
        addressCountry {
          code
          label
        }
        phone1
        phone2
        fax
        mail
        latitude
        longitude
      }
      description
      cmsCriterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      roomFeatures {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          birthDate
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      imagePath
    }
  }
}
    `;
export const GetProposalByRoomTypes = gql `
    query getProposalByRoomTypes($session: Session!, $input: ProposalByRoomTypesInput!) {
  getProposalByRoomTypes(session: $session, input: $input) {
    proposals {
      proposalKey
      propertyId
      startDate
      endDate
      nbDays
      productOption {
        code
        label
      }
      priceWithoutDiscount {
        amount
        currencyCode
      }
      roomFeaturesValues {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      stock
      imagePath
      price {
        amount
        currencyCode
      }
      baseProductPrice {
        amount
        currencyCode
      }
      discountInfo
      distribution {
        roomTypes {
          code
          label
          webLabel
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          description
          paxMax
          quantity
          categoryCode
          categoryLabel
          pax
          propertyId
        }
        roomNumbers
      }
      isCounterProposal
      isAlternativeProposal
      lineItems {
        id
        guiid
        label
        preReserved
        quantity
        discounts {
          label
          specificLabel
          quantity
          price {
            amount
            currencyCode
          }
          voucherCode
          documentLabel
          discountCode
          fidelityPoints
        }
        totalAmount {
          amount
          currencyCode
        }
        product {
          id
          code
          label
          webLabel
          originalLabel
          mandatory
          otherCode
          otherLabel
          price {
            amount
            currencyCode
          }
          priceWithoutDiscounts {
            amount
            currencyCode
          }
          quantityMax
          stock
          description
          isPackage
          isBase
          imagePath
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          productCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          subProducts {
            id
            code
            label
            webLabel
            originalLabel
            mandatory
            otherCode
            otherLabel
            price {
              amount
              currencyCode
            }
            priceWithoutDiscounts {
              amount
              currencyCode
            }
            quantityMax
            stock
            description
            isPackage
            isBase
            imagePath
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            productCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            subProducts {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            linkedToMap
            ageFrom
            ageTo
            distributionType
            categoryCode
            categoryLabel
            occupantApplication
            forCart
            isLongStay
          }
          linkedToMap
          ageFrom
          ageTo
          distributionType
          categoryCode
          categoryLabel
          occupantApplication
          forCart
          isLongStay
        }
        totalAmountWithoutDiscount {
          amount
          currencyCode
        }
        isSkiset
        ferryBooking {
          resFerryId
          bookingRef
          status
          sendStatus
          supplier {
            code
            label
          }
          passengers {
            index
            passengerTypeCode
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            nationality
            passport
            passportExpiry
            availablePassengerTypes {
              code
              label
            }
          }
          outwardTrip {
            departurePort {
              portName
              label
            }
            arrivalPort {
              portName
              label
            }
            departureDate
            departureTime
            arrivalDate
            arrivalTime
            duration
            shipName
            coreTrip {
              amount {
                amount
                currencyCode
              }
            }
            vehicle {
              vehicleType
              mark
              model
              height
              length
              additionalHeight
              additionalLength
              registration
            }
            trailer {
              trailerType
              mark
              model
              height
              length
              registration
              amount {
                amount
                currencyCode
              }
            }
            accommodations {
              code
              label
              occupancy
              quantity
              unitPrice {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
            }
            accommodationsAmount {
              amount
              currencyCode
            }
          }
          returnTrip {
            departurePort {
              portName
              label
            }
            arrivalPort {
              portName
              label
            }
            departureDate
            departureTime
            arrivalDate
            arrivalTime
            duration
            shipName
            vehicle {
              vehicleType
              mark
              model
              height
              length
              additionalHeight
              additionalLength
              registration
            }
            trailer {
              trailerType
              mark
              model
              height
              length
              registration
            }
            accommodations {
              code
              label
              occupancy
              quantity
            }
            accommodationsAmount {
              amount
              currencyCode
            }
          }
          contact {
            email
            phone
          }
          totalAmount {
            amount
            currencyCode
          }
          passportMandatory
        }
        duration
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
      }
      isMonthPrice
    }
  }
}
    `;
export const GetProposals = gql `
    query getProposals($session: Session!, $input: ProposalsInput) {
  getProposals(session: $session, input: $input) {
    proposals {
      proposalKey
      propertyId
      startDate
      endDate
      nbDays
      productOption {
        code
        label
      }
      priceWithoutDiscount {
        amount
        currencyCode
      }
      roomFeaturesValues {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      stock
      imagePath
      price {
        amount
        currencyCode
      }
      baseProductPrice {
        amount
        currencyCode
      }
      discountInfo
      distribution {
        roomTypes {
          code
          label
          webLabel
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          description
          paxMax
          quantity
          categoryCode
          categoryLabel
          pax
          propertyId
        }
        roomNumbers
      }
      isCounterProposal
      isAlternativeProposal
      lineItems {
        id
        guiid
        label
        preReserved
        quantity
        discounts {
          label
          specificLabel
          quantity
          price {
            amount
            currencyCode
          }
          voucherCode
          documentLabel
          discountCode
          fidelityPoints
        }
        totalAmount {
          amount
          currencyCode
        }
        product {
          id
          code
          label
          webLabel
          originalLabel
          mandatory
          otherCode
          otherLabel
          price {
            amount
            currencyCode
          }
          priceWithoutDiscounts {
            amount
            currencyCode
          }
          quantityMax
          stock
          description
          isPackage
          isBase
          imagePath
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          productCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          subProducts {
            id
            code
            label
            webLabel
            originalLabel
            mandatory
            otherCode
            otherLabel
            price {
              amount
              currencyCode
            }
            priceWithoutDiscounts {
              amount
              currencyCode
            }
            quantityMax
            stock
            description
            isPackage
            isBase
            imagePath
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            productCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            subProducts {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            linkedToMap
            ageFrom
            ageTo
            distributionType
            categoryCode
            categoryLabel
            occupantApplication
            forCart
            isLongStay
          }
          linkedToMap
          ageFrom
          ageTo
          distributionType
          categoryCode
          categoryLabel
          occupantApplication
          forCart
          isLongStay
        }
        totalAmountWithoutDiscount {
          amount
          currencyCode
        }
        isSkiset
        ferryBooking {
          resFerryId
          bookingRef
          status
          sendStatus
          supplier {
            code
            label
          }
          passengers {
            index
            passengerTypeCode
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            nationality
            passport
            passportExpiry
            availablePassengerTypes {
              code
              label
            }
          }
          outwardTrip {
            departurePort {
              portName
              label
            }
            arrivalPort {
              portName
              label
            }
            departureDate
            departureTime
            arrivalDate
            arrivalTime
            duration
            shipName
            coreTrip {
              amount {
                amount
                currencyCode
              }
            }
            vehicle {
              vehicleType
              mark
              model
              height
              length
              additionalHeight
              additionalLength
              registration
            }
            trailer {
              trailerType
              mark
              model
              height
              length
              registration
              amount {
                amount
                currencyCode
              }
            }
            accommodations {
              code
              label
              occupancy
              quantity
              unitPrice {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
            }
            accommodationsAmount {
              amount
              currencyCode
            }
          }
          returnTrip {
            departurePort {
              portName
              label
            }
            arrivalPort {
              portName
              label
            }
            departureDate
            departureTime
            arrivalDate
            arrivalTime
            duration
            shipName
            vehicle {
              vehicleType
              mark
              model
              height
              length
              additionalHeight
              additionalLength
              registration
            }
            trailer {
              trailerType
              mark
              model
              height
              length
              registration
            }
            accommodations {
              code
              label
              occupancy
              quantity
            }
            accommodationsAmount {
              amount
              currencyCode
            }
          }
          contact {
            email
            phone
          }
          totalAmount {
            amount
            currencyCode
          }
          passportMandatory
        }
        duration
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
      }
      isMonthPrice
    }
  }
}
    `;
export const GetProposalsByKeys = gql `
    query getProposalsByKeys($session: Session!, $input: ProposalsByKeysInput!) {
  getProposalsByKeys(session: $session, input: $input) {
    proposals {
      proposalKey
      propertyId
      startDate
      endDate
      nbDays
      productOption {
        code
        label
      }
      priceWithoutDiscount {
        amount
        currencyCode
      }
      roomFeaturesValues {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      stock
      imagePath
      price {
        amount
        currencyCode
      }
      baseProductPrice {
        amount
        currencyCode
      }
      discountInfo
      distribution {
        roomTypes {
          code
          label
          webLabel
          cmsCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          roomFeatures {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          description
          paxMax
          quantity
          categoryCode
          categoryLabel
          pax
          propertyId
        }
        roomNumbers
      }
      isCounterProposal
      isAlternativeProposal
      lineItems {
        id
        guiid
        label
        preReserved
        quantity
        discounts {
          label
          specificLabel
          quantity
          price {
            amount
            currencyCode
          }
          voucherCode
          documentLabel
          discountCode
          fidelityPoints
        }
        totalAmount {
          amount
          currencyCode
        }
        product {
          id
          code
          label
          webLabel
          originalLabel
          mandatory
          otherCode
          otherLabel
          price {
            amount
            currencyCode
          }
          priceWithoutDiscounts {
            amount
            currencyCode
          }
          quantityMax
          stock
          description
          isPackage
          isBase
          imagePath
          cmsCriterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
          productCriterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          subProducts {
            id
            code
            label
            webLabel
            originalLabel
            mandatory
            otherCode
            otherLabel
            price {
              amount
              currencyCode
            }
            priceWithoutDiscounts {
              amount
              currencyCode
            }
            quantityMax
            stock
            description
            isPackage
            isBase
            imagePath
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            productCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            subProducts {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            linkedToMap
            ageFrom
            ageTo
            distributionType
            categoryCode
            categoryLabel
            occupantApplication
            forCart
            isLongStay
          }
          linkedToMap
          ageFrom
          ageTo
          distributionType
          categoryCode
          categoryLabel
          occupantApplication
          forCart
          isLongStay
        }
        totalAmountWithoutDiscount {
          amount
          currencyCode
        }
        isSkiset
        ferryBooking {
          resFerryId
          bookingRef
          status
          sendStatus
          supplier {
            code
            label
          }
          passengers {
            index
            passengerTypeCode
            lastName
            firstName
            birthDate
            civility {
              code
              label
            }
            nationality
            passport
            passportExpiry
            availablePassengerTypes {
              code
              label
            }
          }
          outwardTrip {
            departurePort {
              portName
              label
            }
            arrivalPort {
              portName
              label
            }
            departureDate
            departureTime
            arrivalDate
            arrivalTime
            duration
            shipName
            coreTrip {
              amount {
                amount
                currencyCode
              }
            }
            vehicle {
              vehicleType
              mark
              model
              height
              length
              additionalHeight
              additionalLength
              registration
            }
            trailer {
              trailerType
              mark
              model
              height
              length
              registration
              amount {
                amount
                currencyCode
              }
            }
            accommodations {
              code
              label
              occupancy
              quantity
              unitPrice {
                amount
                currencyCode
              }
              totalAmount {
                amount
                currencyCode
              }
            }
            accommodationsAmount {
              amount
              currencyCode
            }
          }
          returnTrip {
            departurePort {
              portName
              label
            }
            arrivalPort {
              portName
              label
            }
            departureDate
            departureTime
            arrivalDate
            arrivalTime
            duration
            shipName
            vehicle {
              vehicleType
              mark
              model
              height
              length
              additionalHeight
              additionalLength
              registration
            }
            trailer {
              trailerType
              mark
              model
              height
              length
              registration
            }
            accommodations {
              code
              label
              occupancy
              quantity
            }
            accommodationsAmount {
              amount
              currencyCode
            }
          }
          contact {
            email
            phone
          }
          totalAmount {
            amount
            currencyCode
          }
          passportMandatory
        }
        duration
        criterias {
          code
          label
          value
          type
          fileName
          startDate
          fileUrl
        }
      }
      isMonthPrice
    }
  }
}
    `;
export const GetProposalsByProperties = gql `
    query getProposalsByProperties($session: Session!, $input: ProposalsByPropertiesInput) {
  getProposalsByProperties(session: $session, input: $input) {
    proposalByProperty {
      property {
        id
        label
        address {
          streetName
          addressComplementary1
          addressComplementary2
          postalLocality
          zipCode
          city
          addressCountry {
            code
            label
          }
          phone1
          phone2
          fax
          mail
          latitude
          longitude
        }
        description
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        imagePath
      }
      proposals {
        proposalKey
        propertyId
        startDate
        endDate
        nbDays
        productOption {
          code
          label
        }
        priceWithoutDiscount {
          amount
          currencyCode
        }
        roomFeaturesValues {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        stock
        imagePath
        price {
          amount
          currencyCode
        }
        baseProductPrice {
          amount
          currencyCode
        }
        discountInfo
        distribution {
          roomTypes {
            code
            label
            webLabel
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            roomFeatures {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            description
            paxMax
            quantity
            categoryCode
            categoryLabel
            pax
            propertyId
          }
          roomNumbers
        }
        isCounterProposal
        isAlternativeProposal
        lineItems {
          id
          guiid
          label
          preReserved
          quantity
          discounts {
            label
            specificLabel
            quantity
            price {
              amount
              currencyCode
            }
            voucherCode
            documentLabel
            discountCode
            fidelityPoints
          }
          totalAmount {
            amount
            currencyCode
          }
          product {
            id
            code
            label
            webLabel
            originalLabel
            mandatory
            otherCode
            otherLabel
            price {
              amount
              currencyCode
            }
            priceWithoutDiscounts {
              amount
              currencyCode
            }
            quantityMax
            stock
            description
            isPackage
            isBase
            imagePath
            cmsCriterias {
              code
              label
              value
              type
              fileName
              startDate
              fileUrl
            }
            productCriterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            subProducts {
              id
              code
              label
              webLabel
              originalLabel
              mandatory
              otherCode
              otherLabel
              price {
                amount
                currencyCode
              }
              priceWithoutDiscounts {
                amount
                currencyCode
              }
              quantityMax
              stock
              description
              isPackage
              isBase
              imagePath
              cmsCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              productCriterias {
                code
                label
                value
                type
                fileName
                startDate
                fileUrl
              }
              subProducts {
                id
                code
                label
                webLabel
                originalLabel
                mandatory
                otherCode
                otherLabel
                quantityMax
                stock
                description
                isPackage
                isBase
                imagePath
                linkedToMap
                ageFrom
                ageTo
                distributionType
                categoryCode
                categoryLabel
                occupantApplication
                forCart
                isLongStay
              }
              linkedToMap
              ageFrom
              ageTo
              distributionType
              categoryCode
              categoryLabel
              occupantApplication
              forCart
              isLongStay
            }
            linkedToMap
            ageFrom
            ageTo
            distributionType
            categoryCode
            categoryLabel
            occupantApplication
            forCart
            isLongStay
          }
          totalAmountWithoutDiscount {
            amount
            currencyCode
          }
          isSkiset
          ferryBooking {
            resFerryId
            bookingRef
            status
            sendStatus
            supplier {
              code
              label
            }
            passengers {
              index
              passengerTypeCode
              lastName
              firstName
              birthDate
              civility {
                code
                label
              }
              nationality
              passport
              passportExpiry
              availablePassengerTypes {
                code
                label
              }
            }
            outwardTrip {
              departurePort {
                portName
                label
              }
              arrivalPort {
                portName
                label
              }
              departureDate
              departureTime
              arrivalDate
              arrivalTime
              duration
              shipName
              coreTrip {
                amount {
                  amount
                  currencyCode
                }
              }
              vehicle {
                vehicleType
                mark
                model
                height
                length
                additionalHeight
                additionalLength
                registration
              }
              trailer {
                trailerType
                mark
                model
                height
                length
                registration
                amount {
                  amount
                  currencyCode
                }
              }
              accommodations {
                code
                label
                occupancy
                quantity
                unitPrice {
                  amount
                  currencyCode
                }
                totalAmount {
                  amount
                  currencyCode
                }
              }
              accommodationsAmount {
                amount
                currencyCode
              }
            }
            returnTrip {
              departurePort {
                portName
                label
              }
              arrivalPort {
                portName
                label
              }
              departureDate
              departureTime
              arrivalDate
              arrivalTime
              duration
              shipName
              vehicle {
                vehicleType
                mark
                model
                height
                length
                additionalHeight
                additionalLength
                registration
              }
              trailer {
                trailerType
                mark
                model
                height
                length
                registration
              }
              accommodations {
                code
                label
                occupancy
                quantity
              }
              accommodationsAmount {
                amount
                currencyCode
              }
            }
            contact {
              email
              phone
            }
            totalAmount {
              amount
              currencyCode
            }
            passportMandatory
          }
          duration
          criterias {
            code
            label
            value
            type
            fileName
            startDate
            fileUrl
          }
        }
        isMonthPrice
      }
    }
  }
}
    `;
export const GetRelationships = gql `
    query getRelationships($session: Session!) {
  getRelationships(session: $session) {
    relationships {
      id
      label
    }
  }
}
    `;
export const GetResalysErrorList = gql `
    query getResalysErrorList($session: Session!) {
  getResalysErrorList(session: $session) {
    errorList {
      code
      message
    }
  }
}
    `;
export const GetResalysVersion = gql `
    query getResalysVersion($session: Session!) {
  getResalysVersion(session: $session) {
    version
  }
}
    `;
export const GetRoomTypeCategories = gql `
    query getRoomTypeCategories($session: Session!, $input: RoomTypeCategoriesInput!) {
  getRoomTypeCategories(session: $session, input: $input) {
    roomTypeCategories {
      code
      label
      roomTypes {
        code
        label
        webLabel
        cmsCriterias {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            civility {
              code
              label
            }
            birthDate
            serviceLanguage {
              code
              label
              languageVars {
                code
                value
              }
            }
            address {
              streetName
              addressComplementary1
              addressComplementary2
              postalLocality
              zipCode
              city
              addressCountry {
                code
                label
              }
              phone1
              phone2
              fax
              mail
              latitude
              longitude
            }
            criterias {
              code
              label
              value
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                servicesList {
                  id
                  login
                  customerCode
                  firstName
                  lastName
                  birthDate
                  fidelityPoints
                  needValidation
                  disabled
                  defaultPartnerServiceDisabled
                }
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              type
              fileName
              startDate
              fileUrl
            }
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        roomFeatures {
          code
          label
          value
          servicesList {
            id
            login
            customerCode
            firstName
            lastName
            birthDate
            fidelityPoints
            needValidation
            disabled
            defaultPartnerServiceDisabled
          }
          type
          fileName
          startDate
          fileUrl
        }
        description
        paxMax
        quantity
        categoryCode
        categoryLabel
        pax
        propertyId
      }
    }
  }
}
    `;
export const GetRoomTypes = gql `
    query getRoomTypes($session: Session!, $input: RoomTypesInput) {
  getRoomTypes(session: $session, input: $input) {
    roomTypeList {
      code
      label
      webLabel
      cmsCriterias {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          civility {
            code
            label
          }
          birthDate
          serviceLanguage {
            code
            label
            languageVars {
              code
              value
            }
          }
          address {
            streetName
            addressComplementary1
            addressComplementary2
            postalLocality
            zipCode
            city
            addressCountry {
              code
              label
            }
            phone1
            phone2
            fax
            mail
            latitude
            longitude
          }
          criterias {
            code
            label
            value
            servicesList {
              id
              login
              customerCode
              firstName
              lastName
              birthDate
              servicesList {
                id
                login
                customerCode
                firstName
                lastName
                birthDate
                customerType {
                  code
                  label
                }
                relationshipObject {
                  id
                  label
                }
                clientType {
                  id
                  label
                }
                fidelityPoints
                needValidation
                disabled
                defaultPartnerServiceDisabled
              }
              fidelityPoints
              needValidation
              disabled
              defaultPartnerServiceDisabled
            }
            type
            fileName
            startDate
            fileUrl
          }
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      roomFeatures {
        code
        label
        value
        servicesList {
          id
          login
          customerCode
          firstName
          lastName
          birthDate
          fidelityPoints
          needValidation
          disabled
          defaultPartnerServiceDisabled
        }
        type
        fileName
        startDate
        fileUrl
      }
      description
      paxMax
      quantity
      categoryCode
      categoryLabel
      pax
      propertyId
    }
  }
}
    `;
export const GetSalesChannelMode = gql `
    query getSalesChannelMode($session: Session!) {
  getSalesChannelMode(session: $session) {
    mode
  }
}
    `;
export const GetSession = gql `
    query getSession($input: SessionInput) {
  getSession(input: $input) {
    name
  }
}
    `;
export const GetSkisetMeasurements = gql `
    query getSkisetMeasurements($session: Session!) {
  getSkisetMeasurements(session: $session) {
    measurements {
      calfwidths {
        id
        value
      }
      footwidths {
        id
        value
      }
      headsizes {
        id
        value
      }
      heights {
        id
        value
      }
      shoesizes {
        id
        value
      }
      unit
      weights {
        id
        value
      }
    }
  }
}
    `;
export const GetTranslations = gql `
    query getTranslations($session: Session!, $input: TranslationsInput) {
  getTranslations(session: $session, input: $input) {
    translations {
      code
      value
    }
  }
}
    `;
export const GetUserLanguage = gql `
    query getUserLanguage($session: Session!) {
  getUserLanguage(session: $session) {
    languageCode
  }
}
    `;
export const HasProductsForOccupant = gql `
    query hasProductsForOccupant($session: Session!, $input: HasProductsForOccupantInput) {
  hasProductsForOccupant(session: $session, input: $input) {
    hasProductsForOccupant
  }
}
    `;
export const RenewPassword = gql `
    query renewPassword($session: Session!, $input: RenewPasswordInput) {
  renewPassword(session: $session, input: $input) {
    renewPasswordDemand
  }
}
    `;
export const RequestBrochure = gql `
    query requestBrochure($session: Session!, $input: BrochureInput) {
  requestBrochure(session: $session, input: $input) {
    requested
  }
}
    `;
