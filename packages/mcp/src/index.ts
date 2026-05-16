/**
 * @cc-wf-studio/mcp public API.
 *
 * Phase 3 step 1: only the adapter contract and tool registrations are
 * exported. The factory (`createWorkflowMcpServer`) lands in step 2 and the
 * bin entry (`cc-wf-mcp`) lands in step 4.
 */

export type {
  AgentCommandInfo,
  ApplyWorkflowOptions,
  ApplyWorkflowResult,
  GetCurrentWorkflowResult,
  GetWorkflowSchemaResult,
  HighlightResult,
  ListAvailableAgentsResult,
  PlannedSubAgentFile,
  WorkflowIoAdapter,
} from './types.js';

export { registerWorkflowTools } from './tools.js';
