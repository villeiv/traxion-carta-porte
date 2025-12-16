const initialData = {
    "stages": [
        {"id": 1, "name": "TMS"},
        {"id": 2, "name": "MuleSoft"},
        {"id": 3, "name": "SAP Prod"},
        {"id": 4, "name": "PAC"},
        {"id": 5, "name": "SAT"}
    ],
    "trip_stage_status": [
        {
            "id": 1,
            "trip_id": 1,
            "name": "FST-001",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-08T12:00:00Z",
            "trip_actual_start_at": "2025-12-08T12:18:00Z",
            "trip_planned_end_at": "2025-12-08T22:00:00Z",
            "trip_actual_end_at": "2025-12-08T21:42:00Z",
            "stage_id": 1,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de licencia del conductor", "status": "completed"},
                {"label": "Validación de documentación de la unidad", "status": "completed"},
                {"label": "Verificación de datos del viaje (origen/destino)", "status": "completed"},
                {"label": "Confirmación de disponibilidad de operador", "status": "completed"},
                {"label": "Registro de unidad en plataforma TMS", "status": "completed"}
            ],
            "created_at": "2025-12-08T11:10:00Z",
            "updated_at": "2025-12-08T11:34:00Z",
            "completed_at": "2025-12-08T11:34:00Z",
            "due_at": "2025-12-08T12:30:00Z"
        },
        {
            "id": 2,
            "trip_id": 2,
            "name": "FST-002",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-09T13:00:00Z",
            "trip_actual_start_at": null,
            "trip_planned_end_at": "2025-12-09T23:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 1,
            "status": "warning",
            "status_label": "warning",
            "requirements": [
                {"label": "Validación de licencia del conductor vencida", "status": "error"},
                {"label": "Validación de documentación de la unidad", "status": "completed"},
                {"label": "Verificación de datos del viaje (origen/destino)", "status": "completed"},
                {"label": "Confirmación de disponibilidad de operador", "status": "completed"},
                {"label": "Registro de unidad en plataforma TMS", "status": "completed"}
            ],
            "created_at": "2025-12-09T10:25:00Z",
            "updated_at": "2025-12-10T16:05:00Z",
            "completed_at": null,
            "due_at": "2025-12-09T14:00:00Z"
        },
        {
            "id": 3,
            "trip_id": 4,
            "name": "AZ-101",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-10T07:30:00Z",
            "trip_actual_start_at": "2025-12-10T07:28:00Z",
            "trip_planned_end_at": "2025-12-10T19:30:00Z",
            "trip_actual_end_at": "2025-12-10T19:10:00Z",
            "stage_id": 1,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de licencia del conductor", "status": "completed"},
                {"label": "Validación de documentación de la unidad", "status": "completed"},
                {"label": "Verificación de datos del viaje (origen/destino)", "status": "completed"},
                {"label": "Confirmación de disponibilidad de operador", "status": "completed"},
                {"label": "Registro de unidad en plataforma TMS", "status": "completed"}
            ],
            "created_at": "2025-12-10T06:40:00Z",
            "updated_at": "2025-12-10T07:05:00Z",
            "completed_at": "2025-12-10T07:05:00Z",
            "due_at": "2025-12-10T08:00:00Z"
        },
        {
            "id": 4,
            "trip_id": 7,
            "name": "ROC-201",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-11T14:00:00Z",
            "trip_actual_start_at": "2025-12-11T14:07:00Z",
            "trip_planned_end_at": "2025-12-11T22:00:00Z",
            "trip_actual_end_at": "2025-12-11T21:20:00Z",
            "stage_id": 1,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de licencia del conductor", "status": "completed"},
                {"label": "Validación de documentación de la unidad", "status": "completed"},
                {"label": "Verificación de datos del viaje (origen/destino)", "status": "completed"},
                {"label": "Confirmación de disponibilidad de operador", "status": "completed"},
                {"label": "Registro de unidad en plataforma TMS", "status": "completed"}
            ],
            "created_at": "2025-12-11T12:35:00Z",
            "updated_at": "2025-12-11T13:02:00Z",
            "completed_at": "2025-12-11T13:02:00Z",
            "due_at": "2025-12-11T15:00:00Z"
        },
        {
            "id": 5,
            "trip_id": 8,
            "name": "ROC-202",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-12T09:00:00Z",
            "trip_actual_start_at": "2025-12-12T09:12:00Z",
            "trip_planned_end_at": "2025-12-12T18:00:00Z",
            "trip_actual_end_at": "2025-12-12T17:55:00Z",
            "stage_id": 1,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de licencia del conductor", "status": "completed"},
                {"label": "Validación de documentación de la unidad", "status": "completed"},
                {"label": "Verificación de datos del viaje (origen/destino)", "status": "completed"},
                {"label": "Confirmación de disponibilidad de operador", "status": "completed"},
                {"label": "Registro de unidad en plataforma TMS", "status": "completed"}
            ],
            "created_at": "2025-12-12T07:10:00Z",
            "updated_at": "2025-12-12T07:55:00Z",
            "completed_at": "2025-12-12T07:55:00Z",
            "due_at": "2025-12-12T09:30:00Z"
        },

        {
            "id": 6,
            "trip_id": 3,
            "name": "FST-003",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-09T06:00:00Z",
            "trip_actual_start_at": "2025-12-09T06:22:00Z",
            "trip_planned_end_at": "2025-12-09T20:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 1,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de licencia del conductor", "status": "completed"},
                {"label": "Validación de documentación de la unidad", "status": "completed"},
                {"label": "Verificación de datos del viaje (origen/destino)", "status": "completed"},
                {"label": "Confirmación de disponibilidad de operador", "status": "completed"},
                {"label": "Registro de unidad en plataforma TMS", "status": "completed"}
            ],
            "created_at": "2025-12-09T05:10:00Z",
            "updated_at": "2025-12-09T05:48:00Z",
            "completed_at": "2025-12-09T05:48:00Z",
            "due_at": "2025-12-09T07:00:00Z"
        },
        {
            "id": 7,
            "trip_id": 3,
            "name": "FST-003",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-09T06:00:00Z",
            "trip_actual_start_at": "2025-12-09T06:22:00Z",
            "trip_planned_end_at": "2025-12-09T20:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 2,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Integración con ERP confirmada", "status": "completed"},
                {"label": "Datos del viaje enviados a MuleSoft", "status": "completed"},
                {"label": "Synchronización de estatus con sistemas externos", "status": "completed"},
                {"label": "Validación de estructura del payload", "status": "completed"}
            ],
            "created_at": "2025-12-09T10:05:00Z",
            "updated_at": "2025-12-09T10:42:00Z",
            "completed_at": "2025-12-09T10:42:00Z",
            "due_at": "2025-12-09T12:00:00Z"
        },
        {
            "id": 8,
            "trip_id": 3,
            "name": "FST-003",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-09T06:00:00Z",
            "trip_actual_start_at": "2025-12-09T06:22:00Z",
            "trip_planned_end_at": "2025-12-09T20:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 3,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Generación de orden de transporte en SAP", "status": "completed"},
                {"label": "Validación de datos de cliente en SAP", "status": "completed"},
                {"label": "Confirmación de registro contable", "status": "completed"},
                {"label": "Creación de documento de salida (si aplica)", "status": "completed"}
            ],
            "created_at": "2025-12-10T01:15:00Z",
            "updated_at": "2025-12-10T02:05:00Z",
            "completed_at": "2025-12-10T02:05:00Z",
            "due_at": "2025-12-10T04:00:00Z"
        },
        {
            "id": 9,
            "trip_id": 3,
            "name": "FST-003",
            "client": "FAST",
            "company": "Egoba",
            "trip_planned_start_at": "2025-12-09T06:00:00Z",
            "trip_actual_start_at": "2025-12-09T06:22:00Z",
            "trip_planned_end_at": "2025-12-09T20:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 4,
            "status": "warning",
            "status_label": "warning",
            "requirements": [
                {"label": "Validación de RFC emisor y receptor", "status": "completed"},
                {"label": "Timbrado preliminar de CFDI en proceso en PAC", "status": "in_progress"},
                {"label": "Validación de uso CFDI", "status": "completed"},
                {"label": "Confirmación de estructura XML", "status": "completed"}
            ],
            "created_at": "2025-12-10T18:20:00Z",
            "updated_at": "2025-12-11T03:30:00Z",
            "completed_at": null,
            "due_at": "2025-12-11T05:00:00Z"
        },

        {
            "id": 10,
            "trip_id": 5,
            "name": "AZ-102",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-08T08:00:00Z",
            "trip_actual_start_at": "2025-12-08T08:04:00Z",
            "trip_planned_end_at": "2025-12-08T22:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 1,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de licencia del conductor", "status": "completed"},
                {"label": "Validación de documentación de la unidad", "status": "completed"},
                {"label": "Verificación de datos del viaje (origen/destino)", "status": "completed"},
                {"label": "Confirmación de disponibilidad de operador", "status": "completed"},
                {"label": "Registro de unidad en plataforma TMS", "status": "completed"}
            ],
            "created_at": "2025-12-08T06:20:00Z",
            "updated_at": "2025-12-08T06:55:00Z",
            "completed_at": "2025-12-08T06:55:00Z",
            "due_at": "2025-12-08T09:00:00Z"
        },
        {
            "id": 11,
            "trip_id": 5,
            "name": "AZ-102",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-08T08:00:00Z",
            "trip_actual_start_at": "2025-12-08T08:04:00Z",
            "trip_planned_end_at": "2025-12-08T22:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 2,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Integración con ERP confirmada", "status": "completed"},
                {"label": "Datos del viaje enviados a MuleSoft", "status": "completed"},
                {"label": "Synchronización de estatus con sistemas externos", "status": "completed"},
                {"label": "Validación de estructura del payload", "status": "completed"}
            ],
            "created_at": "2025-12-08T13:10:00Z",
            "updated_at": "2025-12-08T14:00:00Z",
            "completed_at": "2025-12-08T14:00:00Z",
            "due_at": "2025-12-08T16:00:00Z"
        },
        {
            "id": 12,
            "trip_id": 5,
            "name": "AZ-102",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-08T08:00:00Z",
            "trip_actual_start_at": "2025-12-08T08:04:00Z",
            "trip_planned_end_at": "2025-12-08T22:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 3,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Generación de orden de transporte en SAP", "status": "completed"},
                {"label": "Validación de datos de cliente en SAP", "status": "completed"},
                {"label": "Confirmación de registro contable", "status": "completed"},
                {"label": "Creación de documento de salida (si aplica)", "status": "completed"}
            ],
            "created_at": "2025-12-09T02:30:00Z",
            "updated_at": "2025-12-09T03:05:00Z",
            "completed_at": "2025-12-09T03:05:00Z",
            "due_at": "2025-12-09T06:00:00Z"
        },
        {
            "id": 13,
            "trip_id": 5,
            "name": "AZ-102",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-08T08:00:00Z",
            "trip_actual_start_at": "2025-12-08T08:04:00Z",
            "trip_planned_end_at": "2025-12-08T22:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 4,
            "status": "error",
            "status_label": "error",
            "requirements": [
                {"label": "Validación de RFC emisor y receptor", "status": "completed"},
                {"label": "Timbrado preliminar de CFDI rechazado por PAC", "status": "error"},
                {"label": "Validación de uso CFDI", "status": "completed"},
                {"label": "Confirmación de estructura XML", "status": "completed"}
            ],
            "created_at": "2025-12-09T18:10:00Z",
            "updated_at": "2025-12-10T09:40:00Z",
            "completed_at": null,
            "due_at": "2025-12-10T10:30:00Z"
        },

        {
            "id": 14,
            "trip_id": 9,
            "name": "ROC-203",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-09T15:00:00Z",
            "trip_actual_start_at": "2025-12-09T15:25:00Z",
            "trip_planned_end_at": "2025-12-10T01:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 1,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de licencia del conductor", "status": "completed"},
                {"label": "Validación de documentación de la unidad", "status": "completed"},
                {"label": "Verificación de datos del viaje (origen/destino)", "status": "completed"},
                {"label": "Confirmación de disponibilidad de operador", "status": "completed"},
                {"label": "Registro de unidad en plataforma TMS", "status": "completed"}
            ],
            "created_at": "2025-12-09T12:05:00Z",
            "updated_at": "2025-12-09T12:44:00Z",
            "completed_at": "2025-12-09T12:44:00Z",
            "due_at": "2025-12-09T16:00:00Z"
        },
        {
            "id": 15,
            "trip_id": 9,
            "name": "ROC-203",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-09T15:00:00Z",
            "trip_actual_start_at": "2025-12-09T15:25:00Z",
            "trip_planned_end_at": "2025-12-10T01:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 2,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Integración con ERP confirmada", "status": "completed"},
                {"label": "Datos del viaje enviados a MuleSoft", "status": "completed"},
                {"label": "Synchronización de estatus con sistemas externos", "status": "completed"},
                {"label": "Validación de estructura del payload", "status": "completed"}
            ],
            "created_at": "2025-12-10T06:20:00Z",
            "updated_at": "2025-12-10T07:00:00Z",
            "completed_at": "2025-12-10T07:00:00Z",
            "due_at": "2025-12-10T09:00:00Z"
        },
        {
            "id": 16,
            "trip_id": 9,
            "name": "ROC-203",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-09T15:00:00Z",
            "trip_actual_start_at": "2025-12-09T15:25:00Z",
            "trip_planned_end_at": "2025-12-10T01:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 3,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Generación de orden de transporte en SAP", "status": "completed"},
                {"label": "Validación de datos de cliente en SAP", "status": "completed"},
                {"label": "Confirmación de registro contable", "status": "completed"},
                {"label": "Creación de documento de salida (si aplica)", "status": "completed"}
            ],
            "created_at": "2025-12-11T00:45:00Z",
            "updated_at": "2025-12-11T01:30:00Z",
            "completed_at": "2025-12-11T01:30:00Z",
            "due_at": "2025-12-11T03:00:00Z"
        },
        {
            "id": 17,
            "trip_id": 9,
            "name": "ROC-203",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-09T15:00:00Z",
            "trip_actual_start_at": "2025-12-09T15:25:00Z",
            "trip_planned_end_at": "2025-12-10T01:00:00Z",
            "trip_actual_end_at": null,
            "stage_id": 4,
            "status": "pending",
            "status_label": "pending",
            "requirements": [
                {"label": "Validación de RFC emisor y receptor", "status": "pending"},
                {"label": "Timbrado preliminar de CFDI pendiente en PAC", "status": "pending"},
                {"label": "Validación de uso CFDI", "status": "completed"},
                {"label": "Confirmación de estructura XML", "status": "completed"}
            ],
            "created_at": "2025-12-12T08:05:00Z",
            "updated_at": "2025-12-12T08:12:00Z",
            "completed_at": null,
            "due_at": "2025-12-12T12:00:00Z"
        },

        {
            "id": 18,
            "trip_id": 6,
            "name": "AZ-103",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-11T09:00:00Z",
            "trip_actual_start_at": "2025-12-11T09:00:00Z",
            "trip_planned_end_at": "2025-12-12T01:00:00Z",
            "trip_actual_end_at": "2025-12-12T00:35:00Z",
            "stage_id": 1,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de licencia del conductor", "status": "completed"},
                {"label": "Validación de documentación de la unidad", "status": "completed"},
                {"label": "Verificación de datos del viaje (origen/destino)", "status": "completed"},
                {"label": "Confirmación de disponibilidad de operador", "status": "completed"},
                {"label": "Registro de unidad en plataforma TMS", "status": "completed"}
            ],
            "created_at": "2025-12-11T07:55:00Z",
            "updated_at": "2025-12-11T08:30:00Z",
            "completed_at": "2025-12-11T08:30:00Z",
            "due_at": "2025-12-11T10:00:00Z"
        },
        {
            "id": 19,
            "trip_id": 6,
            "name": "AZ-103",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-11T09:00:00Z",
            "trip_actual_start_at": "2025-12-11T09:00:00Z",
            "trip_planned_end_at": "2025-12-12T01:00:00Z",
            "trip_actual_end_at": "2025-12-12T00:35:00Z",
            "stage_id": 2,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Integración con ERP confirmada", "status": "completed"},
                {"label": "Datos del viaje enviados a MuleSoft", "status": "completed"},
                {"label": "Synchronización de estatus con sistemas externos", "status": "completed"},
                {"label": "Validación de estructura del payload", "status": "completed"}
            ],
            "created_at": "2025-12-11T13:20:00Z",
            "updated_at": "2025-12-11T14:05:00Z",
            "completed_at": "2025-12-11T14:05:00Z",
            "due_at": "2025-12-11T16:00:00Z"
        },
        {
            "id": 20,
            "trip_id": 6,
            "name": "AZ-103",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-11T09:00:00Z",
            "trip_actual_start_at": "2025-12-11T09:00:00Z",
            "trip_planned_end_at": "2025-12-12T01:00:00Z",
            "trip_actual_end_at": "2025-12-12T00:35:00Z",
            "stage_id": 3,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Generación de orden de transporte en SAP", "status": "completed"},
                {"label": "Validación de datos de cliente en SAP", "status": "completed"},
                {"label": "Confirmación de registro contable", "status": "completed"},
                {"label": "Creación de documento de salida (si aplica)", "status": "completed"}
            ],
            "created_at": "2025-12-11T18:10:00Z",
            "updated_at": "2025-12-11T18:55:00Z",
            "completed_at": "2025-12-11T18:55:00Z",
            "due_at": "2025-12-11T21:00:00Z"
        },
        {
            "id": 21,
            "trip_id": 6,
            "name": "AZ-103",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-11T09:00:00Z",
            "trip_actual_start_at": "2025-12-11T09:00:00Z",
            "trip_planned_end_at": "2025-12-12T01:00:00Z",
            "trip_actual_end_at": "2025-12-12T00:35:00Z",
            "stage_id": 4,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de RFC emisor y receptor", "status": "completed"},
                {"label": "Timbrado preliminar de CFDI", "status": "completed"},
                {"label": "Validación de uso CFDI", "status": "completed"},
                {"label": "Confirmación de estructura XML", "status": "completed"}
            ],
            "created_at": "2025-12-11T22:05:00Z",
            "updated_at": "2025-12-11T23:15:00Z",
            "completed_at": "2025-12-11T23:15:00Z",
            "due_at": "2025-12-12T00:30:00Z"
        },
        {
            "id": 22,
            "trip_id": 6,
            "name": "AZ-103",
            "client": "Amazon",
            "company": "MyM",
            "trip_planned_start_at": "2025-12-11T09:00:00Z",
            "trip_actual_start_at": "2025-12-11T09:00:00Z",
            "trip_planned_end_at": "2025-12-12T01:00:00Z",
            "trip_actual_end_at": "2025-12-12T00:35:00Z",
            "stage_id": 5,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación con SAT", "status": "completed"},
                {"label": "Certificado de timbrado SAT", "status": "completed"},
                {"label": "Validación de cadena original", "status": "completed"},
                {"label": "Confirmación de sello digital válido", "status": "completed"}
            ],
            "created_at": "2025-12-12T00:05:00Z",
            "updated_at": "2025-12-12T00:28:00Z",
            "completed_at": "2025-12-12T00:28:00Z",
            "due_at": "2025-12-12T01:00:00Z"
        },

        {
            "id": 23,
            "trip_id": 10,
            "name": "ROC-204",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-08T16:00:00Z",
            "trip_actual_start_at": "2025-12-08T16:10:00Z",
            "trip_planned_end_at": "2025-12-09T02:00:00Z",
            "trip_actual_end_at": "2025-12-09T01:40:00Z",
            "stage_id": 1,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de licencia del conductor", "status": "completed"},
                {"label": "Validación de documentación de la unidad", "status": "completed"},
                {"label": "Verificación de datos del viaje (origen/destino)", "status": "completed"},
                {"label": "Confirmación de disponibilidad de operador", "status": "completed"},
                {"label": "Registro de unidad en plataforma TMS", "status": "completed"}
            ],
            "created_at": "2025-12-08T14:25:00Z",
            "updated_at": "2025-12-08T14:58:00Z",
            "completed_at": "2025-12-08T14:58:00Z",
            "due_at": "2025-12-08T17:00:00Z"
        },
        {
            "id": 24,
            "trip_id": 10,
            "name": "ROC-204",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-08T16:00:00Z",
            "trip_actual_start_at": "2025-12-08T16:10:00Z",
            "trip_planned_end_at": "2025-12-09T02:00:00Z",
            "trip_actual_end_at": "2025-12-09T01:40:00Z",
            "stage_id": 2,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Integración con ERP confirmada", "status": "completed"},
                {"label": "Datos del viaje enviados a MuleSoft", "status": "completed"},
                {"label": "Synchronización de estatus con sistemas externos", "status": "completed"},
                {"label": "Validación de estructura del payload", "status": "completed"}
            ],
            "created_at": "2025-12-08T20:10:00Z",
            "updated_at": "2025-12-08T21:05:00Z",
            "completed_at": "2025-12-08T21:05:00Z",
            "due_at": "2025-12-08T23:00:00Z"
        },
        {
            "id": 25,
            "trip_id": 10,
            "name": "ROC-204",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-08T16:00:00Z",
            "trip_actual_start_at": "2025-12-08T16:10:00Z",
            "trip_planned_end_at": "2025-12-09T02:00:00Z",
            "trip_actual_end_at": "2025-12-09T01:40:00Z",
            "stage_id": 3,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Generación de orden de transporte en SAP", "status": "completed"},
                {"label": "Validación de datos de cliente en SAP", "status": "completed"},
                {"label": "Confirmación de registro contable", "status": "completed"},
                {"label": "Creación de documento de salida (si aplica)", "status": "completed"}
            ],
            "created_at": "2025-12-09T00:40:00Z",
            "updated_at": "2025-12-09T01:25:00Z",
            "completed_at": "2025-12-09T01:25:00Z",
            "due_at": "2025-12-09T03:00:00Z"
        },
        {
            "id": 26,
            "trip_id": 10,
            "name": "ROC-204",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-08T16:00:00Z",
            "trip_actual_start_at": "2025-12-08T16:10:00Z",
            "trip_planned_end_at": "2025-12-09T02:00:00Z",
            "trip_actual_end_at": "2025-12-09T01:40:00Z",
            "stage_id": 4,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación de RFC emisor y receptor", "status": "completed"},
                {"label": "Timbrado preliminar de CFDI", "status": "completed"},
                {"label": "Validación de uso CFDI", "status": "completed"},
                {"label": "Confirmación de estructura XML", "status": "completed"}
            ],
            "created_at": "2025-12-09T09:10:00Z",
            "updated_at": "2025-12-09T10:20:00Z",
            "completed_at": "2025-12-09T10:20:00Z",
            "due_at": "2025-12-09T12:00:00Z"
        },
        {
            "id": 27,
            "trip_id": 10,
            "name": "ROC-204",
            "client": "Roche",
            "company": "Medistik",
            "trip_planned_start_at": "2025-12-08T16:00:00Z",
            "trip_actual_start_at": "2025-12-08T16:10:00Z",
            "trip_planned_end_at": "2025-12-09T02:00:00Z",
            "trip_actual_end_at": "2025-12-09T01:40:00Z",
            "stage_id": 5,
            "status": "ok",
            "status_label": "completado",
            "requirements": [
                {"label": "Validación con SAT", "status": "completed"},
                {"label": "Certificado de timbrado SAT", "status": "completed"},
                {"label": "Validación de cadena original", "status": "completed"},
                {"label": "Confirmación de sello digital válido", "status": "completed"}
            ],
            "created_at": "2025-12-09T14:30:00Z",
            "updated_at": "2025-12-09T14:58:00Z",
            "completed_at": "2025-12-09T14:58:00Z",
            "due_at": "2025-12-09T16:00:00Z"
        }
    ],
    logs: [
        {
            "tripId": 1,
            "tripName": "FST-001",
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
                {"id": "mulesoft", "name": "MuleSoft", "events": []},
                {"id": "sap_prod", "name": "SAP Prod", "events": []},
                {"id": "pac", "name": "PAC", "events": []},
                {"id": "sat", "name": "SAT", "events": []}
            ]
        },
        {
            "tripId": 2,
            "tripName": "FST-002",
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
                {"id": "mulesoft", "name": "MuleSoft", "events": []},
                {"id": "sap_prod", "name": "SAP Prod", "events": []},
                {"id": "pac", "name": "PAC", "events": []},
                {"id": "sat", "name": "SAT", "events": []}
            ]
        },
        {
            "tripId": 3,
            "tripName": "FST-003",
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
                {"id": "sat", "name": "SAT", "events": []}
            ]
        },
        {
            "tripId": 4,
            "tripName": "AZ-101",
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
                {"id": "mulesoft", "name": "MuleSoft", "events": []},
                {"id": "sap_prod", "name": "SAP Prod", "events": []},
                {"id": "pac", "name": "PAC", "events": []},
                {"id": "sat", "name": "SAT", "events": []}
            ]
        },
        {
            "tripId": 5,
            "tripName": "AZ-102",
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
                {"id": "sat", "name": "SAT", "events": []}
            ]
        },
        {
            "tripId": 6,
            "tripName": "AZ-103",
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
            "tripId": 7,
            "tripName": "ROC-201",
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
                {"id": "mulesoft", "name": "MuleSoft", "events": []},
                {"id": "sap_prod", "name": "SAP Prod", "events": []},
                {"id": "pac", "name": "PAC", "events": []},
                {"id": "sat", "name": "SAT", "events": []}
            ]
        },
        {
            "tripId": 8,
            "tripName": "ROC-202",
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
                {"id": "mulesoft", "name": "MuleSoft", "events": []},
                {"id": "sap_prod", "name": "SAP Prod", "events": []},
                {"id": "pac", "name": "PAC", "events": []},
                {"id": "sat", "name": "SAT", "events": []}
            ]
        },
        {
            "tripId": 9,
            "tripName": "ROC-203",
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
                {"id": "pac", "name": "PAC", "events": []},
                {"id": "sat", "name": "SAT", "events": []}
            ]
        },
        {
            "tripId": 10,
            "tripName": "ROC-204",
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