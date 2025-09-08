---
title: Read
description: The provenance resource returns contextual metadata about the origin of another resource, such as who created or submitted data about the target resource.
toc:
  depth: 2
---

# Provenance

### Description

The provenance resource returns contextual metadata about the origin of another resource, such as who created or submitted data about the target resource. Commonly , provenance data is requested as part of the search interaction for a different resource , as described in the <a href="https://www.hl7.org/fhir/search.html" target="_blank">FHIR Search Parameters</a> documentation.


<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Read
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/mps/fhir/R4/MedicationRequest/MedicationRequest-254</a>

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-provenance.html" target="_blank">Provenance resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### Response
::CodeBlock
```json
{
  "resourceType": "Provenance",
  "id": "Provenance-1",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-provenance"
    ]
  },
  "target": [
    {
      "reference": "Patient/1"
    }
  ],
  "recorded": "2007-09-29T00:00:00.000+00:00",
  "agent": [
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
            "code": "author",
            "display": "author"
          }
        ]
      },
      "who": {
        "reference": "Practitioner/Practitioner-2"
      },
      "onBehalfOf": {
        "reference": "Organization/Organization-1"
      }
    },
    {
      "type": {
        "coding": [
          {
            "system": "http://hl7.org/fhir/us/core/CodeSystem/us-core-provenance-participant-type",
            "code": "transmitter",
            "display": "transmitter"
          }
        ]
      },
      "who": {
        "reference": "Practitioner/Practitioner-2"
      },
      "onBehalfOf": {
        "reference": "Organization/Organization-1"
      }
    }
  ]
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">Provenance</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-provenance.html" target="_blank">Provenance resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Provenance Resource Content:

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
      <td>agent( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>
        <p>Actors involved, such as the author and transmitter.</p>
        <ul>
          <li>Who the actor is representing.</li>
          <li>How the actor participated.</li>
          <li>Who participated.</li>
        </ul>
      </td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The Provenance FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>recorded ( <a href="https://hl7.org/fhir/R4/datatypes.html#instant" target="_blank">instant</a> )</td>
      <td>Timestamp that the activity was recorded or updated.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>target( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>The resource that this provenance describes.</td>
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