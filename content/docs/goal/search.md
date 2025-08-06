---
title: Search
description: The goal resource lists the goals that are intended for a patient. A goal is often defined as a desirable result or health state that a patient is to accomplish over time or at a particular moment in time.

toc:
  depth: 2
---

# Goal

### Description

The goal resource lists the goals that are intended for a patient. A goal is often defined as a desirable result or health state that a patient is to accomplish over time or at a particular moment in time.


<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Search
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/mps/fhir/R4/Goal?_id=Goal-4</a>

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-goal.html" target="_blank">Goal resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Patient ID ( <a href="https://hl7.org/fhir/search.html#reference" target="_blank">reference</a> )</td>
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
  "id": "555d63a3-53e5-4023-895b-1436c05c0b98",
  "meta": {
    "lastUpdated": "2022-11-21T06:35:35.794+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://172.26.60.114:2525/mps/fhir/R4/Goal?_id=Goal-4"
    }
  ],
  "entry": [
    {
      "resource": {
        "resourceType": "Goal",
        "id": "Goal-4",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-goal"
          ]
        },
        "lifecycleStatus": "active",
        "achievementStatus": {
          "text": "not achieved"
        },
        "description": {
          "text": "a. Get rid of intermittent fever that is occurring every few weeks.\r\nb. Need to gain more energy to do regular activities."
        },
        "subject": {
          "reference": "Patient/85"
        },
        "startDate": "2022-09-26",
        "target": [
          {
            "measure": {
              "text": "61146-7"
            },
            "dueDate": "2022-12-30"
          }
        ]
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">Goal</a></td>
      <td>A single <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-goal.html" target="_blank">Goal resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Goal Resource Content:

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
      <td>lifecycleStatus ( <a href="https://hl7.org/fhir/R4/datatypes.html#code" target="_blank">code</a> )</td>
      <td>A goal’s status is either active or completed for care paths.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The Goal FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>description ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>What the goal entails. SNOMED code or other text describing the goal.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>achievementStatus ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Goal is achieved or not.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>subject ( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>The FHIR Patient ID</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>startDate ( <a href="https://hl7.org/fhir/R4/datatypes.html#date" target="_blank">date</a> )</td>
      <td>When goal pursuit begins.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>target( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>What should be done by when.</td>
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