---
title: Read
description: A diagnostic report is the set of information that is typically provided by a diagnostic service when investigations are complete. The information includes a mix of atomic results, text reports, images, and codes.

toc:
  depth: 2
---

# Diagnostic Report

### Description

A diagnostic report is the set of information that is typically provided by a diagnostic service when investigations are complete. The information includes a mix of atomic results, text reports, images, and codes. The mix varies depending on the nature of the diagnostic procedure, and sometimes on the nature of the outcomes for a particular investigation.


<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Read
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/mps/fhir/R4/DiagnosticReport/DiagnosticReport-L-448-173</a>

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-diagnosticreport-note.html" target="_blank">DiagnosticReport resource</a>.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>


### Response
::CodeBlock
```json
{
  "resourceType": "DiagnosticReport",
  "id": "DiagnosticReport-L-448-173",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab"
    ]
  },
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
          "code": "LAB",
          "display": "laboratory"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "24357-6",
        "display": "URINALYSIS,MACROSCOPIC"
      }
    ]
  },
  "subject": {
    "reference": "Patient/85"
  },
  "encounter": {
    "reference": "Encounter/Encounter-112-385"
  },
  "effectiveDateTime": "2022-09-26T00:00:00+00:00",
  "issued": "2022-09-26T06:21:55.400+00:00",
  "performer": [
    {
      "reference": "Organization/Organization-1"
    }
  ],
  "result": [
    {
      "reference": "Observation/Observation-lab-448-173-385"
    },
    {
      "reference": "Observation/Observation-lab-448-173-388"
    },
    {
      "reference": "Observation/Observation-lab-448-173-389"
    },
    {
      "reference": "Observation/Observation-lab-448-173-390"
    },
    {
      "reference": "Observation/Observation-lab-448-173-393"
    },
    {
      "reference": "Observation/Observation-lab-448-173-394"
    },
    {
      "reference": "Observation/Observation-lab-448-173-396"
    }
  ],
  "presentedForm": [
    {
      "contentType": "text/plain",
      "data": "Q2pFNU5URXRNRGt0TURRS0NpTWdRMmhwWldZZ1EyOXRjR3hoYVc1MENrNXZJR052YlhCc1lXbHVkSE11Q2dvaklFaHBjM1J2Y25rZ2IyWWdVSEpsYzJWdWRDQkpiR3h1WlhOekNreDFZMmxsYmpRd09DQnBjeUJoSURFeElIbGxZWEl0YjJ4a0lHNXZiaTFvYVhOd1lXNXBZeUIzYUdsMFpTQnRZV3hsTGlCUVlYUnBaVzUwSUdoaGN5QmhJR2hwYzNSdmNua2diMllnYjNScGRHbHpJRzFsWkdsaExDQmhZM1YwWlNCMmFYSmhiQ0J3YUdGeWVXNW5hWFJwY3lBb1pHbHpiM0prWlhJcExDQm1jbUZqZEhWeVpTQnZaaUJqYkdGMmFXTnNaUzRLQ2lNZ1UyOWphV0ZzSUVocGMzUnZjbmtLSUZCaGRHbGxiblFnYUdGeklHNWxkbVZ5SUhOdGIydGxaQ0JoYm1RZ2FYTWdZVzRnWVd4amIyaHZiR2xqTGdvS1VHRjBhV1Z1ZENCamIyMWxjeUJtY205dElHRWdhR2xuYUNCemIyTnBiMlZqYjI1dmJXbGpJR0poWTJ0bmNtOTFibVF1SUZCaGRHbGxiblFnWTNWeWNtVnVkR3g1SUdoaGN5QkNiSFZsSUVOeWIzTnpJRUpzZFdVZ1UyaHBaV3hrTGdvS0l5QkJiR3hsY21kcFpYTUtUbThnUzI1dmQyNGdRV3hzWlhKbmFXVnpMZ29LSXlCTlpXUnBZMkYwYVc5dWN3cHdaVzVwWTJsc2JHbHVJR2NnTXpjMUlHMW5MMjFzSUdsdWFtVmpkR0ZpYkdVZ2MyOXNkWFJwYjI0N0lHRnpjR2x5YVc0Z09ERWdiV2NnYjNKaGJDQjBZV0pzWlhRS0NpTWdRWE56WlhOemJXVnVkQ0JoYm1RZ1VHeGhiZ3BRWVhScFpXNTBJR2x6SUhCeVpYTmxiblJwYm1jZ2QybDBhQ0IyYVhKaGJDQnphVzUxYzJsMGFYTWdLR1JwYzI5eVpHVnlLUzRnQ2dvakl5QlFiR0Z1Q2dwVWFHVWdabTlzYkc5M2FXNW5JSEJ5YjJObFpIVnlaWE1nZDJWeVpTQmpiMjVrZFdOMFpXUTZDaTBnYldWa2FXTmhkR2x2YmlCeVpXTnZibU5wYkdsaGRHbHZiaUFvY0hKdlkyVmtkWEpsS1FwVWFHVWdjR0YwYVdWdWRDQjNZWE1nY0hKbGMyTnlhV0psWkNCMGFHVWdabTlzYkc5M2FXNW5JRzFsWkdsallYUnBiMjV6T2dvdElHRnRiM2hwWTJsc2JHbHVJREkxTUNCdFp5QXZJR05zWVhaMWJHRnVZWFJsSURFeU5TQnRaeUJ2Y21Gc0lIUmhZbXhsZEFv"
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-patient.html" target="_blank">DiagnosticReport</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-diagnosticreport-note.html" target="_blank">DiagnosticReport</a> resource.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Diagnostic Report Resource Content:

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
      <td>status ( <a href="https://hl7.org/fhir/R4/datatypes.html#code" target="_blank">code</a> )</td>
      <td>The status of the report.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The DiagnosticReport FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>category ( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>The service category. This can be LAB, Imaging or any other category type supported by IMS.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>code( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>Code of diagnostic report.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>subject( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Reference to a patient resource for whom the diagnostic report is relevant.</td>
      <td>Required</td>
    </tr>
     <tr>
      <td>encounter( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Reference to an encounter resource for whom the diagnostic report is relevant.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>issued ( <a href="https://hl7.org/fhir/R4/datatypes.html#instant" target="_blank">instant</a> )</td>
      <td>Date time when the report was available.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>performer ( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Organization resource id.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>result ( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Observation resource id.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>presentedForm ( <a href="https://build.fhir.org/datatypes.html" target="_blank">Attachment</a> )</td>
      <td>An attachment in the form of embedded format (base64) or URL.</td>
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