---
title: Search
description: The practitioner resource provides information about an individual formally involved in the care of a patient on behalf of a healthcare facility.

toc:
  depth: 2
---

# Practitioner

### Description

The practitioner resource provides information about an individual formally involved in the care of a patient on behalf of a healthcare facility. Practitioners include physicians, nurses, pharmacists, therapists, technologists, and social workers , among others.The read interaction allows you to store only the ID and get the most up-to-date role information on a practitioner with a single request. Read interactions typically begin with a client having previously established a relationship.

<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Search
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/mps/fhir/R4/Practitioner?_id=Practitioner-2</a>

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-practitioner.html" target="_blank">practitioner resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>identifier( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The NPI of the practitioner.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>name( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>Name of the practitioner.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### Response
::CodeBlock
```json
{
  "resourceType": "Bundle",
  "id": "c8dae86d-d54a-4d43-8509-433e5e7e2d03",
  "meta": {
    "lastUpdated": "2022-11-21T08:11:15.998+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://172.26.60.114:2525/mps/fhir/R4/Practitioner?_id=Practitioner-2"
    }
  ],
  "entry": [
    {
      "resource": {
        "resourceType": "Practitioner",
        "id": "Practitioner-2",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
          ]
        },
        "identifier": [
          {
            "system": "http://hl7.org/fhir/sid/us-npi",
            "value": "9036838370"
          }
        ],
        "active": true,
        "name": [
          {
            "family": "Davis",
            "given": [
              "Albert",
              "H"
            ],
            "suffix": [
              "Dr"
            ]
          }
        ],
        "telecom": [
          {
            "system": "phone"
          },
          {
            "system": "email",
            "value": "tejasp@meditab.com"
          }
        ],
        "gender": "male"
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">Practitioner</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-practitioner.html" target="_blank">Practitioner resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Practitioner  Resource Content:

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
      <td>identifier ( <a href="https://hl7.org/fhir/R4/datatypes.html#Identifier" target="_blank">Identifier</a> )</td>
      <td>The practitioner or user ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The practitioner FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>active ( <a href="https://hl7.org/fhir/R4/datatypes.html#boolean" target="_blank">Boolean</a> )</td>
      <td>Whether the practitioner's record is in active use.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>name ( <a href="https://hl7.org/fhir/R4/datatypes.html#HumanName" target="_blank">HumanName</a> )</td>
      <td>The name of the practitioner, including all prefixes and suffixes available.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>telecom ( <a href="https://www.hl7.org/fhir/valueset-contactentity-type.html" target="_blank">ContactPoint</a> )</td>
      <td>Practitioner phone & email address</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>gender ( <a href="https://hl7.org/fhir/R4/datatypes.html#code" target="_blank">code</a> )</td>
      <td>Practitioner Sex</td>
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