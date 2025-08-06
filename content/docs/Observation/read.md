---
title: Read
description: Vital signs, laboratory results, imaging results, device measurements, clinical evaluation tools, personal traits, social history, and core features are all defined in the FHIR Observation resource.

toc:
  depth: 2
---

# Observation

### Description

Vital signs, laboratory results, imaging results, device measurements, clinical evaluation tools, personal traits, social history, and core features are all defined in the FHIR Observation resource. One of the first areas where a single, universal vocabulary is required to enable universal access and re-use is in the field of vital signs. Particularly when patients are using wearables and need or want to exchange information from those devices.


<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Read
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/mps/fhir/R4/Observation/Observation-vital-Body-Temperature-385-2-C-85</a>

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-observation-lab.html" target="_blank">observation resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>


### Response
::CodeBlock
```json
{
  "resourceType": "Observation",
  "id": "Observation-vital-Body-Temperature-385-2-C-85",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/bodytemp"
    ]
  },
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "vital-signs",
          "display": "Vital Signs"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "8310-5",
        "display": "Body Temperature"
      }
    ]
  },
  "subject": {
    "reference": "Patient/85"
  },
  "effectiveDateTime": "2022-09-26T00:00:00+00:00",
  "valueQuantity": {
    "value": 100.40,
    "unit": "degF",
    "system": "http://unitsofmeasure.org",
    "code": "[degF]"
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">Observation</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-observation-lab.html" target="_blank">Observation</a> resource.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Observation Resource Content:

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
      <td>The status of the observation.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The Observation FHIR ID</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>category ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>This element always returns "vital-signs".</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>code( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Loinc Code</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>subject( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Reference to a patient resource for whom the observation is relevant.</td>
      <td>Required</td>
    </tr>
     <tr>
      <td>effectiveDateTime ( <a href="https://hl7.org/fhir/R4/datatypes.html#dateTime" target="_blank">dateTime</a> )</td>
      <td>The date and time the observation was taken.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>valueQuantity( <a href="https://hl7.org/fhir/R4/datatypes.html#Quantity" target="_blank">Quantity</a> )</td>
      <td>This element is populated if a value has units or the data type is numeric or a percentile. Only one of the value* elements is required.</td>
      <td>Required</td>
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