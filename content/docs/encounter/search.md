---
title: Search
description: The encounter resource defines the setting where patient care takes place. This includes ambulatory, inpatient, emergency, home health, and virtual encounters. Encounter is primarily used to record information about the actual activities that occurred , where appointment is used to record planned activities.

toc:
  depth: 2
---

# Encounter

### Description

The encounter resource defines the setting where patient care takes place. This includes ambulatory, inpatient, emergency, home health, and virtual encounters. Encounter is primarily used to record information about the actual activities that occurred , where appointment is used to record planned activities.

<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### 2: Search
### 2.1 Request

2.1.1 URL – <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482">/mps/fhir/R4/Encounter?_id=Encounter-112-385</a>

2.1.2 HTTP Method: GET

2.1.3 Parameter


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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-encounter.html" target="_blank">Encounter Resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>patient ( <a href="https://hl7.org/fhir/search.html#reference" target="_blank">reference</a> )</td>
      <td>Reference to a <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">patient resource</a>.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>date ( <a href="https://hl7.org/fhir/search.html#date" target="_blank">date</a> )</td>
      <td>A date range that the encounter takes place.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>


### 2.2. Response
::CodeBlock
```json
{
    "resourceType": "Bundle",
    "id": "8364cc12-a082-49f2-917c-25009d3b0567",
    "meta": {
        "lastUpdated": "2022-11-18T14:57:10.722+00:00"
    },
    "type": "searchset",
    "total": 1,
    "link": [
        {
            "relation": "self",
            "url": "https://172.26.60.114:2525/mps/fhir/R4/Encounter?_id=Encounter-112-385"
        }
    ],
    "entry": [
        {
            "resource": {
                "resourceType": "Encounter",
                "id": "Encounter-112-385",
                "meta": {
                    "profile": [
                        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
                    ]
                },
                "identifier": [
                    {
                        "system": "https://onchit-fhir.meditab.com/Encounter/Identifier",
                        "value": "Encounter-112-385"
                    }
                ],
                "status": "finished",
                "class": {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "AMB",
                    "display": "ambulatory"
                },
                "type": [
                    {
                        "text": "Office Visit"
                    }
                ],
                "subject": {
                    "reference": "Patient/85"
                },
                "participant": [
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                                        "code": "PPRF",
                                        "display": "primary performer"
                                    }
                                ]
                            }
                        ],
                        "period": {
                            "start": "2015-06-22T04:55:00+00:00",
                            "end": "2015-07-22T00:00:00+00:00"
                        },
                        "individual": {
                            "reference": "Practitioner/Practitioner-2"
                        }
                    }
                ],
                "period": {
                    "start": "2015-06-22T04:55:00+00:00",
                    "end": "2015-06-22T05:25:00+00:00"
                },
                "reasonCode": [
                    {
                        "text": "Nebulizer Therapy"
                    }
                ],
                "hospitalization": {
                    "dischargeDisposition": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/discharge-disposition",
                                "code": "oth",
                                "display": "Other"
                            }
                        ]
                    }
                },
                "location": [
                    {
                        "location": {
                            "reference": "Location/Location-1"
                        }
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">Encounter</a></td>
      <td>A single <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-encounter.html" target="_blank">encounter resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Encounter Resource Content:

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
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The Patient resource FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>status( <a href="https://hl7.org/fhir/R4/datatypes.html#code" target="_blank">code</a> )</td>
      <td>If the encounter is finished or not.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>class ( <a href="https://hl7.org/fhir/R4/datatypes.html#Coding" target="_blank">Coding</a> )</td>
      <td>Classification of patient encounters.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>type( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>The encounter type.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>participant ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>List of participants involved in the encounter.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>period ( <a href="https://hl7.org/fhir/R4/datatypes.html#Period" target="_blank">Period</a> )</td>
      <td>Period of time during the encounter that the participant participated.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>reasonCode ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>The reason for the visit.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>hospitalization ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>Details about the admission to a healthcare service.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>location ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>Location reference id. Can return a department, location, hospital room, or bed. Department and location are determined dynamically depending on a variety of factors.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>subject( <a href="https://hl7.org/fhir/search.html#reference" target="_blank">reference</a> )</td>
      <td>Reference to the Patient resource who was the subject of the encounter.</td>
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