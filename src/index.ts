// SPDX-License-Identifier: LicenseRef-Vorion-Proprietary
// Copyright 2024-2026 Vorion LLC

/**
 * @vorionsys/car-cli
 *
 * Programmatic API for CAR CLI commands.
 */

export { createCARClient, CARClient, CARError } from "@vorionsys/car-client";

// Backwards-compatible aliases (deprecated)
export {
  createCARClient as createACIClient,
  CARClient as ACIClient,
  CARError as ACIError,
} from "@vorionsys/car-client";

export * from "@vorionsys/car-client";
