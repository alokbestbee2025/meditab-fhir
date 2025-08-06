---
title: Read
description: The FHIR device resource describes information on durable , manufactured medical items.Read interactions begin when a client has previously established a relationship, typically when following a reference to that resource from another resource or by querying for devices through the search interaction.

toc:
  depth: 2
---

# Device

### Description

The FHIR device resource describes information on durable , manufactured medical items.Read interactions begin when a client has previously established a relationship, typically when following a reference to that resource from another resource or by querying for devices through the search interaction.


<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Read
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/fhir/R4/Device/Device-4</a>

HTTP Method : GET

Parameter

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Required/Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Resource ID ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-medicationrequest.html" target="_blank">MedicationRequest resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### Response
::CodeBlock
```json
{
  "resourceType": "MedicationRequest",
  "id": "MedicationRequest-254",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
    ]
  },
  "status": "active",
  "intent": "order",
  "reportedBoolean": false,
  "medicationCodeableConcept": {
    "coding": [
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "RX00000082",
        "display": "CELEXA 20 MG TABLET"
      }
    ]
  },
  "subject": {
    "reference": "Patient/85"
  },
  "encounter": {
    "reference": "Encounter/Encounter-112-387"
  },
  "authoredOn": "2020-09-10T00:57:55+00:00",
  "requester": {
    "reference": "Practitioner/Practitioner-6"
  },
  "dosageInstruction": [
    {
      "text": "1 every evening"
    }
  ],
  "dispenseRequest": {
    "numberOfRepeatsAllowed": 2,
    "quantity": {
      "value": 30.000000,
      "unit": "Tablet",
      "system": "http://unitsofmeasure.org",
      "code": "C48542"
    },
    "expectedSupplyDuration": {
      "value": 30,
      "unit": "days",
      "system": "http://unitsofmeasure.org",
      "code": "d"
    }
  },
  "substitution": {
    "allowedBoolean": true
  }
}
```
::

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Required/Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">MedicationRequest</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-medicationrequest.html" target="_blank">MedicationRequest resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### MedicationRequest Resource Content:

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Required/Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>status ( <a href="https://hl7.org/fhir/R4/datatypes.html#code" target="_blank">code</a> )</td>
      <td>The status of the medication request.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The MedicationRequest FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>intent ( <a href="https://hl7.org/fhir/R4/datatypes.html#code" target="_blank">code</a> )</td>
      <td>Returns “plan” for patient-reported and historical medications. Returns “order” for other medications.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>reportedBoolean ( <a href="https://hl7.org/fhir/R4/datatypes.html#boolean" target="_blank">Boolean</a> )</td>
      <td>True or False (If Prescription By is set to self or Sample then False)</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Medication ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Rx norm code of the drug and drug description.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>subject( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Patient resource id.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>encounter( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Encounter resource id.</td>
      <td>Required</td>
    </tr>
     <tr>
      <td>authoredOn ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The date the prescription was written.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>requester( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Resource id of the practitioner Who made the request?</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>dosageInstruction ( <a href="https://www.hl7.org/fhir/dosage.html#Dosage" target="_blank">Dosage</a> )</td>
      <td>Dosage instruction details.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>dispenseRequest ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>Medication supply authorization.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>substitution ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>Whether substitution is allowed or not.</td>
      <td>optional</td>
    </tr>
  </tbody>
</table>

#### Response Codes:

<table>
  <thead>
    <tr>
      <th>Response Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>200 OK</td>
      <td>The requested resource was found and is contained within the body of the HTTP response.</td>
    </tr>
    <tr>
      <td>400 Bad Request</td>
      <td>The server could not understand the request due to invalid syntax. The body of the HTTP response will contain an <a href="https://hl7.org/fhir/R4B/operationoutcome.html" target="_blank">OperationOutcome</a> resource that indicates the invalid request could not be processed.</td>
    </tr>
    <tr>
      <td>404 Not Found</td>
      <td>The requested resource does not exist. The body of the HTTP response will contain an <a href="https://hl7.org/fhir/R4B/operationoutcome.html" target="_blank">OperationOutcome</a> resource that indicates the resource could not be found.</td>
    </tr>
    <tr>
      <td>410 Gone</td>
      <td>The requested resource has been permanently deleted from the server with no forwarding address. The body of the HTTP response will contain an <a href="https://hl7.org/fhir/R4B/operationoutcome.html" target="_blank">OperationOutcome</a> resource that indicates the resource could not be found.</td>
    </tr>
    <tr>
      <td>500 Internal Server Error</td>
      <td>The server has encountered a situation it doesn't know how to handle. The body of the HTTP response will contain an <a href="https://hl7.org/fhir/R4B/operationoutcome.html" target="_blank">OperationOutcome</a> resource that indicates the nature of the error.</td>
    </tr>
    <tr>
      <td>5xx Server Error</td>
      <td>The server may return other error codes to indicate other error conditions. The body of the HTTP response will contain an <a href="https://hl7.org/fhir/R4B/operationoutcome.html" target="_blank">OperationOutcome</a> resource that indicates the nature of the error</td>
    </tr>
  </tbody>
</table>


### Product Information
IMS (14.0.SP1)