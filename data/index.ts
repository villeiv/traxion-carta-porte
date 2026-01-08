const initialData = {
    "stages": [
        {"id": "tms", "name": "TMS"},
        {"id": "mule", "name": "MuleSoft"},
        {"id": "sap", "name": "SAP Prod"},
        {"id": "pac", "name": "PAC"},
        {"id": "sat", "name": "SAT"}
    ],
    "trip_stages": [
        {
            "id": 1,
            "trip_id": 1,
            "name": "FST-001",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-08T12:00:00Z",
            "stage_id": "tms",
            "status": "completed",
            "requirements": [
                { "label": "Validación de licencia del conductor", "status": "fulfilled" },
                { "label": "Validación de documentación de la unidad", "status": "fulfilled" },
                { "label": "Verificación de datos del viaje (origen/destino)", "status": "fulfilled" },
                { "label": "Confirmación de disponibilidad de operador", "status": "fulfilled" },
                { "label": "Registro de unidad en plataforma TMS", "status": "fulfilled" }
            ]
        },
        {
            "id": 2,
            "trip_id": 2,
            "name": "FST-002",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-09T13:00:00Z",
            "stage_id": "tms",
            "status": "blocked",
            "requirements": [
                { "label": "Validación de licencia del conductor vencida", "status": "failed" },
                { "label": "Validación de documentación de la unidad", "status": "fulfilled" },
                { "label": "Verificación de datos del viaje (origen/destino)", "status": "fulfilled" },
                { "label": "Confirmación de disponibilidad de operador", "status": "fulfilled" },
                { "label": "Registro de unidad en plataforma TMS", "status": "fulfilled" }
            ]
        },
        {
            "id": 3,
            "trip_id": 4,
            "name": "AZ-101",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-10T07:30:00Z",
            "stage_id": "tms",
            "status": "completed",
            "requirements": [
                { "label": "Validación de licencia del conductor", "status": "fulfilled" },
                { "label": "Validación de documentación de la unidad", "status": "fulfilled" },
                { "label": "Verificación de datos del viaje (origen/destino)", "status": "fulfilled" },
                { "label": "Confirmación de disponibilidad de operador", "status": "fulfilled" },
                { "label": "Registro de unidad en plataforma TMS", "status": "fulfilled" }
            ]
        },
        {
            "id": 4,
            "trip_id": 7,
            "name": "ROC-201",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-11T14:00:00Z",
            "stage_id": "tms",
            "status": "completed",
            "requirements": [
                { "label": "Validación de licencia del conductor", "status": "fulfilled" },
                { "label": "Validación de documentación de la unidad", "status": "fulfilled" },
                { "label": "Verificación de datos del viaje (origen/destino)", "status": "fulfilled" },
                { "label": "Confirmación de disponibilidad de operador", "status": "fulfilled" },
                { "label": "Registro de unidad en plataforma TMS", "status": "fulfilled" }
            ]
        },
        {
            "id": 5,
            "trip_id": 8,
            "name": "ROC-202",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-12T09:00:00Z",
            "stage_id": "tms",
            "status": "completed",
            "requirements": [
                { "label": "Validación de licencia del conductor", "status": "fulfilled" },
                { "label": "Validación de documentación de la unidad", "status": "fulfilled" },
                { "label": "Verificación de datos del viaje (origen/destino)", "status": "fulfilled" },
                { "label": "Confirmación de disponibilidad de operador", "status": "fulfilled" },
                { "label": "Registro de unidad en plataforma TMS", "status": "fulfilled" }
            ]
        },
        {
            "id": 6,
            "trip_id": 3,
            "name": "FST-003",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-09T06:00:00Z",
            "stage_id": "tms",
            "status": "completed",
            "requirements": [
                { "label": "Validación de licencia del conductor", "status": "fulfilled" },
                { "label": "Validación de documentación de la unidad", "status": "fulfilled" },
                { "label": "Verificación de datos del viaje (origen/destino)", "status": "fulfilled" },
                { "label": "Confirmación de disponibilidad de operador", "status": "fulfilled" },
                { "label": "Registro de unidad en plataforma TMS", "status": "fulfilled" }
            ]
        },
        {
            "id": 7,
            "trip_id": 3,
            "name": "FST-003",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-09T06:00:00Z",
            "stage_id": "mule",
            "status": "completed",
            "requirements": [
                { "label": "Integración con ERP confirmada", "status": "fulfilled" },
                { "label": "Datos del viaje enviados a MuleSoft", "status": "fulfilled" },
                { "label": "Synchronización de estatus con sistemas externos", "status": "fulfilled" },
                { "label": "Validación de estructura del payload", "status": "fulfilled" }
            ]
        },
        {
            "id": 8,
            "trip_id": 3,
            "name": "FST-003",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-09T06:00:00Z",
            "stage_id": "sap",
            "status": "completed",
            "requirements": [
                { "label": "Generación de orden de transporte en SAP", "status": "fulfilled" },
                { "label": "Validación de datos de cliente en SAP", "status": "fulfilled" },
                { "label": "Confirmación de registro contable", "status": "fulfilled" },
                { "label": "Creación de documento de salida (si aplica)", "status": "fulfilled" }
            ]
        },
        {
            "id": 9,
            "trip_id": 3,
            "name": "FST-003",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-09T06:00:00Z",
            "stage_id": "pac",
            "status": "in_progress",
            "requirements": [
                { "label": "Validación de RFC emisor y receptor", "status": "fulfilled" },
                { "label": "Timbrado preliminar de CFDI en proceso en PAC", "status": "in_progress" },
                { "label": "Validación de uso CFDI", "status": "fulfilled" },
                { "label": "Confirmación de estructura XML", "status": "fulfilled" }
            ]
        },
        {
            "id": 10,
            "trip_id": 5,
            "name": "AZ-102",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-08T08:00:00Z",
            "stage_id": "tms",
            "status": "completed",
            "requirements": [
                { "label": "Validación de licencia del conductor", "status": "fulfilled" },
                { "label": "Validación de documentación de la unidad", "status": "fulfilled" },
                { "label": "Verificación de datos del viaje (origen/destino)", "status": "fulfilled" },
                { "label": "Confirmación de disponibilidad de operador", "status": "fulfilled" },
                { "label": "Registro de unidad en plataforma TMS", "status": "fulfilled" }
            ]
        },
        {
            "id": 11,
            "trip_id": 5,
            "name": "AZ-102",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-08T08:00:00Z",
            "stage_id": "mule",
            "status": "completed",
            "requirements": [
                { "label": "Integración con ERP confirmada", "status": "fulfilled" },
                { "label": "Datos del viaje enviados a MuleSoft", "status": "fulfilled" },
                { "label": "Synchronización de estatus con sistemas externos", "status": "fulfilled" },
                { "label": "Validación de estructura del payload", "status": "fulfilled" }
            ]
        },
        {
            "id": 12,
            "trip_id": 5,
            "name": "AZ-102",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-08T08:00:00Z",
            "stage_id": "sap",
            "status": "completed",
            "requirements": [
                { "label": "Generación de orden de transporte en SAP", "status": "fulfilled" },
                { "label": "Validación de datos de cliente en SAP", "status": "fulfilled" },
                { "label": "Confirmación de registro contable", "status": "fulfilled" },
                { "label": "Creación de documento de salida (si aplica)", "status": "fulfilled" }
            ]
        },
        {
            "id": 13,
            "trip_id": 5,
            "name": "AZ-102",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-08T08:00:00Z",
            "stage_id": "pac",
            "status": "blocked",
            "requirements": [
                { "label": "Validación de RFC emisor y receptor", "status": "fulfilled" },
                { "label": "Timbrado preliminar de CFDI rechazado por PAC", "status": "failed" },
                { "label": "Validación de uso CFDI", "status": "fulfilled" },
                { "label": "Confirmación de estructura XML", "status": "fulfilled" }
            ]
        },
        {
            "id": 14,
            "trip_id": 9,
            "name": "ROC-203",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-09T15:00:00Z",
            "stage_id": "tms",
            "status": "completed",
            "requirements": [
                { "label": "Validación de licencia del conductor", "status": "fulfilled" },
                { "label": "Validación de documentación de la unidad", "status": "fulfilled" },
                { "label": "Verificación de datos del viaje (origen/destino)", "status": "fulfilled" },
                { "label": "Confirmación de disponibilidad de operador", "status": "fulfilled" },
                { "label": "Registro de unidad en plataforma TMS", "status": "fulfilled" }
            ]
        },
        {
            "id": 15,
            "trip_id": 9,
            "name": "ROC-203",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-09T15:00:00Z",
            "stage_id": "mule",
            "status": "completed",
            "requirements": [
                { "label": "Integración con ERP confirmada", "status": "fulfilled" },
                { "label": "Datos del viaje enviados a MuleSoft", "status": "fulfilled" },
                { "label": "Synchronización de estatus con sistemas externos", "status": "fulfilled" },
                { "label": "Validación de estructura del payload", "status": "fulfilled" }
            ]
        },
        {
            "id": 16,
            "trip_id": 9,
            "name": "ROC-203",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-09T15:00:00Z",
            "stage_id": "sap",
            "status": "completed",
            "requirements": [
                { "label": "Generación de orden de transporte en SAP", "status": "fulfilled" },
                { "label": "Validación de datos de cliente en SAP", "status": "fulfilled" },
                { "label": "Confirmación de registro contable", "status": "fulfilled" },
                { "label": "Creación de documento de salida (si aplica)", "status": "fulfilled" }
            ]
        },
        {
            "id": 17,
            "trip_id": 9,
            "name": "ROC-203",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-09T15:00:00Z",
            "stage_id": "pac",
            "status": "in_progress",
            "requirements": [
                { "label": "Validación de RFC emisor y receptor", "status": "pending" },
                { "label": "Timbrado preliminar de CFDI pendiente en PAC", "status": "pending" },
                { "label": "Validación de uso CFDI", "status": "fulfilled" },
                { "label": "Confirmación de estructura XML", "status": "fulfilled" }
            ]
        },
        {
            "id": 18,
            "trip_id": 6,
            "name": "AZ-103",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-11T09:00:00Z",
            "stage_id": "tms",
            "status": "completed",
            "requirements": [
                { "label": "Validación de licencia del conductor", "status": "fulfilled" },
                { "label": "Validación de documentación de la unidad", "status": "fulfilled" },
                { "label": "Verificación de datos del viaje (origen/destino)", "status": "fulfilled" },
                { "label": "Confirmación de disponibilidad de operador", "status": "fulfilled" },
                { "label": "Registro de unidad en plataforma TMS", "status": "fulfilled" }
            ]
        },
        {
            "id": 19,
            "trip_id": 6,
            "name": "AZ-103",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-11T09:00:00Z",
            "stage_id": "mule",
            "status": "completed",
            "requirements": [
                { "label": "Integración con ERP confirmada", "status": "fulfilled" },
                { "label": "Datos del viaje enviados a MuleSoft", "status": "fulfilled" },
                { "label": "Synchronización de estatus con sistemas externos", "status": "fulfilled" },
                { "label": "Validación de estructura del payload", "status": "fulfilled" }
            ]
        },
        {
            "id": 20,
            "trip_id": 6,
            "name": "AZ-103",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-11T09:00:00Z",
            "stage_id": "sap",
            "status": "completed",
            "requirements": [
                { "label": "Generación de orden de transporte en SAP", "status": "fulfilled" },
                { "label": "Validación de datos de cliente en SAP", "status": "fulfilled" },
                { "label": "Confirmación de registro contable", "status": "fulfilled" },
                { "label": "Creación de documento de salida (si aplica)", "status": "fulfilled" }
            ]
        },
        {
            "id": 21,
            "trip_id": 6,
            "name": "AZ-103",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-11T09:00:00Z",
            "stage_id": "pac",
            "status": "completed",
            "requirements": [
                { "label": "Validación de RFC emisor y receptor", "status": "fulfilled" },
                { "label": "Timbrado preliminar de CFDI", "status": "fulfilled" },
                { "label": "Validación de uso CFDI", "status": "fulfilled" },
                { "label": "Confirmación de estructura XML", "status": "fulfilled" }
            ]
        },
        {
            "id": 22,
            "trip_id": 6,
            "name": "AZ-103",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-11T09:00:00Z",
            "stage_id": "sat",
            "status": "completed",
            "requirements": [
                { "label": "Validación con SAT", "status": "fulfilled" },
                { "label": "Certificado de timbrado SAT", "status": "fulfilled" },
                { "label": "Validación de cadena original", "status": "fulfilled" },
                { "label": "Confirmación de sello digital válido", "status": "fulfilled" }
            ]
        },
        {
            "id": 23,
            "trip_id": 10,
            "name": "ROC-204",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-08T16:00:00Z",
            "stage_id": "tms",
            "status": "completed",
            "requirements": [
                { "label": "Validación de licencia del conductor", "status": "fulfilled" },
                { "label": "Validación de documentación de la unidad", "status": "fulfilled" },
                { "label": "Verificación de datos del viaje (origen/destino)", "status": "fulfilled" },
                { "label": "Confirmación de disponibilidad de operador", "status": "fulfilled" },
                { "label": "Registro de unidad en plataforma TMS", "status": "fulfilled" }
            ]
        },
        {
            "id": 24,
            "trip_id": 10,
            "name": "ROC-204",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-08T16:00:00Z",
            "stage_id": "mule",
            "status": "completed",
            "requirements": [
                { "label": "Integración con ERP confirmada", "status": "fulfilled" },
                { "label": "Datos del viaje enviados a MuleSoft", "status": "fulfilled" },
                { "label": "Synchronización de estatus con sistemas externos", "status": "fulfilled" },
                { "label": "Validación de estructura del payload", "status": "fulfilled" }
            ]
        },
        {
            "id": 25,
            "trip_id": 10,
            "name": "ROC-204",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-08T16:00:00Z",
            "stage_id": "sap",
            "status": "completed",
            "requirements": [
                { "label": "Generación de orden de transporte en SAP", "status": "fulfilled" },
                { "label": "Validación de datos de cliente en SAP", "status": "fulfilled" },
                { "label": "Confirmación de registro contable", "status": "fulfilled" },
                { "label": "Creación de documento de salida (si aplica)", "status": "fulfilled" }
            ]
        },
        {
            "id": 26,
            "trip_id": 10,
            "name": "ROC-204",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-08T16:00:00Z",
            "stage_id": "pac",
            "status": "completed",
            "requirements": [
                { "label": "Validación de RFC emisor y receptor", "status": "fulfilled" },
                { "label": "Timbrado preliminar de CFDI", "status": "fulfilled" },
                { "label": "Validación de uso CFDI", "status": "fulfilled" },
                { "label": "Confirmación de estructura XML", "status": "fulfilled" }
            ]
        },
        {
            "id": 27,
            "trip_id": 10,
            "name": "ROC-204",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-08T16:00:00Z",
            "stage_id": "sat",
            "status": "completed",
            "requirements": [
                { "label": "Validación con SAT", "status": "fulfilled" },
                { "label": "Certificado de timbrado SAT", "status": "fulfilled" },
                { "label": "Validación de cadena original", "status": "fulfilled" },
                { "label": "Confirmación de sello digital válido", "status": "fulfilled" }
            ]
        }
    ],
    logs: [
        {
            "trip_id": 1,
            "trip_name": "FST-001",
            "stages": [
                {
                    "id": "tms",
                    "name": "TMS",
                    "events": [
                        {
                            "timestamp": "2025-12-08T11:08:12",
                            "status": "success",
                            "message": "Viaje FST-001 creado. Cliente: FAST. Registro y validaciones operativas iniciadas."
                        },
                        {
                            "timestamp": "2025-12-08T11:34:00",
                            "status": "success",
                            "message": "Validaciones TMS completadas para FST-001. Envío a MuleSoft habilitado."
                        }
                    ]
                },
                { "id": "mulesoft", "name": "MuleSoft", "events": [] },
                { "id": "sap_prod", "name": "SAP Prod", "events": [] },
                { "id": "pac", "name": "PAC", "events": [] },
                { "id": "sat", "name": "SAT", "events": [] }
            ]
        },
        {
            "trip_id": 2,
            "trip_name": "FST-002",
            "stages": [
                {
                    "id": "tms",
                    "name": "TMS",
                    "events": [
                        {
                            "timestamp": "2025-12-09T10:22:11",
                            "status": "success",
                            "message": "Viaje FST-002 creado. Cliente: FAST. Registro y validaciones operativas iniciadas."
                        },
                        {
                            "timestamp": "2025-12-10T16:05:00",
                            "status": "error",
                            "message": "Bloqueo en TMS para FST-002. Motivo: licencia del conductor vencida."
                        }
                    ]
                },
                { "id": "mulesoft", "name": "MuleSoft", "events": [] },
                { "id": "sap_prod", "name": "SAP Prod", "events": [] },
                { "id": "pac", "name": "PAC", "events": [] },
                { "id": "sat", "name": "SAT", "events": [] }
            ]
        },
        {
            "trip_id": 3,
            "trip_name": "FST-003",
            "stages": [
                {
                    "id": "tms",
                    "name": "TMS",
                    "events": [
                        {
                            "timestamp": "2025-12-09T05:12:40",
                            "status": "success",
                            "message": "Viaje FST-003 creado. Cliente: FAST. Registro y validaciones operativas iniciadas."
                        },
                        {
                            "timestamp": "2025-12-09T05:48:00",
                            "status": "success",
                            "message": "Validaciones TMS completadas para FST-003. Envío a MuleSoft habilitado."
                        }
                    ]
                },
                {
                    "id": "mulesoft",
                    "name": "MuleSoft",
                    "events": [
                        {
                            "timestamp": "2025-12-09T10:08:05",
                            "status": "success",
                            "message": "Shipment FST-003 recibido desde TMS. Correlation ID: CORR-FST003-9A21."
                        },
                        {
                            "timestamp": "2025-12-09T10:22:19",
                            "status": "success",
                            "message": "Validación de payload exitosa para FST-003. Generando IDOC para SAP."
                        },
                        {
                            "timestamp": "2025-12-09T10:41:58",
                            "status": "success",
                            "message": "IDOC generado y enviado a SAP Prod. IDOC: 80031004567."
                        }
                    ]
                },
                {
                    "id": "sap_prod",
                    "name": "SAP Prod",
                    "events": [
                        {
                            "timestamp": "2025-12-10T01:18:02",
                            "status": "success",
                            "message": "IDOC 80031004567 recibido en SAP Prod. Iniciando proceso de orden/factura para FST-003."
                        },
                        {
                            "timestamp": "2025-12-10T02:05:00",
                            "status": "success",
                            "message": "Proceso SAP completado para FST-003. Listo para timbrado preliminar (PAC)."
                        }
                    ]
                },
                {
                    "id": "pac",
                    "name": "PAC",
                    "events": [
                        {
                            "timestamp": "2025-12-10T18:20:00",
                            "status": "success",
                            "message": "Solicitud de timbrado preliminar recibida para FST-003. Ref: PAC-REQ-FST003-7712."
                        },
                        {
                            "timestamp": "2025-12-11T03:30:00",
                            "status": "in_progress",
                            "message": "Timbrado preliminar en proceso para FST-003."
                        }
                    ]
                },
                { "id": "sat", "name": "SAT", "events": [] }
            ]
        },
        {
            "trip_id": 4,
            "trip_name": "AZ-101",
            "stages": [
                {
                    "id": "tms",
                    "name": "TMS",
                    "events": [
                        {
                            "timestamp": "2025-12-10T06:38:55",
                            "status": "success",
                            "message": "Viaje AZ-101 creado. Cliente: Amazon. Registro y validaciones operativas iniciadas."
                        },
                        {
                            "timestamp": "2025-12-10T07:05:00",
                            "status": "success",
                            "message": "Validaciones TMS completadas para AZ-101. Envío a MuleSoft habilitado."
                        }
                    ]
                },
                { "id": "mulesoft", "name": "MuleSoft", "events": [] },
                { "id": "sap_prod", "name": "SAP Prod", "events": [] },
                { "id": "pac", "name": "PAC", "events": [] },
                { "id": "sat", "name": "SAT", "events": [] }
            ]
        },
        {
            "trip_id": 5,
            "trip_name": "AZ-102",
            "stages": [
                {
                    "id": "tms",
                    "name": "TMS",
                    "events": [
                        {
                            "timestamp": "2025-12-08T06:18:40",
                            "status": "success",
                            "message": "Viaje AZ-102 creado. Cliente: Amazon. Registro y validaciones operativas iniciadas."
                        },
                        {
                            "timestamp": "2025-12-08T06:55:00",
                            "status": "success",
                            "message": "Validaciones TMS completadas para AZ-102. Envío a MuleSoft habilitado."
                        }
                    ]
                },
                {
                    "id": "mulesoft",
                    "name": "MuleSoft",
                    "events": [
                        {
                            "timestamp": "2025-12-08T13:12:02",
                            "status": "success",
                            "message": "Shipment AZ-102 recibido desde TMS. Correlation ID: CORR-AZ102-3F0C."
                        },
                        {
                            "timestamp": "2025-12-08T13:28:10",
                            "status": "success",
                            "message": "Validación de payload exitosa para AZ-102. Generando IDOC para SAP."
                        },
                        {
                            "timestamp": "2025-12-08T13:59:44",
                            "status": "success",
                            "message": "IDOC generado y enviado a SAP Prod. IDOC: 80045590112."
                        }
                    ]
                },
                {
                    "id": "sap_prod",
                    "name": "SAP Prod",
                    "events": [
                        {
                            "timestamp": "2025-12-09T02:32:10",
                            "status": "success",
                            "message": "IDOC 80045590112 recibido en SAP Prod. Iniciando proceso de orden/factura para AZ-102."
                        },
                        {
                            "timestamp": "2025-12-09T03:05:00",
                            "status": "success",
                            "message": "Proceso SAP completado para AZ-102. Listo para timbrado preliminar (PAC)."
                        }
                    ]
                },
                {
                    "id": "pac",
                    "name": "PAC",
                    "events": [
                        {
                            "timestamp": "2025-12-09T18:12:44",
                            "status": "success",
                            "message": "Solicitud de timbrado preliminar recibida para AZ-102. Ref: PAC-REQ-AZ102-9B18."
                        },
                        {
                            "timestamp": "2025-12-10T09:40:00",
                            "status": "error",
                            "message": "Timbrado preliminar rechazado para AZ-102. Motivo: rechazo por PAC."
                        }
                    ]
                },
                { "id": "sat", "name": "SAT", "events": [] }
            ]
        },
        {
            "trip_id": 6,
            "trip_name": "AZ-103",
            "stages": [
                {
                    "id": "tms",
                    "name": "TMS",
                    "events": [
                        {
                            "timestamp": "2025-12-11T07:53:18",
                            "status": "success",
                            "message": "Viaje AZ-103 creado. Cliente: Amazon. Registro y validaciones operativas iniciadas."
                        },
                        {
                            "timestamp": "2025-12-11T08:30:00",
                            "status": "success",
                            "message": "Validaciones TMS completadas para AZ-103. Envío a MuleSoft habilitado."
                        }
                    ]
                },
                {
                    "id": "mulesoft",
                    "name": "MuleSoft",
                    "events": [
                        {
                            "timestamp": "2025-12-11T13:22:12",
                            "status": "success",
                            "message": "Shipment AZ-103 recibido desde TMS. Correlation ID: CORR-AZ103-1D7A."
                        },
                        {
                            "timestamp": "2025-12-11T13:41:55",
                            "status": "success",
                            "message": "Validación de payload exitosa para AZ-103. Generando IDOC para SAP."
                        },
                        {
                            "timestamp": "2025-12-11T14:05:00",
                            "status": "success",
                            "message": "IDOC generado y enviado a SAP Prod. IDOC: 80061234001."
                        }
                    ]
                },
                {
                    "id": "sap_prod",
                    "name": "SAP Prod",
                    "events": [
                        {
                            "timestamp": "2025-12-11T18:13:40",
                            "status": "success",
                            "message": "IDOC 80061234001 recibido en SAP Prod. Iniciando proceso de orden/factura para AZ-103."
                        },
                        {
                            "timestamp": "2025-12-11T18:55:00",
                            "status": "success",
                            "message": "Proceso SAP completado para AZ-103. Listo para timbrado preliminar (PAC)."
                        }
                    ]
                },
                {
                    "id": "pac",
                    "name": "PAC",
                    "events": [
                        {
                            "timestamp": "2025-12-11T22:10:22",
                            "status": "success",
                            "message": "Solicitud de timbrado preliminar recibida para AZ-103. Ref: PAC-REQ-AZ103-4C22."
                        },
                        {
                            "timestamp": "2025-12-11T23:15:00",
                            "status": "success",
                            "message": "Timbrado preliminar exitoso para AZ-103. UUID: 2b4b1df0-7d8a-4b9e-9a0a-8c1f63e5c2d1."
                        }
                    ]
                },
                {
                    "id": "sat",
                    "name": "SAT",
                    "events": [
                        {
                            "timestamp": "2025-12-12T00:08:12",
                            "status": "success",
                            "message": "Validación SAT iniciada para AZ-103."
                        },
                        {
                            "timestamp": "2025-12-12T00:28:00",
                            "status": "success",
                            "message": "Validación SAT exitosa para AZ-103. CFDI confirmado."
                        }
                    ]
                }
            ]
        },
        {
            "trip_id": 7,
            "trip_name": "ROC-201",
            "stages": [
                {
                    "id": "tms",
                    "name": "TMS",
                    "events": [
                        {
                            "timestamp": "2025-12-11T12:32:08",
                            "status": "success",
                            "message": "Viaje ROC-201 creado. Cliente: Roche. Registro y validaciones operativas iniciadas."
                        },
                        {
                            "timestamp": "2025-12-11T13:02:00",
                            "status": "success",
                            "message": "Validaciones TMS completadas para ROC-201. Envío a MuleSoft habilitado."
                        }
                    ]
                },
                { "id": "mulesoft", "name": "MuleSoft", "events": [] },
                { "id": "sap_prod", "name": "SAP Prod", "events": [] },
                { "id": "pac", "name": "PAC", "events": [] },
                { "id": "sat", "name": "SAT", "events": [] }
            ]
        },
        {
            "trip_id": 8,
            "trip_name": "ROC-202",
            "stages": [
                {
                    "id": "tms",
                    "name": "TMS",
                    "events": [
                        {
                            "timestamp": "2025-12-12T07:08:41",
                            "status": "success",
                            "message": "Viaje ROC-202 creado. Cliente: Roche. Registro y validaciones operativas iniciadas."
                        },
                        {
                            "timestamp": "2025-12-12T07:55:00",
                            "status": "success",
                            "message": "Validaciones TMS completadas para ROC-202. Envío a MuleSoft habilitado."
                        }
                    ]
                },
                { "id": "mulesoft", "name": "MuleSoft", "events": [] },
                { "id": "sap_prod", "name": "SAP Prod", "events": [] },
                { "id": "pac", "name": "PAC", "events": [] },
                { "id": "sat", "name": "SAT", "events": [] }
            ]
        },
        {
            "trip_id": 9,
            "trip_name": "ROC-203",
            "stages": [
                {
                    "id": "tms",
                    "name": "TMS",
                    "events": [
                        {
                            "timestamp": "2025-12-09T12:02:10",
                            "status": "success",
                            "message": "Viaje ROC-203 creado. Cliente: Roche. Registro y validaciones operativas iniciadas."
                        },
                        {
                            "timestamp": "2025-12-09T12:44:00",
                            "status": "success",
                            "message": "Validaciones TMS completadas para ROC-203. Envío a MuleSoft habilitado."
                        }
                    ]
                },
                {
                    "id": "mulesoft",
                    "name": "MuleSoft",
                    "events": [
                        {
                            "timestamp": "2025-12-10T06:22:18",
                            "status": "success",
                            "message": "Shipment ROC-203 recibido desde TMS. Correlation ID: CORR-ROC203-6E9D."
                        },
                        {
                            "timestamp": "2025-12-10T06:40:03",
                            "status": "success",
                            "message": "Validación de payload exitosa para ROC-203. Generando IDOC para SAP."
                        },
                        {
                            "timestamp": "2025-12-10T07:00:00",
                            "status": "success",
                            "message": "IDOC generado y enviado a SAP Prod. IDOC: 80070099831."
                        }
                    ]
                },
                {
                    "id": "sap_prod",
                    "name": "SAP Prod",
                    "events": [
                        {
                            "timestamp": "2025-12-11T00:47:12",
                            "status": "success",
                            "message": "IDOC 80070099831 recibido en SAP Prod. Iniciando proceso de orden/factura para ROC-203."
                        },
                        {
                            "timestamp": "2025-12-11T01:30:00",
                            "status": "success",
                            "message": "Proceso SAP completado para ROC-203. Listo para timbrado preliminar (PAC)."
                        }
                    ]
                },
                { "id": "pac", "name": "PAC", "events": [] },
                { "id": "sat", "name": "SAT", "events": [] }
            ]
        },
        {
            "trip_id": 10,
            "trip_name": "ROC-204",
            "stages": [
                {
                    "id": "tms",
                    "name": "TMS",
                    "events": [
                        {
                            "timestamp": "2025-12-08T14:21:44",
                            "status": "success",
                            "message": "Viaje ROC-204 creado. Cliente: Roche. Registro y validaciones operativas iniciadas."
                        },
                        {
                            "timestamp": "2025-12-08T14:58:00",
                            "status": "success",
                            "message": "Validaciones TMS completadas para ROC-204. Envío a MuleSoft habilitado."
                        }
                    ]
                },
                {
                    "id": "mulesoft",
                    "name": "MuleSoft",
                    "events": [
                        {
                            "timestamp": "2025-12-08T20:12:12",
                            "status": "success",
                            "message": "Shipment ROC-204 recibido desde TMS. Correlation ID: CORR-ROC204-2B71."
                        },
                        {
                            "timestamp": "2025-12-08T20:35:40",
                            "status": "success",
                            "message": "Validación de payload exitosa para ROC-204. Generando IDOC para SAP."
                        },
                        {
                            "timestamp": "2025-12-08T21:05:00",
                            "status": "success",
                            "message": "IDOC generado y enviado a SAP Prod. IDOC: 80081233490."
                        }
                    ]
                },
                {
                    "id": "sap_prod",
                    "name": "SAP Prod",
                    "events": [
                        {
                            "timestamp": "2025-12-09T00:42:10",
                            "status": "success",
                            "message": "IDOC 80081233490 recibido en SAP Prod. Iniciando proceso de orden/factura para ROC-204."
                        },
                        {
                            "timestamp": "2025-12-09T01:25:00",
                            "status": "success",
                            "message": "Proceso SAP completado para ROC-204. Listo para timbrado preliminar (PAC)."
                        }
                    ]
                },
                {
                    "id": "pac",
                    "name": "PAC",
                    "events": [
                        {
                            "timestamp": "2025-12-09T09:15:22",
                            "status": "success",
                            "message": "Solicitud de timbrado preliminar recibida para ROC-204. Ref: PAC-REQ-ROC204-7D01."
                        },
                        {
                            "timestamp": "2025-12-09T10:20:00",
                            "status": "success",
                            "message": "Timbrado preliminar exitoso para ROC-204. UUID: 4e3d2a10-2b9b-4d34-9b0d-5a4cc52deaa9."
                        }
                    ]
                },
                {
                    "id": "sat",
                    "name": "SAT",
                    "events": [
                        {
                            "timestamp": "2025-12-09T14:33:40",
                            "status": "success",
                            "message": "Validación SAT iniciada para ROC-204."
                        },
                        {
                            "timestamp": "2025-12-09T14:58:00",
                            "status": "success",
                            "message": "Validación SAT exitosa para ROC-204. CFDI confirmado."
                        }
                    ]
                }
            ]
        }
    ]
};

export default initialData;