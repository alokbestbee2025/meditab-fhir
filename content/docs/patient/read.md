---
title: Read
description: The FHIR patient resource defines demographics and other administrative information about a person receiving care at a health organization. In order to match and deliver a patient search request, one of the following minimal data sets is required by default.

toc:
  depth: 2
---

# Patient

### Description

The FHIR patient resource defines demographics and other administrative information about a person receiving care at a health organization.
In order to match and deliver a patient search request, one of the following minimal data sets is required by default.

- ID 
- Name 
- Identifier
- Birth date and name
- Gender and name

<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Read
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482">/mps/fhir/R4/Patient/85</a>

HTTP Method : GET

Parameter

<table>
  <thead>
    <tr>
      <th>Response Code</th>
      <th>Description</th>
      <th>Required/Optional</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Resource ID ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">patient resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### Response
::CodeBlock
```json
{
    "resourceType": "Patient",
    "id": "85",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
            "extension": [
                {
                    "url": "ombCategory",
                    "valueCoding": {
                        "system": "urn:oid:2.16.840.1.113883.6.238",
                        "code": "2106-3",
                        "display": "White"
                    }
                },
                {
                    "url": "text",
                    "valueString": "race"
                }
            ]
        },
        {
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
            "extension": [
                {
                    "url": "ombCategory",
                    "valueCoding": {
                        "system": "urn:oid:2.16.840.1.113883.6.238",
                        "code": "2186-5",
                        "display": "Non - Hispanic/Latino"
                    }
                },
                {
                    "url": "text",
                    "valueString": "ethnicity"
                }
            ]
        },
        {
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
            "valueCode": "UNK"
        }
    ],
    "identifier": [
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "SS"
                    }
                ]
            },
            "system": "http://hl7.org/fhir/sid/us-ssn",
            "value": "946481516"
        }
    ],
    "active": true,
    "name": [
        {
            "text": "Tejas",
            "family": "Test5",
            "given": [
                "Tejas",
                "G"
            ],
            "suffix": [
                "Jr"
            ]
        },
        {
            "text": "Tejas",
            "family": "Test1",
            "given": [
                "Tejas",
                "G"
            ],
            "period": {
                "start": "2022-11-09T05:00:18+00:00",
                "end": "2022-11-09T05:26:42+00:00"
            }
        },
        {
            "text": "Tejas",
            "family": "Test3",
            "given": [
                "Tejas",
                "G"
            ],
            "period": {
                "start": "2022-11-09T05:26:42+00:00"
            }
        }
    ],
    "telecom": [
        {
            "system": "phone",
            "value": "(555)-723-1544",
            "use": "home"
        },
        {
            "system": "phone",
            "value": "(555)-777-1234",
            "use": "mobile"
        }
    ],
    "gender": "male",
    "birthDate": "2013-07-31",
    "address": [
        {
            "line": [
                "1357, Amber Dr, Beaverton"
            ],
            "city": "Beaverton",
            "state": "OR",
            "postalCode": "3"
        },
        {
            "line": [
                "1357, Amber Dr, Beaverton"
            ],
            "city": "Beaverton",
            "state": "OR",
            "postalCode": "3",
            "period": {
                "start": "2022-11-09T05:00:18+00:00"
            }
        }
    ],
    "maritalStatus": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
                "code": "M",
                "display": "Married"
            }
        ]
    },
    "communication": [
        {
            "language": {
                "coding": [
                    {
                        "system": "urn:ietf:bcp:47",
                        "code": "eng",
                        "display": "English"
                    }
                ]
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">Patient</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">patient resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Patient Resource Content:

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
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">String</a> )</td>
      <td>The AllergyIntolerance FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>active ( <a href="https://www.hl7.org/fhir/datatypes.html" target="_blank">Boolean</a> )</td>
      <td>If the patient record is active or inactive. (True & False)</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>address( <a href="https://hl7.org/fhir/R4/datatypes.html#Address" target="_blank">Address</a> )</td>
      <td>The address of the patient.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>birthDate ( <a href="https://hl7.org/fhir/search.html#date" target="_blank">date</a> )</td>
      <td>Date (MM-DD-YYYY) of the patient.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Communication ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>A list of languages used to communicate with the patient, along with an indicator of which is preferred.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>contact ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>Patient Contact details.</td>
      <td>Required</td>
    </tr>
     <tr>
      <td>gender ( <a href="https://hl7.org/fhir/R4/datatypes.html#code" target="_blank">code</a> )</td>
      <td>Patient legal Sex.</td>
      <td>Required</td>
    </tr>
     <tr>
      <td>race ( <a href="https://hl7.org/fhir/us/core/STU3.1/StructureDefinition-us-core-patient-definitions.html#Patient.extension:race" target="_blank">Extension</a> )</td>
      <td>Patient Race.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>telecom ( <a href="https://hl7.org/fhir/R4/datatypes.html#ContactPoint" target="_blank">ContactPoint</a> )</td>
      <td>Patient telecom details.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>ethnicity ( <a href="https://hl7.org/fhir/us/core/STU3.1/StructureDefinition-us-core-patient-definitions.html#Patient.extension:ethnicity" target="_blank">Extension</a> )</td>
      <td>Patient telecom details.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Language ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>Patient Ethnicity.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>maritalStatus ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Patient Language.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>name ( <a href="https://hl7.org/fhir/R4/datatypes.html#HumanName" target="_blank">HumanName</a> )</td>
      <td>The patient's family (last), Given (First & Middle) name, Prefix or Suffix in a codeable concept or string.</td>
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