---
title: Search
description: The organizational resource describes a grouping of people or business units relevant to the healthcare process. Organizations include hospitals, employers, insurance companies, medical practices, rehabilitation facilities, laboratories etc.

toc:
  depth: 2
---

# Organization

### Description

The organizational resource describes a grouping of people or business units relevant to the healthcare process. Organizations include hospitals, employers, insurance companies, medical practices, rehabilitation facilities, laboratories etc.

<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Search
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/mps/fhir/R4/Organization?_id=Organization-1</a>

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-organization.html" target="_blank">Organization resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>name( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>Organization name</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>address( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>Organization address</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### Response
::CodeBlock
```json
{
  "resourceType": "Bundle",
  "id": "19fdc00a-e79e-45fb-b3ca-a17aabd15d67",
  "meta": {
    "lastUpdated": "2022-11-21T07:06:44.509+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://172.26.60.114:2525/mps/fhir/R4/Organization?_id=Organization-1"
    }
  ],
  "entry": [
    {
      "resource": {
        "resourceType": "Organization",
        "id": "Organization-1",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
          ]
        },
        "identifier": [
          {
            "system": "http://hl7.org/fhir/sid/us-npi",
            "value": "9971816761"
          }
        ],
        "active": true,
        "name": "Neighborhood Physicians Practice",
        "telecom": [
          {
            "system": "phone",
            "value": "(525)-555-1002"
          },
          {
            "system": "email"
          },
          {
            "system": "fax",
            "value": "123-123-1231"
          }
        ],
        "address": [
          {
            "line": [
              "2472, Rocky place, Beaverton, OR-97006"
            ],
            "city": "Beaverton",
            "state": "OR",
            "postalCode": "3",
            "country": "USA"
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">Organization</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-organization.html" target="_blank">organization resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Organization  Resource Content:

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
      <td>active ( <a href="https://hl7.org/fhir/R4/datatypes.html#boolean" target="_blank">Boolean</a> )</td>
      <td>Organization is active or not.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The Organization FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>identifier ( <a href="https://hl7.org/fhir/R4/datatypes.html#Identifier" target="_blank">Identifier</a> )</td>
      <td>Organization unique Identifier.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>name ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The name used for the organization.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>telecom ( <a href="https://hl7.org/fhir/R4/datatypes.html#ContactPoint" target="_blank">ContactPoint</a> )</td>
      <td>The phone number, fax number, email and emergency phone number.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>type ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>
        <p>This element supports the following extensible bindings:</p>
        <ul>
          <li>organizationType: The organization type.</li>
          <li>departmentSpecialty: The department specialty</li>
        </ul>
      </td>
      <td>Required</td>
    </tr>
    <tr>
      <td>address ( <a href="https://hl7.org/fhir/R4/datatypes.html#Address" target="_blank">Address</a> )</td>
      <td>The Organization address.</td>
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