---
title: Encounter
description: The FHIR patient resource defines demographics and other administrative information about a person receiving care at a health organization. In order to match and deliver a patient search request, one of the following minimal data sets is required by default.

toc:
  depth: 2
---

# Encounter

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

### 1: Read
### 1.1 Request

1.1.1 URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482">/mps/fhir/R4/Patient/85</a>

1.1.2 HTTP Method : GET

1.1.3 Parameter

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
      <td><a href="https://hl7.org/fhir/search.html#string" target="_blank">Resource ID (string)</a></td>
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">The Resource ID of the AllergyIntolerance resource.</a> </td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

### 1.2. Response
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">AllergyIntolerance </a></td>
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">A single AllergyIntolerance resource.</a> </td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Allergy Intolerance Resource Content:

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
        <p>The current status of the allergy. Possible values include:</p>
        <ul>
          <li>active</li>
          <li>resolved</li>
          <li>inactive</li>
        </ul>
      </td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">String</a> )</td>
      <td>The AllergyIntolerance FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>verificationStatus ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>If the allergy is on the patient's chart, this element specifies "confirmed". If it is a newly created allergy and still needs to be reconciled, it is "unconfirmed".</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>code ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>The allergen name and codes.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>patient ( <a href="https://hl7.org/fhir/search.html#reference" target="_blank">reference</a> )</td>
      <td>Reference to a patient resource for whom the allergy is relevant.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>reaction( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Reaction name</td>
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


### 2: Search
### 2.1 Request

2.1.1 URL – <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-4822">/mps/fhir/R4/AllergyIntolerance?patient=85</a>

2.1.2 HTTP Method: GET

2.1.3 Parameter


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
      <td>The Resource ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">AllergyIntolerance resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Patient ID( <a href="https://hl7.org/fhir/search.html#reference" target="_blank">reference</a> )</td>
      <td>The server could not understand the request due to invalid syntax. The body of the HTTP response will contain an <a href="https://hl7.org/fhir/R4B/operationoutcome.html" target="_blank">OperationOutcome</a> resource that indicates the invalid request could not be processed.</td>
      <td>The Resource ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">AllergyIntolerance resource</a>.</td>
    </tr>
  </tbody>
</table>

### 2.2. Response
::CodeBlock
```json
﻿{
    "resourceType": "Bundle",
    "id": "e7891e28-22a5-48ef-8e1d-d3100e85aa37",
    "meta": {
        "lastUpdated": "2022-11-18T14:25:53.528+00:00"
    },
    "type": "searchset",
    "total": 1,
    "link": [
        {
            "relation": "self",
            "url": "https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance?_id=AllergyIntolerance-85-18"
        }
    ],
    "entry": [
        {
            "resource": {
                "resourceType": "AllergyIntolerance",
                "id": "AllergyIntolerance-85-18",
                "meta": {
                    "profile": [
                        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance"
                    ]
                },
                "clinicalStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
                            "code": "active",
                            "display": "Active"
                        }
                    ]
                },
                "verificationStatus": {
                    "coding": [
                        {
                            "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
                            "code": "confirmed"
                        }
                    ]
                },
                "code": {
                    "coding": [
                        {
                            "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                            "code": "1292899",
                            "display": "penicillin G"
                        }
                    ]
                },
                "patient": {
                    "reference": "Patient/85"
                },
                "reaction": [
                    {
                        "manifestation": [
                            {
                                "coding": [
                                    {
                                        "system": "http://snomed.info/sct",
                                        "code": "315256004",
                                        "display": "Itching of pigmented skin lesion (disorder)"
                                    }
                                ]
                            }
                        ]
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
      <td>Bundle ( <a href="https://hl7.org/fhir/search.html#bundle" target="_blank">Bundle</a> )</td>
      <td>Resource bundle. (For more information, refer to the <a href="https://www.hl7.org/fhir/bundle.html" target="_blank">FHIR specification</a>.)</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Entry</td>
      <td>A container for a single <a href="https://www.hl7.org/fhir/resourcelist.html" target="_blank">FHIR resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">AllergyIntolerance</a></td>
      <td>A single <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">AllergyIntollerance</a> resource.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Allergy Intolerance Resource Content:

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
        <p>The current status of the allergy. Possible values include:</p>
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
      <td>The AllergyIntolerance FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>verificationStatus ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>If the allergy is on the patient's chart, this element specifies "confirmed". If it is a newly created allergy and still needs to be reconciled, it is "unconfirmed".</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>code ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>The allergen name and codes.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>patient( <a href="https://hl7.org/fhir/search.html#reference" target="_blank">reference</a> )</td>
      <td>Reference to a patient resource for whom the allergy is relevant.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>reaction( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Reaction name</td>
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