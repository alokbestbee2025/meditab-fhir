---
title: Search
description: The care plan resource describes the intentions of how one or more physicians plan to deliver a particular patient. Care plans are used in a variety of areas and applications ranging from encounters or specific visits to mutual visits. Care Plans are used to group activities, goals and practitioners to provide context.

toc:
  depth: 2
---

# CarePlan

### Description

The care plan resource describes the intentions of how one or more physicians plan to deliver a particular patient. Care plans are used in a variety of areas and applications ranging from encounters or specific visits to mutual visits. Care Plans are used to group activities, goals and practitioners to provide context. Care plans should be patient specific. It is possible that a planned activity without a care plan, such as a scheduled appointment, stands alone.

<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Search
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/mps/fhir/R4/CarePlan?_id=CarePlan-385-18776-5</a>

HTTP Method: GET

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-careplan.html" target="_blank">CarePlan resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Patient ID( <a href="https://hl7.org/fhir/search.html#reference" target="_blank">reference</a> )</td>
      <td>The reference ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">Patient resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>category( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Asses-plan</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### Response
::CodeBlock
```json
{
  "resourceType": "Bundle",
  "id": "1f432d74-2e14-4dfc-8ee6-1fd73602c28c",
  "meta": {
    "lastUpdated": "2022-11-21T08:34:06.948+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://172.26.60.114:2525/mps/fhir/R4/CarePlan?_id=CarePlan-385-18776-5"
    }
  ],
  "entry": [
    {
      "resource": {
        "resourceType": "CarePlan",
        "id": "CarePlan-385-18776-5",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan"
          ]
        },
        "text": {
          "status": "additional",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">i. Get An EKG done on 06/23/2015.\r\nii. Get a Chest X-ray done on 06/23/2015 showing the Lower Respiratory Tract Sturucture.\r\niii. Take Clindamycin 300mg Three times a day as needed if pain does not subside.\r\niv. Schedule follow on visit with Neighborhood Physicians Practice on 07/01/2015.\r\n</div>"
        },
        "status": "active",
        "intent": "order",
        "category": [
          {
            "coding": [
              {
                "system": "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
                "code": "assess-plan"
              }
            ]
          }
        ],
        "subject": {
          "reference": "Patient/85"
        },
        "encounter": {
          "reference": "Encounter/Encounter-112-385"
        }
      },
      "search": {
        "mode": "match"
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
      <td>Bundle ( <a href="https://www.hl7.org/fhir/bundle.html" target="_blank">Bundle</a> )</td>
      <td>Resource bundle. (For more information, refer to the <a href="https://www.hl7.org/fhir/bundle.html" target="_blank">FHIR specification</a>.)</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Entry</td>
      <td>A container for a single <a href="https://www.hl7.org/fhir/resourcelist.html" target="_blank">FHIR resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">CarePlan</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-careplan.html" target="_blank">CarePlan resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### CarePlan Resource Content:

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
      <td>text ( <a href="https://www.hl7.org/fhir/narrative.html#Narrative" target="_blank">Narrative</a> )</td>
      <td>The note(s) associated with this encounter-level CarePlan</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The CarePlan FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>intent ( <a href="https://hl7.org/fhir/R4/datatypes.html#code" target="_blank">code</a> )</td>
      <td>order</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>category ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>In addition, category type "assess-plan" is always included in search results.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>subject( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Reference to a patient resource for whom the care plan is relevant.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>encounter( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>The encounter or episode of care associated with this CarePlan.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>entry</td>
      <td>An array of entries included in this bundle.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>total ( <a href="https://www.hl7.org/fhir/datatypes.html" target="_blank">Int64</a> )</td>
      <td>Total number of resources that matched the search criteria.</td>
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
      <td>The requested resource was found and is contained within the body of  the HTTP response.</td>
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