---
title: Search
description: The FHIR device resource describes information on durable , manufactured medical items.Read interactions begin when a client has previously established a relationship, typically when following a reference to that resource from another resource or by querying for devices through the search interaction.

toc:
  depth: 2
---

# Device

### Description

The FHIR device resource describes information on durable , manufactured medical items.Read interactions begin when a client has previously established a relationship, typically when following a reference to that resource from another resource or by querying for devices through the search interaction.


<hr style="width: 100%; color: #f7f7f7; margin-bottom:2rem;">

#### Interaction:

### Search
### Request

URL - <a href="https://172.26.60.114:2525/mps/fhir/R4/AllergyIntolerance/AllergyIntolerance-482" target="_blank">/fhir/R4/Device/Device-4</a>

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
      <td>The FHIR ID of the <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-implantable-device.html" target="_blank">device resource</a>.</td>
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
  "id": "d39170ac-18a2-43c1-b554-9fa0a242a556",
  "meta": {
    "lastUpdated": "2022-11-21T07:59:17.827+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://172.26.60.114:2525/mps/fhir/R4/Device?_id=Device-4"
    }
  ],
  "entry": [
    {
      "resource": {
        "resourceType": "Device",
        "id": "Device-4",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device"
          ]
        },
        "udiCarrier": [
          {
            "deviceIdentifier": "00643169007222",
            "carrierHRF": "(01)00643169007222(17)160128(21)BLC200461H"
          }
        ],
        "distinctIdentifier": "NA",
        "manufacturer": "MEDTRONIC, INC.",
        "manufactureDate": "2011-01-28T00:00:00+00:00",
        "expirationDate": "2016-01-28T00:00:00+00:00",
        "lotNumber": "LT6594",
        "serialNumber": "BLC200461H",
        "modelNumber": "DTBA1QQ",
        "type": {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "code",
              "display": "Cardiac resynchronization therapy implantable defibrillator"
            }
          ],
          "text": "Cardiac resynchronization therapy implantable defibrillator"
        },
        "patient": {
          "reference": "Patient/85"
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
      <td><a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-allergyintolerance.html" target="_blank">Device</a></td>
      <td>A single instance of <a href="https://hl7.org/fhir/us/core/STU3.1.1/StructureDefinition-us-core-implantable-device.html" target="_blank">device</a> resource.</td>
      <td>Required</td>
    </tr>
  </tbody>
</table>

#### Medication Request  Resource Content:

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
      <td>udiCarrier ( <a href="https://hl7.org/fhir/R4/datatypes.html#BackboneElement" target="_blank">BackboneElement</a> )</td>
      <td>
        <p>The unique device identification (UDI) is a unique numeric or alphanumeric code related to a medical device. It allows for a clear and unambiguous identification of specific devices on the market and facilitates their traceability. The UDI comprises the following components</p>
        <ul>
            <li>a device identifier (UDI-DI)</li>
            <li>a production identifier (UDI-PI)</li>
        </ul>
        <p>These provide access to useful information about the device.</p>
        <p>The specificity of the UDI</p>
        <ul>
          <li>makes traceability of devices more efficient</li>
          <li>allows easier recall of devices</li>
          <li>combats counterfeiting</li>
          <li>improves patient safety</li>
        </ul>
        <p>The UDI will be an addition to, not a substitute for, the existing labeling requirements for medical devices.</p>
      </td>
      <td>Required</td>
    </tr>
    <tr>
      <td>Id ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>The MedicationRequest FHIR ID.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>distinctIdentifier ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>Distinct identification code.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>manufacturer ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>Goal is achieved or not.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>manufactureDate ( <a href="https://hl7.org/fhir/R4/datatypes.html#dateTime" target="_blank">dateTime</a> )</td>
      <td>Date of device manufacture.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>expirationDate ( <a href="https://hl7.org/fhir/R4/datatypes.html#dateTime">dateTime</a> )</td>
      <td>Device expiration date.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>lotNumber ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>Device lot number.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>serialNumber ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>Device serial number.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>modelNumber ( <a href="https://hl7.org/fhir/search.html#string" target="_blank">string</a> )</td>
      <td>Device model number.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>type( <a href="https://hl7.org/fhir/datatypes.html#codeableconcept" target="_blank">CodeableConcept</a> )</td>
      <td>A SNOMED or other device code.</td>
      <td>Required</td>
    </tr>
    <tr>
      <td>patient( <a href="https://hl7.org/fhir/R4/references.html" target="_blank">Reference</a> )</td>
      <td>Patient identifier.</td>
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