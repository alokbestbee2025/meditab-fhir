<!-- ChildDialog.vue -->
<template>
  <v-dialog class="terms-dialog" v-model="internalDialog">
    <v-card class="dialog-card-util">
      <v-container>
        <v-row>
          <v-col>
            <h3 class="mb-4">TERMS AND CONDITIONS OF USE</h3>
            <p>
              Documentation of MedPharm’s FHIR API portal and materials
              including MedPharm’s support of the FHIR specification (referred
              to as the “Materials”) have been made available to Developers for
              development and testing.
            </p>
            <p>
              “Developer/s” are any individual or company who uses the
              Materials, for the testing of interoperability between their
              product and MedPharm’s software which is in use at MedPharm’s
              Customer site. The Materials are provided to Developers “as-is”
              with no other warranties expressed or implied. Developer accepts
              these terms by using this website or any Materials. MedPharm may
              change these terms from time to time; for example, to reflect
              changes in the Materials offered or for legal, regulatory, or
              security reasons.
            </p>
            <p>
              Developers agree they are responsible to check back periodically
              for updates. By continuing to use this website or any Materials
              after an update, Developer is accepting the updated terms.
              Developer’s use of the Materials is subject to the terms and
              conditions below:
            </p>
            <p>
              1. MedPharm’s FHIR API webpage has the most up-to-date
              documentation. Developers may keep copies of the Materials;
              however, they may not be distributed. Developers wishing to share
              the Materials may do so via linking other developers to the
              Materials hosted on MedPharm FHIR API portal.
            </p>
            <p>
              2. Developers are solely responsible for their products and
              services, such as how their products and services interact with
              MedPharm’s Customers systems, and for all liability and
              consequences that arise from or relate to data made available to
              or from their products or services, or that arise from or relate
              to data made available to or from their products or services or
              direct or indirect use of that data. Developers are solely
              responsible for complying with all applicable laws, which includes
              not infringing MedPharm or others’ intellectual property rights
              through use of the Materials or any data made available as a
              result thereof or from their products or services use of the
              Materials or any data made available as a result thereof.
              Developer warrants that Developer will protect user information
              collected by Developer’s API App, including personally
              identifiable information (“PII”) and Protected Health Information
              (“PHI”) and/ or Electronic Protected Health Information (“ePHI”),
              from unauthorized access or use.
            </p>
            <ol type="A">
              <li>
                Developer will establish and implement appropriate safeguards
                for the PHI (as defined under the HIPAA Rules) that Developer
                may receive, create, maintain, use, or disclose in connection
                with the functions, activities, and services that Developer
                performs for MedPharm.
              </li>
              <li>
                Developer agrees not to use or disclose PHI and/or ePHI other
                than as permitted or required by Law, or if such use or
                disclosure does not otherwise cause a Breach of Unsecured PHI
                and ePHI.
              </li>
              <li>
                Developer agrees to use appropriate safeguards and comply with
                Subpart C of 45 C.F.R. Part 164 with respect to ePHI to prevent
                use or disclosure of PHI or ePhi other than as provided for in
                these Terms and Conditions.
              </li>
              <li>
                Developer agrees to mitigate, to the extent practicable, any
                harmful effect that is known to MedPharm as a result of a use or
                disclosure of PHI or ePhi by Developer in violation of these
                Terms and Conditions or that would otherwise cause a Breach of
                Unsecured PHI.
              </li>
              <li>
                Developer agrees to use appropriate safeguards and comply with
                Subpart C of 45 C.F.R. Part 164 with respect to ePHI to prevent
                use or disclosure of PHI other than as provided for by these
                Terms and Conditions.
              </li>
              <li>
                Developer agrees to mitigate, to the extent practicable, any
                harmful effect that is known to Developer as a result of a use
                or disclosure of PHI and/or ePHI by Developer in violation of
                these Terms and Conditions or that would otherwise cause a
                Breach of Unsecured PHI or ePHi.
              </li>
            </ol>
            <p>
              3. MedPharm reserves the right to verify the authenticity of
              Developer prior to registering and enabling Developer Application
              for use with the API. Authenticity verification will be objective,
              the same for all developers, and completed within ten (10)
              business days of receipt of Developer’s request to register their
              application for use with the API. MedPharm will register and
              enable all applications for production use within five (5)
              business days of completing its authenticity verification.
              Developer understands that these Terms and Conditions do not
              create an endorsement of the security of your app. Developer
              understands their duty to ensure the integrity of the data on your
              systems. Developer acknowledges and accepts that it will use
              industry-standard and up-to-date security tools and technologies
              when developing and using the app and that it may be required to
              update internal security processes if the current processes are no
              longer industry-standard or sufficient. Developer will use
              encryption technologies when sending sensitive data and storing
              sensitive information at rest. Developer’s apps will not corrupt
              or otherwise cause material inconsistencies in any data used by
              their apps. Developer agrees that the app will protect
              authentication credentials provided by MedPharm or the customer,
              such as usernames, user passwords, access tokens, or refresh
              tokens. Developer will maintain appropriate documentation on the
              users who use, change, and disclose data, the date/time they took
              such action and the purpose of such action. Developers will
              conduct security testing on their app and address any
              vulnerabilities discovered therein.. MedPharm owns the Materials
              and all intellectual property rights therein, as well as any
              improvements to or derivative works of the Materials, including
              but not limited to enhancements to the testing environment or
              documentation. Developer hereby assigns and agrees to undertake
              all reasonable requests by MedPharm to perfect such assignment of
              all newly arising rights in any such improvements or derivatives.
              A dynamic developer environment is encouraged. Any suggested
              improvements of the Materials may become part of the Materials
              without any obligation of notice to the submitter. However,
              MedPharm shall be under no obligation to incorporate or use any
              suggestions or improvements in the Material. Nothing under these
              Terms and Conditions grants or implies the grant any rights or
              licenses to MedPharm’s intellectual property rights other than as
              expressly set out herein for the permitted use of the Materials.
            </p>
            <p>
              5. Developers are responsible for the products developed and how
              the products connect to the MedPharm’s Customer’s software.
              Developers are also responsible for complying with all applicable
              laws, including without limitation those relating to intellectual
              property and those applying to Restricted Information and Basic
              Personal Data PII and/or PHI. Developer warrants and represents
              Developer will not infringe on MedPharm or third parties’
              intellectual property rights.
            </p>
            <p>
              6. Developers agree to indemnify, hold harmless and defend
              MedPharm, its subsidiaries, and all of its their employees,
              officers, directors, contractors, and other personnel from and
              against any claim that in any way arises out of or relates to (i)
              the use of or inability to use any of Developers products or
              services; (ii) Developer or end users misuse of the APIs,
              Materials or violation of these terms; (iii) any content or data
              routed into and/or through the APIs by Developer or used with the
              APIs by Developer or those acting on Developer’s behalf; (iv) any
              breach of these terms; or (v) Developer’s acts or omissions which
              constitute information blocking or otherwise improperly interfere
              with the access, exchange or use of end user data.
            </p>
            <p>
              7. No permission to use MedPharm’s name, brands or trademarks is
              granted or implied under these terms. Developers interested in
              advertising products using MedPharm FHIR API, MedPharm’s name, or
              MedPharm’s logo, please contact legal@medpharmservices.com to
              obtain permission which shall not be unreasonably withheld but may
              be made subject to additional terms and conditions.
            </p>
            <p>
              8. Direct Access to MedPharm’s software (including a MedPharm
              Customer’s system) is not needed to develop, test, deploy, or
              support a Developer's product or service. Developers may test
              their product or service through MedPharm’s sandbox. Direct access
              to MedPharm’s software will only be granted following security
              approval from MedPharm.
            </p>
            <p>
              9. The Materials, MedPharm’s FHIR API, and associated materials
              are not intended and should not be used for performance,
              scalability, or security testing. Regardless, if Developer
              identifies an actual or potential security vulnerability with
              MedPharm software or MedPharm’s FHIR API, Developer will inform
              MedPharm about such a vulnerability as soon as possible so that
              MedPharm can address the issue.
            </p>
            <p>
              10. MedPharm’s confidential information includes the APIs, as well
              as any materials, communications and information that are marked
              confidential or that would normally be considered by a reasonable
              actor to be confidential under the circumstances. All Materials
              are deemed confidential by nature and therefore subject to these
              confidentiality obligations. If Developer receives any such
              information, Developer agrees they will not disclose it to any
              third party without MedPharm’s express prior written consent.
              MedPharm’s confidential information does not include information
              which (a) is or becomes generally publicly available other than as
              a result of a disclosure by Developer or its representatives, (b)
              is or becomes available to Developer on a non-confidential basis
              from a source (other than MedPharm or its representatives)
              rightfully in possession of such information and that is not
              prohibited from disclosing such information to Developer by a
              legal, contractual, fiduciary or other obligation, (c) is
              independently developed by Developer as demonstrated by written or
              documented evidence, or (d) was known by Developer prior to
              disclosure to Developer by MedPharm, as demonstrated by written or
              documented evidence. Any combination of such information will not
              be included within the foregoing exceptions because individual
              features of the information are in the public domain.
            </p>
            <ol type="A">
              <li>
                Permitted Disclosure. Developer may disclose confidential
                information: (a) as is required by applicable law, (b) to report
                adverse events, hazards and other unsafe conditions to
                governmental agencies, health care accreditation organizations
                and/or patient safety organizations; (c) to report cybersecurity
                threats and incidents to government agencies; and (d) to report
                information blocking and other unlawful practices to a
                government agency. All documents and other tangible objects
                containing or representing MedPharm confidential information,
                and all copies, notes and extracts thereof that are in the
                possession of the Developer, shall be and remain the property of
                MedPharm, and shall be promptly returned to MedPharm and/or
                destroyed upon MedPharm’s written request, or upon termination
                of these Terms. At MedPharm’s request, Developer shall provide a
                written certification from an officer of Developer that all such
                confidential information and copies thereof have been destroyed.
              </li>
            </ol>
            <p>
              11. Publicity and Attribution. MedPharm shall provide Developer
              publicity and attribution rights upon written request.
            </p>
            <p>
              12. SOME JURISDICTIONS PROVIDE FOR CERTAIN WARRANTIES, INCLUDING
              THE IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NON INFRINGEMENT. EXCEPT AS EXPRESSLY PROVIDED FOR IN
              THESE TERMS, TO THE EXTENT PERMITTED BY LAW MEDPHARM EXCLUDES ALL
              WARRANTIES, GUARANTEES, CONDITIONS, REPRESENTATIONS, AND
              UNDERTAKINGS. LIMITATION OF LIABILITY. WHEN PERMITTED BY LAW,
              MEDPHARM, AND MEDPHARM’S AFFILIATES, SUPPLIERS, LICENSORS, AND
              DISTRIBUTORS, WILL NOT BE RESPONSIBLE FOR LOST PROFITS, REVENUES,
              OR DATA; FINANCIAL LOSSES; OR INDIRECT, SPECIAL, CONSEQUENTIAL,
              EXEMPLARY, OR PUNITIVE DAMAGES. TO THE EXTENT PERMITTED BY LAW,
              THE TOTAL LIABILITY OF MEDPHARM. MEDPHARM’S AFFILIATES, AND ITS
              SUPPLIERS, LICENSORS, AND DISTRIBUTORS, FOR ANY CLAIM UNDER THESE
              TERMS, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE
              AMOUNT YOU PAID MEDPHARM UNDER THESE TERMS DURING THE SIX (6)
              MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY. IN ALL
              CASES, NEITHER MEDPHARM, NOR ITS AFFILIATES, SUPPLIERS AND
              DISTRIBUTORS, WILL BE LIABLE FOR ANY EXPENSE, LOSS, OR DAMAGE THAT
              IS NOT REASONABLY FORESEEABLE.
            </p>
            <p>13. MedPharm’s FHIR Developer Guidelines:</p>
            <ol type="A">
              <li>
                Developers will not put patients or users of their application
                at risk of harm. Protecting patient and user safety is to remain
                the paramount priority.
              </li>
              <li>
                Developers will respect and adhere to MedPharm’s security
                requirements and will not engage in activity that puts
                MedPharm’s security or those of its software users at risk.
              </li>
              <li>
                Developers will respect the privacy of patients, providers, and
                users of their application and MedPharm software.
              </li>
              <li>
                Developers will not develop applications that interfere or
                negatively impact the daily workflows of MedPharm software
                users.
              </li>
              <li>
                Developers will encrypt data that is stored using
                industry-standard encryption algorithms. Data exchange between
                your application and MedPharm’s software will be secured with
                industry standard encryption while in transit.
              </li>
              <li>
                Developers are expected to document how they will respond to
                security vulnerabilities. Applications should be evaluated for
                security vulnerabilities routinely, as is industry standard.
              </li>
              <li>
                Developers’ applications should present to users clear
                guidelines on how their data will be used within the application
                and where the data will be stored. Users should be informed of
                how they may remove their data from the application should they
                wish to stop using the application. This may be documented in a
                policy or data use agreement.
              </li>
              <li>
                Application developers will not need direct access to MedPharm’s
                software in order to build their applications. MedPharm will
                provide Developers with access to a generic testing and
                development environment (a “Sandbox”) where Developers will have
                access to test data and the ability to create and test
                Developers API App(s). Your participation in the Sandbox is
                entirely optional and at no charge. The Sandbox will be
                refreshed at the sole discretion of MedPharm. The Sandbox will
                be shared with third parties.
              </li>
              <li>
                Notwithstanding anything to the contrary contained herein,
                MedPharm shall automatically terminate Developers access to
                MedPharm’s Sandbox within thirty (30) days after the effective
                date of this Agreement. Application developers will make no
                misrepresentation of their relationship with MedPharm, their
                products capabilities, the type of data stored and accessed, and
                other related items.
              </li>
            </ol>
            <p>
              14. These terms do not create any third-party beneficiary rights
              or any agency, partnership, or joint venture. Nothing in these
              terms will limit either party’s ability to seek injunctive relief.
              MedPharm is not liable for failure or delay in performance to the
              extent caused by circumstances beyond MedPharm’s reasonable
              control. If Developer does not comply with these terms, and
              MedPharm does not take action promptly, this does not mean that
              MedPharm is foregoing any rights that it may have (such as taking
              action in the future). In the event a particular term is not
              enforceable, this will not affect any other terms. These terms are
              the entire agreement between Developer and MedPharm relating to
              its subject matter and supersede any prior or contemporaneous
              agreements regarding this subject matter. These terms are governed
              by the laws of Puerto Rico, as applied to contracts to be
              performed wholly within that CommonWealth, without reference to
              the choice of law principles thereof. Jurisdiction and venue for
              all disputes relating to this Agreement shall lie with the state
              and federal courts located in San Juan, Puerto Rico.
            </p>
            <p>
              15. Developer may not assign, transfer, or otherwise delegate any
              of its rights, duties, or obligations under these terms in whole
              or in part to any individual, firm or corporation without the
              prior written consent of MedPharm. Any attempt to assign, transfer
              or otherwise delegate any of the rights, duties, or obligations
              under these terms without the prior written consent of MedPharm
              shall be void. Any provision of these terms that by its nature is
              intended to survive will survive any cancellation, termination or
              expiration of these terms.
            </p>
          </v-col>
        </v-row>
      </v-container>

      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="closeDialog" />
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      internalDialog: this.modelValue,
    };
  },
  watch: {
    modelValue(val) {
      this.internalDialog = val;
    },
    internalDialog(val) {
      this.$emit("update:modelValue", val);
    },
  },
  methods: {
    closeDialog() {
      this.internalDialog = false;
    },
  },
};
</script>

<style scopped>
.terms-dialog {
  padding: 30px;
  max-width: 60vw;
}
.terms-dialog p {
  font-size: 14px;
  margin-bottom: 15px;
}
.terms-dialog ol {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
.terms-dialog ol li{
  font-size: 14px;
}
@media (max-width:1024px) {
  .terms-dialog {
  max-width: 80vw;
}
}
@media (max-width:767px) {
  .terms-dialog {
  max-width: 95vw;
}
}
</style>