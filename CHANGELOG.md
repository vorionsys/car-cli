# Changelog

## 1.0.1

### Patch Changes

- f9a6164: Extract `car-cli` into its own standalone repository (`vorionsys/car-cli`) with tokenless OIDC trusted publishing + provenance. Depends on `@vorionsys/car-client@^1.0.0` (resolved from npm). Relicensed Apache-2.0.

All notable changes to `@vorionsys/car-cli` will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-03-16

### Added

- Initial public release of the CAR CLI.
- `car stats` -- display dashboard statistics (context counts, compliance, role-gate decisions, tier distribution).
- `car evaluate <agentId> <role>` -- evaluate role gates through the 3-layer Kernel / Policy / BASIS pipeline.
- `car ceiling <agentId> <score>` -- check proposed trust scores against regulatory ceilings and compliance frameworks.
- `car provenance <agentId>` -- inspect agent provenance records and lineage chains.
- `car alerts [status]` -- list and filter gaming/anomaly alerts by status and severity.
- `car presets` -- browse the federated weight-preset hierarchy (CAR / Vorion / Axiom).
- Environment-variable configuration (`CAR_API_URL`, `CAR_API_KEY`, `VORION_BASE_URL`, `VORION_API_KEY`).
- Programmatic re-export of the full `@vorionsys/car-client` SDK.
