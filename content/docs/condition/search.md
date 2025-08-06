---
title: Search
description: The condition resource is used to record problems, diagnosis , or other health issues affecting a patient. Depending on the site, problems and diagnostics are used differently.

toc:
  depth: 2
---

# Condition

### Description

The condition resource is used to record problems, diagnosis , or other health issues affecting a patient. Depending on the site, problems and diagnostics are used differently.


<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Search
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/mps/fhir/R4/Condition?_id=Condition-Problem-83</a>

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-condition.html" target="_blank">condition resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Patient ID( <a href="https://hl7.org/fhir/search.html#reference" target="_blank">reference</a> )</td>
      <td>The reference ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">Patient resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### Response
::CodeBlock
```json
{
  "resourceType": "Bundle",
  "id": "613f2f13-2bad-42d1-ac07-ac65b3c3fb3e",
  "meta": {
    "lastUpdated": "2022-11-21T06:49:51.679+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://172.26.60.114:2525/mps/fhir/R4/Condition?_id=Condition-Problem-83"
    }
  ],
  "entry": [
    {
      "resource": {
        "resourceType": "Condition",
        "id": "Condition-Problem-83",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition"
          ]
        },
        "clinicalStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
              "code": "resolved",
              "display": "Resolved"
            }
          ]
        },
        "verificationStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
              "code": "confirmed",
              "display": "Confirmed"
            }
          ]
        },
        "category": [
          {
            "coding": [
              {
                "system": "http://hl7.org/fhir/us/core/CodeSystem/condition-category",
                "code": "problem-list-item",
                "display": "Problem List Item"
              }
            ]
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "238131007",
              "display": "Overweight (finding)"
            }
          ]
        },
        "subject": {
          "reference": "Patient/85"
        },
        "encounter": {
          "reference": "Encounter/Encounter-112"
        },
        "onsetDateTime": "2006-12-31T05:32:53+00:00"
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">condition</a></td>
      <td>A single <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-condition.html" target="_blank">condition resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Condition Resource Content:

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
      <td>clinicalStatus ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>
        <p>The current status of the condition. Possible values include:</p>
        <ul>
            <li>active</li>
            <li>resolved</li>
            <li>inactive</li>
        </ul>
      </td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The condition FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>verificationStatus ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>health-concern</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>category ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Goal is achieved or not.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>code ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Snomed-ct codes of the condition.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>subject ( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>The patient associated with the condition.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>encounter( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>The encounter associated with the condition.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>onsetDateTime( <a href="https://hl7.org/fhir/R4/datatypes.html#dateTime" target="_blank">DateTime</a> )</td>
      <td>The date the problem was resolved.</td>
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