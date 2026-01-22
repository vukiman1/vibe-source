---
description: Synchronize API changes between backend and frontend
---

# Async API Feature Workflow

Use this workflow when implementing a feature that requires both a new backend endpoint and a frontend integration.

1. **Plan Backend First**:
   - Define the DTO in `backend/src/api/.../dto`.
   - Implement the controller and service.
   - Verify the endpoint works (e.g., using Swagger or curl).

2. **Synchronize Types**:
   - Copy or re-implement the response data structure into `frontend/src/types/`.
   - Ensure the `ApiResponse<T>` wrapper is used.

3. **Implement Frontend Service**:
   - Add the endpoint to the relevant service in `frontend/src/services/`.
   - Use the `api` (HttpClient) helper.

4. **Implement Frontend Action/UI**:
   - Create a Server Action in `frontend/src/actions/` if needed.
   - Update the UI components to call the service or action.

5. **Verify End-to-End**:
   - Run both BE and FE.
   - Test the flow in the browser.
