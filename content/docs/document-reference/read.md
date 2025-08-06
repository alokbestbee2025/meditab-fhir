---
title: Read
description: Within the healthcare system, a patient's clinical document is referred to using the DocumentReference resource. This tool provides a link to get a document as a PDF, a list of clinical documents, and assistance for viewing continuity of care papers (CCD).

toc:
  depth: 2
---

# Document Reference

### Description

Within the healthcare system, a patient's clinical document is referred to using the DocumentReference resource. This tool provides a link to get a document as a PDF, a list of clinical documents, and assistance for viewing continuity of care papers (CCD).

<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Read
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/fhir/R4/DocumentReference/DocumentReference-OD-366</a>

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-documentreference.html" target="_blank">DocumentReference resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>


### Response
::CodeBlock
```json
{
  "resourceType": "DocumentReference",
  "id": "DocumentReference-OD-366",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference"
    ]
  },
  "identifier": [
    {
      "value": "DocumentReference-OD-366"
    }
  ],
  "status": "current",
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "11488-4",
        "display": "Consultation Note"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
          "code": "clinical-note",
          "display": "Clinical Note"
        }
      ]
    }
  ],
  "subject": {
    "reference": "Patient/7"
  },
  "date": "2020-06-22T00:00:00.000+00:00",
  "author": [
    {
      "reference": "Practitioner/Practitioner-2"
    }
  ],
  "custodian": {
    "reference": "Organization/Organization-1"
  },
  "content": [
    {
      "attachment": {
        "contentType": "text/plain",
        "data": "RHIgQWxiZXJ0IERhdmlzIGRpYWdub3NlZCBNcyBIYXBweSBLaWQgdG8gYmUgc3VmZmVyaW5nIGZyb20gRmV2ZXIgYW5kIHN1c3BlY3RlZCBQbmV1bW9uaWEgYW5kIHJlY29tbWVuZGVkIGFkbWlzc2lvbiB0byB0aGUgQ29tbXVuaXR5IEhlYWx0aCBIb3NwaXRhbHMuIFRoZSBub3RlIHdhcyByZWNvcmRlZCBvbiAyMm5kIEp1bmUgYXQgMTE6MDAgYW0gRVQuDQo="
      },
      "format": {
        "display": "Text format"
      }
    }
  ],
  "context": {
    "encounter": [
      {
        "reference": "Encounter/Encounter-4-366"
      }
    ],
    "period": {
      "start": "2020-06-22T03:41:00+00:00",
      "end": "2020-06-22T03:56:00+00:00"
    }
  }
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">DocumentReference</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-documentreference.html" target="_blank">DocumentReference</a> resource.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Document Reference Resource Content:

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
      <td>The identifier of the document from the IMS system.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The DocumentReference FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>status ( <a href="https://hl7.org/fhir/R4/datatypes.html#code" target="_blank">code</a> )</td>
      <td>Always returns "current".</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>type ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>
        <p>Refer to below mentioned LOINC code, which need to be sent if it is mapped with question template/question.</p>
        <ul>
          <li>When ''18748-4'' Then ''Imaging Narrative''</li>
          <li>When ''11526-1'' Then ''Pathology Narrative''</li>
          <li>When ''11502-2'' Then ''Laboratory Narrative''</li>
          <li>When ''11488-4'' Then ''Consultation Note''</li>
          <li>When ''11506-3'' Then ''Progress Note''</li>
          <li>When ''34117-2'' Then ''History & Physical Note''</li>
          <li>When ""28570-0"" Then ""Procedure note</li>
        </ul>
      </td>
      <td>Required</td>
    </tr>
     <tr>
      <td>category ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Categorization of the document. For example, "clinical-note".</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>subject( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>The patient that is the subject of the note.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>date ( <a href="https://hl7.org/fhir/R4/datatypes.html#instant" target="_blank">instant</a> )</td>
      <td>When this document reference was created.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>author ( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Who is the author? (Reference id of the practitioner resource)</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>custodian ( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Reference id of the organization resource.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>content ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>Where to access the document.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>context ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>The context of the document content.</td>
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