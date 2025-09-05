---
title: Read
description: The care team resource represents a patient’s care team members. The members or participants of the care team include practitioners(doctors, nurses, technicians, etc). Family members, friends, guardians and the patient. The care team can be specific to an encounter or to the patient across all encounters.

toc:
  depth: 2
---

# Care Team

### Description

The care team resource represents a patient’s care team members. The members or participants of the care team include practitioners(doctors, nurses, technicians, etc). Family members, friends, guardians and the patient. The care team can be specific to an encounter or to the patient across all encounters.


<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Read
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482">/mps/fhir/R4/CareTeam/CareTeam-2</a>

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-careteam.html" target="_blank">CareTeam resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### Response
::CodeBlock
```json
{
  "resourceType": "CareTeam",
  "id": "CareTeam-2",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam"
    ]
  },
  "status": "active",
  "name": "Test 1",
  "subject": {
    "reference": "Patient/85"
  },
  "encounter": {
    "reference": "Encounter/Encounter-112-385"
  },
  "participant": [
    {
      "role": [
        {
          "text": "Provider"
        }
      ],
      "member": {
        "reference": "Practitioner/Practitioner-2"
      }
    },
    {
      "role": [
        {
          "text": "Provider"
        }
      ],
      "member": {
        "reference": "Practitioner/Practitioner-107"
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">CareTeam</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-careteam.html" target="_blank">CareTeam</a> instance.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### CareTeam Resource Content:

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
      <td>status ( <a href="https://hl7.org/fhir/R4/datatypes.html#code">code</a> )</td>
      <td>The status of the episode for which the care team is defined.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The Care Team FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>name ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The name of the care team.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>participant ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>A participant in the care team.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>subject( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Reference to a patient resource for whom the CareTeam is relevant.</td>
      <td>Required</td>
    </tr>
     <tr>
      <td>encounter( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Reference to an encounter resource  for whom the CareTeam is relevant.</td>
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